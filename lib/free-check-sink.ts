import nodemailer from 'nodemailer';
import {EMAIL_RE, ERRORS, redactFreeCheck, type FreeCheckAttribution, type FreeCheckPayload} from './free-check';

export type SinkResult =
  | {ok: true}
  | {ok: false; status: 503; error: typeof ERRORS.notConfigured};

const INBOX = 'contact@nakama.in';
const CONNECT_TIMEOUT_MS = 10_000;
const SEND_TIMEOUT_MS = 20_000;

type SmtpSendInfo = {accepted?: unknown};

function oneLine(value: string): string {
  return value.replace(/[\r\n\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+/g, ' ').trim();
}

function formatSubmittedAtIst(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(part => part.type === type)?.value ?? '';
  const period = get('dayPeriod').replace(/\./g, '').toUpperCase();
  return `${get('day')} ${get('month')} ${get('year')}, ${get('hour')}:${get('minute')} ${period} IST`;
}

function errorClass(err: unknown): string {
  if (!err || typeof err !== 'object') return 'Error';
  const e = err as {
    name?: unknown;
    code?: unknown;
    responseCode?: unknown;
    command?: unknown;
    permanent?: unknown;
  };
  const parts = [e.name, e.code, e.responseCode, e.command]
    .filter(value => value != null && value !== '')
    .map(value => String(value));
  if (e.permanent === true) parts.push('permanent');
  if (e.permanent === false) parts.push('transient');
  return parts.join(' ') || 'Error';
}

function smtpResponse(err: unknown): string | undefined {
  if (!err || typeof err !== 'object') return undefined;
  const response = (err as {response?: unknown}).response;
  if (typeof response !== 'string') return undefined;
  return response.replace(/[\r\n]+/g, ' ').slice(0, 160);
}

function recipientAccepted(info: SmtpSendInfo | null | undefined): boolean {
  const accepted = info?.accepted;
  if (!Array.isArray(accepted)) return false;
  const needle = INBOX.toLowerCase();
  return accepted.some(item => {
    const value =
      typeof item === 'string'
        ? item
        : item && typeof item === 'object' && 'address' in item
          ? String((item as {address?: unknown}).address ?? '')
          : String(item);
    return value.toLowerCase() === needle;
  });
}

function siteDomain(siteUrl: string): string {
  try {
    return new URL(siteUrl).hostname || 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Gmail may queue a message and still reply 451 after the DATA body
 * (nodemailer code EMESSAGE, command DATA). Treating that, or any later
 * timeout, as failure after the recipient was accepted makes the form show
 * the mailto fallback and invites a duplicate send.
 */
function alreadyAccepted(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false;
  const e = err as {
    accepted?: unknown;
    code?: unknown;
    responseCode?: unknown;
    command?: unknown;
    permanent?: unknown;
  };
  if (recipientAccepted(e) && e.permanent !== true) return true;
  const command = String(e.command ?? '').toUpperCase();
  const responseCode = Number(e.responseCode);
  const transient =
    e.permanent === false || (Number.isFinite(responseCode) && responseCode >= 400 && responseCode < 500);
  return e.code === 'EMESSAGE' && command === 'DATA' && responseCode === 451 && transient;
}

function buildBody(
  payload: FreeCheckPayload,
  attribution: FreeCheckAttribution,
  requestId: string,
  submittedAt: Date,
): string {
  const email = oneLine(payload.email);
  const siteUrl = oneLine(payload.siteUrl);
  const competitors = payload.competitors.length
    ? payload.competitors.map(item => oneLine(item)).filter(Boolean).join(', ')
    : '(none)';
  const prompts = payload.prompts
    .map(item => oneLine(item))
    .filter(Boolean)
    .join('\n');
  const lines = [
    `Work email: ${email}`,
    `Site URL: ${siteUrl}`,
    `Competitors: ${competitors}`,
    'Buyer prompts:',
    prompts,
    '',
  ];
  if (attribution.page) lines.push(`Page: ${oneLine(attribution.page)}`);
  if (attribution.referrer) lines.push(`Referrer: ${oneLine(attribution.referrer)}`);
  if (attribution.utmSource) lines.push(`utm_source: ${oneLine(attribution.utmSource)}`);
  if (attribution.utmMedium) lines.push(`utm_medium: ${oneLine(attribution.utmMedium)}`);
  if (attribution.utmCampaign) lines.push(`utm_campaign: ${oneLine(attribution.utmCampaign)}`);
  lines.push(`Request ID: ${oneLine(requestId)}`);
  lines.push(`Submitted: ${formatSubmittedAtIst(submittedAt)}`);
  return lines.join('\n');
}

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(Object.assign(new Error('timeout'), {code: 'ETIMEDOUT'})), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/**
 * Delivers a free-check submission to contact@nakama.in over Gmail SMTP.
 */
export async function deliverFreeCheck(
  payload: FreeCheckPayload & {attribution: FreeCheckAttribution; requestId: string},
): Promise<SinkResult> {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replaceAll(' ', '');
  if (!user || !pass) {
    console.error('free-check missing mail config');
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }

  const replyTo = oneLine(payload.email);
  if (!replyTo || /[\r\n]/.test(payload.email) || !EMAIL_RE.test(replyTo)) {
    console.error('free-check invalid reply-to', redactFreeCheck(payload));
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }

  const site = oneLine(payload.siteUrl);
  const subject = `Free AI visibility check request: ${site}`;
  const redacted = redactFreeCheck(payload);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {user, pass},
    connectionTimeout: CONNECT_TIMEOUT_MS,
    greetingTimeout: CONNECT_TIMEOUT_MS,
    socketTimeout: SEND_TIMEOUT_MS,
  });

  let accepted = false;
  let acceptedAfterError = false;
  const sendPromise = transporter
    .sendMail({
      from: `"Nakama website" <${INBOX}>`,
      to: INBOX,
      replyTo: {name: '', address: replyTo},
      subject,
      text: buildBody(payload, payload.attribution, payload.requestId, new Date()),
    })
    .then(info => {
      if (recipientAccepted(info)) accepted = true;
      return info;
    })
    .catch(err => {
      if (alreadyAccepted(err)) {
        accepted = true;
        acceptedAfterError = true;
        return err as SmtpSendInfo;
      }
      throw err;
    });

  // Close only after sendMail settles, and never await it. Closing from a
  // send-timeout path would abort an in-flight DATA that Gmail may already
  // have queued. Catch the finally-chain rejection so a failed send does
  // not become an unhandledRejection.
  void sendPromise.finally(() => {
    transporter.close();
  }).catch(() => {});

  try {
    const info = await withTimeout(sendPromise, SEND_TIMEOUT_MS);
    if (accepted || recipientAccepted(info)) {
      if (acceptedAfterError) {
        console.warn('free-check sent', {
          class: 'accepted-after-451',
          requestId: payload.requestId,
          site: siteDomain(site),
        });
      } else {
        console.info('free-check sent', redacted);
      }
      return {ok: true};
    }
    console.error('free-check send failed', {...redacted, class: 'no-accepted-recipients'});
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  } catch (err) {
    if (accepted) {
      if (acceptedAfterError) {
        console.warn('free-check sent', {
          class: 'accepted-after-451',
          requestId: payload.requestId,
          site: siteDomain(site),
        });
      } else {
        console.info('free-check sent', {...redacted, class: errorClass(err)});
      }
      return {ok: true};
    }
    const response = smtpResponse(err);
    console.error('free-check send failed', {
      ...redacted,
      class: errorClass(err),
      ...(response ? {response} : {}),
    });
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }
}
