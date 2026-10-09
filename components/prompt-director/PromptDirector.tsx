"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import { LogoLoop } from "./LogoLoop";
import { burstDx, NODES, PROMPT_ROWS, type Chip } from "./prompts";
import "./prompt-director.css";

const RAIL_PATH =
  "M1172.34 0.000105112C1160.47 0.000271893 1150.84 9.6261 1150.84 21.5001L1150.84 98.5001C1150.84 109.822 1141.67 119 1130.34 119L292.656 119C281.334 119 272.156 109.822 272.156 98.5L272.156 21.5C272.156 9.62603 262.53 0.000156486 250.656 2.45358e-05L-2.50003 2.40413e-06L-2.50003 1L250.656 1.00002C261.978 1.00016 271.156 10.1783 271.156 21.5L271.156 150.5C271.156 162.374 280.782 172 292.656 172L1130.34 172C1142.22 172 1151.84 162.374 1151.84 150.5L1151.84 21.5001C1151.84 10.1784 1161.02 1.00027 1172.34 1.00011L1421.5 1.00013L1421.5 0.000126894L1172.34 0.000105112ZM1150.84 150.5C1150.84 161.822 1141.67 171 1130.34 171L292.656 171C281.334 171 272.156 161.822 272.156 150.5L272.156 104.995C274.91 113.694 283.046 120 292.656 120L1130.34 120C1139.95 120 1148.09 113.694 1150.84 104.995L1150.84 150.5Z";

function useInView<T extends HTMLElement>(margin = "-12%") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function ChipButton({ chip, onPick }: { chip: Chip; onPick: (full: string) => void }) {
  const Icon = chip.Icon;
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={`Use prompt: ${chip.full}`}
      onClick={() => onPick(chip.full)}
      className="pd-chip"
    >
      <Icon />
      <span className="pd-chip-label">{chip.short}</span>
    </button>
  );
}

function Underline() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full">
      <svg viewBox="0 0 220 12" className="h-full w-full" fill="none" preserveAspectRatio="none">
        <path
          d="M1.5 8.2C18 3.2 34 10.4 52 7.1C71 3.6 86 9.8 104 6.4C124 2.8 142 9.2 162 6.8C181 4.5 199 8.6 218.5 5.4"
          stroke="#f07c32"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M8 9.4C28 11.2 48 5.6 72 8.6C96 11.5 118 5.2 146 8.8C168 11.4 192 6.4 214 9"
          stroke="#37b795"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}

