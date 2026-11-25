/**
 * StarAgile case study, preview only.
 * PREVIEW true: robots noindex,nofollow. This route is not in caseStudies, so it
 * stays off the sitemap, llms.txt, llms-full.txt, RSS, the resources index and nav.
 * Go-live would set PREVIEW false and add the URL to those lists in the same change.
 * Do not touch content/lastmod.json for this preview.
 */
export const PREVIEW = true;

export const SLUG = '/work/staragile';

/** Document title stays blank until Yash picks it. */
export const TITLE = '';

/**
 * Draft meta uses the shorter brand. This page uses Nakama Growth.
 */
export const META =
  'How Nakama Growth got StarAgile named first in 45 AI answers on Google AI Overviews, AI Mode, ChatGPT and Perplexity for Scrum, CSPO, DevOps and testing searches.';

export const H1 = "How StarAgile Became AI Search's First Pick for Scrum Training";

export const FAQ: {q: string; a: string}[] = [
  {
    q: 'What is generative engine optimization (GEO) for edtech?',
    a: 'GEO is the work of getting a brand named inside AI answers on ChatGPT, Perplexity, Google AI Overviews and AI Mode. In certification training, that means being in the shortlist an AI gives when someone asks for "the best CSM training" or "alternatives to" a competitor.',
  },
  {
    q: 'What results did StarAgile get?',
    a: 'Between 19 August and 9 November 2026, AI engines named StarAgile first in 45 of the 89 AI answers we captured. That covered 23 of the 48 buyer queries we tracked, including 12 of the 13 Certified ScrumMaster queries and all 5 CSPO queries we tracked.',
  },
  {
    q: 'How long did it take StarAgile to appear first in ChatGPT?',
    a: 'StarAgile flagged ChatGPT as the gap on 3 August 2026. ChatGPT listed StarAgile in a comparison table by 31 August and put it in the first row in the week of 1 to 7 September.',
  },
  {
    q: 'How did you measure the results?',
    a: 'We ran each query without a year, in Incognito, on all four engines, and screenshotted the answer. Each answer counts once. "Named first", "named" and "StarAgile page cited" are reported separately. Answers that cited only our own guides count as not present.',
  },
  {
    q: 'Does GEO work for certification training companies?',
    a: 'Yes, when the category is standardised. Buyers compare the same credential on trust, trainer quality, schedule and support, and AI engines summarise exactly those differences. Clear, consistent proof points across many sources help an engine label you.',
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
