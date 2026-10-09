export const ASSETS = "https://assets.usecardboard.com/marketing";

export const FEATURES = [
  {
    title: "Asked in ChatGPT",
    description:
      "A buyer asks AI for a shortlist. We earn the sources it reads, so your name is in the answer instead of only your competitor's.",
  },
  {
    title: "Checked on Reddit",
    description:
      "Next they look for honest opinions. Real practitioners, clearly disclosed and genuinely useful, back you up in the threads they find.",
  },
  {
    title: "Compared on YouTube",
    description:
      "Then they search 'X vs Y' right before the demo. Your side-by-side is the video that ranks and the one they finish.",
  },
  {
    title: "Confirmed on Quora",
    description:
      "One last gut check. A detailed answer from someone who's used you closes the doubt, and AI engines quote it back.",
  },
] as const;

/* ---------------- Know Every Clip ---------------- */

export type LibraryClip = {
  id: string;
  name: string;
  size: string;
  insights: string[];
};

export const LIBRARY_CLIPS: LibraryClip[] = [
  {
    id: "features-know-every-clip",
    name: "TACKLE-FOOTBALL-GAME",
    size: "92.53 MB",
    insights: [
      "Snap at the line of scrimmage kicks off the play.",
      "Running back breaks through for a big gain.",
      "Wide field shot framing both teams.",
      "Defenders converge for the open-field tackle.",
    ],
  },
  {
    id: "features-kec-championship",
    name: "GOLDEN-HOUR-FIELD",
    size: "23.80 MB",
    insights: [
      "Golden-hour light rakes low across the field.",
      "Slow push across the open field at dusk.",
      "Wide cinematic establishing shot of the horizon.",
      "A lone player waits in the foreground.",
    ],
  },
  {
    id: "features-kec-drive",
    name: "PLAYER-CLOSE-UP",
    size: "42.50 MB",
    insights: [
      "Tight close-up holds focus on the player.",
      "Helmet turns as the player scans the line.",
      "Shallow-depth portrait isolates the subject.",
      "One player framed; the rest fall out of focus.",
    ],
  },
  {
    id: "features-kec-overcast",
    name: "OVERCAST-KICKOFF",
    size: "41.00 MB",
    insights: [
      "Soft, flat light under an overcast sky.",
      "Punter swings through a high kick.",
      "Low-angle frame catches the follow-through.",
      "Single kicker isolated against the clouds.",
    ],
  },
];

export const SPEEDS = ["1x", "1.5x", "2x"];

/* ---------------- Find Any Moment ---------------- */

export type Moment = {
  type: "visual" | "caption";
  timecode: string;
  description: string;
  highlight: string;
  isQuote?: boolean;
};

export type FindClip = {
  filename: string;
  range: string;
  blurb: string;
  asset: string;
  durationS: number;
  durationLabel: string;
  footerLabel: string;
  moments: Moment[];
};

export const FIND_CLIPS: FindClip[] = [
  {
    filename: "homecoming.mov",
    range: "0:00-0:07",
    blurb:
      "A father kneels as his two kids sprint across the room and throw themselves into his arms for a tight hug.",
    asset: `${ASSETS}/features-find-hug-full`,
    durationS: 7.32,
    durationLabel: "0:07",
    footerLabel: "Home video",
    moments: [
      { type: "visual", timecode: "0:02", description: "Two kids sprint in with open arms", highlight: "open arms" },
      { type: "visual", timecode: "0:04", description: "Father pulls both children into a tight hug", highlight: "hug" },
      { type: "caption", timecode: "0:05", description: "Come here, give me a hug!", highlight: "hug", isQuote: true },
      { type: "visual", timecode: "0:06", description: "All three hold the embrace, faces close", highlight: "embrace" },
    ],
  },
  {
    filename: "night-out.mov",
    range: "0:00-0:16",
    blurb:
      "Friends spill out of a neon-lit bar; one sweeps another off their feet in a spinning, laughing embrace.",
    asset: `${ASSETS}/features-find-night`,
    durationS: 16.4,
    durationLabel: "0:16",
    footerLabel: "Night out",
    moments: [
      { type: "visual", timecode: "0:03", description: "Friends spill onto the sidewalk, laughing", highlight: "laughing" },
      { type: "visual", timecode: "0:08", description: "One sweeps a friend into a spinning hug", highlight: "hug" },
      { type: "caption", timecode: "0:11", description: "Get in here, group hug!", highlight: "group hug", isQuote: true },
      { type: "visual", timecode: "0:13", description: "The whole group folds into one embrace", highlight: "embrace" },
    ],
  },
];

/* ---------------- Reframe In Seconds ---------------- */

export const REFRAME_ASSET = `${ASSETS}/features-reframe`;

export type Ratio = "16:9" | "9:16" | "4:5" | "1:1" | "4:3";

export const CROPS: Record<Ratio, { w: number; h: number; pos: string }> = {
  "16:9": { w: 340, h: 191, pos: "0% 50%" },
  "9:16": { w: 180, h: 320, pos: "19% 50%" },
  "4:5": { w: 256, h: 320, pos: "15% 50%" },
  "1:1": { w: 280, h: 280, pos: "9% 50%" },
  "4:3": { w: 340, h: 255, pos: "0% 50%" },
};

export const RATIOS: { ratio: Ratio; label: string }[] = [
  { ratio: "16:9", label: "Landscape" },
  { ratio: "9:16", label: "Vertical" },
  { ratio: "4:5", label: "Tall" },
  { ratio: "1:1", label: "Square" },
  { ratio: "4:3", label: "Classic" },
];

/** Fallback chip anchor positions (in the 430×510 panel space) before measurement. */
export const CHIP_GEOMETRY: Record<Ratio, { cx: number; by: number }> = {
  "16:9": { cx: 54, by: 33 },
  "9:16": { cx: 135, by: 33 },
  "4:5": { cx: 204, by: 33 },
  "1:1": { cx: 268, by: 33 },
  "4:3": { cx: 339, by: 33 },
};

/* ---------------- Mock geometry ---------------- */

export const mobileFit = (index: number) =>
  index === 3
    ? { fitWidth: 524, viewH: 340, shiftX: 38, shiftY: 0, feather: 90 }
    : index === 1
      ? { fitWidth: 760, viewH: 600, shiftX: 0, shiftY: 0, feather: 92 }
      : { fitWidth: 690, viewH: 600, shiftX: 0, shiftY: 0, feather: 92 };

export const STAGE_TRANSITION = { duration: 0.9, ease: [0.32, 0.72, 0, 1] as const };
export const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;
