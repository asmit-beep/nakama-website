import type {Article} from './articles';

/**
 * Preview for Yash, requested via Totonoe on 8 November 2026.
 * PUBLISH TIME is the article date in the same ISO 8601 +05:30 form sibling notes use.
 * It feeds datePublished and dateModified. The visible freshness line stays
 * "Updated 8 November 2026".
 *
 * PREVIEW stays true. That flag keeps robots noindex,follow and omits this note
 * from the sitemap, llms.txt, llms-full.txt, RSS, the resources index and the author index.
 * Do not set PREVIEW to false here. A production ship is a separate authorization.
 */
export const CHATGPT_SEO_AGENCY_PUBLISHED_AT = '2026-11-08T09:00:00+05:30';
const PUBLISHED_AT = CHATGPT_SEO_AGENCY_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const dayOf = (iso: string) => iso.slice(0, 10);

const SLUG = 'chatgpt-seo-agency';
const TITLE = 'ChatGPT SEO Agency: Services, Questions and Costs';
const H1 = 'ChatGPT SEO Agency: What It Does, What to Ask and Costs';
const DESCRIPTION = 'Understand what a ChatGPT SEO agency delivers, which ChatGPT-specific questions to ask and how to assess its quote. A buyer guide, not an agency ranking.';
const FRESHNESS = 'Updated 8 November 2026';
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const COVER_ALT = 'Nakama Growth journal cover: ChatGPT SEO Agency, a buyer guide to what the engagement covers, which questions to ask and how to assess a quote.';
const OG_ALT = 'ChatGPT SEO Agency: a Nakama Growth buyer guide to services, questions and how to assess a quote.';
const EVIDENCE_ALT = 'Four inspectable records in a ChatGPT SEO proposal: scope, evidence file, delivery record and interpretation.';
const LABELS_ALT = 'Three distinct ChatGPT report labels: a brand mention, a recommendation and a search-linked citation.';
const HERO_URL = `${CANONICAL}/chatgpt-seo-agency-cover.webp`;
const OG_URL = `${CANONICAL}/chatgpt-seo-agency-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/snehil-srivastava';
const AUTHOR_BIO = 'Snehil Srivastava is CEO and Creative Director of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask AI tools what to choose. He is a creative strategist and content lead. He has spent multiple years building brands.';
const QUOTE_URL = 'https://www.nakama.in/pricing#quote';

const FAQS: {q: string; a: string}[] = [
 {
  q: 'Is a brand mention the same deliverable as a citation?',
  a: 'No. Require the ChatGPT proposal to distinguish a name in the answer from a linked source. A recommendation is another claim that needs the surrounding answer for context. Do not accept one blended success label if the engagement promises to report those observations separately.',
 },
 {
  q: 'Can a ChatGPT-only report prove that page changes worked?',
  a: 'No, not by itself. A ChatGPT-only report can document an observed answer and the page work completed without proving that the page changes caused the answer. Ask whether the cited page already existed before the engagement, and what the team still treats as uncertain.',
 },
 {
  q: 'What if the evidence shows no brand mention?',
  a: 'The ChatGPT report should still include that tested prompt and raw answer. You can assess the agreed delivery even when the answer does not mention your business.',
 },
 {
  q: 'Does the proposal need to cover other answer platforms?',
  a: 'Only if the ChatGPT proposal includes that wider scope. Ask for ChatGPT observations to remain identifiable within a broader engagement. A combined dashboard can accompany the report, but it should not replace the ChatGPT evidence you agreed to receive.',
 },
];

const faqId = (q: string) => q.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const articleLd = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": `${CANONICAL}#article`,
   "headline": TITLE,
   "description": DESCRIPTION,
   "image": [
    HERO_URL
   ],
   "datePublished": PUBLISHED_AT,
   "dateModified": MODIFIED_AT,
   "inLanguage": "en",
   "articleSection": "Guide",
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
   "name": "Snehil Srivastava",
   "jobTitle": "CEO & Creative Director",
   "url": AUTHOR_URL,
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   },
   "description": AUTHOR_BIO,
   "sameAs": [
    "https://www.linkedin.com/in/snehil-srivastava-356739175/"
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

export const chatgptSeoAgencyJsonLd = articleLd;

const figure = (file: string, alt: string, width: number, height: number, eager = false) =>
 `<figure><img src="/journal/${SLUG}/${file}" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`;

const quoteLink = `<p><a href="${QUOTE_URL}">Get a quote</a></p>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const authorBox = `<div class="author-box" id="snehil-srivastava">
<img src="/authors/snehil-srivastava-nakama-ceo.webp" srcset="/authors/snehil-srivastava-nakama-ceo.webp 400w, /authors/snehil-srivastava-nakama-ceo-800.webp 800w" sizes="96px" alt="Snehil Srivastava, CEO &amp; Creative Director of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Snehil Srivastava</a> is CEO and Creative Director of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask AI tools what to choose. He is a creative strategist and content lead. He has spent multiple years building brands.</p>
</div>
</div>`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="${faqId(H1)}">${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Snehil Srivastava</a>, CEO &amp; Creative Director, Nakama Growth</p>
${figure('chatgpt-seo-agency-cover.webp', COVER_ALT, 1920, 1080, true)}
<p>A ChatGPT SEO agency is a paid engagement to improve how your business is represented in ChatGPT answers. Its proposal should identify the ChatGPT experience it will assess, the work it will deliver, and the evidence you can inspect. You are buying accountable work, not a reserved place in an answer.</p>
<p>To review a ChatGPT-scoped proposal against this guide:</p>
${quoteLink}
<h2 id="what-does-a-chatgpt-seo-agency-actually-cover">What does a ChatGPT SEO agency actually cover?</h2>
<p>A ChatGPT SEO agency covers an agreed scope of work tied to your business's appearance in ChatGPT, rather than an undefined promise of AI visibility. The proposal should name the buyer questions it covers and the ChatGPT experience it tests. Work for other platforms needs its own stated scope.</p>
<p>The distinction matters when a pitch says "ChatGPT" but the proposed report combines every platform into one visibility score. You cannot judge a ChatGPT engagement from that total. Ask which ChatGPT observations you will receive separately and what business questions those observations address.</p>
<p>If Google AI Overviews is also in scope, keep its deliverables separate; use our <a href="https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews">Google AI Overviews guide</a> for that engine's execution.</p>
<p>Broader <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">SEO, AEO or GEO</a> work may be part of the engagement. That does not make a separate ChatGPT fee necessary. The proposal needs to identify the additional ChatGPT-specific delivery, rather than charge again for an existing content assignment under a different label.</p>
<p>Nakama Growth does ChatGPT work as part of GEO/AEO engagements.</p>
<h2 id="what-deliverables-should-the-proposal-commit-to">What deliverables should the proposal commit to?</h2>
<p>A ChatGPT SEO proposal should commit to an inspectable record of the ChatGPT questions assessed, the work delivered against them and the answers observed afterward. ChatGPT SEO services need that connection between delivery and evidence. A dashboard total alone does not tell you what the engagement produced.</p>
<p>Ask to see the proposed handover format before agreeing to the work. It should let you move between a tested buyer question, its dated ChatGPT answer and the relevant delivery record without relying on a sales presentation.</p>
<p>For a ChatGPT-scoped engagement, useful commitments include:</p>
<ul>
<li>A scope record naming the ChatGPT experience, buyer questions and reporting boundaries.</li>
<li>An evidence file containing the tested prompts, dated raw answers and linked source URLs where present.</li>
<li>A delivery record identifying new or changed pages, the work completed and any off-site work included.</li>
<li>An interpretation that separates what ChatGPT said from what the team can reasonably attribute to its work.</li>
</ul>
${figure('chatgpt-seo-agency-evidence.webp', EVIDENCE_ALT, 1600, 900)}
<p>For off-site work, ask what evidence of delivery you receive. If a third-party page appears among ChatGPT's sources, the report should distinguish a placement the team secured from an independent page it merely discovered.</p>
<p>The acceptance test is whether you can inspect the promised work even when ChatGPT does not mention your business. Payment for completed delivery should not depend on calling every favorable answer a result of that delivery.</p>
<h2 id="which-chatgpt-evidence-should-you-ask-to-inspect">Which ChatGPT evidence should you ask to inspect?</h2>
<p>A ChatGPT SEO proposal should make its ChatGPT evidence inspectable at the answer level, with the test context attached. Ask for the raw answer behind each claim, a clear label for what happened and a connection to the work delivered. Treat these as proposed acceptance criteria, not promises of placement.</p>
<h3 id="which-chatgpt-experience-and-access-mode-does-the-evidence-cover">Which ChatGPT experience and access mode does the evidence cover?</h3>
<p>Ask where the ChatGPT test happened and what access mode the team used. Does the evidence come from the ChatGPT interface your buyers use, or an API-based test? What model or mode does the record identify? Does it record whether search was used?</p>
<p>The proposal should state the limits of that evidence. A test in one named setup should not silently become a claim about every ChatGPT experience. If the setup changes during the engagement, ask how the report will mark that change rather than combine unlike observations.</p>
<h3 id="does-the-raw-answer-support-the-label-in-the-report">Does the raw answer support the label in the report?</h3>
<p>Ask the team to show the dated ChatGPT answer behind an unlinked brand mention, a recommendation and a search-linked citation. Require separate labels for each. A recommendation should include the surrounding words that explain the use case, rather than a cropped brand name.</p>
${figure('chatgpt-seo-agency-labels.webp', LABELS_ALT, 1600, 900)}
<p>For a linked citation, ask for the visible source and destination URL. If ChatGPT cites your page without recommending your business, the report should preserve that distinction. If it recommends your business but links elsewhere, the evidence should show that too.</p>
<p>A screenshot can illustrate a ChatGPT observation. It should accompany the raw answer and tested prompt, not replace them. Otherwise, you cannot inspect what was asked or whether the surrounding answer changes the meaning.</p>
<h3 id="how-will-repeated-runs-and-locale-appear-in-the-record">How will repeated runs and locale appear in the record?</h3>
<p>Ask how the evidence file identifies repeated runs of the same ChatGPT prompt. It should preserve the dates and raw outputs, including answers without a mention. You need to see whether a highlighted answer was an isolated observation or one of several similar answers in the record.</p>
<p>Ask what locale, language and account context the ChatGPT record includes, and what remains unknown. The proposal should also say how changes to the tested prompts will be marked. A newly favorable question is not evidence that an unchanged buyer question improved.</p>
<h3 id="can-you-connect-a-source-page-to-work-the-team-delivered">Can you connect a source page to work the team delivered?</h3>
<p>Ask for the URL cited in the ChatGPT answer beside the page's delivery record. Was the page already live, newly published or changed during the engagement? For an unlinked mention, ask what connection the team can demonstrate, if any. It should not invent a source page the answer does not identify.</p>
<p>A dated change followed by a favorable answer does not, by itself, establish causation. The report should distinguish "we delivered this page" from "ChatGPT cited this page" and from "our work caused this citation."</p>
<p>If the ChatGPT proposal promises to make pricing or product facts citable, ask where those specifics will appear in visible page text you can open. A fact stored only in an image or script is not the same deliverable as a readable statement on the named page. Neither format is a citation guarantee.</p>
<h3 id="which-access-and-training-decisions-remain-yours">Which access and training decisions remain yours?</h3>
<p>Ask whether the proposed work includes changes involving ChatGPT access or training permissions, and which decisions require your approval. Require a clear description of the proposed change and its purpose before treating it as included work.</p>
<p>The proposal should separate a recommendation, your approval and an implemented change. An access decision is not evidence that ChatGPT recommended your business. A training-permission decision is not a purchased answer placement. Keep both separate from the raw-answer evidence used to assess the engagement.</p>
<p>If a proposal already isolates that ChatGPT evidence:</p>
${quoteLink}
<h2 id="how-should-you-assess-a-chatgpt-scoped-quote">How should you assess a ChatGPT-scoped quote?</h2>
<p>A ChatGPT-scoped quote should identify what you are paying for separately from any wider engagement. It should state whether setup and monitoring are separate, and whether content production, implementation and off-site work are included. A ChatGPT label on an existing retainer does not explain an additional charge.</p>
<p>Read the quote against the evidence package. If it includes monitoring but excludes page changes, do not budget as though execution is covered. If ChatGPT reporting is bundled with other platforms, ask which deliverables remain specifically attributable to the ChatGPT scope.</p>
<p>For market tables, use our <a href="https://www.nakama.in/journal/geo-aeo-pricing">GEO and AEO pricing guide</a>. Those broader benchmarks are not ChatGPT-only rates. This guide does not set a ChatGPT market average.</p>
<h2 id="when-is-a-chatgpt-engagement-the-wrong-purchase">When is a ChatGPT engagement the wrong purchase?</h2>
<p>A ChatGPT SEO engagement is the wrong purchase when its promised evidence cannot distinguish ChatGPT-specific work from a generic visibility report. It is also the wrong purchase if you cannot inspect the named ChatGPT setup, observation labels and delivery provenance described earlier.</p>
<p>If you want to carry out the work yourself, use our <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">ChatGPT implementation guide</a>.</p>
<p>If you want names to compare, use the <a href="https://www.nakama.in/journal/best-ai-seo-agencies">AI SEO agency comparison</a>. For dollar tables, return to the pricing guide linked above.</p>
<p>For the full procurement process and the agency-versus-consultant-versus-software decision, start at <a href="https://www.nakama.in/journal/how-to-hire-an-aeo-agency#step-1-decide-if-you-need-an-agency-at-all">Step 1: Decide if you need an agency at all</a> in the AEO agency hiring guide. This page's narrower job is to help you read a ChatGPT-specific proposal.</p>
<h2 id="what-else-should-a-chatgpt-proposal-clarify">What else should a ChatGPT proposal clarify?</h2>
<p>A ChatGPT SEO proposal should clarify the limits of the evidence alongside the deliverables. You need to know what the report can demonstrate when answers vary, when the brand appears without a link and when no mention appears. The answers below concern accepting ChatGPT-scoped work.</p>
${faqHtml}
<hr>
<p>For a ChatGPT scope you can assess against the evidence above:</p>
${quoteLink}
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

export const chatgptSeoAgencyArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '8 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Snehil Srivastava',
 /** Preview only. false would index this note and list it. Leave true. */
 noindex: PREVIEW,
 /** Keep reading stays on the AEO hiring guide. A noindex preview can still show that one card. */
 nextSlug: 'how-to-hire-an-aeo-agency',
 coverImage: {src: `/journal/${SLUG}/chatgpt-seo-agency-cover.webp`, width: 1920, height: 1080, alt: COVER_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: chatgptSeoAgencyJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
