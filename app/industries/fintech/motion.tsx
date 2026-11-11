'use client';

import {useEffect} from 'react';
import {startCycle} from './cycle';

/**
 * Gohan page comp v1.0.6.6 and cycle card V1.3.2 interactions, scoped to #ft-root.
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
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  const hash = location.hash;

  /* Hero cycle card: continuous loop through the 4 states (cycle.ts). */
  const cc = root.querySelector<HTMLElement>('.fx-cycle');
  if (cc) cleanups.push(startCycle(cc));

  /* Section 04: the strike on each "AI said" line draws once on view; under reduced motion it is already drawn. */
  const W = root.querySelector<HTMLElement>('.fx-wa');
  if (W && !mq.matches) {
   W.classList.add('fx-arm');
   const run = () => requestAnimationFrame(() => requestAnimationFrame(() => W.classList.remove('fx-arm')));
   if (!('IntersectionObserver' in window)) run();
   else {
    const o = new IntersectionObserver(e => { if (e[0].isIntersecting) { o.disconnect(); run(); } }, {threshold: .4});
    o.observe(W);
    cleanups.push(() => o.disconnect());
   }
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

  return () => { cleanups.forEach(fn => fn()); };
 }, []);
 return null;
}
