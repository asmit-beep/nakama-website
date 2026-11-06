import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. ISO 8601 with +05:30.
 * It feeds datePublished and dateModified in the schema, og/article times,
 * the RSS pubDate, the sitemap lastmod (via `date`) and the visible "Updated" line.
 *
 * PREVIEW ONLY. Prod HOLD. Do not merge to main.
 * GO-LIVE TODO: set PREVIEW to false.
 * That one flag flips robots to index,follow and adds this note to the sitemap,
 * llms.txt, llms-full.txt, RSS and the author index.
 * While PREVIEW is true the page stays noindex,follow and off those surfaces.
 * Do not add this URL to corePages until ship GO.
 */
export const PROFOUND_ALTERNATIVES_PUBLISHED_AT = '2026-11-06T09:00:00+05:30';
const PUBLISHED_AT = PROFOUND_ALTERNATIVES_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const modifiedDate = shortDate(MODIFIED_AT);

const SLUG = 'profound-alternatives';
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const H1 = 'Profound Alternatives (2026)';
const META_TITLE = 'Profound Alternatives (2026): AI Visibility Tools Compared';
const DESCRIPTION = 'Comparing Profound alternatives? Peec AI, Otterly, Scrunch, AthenaHQ and Ahrefs Brand Radar: engines, prompt limits and public prices, checked 6 Nov 2026.';
const HERO_ALT = 'Profound Alternatives (2026): five AI visibility tools with public prices compared to Profound';
const TOOL_ALT = 'Side-by-side of a self-serve AI visibility tracker versus a managed GEO and AEO service';
const OG_ALT = 'Profound Alternatives (2026)';
const HERO_URL = `${CANONICAL}/profound-alternatives-hero.png`;
const OG_URL = `${CANONICAL}/profound-alternatives-og.png`;

const FAQS: {q: string; a: string}[] = [
 {
  q: 'Does Profound publish its prices?',
  a: "On 6 Nov 2026, Profound's pricing page listed a free 7-day Trial and a custom-priced Enterprise plan. It also mentioned a self-serve Agency Growth plan with 400 credits per month per client workspace, but no price for it was shown.",
 },
 {
  q: 'What is the cheapest Profound alternative?',
  a: 'Among the tools checked on 6 Nov 2026, OtterlyAI had the lowest public paid entry price at $29/mo ($25/mo billed annually) for 15 prompts. AthenaHQ also lists a free Essential tier with $25 of credit.',
 },
 {
  q: 'Which Profound alternative covers the most AI engines on a self-serve plan?',
  a: "AthenaHQ's Starter plan states visibility across 11 models. Peec AI lists six engines on self-serve plans but limits you to 3 active at once. Engine lists change often, so recheck the vendor page before buying.",
 },
 {
  q: 'Can I try Profound alternatives for free?',
  a: 'OtterlyAI offers a free trial, AthenaHQ has a free Essential tier, and Profound has a free 7-day Trial. Free trial terms for Peec AI and Scrunch were UNKNOWN on their pricing pages on 6 Nov 2026.',
 },
];

const faqId = (q: string) => q.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${CANONICAL}#article`,
   "headline": META_TITLE,
   "description": DESCRIPTION,
   "image": [
    HERO_URL,
    OG_URL
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en-US",
   "articleSection": "AI visibility tools",
   "keywords": "profound alternatives",
   "author": {
    "@id": "https://www.nakama.in/authors/yash-kumar#person"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntityOfPage": {
    "@id": `${CANONICAL}#webpage`
   },
   "url": CANONICAL,
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   }
  },
  {
   "@type": "Person",
   "@id": "https://www.nakama.in/authors/yash-kumar#person",
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": "https://www.nakama.in/authors/yash-kumar",
   "description": "Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama's work on earning mentions on the sources those tools read.",
   "image": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/authors/yash-kumar-nakama-ceo-800.webp",
    "contentUrl": "https://www.nakama.in/authors/yash-kumar-nakama-ceo-800.webp",
    "width": 800,
    "height": 800,
    "caption": "Yash Kumar, Co-founder and CEO of Nakama Growth"
   },
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
  },
  {
   "@type": "WebPage",
   "@id": `${CANONICAL}#webpage`,
   "url": CANONICAL,
   "name": META_TITLE,
   "description": DESCRIPTION,
   "inLanguage": "en-US",
   "isPartOf": {
    "@id": "https://www.nakama.in/#website"
   },
   "publisher": {
    "@id": "https://www.nakama.in/#organization"
   },
   "mainEntity": {
    "@id": `${CANONICAL}#article`
   },
   "primaryImageOfPage": {
    "@id": `${CANONICAL}#primaryimage`
   },
   "breadcrumb": {
    "@id": `${CANONICAL}#breadcrumb`
   },
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT
  },
  {
   "@type": "ImageObject",
   "@id": `${CANONICAL}#primaryimage`,
   "url": HERO_URL,
   "contentUrl": HERO_URL,
   "width": 1600,
   "height": 900,
   "caption": HERO_ALT
  },
  {
   "@type": "ImageObject",
   "@id": `${CANONICAL}#ogimage`,
   "url": OG_URL,
   "contentUrl": OG_URL,
   "width": 1200,
   "height": 630,
   "caption": OG_ALT
  }
 ]
};

