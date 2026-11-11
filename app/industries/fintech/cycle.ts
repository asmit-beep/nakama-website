import {CC_STOPPED} from './copy';

/**
 * Hero cycle card, one pass then rest (Gohan comp V1.3.2 cycle-card.js, ported; Dodai guardrail re-check).
 * Starts only after LCP, 1 s after load and with half the card in view; never restarts on its own.
 * Sticky Pause button; any prompt press stops auto-advance for the session. Reduced motion: no
 * auto-advance, state 4 static, prompts still switch instantly. CSS transitions only.
 * Returns a cleanup for soft navigation.
 */
export function startCycle(r: HTMLElement): () => void {
 const d = document, w = window, cs = getComputedStyle(r), v = (n: string) => parseFloat(cs.getPropertyValue('--fx-' + n));
 const H = v('hold'), SD = v('start-delay'), RM = v('resume-min'), EX = v('exit-dur'), rm = matchMedia('(prefers-reduced-motion: reduce)');
 const P = Array.from(r.querySelectorAll<HTMLElement>('.cc-p')), B = r.querySelector<HTMLButtonElement>('.cc-pause')!, pn = r.querySelector<HTMLElement>('.cc-panel')!;
 const LV = r.querySelector<HTMLElement>('.cc-live')!, L = (n: number) => r.querySelectorAll('.cc-l[data-s="' + (n + 1) + '"]'), soft = new Set<string>();
 const offs: (() => void)[] = [], T: number[] = [];
 const on = (e: EventTarget, t: string, f: (ev: any) => void) => { e.addEventListener(t, f); offs.push(() => e.removeEventListener(t, f)); };
 let i = 3, rem = H, t = 0, t0 = 0, xo = 0, run1 = 0, done = 0, user = false, chose = 0, vis = 0, lcp = 0, ld = 0, gate = 0;
 const show = (n: number) => {
  if (n == i) return;
  const o = i; i = n; clearTimeout(xo);
  r.querySelectorAll('.is-in,.is-out').forEach(e => e.classList.remove('is-in', 'is-out'));
  if (!rm.matches) { L(o).forEach(e => e.classList.add('is-out')); xo = w.setTimeout(() => L(o).forEach(e => e.classList.remove('is-out')), EX); }
  L(n).forEach(e => e.classList.add('is-in'));
  P.forEach((b, k) => b.setAttribute('aria-pressed', String(k == n)));
  r.dataset.s = String(n + 1);
 };
 const stop = (u: number) => {
  if (done) return; done = 1; clearTimeout(t); t = 0;
  if (d.activeElement == B) P[i].focus({preventScroll: true});
  B.disabled = true; B.classList.add('gone');
  if (u && !rm.matches) LV.textContent = CC_STOPPED;
 };
 const run = () => { clearTimeout(t); t = 0; if (!run1 || done || user || soft.size) return; t0 = Date.now(); t = w.setTimeout(next, rem); };
 const hold = () => { if (t) { clearTimeout(t); t = 0; rem -= Date.now() - t0; } };
 const next = () => { t = 0; show(i + 1); if (i == 3) stop(0); else { rem = H; run(); } };
 const begin = () => { if (run1 || done || chose || rm.matches) return; run1 = 1; show(0); rem = H; run(); };
 const check = () => { if (!gate && vis && lcp && ld && !rm.matches) { gate = 1; T.push(w.setTimeout(() => { if (!user) begin(); }, SD)); } };
 const sp = (k: string, a: boolean) => {
  if (a) { soft.add(k); hold(); } else if (soft.delete(k) && !soft.size && !user && run1 && !done) { rem = Math.max(rem, RM); run(); }
 };
 P.forEach((b, k) => {
  on(b, 'keydown', (e: KeyboardEvent) => { if (e.key == 'Enter') { e.preventDefault(); b.click(); } else if (e.key == ' ') e.preventDefault(); });
  on(b, 'keyup', (e: KeyboardEvent) => { if (e.key == ' ') b.click(); });
  on(b, 'click', () => { if (!chose) { chose = 1; pn.setAttribute('aria-live', 'polite'); } stop(1); show(k); });
 });
 on(B, 'click', () => { if (done) return; user = !user; B.setAttribute('aria-pressed', String(user)); if (user) hold(); else if (run1) run(); else if (gate) begin(); });
 const hv = (e: Event) => (e.target as Element).closest?.('.cc-p,.cc-panel');
 on(r, 'mouseover', (e: Event) => sp('h', !!hv(e)));
 on(r, 'mouseleave', () => sp('h', false));
 on(r, 'focusin', (e: Event) => sp('f', !!hv(e)));
 on(r, 'focusout', (e: FocusEvent) => { const n = e.relatedTarget as Element | null; if (!n || !r.contains(n) || !n.closest('.cc-p,.cc-panel')) sp('f', false); });
 on(d, 'visibilitychange', () => sp('v', d.hidden));
 const io = new IntersectionObserver(([e]) => { const a = e.intersectionRatio >= .5; sp('o', !a); if (a) { vis = 1; check(); } }, {threshold: [0, .5]});
 io.observe(r);
 const ok = () => { lcp = 1; check(); };
 let po: PerformanceObserver | undefined;
 /* No LCP API (older Safari): fall back to the load event; the 1 s after load gate still applies. */
 if (PerformanceObserver.supportedEntryTypes?.includes('largest-contentful-paint')) { po = new PerformanceObserver(ok); po.observe({type: 'largest-contentful-paint', buffered: true}); } else on(w, 'load', ok);
 const go = () => T.push(w.setTimeout(() => { ld = 1; check(); }, 1000));
 if (d.readyState == 'complete') go(); else on(w, 'load', go);
 return () => { [t, xo, ...T].forEach(clearTimeout); io.disconnect(); po?.disconnect(); offs.forEach(f => f()); };
}
