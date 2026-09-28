"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

type LogoItem = { node: ReactNode };

type Props = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  logoHeight?: number;
  fadeOut?: boolean;
  pauseOnHover?: boolean;
  ariaLabel?: string;
};

function useInViewAndVisible(ref: RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.IntersectionObserver) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry?.isIntersecting ?? false));
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState !== "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return inView && visible;
}

export const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 26,
  direction = "left",
  gap = 12,
  logoHeight = 40,
  fadeOut = true,
  pauseOnHover = true,
  ariaLabel = "Example prompts",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const live = useInViewAndVisible(rootRef);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const [seqW, setSeqW] = useState(0);
  const [copies, setCopies] = useState(2);
  const [hovering, setHovering] = useState(false);

  const hoverSpeed = pauseOnHover ? 0 : undefined;
  const vertical = false;
  const targetVelocity = Math.abs(speed) * (direction === "left" ? 1 : -1);

  const measure = useCallback(() => {
    const rootW = rootRef.current?.clientWidth ?? 0;
    const w = listRef.current?.getBoundingClientRect().width ?? 0;
    if (w > 0) {
      setSeqW(Math.ceil(w));
      setCopies(Math.max(2, Math.ceil(rootW / w) + 2));
    }
  }, []);

  useEffect(() => {
    if (!window.ResizeObserver) {
      const onResize = () => measure();
      window.addEventListener("resize", onResize);
      measure();
      return () => window.removeEventListener("resize", onResize);
    }
    const observers = [rootRef, listRef].map((r) => {
      if (!r.current) return null;
      const ro = new ResizeObserver(measure);
      ro.observe(r.current);
      return ro;
    });
    measure();
    return () => observers.forEach((o) => o?.disconnect());
  }, [measure, logos, gap, logoHeight]);

  const run = live && !reduceMotion;
  const offset = useRef(0);
  const vel = useRef(0);
  const last = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !run) return;
    const t = seqW;
    if (t > 0) {
      offset.current = ((offset.current % t) + t) % t;
      track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
    }
    const tick = (now: number) => {
      if (last.current === null) last.current = now;
      const dt = Math.max(0, now - last.current) / 1000;
      last.current = now;
      const target = hovering && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const k = 1 - Math.exp(-dt / 0.25);
      vel.current += (target - vel.current) * k;
      if (t > 0) {
        offset.current = (((offset.current + vel.current * dt) % t) + t) % t;
        track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
      last.current = null;
    };
  }, [targetVelocity, seqW, hovering, hoverSpeed, vertical, run]);

  const vars = useMemo(
    () =>
      ({
        width: "100%",
        ["--logoloop-gap"]: `${gap}px`,
        ["--logoloop-logoHeight"]: `${logoHeight}px`,
      }) as CSSProperties,
    [gap, logoHeight],
  );

  const lists = useMemo(
    () =>
      Array.from({ length: copies }, (_, copy) => (
        <ul
          key={`copy-${copy}`}
          className="logoloop__list"
          role="list"
          aria-hidden={copy > 0}
          ref={copy === 0 ? listRef : undefined}
        >
          {logos.map((item, i) => (
            <li className="logoloop__item" role="listitem" key={`${copy}-${i}`}>
              <span className="logoloop__node">{item.node}</span>
            </li>
          ))}
        </ul>
      )),
    [copies, logos],
  );

  return (
    <div
      ref={rootRef}
      className={`logoloop logoloop--horizontal${fadeOut ? " logoloop--fade" : ""}`}
      style={vars}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={() => pauseOnHover && setHovering(true)}
        onMouseLeave={() => pauseOnHover && setHovering(false)}
      >
        {lists}
      </div>
    </div>
  );
});