const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "@id": `${CANONICAL}#breadcrumb`,
 "itemListElement": [
  {
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://www.nakama.in/"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Resources",
   "item": "https://www.nakama.in/resources"
  },
  {
   "@type": "ListItem",
   "position": 3,
   "name": H1,
   "item": CANONICAL
  }
 ]
};

const faqLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": `${CANONICAL}#faq`,
 "mainEntity": FAQS.map(({q, a}) => ({
  "@type": "Question",
  "name": q,
  "acceptedAnswer": {
   "@type": "Answer",
   "text": a
  }
 }))
};

export const profoundAlternativesJsonLd = [articleLd, breadcrumbLd, faqLd];

const fig = (file: string, alt: string, eager = false) =>
 `<figure><picture><source srcset="/journal/${SLUG}/${file}.webp" type="image/webp"><img src="/journal/${SLUG}/${file}.png" alt="${alt}" width="1600" height="900" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture></figure>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${H1}</li></ol></nav>
<h1 id="profound-alternatives-2026">${H1}</h1>
<p><strong>Updated: ${modifiedDate}</strong> · Prices and features checked on each vendor's official pricing page on ${modifiedDate}.</p>
<p>By <a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
${fig('profound-alternatives-hero', HERO_ALT, true)}
<p>The main Profound alternatives in 2026 are Peec AI, OtterlyAI, Scrunch, AthenaHQ and Ahrefs Brand Radar. Unlike Profound, each shows at least one public price. We compared engines, prompt limits and prices on official pages on ${modifiedDate}.</p>
<h2 id="what-are-the-main-profound-alternatives-in-2026">What are the main Profound alternatives in 2026?</h2>
<p>The main Profound alternatives with public self-serve pricing are Peec AI (from $95/mo), OtterlyAI (from $29/mo), Scrunch (Core $250/mo), AthenaHQ (Starter $295/mo) and Ahrefs Brand Radar (custom prompts included in paid Ahrefs plans). Profound itself lists a free 7-day trial and custom-priced Enterprise.</p>
<p>The key difference is price visibility. On ${modifiedDate}, Profound's pricing page showed no public monthly price for ongoing tracking, while every alternative above showed at least one public price.</p>
<h2 id="who-is-profound-for-and-why-do-teams-look-for-alternatives">Who is Profound for, and why do teams look for alternatives?</h2>
<p>Profound positions itself as an "AI Marketer" with credit-based agents plus Answer Engine Insights for AI visibility tracking. Its Enterprise plan lists capability for up to 9 answer engines, SSO/SAML and SOC 2.</p>
<p>Teams usually look elsewhere for one of three reasons: they want a public price before a sales call, they need ongoing tracking without an enterprise contract, or they mainly want monitoring rather than an agent and content platform.</p>
<h2 id="how-did-we-compare-these-tools">How did we compare these tools?</h2>
<p>We compared each tool on four criteria taken only from its official pricing page: which AI engines are covered, how many prompts each plan tracks, whether pricing is public, and how often prompts run.</p>
<p>We did not test output accuracy, and we do not score tools. AI answers vary from run to run, so any tracker's numbers depend on how many runs and which engines it samples. Ask each vendor how it samples before you compare dashboards.</p>
<h2 id="profound-alternatives-compared-features-and-prices">Profound alternatives compared: features and prices</h2>
<div class="article-table"><table>
<caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">Checked on official pages, 6 Nov 2026. Prices in USD, monthly billing unless noted. UNKNOWN means the official page did not state it.</caption>
<thead>
<tr><th scope="col">Tool</th><th scope="col">Entry plan and public price</th><th scope="col">Prompts on entry plan</th><th scope="col">Engines on entry plan</th><th scope="col">Run frequency</th><th scope="col">Top tier</th></tr>
</thead>
<tbody>
<tr><th scope="row">Profound</th><td>Trial, free (7 days)</td><td>50 (recommended set, not editable)</td><td>ChatGPT, Gemini, Google AI Overviews</td><td>Daily for 7 days</td><td>Enterprise, custom price; up to 9 engines</td></tr>
<tr><th scope="row">Peec AI</th><td>Starter, $95/mo</td><td>50</td><td>3 active models, chosen from ChatGPT, AI Mode, AI Overviews, Copilot, Gemini, Naver AI</td><td>Daily</td><td>Enterprise, custom; unlimited prompts</td></tr>
<tr><th scope="row">OtterlyAI</th><td>Lite, $29/mo ($25/mo annual)</td><td>15</td><td>ChatGPT, Google AI Overviews, Perplexity, Copilot (AI Mode, Gemini, Claude as paid add-ons)</td><td>Daily</td><td>Enterprise, custom; from 1,000 prompts</td></tr>
<tr><th scope="row">Scrunch</th><td>Core, $250/mo</td><td>125 (5,000 responses/mo)</td><td>ChatGPT, Perplexity, Google AIO, Copilot</td><td>UNKNOWN</td><td>Enterprise, custom; 9 LLMs</td></tr>
<tr><th scope="row">AthenaHQ</th><td>Starter, $295/mo (free Essential tier with $25 credit)</td><td>Unlimited prompts; 3,600 credits/mo, 1 credit = 1 AI response</td><td>"11 models" on Starter</td><td>UNKNOWN</td><td>Enterprise, custom</td></tr>
<tr><th scope="row">Ahrefs Brand Radar</th><td>Custom prompts included in paid Ahrefs plans (Lite: 5 prompts/day); add-on packs listed at $50/mo and $199/mo</td><td>5 (Lite)</td><td>AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Copilot; Claude on custom prompts</td><td>Daily, weekly or monthly per platform</td><td>Enterprise checks from 2,500/mo; Ahrefs Lite base price UNKNOWN on this page</td></tr>
</tbody>
</table></div>
<h2 id="what-is-each-alternative-good-at-and-what-is-its-weakness">What is each alternative good at, and what is its weakness?</h2>
<h3 id="profound">Profound</h3>
<p><strong>Best for:</strong> larger brands that want AI visibility tracking and credit-based marketing agents in one contract, with up to 9 engines, SSO/SAML and SOC 2.</p>
<p><strong>Weakness:</strong> no public price for ongoing tracking. The Trial lasts 7 days on a fixed prompt set you cannot edit, so you cannot test your own prompts before talking to sales.</p>
<h3 id="peec-ai">Peec AI</h3>
<p><strong>Best for:</strong> SEO and content teams that want transparent tiers ($95, $245, $495/mo) with daily tracking and unlimited seats, competitors and languages.</p>
<p><strong>Weakness:</strong> self-serve plans cap you at 3 active models. Wider engine coverage, including Perplexity and API-only models, sits on the custom Enterprise plan. For a deeper Peec comparison, see our <a href="/journal/peec-ai-alternatives">Peec AI alternatives</a> guide.</p>
<h3 id="otterlyai">OtterlyAI</h3>
<p><strong>Best for:</strong> solo marketers and small teams that want the lowest public entry price ($29/mo) with daily tracking on four engines.</p>
<p><strong>Weakness:</strong> the Lite plan tracks only 15 prompts, and Gemini, Google AI Mode and Claude are paid add-ons on every self-serve plan, so the real cost rises with engine coverage.</p>
<h3 id="scrunch">Scrunch</h3>
<p><strong>Best for:</strong> teams that want tracking plus site audits and page optimization in one self-serve plan (Core, $250/mo, 125 prompts).</p>
<p><strong>Weakness:</strong> Core covers 4 LLMs in 1 country, 1 language and 5 competitors. Gemini, Claude and Google AI Mode, plus API access, are Enterprise only.</p>
<h3 id="athenahq">AthenaHQ</h3>
<p><strong>Best for:</strong> teams that want broad model coverage ("11 models") and content optimization agents on one self-serve plan.</p>
<p><strong>Weakness:</strong> usage is credit-based (1 credit = 1 AI response, 3,600 credits/mo on Starter), so "unlimited prompts" is bounded by credits, and API access is a paid add-on with no public price.</p>
<h3 id="ahrefs-brand-radar">Ahrefs Brand Radar</h3>
<p><strong>Best for:</strong> teams already paying for Ahrefs, since every paid plan includes daily custom prompts, and the AI Visibility Index lets you benchmark any brand without setup.</p>
<p><strong>Weakness:</strong> included prompt quotas are small (5 per day on Lite), and Ahrefs states the index may have limited coverage for brands with little or no search volume (<a href="https://ahrefs.com/brand-radar">source</a>).</p>
<h2 id="profound-vs-peec-ai-which-should-you-choose">Profound vs Peec AI: which should you choose?</h2>
<p>Choose Peec AI if you want a public price and self-serve setup today: Starter is $95/mo for 50 daily prompts on 3 models. Choose Profound if you need enterprise controls, up to 9 engines and marketing agents, and you are ready for a custom contract.</p>
<p>For Peec-specific alternatives, read <a href="/journal/peec-ai-alternatives">Peec AI alternatives</a>. For a broader list beyond Profound, see <a href="/journal/best-ai-visibility-tools">best AI visibility tools</a>.</p>
<h2 id="do-you-need-a-tool-or-a-managed-service">Do you need a tool or a managed service?</h2>
${fig('profound-alternatives-tool-vs-service', TOOL_ALT)}
<p>A tracker is enough when you have someone in-house who can pick prompts, read the data and ship content and PR changes. A managed GEO/AEO service fits when you need the work done, not just measured: prompt design in your buyers' words, fixes on your site, and earned mentions.</p>
<p>They are different purchases. Agencies such as Nakama or Minuttia are not tracking software and do not belong in the tool table above. Many teams use both: a tracker for daily data and a service for execution.</p>
<p><strong>Nakama's weakness:</strong> we are a service, not a self-serve dashboard. You do not get instant logins on day one, and work is scoped and quoted before it starts.</p>
<p>If you are unsure which you need, an <a href="/services/ai-visibility-audit">AI visibility audit</a> shows where you stand today across engines before you commit to a tool or a retainer. For typical market costs, see <a href="/journal/geo-aeo-pricing">GEO and AEO pricing</a>.</p>
<h2 id="faq">FAQ</h2>
${faqHtml}
<h2 id="ready-to-decide">Ready to decide?</h2>
<p><a href="/pricing#quote">Get a quote</a> for managed GEO/AEO work scoped to your brand.</p>
<p>Not sure yet? Start with an <a href="/services/ai-visibility-audit">AI visibility audit</a>.</p>
<h2 id="about-the-author">About the author</h2>
<div class="author-box" id="yash-kumar">
<img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="https://www.nakama.in/authors/yash-kumar" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama's work on earning mentions on the sources those tools read.</p>
</div>
</div>`;

