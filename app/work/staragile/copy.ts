/**
 * StarAgile case study.
 * PREVIEW false: robots index,follow. The URL is listed in the sitemap, llms.txt and RSS.
 */
export const PREVIEW = false;

/** Real ship time, 26 Nov 2026 04:55 IST (dpl_gH1HMkrFwnvGBGmU6ZKdgXp83zzd). dateModified matches that instant because this correction is the ship itself. Capture dates in the study are measurement dates, not this publish date. */
export const PUBLISHED_AT = '2026-11-26T04:55:00+05:30';
export const MODIFIED_AT = '2026-11-26T04:55:00+05:30';

export const SLUG = '/work/staragile';

/** Absolute title. The root template must not append a second brand suffix. */
export const TITLE = "How StarAgile Became AI Search's First Pick | Nakama Growth";

/**
 * DevOps is one of the 45 named-first answers (Best DevOps Course With Placement Support).
 */
export const META =
  'How Nakama Growth got StarAgile named first in 45 AI answers on Google AI Overviews, AI Mode, ChatGPT and Perplexity for Scrum, CSPO and DevOps searches.';

export const H1 = "How StarAgile Became AI Search's First Pick for Scrum Training";

export const FAQ: {q: string; a: string}[] = [
  {
    q: 'What is generative engine optimization (GEO) for edtech?',
    a: 'Generative engine optimization (GEO) for edtech is the work of getting a training brand named inside AI answers on ChatGPT, Perplexity, Google AI Overviews and Google AI Mode. For certification providers like StarAgile, that means earning top placement when buyers ask for "the best CSM training" or competitor alternatives.',
  },
  {
    q: 'What AI visibility results did StarAgile get with Nakama Growth?',
    a: 'Between 19 August and 9 November 2026, Nakama Growth helped StarAgile earn the first-named spot in 45 of 89 captured AI answers across Google AI Overviews, Google AI Mode, ChatGPT and Perplexity. Those wins covered 23 of 48 tracked buyer queries, including 12 of 13 CSM queries and all 5 CSPO queries.',
  },
  {
    q: 'How long did it take StarAgile to appear first in ChatGPT?',
    a: "StarAgile flagged ChatGPT as its primary visibility gap on 3 August 2026. Following Nakama Growth's answer-first guides and off-site placements, ChatGPT listed StarAgile inside a comparison table by 31 August 2026 and placed StarAgile in the first table row during the week of 1 to 7 September 2026.",
  },
  {
    q: 'How does Nakama Growth measure AI visibility results?',
    a: 'Nakama Growth runs each tracked query without a year, in Incognito mode, across all four AI engines and screenshots every answer. Each answer counts once. "Named first", "named" and "StarAgile page cited" are reported separately, while answers citing only Nakama Growth\'s own guides are counted as not present.',
  },
  {
    q: 'Does GEO work for certification training companies?',
    a: 'Yes, generative engine optimization works well for certification training companies because the credential itself is standardised across providers. Learners ask AI engines to compare trust, trainer quality, schedules and guarantees. Consistent proof points repeated across comparison guides, community threads and articles help engines award a clear category label.',
  },
];

/** Hero lightbox frames. Captions match the visible "Recreated from" lines. */
export const HERO_IMAGES = [
  {
    src: '/work/staragile/asset01.webp',
    w: 1200,
    h: 678,
    caption: 'Recreated from Google AI Overview · captured 21 to 31 Aug 2026',
  },
  {
    src: '/work/staragile/craft003.webp',
    w: 1200,
    h: 679,
    caption: 'Recreated from Google AI Mode · captured 21 to 31 Aug 2026',
  },
  {
    src: '/work/staragile/craft023.webp',
    w: 1562,
    h: 890,
    caption: 'Recreated from ChatGPT · captured 1 to 7 Sep 2026',
  },
  {
    src: '/work/staragile/craft025.webp',
    w: 1637,
    h: 856,
    caption: 'Recreated from Perplexity · captured 1 to 7 Sep 2026',
  },
] as const;
