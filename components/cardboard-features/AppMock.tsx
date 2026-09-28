"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Aperture,
  Captions,
  Folder,
  LayoutGrid,
  Mic,
  Music,
  Play,
  Type,
  type LucideIcon,
} from "lucide-react";
import { cn } from "./cn";
import { EASE_OUT, STAGE_TRANSITION, mobileFit } from "./data";
import {
  FindAnyMoment,
  KnowEveryClip,
  LayoutsSidebar,
  PanelFade,
  ReframePanel,
  SceneBackdrop,
} from "./panels";

/* -------------------------------------------------------------- Timeline */

type Clip = { label: string; x: number; width: number; background?: string };
type Track = { Icon: LucideIcon; name: string; clips: Clip[] };

const TRACKS: Track[] = [
  {
    Icon: Captions,
    name: "CAPTIONS",
    clips: [
      { label: "Welcome back", x: 140, width: 80 },
      { label: "Happy to be here", x: 226, width: 92 },
      { label: "AI, everywhere", x: 326, width: 56 },
    ],
  },
  { Icon: Aperture, name: "ADJUSTMENT 1", clips: [{ label: "", x: 180, width: 220, background: "rgba(255,255,255,0.10)" }] },
  {
    Icon: Play,
    name: "VIDEO 1",
    clips: [
      { label: "", x: 195, width: 70, background: "linear-gradient(135deg, #46341e 0%, #2c2114 100%)" },
      { label: "", x: 271, width: 108, background: "linear-gradient(135deg, #5a3a25 0%, #2a1f15 100%)" },
    ],
  },
  { Icon: Play, name: "VIDEO 2", clips: [{ label: "", x: 200, width: 105, background: "linear-gradient(135deg, #2a3855 0%, #15202e 100%)" }] },
  { Icon: Music, name: "AUDIO 1", clips: [{ label: "", x: 140, width: 280, background: "rgba(123, 110, 255, 0.18)" }] },
];

const COLLABORATORS = [
  {
    name: "Jacob",
    color: "#FF6E5C",
    dur: 16,
    times: [0, 0.16, 0.33, 0.5, 0.66, 0.84, 1],
    path: [{ x: 210, y: 78 }, { x: 272, y: 64 }, { x: 344, y: 88 }, { x: 300, y: 120 }, { x: 216, y: 110 }, { x: 178, y: 84 }, { x: 210, y: 78 }],
  },
  {
    name: "Komal",
    color: "#FBB13C",
    dur: 19,
    times: [0, 0.18, 0.36, 0.52, 0.7, 0.86, 1],
    path: [{ x: 318, y: 116 }, { x: 260, y: 134 }, { x: 210, y: 150 }, { x: 286, y: 168 }, { x: 360, y: 140 }, { x: 340, y: 110 }, { x: 318, y: 116 }],
  },
  {
    name: "Annette",
    color: "#3FCF8E",
    dur: 21.5,
    times: [0, 0.2, 0.38, 0.55, 0.72, 0.88, 1],
    path: [{ x: 232, y: 175 }, { x: 300, y: 188 }, { x: 372, y: 170 }, { x: 320, y: 150 }, { x: 232, y: 162 }, { x: 180, y: 184 }, { x: 232, y: 175 }],
  },
];

const PLAYHEAD_X = 178;

function Timeline() {
  return (
    <div className="absolute" style={{ top: 615, left: 25, width: 720, height: 280 }}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
        className="absolute inset-0 overflow-hidden rounded-[18px]"
        style={{
          background: "radial-gradient(circle at 6% 3%, #1C1C21 0%, #15151B 100%)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06), 0 6px 18px 0 rgba(0,0,0,0.28)",
        }}
      >
        <div className="absolute top-[10px] left-[14px] flex items-center gap-[8px]">
          <span className="text-[11px] leading-none font-normal text-white/75 tabular-nums" style={{ fontFamily: "var(--font-marketing-sans)" }}>
            00:00:00.000
          </span>
        </div>
        <div className="absolute top-[34px] right-0 left-0 h-px bg-white/[0.05]" />
        <div className="absolute top-[34px] bottom-0 left-[120px] w-px bg-white/[0.05]" />
        {TRACKS.map((track, i) => (
          <TrackRow key={i} track={track} y={34 + 44 * i} isLast={i === TRACKS.length - 1} playheadX={PLAYHEAD_X} />
        ))}
        <div className="absolute top-[26px] bottom-0 w-px" style={{ left: PLAYHEAD_X, background: "rgba(255,255,255,0.4)" }} />
        <div className="absolute size-[8px] rotate-45" style={{ top: 22, left: PLAYHEAD_X - 4, background: "white" }} />
        {COLLABORATORS.map((c, i) => (
          <Cursor key={c.name} {...c} index={i} delay={0.55 + 0.08 * i} />
        ))}
      </motion.div>
    </div>
  );
}

