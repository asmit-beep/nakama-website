import registry from '@/content/lastmod.json';

/** Sitemap lastmod for core (non-journal) URLs, from the committed registry in content/lastmod.json.
 *  Deterministic: no git, no clock. The same commit always yields the same sitemap, on any clone depth. */
type Entry={modified:string;reviewedThrough?:string;src:string[]};
const ISO=/^\d{4}-\d{2}-\d{2}$/;
const REG=registry as unknown as Record<string,Entry|string>;

/** Registered date for a core path. Throws at build time if the path is missing or malformed, so a new
 *  core page cannot ship without a lastmod entry. */
export function registeredDate(path:string):string{
 const e=REG[path];
 if(!e||typeof e==='string'||!ISO.test(e.modified))throw new Error(`content/lastmod.json: missing or invalid "modified" for ${path}`);
 return e.modified;
}

/** Day (YYYY-MM-DD) of an ISO date or timestamp. ISO timestamps carry their own offset (+05:30), so slicing keeps the IST day. */
export const dayOf=(d?:string|null)=>d&&ISO.test(d.slice(0,10))?d.slice(0,10):undefined;

/** Newest of a list of dates; undefined entries are ignored. */
export function newest(...dates:(string|undefined)[]):string{
 return dates.filter((d):d is string=>!!d&&ISO.test(d)).sort().at(-1)!;
}
