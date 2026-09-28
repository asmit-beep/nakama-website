"use client";

import { useEffect, useState, type MutableRefObject } from "react";

/** Closest step card to a viewport scan line — BLM workflow pattern. */
export function useScrollSpy(
  refs: MutableRefObject<Array<HTMLElement | null>>,
  line = 0.38,
) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.innerHeight * line;
      let best = 0;
      let bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < 72 || r.top > window.innerHeight - 48) return;
        const anchor = r.top + Math.min(52, r.height * 0.32);
        const dist = Math.abs(anchor - y);
        if (dist < bestDist) {
          best = i;
          bestDist = dist;
        }
      });
      setActive((cur) => (cur === best ? cur : best));
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [refs, line]);

  return [active, setActive] as const;
}