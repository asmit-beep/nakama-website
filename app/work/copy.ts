/**
 * Case studies hub.
 * PREVIEW false: index,follow, and /work is listed in the sitemap and llms files.
 */
export const PREVIEW = false;

export const SLUG = '/work';
export const TITLE = 'Case Studies: AI Search Results for Clients | Nakama Growth';
export const META =
  'One published case study and four more clients with live, verifiable placements across Google AI Overviews, AI Mode, ChatGPT, Perplexity and YouTube.';

/** Sector labels shown on the live proof board. */
export const SECTOR: Record<string, string> = {
  Synup: 'Local listings software',
  'Inventive AI': 'AI RFP software',
  HubEngage: 'Internal communications',
  StarAgile: 'Professional certification',
  BacklinkOS: 'Backlink management',
};

export const CLIENT_LOGO: Record<string, string> = {
  Synup: '/work/clients/synup.svg',
  'Inventive AI': '/work/clients/inventive.png',
  HubEngage: '/work/clients/hubengage.png',
  StarAgile: '/work/clients/staragile.png',
  BacklinkOS: '/work/clients/backlinkos.png',
};

/** Intrinsic pixel size of each client mark. CSS still sets the rendered box. */
export const CLIENT_DIM: Record<string, {w: number; h: number}> = {
  Synup: {w: 623, h: 180},
  'Inventive AI': {w: 158, h: 158},
  HubEngage: {w: 162, h: 162},
  StarAgile: {w: 236, h: 150},
  BacklinkOS: {w: 84, h: 80},
};

export function clientSlug(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
}