export function PromptDirector() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [value, setValue] = useState("");
  const [flashKey, setFlashKey] = useState(0);
  const [bursting, setBursting] = useState(false);
  const [clearing, setClearing] = useState<"out" | "in" | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const typeTimer = useRef<number | null>(null);
  const clearTimers = useRef<number[]>([]);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const head = useInView<HTMLDivElement>("-15%");
  const rows = useInView<HTMLDivElement>("-10%");
  const box = useInView<HTMLDivElement>("-10%");
  const rails = useInView<HTMLDivElement>("-10%");

  useEffect(
    () => () => {
      if (typeTimer.current) window.clearInterval(typeTimer.current);
      clearTimers.current.forEach(window.clearTimeout);
    },
    [],
  );

  const pick = useCallback(
    (text: string) => {
      if (typeTimer.current) window.clearInterval(typeTimer.current);
      textareaRef.current?.focus({ preventScroll: true });
      if (reduceMotion) {
        setValue(text);
        setFlashKey((k) => k + 1);
        return;
      }
      const len = text.length;
      const step = Math.max(1, Math.ceil(len / 26));
      let n = 0;
      setValue("");
      typeTimer.current = window.setInterval(() => {
        n = Math.min(len, n + step);
        setValue(text.slice(0, n));
        if (n >= len) {
          if (typeTimer.current) window.clearInterval(typeTimer.current);
          typeTimer.current = null;
          setFlashKey((k) => k + 1);
        }
      }, 18);
    },
    [reduceMotion],
  );

  const send = useCallback(() => {
    setFlashKey((k) => k + 1);
    clearTimers.current.forEach(window.clearTimeout);
    clearTimers.current = [];

    if (value.trim().length > 0) {
      if (reduceMotion) {
        setValue("");
      } else {
        setClearing("out");
        clearTimers.current.push(
          window.setTimeout(() => {
            setValue("");
            setClearing("in");
          }, 1000),
          window.setTimeout(() => setClearing(null), 1320),
        );
      }
    }

    if (!reduceMotion) {
      setBursting(true);
      clearTimers.current.push(window.setTimeout(() => setBursting(false), 1700));
    }
  }, [reduceMotion, value]);

  const shown = head.inView || reduceMotion;

  return (
    <section
      id="prompts"
      data-prompt-director
      className="relative z-10 w-full bg-[#0d0c18] pt-[140px] pb-24 md:pt-[220px] md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[calc(8%+80px)] left-1/2 -z-10 h-[60%] w-full -translate-x-1/2 rounded-[50%] blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(240,124,50,0.18) 0%, rgba(55,183,149,0.12) 42%, rgba(13,12,24,0) 72%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div
          ref={head.ref}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10"
        >
          <h2
            className={`pd-reveal max-w-[520px] font-[family-name:var(--font-display)] text-[36px] leading-[1.05] font-normal tracking-[-0.01em] text-white md:text-[40px] ${shown ? "is-in" : ""}`}
          >
            Direct your visibility with{" "}
            <span className="relative inline-block">
              prompts
              <Underline />
            </span>
          </h2>
          <p
            className={`pd-reveal pd-reveal--copy max-w-[380px] text-[16px] leading-[1.4] text-[#9B9B9B] md:text-right ${shown ? "is-in" : ""}`}
          >
            Turn buyer questions into structured placements with intelligent surface
            decisions and automated workflows.
          </p>
        </div>
      </div>

      <div
        ref={rows.ref}
        className={`pd-reveal pd-reveal--rows mt-20 flex w-full flex-col gap-[9px] ${rows.inView || reduceMotion ? "is-in" : ""}`}
      >
        {PROMPT_ROWS.map((row, i) => (
          <LogoLoop
            key={i}
            logos={row.map((chip, j) => ({
              node: <ChipButton chip={chip} onPick={pick} key={j} />,
            }))}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={26}
            gap={12}
            logoHeight={40}
            fadeOut
            pauseOnHover
            ariaLabel="Example prompts"
          />
        ))}
      </div>

      <div className="relative isolate mt-20 flex w-full justify-center px-6 md:px-0">
        <div
          ref={box.ref}
          className={`pd-reveal pd-reveal--box pd-box ${box.inView || reduceMotion ? "is-in" : ""}`}
        >
          <div aria-hidden="true" className="pd-box-inset" />
          {flashKey > 0 && <div key={flashKey} className="pd-flash" />}
          <label htmlFor="prompt-director-input" className="pd-sr">
            Prompt
          </label>
          <textarea
            ref={textareaRef}
            id="prompt-director-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What should buyers find when they ask? I’ll map the prompts, surfaces and placements…"
            className={`pd-textarea${clearing === "out" ? " is-clearing" : ""}${clearing === "in" ? " is-restoring" : ""}`}
            spellCheck={false}
          />
          <div
            className={`pd-reveal pd-reveal--send absolute right-[26px] bottom-[25px] ${box.inView || reduceMotion ? "is-in" : ""}`}
          >
            <button type="button" tabIndex={-1} aria-label="Send prompt" onClick={send} className="pd-send">
              <Icons.ArrowUp className="size-[18px]" />
            </button>
          </div>
        </div>

        <div
          ref={rails.ref}
          aria-hidden="true"
          className={`pd-reveal pd-reveal--rails pd-rails-mask ${rails.inView || reduceMotion ? "is-in" : ""}`}
        >
          <div
            className="absolute top-0 left-0 h-px"
            style={{ right: "calc(50% + 710px)", background: "rgba(255,255,255,0.22)" }}
          />
          <div
            className="absolute top-0 right-0 h-px"
            style={{ left: "calc(50% + 710px)", background: "rgba(255,255,255,0.22)" }}
          />
          <svg
            viewBox="0 0 1421 177"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-1/2 h-[177px] w-[1421px] -translate-x-1/2"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d={RAIL_PATH} fill="rgba(255,255,255,0.22)" />
            {NODES.map((node, i) => {
              const dx = burstDx(node);
              return (
                <g key={i}>
                  <rect
                    x={node.x}
                    y={node.y}
                    width="10"
                    height="10"
                    fill="white"
                    className={`pd-node pd-node--${i}${bursting ? " is-burst" : ""}`}
                    style={{ ["--dx" as string]: `${dx}px` }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}