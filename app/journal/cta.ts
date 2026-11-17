/** Journal in-article CTA. Builds an HTML string for bodyHtml (rendered via dangerouslySetInnerHTML in app/journal/[slug]/page.tsx).
 * Same pattern as the author box string in each article file. CSS lives in app/editorial.css under ".j-cta".
 * No .ip-btn or .ip-ghost on any CTA link: .j-cta-btn and .j-cta-alt carry their own styles. */

export const QUOTE_URL = 'https://www.nakama.in/pricing#quote';
export const FREE_CHECK = {
  label: 'Start with a free AI visibility check',
  href: 'https://www.nakama.in/services/ai-visibility-audit#free-ai-visibility-check',
} as const;
/** Word for word from the live /pricing#quote section. */
export const QUOTE_STEPS = ['Share the basics', '15-minute pricing call', 'Written proposal'] as const;
export const BAND_EYEBROW = 'Next step';

type Base = {
  /** Unique per page, lowercase a-z, 0-9 and hyphens. Used for the aria id and the link ids. e.g. 'perplexity-seo-1'. */
  id: string;
  headline: string;
  sub?: string;
  buttonLabel?: string; // default 'Get a quote'
  buttonHref?: string;  // default QUOTE_URL
  /** Optional, off by default. Emits data-cta, data-cta-variant, data-cta-link. Not wired to analytics yet (on hold until after the core update hold). */
  dataAttrs?: boolean;
  /** Optional. Turns the first exact match of `text` inside sub into a plain link (href checked like buttonHref). */
  subLink?: {text: string; href: string};
};
/** Inline card: no eyebrow, no secondary, no steps. Passing any of them is a type error. */
export type JournalCtaInline = Base & {
  variant: 'inline';
  eyebrow?: never;
  secondaryLabel?: never;
  secondaryHref?: never;
  steps?: never;
};
export type JournalCtaBand = Base & {
  variant: 'band';
  /** Omitted means 'Next step'. */
  eyebrow?: string;
  /** Omitted means FREE_CHECK (default on). null hides it. */
  secondaryLabel?: string | null;
  secondaryHref?: string;
  /** Max 3. Omitted means QUOTE_STEPS. [] hides the row. */
  steps?: readonly string[];
};
export type JournalCta = JournalCtaInline | JournalCtaBand;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
/** Escape, then keep any '<number>-minute' on one line ('15-minute' never breaks after the hyphen).
 * A nowrap span, not U+2011, so copy-paste, search and screen readers still get a normal hyphen. */
const txt = (s: string) => esc(s).replace(/\b(\d+)-minute\b/g, '<span class="j-cta-nw">$1-minute</span>');

/** Only https://www.nakama.in/... or a root-relative path. Anything else fails the build,
 * including protocol-relative '//host' and '/\host', and any backslash. */
export function safeHref(href: string): string {
  if (!/^(?:https:\/\/www\.nakama\.in)?\/(?![\/\\])[^\s"'<>\\]*$/.test(href)) throw new Error(`journalCta: href not allowed: ${href}`);
  return esc(href);
}

/** Removes every CTA block. Use in blocks() (llms-full.txt) and in app/rss.xml/route.ts (feed bodies). */
export const stripJournalCta = (html: string) => html.replace(/<aside class="j-cta[\s\S]*?<\/aside>\s*/g, '');

const ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';

export function journalCta(o: JournalCta): string {
  if (!/^[a-z0-9-]+$/.test(o.id)) throw new Error(`journalCta: bad id: ${o.id}`);
  if (!o.headline.trim()) throw new Error('journalCta: headline is required');
  const t = `cta-${o.id}-t`;
  const da = (link?: string) => o.dataAttrs ? ` data-cta="${o.id}" data-cta-variant="${o.variant}"${link ? ` data-cta-link="${link}"` : ''}` : '';
  const label = txt(o.buttonLabel ?? 'Get a quote');
  const href = safeHref(o.buttonHref ?? QUOTE_URL);
  let subHtml = o.sub?.trim() ? txt(o.sub.trim()) : '';
  if (o.subLink) {
    const m = txt(o.subLink.text);
    const link = `<a href="${safeHref(o.subLink.href)}">${m}</a>`;
    /* Tags (e.g. the j-cta-nw span) and entities (e.g. &amp;) are protected: a match may contain one whole,
     * but may not start or end inside one, so it never lands in an attribute or splits an entity. */
    const guarded = [...subHtml.matchAll(/<[^>]*>|&(?:#\d+|#x[\da-f]+|[a-z]+);/gi)].map(g => [g.index, g.index + g[0].length]);
    const inside = (n: number) => guarded.some(([a, b]) => n > a && n < b);
    let done = false;
    subHtml = subHtml.replace(new RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), (hit: string, at: number) => {
      if (done || inside(at) || inside(at + hit.length)) return hit;
      done = true;
      return link;
    });
    if (!done) throw new Error(`journalCta: subLink text not in sub: ${o.subLink.text}`);
  }
  const sub = subHtml ? `<p class="j-cta-sub">${subHtml}</p>` : '';
  let eyebrow = '';
  let steps = '';
  let secondary = '';
  if (o.variant === 'band') {
    const eb = (o.eyebrow ?? BAND_EYEBROW).trim();
    eyebrow = eb ? `<p class="j-cta-eyebrow"><i aria-hidden="true"></i>${esc(eb)}</p>` : '';
    const list = (o.steps ?? QUOTE_STEPS).map(s => s.trim()).filter(Boolean);
    if (list.length > 3) throw new Error('journalCta: max 3 steps');
    steps = list.length ? `<ol class="j-cta-steps">${list.map(s => `<li>${txt(s)}</li>`).join('')}</ol>` : '';
    if (o.secondaryLabel !== null) {
      const sl = o.secondaryLabel ?? FREE_CHECK.label;
      const sh = o.secondaryHref ?? FREE_CHECK.href;
      secondary = `<a class="j-cta-alt" id="cta-${o.id}-alt" href="${safeHref(sh)}"${da('secondary')}><span>${txt(sl)}</span>${ARROW}</a>`;
    }
  } else if ((o as {eyebrow?: unknown}).eyebrow !== undefined) {
    throw new Error('journalCta: inline cards have no eyebrow'); // runtime guard for untyped callers
  }
  return `<aside class="j-cta j-cta--${o.variant}" aria-labelledby="${t}"${da()}><div class="j-cta-copy">${eyebrow}<p class="j-cta-title" id="${t}">${txt(o.headline.trim())}</p>${sub}${steps}</div><div class="j-cta-actions"><a class="j-cta-btn" id="cta-${o.id}-go" href="${href}"${da('primary')}>${label}</a>${secondary}</div></aside>`;
}