function TrackRow({ track, y, isLast, playheadX }: { track: Track; y: number; isLast: boolean; playheadX: number }) {
  const isCaptions = track.name === "CAPTIONS";
  return (
    <>
      <div className="absolute flex items-center gap-[7px] px-[14px]" style={{ top: y, left: 0, width: 120, height: 44 }}>
        <track.Icon className="size-[13px] text-white/60" strokeWidth={1.6} />
        <span className="truncate text-[10px] leading-none font-normal text-white/65" style={{ fontFamily: "var(--font-marketing-sans)" }}>
          {track.name}
        </span>
      </div>
      {isLast ? null : <div className="absolute h-px" style={{ top: y + 44, left: 0, right: 0, background: "rgba(255,255,255,0.04)" }} />}
      {track.clips.map((clip, i) =>
        isCaptions ? (
          <CaptionClip key={i} clip={clip} y={y} active={clip.x <= playheadX && playheadX <= clip.x + clip.width} />
        ) : (
          <div
            key={i}
            className="absolute flex items-center overflow-hidden rounded-[6px] px-[8px]"
            style={{
              top: y + 6,
              left: clip.x,
              width: clip.width,
              height: 32,
              background: clip.background ?? "rgba(255,255,255,0.07)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {clip.label ? (
              <span className="truncate text-[10px] leading-none font-normal text-white/65" style={{ fontFamily: "var(--font-marketing-sans)" }}>
                {clip.label}
              </span>
            ) : null}
          </div>
        ),
      )}
    </>
  );
}

