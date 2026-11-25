'use client';

import {useEffect, useState} from 'react';

/** Final value is the SSR text. The count runs only after hydration, and only when motion is allowed. */
export function CountUp({to}: {to: number}) {
  const [n, setN] = useState(to);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const start = performance.now();
    const dur = 900;
    let raf = 0;
    setN(0);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      setN(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span className="sa-count" style={{width: `${String(to).length}ch`}}>{n}</span>;
}

const REVEALS: Array<[string, number]> = [
  ['.sa .v3-tiles li', 70],
  ['.sa .v3-quote', 0],
  ['.sa .v3-hl', 0],
  ['.sa .v3-frame', 40],
  ['.sa .ba-c', 80],
  ['.sa .sa-time .run tbody tr', 50],
];

/** Reading progress plus scroll reveals. Hidden states are added only after JS runs. */
export function PageMotion() {
  useEffect(() => {
    const bar = document.getElementById('sa-progress');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    onScroll();
    addEventListener('scroll', onScroll, {passive: true});
    addEventListener('resize', onScroll);

    const observed: Array<{el: HTMLElement; io: IntersectionObserver}> = [];
    if (!reduce) {
      for (const [sel, step] of REVEALS) {
        document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
          el.classList.add('sa-prep');
          el.style.transitionDelay = `${i * step}ms`;
          const io = new IntersectionObserver(([entry]) => {
            if (!entry?.isIntersecting) return;
            el.classList.add('sa-in');
            io.disconnect();
          }, {threshold: 0.16});
          io.observe(el);
          observed.push({el, io});
        });
      }
    }

    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      observed.forEach(({el, io}) => {
        io.disconnect();
        el.classList.remove('sa-prep', 'sa-in');
        el.style.transitionDelay = '';
      });
    };
  }, []);
  return <div id="sa-progress" className="sa-progress" aria-hidden="true"/>;
}
