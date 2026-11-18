import {NextResponse} from 'next/server';
import {
  ERRORS, HONEYPOT_NAME, newRequestId, parseAttribution, validateFreeCheck, validateGuards,
} from '@/lib/free-check';
import {deliverFreeCheck} from '@/lib/free-check-sink';

export const runtime = 'nodejs';

const ROBOTS = {'X-Robots-Tag': 'noindex, nofollow'};

function json(body: unknown, status: number) {
  return NextResponse.json(body, {status, headers: ROBOTS});
}

export function GET() {
  return new Response(null, {status: 405, headers: {...ROBOTS, Allow: 'POST'}});
}

export async function POST(req: Request) {
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