const decode = (s: string) => s
 .replace(/&quot;/g, '"')
 .replace(/&apos;/g, "'")
 .replace(/&#39;/g, "'")
 .replace(/&amp;/g, '&')
 .replace(/&lt;/g, '<')
 .replace(/&gt;/g, '>')
 .replace(/\s+/g, ' ')
 .trim();

function blocks(html: string): string[] {
 const cleaned = html.replace(/<figure[\s\S]*?<\/figure>/g, '').replace(/<nav[\s\S]*?<\/nav>/g, '');
 const out: string[] = [];
 for (const m of cleaned.matchAll(/<(h1|h3|p|li|caption|tr)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
  const tag = m[1];
  const inner = m[2];
  if (tag === 'tr') {
   const cells = [...inner.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(c => decode(c[1].replace(/<[^>]+>/g, '')));
   if (cells.some(Boolean)) out.push(cells.join(' | '));
   continue;
  }
  const text = decode(inner.replace(/<[^>]+>/g, ''));
  if (text) out.push(text);
 }
 return out;
}

function sectionsFromBody(html: string): {heading: string; paragraphs: string[]}[] {
 const parts = html.split(/<h2\b[^>]*>/);
 const sections: {heading: string; paragraphs: string[]}[] = [];
 const intro = blocks(parts[0]);
 if (intro.length) sections.push({heading: 'Introduction', paragraphs: intro});
 for (const part of parts.slice(1)) {
  const end = part.indexOf('</h2>');
  const heading = decode(part.slice(0, end).replace(/<[^>]+>/g, ''));
  sections.push({heading, paragraphs: blocks(part.slice(end + 5))});
 }
 return sections;
}

export const profoundAlternativesArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: H1,
 description: DESCRIPTION,
 readTime: '8 min read',
 motif: 'guide',
 metaTitle: META_TITLE,
 date: dayOf(PUBLISHED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Yash Kumar',
 /** GO-LIVE TODO: PREVIEW is the only switch. false => index,follow plus sitemap, llms and RSS. Leave corePages for ship GO. */
 noindex: PREVIEW,
 /** Keep reading stays on the Peec twin. A noindex preview can still show that one card. */
 nextSlug: 'peec-ai-alternatives',
 coverImage: {src: `/journal/${SLUG}/profound-alternatives-hero.png`, width: 1600, height: 900},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: profoundAlternativesJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
