import nodemailer from 'nodemailer';
import {ERRORS, redactFreeCheck, type FreeCheckAttribution, type FreeCheckPayload} from './free-check';

export type SinkResult =
  | {ok: true}
  | {ok: false; status: 503; error: typeof ERRORS.notConfigured};

const INBOX = 'contact@nakama.in';
const SEND_TIMEOUT_MS = 10_000;

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
  const e = err as {name?: unknown; code?: unknown; responseCode?: unknown; command?: unknown};
  const parts = [e.name, e.code, e.responseCode, e.command]
    .filter(value => value != null && value !== '')
    .map(value => String(value));
  return parts.join(' ') || 'Error';
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
  if (!replyTo || /[\r\n]/.test(payload.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
    console.error('free-check invalid reply-to', redactFreeCheck(payload));
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }

  const site = oneLine(payload.siteUrl);
  const subject = `Free AI visibility check request: ${site}`;
  const redacted = redactFreeCheck(payload);

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {user, pass},
      connectionTimeout: SEND_TIMEOUT_MS,
      greetingTimeout: SEND_TIMEOUT_MS,
      socketTimeout: SEND_TIMEOUT_MS,
    });

    await withTimeout(
      transporter.sendMail({
        from: `"Nakama website" <${INBOX}>`,
        to: INBOX,
        replyTo,
        subject,
        text: buildBody(payload, payload.attribution, payload.requestId, new Date()),
      }),
      SEND_TIMEOUT_MS,
    );

    console.info('free-check sent', redacted);
    return {ok: true};
  } catch (err) {
    console.error('free-check send failed', {...redacted, class: errorClass(err)});
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }
}