function CaptionClip({ clip, y, active }: { clip: Clip; y: number; active: boolean }) {
  return (
    <div
      className="absolute flex items-center gap-[5px] overflow-hidden rounded-[6px] px-[7px]"
      style={{
        top: y + 6,
        left: clip.x,
        width: clip.width,
        height: 32,
        background: active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
        boxShadow: active
          ? "inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 0 3px rgba(255,255,255,0.035)"
          : "inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      <Captions className={cn("size-[9px] shrink-0", active ? "text-white/85" : "text-white/45")} strokeWidth={1.7} />
      <span className={cn("font-marketing-sans truncate text-[9.5px] leading-none tracking-[0.01em]", active ? "text-white/90" : "text-white/55")}>
        {clip.label}
      </span>
    </div>
  );
}

function Cursor({
  name,
  color,
  path,
  dur,
  times,
  index,
  delay,
}: (typeof COLLABORATORS)[number] & { index: number; delay: number }) {
  const reduceMotion = useReducedMotion();
  const origin = path[0] ?? { x: 0, y: 0 };
  const xs = path.map((p) => p.x - origin.x);
  const ys = path.map((p) => p.y - origin.y);
  const pingDelay = delay + 1.4 + 2.1 * index;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6, x: 0, y: 0 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, x: xs, y: ys }}
      transition={
        reduceMotion
          ? { duration: 0.4, delay }
          : {
              opacity: { duration: 0.5, delay, ease: EASE_OUT },
              scale: { duration: 0.5, delay, ease: EASE_OUT },
              x: { duration: dur, delay: delay + 0.5, times, ease: "easeInOut", repeat: Infinity },
              y: { duration: dur, delay: delay + 0.5, times, ease: "easeInOut", repeat: Infinity },
            }
      }
      className="absolute"
      style={{ top: origin.y, left: origin.x }}
    >
      {reduceMotion ? null : (
        <motion.span
          aria-hidden="true"
          className="absolute rounded-full"
          style={{ top: -3, left: -3, width: 10, height: 10, border: `1.5px solid ${color}` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 0, 1.1, 2], opacity: [0, 0, 0.5, 0] }}
          transition={{ duration: 6.5 + 1.6 * index, delay: pingDelay, times: [0, 0.82, 0.9, 1], repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <svg viewBox="0 0 16 16" className="size-[14px]" fill={color} aria-hidden="true">
        <path d="M2 2 L2 13 L5.5 10 L8 14.5 L9.6 13.7 L7.2 9.4 L12 9.4 Z" stroke="white" strokeWidth="0.7" strokeLinejoin="round" />
      </svg>
      <span
        className="absolute top-[10px] left-[9px] rounded-[6px] rounded-tl-none px-[6px] py-[2px] text-[10px] leading-none font-medium whitespace-nowrap"
        style={{ background: color, color: "#18171C" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------- Chrome bar */

function ChromeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 13 13" aria-hidden="true" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.16797 1.65274C3.35808 0.586198 4.90062 -0.00247769 6.4987 7.83884e-06C7.68194 -0.0002683 8.84282 0.322444 9.85616 0.933349C10.8695 1.54425 11.6969 2.42018 12.249 3.46667H6.4987C5.90044 3.46646 5.31547 3.64316 4.81737 3.97456C4.31928 4.30595 3.9303 4.77724 3.69937 5.32914L2.16797 1.65274Z" />
      <path d="M1.51256 2.3313C0.832174 3.14562 0.36141 4.11408 0.141355 5.15216C-0.0787005 6.19025 -0.0413608 7.26642 0.250116 8.28676C0.541592 9.3071 1.07835 10.2406 1.81354 11.0058C2.54874 11.771 3.46003 12.3447 4.4679 12.6767L6.90496 9.50643C6.77208 9.52434 6.63716 9.5333 6.50023 9.5333C5.8137 9.53348 5.14741 9.30077 4.61028 8.87321C4.07315 8.44564 3.69695 7.84852 3.54316 7.17943C3.52597 7.15444 3.51144 7.12772 3.49983 7.0997L1.51256 2.3313Z" />
      <path d="M5.38672 12.9048C5.74899 12.9683 6.12021 13.0001 6.50039 13.0001C7.54085 13.0005 8.56619 12.7511 9.49024 12.2729C10.4143 11.7946 11.21 11.1016 11.8106 10.252C12.4112 9.40232 12.799 8.42093 12.9415 7.39027C13.084 6.35962 12.977 5.30981 12.6295 4.3291L12.5671 4.33343H8.62372C8.91189 4.6159 9.14081 4.95302 9.29706 5.32506C9.45332 5.6971 9.53378 6.09658 9.53372 6.5001C9.5347 7.27486 9.23918 8.02063 8.70779 8.58443L5.38672 12.9048Z" />
      <path d="M4.33203 6.50016C4.33203 5.92553 4.5603 5.37443 4.96663 4.9681C5.37296 4.56177 5.92406 4.3335 6.4987 4.3335C7.07333 4.3335 7.62443 4.56177 8.03076 4.9681C8.43709 5.37443 8.66536 5.92553 8.66536 6.50016C8.66536 7.0748 8.43709 7.6259 8.03076 8.03223C7.62443 8.43856 7.07333 8.66683 6.4987 8.66683C5.92406 8.66683 5.37296 8.43856 4.96663 8.03223C4.5603 7.6259 4.33203 7.0748 4.33203 6.50016Z" />
    </svg>
  );
}

function ChromeBar({ activeIndex }: { activeIndex: number }) {
  const hidden = activeIndex === 3;
  return (
    <motion.div
      animate={{ y: hidden ? -30 : 0, opacity: hidden ? 0 : 1 }}
      transition={STAGE_TRANSITION}
      className="absolute top-0 right-0 left-0 flex h-[22px] items-center bg-[#26262B] px-[10px] text-[10px] leading-none font-medium text-white/80"
    >
      <div role="button" tabIndex={-1} className="flex size-[13px] shrink-0 cursor-pointer items-center justify-center transition-opacity duration-150 hover:opacity-100 active:opacity-60">
        <ChromeGlyph className="size-[13px]" />
      </div>
      <span className="ml-[6px] cursor-pointer font-medium tracking-[0.01em] opacity-100 transition-opacity duration-150 hover:opacity-100 active:opacity-60">
        Google Chrome
      </span>
      {["File", "Edit", "View", "Object"].map((item, i) => (
        <span
          key={item}
          role="button"
          tabIndex={-1}
          className={cn(
            "cursor-pointer rounded-[3px] px-[5px] py-[2px] tracking-[0.01em] opacity-85 transition-all duration-150",
            "hover:bg-white/10 hover:opacity-100",
            "active:bg-white/15",
          )}
          style={{ marginLeft: i === 0 ? 13 : 3 }}
        >
          {item}
        </span>
      ))}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- Sidebar */

const SIDEBAR_ITEMS: { Icon: LucideIcon; y: number; targetIndex?: number; label: string }[] = [
  { Icon: Folder, y: 20, targetIndex: 0, label: "Media library" },
  { Icon: LayoutGrid, y: 59.61, targetIndex: 1, label: "Layouts" },
  { Icon: Music, y: 98.48, label: "Music" },
  { Icon: Captions, y: 137.34, label: "Captions" },
  { Icon: Mic, y: 176.96, label: "Voice" },
  { Icon: Type, y: 215.82, label: "Text" },
];

/* --------------------------------------------------------------- App mock */

/**
 * The 775×615 product mock. It is authored at fixed pixel coordinates and
 * scaled to its container with `scale(var(--mock-scale,0))`, so every inner
 * measurement below is in "design pixels".
 */
export function AppMock({
  activeIndex,
  onNavigate,
  panBoost = 0,
  mobile = false,
}: {
  activeIndex: number;
  onNavigate: (index: number) => void;
  panBoost?: number;
  mobile?: boolean;
}) {
  const frameRef=useRef<HTMLDivElement>(null);
  const scaleWidth=mobile?mobileFit(activeIndex).fitWidth:775;
  useEffect(()=>{
    const el=frameRef.current;if(!el)return;
    const update=()=>el.style.setProperty("--mock-scale",String(el.clientWidth/scaleWidth));
    update();const observer=new ResizeObserver(update);observer.observe(el);
    return()=>observer.disconnect();
  },[scaleWidth]);
  const sidebarActive = activeIndex === 1 ? 1 : 0;
  const fit = mobileFit(activeIndex);

  const frameStyle: React.CSSProperties = mobile
    ? {
        transform: `scale(var(--mock-scale,0)) translate(-${fit.shiftX}px, -${fit.shiftY}px) translateZ(0)`,
        willChange: "transform",
        maskImage: `linear-gradient(to bottom, black 0%, black ${fit.feather}%, transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black 0%, black ${fit.feather}%, transparent 100%)`,
      }
    : {
        transform: "scale(var(--mock-scale,0)) translateZ(0)",
        willChange: "transform",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 100%), linear-gradient(to right, black 0%, black 78%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 100%), linear-gradient(to right, black 0%, black 78%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      };

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      className={cn("[container-type:inline-size] relative isolate w-full overflow-visible", !mobile && "aspect-[775/615]")}
      style={mobile ? { aspectRatio: `${fit.fitWidth} / ${fit.viewH}` } : undefined}
    >
      <div className="absolute top-0 left-0 h-[615px] w-[775px] origin-top-left" style={frameStyle}>
        {/* Glass bezel */}
        <div
          className="absolute inset-0 rounded-[18px]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.05) 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.20), inset 1px 0 0 rgba(255,255,255,0.10), inset -1px 0 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -20px rgba(0,0,0,0.5), 0 12px 30px -12px rgba(0,0,0,0.35)",
          }}
        />
        <div className="absolute top-[8px] left-[8px] h-[607px] w-[767px] overflow-hidden rounded-[12px]">
          <SceneBackdrop />

          {/* App window — slides up to reveal the timeline on "Edit Together" */}
          <motion.div
            animate={{ y: activeIndex === 3 ? -120 : 0 }}
            transition={STAGE_TRANSITION}
            className="absolute top-[59px] left-[30px] h-[571px] w-[780px] overflow-hidden rounded-[16px]"
            style={{ background: "rgba(3, 3, 3, 0.55)" }}
          >
            <motion.div
              animate={{ y: activeIndex === 3 ? -(240 + panBoost) : 0 }}
              transition={STAGE_TRANSITION}
              className="absolute"
              style={{ top: -59, left: -30, width: 767, height: 1100 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeIndex === 1 ? (
                  <PanelFade key="reframe">
                    <LayoutsSidebar />
                    <ReframePanel />
                  </PanelFade>
                ) : activeIndex === 0 ? (
                  <PanelFade key="ai-insights">
                    <KnowEveryClip />
                  </PanelFade>
                ) : activeIndex === 2 || activeIndex === 3 ? (
                  <PanelFade key="find-shared">
                    <FindAnyMoment />
                  </PanelFade>
                ) : null}
              </AnimatePresence>

              {SIDEBAR_ITEMS.map(({ Icon, y, targetIndex, label }, i) => {
                const on = i === sidebarActive;
                const clickable = targetIndex !== undefined;
                return (
                  <button
                    key={i}
                    type="button"
                    tabIndex={-1}
                    aria-label={clickable ? `Jump to ${label}` : label}
                    onClick={clickable ? () => onNavigate(targetIndex) : undefined}
                    className={cn(
                      "group absolute flex cursor-pointer items-center justify-center rounded-md transition-colors duration-150 outline-none",
                      on ? "bg-white/[0.10] hover:bg-white/[0.14]" : "hover:bg-white/[0.06]",
                      "active:bg-white/[0.16]",
                    )}
                    style={{ top: 59 + y - 3.75, left: 47.67, width: 27.65, height: 27.65 }}
                  >
                    <Icon className={cn("size-[20.18px] transition-colors duration-150", on ? "text-white" : "text-white/55 group-hover:text-white/90")} strokeWidth={1.6} />
                  </button>
                );
              })}

              {activeIndex===3?<Timeline />:null}
            </motion.div>
          </motion.div>

          <ChromeBar activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}
