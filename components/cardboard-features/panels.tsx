"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity,
  Aperture,
  Captions,
  Image as ImageIcon,
  Pause,
  Play,
  Plus,
  Search,
  Users,
  Volume2,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "./cn";
import {
  ASSETS,
  CHIP_GEOMETRY,
  CROPS,
  EASE_OUT,
  FIND_CLIPS,
  LIBRARY_CLIPS,
  RATIOS,
  REFRAME_ASSET,
  SPEEDS,
  type FindClip,
  type LibraryClip,
  type Ratio,
} from "./data";
import { useVisibleVideo } from "./useVisibleVideo";
import { useVideoTransport } from "./useVideoTransport";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PANEL_SHADOW =
  "0 -3px 5px 0 rgba(0,0,0,0.09), 0 13px 14px 0 rgba(0,0,0,0.17), 0 4px 6px 0 rgba(0,0,0,0.12), 0 -13px 32px 0 rgba(0,0,0,0.12), 0 57px 58px 0 rgba(0,0,0,0.25)";
const SIDEBAR_BG = "radial-gradient(circle at 6% 3%, #1C1C21 0%, #15151B 100%)";
const SIDEBAR_SHADOW =
  "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06), 0 3px 8px 0 rgba(0,0,0,0.24)";

const fmt = (seconds: number) => {
  const t = Number.isFinite(seconds) ? seconds : 0;
  return `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
};

/* ---------------------------------------------------------------- shared */

/** Phosphor "SpeakerSlash" — not in lucide, so inlined. */
export function SpeakerSlash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H80v64H32ZM144,207.64,96,170.29V93.13l48,52.8Zm0-147.28V78.67l-38.38-42.2L147.09,3.69A8,8,0,0,1,160,10ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Zm-40,0a40,40,0,0,1-10,26.46,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.62A40,40,0,0,1,208,128Z" />
    </svg>
  );
}

/** Fades a whole panel in/out when the active feature changes. */
export function PanelFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}

/** Floating inspector window (right of the sidebar) with a gradient hairline. */
function Inspector({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="absolute overflow-hidden rounded-[20px]"
      style={{ top: 70, left: 325, width: 340, height: 476, background: "#15151B", boxShadow: PANEL_SHADOW }}
    >
      <GradientHairline radius={20} strength={0.34} />
      {children}
    </motion.div>
  );
}

function GradientHairline({ radius, strength }: { radius: number; strength: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        borderRadius: radius,
        padding: 1,
        background: `linear-gradient(130deg, rgba(255,255,255,${strength}) 0%, rgba(255,255,255,0) 100%)`,
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        maskComposite: "exclude",
      }}
    />
  );
}

function Highlight({ text, term, italic = false }: { text: string; term: string; italic?: boolean }) {
  if (!term) return <span className={italic ? "italic" : undefined}>{text}</span>;
  const at = text.toLowerCase().indexOf(term.toLowerCase());
  if (at === -1) return <span className={italic ? "italic" : undefined}>{text}</span>;
  return (
    <span className={italic ? "italic" : undefined}>
      {text.slice(0, at)}
      <span
        className="rounded-[3px] px-[3px] py-[1px] font-medium text-white"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        {text.slice(at, at + term.length)}
      </span>
      {text.slice(at + term.length)}
    </span>
  );
}

function InspectorFooter({ title, meta, size, action }: { title: string; meta: string; size: string; action: string }) {
  return (
    <div className="absolute right-[12px] bottom-[16px] left-[12px] flex items-end justify-between">
      <div className="flex max-w-[180px] flex-col gap-[4px] overflow-hidden" style={{ fontFamily: "var(--font-marketing-sans)" }}>
        <span className="truncate text-[11px] leading-none text-white/25">{title}</span>
        <span className="flex items-center gap-[6px] text-[11px] leading-none text-white/25">
          {meta}
          <span className="inline-block size-[2px] rounded-full bg-white/30" />
          {size}
        </span>
      </div>
      <button
        type="button"
        tabIndex={-1}
        className="cursor-pointer rounded-[9px] bg-white/[0.07] px-[11px] py-[7px] text-[13px] leading-none font-medium tracking-[-0.01em] text-white/75 backdrop-blur-sm transition-colors duration-150 hover:bg-white/[0.12] hover:text-white active:bg-white/[0.16]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }}
      >
        {action}
      </button>
    </div>
  );
}

function LayersGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px] text-white/70 transition-colors duration-150 group-hover:text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

/* ------------------------------------------------------ Know Every Clip */

const INSIGHT_ICONS = [Aperture, Activity, ImageIcon, Users];

export function KnowEveryClip() {
  const [active, setActive] = useState(0);
  return (
    <>
      <MediaLibrary active={active} onSelect={setActive} />
      <Inspector>
        <ClipInspector clip={LIBRARY_CLIPS[active]} />
      </Inspector>
    </>
  );
}

function Thumb({ top, left, src, active, onClick }: { top: number; left: number; src: string; active: boolean; onClick: () => void }) {
  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={onClick}
      className={cn(
        "group absolute size-[81px] cursor-pointer overflow-hidden rounded-[5px] bg-[#15151B] bg-cover bg-center transition-transform duration-200 outline-none hover:scale-[1.04] active:scale-[0.97]",
        active && "scale-[1.03]",
      )}
      style={{ top, left, backgroundImage: `url(${src})` }}
    >
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)" }} />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[5px] transition-all duration-200",
          active ? "ring-[1.5px] ring-white/80" : "ring-0 ring-white/0 group-hover:ring-[1.5px] group-hover:ring-white/45",
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-[29px] items-center justify-center rounded-full bg-white/12 backdrop-blur-[3px] transition-all duration-200 group-hover:scale-110 group-hover:bg-white/25 group-active:scale-95">
          <Play className="ml-[1px] size-[12px] fill-white text-white" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
}

function MediaLibrary({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <div
      className="absolute top-[70px] left-[94px] h-[571px] w-[213px] overflow-hidden rounded-[19px]"
      style={{ background: SIDEBAR_BG, boxShadow: SIDEBAR_SHADOW }}
    >
      <div className="absolute top-[18px] left-[16px] text-[14px] leading-none font-medium text-white/85">Media library</div>
      <div
        role="button"
        tabIndex={-1}
        className="group absolute top-[16px] left-[173px] flex size-[26px] cursor-pointer items-center justify-center rounded-md transition-colors duration-150 hover:bg-white/[0.06] active:bg-white/[0.12]"
      >
        <LayersGlyph />
      </div>
      {[
        { col: 0, row: 0 },
        { col: 1, row: 0 },
        { col: 0, row: 1 },
        { col: 1, row: 1 },
      ].map(({ col, row }, i) => (
        <Thumb
          key={i}
          top={57 + 120 * row}
          left={16 + 101 * col}
          src={`${ASSETS}/${LIBRARY_CLIPS[i].id}-poster.jpg`}
          active={i === active}
          onClick={() => onSelect(i)}
        />
      ))}
      {[
        { top: 144, left: 16 },
        { top: 144, left: 117 },
        { top: 264, left: 16 },
        { top: 264, left: 117 },
      ].map((pos, i) => (
        <div
          key={i}
          role="button"
          tabIndex={-1}
          onClick={() => onSelect(i)}
          className="absolute h-[14px] w-[93px] cursor-pointer truncate text-[11px] leading-none font-normal transition-opacity duration-150 hover:opacity-100 active:opacity-70"
          style={{
            top: pos.top,
            left: pos.left,
            fontFamily: "var(--font-marketing-sans)",
            background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: i === active ? 1 : 0.5,
          }}
        >
          {LIBRARY_CLIPS[i].name}
        </div>
      ))}
    </div>
  );
}

function ClipInspector({ clip }: { clip: LibraryClip }) {
  const reduceMotion = useReducedMotion();
  const src = `${ASSETS}/${clip.id}`;
  const fillRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const [speed, setSpeed] = useState(0);

  const onFrame = useCallback((video: HTMLVideoElement) => {
    const p = video.duration ? Math.min(1, video.currentTime / video.duration) : 0;
    if (fillRef.current) fillRef.current.style.width = `${(100 * p).toFixed(2)}%`;
    if (knobRef.current) knobRef.current.style.left = `calc(${(100 * p).toFixed(2)}% - 4px)`;
    if (timeRef.current) timeRef.current.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
  }, []);

  const { videoRef, seekerRef, playing, muted, setMuted, togglePlay, toggleMute, seekTo, videoHandlers } =
    useVideoTransport({ initialPlaying: false, onFrame });

  /* eslint-disable react-hooks/set-state-in-effect -- mirrors upstream: a newly selected clip restarts muted at 1x */
  useEffect(() => {
    setMuted(true);
    setSpeed(0);
  }, [clip.id, reduceMotion, setMuted, videoRef]);
  useVisibleVideo(videoRef,clip.id,!!reduceMotion);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = parseFloat(SPEEDS[speed] ?? "1x");
  }, [speed, clip.id, videoRef]);

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        onClick={togglePlay}
        className="group absolute top-[11.5px] left-[10.5px] h-[180px] w-[317.5px] cursor-pointer overflow-hidden rounded-[5px] outline-none"
      >
        <video
          key={clip.id}
          ref={videoRef}
          aria-hidden="true"
          onContextMenu={(e) => e.preventDefault()}
          poster={`${src}-poster.jpg`}
          muted={muted}
          playsInline
          preload="none"
          onPlay={videoHandlers.onPlay}
          onPause={videoHandlers.onPause}
          onEnded={videoHandlers.onEnded}
          onLoadedMetadata={videoHandlers.onLoadedMetadata}
          className="h-full w-full object-cover"
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10 group-active:bg-black/25" />
        <div className="pointer-events-none absolute inset-0 rounded-[5px] ring-0 ring-white/0 transition-all duration-200 group-hover:ring-1 group-hover:ring-white/25" />
      </div>

      <div className="absolute top-[199px] left-[10.5px] flex h-[29px] w-[317.5px] items-center">
        <div
          role="button"
          tabIndex={-1}
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex size-[16px] cursor-pointer items-center justify-center text-white transition-all duration-150 hover:scale-110 hover:text-white active:scale-90"
        >
          {playing ? (
            <Pause className="size-[16px]" strokeWidth={1.6} fill="currentColor" />
          ) : (
            <Play className="size-[16px]" strokeWidth={1.6} fill="currentColor" />
          )}
        </div>
        <span
          ref={timeRef}
          className="ml-[8px] cursor-default font-normal whitespace-nowrap text-[#D1D0CE] tabular-nums"
          style={{ fontSize: 9.8, fontFamily: "var(--font-marketing-sans)", fontVariantNumeric: "tabular-nums" }}
        >
          0:00 / 0:00
        </span>
        <div
          ref={seekerRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            seekTo(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons === 1) seekTo(e.clientX);
          }}
          className="group relative ml-[8px] flex h-[12px] min-w-0 flex-1 cursor-pointer touch-none items-center select-none"
        >
          <div className="relative h-[3px] w-full overflow-visible rounded-full bg-white/25 transition-all duration-150 group-hover:h-[4px]">
            <div ref={fillRef} className="absolute inset-y-0 left-0 w-0 rounded-full bg-white/85" />
            <div
              ref={knobRef}
              className="absolute size-[8px] rounded-full bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.25)] transition-transform duration-150 group-hover:scale-125 group-active:scale-100"
              style={{ top: -2.5, left: -4 }}
            />
          </div>
        </div>
        <div
          role="button"
          tabIndex={-1}
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="ml-[8px] flex size-[16px] cursor-pointer items-center justify-center text-white transition-all duration-150 hover:scale-110 active:scale-90"
        >
          {muted ? <SpeakerSlash className="size-[16px]" /> : <Volume2 className="size-[16px]" strokeWidth={1.6} />}
        </div>
        <div
          role="button"
          tabIndex={-1}
          onClick={() => setSpeed((s) => (s + 1) % SPEEDS.length)}
          aria-label={`Playback speed ${SPEEDS[speed] ?? "1x"}`}
          className="ml-[6px] cursor-pointer rounded px-[3px] text-[10px] font-medium text-[#D1D0CE] transition-colors duration-150 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.14]"
        >
          {SPEEDS[speed] ?? "1x"}
        </div>
      </div>

      <div className="absolute top-[241px] left-[11px] text-[16px] leading-none font-medium text-white/85">Insights</div>
      <div className="absolute top-[270px] left-[5px] flex w-[330px] flex-col gap-[6px]">
        {clip.insights.map((insight, i) => {
          const Icon = INSIGHT_ICONS[i] ?? Aperture;
          return (
            <motion.div
              key={`${clip.id}-${i}`}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 + 0.06 * i }}
              role="button"
              tabIndex={-1}
              className="group flex cursor-pointer items-start gap-[11px] rounded-[6px] px-[6px] py-[4px] transition-colors duration-150 hover:bg-white/[0.04] active:bg-white/[0.08]"
            >
              <Icon className="mt-[1px] size-[18px] shrink-0 text-white/70 transition-colors duration-150 group-hover:text-white" strokeWidth={1.6} />
              <p className="text-[12px] leading-[1.35] text-white/80 transition-colors duration-150 group-hover:text-white">{insight}</p>
            </motion.div>
          );
        })}
      </div>

      <InspectorFooter title={clip.name} meta="1920 X 1080" size={clip.size} action="Add to timeline" />
    </>
  );
}

/* ---------------------------------------------------- Reframe In Seconds */

const LAYOUTS = [
  { label: "TOP & BOTTOM", col: 0, row: 0, rects: [{ x: 20, y: 10, w: 41, h: 14 }, { x: 20, y: 29, w: 41, h: 14 }] },
  { label: "3 ROWS", active: true, col: 1, row: 0, rects: [{ x: 20, y: 9, w: 41, h: 10 }, { x: 20, y: 22, w: 41, h: 10 }, { x: 20, y: 35, w: 41, h: 10 }] },
  { label: "PIP - BOTTOM", col: 0, row: 1, rects: [{ x: 14, y: 8, w: 22, h: 37 }, { x: 53, y: 31, w: 14, h: 14 }] },
  { label: "HERO ON TOP", col: 1, row: 1, rects: [{ x: 20, y: 9, w: 41, h: 14 }, { x: 20, y: 27, w: 19, h: 12 }, { x: 42, y: 27, w: 19, h: 12 }] },
];

export function LayoutsSidebar() {
  return (
    <div
      className="pointer-events-auto absolute top-[70px] left-[94px] h-[571px] w-[213px] overflow-hidden rounded-[19px]"
      style={{ background: SIDEBAR_BG, boxShadow: SIDEBAR_SHADOW }}
    >
      <div className="absolute top-[18px] left-[16px] text-[14px] leading-none font-medium text-white/85">Layouts</div>
      <div
        role="button"
        tabIndex={-1}
        className="group absolute top-[16px] left-[173px] flex size-[26px] cursor-pointer items-center justify-center rounded-md transition-colors duration-150 hover:bg-white/[0.06] active:bg-white/[0.12]"
      >
        <LayersGlyph />
      </div>
      {LAYOUTS.map((layout, i) => {
        const left = 16 + 101 * layout.col;
        const top = 52 + 92 * layout.row;
        return (
          <div key={i}>
            <div
              role="button"
              tabIndex={-1}
              className={cn(
                "group absolute h-[53px] w-[81px] cursor-pointer overflow-hidden rounded-[5px] transition-all duration-200",
                "hover:scale-[1.04] active:scale-[0.97]",
                layout.active ? "bg-white/[0.10]" : "bg-white/[0.05] hover:bg-white/[0.09]",
              )}
              style={{ top, left, outline: layout.active ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.04)" }}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-[5px] ring-0 ring-white/0 transition-all duration-200",
                  !layout.active && "group-hover:ring-[1px] group-hover:ring-white/30",
                )}
              />
              {layout.rects.map((r, j) => (
                <div
                  key={j}
                  className={cn(
                    "absolute rounded-[2.5px] transition-colors duration-200",
                    layout.active ? "bg-white/30 group-hover:bg-white/45" : "bg-white/[0.22] group-hover:bg-white/[0.38]",
                  )}
                  style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
                />
              ))}
            </div>
            <div
              role="button"
              tabIndex={-1}
              className="absolute h-[14px] w-[93px] cursor-pointer truncate text-[11px] leading-none font-normal transition-opacity duration-150 hover:opacity-100 active:opacity-70"
              style={{
                top: top + 59,
                left,
                fontFamily: "var(--font-marketing-sans)",
                color: layout.active ? "rgba(255,255,255,0.78)" : "transparent",
                background: layout.active ? "none" : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                WebkitBackgroundClip: layout.active ? undefined : "text",
                backgroundClip: layout.active ? undefined : "text",
                opacity: layout.active ? 1 : 0.9,
              }}
            >
              {layout.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function useChipGeometry(panelRef: React.RefObject<HTMLDivElement | null>) {
  const chips = useRef<Partial<Record<Ratio, HTMLButtonElement | null>>>({});
  const [geom, setGeom] = useState(CHIP_GEOMETRY);

  useIsoLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const measure = () => {
      const rect = panel.getBoundingClientRect();
      const scale = rect.width / 430;
      if (scale <= 0) return;
      const next = { ...CHIP_GEOMETRY };
      for (const { ratio } of RATIOS) {
        const chip = chips.current[ratio];
        if (!chip) return;
        const c = chip.getBoundingClientRect();
        next[ratio] = { cx: (c.left + c.width / 2 - rect.left) / scale, by: (c.bottom - rect.top) / scale };
      }
      setGeom(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(panel);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [panelRef]);

  return {
    geom,
    registerChip: (ratio: Ratio) => (el: HTMLButtonElement | null) => {
      chips.current[ratio] = el;
    },
  };
}

export function ReframePanel() {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { once: true, margin: "-12% 0px" });
  const userPicked = useRef(false);
  const [ratio, setRatio] = useState<Ratio>("16:9");
  const { geom, registerChip } = useChipGeometry(panelRef);

  // Auto-demo: switch to 4:5 shortly after the panel scrolls into view.
  useEffect(() => {
    if (userPicked.current) return;
    if (reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRatio("4:5");
      return;
    }
    if (!inView) return;
    const t = setTimeout(() => {
      if (!userPicked.current) setRatio("4:5");
    }, 600);
    return () => clearTimeout(t);
  }, [inView, reduceMotion]);

  const cropTop = 262 - CROPS[ratio].h / 2;
  const anchor = geom[ratio];
  const elbowY = anchor.by + 12;
  const dir = anchor.cx <= 215 ? 1 : -1;
  const path = `M ${anchor.cx} ${anchor.by} L ${anchor.cx} ${elbowY - 4} Q ${anchor.cx} ${elbowY} ${anchor.cx + 4 * dir} ${elbowY} L ${215 - 4 * dir} ${elbowY} Q 215 ${elbowY} 215 ${elbowY + 4} L 215 ${cropTop}`;

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="absolute overflow-hidden rounded-[19px]"
      style={{ top: 70, left: 325, width: 430, height: 510, background: SIDEBAR_BG, boxShadow: PANEL_SHADOW }}
    >
      <GradientHairline radius={19} strength={0.14} />
      <div className="absolute top-[14px] left-[14px] flex items-center gap-[5px]">
        {RATIOS.map((r) => {
          const on = r.ratio === ratio;
          return (
            <button
              key={r.ratio}
              ref={registerChip(r.ratio)}
              type="button"
              tabIndex={-1}
              onClick={() => {
                userPicked.current = true;
                setRatio(r.ratio);
              }}
              className={cn(
                "flex cursor-pointer items-center gap-[4px] rounded-[7px] px-[7px] py-[4px] text-[11px] leading-none outline-none transition-all duration-200 motion-reduce:transition-none",
                on
                  ? "bg-white text-black"
                  : "border border-white/10 bg-transparent text-white hover:border-white/25 hover:bg-white/[0.04] active:bg-white/[0.10]",
              )}
              style={on ? { boxShadow: "0 10px 12px 0 rgba(0,0,0,0.20), 0 14px 28px 0 rgba(0,0,0,0.28)" } : undefined}
            >
              <span className="font-medium">{r.ratio}</span>
              <span className={on ? "text-black/60" : "text-white/60"}>{r.label}</span>
            </button>
          );
        })}
      </div>
      <svg className="pointer-events-none absolute inset-0 overflow-visible" viewBox="0 0 430 510" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          initial={false}
          animate={{ d: path }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.32, 0.72, 0.24, 1] }}
          d={path}
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <CropFrame ratio={ratio} />
    </motion.div>
  );
}

function CropFrame({ ratio }: { ratio: Ratio }) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { w, h, pos } = CROPS[ratio];

  useVisibleVideo(videoRef,REFRAME_ASSET,!!reduceMotion);

  const left = 215 - w / 2;
  const top = 262 - h / 2;
  const handles = [
    { x: left - 4, y: top - 4 },
    { x: left + w - 4, y: top - 4 },
    { x: left - 4, y: top + h - 4 },
    { x: left + w - 4, y: top + h - 4 },
  ];
  const t = { duration: reduceMotion ? 0 : 0.45, ease: [0.32, 0.72, 0.24, 1] as const };

  return (
    <>
      <motion.div
        animate={{ width: w, height: h, left, top }}
        transition={t}
        className="absolute overflow-hidden rounded-[2px]"
        style={{ left, top, width: w, height: h, boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.95)" }}
      >
        <video
          ref={videoRef}
          aria-hidden="true"
          onContextMenu={(e) => e.preventDefault()}
          poster={`${REFRAME_ASSET}-poster.jpg`}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: pos, transition: "object-position 0.45s cubic-bezier(0.32,0.72,0.24,1)" }}
        >
          <source src={`${REFRAME_ASSET}.webm`} type="video/webm" />
          <source src={`${REFRAME_ASSET}.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      {handles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ left: p.x, top: p.y }}
          transition={t}
          className="absolute bg-white"
          style={{ left: p.x, top: p.y, width: 8, height: 8, boxShadow: "0 0 0 1px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.5)" }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------ Find Any Moment */

export function FindAnyMoment() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <SearchSidebar selected={selected} onSelect={setSelected} />
      <MomentInspector clip={FIND_CLIPS[selected]} />
    </>
  );
}

