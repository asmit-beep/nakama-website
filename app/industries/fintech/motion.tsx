'use client';

import {useEffect} from 'react';
import {RATE_LIVE} from './copy';

/**
 * Gohan V1.0.6.1 interactions, ported from fintech-visual.js and scoped to #ft-root.
 * Server HTML carries every string; this only switches states.
 * Transform and opacity only. No loop, no WebGL. Reduced motion: instant switches.
 */
export function FintechMotion() {
 useEffect(() => {
  const d = document;
  d.documentElement.classList.add('ft-js');
  const root = d.getElementById('ft-root');
  if (!root) return;
  const cleanups: (() => void)[] = [];
  const on = <K extends keyof HTMLElementEventMap>(el: EventTarget, ev: K | string, fn: (e: Event) => void, opts?: AddEventListenerOptions) => {
   el.addEventListener(ev, fn, opts);
   cleanups.push(() => el.removeEventListener(ev, fn, opts));
  };
  const timers: number[] = [];
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  const hash = location.hash;

  /* Concept A: hero answer trace */
  const P = root.querySelector<HTMLElement>('#trail');
  if (P) {
   const T = P.querySelector<HTMLElement>('.fx-trail')!;
   const B = Array.from(root.querySelectorAll<HTMLButtonElement>('.fx-st'));
   const C = Array.from(root.querySelectorAll<HTMLElement>('.fx-scap span'));
   const L = root.querySelector<HTMLElement>('.fx-scap')!;
   const W = root.querySelector<HTMLElement>('.fx-wa');
   const g = (s: string) => T.querySelector(s)!.getBoundingClientRect();
   const geo = () => {
    const r = T.getBoundingClientRect(), c = g('.fx-cl dd'), k = g('.fx-c1'), s = g('.fx-src'), a = g('.fx-ans2'), y = T.style;
    y.setProperty('--x1', Math.round(c.right - r.left + 8) + 'px');
    y.setProperty('--y1', Math.round(c.top + c.height / 2 - r.top) + 'px');
    y.setProperty('--x2', Math.round(k.right - r.left + 5) + 'px');
    y.setProperty('--y2', Math.round(k.top + k.height / 2 - r.top) + 'px');
    y.setProperty('--xg', Math.round(r.width - parseFloat(getComputedStyle(T).paddingRight) / 2) + 'px');
    y.setProperty('--yg', Math.round((s.bottom + a.top) / 2 - r.top) + 'px');
   };
   const set = (n: number) => {
    P.setAttribute('data-s', String(n));
    B.forEach((b, i) => (i === n - 1 ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current')));
    C.forEach((c, i) => { c.hidden = i !== n - 1; });
   };
   const run = (el: HTMLElement) => requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('fx-arm')));
   let walk: number[] = [];
   const stop = () => { walk.forEach(clearTimeout); walk = []; L.setAttribute('aria-live', 'polite'); };
   const draw = () => { set(4); if (mq.matches) return; P.classList.add('fx-arm'); run(P); };
   const play = () => {
    stop();
    if (mq.matches) { set(4); return; }
    L.setAttribute('aria-live', 'off');
    set(1);
    [2, 3].forEach((n, i) => walk.push(window.setTimeout(() => set(n), 700 * (i + 1))));
    walk.push(window.setTimeout(() => { L.setAttribute('aria-live', 'polite'); draw(); }, 2100));
   };
   const once = (el: HTMLElement, t: number, fn: () => void) => {
    if (!('IntersectionObserver' in window)) { fn(); return; }
    const o = new IntersectionObserver(e => { if (e[0].isIntersecting) { o.disconnect(); fn(); } }, {threshold: t});
    o.observe(el);
    cleanups.push(() => o.disconnect());
   };
   geo();
   d.fonts?.ready.then(geo);
   on(window, 'load', geo);
   on(window, 'resize', geo, {passive: true});
   B.forEach((b, i) => on(b, 'click', () => { stop(); set(i + 1); }));
   const rp = root.querySelector<HTMLButtonElement>('.fx-rp');
   if (rp) { rp.hidden = false; on(rp, 'click', play); }
   ([['.fx-cl', 'fx-lk1'], ['.fx-c1', 'fx-lk1'], ['.fx-c2', 'fx-lk2']] as const).forEach(([sel, cls]) => {
    const e = T.querySelector(sel);
    if (!e) return;
    const add = () => P.classList.add(cls), rm = () => P.classList.remove(cls);
    on(e, 'mouseenter', add); on(e, 'mouseleave', rm); on(e, 'focus', add); on(e, 'blur', rm);
   });
   cleanups.push(stop);
   if (!mq.matches) {
    P.classList.add('fx-arm');
    once(P, .5, () => { timers.push(window.setTimeout(() => run(P), innerWidth > 760 ? 600 : 0)); });
    if (W) { W.classList.add('fx-arm'); once(W, .4, () => run(W)); }
   }
  }

  /* Concept C: rate change toggle */
  const K = root.querySelector<HTMLElement>('#rc');
  if (K) {
   const b = K.querySelector<HTMLButtonElement>('.fx-tg')!;
   const lv = root.querySelector<HTMLElement>('#rclive');
   K.classList.remove('fx-chg');
   b.setAttribute('aria-pressed', 'false');
   b.hidden = false;
   on(b, 'click', () => {
    const now = !K.classList.contains('fx-chg');
    K.classList.toggle('fx-chg', now);
    b.setAttribute('aria-pressed', String(now));
    if (lv) lv.textContent = now ? RATE_LIVE : '';
   });
  }

  /* Concept B: four market tabs. Every panel stays in the HTML; unselected panels are visibility-hidden in one grid cell. */
  const M = root.querySelector<HTMLElement>('.fx-mk');
  if (M) {
   const tabs = Array.from(M.querySelectorAll<HTMLButtonElement>('[role=tab]'));
   const panels = Array.from(M.querySelectorAll<HTMLElement>('[role=tabpanel]'));
   const sel = (i: number, focus?: boolean) => {
    tabs.forEach((x, k) => {
     const isOn = k === i;
     x.setAttribute('aria-selected', String(isOn));
     x.tabIndex = isOn ? 0 : -1;
     panels[k].setAttribute('data-on', String(isOn));
     panels[k].tabIndex = isOn ? 0 : -1;
    });
    if (focus) tabs[i].focus();
   };
   tabs.forEach((x, i) => {
    on(x, 'click', () => sel(i));
    on(x, 'keydown', e => {
     const key = (e as KeyboardEvent).key;
     const n = ({ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1} as Record<string, number>)[key];
     if (n == null) return;
     e.preventDefault();
     sel((n + tabs.length) % tabs.length, true);
    });
   });
   const ids = panels.map(x => '#' + x.id);
   Array.from(d.querySelectorAll<HTMLAnchorElement>('a[href^="#market-"]')).forEach(a => {
    on(a, 'click', () => { const k = ids.indexOf(a.getAttribute('href') || ''); if (k >= 0) sel(k); });
   });
   const hk = ids.indexOf(hash);
   sel(hk >= 0 ? hk : 0);
  }

  return () => { timers.forEach(clearTimeout); cleanups.forEach(fn => fn()); };
 }, []);
 return null;
}
