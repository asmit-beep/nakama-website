/**
 * Hero cycle card, continuous loop (Yash, 12 Nov 2026: no clicking, no Pause button).
 * Order: lending, crypto, insurtech, payments, then back to lending. Starts only after LCP,
 * 1 s after load and with half the card in view (Dodai gate, unchanged).
 * Holds (timer paused, remaining time kept) while the card is under half in view, the tab is
 * hidden, the pointer is over the card or focus is inside it; resumes when all of those clear.
 * Reduced motion: never starts, so the server rest state (4, payments) stays. No aria-live:
 * state changes are not announced; the panel keeps one static sr-only caption.
 * CSS transitions only. Returns a cleanup for soft navigation.
 */
export function startCycle(r: HTMLElement): () => void {
 const d = document, w = window, cs = getComputedStyle(r), v = (n: string) => parseFloat(cs.getPropertyValue('--fx-' + n));
 const H = v('hold'), H4 = v('hold-loop4'), SD = v('start-delay'), RM = v('resume-min'), EX = v('exit-dur');
 const rm = matchMedia('(prefers-reduced-motion: reduce)'), P = r.querySelectorAll('.cc-p');
 const L = (n: number) => r.querySelectorAll('.cc-l[data-s="' + (n + 1) + '"]'), hold = new Set<string>();
 const offs: (() => void)[] = [], T: number[] = [];
 const on = (e: EventTarget, t: string, f: (ev: any) => void) => { e.addEventListener(t, f); offs.push(() => e.removeEventListener(t, f)); };
 let i = 3, rem = 0, t = 0, t0 = 0, xo = 0, run1 = 0, vis = 0, lcp = 0, ld = 0, gate = 0;
 const show = (n: number) => {
  const o = i; i = n; clearTimeout(xo);
  r.querySelectorAll('.is-in,.is-out').forEach(e => e.classList.remove('is-in', 'is-out'));
  if (!rm.matches) { L(o).forEach(e => e.classList.add('is-out')); xo = w.setTimeout(() => L(o).forEach(e => e.classList.remove('is-out')), EX); }
  L(n).forEach(e => e.classList.add('is-in'));
  P.forEach((p, k) => p.classList.toggle('is-on', k == n));
  r.dataset.s = String(n + 1);
 };
 const stop = () => { if (t) { clearTimeout(t); t = 0; rem -= Date.now() - t0; } };
 const run = () => { if (!run1 || t || hold.size || rm.matches) return; t0 = Date.now(); t = w.setTimeout(next, rem); };
 const next = () => { t = 0; show((i + 1) % 4); rem = i == 3 ? H4 : H; run(); };
 const begin = () => { if (run1 || rm.matches) return; run1 = 1; show(0); rem = H; run(); };
 const check = () => { if (!gate && vis && lcp && ld && !rm.matches) { gate = 1; T.push(w.setTimeout(begin, SD)); } };
 const sp = (k: string, a: boolean) => {
  if (a) { hold.add(k); stop(); } else if (hold.delete(k) && !hold.size && run1) { rem = Math.max(rem, RM); run(); }
 };
 on(r, 'mouseenter', () => sp('h', true));
 on(r, 'mouseleave', () => sp('h', false));
 on(r, 'focusin', () => sp('f', true));
 on(r, 'focusout', (e: FocusEvent) => { if (!r.contains(e.relatedTarget as Node)) sp('f', false); });
 on(d, 'visibilitychange', () => sp('v', d.hidden));
 /* Reduced motion switched on mid-loop: stop and go back to the rest state. */
 on(rm, 'change', () => { if (rm.matches) { stop(); if (i != 3) show(3); } else { rem = Math.max(rem, RM); run(); } });
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
