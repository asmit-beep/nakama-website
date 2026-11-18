import {NextResponse} from 'next/server';
import {
  ERRORS, HONEYPOT_NAME, newRequestId, parseAttribution, validateFreeCheck, validateGuards,
} from '@/lib/free-check';
import {deliverFreeCheck} from '@/lib/free-check-sink';

export const runtime = 'nodejs';

const ROBOTS = {'X-Robots-Tag': 'noindex, nofollow'};
const MAX_BODY = 16384;
const ALLOWED_ORIGINS = new Set(['https://www.nakama.in', 'https://nakama.in']);

function json(body: unknown, status: number) {
  return NextResponse.json(body, {status, headers: ROBOTS});
}

function isJsonContentType(req: Request): boolean {
  const raw = req.headers.get('content-type') ?? '';
  return raw.split(';')[0].trim().toLowerCase() === 'application/json';
}

function isAllowedRequest(req: Request): boolean {
  const site = (req.headers.get('sec-fetch-site') ?? '').toLowerCase();
  if (site === 'same-origin') return true;
  const origin = req.headers.get('origin') ?? '';
  return ALLOWED_ORIGINS.has(origin);
}

export function GET() {
  return new Response(null, {status: 405, headers: {...ROBOTS, Allow: 'POST'}});
}

export async function POST(req: Request) {
  const length = Number(req.headers.get('content-length'));
  if (Number.isFinite(length) && length > MAX_BODY) {
    return json({ok: false, error: ERRORS.generic}, 413);
  }

  if (!isJsonContentType(req)) {
    return json({ok: false, error: ERRORS.generic}, 415);
  }

  if (!isAllowedRequest(req)) {
    return json({ok: false, error: ERRORS.generic}, 403);
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return json({ok: false, error: ERRORS.generic}, 400);
  }

  const record = body as Record<string, unknown>;
  const honeypot = typeof record[HONEYPOT_NAME] === 'string' ? record[HONEYPOT_NAME] : '';
  const guard = validateGuards({honeypot, startedAt: record.startedAt});
  if (guard) {
    return json({ok: false, error: guard}, 400);
  }

  const result = validateFreeCheck({
    email: typeof record.email === 'string' ? record.email : '',
    siteUrl: typeof record.siteUrl === 'string' ? record.siteUrl : '',
    competitors: typeof record.competitors === 'string' ? record.competitors : '',
    prompts: typeof record.prompts === 'string' ? record.prompts : '',
  });
  if (!result.ok) {
    const error = Object.values(result.fields)[0] || ERRORS.generic;
    return json({ok: false, error, fields: result.fields}, 400);
  }

  try {
    const delivered = await deliverFreeCheck({
      ...result.payload,
      attribution: parseAttribution(record),
      requestId: newRequestId(),
    });
    if (!delivered.ok) {
      return json({ok: false, error: ERRORS.generic}, delivered.status);
    }
    return json({ok: true}, 200);
  } catch {
    return json({ok: false, error: ERRORS.generic}, 503);
  }
}