function SearchSidebar({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  return (
    <div
      className="pointer-events-auto absolute top-[70px] left-[94px] h-[510px] w-[280px] overflow-hidden rounded-[19px]"
      style={{ background: SIDEBAR_BG, boxShadow: SIDEBAR_SHADOW }}
    >
      <div className="absolute top-[18px] left-[16px] text-[14px] leading-none font-medium text-white/85">Media library</div>
      <div
        role="button"
        tabIndex={-1}
        className="group absolute top-[16px] left-[240px] flex size-[26px] cursor-pointer items-center justify-center rounded-md transition-colors duration-150 hover:bg-white/[0.06] active:bg-white/[0.12]"
      >
        <LayersGlyph />
      </div>
      <div
        role="button"
        tabIndex={-1}
        className="absolute top-[54px] left-[14px] flex h-[34px] w-[252px] cursor-text items-center gap-[8px] rounded-[10px] border border-white/[0.06] bg-[#27272B] px-[10px] transition-colors duration-150 hover:border-white/[0.14]"
      >
        <Search className="size-[14px] text-white/60" strokeWidth={1.8} />
        <span className="font-marketing-sans text-[11px] text-[#A8A8A8]">the moment we hugged</span>
        <div className="ml-auto h-[12px] w-[1px] animate-pulse bg-white/55" />
      </div>
      <div className="absolute top-[100px] left-[16px] text-[11px] leading-none text-[#9B9B9B]">{FIND_CLIPS.length} results found</div>
      {FIND_CLIPS.map((clip, i) => (
        <ResultRow
          key={i}
          topPx={120 + 100 * i}
          filename={clip.filename}
          timecode={clip.range}
          description={clip.blurb}
          poster={`${clip.asset}-poster.jpg`}
          active={i === selected}
          onSelect={() => onSelect(i)}
          delay={0.05 + 0.07 * i}
        />
      ))}
    </div>
  );
}

function ResultRow({
  topPx,
  filename,
  timecode,
  description,
  poster,
  active,
  onSelect,
  delay,
}: {
  topPx: number;
  filename: string;
  timecode: string;
  description: string;
  poster: string;
  active: boolean;
  onSelect: () => void;
  delay: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay }}>
      <div
        role="button"
        tabIndex={-1}
        onClick={onSelect}
        className="group/thumb absolute size-[60px] cursor-pointer overflow-hidden rounded-[6px] transition-transform duration-200 outline-none hover:scale-[1.04] active:scale-[0.97]"
        style={{ top: topPx, left: 14 }}
      >
        <Poster poster={poster} />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[6px] transition-all duration-200",
            active ? "ring-[1.5px] ring-white/55" : "ring-0 ring-white/0 group-hover/thumb:ring-[1.5px] group-hover/thumb:ring-white/40",
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "flex size-[22px] items-center justify-center rounded-full backdrop-blur-[3px] transition-all duration-200 group-hover/thumb:scale-110 group-hover/thumb:bg-white/30 group-active/thumb:scale-95",
              active ? "bg-white/30" : "bg-white/15",
            )}
          >
            <Play className="ml-[1px] size-[9px] fill-white text-white" strokeWidth={0} />
          </div>
        </div>
      </div>
      <div
        onClick={onSelect}
        className="absolute h-[12px] w-[60px] cursor-pointer truncate text-[10px] leading-none transition-opacity duration-150 hover:opacity-100 active:opacity-70"
        style={{ top: topPx + 66, left: 14, color: active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.47)" }}
      >
        {filename}
      </div>
      <div
        role="button"
        tabIndex={-1}
        onClick={onSelect}
        className={cn(
          "group/card absolute h-[76px] w-[182px] cursor-pointer overflow-hidden rounded-[8px] border p-[8px] transition-colors duration-150",
          active ? "border-white/[0.14] bg-white/[0.05]" : "border-white/[0.05] hover:bg-white/[0.025] active:bg-white/[0.05]",
        )}
        style={{ top: topPx, left: 84 }}
      >
        <div className="text-[10px] leading-none font-normal text-white/55 tabular-nums">{timecode}</div>
        <p
          className={cn(
            "mt-[5px] line-clamp-3 pr-[24px] text-[10px] leading-[1.35] transition-colors duration-150",
            active ? "text-white/80" : "text-[#9B9B9B] group-hover/card:text-white/80",
          )}
        >
          {description}
        </p>
        <button
          type="button"
          tabIndex={-1}
          className="absolute top-[6px] right-[6px] flex size-[18px] cursor-pointer items-center justify-center rounded-[5px] bg-white text-black transition-all duration-150 hover:scale-110 active:scale-95"
          style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.25), 0 8px 16px 0 rgba(0,0,0,0.3)" }}
        >
          <Plus className="size-[10px]" strokeWidth={2.8} />
        </button>
      </div>
    </motion.div>
  );
}

