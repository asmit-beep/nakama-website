/** Shared client and server rules for the free AI visibility check form. */

export const MIN_SUBMIT_MS = 3000;
export const MAX_SUBMIT_AGE_MS = 24 * 60 * 60 * 1000;
export const MAX_COMPETITORS = 3;
export const MIN_PROMPTS = 1;
export const MAX_PROMPTS = 3;
export const MAX_EMAIL = 200;
export const MAX_SITE = 300;
export const MAX_COMPETITOR = 200;
export const MAX_PROMPT = 500;

export const ERRORS = {
  emailRequired: 'Enter a work email.',
  emailInvalid: 'Enter a valid work email.',
  siteRequired: 'Enter a site URL.',
  siteInvalid: 'Enter a site URL, such as company.com.',
  competitors: 'Enter up to 3 competitors, separated by commas.',
  prompts: 'Enter 1 to 3 buyer prompts, one per line.',
  generic: 'We could not send your request. Please try again.',
  notConfigured: 'not configured',
} as const;

export type FieldKey = 'email' | 'siteUrl' | 'competitors' | 'prompts';
export type FieldErrors = Partial<Record<FieldKey, string>>;

export type FreeCheckInput = {
  email: string;
  siteUrl: string;
  competitors: string;
  prompts: string;
};

export type FreeCheckPayload = {
  email: string;
  siteUrl: string;
  competitors: string[];
  prompts: string[];
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseCompetitors(raw: string): string[] {
  return raw.split(',').map(part => part.trim()).filter(Boolean);
}

export function parsePrompts(raw: string): string[] {
  return raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
}

/** Accept a bare domain or a URL and return a https URL, or null if invalid. */
export function normalizeSiteUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed || /\s/.test(trimmed)) return null;
  if (/^(javascript|data|file|vbscript):/i.test(trimmed)) return null;

  let candidate = trimmed;
  if (!/^[a-zA-Z][a-zA-Z+.-]*:/.test(candidate)) {
    candidate = `https://${candidate.replace(/^\/\//, '')}`;
  }

  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

  const host = url.hostname.replace(/\.$/, '').toLowerCase();
  if (!host || host.length > 253) return null;
  if (!/^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/.test(host)) return null;
  const labels = host.split('.');
  if (labels.some(label => !label || label.length > 63 || label.startsWith('-') || label.endsWith('-'))) {
    return null;
  }
  const tld = labels[labels.length - 1];
  if (!/^[a-z]{2,}$/.test(tld)) return null;

  url.protocol = 'https:';
  url.username = '';
  url.password = '';
  url.hash = '';
  const path = url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '');
  return `${url.origin}${path}${url.search}`;
}

export function validateFreeCheck(
  input: FreeCheckInput,
): {ok: true; payload: FreeCheckPayload} | {ok: false; fields: FieldErrors} {
  const fields: FieldErrors = {};

  const email = input.email.trim();
  if (!email) fields.email = ERRORS.emailRequired;
  else if (email.length > MAX_EMAIL || !EMAIL_RE.test(email)) fields.email = ERRORS.emailInvalid;

  const siteRaw = input.siteUrl.trim();
  const siteUrl = siteRaw ? normalizeSiteUrl(siteRaw) : null;
  if (!siteRaw) fields.siteUrl = ERRORS.siteRequired;
  else if (!siteUrl || siteRaw.length > MAX_SITE) fields.siteUrl = ERRORS.siteInvalid;

  const competitors = parseCompetitors(input.competitors);
  if (competitors.length > MAX_COMPETITORS || competitors.some(item => item.length > MAX_COMPETITOR)) {
    fields.competitors = ERRORS.competitors;
  }

  const prompts = parsePrompts(input.prompts);
  if (
    prompts.length < MIN_PROMPTS ||
    prompts.length > MAX_PROMPTS ||
    prompts.some(item => item.length > MAX_PROMPT)
  ) {
    fields.prompts = ERRORS.prompts;
  }

  if (Object.keys(fields).length) return {ok: false, fields};
  return {ok: true, payload: {email, siteUrl: siteUrl as string, competitors, prompts}};
}

export function validateGuards(opts: {honeypot: string; startedAt: unknown; now?: number}): string | null {
  if (String(opts.honeypot || '').trim()) return ERRORS.generic;
  const now = opts.now ?? Date.now();
  const started = typeof opts.startedAt === 'number' ? opts.startedAt : Number(opts.startedAt);
  if (!Number.isFinite(started)) return ERRORS.generic;
  const elapsed = now - started;
  if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_SUBMIT_AGE_MS) return ERRORS.generic;
  return null;
}

export function redactFreeCheck(payload: FreeCheckPayload) {
  const at = payload.email.indexOf('@');
  const masked = at > 0
    ? `${payload.email[0]}***@${payload.email.slice(at + 1)}`
    : '***';
  return {
    email: masked,
    siteUrl: payload.siteUrl,
    competitors: payload.competitors.length,
    prompts: payload.prompts.length,
  };
}
