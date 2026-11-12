import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. ISO 8601 with +05:30.
 * It feeds datePublished and dateModified. The visible freshness line stays
 * "Checked 12 November 2026".
 *
 * PREVIEW ONLY. This date is a preview placeholder; the production date is set on Yash GO.
 * PREVIEW true keeps robots at noindex,follow and leaves this note out of the sitemap,
 * llms.txt, llms-full.txt, RSS, the resources index and the author index (feedArticles,
 * articlesBy and the resources page all filter on noindex).
 */
export const TRACK_BRAND_MENTIONS_PUBLISHED_AT = '2026-11-12T09:00:00+05:30';
const PUBLISHED_AT = TRACK_BRAND_MENTIONS_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const dayOf = (iso: string) => iso.slice(0, 10);

const SLUG = 'track-brand-mentions-in-ai-search';
const TITLE = 'Best Ways to Track Brand Mentions in AI Search (2026)';
const H1 = 'How to track brand mentions in AI search, engine by engine';
const DESCRIPTION = 'Four ways to track brand mentions in AI search, from prompt sampling to logs, and what each one can show you on ChatGPT, Gemini and Copilot.';
const FRESHNESS = 'Checked 12 November 2026';
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const COVER_ALT = 'Four ways to track brand mentions in AI search, mapped against six AI engines.';
const OG_ALT = 'Track Brand Mentions in AI Search: four methods across six AI engines, a Nakama Growth journal guide.';
const RATE_ALT = 'Brand visibility in AI search measured as a rate across many runs, for example named in 5 of 8 runs, not as a ranking from a single answer.';
const MATRIX_ALT = 'Matrix of AI engines and tracking methods: prompt sampling, tools, first-party reports, analytics and logs.';
const HERO_URL = `${CANONICAL}/${SLUG}-cover.webp`;
const OG_URL = `${CANONICAL}/${SLUG}-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/asmit-choudhary';

const FAQS: {q: string; a: string}[] = [
 {
  q: 'Can Google Search Console show brand mentions in AI Overviews?',
  a: "Only when the mention comes with a link to your site. Search Console reports on your own pages, so it can show clicks and impressions from Google's AI features, but it cannot show an AI Overview that names your brand without linking to you. Use prompt sampling for unlinked mentions.",
 },
 {
  q: 'Can GA4 show when ChatGPT mentions my brand?',
  a: 'No. GA4 counts visits, not mentions. Its AI Assistant channel shows clicks from sources such as ChatGPT, Gemini and Copilot, but an answer that names your brand without a click leaves no trace there. Use prompt sampling to count mentions.',
 },
 {
  q: 'Do I need a paid tool to track brand mentions in AI search?',
  a: 'No. A frozen prompt list, a spreadsheet and fresh sessions are enough to start. A tool becomes worth paying for when you track many prompts across several engines and want daily history. Check how many runs sit behind each number before you trust it.',
 },
 {
  q: 'Why does my brand appear in one ChatGPT answer and not the next?',
  a: 'Because AI answers are sampled, not fixed. The same prompt can return a different set of brands and sources minutes apart, and ChatGPT does not search the web for every prompt. Judge your visibility by how often you appear across many runs, not by a single answer.',
 },
];

const faqId = (q: string) => q.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${CANONICAL}#article`,
   "headline": H1,
   "description": DESCRIPTION,
   "image": [
    HERO_URL
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en",
   "articleSection": "Measurement",
   "author": {
    "@id": `${AUTHOR_URL}#person`
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
   "@type": "WebPage",
   "@id": `${CANONICAL}#webpage`,
   "url": CANONICAL,
   "name": TITLE,
   "description": DESCRIPTION,
   "inLanguage": "en",
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
   "width": 1920,
   "height": 1080,
   "caption": COVER_ALT
  },
  {
   "@type": "ImageObject",
   "@id": `${CANONICAL}#ogimage`,
   "url": OG_URL,
   "contentUrl": OG_URL,
   "width": 1200,
   "height": 630,
   "caption": OG_ALT
  },
  {
   "@type": "Person",
   "@id": `${AUTHOR_URL}#person`,
   "name": "Asmit Choudhary",
   "jobTitle": "AI & GEO Strategist",
   "url": AUTHOR_URL,
   "image": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/authors/asmit-choudhary-nakama-ai-geo-800.webp",
    "contentUrl": "https://www.nakama.in/authors/asmit-choudhary-nakama-ai-geo-800.webp",
    "width": 800,
    "height": 800,
    "caption": "Asmit Choudhary, AI & GEO Strategist at Nakama Growth"
   },
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   },
   "sameAs": [
    "https://www.linkedin.com/in/asmit-c/"
   ]
  },
  {
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
     "name": TITLE,
     "item": CANONICAL
    }
   ]
  },
  {
   "@type": "FAQPage",
   "@id": `${CANONICAL}#faq`,
   "isPartOf": {
    "@id": `${CANONICAL}#webpage`
   },
   "mainEntity": FAQS.map(({q, a}) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
     "@type": "Answer",
     "text": a
    }
   }))
  }
 ]
};