function Poster({ poster }: { poster: string }) {
  return (
    <div className="relative size-full overflow-hidden bg-[#15151B]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)" }}
      />
    </div>
  );
}

const toSeconds = (timecode: string) => {
  const [m, s] = timecode.split(":").map(Number);
  return 60 * (m || 0) + (s || 0);
};

function MomentInspector({ clip }: { clip: FindClip }) {
  const reduceMotion = useReducedMotion();
  const moments = clip.moments;
  const [hovered, setHovered] = useState<number | null>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  const onFrame = useCallback((video: HTMLVideoElement) => {
    const p = video.duration ? Math.min(1, video.currentTime / video.duration) : 0;
    if (fillRef.current) fillRef.current.style.width = `${(100 * p).toFixed(2)}%`;
    if (knobRef.current) knobRef.current.style.left = `calc(${(100 * p).toFixed(2)}% - 3.5px)`;
    if (timeRef.current) timeRef.current.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
  }, []);

  const { videoRef, seekerRef, playing, muted, setMuted, togglePlay, toggleMute, seekTo, videoHandlers } =
    useVideoTransport({ initialPlaying: false, onFrame });

  useEffect(() => {
    setMuted(true);
    if (fillRef.current) fillRef.current.style.width = "0%";
    if (knobRef.current) knobRef.current.style.left = "-3.5px";
    if (timeRef.current) timeRef.current.textContent = `0:00 / ${clip.durationLabel}`;
  }, [clip.asset, clip.durationLabel, reduceMotion, setMuted, videoRef]);
  useVisibleVideo(videoRef,clip.asset,!!reduceMotion);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="pointer-events-auto absolute overflow-hidden rounded-[20px]"
      style={{ top: 70, left: 390, width: 340, height: 510, background: "#15151B", boxShadow: PANEL_SHADOW }}
    >
      <GradientHairline radius={20} strength={0.34} />
      <div className="absolute top-[12px] right-[14px] left-[14px] flex items-baseline justify-between">
        <span className="text-[10px] leading-none font-normal text-white/65 tabular-nums">{clip.filename}</span>
        <span className="text-[10px] leading-none font-normal text-white/35 tabular-nums">{clip.range}</span>
      </div>

      <div
        role="button"
        tabIndex={-1}
        onClick={togglePlay}
        className="group/preview absolute top-[32px] left-[12px] h-[176px] w-[316px] cursor-pointer overflow-hidden rounded-[6px] outline-none"
      >
        <video
          key={clip.asset}
          ref={videoRef}
          aria-hidden="true"
          onContextMenu={(e) => e.preventDefault()}
          poster={`${clip.asset}-poster.jpg`}
          muted={muted}
          playsInline
          preload="none"
          onPlay={videoHandlers.onPlay}
          onPause={videoHandlers.onPause}
          onEnded={videoHandlers.onEnded}
          onLoadedMetadata={videoHandlers.onLoadedMetadata}
          className="h-full w-full object-cover"
        >
          <source src={`${clip.asset}.webm`} type="video/webm" />
          <source src={`${clip.asset}.mp4`} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover/preview:bg-black/10 group-active/preview:bg-black/20" />
        <div className="pointer-events-none absolute inset-0 rounded-[6px] ring-0 ring-white/0 transition-all duration-200 group-hover/preview:ring-1 group-hover/preview:ring-white/30" />
        {!playing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex size-[44px] items-center justify-center rounded-full bg-white/15 backdrop-blur-[3px]">
              <Play className="ml-[2px] size-[18px] fill-white text-white" strokeWidth={0} />
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-[220px] left-[12px] flex h-[20px] w-[316px] items-center">
        <div
          role="button"
          tabIndex={-1}
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex size-[14px] cursor-pointer items-center justify-center text-white transition-all duration-150 hover:scale-110 active:scale-90"
        >
          {playing ? (
            <Pause className="size-[14px]" strokeWidth={1.6} fill="currentColor" />
          ) : (
            <Play className="size-[14px]" strokeWidth={1.6} fill="currentColor" />
          )}
        </div>
        <span
          ref={timeRef}
          className="ml-[7px] cursor-default font-normal whitespace-nowrap text-[#D1D0CE] tabular-nums"
          style={{ fontSize: 9, fontVariantNumeric: "tabular-nums" }}
        >
          0:00 / {clip.durationLabel}
        </span>
        <div
          ref={seekerRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            seekTo(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons === 1) seekTo(e.clientX);
          }}
          className="group/bar relative ml-[7px] flex h-[12px] min-w-0 flex-1 cursor-pointer touch-none items-center select-none"
        >
          <div className="relative h-[2.5px] w-full rounded-full bg-white/25 transition-all duration-150 group-hover/bar:h-[3.5px]">
            <div ref={fillRef} className="absolute inset-y-0 left-0 w-0 rounded-full bg-white/85" />
            {moments.map((m, i) => {
              const pct = (toSeconds(m.timecode) / clip.durationS) * 100;
              const on = i === hovered;
              return (
                <div
                  key={`marker-${i}`}
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute rounded-full transition-all duration-200",
                    on ? "size-[8px] bg-white" : "size-[4px] bg-white/55",
                  )}
                  style={{
                    top: "50%",
                    left: `${Math.min(98, pct)}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: on ? "0 0 8px rgba(255,255,255,0.7), 0 0 0 2px rgba(0,0,0,0.3)" : undefined,
                  }}
                />
              );
            })}
            <div
              ref={knobRef}
              className="absolute size-[7px] rounded-full bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.25)] transition-transform duration-150 group-hover/bar:scale-125"
              style={{ top: -2.25, left: -3.5 }}
            />
          </div>
        </div>
        <div
          role="button"
          tabIndex={-1}
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="ml-[8px] flex size-[14px] cursor-pointer items-center justify-center text-white transition-all duration-150 hover:scale-110 active:scale-90"
        >
          {muted ? <SpeakerSlash className="size-[14px]" /> : <Volume2 className="size-[14px]" strokeWidth={1.6} />}
        </div>
      </div>

      <div className="absolute top-[256px] right-[12px] left-[12px] flex items-baseline justify-between">
        <span className="text-[13px] leading-none font-medium text-white/85">In this clip</span>
        <span className="text-[10px] leading-none text-white/35 tabular-nums">{moments.length} moments</span>
      </div>
      <div className="absolute top-[282px] right-[8px] left-[8px] flex flex-col gap-[2px]">
        {moments.map((m, i) => {
          const Icon = m.type === "visual" ? ImageIcon : Captions;
          const on = i === hovered;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.12 + 0.06 * i }}
              role="button"
              tabIndex={-1}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered((h) => (h === i ? null : h))}
              className={cn(
                "group/seg flex cursor-pointer items-center gap-[9px] rounded-[6px] px-[7px] py-[5px] transition-colors duration-150 active:bg-white/[0.08]",
                on ? "bg-white/[0.05]" : "hover:bg-white/[0.04]",
              )}
            >
              <Icon
                className={cn(
                  "size-[13px] shrink-0 transition-colors duration-150",
                  m.type === "visual" ? (on ? "text-white" : "text-white/55") : on ? "text-[#B6D1F5]" : "text-[#8FB9F0]",
                )}
                strokeWidth={1.8}
              />
              <span className="text-[10px] font-medium text-white/45 tabular-nums">{m.timecode}</span>
              <span className={cn("flex-1 truncate text-[11px] leading-[1.3] transition-colors duration-150", on ? "text-white" : "text-white/70")}>
                {m.isQuote ? (
                  <>
                    <span className="text-white/40">“</span>
                    <Highlight text={m.description} term={m.highlight} italic />
                    <span className="text-white/40">”</span>
                  </>
                ) : (
                  <Highlight text={m.description} term={m.highlight} />
                )}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute right-[12px] bottom-[14px] left-[12px] flex items-end justify-between">
        <div className="flex flex-col gap-[3px]">
          <span className="text-[10px] leading-none text-white/25">{clip.footerLabel}</span>
          <span className="flex items-center gap-[5px] text-[10px] leading-none text-white/25">
            {clip.durationLabel}
            <span className="inline-block size-[2px] rounded-full bg-white/30" />
            1080p
          </span>
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="cursor-pointer rounded-[9px] bg-white/[0.07] px-[11px] py-[7px] text-[13px] leading-none font-medium tracking-[-0.01em] text-white/75 backdrop-blur-sm transition-colors duration-150 hover:bg-white/[0.12] hover:text-white active:bg-white/[0.16]"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }}
        >
          Add to timeline
        </button>
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------- Backdrop */

export function SceneBackdrop() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/cardboard/images/scene-backdrop.jpg"
        alt=""
        fill
        sizes="(min-width: 768px) 60vw, 100vw"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
