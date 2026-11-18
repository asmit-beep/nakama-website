import {NextResponse} from 'next/server';
import {ERRORS, validateFreeCheck, validateGuards} from '@/lib/free-check';
import {deliverFreeCheck} from '@/lib/free-check-sink';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ok: false, error: ERRORS.generic}, {status: 400});
  }

  const record = body as Record<string, unknown>;
  const honeypot = typeof record.company === 'string' ? record.company : '';
  const guard = validateGuards({honeypot, startedAt: record.startedAt});
  if (guard) {
    return NextResponse.json({ok: false, error: guard}, {status: 400});
  }

  const result = validateFreeCheck({
    email: typeof record.email === 'string' ? record.email : '',
    siteUrl: typeof record.siteUrl === 'string' ? record.siteUrl : '',
    competitors: typeof record.competitors === 'string' ? record.competitors : '',
    prompts: typeof record.prompts === 'string' ? record.prompts : '',
  });
  if (!result.ok) {
    const error = Object.values(result.fields)[0] || ERRORS.generic;
    return NextResponse.json({ok: false, error, fields: result.fields}, {status: 400});
  }

  try {
    const delivered = await deliverFreeCheck(result.payload);
    if (!delivered.ok) {
      return NextResponse.json({ok: false, error: ERRORS.generic}, {status: delivered.status});
    }
    return NextResponse.json({ok: true});
  } catch {
    return NextResponse.json({ok: false, error: ERRORS.generic}, {status: 503});
  }
}