export const trackBrandMentionsInAiSearchJsonLd = articleLd;

const figure = (file: string, alt: string, width: number, height: number, eager = false) =>
 `<figure><img src="/journal/${SLUG}/${file}" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`;

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const authorBox = `<div class="author-box" id="asmit-choudhary">
<img src="/authors/asmit-choudhary-nakama-ai-geo.webp" srcset="/authors/asmit-choudhary-nakama-ai-geo.webp 400w, /authors/asmit-choudhary-nakama-ai-geo-800.webp 800w" sizes="96px" alt="Asmit Choudhary, AI &amp; GEO Strategist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Asmit Choudhary</a> is an AI and GEO Strategist at Nakama Growth, based in India. He owns brand strategy end to end, shaping how a brand looks and sounds from the core and making every piece across AEO, GEO, Reddit and SEO clear, consistent and ready for AI answers from tools like ChatGPT, Perplexity and Google AI Overviews.</p>
</div>
</div>`;

const matrixTable = `<div class="article-table"><table>
<thead><tr><th scope="col">Engine</th><th scope="col">Prompt sampling</th><th scope="col">Tracking tools</th><th scope="col">First-party report</th><th scope="col">Analytics referral</th><th scope="col">Log signal</th></tr></thead>
<tbody>
<tr><th scope="row">ChatGPT</th><td>Yes</td><td>Yes</td><td>None</td><td>GA4 AI Assistant channel</td><td>OAI-SearchBot, ChatGPT-User</td></tr>
<tr><th scope="row">Perplexity</th><td>Yes</td><td>Yes</td><td>None</td><td>Referral from perplexity.ai</td><td>PerplexityBot, Perplexity-User</td></tr>
<tr><th scope="row">Gemini app</th><td>Yes</td><td>Yes</td><td>None</td><td>GA4 AI Assistant channel</td><td>Not separable from Google crawling</td></tr>
<tr><th scope="row">Google AI Overviews</th><td>Yes, plus "no overview" outcomes</td><td>Yes</td><td>Search Console</td><td>Counted in Organic Search</td><td>Googlebot only</td></tr>
<tr><th scope="row">Google AI Mode</th><td>Yes, as its own series</td><td>Yes</td><td>Search Console</td><td>Counted in Organic Search</td><td>Googlebot only</td></tr>
<tr><th scope="row">Copilot</th><td>Yes</td><td>Yes</td><td>Bing Webmaster Tools AI Performance</td><td>GA4 AI Assistant channel</td><td>Not covered here</td></tr>
</tbody>
</table></div>`;

