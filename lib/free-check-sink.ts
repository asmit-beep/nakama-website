import {ERRORS, redactFreeCheck, type FreeCheckPayload} from './free-check';

export type SinkResult =
  | {ok: true}
  | {ok: false; status: 503; error: typeof ERRORS.notConfigured};

/**
 * Isolated delivery hook for free-check submissions.
 * The site has no server-side form inbox (pricing opens Cal.com; contact uses mailto),
 * so this stays a stub until a destination is approved. No new env vars.
 */
export async function deliverFreeCheck(payload: FreeCheckPayload): Promise<SinkResult> {
  console.info('free-check', redactFreeCheck(payload));
  if (process.env.VERCEL_ENV === 'production') {
    return {ok: false, status: 503, error: ERRORS.notConfigured};
  }
  return {ok: true};
}