/* Cover is page furniture (featured image, og/primary image, Keep reading card). It is not repeated in the body and does not replace the H1. */
const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="${faqId(H1)}">${H1}</h1>
<p class="byline">By <a href="${AUTHOR_URL}" rel="author">Asmit Choudhary</a>, AI &amp; GEO Strategist, Nakama Growth · ${FRESHNESS}</p>
${h2('What are the best ways to track brand mentions in AI search?')}
<p>Use four methods together, because no single one sees every engine. <strong>Prompt sampling</strong> shows whether answers name you. <strong>Tracking tools</strong> repeat that sampling at scale. <strong>First-party reports and analytics</strong> show the citations and clicks that Google, Microsoft and your own site can count. <strong>Log and citation checks</strong> show which AI systems fetch your pages and which sources they lean on. Of the six engines covered here, only Google's and Microsoft's public documentation describes a first-party report for site owners. For ChatGPT, Perplexity and the Gemini app, you have to sample.</p>
${h2('Is it possible to track brand mentions in AI search?')}
<p>Yes, as a rate across many runs, not as a ranking. Ask the same prompt enough times and you can say how often an engine names you, such as "named in 5 of 8 runs." A single answer cannot tell you that.</p>
<p><a href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/">SparkToro's research</a> found less than a 1 in 100 chance that ChatGPT or Google's AI returns the same list of brands twice across 100 runs of one prompt. The same work concluded that visibility measured as a percentage across many runs is a reasonable metric, while the order of brands in any one answer is too unstable to treat as a ranking. Track how often you appear, and treat position as secondary. Keep the run count next to any rate, such as 5 of 8, so the sample size stays visible.</p>
${figure(`${SLUG}-rate.webp`, RATE_ALT, 1600, 900)}
${h2('Why do AI answers change from run to run?')}
<p>Two things move at once: the model samples a different answer each time, and the sources it retrieves change from day to day. A University of St. Gallen team ran the same prompts repeatedly on ChatGPT, Gemini, Google AI Mode and Perplexity (<a href="https://arxiv.org/abs/2604.07585">Schulte et al., 2026</a>). Cited sources overlapped by only 34% to 42% from one day to the next. Even runs within the same 24 hours overlapped by 32% to 43%, so most of the change comes from the model itself, not from new content on the web.</p>
<p>Brand mentions were steadier than cited URLs in that study, with day-to-day overlap of 45% to 59%. That has a practical meaning: if you can only afford to track one thing, track whether your brand is named, and treat the list of cited URLs as diagnostic detail. The study used Swiss-German prompts on Swiss servers, so treat its numbers as a guide to scale rather than a benchmark for your market.</p>
${h2('Which method shows what, on which engine?')}
<p>Each engine exposes different signals. This table shows where each method works, based on the platforms' own documentation as of 12 November 2026.</p>
${matrixTable}
${figure(`${SLUG}-matrix.webp`, MATRIX_ALT, 1600, 1200)}
<p>The gap is plain once it is laid out: for three of the six engines, sampling is the only way to see an unlinked mention.</p>
${h2('Method 1: How does manual prompt sampling work?')}
<p>Manual sampling means running a fixed set of buyer prompts in each engine, in fresh sessions, and logging what comes back. It is the only method that works on every engine, and it is free.</p>
<p><strong>What it tells you:</strong> whether you are named, recommended or cited, which competitors appear instead, and whether the engine describes you accurately.</p>
<p><strong>What it can't tell you:</strong> how many real people saw the answer. You choose the prompts, so the result reflects your prompt list, not actual demand.</p>
<p><strong>How to run it:</strong> freeze 10 to 30 unbranded buyer prompts, run each one several times per engine in a fresh, logged-out session where the engine allows it, and log one row per run. Our <a href="https://www.nakama.in/journal/geo-audit#step-2-how-do-you-test-prompts-across-ai-engines">GEO audit guide</a> sets out the full protocol, and the <a href="https://www.nakama.in/journal/ai-visibility-report-template">AI visibility report template</a> gives you the sheet.</p>
<p><strong>Engine notes that change what you log:</strong></p>
<ul>
<li><strong>ChatGPT</strong> only searches the web for some prompts. In the St. Gallen data, 57.8% of ChatGPT runs returned no citations at all. Log a mention and a citation as separate fields, or you will undercount ChatGPT. Our <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt#how-do-you-track-brand-mentions-in-chatgpt">ChatGPT guide</a> covers the ChatGPT-specific details.</li>
<li><strong>Google AI Overviews</strong> often do not trigger at all. Count a search with no overview separately from one where the overview leaves you out.</li>
<li><strong>Google AI Mode</strong> may use different models from AI Overviews, so the answers and links differ, according to Google's page on <a href="https://developers.google.com/search/docs/appearance/ai-features">AI features and your website</a>. Keep it as a separate series.</li>
<li><strong>Gemini, Perplexity and Copilot</strong>: keep the prompt list and run count identical to the other engines so the series compare. The GEO audit guide above covers what to record for each one.</li>
</ul>
${h2('Method 2: What can tracking tools add, and what can\'t they?')}
<p>Tracking tools automate prompt sampling, usually daily, across several engines. They add scale and history. They do not add certainty.</p>
<p><strong>What they tell you:</strong> mention and citation trends across hundreds of prompts, competitor overlap and source domains, without someone running prompts by hand.</p>
<p><strong>What they can't tell you:</strong></p>
<ul>
<li>Whether their prompts match what your buyers actually type. Most tools generate or expand prompts, and SparkToro's study found that real people almost never phrase the same intent the same way.</li>
<li>Anything Google knows internally. Google's <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">guide to generative AI features</a> states that "no third-party tool has access to our internal ranking or AI systems."</li>
</ul>
<p>Before you buy, ask any tool three questions. How many runs per prompt per engine sit behind each number? Can you see the raw answers? Does it report engines separately? For a comparison of the tools themselves, see our <a href="https://www.nakama.in/journal/best-ai-visibility-tools">AI visibility tools guide</a>.</p>
${h2('Method 3: What do first-party reports and analytics show?')}
<p>First-party data shows the citations and clicks that platforms and your own analytics can count, and nothing else. It is the most trustworthy data you will get, and it covers only part of the picture.</p>
<p><strong>Google AI Overviews and AI Mode.</strong> Google's guide points site owners to a Generative AI performance report in Search Console for its generative AI features on Search and Discover. Its AI features page also says clicks from AI Overviews and AI Mode are counted in the Performance report under the "Web" search type. Check which view your property shows; our <a href="https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews#how-do-you-measure-ai-overview-visibility">AI Overviews guide</a> covers reading it. Like the rest of Search Console, it reports on your own pages, so a mention of your brand with no link to your site will not show there.</p>
<p><strong>Copilot.</strong> The <a href="https://www2.bing.com/webmasters/help/ai-performance-9f8e7d6c">AI Performance report in Bing Webmaster Tools</a> shows total citations, cited pages, page-level citation counts and the grounding queries behind them, across Microsoft Copilot, AI summaries in Bing and some partner experiences. Microsoft states the data is a sample, "not a complete log", and that very low citation activity may not appear. A preview Citation Share view shows your share of the citations for a grounding query, but it does not name the other sites. Microsoft is also clear that a citation is not a click.</p>
<p><strong>ChatGPT, Gemini and Copilot clicks in GA4.</strong> Google Analytics has an <a href="https://support.google.com/analytics/answer/9756891">AI Assistant default channel</a> for visits from sources such as ChatGPT, Gemini, Deepseek, Copilot and Grok. It excludes AI Overviews and AI Mode, which Google counts under Organic Search. So a GA4 report on "AI traffic" leaves out Google's own AI features unless you add Search Console. Some ChatGPT clicks also arrive with no referrer and show up as Direct, which our ChatGPT guide explains.</p>
<p><strong>What it can't tell you:</strong> anything about answers that mention you without a click or a link. Analytics counts visits, and the platform reports count citations of your pages.</p>
${h2('Method 4: What can log and citation checks reveal?')}
<p>Server logs show which AI systems fetched your pages, and citation checks show which sources an engine relied on. Neither one is a mention count, but both explain why mentions move.</p>
<p><strong>Logs.</strong> OpenAI documents <a href="https://platform.openai.com/docs/bots">two agents worth separating</a>: OAI-SearchBot crawls to surface sites in ChatGPT search, and ChatGPT-User visits a page when someone asks ChatGPT a question. Perplexity's <a href="https://docs.perplexity.ai/guides/bots">crawler documentation</a> makes the same split: PerplexityBot indexes for search, and Perplexity-User fetches a page in response to a user's question and may link it in the answer. A rise in the user-triggered agents on a page is a hint that the page is being used in live answers.</p>
<p>For Google, logs cannot separate AI features from search. Google's AI features page says robots.txt rules for Googlebot are the control for how sites are crawled for Search, AI included, so there is no separate AI Overviews crawler to watch.</p>
<p><strong>Citation checks.</strong> Open the URLs each engine cites for your priority prompts. Note which third-party pages name you, which name only competitors, and whether the cited page actually supports what the answer says. This turns a mention rate into a list of pages to earn or fix.</p>
<p><strong>What it can't tell you:</strong> whether a fetch led to a mention. A page can be fetched and not used, and your brand can be named from a page you do not own.</p>
${h2('How often should you sample?')}
<p>Run prompts in batches of at least 7 runs per prompt per engine, and read the results over a rolling two to four weeks. In the St. Gallen data, a single run was "essentially uninformative." The standard error on a brand's detection rate fell below 0.10 at 7 runs, and cited-source coverage needed 8 runs to reach similar precision. Across days, the standard error of a per-brand estimate fell below 0.05 at 24 days of daily data, which is why the authors recommend two-to-four-week rolling windows.</p>
<p>A practical schedule for a small team:</p>
<ul>
<li><strong>Prompt sampling:</strong> one batch of 7 or more runs per prompt per engine, weekly or monthly, always with the same frozen prompt list.</li>
<li><strong>First-party reports:</strong> check Search Console and Bing Webmaster Tools weekly. Bing refreshes its AI Performance data daily.</li>
<li><strong>Analytics and logs:</strong> review monthly, and annotate any known tracking breaks.</li>
</ul>
${h2('What should you log on each run?')}
<p>Log three yes or no fields per run: whether you were mentioned, whether you were recommended, and whether your site was cited. Report each as a count with the runs behind it, such as "mentioned in 4 of 7 Perplexity runs," and report engines separately rather than adding them into one score. The report template linked above turns those rows into a monthly score. If you also log position, average it across runs rather than reading it from one answer.</p>
${h2('Should you track brand mentions yourself or get help?')}
<p>Track it yourself if you can keep a frozen prompt list and log runs consistently every period. Get help when you need many prompts across several engines, or when you need someone to turn the results into fixes.</p>
<p>If you want to see where you stand first, request a <a href="https://www.nakama.in/services/ai-visibility-audit#free-ai-visibility-check">Free AI visibility check</a>: one to three prompts, two engines, three runs each, checked by a person and emailed. Our <a href="https://www.nakama.in/services/ai-visibility-audit">AI visibility audit</a> runs at least 7 dated runs per prompt per engine and adds a source map and a fix list.</p>
<h2 id="faq">FAQ</h2>
${faqHtml}
<h2 id="about-the-author">About the author</h2>
${authorBox}`;

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
 const cleaned = html.replace(/<figure[\s\S]*?<\/figure>/g, '').replace(/<nav[\s\S]*?<\/nav>/g, '').replace(/<div class="author-box"[\s\S]*?<\/div>\s*<\/div>/g, '');
 const out: string[] = [];
 for (const m of cleaned.matchAll(/<(h1|h3|p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
  const text = decode(m[2].replace(/<[^>]+>/g, ''));
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

export const trackBrandMentionsInAiSearchArticle: Article = {
 slug: SLUG,
 category: 'Measurement',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '10 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 modifiedAt: MODIFIED_AT,
 authorName: 'Asmit Choudhary',
 /** PREVIEW: noindex,follow and kept out of the sitemap, llms.txt, llms-full.txt, RSS, resources and the author index. */
 noindex: PREVIEW,
 /** Keep reading goes to the AI visibility report template. A noindex preview can still show that one card. */
 nextSlug: 'ai-visibility-report-template',
 coverImage: {src: `/journal/${SLUG}/${SLUG}-cover.webp`, width: 1920, height: 1080, alt: COVER_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: trackBrandMentionsInAiSearchJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
