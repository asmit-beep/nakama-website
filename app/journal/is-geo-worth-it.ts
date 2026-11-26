import type {Article} from './articles';
import {journalCta, stripJournalCta} from './cta';
import styles from './is-geo-worth-it.module.css';

/**
 * PUBLISH TIME for this preview. ISO 8601 with +05:30.
 * MODIFIED_AT, the visible Updated line and both JSON-LD dates read this constant.
 *
 * PREVIEW true: robots noindex,nofollow, and this note stays off the sitemap,
 * llms.txt, llms-full.txt, RSS, the resources index and the author index.
 * Set PREVIEW to false only on a merge GO.
 */
const PUBLISHED_AT = '2026-11-26T09:00:00+05:30';
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const dayOf = (iso: string) => iso.slice(0, 10);

/** D Mon YYYY, derived from PUBLISHED_AT. */
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const [PY, PM, PD] = dayOf(PUBLISHED_AT).split('-');
const PUBLISHED_DAY = `${Number(PD)} ${MONTHS[Number(PM) - 1]} ${PY}`;
const FRESHNESS = `Updated ${PUBLISHED_DAY}`;

const SLUG = 'is-geo-worth-it';
const TITLE = 'Is GEO Worth It for B2B SaaS? When It Pays Off (2026)';
const H1 = 'Is GEO worth it for a B2B SaaS company?';
const DESCRIPTION = 'Is generative engine optimization worth it for B2B SaaS? When AI search pays off, when it does not, and how to test GEO for 90 days before you commit.';
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const COVER_ALT = 'Weighing the cost of GEO against the value of one B2B SaaS deal.';
const OG_ALT = COVER_ALT;
const STAGE_ALT = 'When GEO is worth it for B2B SaaS, by company stage and sales motion.';
const BREAK_EVEN_ALT = 'Break-even formula for GEO in a B2B SaaS company, with a hypothetical example.';
const TEST_ALT = 'A 90-day GEO test with a baseline, a holdout group, a build phase, a re-run and pass and fail lines.';
const HERO_URL = `${CANONICAL}/cover.webp`;
const OG_URL = `${CANONICAL}/og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/yash-kumar';
const QUOTE_URL = 'https://www.nakama.in/pricing#quote';
const CHECK_URL = 'https://www.nakama.in/services/ai-visibility-audit#free-ai-visibility-check';

const FAQS: {q: string; a: string; html?: string}[] = [
 {
  q: 'Is GEO worth it for an early-stage SaaS?',
  a: 'Usually not before product-market fit. At seed, run a small test inside your SEO work: a 30-prompt baseline, accurate product facts and a few comparison pages. Spend more only when AI answers already name competitors for your category.',
 },
 {
  q: 'Do I need extra budget for GEO, or can it come out of SEO?',
  a: 'Start from your SEO and content budget. Google treats optimizing for its AI features as SEO, so on-site fixes belong there. Off-site work, such as earning mentions in comparisons, communities and reviews, usually needs its own budget line once a 90-day test passes.',
 },
 {
  q: 'Does GEO actually work?',
  a: 'For visibility, it can, and you can check it. StarAgile, an edtech company, was named first in 45 of 89 captured AI answers between 19 August and 9 November 2026. We found no published study that proves this kind of visibility causes pipeline, which is why the 90-day test pairs answer data with self-reported source.',
 },
 {
  q: 'Is a GEO agency worth it?',
  a: 'A GEO agency is worth it when your gap is off-site reach and you need work live this quarter. It is not worth it if you only need monitoring, which a tool covers. Judge any agency on dated, re-runnable proof and on a 90-day test with pass and fail lines.',
 },
 {
  q: 'Does GEO replace SEO?',
  a: 'No. GEO builds on SEO, because Google\'s AI features draw on its core ranking systems, as our guide to AEO vs SEO vs GEO explains.',
  html: 'No. GEO builds on SEO, because Google\'s AI features draw on its core ranking systems, as our guide to <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a> explains.',
 },
 {
  q: 'Is GEO worth it if AI referral traffic is tiny?',
  a: 'It can be. Referral clicks can undercount AI influence, because a buyer may read the answer and then search your brand or type your URL, which GA4 does not credit to AI. Judge GEO on named-first rate, self-reported source and pipeline over a full sales cycle, not on referral sessions alone.',
 },
 {
  q: 'Can anyone guarantee ChatGPT citations?',
  a: 'No. Nobody controls what an AI model says, and answers change by user, location and date. Ask instead for a baseline, the exact prompts tracked and dated captures you can re-run.',
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
   "alternativeHeadline": H1,
   "description": DESCRIPTION,
   "image": [
    HERO_URL,
    OG_URL
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
   "name": "Yash Kumar",
   "jobTitle": "Co-founder and CEO",
   "url": AUTHOR_URL,
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   }
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

export const isGeoWorthItJsonLd = articleLd;

const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;

const figure = (file: string, alt: string, width: number, height: number, eager = false) =>
 `<figure class="${eager ? 'hero' : styles.narrow}"><picture><source srcset="/journal/${SLUG}/${file}.webp" type="image/webp"><img src="/journal/${SLUG}/${file}.png" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'} decoding="async"></picture></figure>`;

const cta1 = journalCta({
 variant: 'inline',
 id: 'is-geo-worth-it-1',
 headline: 'Series A or later, with competitors already named in AI answers?',
 sub: 'Share your website and goals, and we will tell you on a 15-minute pricing call whether a 90-day test makes sense.',
 buttonHref: QUOTE_URL,
});
const cta3 = journalCta({
 variant: 'inline',
 id: 'is-geo-worth-it-3',
 headline: 'Want the baseline and the 90-day test run for you?',
 sub: 'Share your website and goals, then pick a time for a 15-minute pricing call.',
 buttonHref: QUOTE_URL,
});

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;
const h3 = (text: string) => `<h3 id="${faqId(text)}">${text}</h3>`;

const faqHtml = FAQS.map(({q, a, html}) => `${h3(q)}\n<p>${html ?? a}</p>`).join('\n');

const authorBox = `<div class="author-box" id="yash-kumar">
<img src="/authors/yash-kumar-nakama-ceo.webp" srcset="/authors/yash-kumar-nakama-ceo.webp 400w, /authors/yash-kumar-nakama-ceo-800.webp 800w" sizes="96px" alt="Yash Kumar, Co-founder and CEO of Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Yash Kumar</a> is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama Growth's work on earning mentions on the sources those tools read.</p>
</div>
</div>`;

const stackTable = (corner: string, columns: string[], rows: {label: string; cells: string[]}[]) => {
 const head = [`<th scope="col">${corner}</th>`, ...columns.map((column) => `<th scope="col">${column}</th>`)].join('');
 const body = rows.map((row) => `<tr><th scope="row">${row.label}</th>${row.cells.map((cell, index) => `<td data-label="${columns[index]}">${cell}</td>`).join('')}</tr>`).join('');
 return `<div class="stack-table"><table class="stack-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
};

const toc = `<details class="toc">
<summary>On this page</summary>
<ol>
<li><a href="#${faqId('Is GEO worth it for a B2B SaaS company?')}">Is GEO worth it for a B2B SaaS company?</a></li>
<li><a href="#${faqId('How does generative engine optimization work?')}">How GEO works</a></li>
<li><a href="#${faqId('What does GEO change in a SaaS buyer\'s shortlist?')}">What GEO changes in a shortlist</a></li>
<li><a href="#${faqId('What does the evidence say about AI search and SaaS pipeline?')}">What the evidence says</a></li>
<li><a href="#${faqId('When is GEO worth it for B2B SaaS, and when is it not?')}">When it is worth it, and when it is not</a></li>
<li><a href="#${faqId('What does GEO cost compared with what one deal is worth?')}">Cost vs one deal</a></li>
<li><a href="#${faqId('How long before you can judge GEO?')}">How long it takes</a></li>
<li><a href="#${faqId('How do you test whether GEO is working in 90 days?')}">The 90-day test</a></li>
<li><a href="#${faqId('What proof should you ask for before you pay?')}">Proof to ask for</a></li>
<li><a href="#${faqId('Is it worth hiring a GEO agency?')}">Is it worth hiring a GEO agency?</a></li>
<li><a href="#faq">FAQ</a></li>
</ol>
</details>`;

const b = (text: string) => `<strong>${text}</strong>`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb ${styles.page}"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<div class="geo-decision ${styles.page}">
<h1>${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Yash Kumar</a>, Co-founder and CEO, Nakama Growth</p>
${figure('cover', COVER_ALT, 1920, 1080, true)}
<p>Is GEO worth it for a B2B SaaS company? Yes, generative engine optimization (GEO) is worth it when your buyers build shortlists in AI answers, your category gets comparison and alternatives questions, and you can measure results against what one deal is worth. It is not worth it before product-market fit, or while your SEO basics are still weak.</p>
<p>So is it worth investing in GEO in 2026? That depends on whether AI answers shape your buyers' shortlist. GEO is the work of getting your brand named in answers from ChatGPT, Perplexity, Gemini and Google's AI features, as our ${link('https://www.nakama.in/services/geo', 'GEO services')} page sets out.</p>
<p>This guide does not list prices or rank agencies. It answers one question, is generative engine optimization worth it for your company, and shows how to test it before you commit.</p>
${h2('Key takeaways')}
<ul>
<li>${b('Buyers research software in AI.')} In G2's 2026 survey of more than 1,000 B2B software buyers, 82% had sourced software recommendations from an AI chatbot in the past 24 months.</li>
<li>${b('The traffic is small.')} Across 100 sites, ChatGPT sent 0.62% of the sessions Google organic sent. Judge GEO on referral clicks alone and it will look worthless.</li>
<li>${b('Conversion evidence is mixed.')} In Octane11's vendor data, B2B accounts arriving from AI closed at 2.5 times the organic rate, a correlation Octane11 says is not a causal effect. The SEO Works found AI traffic to 10 B2B product sites converting at 0.62 times organic.</li>
<li>${b('Cited is not recommended.')} In one engagement, a B2B software brand was cited in 98% of observed AI answers but recommended in 17% of decision scenarios. Measure "named first", not mentions.</li>
<li>${b('Test before you sign.')} Run 90 days with a dated baseline, a holdout prompt group, pass and fail lines, and a break-even number built from your own deal size.</li>
</ul>
${toc}
<blockquote><p><strong>How we checked</strong></p><p>We opened every outside figure in this guide at its original source on 26 Nov 2026 and put them in one table, with who was measured and when. Figures we could not confirm at the source are left out. Client results come from Nakama Growth's published case study and case studies page. They count AI answers, not traffic, pipeline or revenue. The stage table, checklists and 90-day test are our view from client work.</p></blockquote>
${h2('Is GEO worth it for a B2B SaaS company?')}
<p>GEO is worth it for a B2B SaaS company when three things are true: buyers in your category ask AI tools to compare vendors, competitors get named in those answers, and you can tell within a quarter whether you are named more often. Whether GEO is worth the investment depends more on stage and sales motion than on budget.</p>
<p><strong>Table 1. Is GEO worth it, by stage and sales motion (our view)</strong></p>
${stackTable('Stage', ['Product-led (PLG)', 'Sales-led'], [
 {label: 'Before product-market fit', cells: [
  `${b('Not yet.')} Fix positioning and activation first. There is little for an AI answer to repeat.`,
  `${b('Not yet.')} Founder-led sales will teach you more than a prompt tracker.`,
 ]},
 {label: 'Seed', cells: [
  `${b('Small test')} inside your SEO work: comparison pages, accurate product facts, and the same 30-prompt baseline the full test uses.`,
  `${b('Test only if')} AI answers already name competitors for your category. Baseline before you spend.`,
 ]},
 {label: 'Series A to B', cells: [
  `${b('Worth a 90-day test.')} Track sign-ups by AI referrer and a "how did you hear about us" field.`,
  `${b('Usually worth it.')} Shortlists form before the first call, so your named-first rate on comparison prompts matters.`,
 ]},
 {label: 'Series C and later', cells: [
  `${b('Worth it')} for contested comparison and alternatives queries. Run it as part of search, not as a side project.`,
  `${b('Worth it,')} judged on answer data first and pipeline after two or three quarters, because cycles are long.`,
 ]},
])}
${figure('stage-grid', STAGE_ALT, 1600, 1260, false)}
<p>In short, GEO pays when there is a shortlist to get onto and a buyer who uses AI to build it. If most of your deals come from partners, referrals or outbound with no real comparison stage, the case is weaker at any stage.</p>
${cta1}
${h2('How does generative engine optimization work?')}
<p>Generative engine optimization works on the sources AI answers draw from. When a buyer asks a question, engines such as ChatGPT search, Perplexity and Google AI Overviews retrieve web pages and build an answer from them. GEO works to make those sources describe you accurately, then measures, prompt by prompt and engine by engine, whether you get named.</p>
<p>Google describes this process for its own AI features: results from its index first, then related "fan-out" searches, then links to the pages that corroborate the answer (${link('https://developers.google.com/search/docs/fundamentals/gen-ai-attribution-factuality', 'Google Search Central, attribution and factuality')}, last updated 24 Nov 2026).</p>
<p>On your own site, GEO means stating product facts plainly. Off your site, it means getting mentioned for the right use cases on the third-party pages engines already cite: comparisons, reviews, community threads and video. For how GEO relates to SEO and AEO, see ${link('https://www.nakama.in/journal/aeo-vs-seo-vs-geo', 'AEO vs SEO vs GEO')}.</p>
${h2('What does GEO change in a SaaS buyer\'s shortlist?')}
<p>GEO changes which vendors an AI answer names, in what order, and for what reasons. When a buyer asks "best [category] for [use case]" or "[competitor] alternatives", your brand gets one of four outcomes, and only the first two help you win a place on the shortlist:</p>
<ul>
<li>${b('Named first:')} you are the top pick, or the first row of the comparison table.</li>
<li>${b('Named:')} you are on the list, but not first.</li>
<li>${b('Cited only:')} the answer links one of your pages but does not name you as an option.</li>
<li>${b('Absent:')} you are not there at all.</li>
</ul>
<p>Many trackers blend these into a single "visibility" score, which hides the gap that matters. Bill Hunt's B2B software client, cited 98% of the time but recommended 17% of the time, shows that gap (Table 2 has the source). In our own reporting, "cited" never counts as a win. The ${link('https://www.nakama.in/work/staragile', 'StarAgile case study')} reports named first, named and cited as separate counts.</p>
<p>So "is GEO worth it" really asks something narrower: is being named first on your buyers' shortlist prompts worth what it costs to get there?</p>
${h2('What does the evidence say about AI search and SaaS pipeline?')}
<p>We found no published study that shows GEO causing SaaS pipeline. What the evidence does show: buyers use AI to build shortlists, AI sends little measurable traffic, and conversion studies disagree depending on who measured what. Read the figures below by type: demand, traffic, conversion, timing and recommendation.</p>
<p><strong>Table 2. Outside evidence on AI search and B2B buying</strong></p>
${stackTable('Type', ['Finding', 'Who was measured', 'Source', 'Date'], [
 {label: 'Demand', cells: [
  '82% of buyers sourced software recommendations from an AI chatbot in the past 24 months.',
  'Survey of more than 1,000 B2B software buyers and decision makers',
  link('https://company.g2.com/news/buyer-behavior-2026', 'G2, 2026 Buyer Behavior Report'),
  '22 Jul 2026',
 ]},
 {label: 'Demand', cells: [
  'Half of those buyers said AI had its greatest impact when narrowing and comparing options.',
  'Same G2 survey',
  'G2, 2026 Buyer Behavior Report',
  '22 Jul 2026',
 ]},
 {label: 'Demand', cells: [
  'Review sites (38%) edged out AI chatbots (37%) as the top source shaping shortlists.',
  'Same G2 survey',
  'G2, 2026 Buyer Behavior Report',
  '22 Jul 2026',
 ]},
 {label: 'Traffic', cells: [
  'ChatGPT sessions equaled 0.62% of Google organic sessions (0.73% with all other LLMs included).',
  '12 months of GA4 data, 100 websites, more than 145 million sessions',
  link('https://www.mariehaynes.com/geo-is-a-distraction/', 'Marie Haynes, "GEO is a distraction"'),
  '21 Oct 2026',
 ]},
 {label: 'Traffic', cells: [
  'Organic search sent 39 times more sessions than AI assistants.',
  '95 websites, Sep 2025 to Aug 2026',
  link('https://www.seoworks.co.uk/downloads/ai-referral-traffic-benchmark/', 'The SEO Works, AI Referral Traffic Benchmark'),
  '7 Sep 2026, updated 14 Oct 2026',
 ]},
 {label: 'Conversion', cells: [
  'AI referrals delivered 3.2 conversions for every 100 from organic search.',
  '63 of those websites',
  'The SEO Works, AI Referral Traffic Benchmark',
  '7 Sep 2026, updated 14 Oct 2026',
 ]},
 {label: 'Conversion', cells: [
  'AI traffic to B2B product sites converted at 0.62 times the organic rate.',
  '10 B2B product websites',
  'The SEO Works, AI Referral Traffic Benchmark',
  '7 Sep 2026, updated 14 Oct 2026',
 ]},
 {label: 'Traffic', cells: [
  'Users clicked a traditional result on 8% of Google visits with an AI summary, against 15% without one.',
  'Browsing data from 900 US adults, 68,879 Google searches, March 2025',
  link('https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/', 'Pew Research Center'),
  '22 Jul 2025',
 ]},
 {label: 'Traffic', cells: [
  'Users clicked a link inside the AI summary on 1% of visits with one.',
  'Same Pew data',
  'Pew Research Center',
  '22 Jul 2025',
 ]},
 {label: 'Conversion', cells: [
  '1.22% of accounts that visited through an AI engine closed a won deal in Q3 2026, against 0.49% from organic search (2.5 times), holding for 11 of 13 clients. Octane11 states this is a correlation, not a causal effect.',
  'Vendor data: 650 million B2B sessions matched to client CRMs, Sep 2025 to Sep 2026',
  link('https://www.octane11.com/insights/insights-state-of-b2b-ai-search-q3-26/', 'Octane11, State of B2B AI Search Vol. 3'),
  '3 Nov 2026',
 ]},
 {label: 'Traffic', cells: [
  'AI was 2.4% of B2B search sessions in Q3 2026.',
  'Same Octane11 data',
  'Octane11, State of B2B AI Search Vol. 3',
  '3 Nov 2026',
 ]},
 {label: 'Timing', cells: [
  'In 72% of AI-touched won deals, the first AI visit came before the opportunity was created.',
  'Same Octane11 data',
  'Octane11, State of B2B AI Search Vol. 3',
  '3 Nov 2026',
 ]},
 {label: 'Timing', cells: [
  'The last AI visit came a median 70 days before close, against 21 days for organic.',
  'Same Octane11 data',
  'Octane11, State of B2B AI Search Vol. 3',
  '3 Nov 2026',
 ]},
 {label: 'Conversion', cells: [
  'ChatGPT referrals converted above paid social but below every other traditional channel, and did better in complex product categories.',
  '973 e-commerce websites, 12 months, more than 50,000 ChatGPT referral transactions',
  link('https://pubsonline.informs.org/doi/10.1287/mksc.2025.0489', 'Kaiser and Schulze, Marketing Science'),
  'Published online 21 Apr 2026',
 ]},
 {label: 'Recommendation', cells: [
  'A specialized B2B software company was cited in 98% of observed AI responses but recommended in 17% of decision scenarios, and 8% where supporting evidence was absent.',
  'One client engagement',
  link('https://www.searchenginejournal.com/is-geo-visibility-delivering-business-value-or-are-we-measuring-the-wrong-outcome/594064/', 'Bill Hunt, Search Engine Journal'),
  '25 Nov 2026',
 ]},
 {label: 'Guidance', cells: [
  '"Optimizing for generative AI search is optimizing for the search experience, and thus still SEO." Google\'s AI features are "rooted in our core Search ranking and quality systems."',
  'Official documentation',
  link('https://developers.google.com/search/docs/fundamentals/ai-optimization-guide', 'Google Search Central'),
  'Last updated 10 Jul 2026',
 ]},
])}
<p>Three readings for a SaaS team:</p>
<ol>
<li>${b('Demand is real, and it sits at the comparison step.')} That is where GEO does its work. G2's review-site finding also means your review profile is part of GEO, not a separate project.</li>
<li>${b('Referral traffic undercounts.')} In Pew's March 2025 data, Google users clicked a link inside the AI summary on just 1% of visits with one, and a traditional result on 8%. If GA4 referrals are your only yardstick, GEO will always look small.</li>
<li>${b('Conversion is unsettled.')} Octane11's 2.5 times is vendor data and correlation, and an account can sit in both groups. The SEO Works found the opposite for B2B product sites, from only ten of them. The peer-reviewed Kaiser and Schulze study points toward complex purchases doing better, which is closer to how SaaS is bought, but it studied e-commerce, not SaaS.</li>
</ol>
<p>Google's position matters for budgeting: it treats optimizing for its AI features as SEO. GEO spend should build on the SEO you already have, not replace it.</p>
${h2('When is GEO worth it for B2B SaaS, and when is it not?')}
<p>GEO is worth it for B2B SaaS when buyers shortlist through AI and you can act on what a baseline shows. It is not worth it when the basics are missing or nobody will measure the result. Score yourself on both lists below before you talk to anyone about budget.</p>
<p><strong>Likely worth it if most of these are true:</strong></p>
<ul>
<li>Sales calls confirm buyers ask AI tools to compare vendors in your category.</li>
<li>Comparison, alternatives and "best X for Y" prompts in your category name competitors, and you are missing or not first.</li>
<li>You have a G2, Capterra or similar review footprint that answers can draw on.</li>
<li>Your pricing model, integrations, security and use cases are published in plain language.</li>
<li>Someone can earn mentions off your own site: comparisons, communities, video, press.</li>
<li>One closed deal is worth enough that a few extra opportunities would cover a quarter of work.</li>
<li>You can add a "how did you hear about us" field and read GA4 by AI referrer.</li>
</ul>
<p><strong>Likely not worth it yet if any of these are true:</strong></p>
<ul>
<li>You are before product-market fit, or still changing who you sell to.</li>
<li>Your site does not rank in Google for your own category terms. Start with a ${link('https://www.nakama.in/journal/geo-audit', 'GEO audit')} and SEO basics.</li>
<li>AI answers in your category name no vendors at all, only definitions.</li>
<li>Nearly all deals come from partners, referrals or outbound, with no comparison stage.</li>
<li>Nobody will own the baseline and re-run it.</li>
<li>You need revenue proof within 30 days. The test takes a quarter, and pipeline lags further.</li>
</ul>
<p>Our own case study shows the limits. In the StarAgile results window, StarAgile was not named first on any of 9 PMP or 6 SAFe queries, and was first on 1 of 6 DevOps queries. Visibility came where the work went and where the brand had proof. It did not spread to other topics by default.</p>
<blockquote><p>Not sure which list you match? Get a ${link(CHECK_URL, 'free AI visibility check')}: we run 1 to 3 buyer prompts (yours, plus up to 2 we write) on 2 engines, 3 runs each, against up to 3 competitors you name, and email you the results. It is a check, not a full measurement.</p></blockquote>
${h2('What does GEO cost compared with what one deal is worth?')}
<p>Compare GEO's cost with one deal by working out break-even: the number of AI-sourced opportunities a 90-day test must produce to pay for itself. Do this before you try to model GEO ROI. Retainers vary with scope and the engines covered, so price your own scope against our guide to ${link('https://www.nakama.in/journal/geo-aeo-pricing', 'what GEO costs in 2026')}.</p>
<p><strong>Break-even formula (fill in your own numbers)</strong></p>
<ol>
<li>Gross profit per deal = first-year contract value (ACV) × gross margin</li>
<li>Value of one AI-sourced opportunity = gross profit per deal × opportunity-to-close win rate</li>
<li>Opportunities needed to break even = GEO cost for the test period ÷ value of one AI-sourced opportunity</li>
</ol>
<p><strong>Hypothetical example (not a client, not a quote):</strong> ACV of $30,000 × 80% margin = $24,000 gross profit per deal. At a 25% win rate, each opportunity is worth $6,000. Divide your 90-day quote by $6,000. The result is how many AI-sourced opportunities the quarter's work must eventually produce to pay back.</p>
<p>Two rules keep the math honest:</p>
<ul>
<li>${b('Use first-year value only.')} Lifetime value makes almost any spend look cheap.</li>
<li>${b('Count self-reported AI sources.')} A buyer who met you in ChatGPT can arrive later as Direct or branded search, where GA4 will not credit AI. A free-text "how did you hear about us" field catches some of them.</li>
</ul>
<p>Where the money comes from: on-site fixes usually fit your SEO and content budget, and off-site work needs its own line once the test passes (see the FAQ below).</p>
<p>If break-even needs more opportunities than your whole inbound pipeline produces in a quarter, GEO is not your constraint. Fix pipeline first.</p>
${figure('break-even', BREAK_EVEN_ALT, 1600, 890, false)}
${h2('How long before you can judge GEO?')}
<p>You can judge visibility in about 90 days, because that is long enough to ship work and re-run a fixed prompt set. You can judge pipeline only after your sales cycle has run at least once more, so report the two separately and do not expect closed revenue from the first quarter.</p>
<p>Octane11's data, a correlation rather than proof, points the same way. AI visits tend to come early: in most AI-touched won deals, the first AI visit came before the opportunity existed, and the last came a median 70 days before close. If your cycle runs six months, a 90-day test can show changes in answers, not closed revenue.</p>
<p>StarAgile shows the visibility clock. It is an edtech company (professional certification training), not SaaS:</p>
<ul>
<li>The engagement started on 12 June 2026.</li>
<li>On 3 August, StarAgile told us it had "little to no visibility on ChatGPT."</li>
<li>By 31 August, ChatGPT listed StarAgile in its comparison table for "Best CSPO Training".</li>
<li>Between 19 August and 9 November 2026, StarAgile was named first in 45 of 89 captured answers across Google AI Overviews, Google AI Mode, ChatGPT and Perplexity, on 23 of 48 tracked buyer queries.</li>
</ul>
<p>These are counts of dated AI answers. They are not traffic, pipeline or revenue figures, and we make no such claims.</p>
${h2('How do you test whether GEO is working in 90 days?')}
<p>Test GEO with a fixed prompt set, a dated baseline, and pass and fail lines agreed before work starts. Run the same prompts on the same engines on day one and day 90, then judge the change against your break-even number. This is the method we use; adapt the numbers to your category.</p>
<p><strong>Days 1 to 14: baseline</strong></p>
<ul>
<li>Write 30 buyer prompts: comparisons, alternatives to your top three competitors, "best [category] for [use case]", and pricing or integration questions. Type them without a year.</li>
<li>Hold back 10 of the 30 as a holdout group. Ship no work against them, so you have a comparison on day 90. The other 20 are your covered prompts.</li>
<li>Run all 30 on the engines your buyers use, at least three times each, and record named first, named, cited only or absent for every run.</li>
<li>Record branded search impressions in Google Search Console and Direct sessions in GA4 for the same period. A buyer who meets you in an AI answer can come back that way, and GA4 will not credit that visit to AI.</li>
<li>Add a free-text "how did you hear about us" field to demo and sign-up forms, and set up an AI referrer view in GA4.</li>
<li>Set your break-even number from the formula above.</li>
</ul>
<p><strong>Days 15 to 75: ship</strong></p>
<ul>
<li>Fix product facts that AI answers get wrong or cannot find: pricing model, integrations, security, use cases.</li>
<li>Publish comparison and alternatives pages you can defend.</li>
<li>Earn mentions on the sources those answers already pull from: review sites, communities, comparison articles and video.</li>
</ul>
<p><strong>Days 76 to 90: re-run and judge</strong></p>
<ul>
<li>Re-run all 30 prompts on the same engines, the same number of times, and compare against day one. Pull the same Search Console and GA4 views.</li>
</ul>
<p><strong>Table 3. Pass and fail lines for a 90-day GEO test (our view)</strong></p>
${stackTable('Signal', ['Pass', 'Fail'], [
 {label: 'Named-first rate on covered prompts', cells: [
  'Up against the baseline on at least two engines',
  'Flat or down on every engine',
 ]},
 {label: 'Holdout gap', cells: [
  'Covered prompts improve more than held-back prompts',
  'Covered and held-back prompts move the same',
 ]},
 {label: 'Shipped work', cells: [
  'Pages and placements you can open and date',
  'A dashboard and a plan, nothing live',
 ]},
 {label: 'Accuracy', cells: [
  'Wrong facts in answers corrected',
  'The same errors at day 90',
 ]},
 {label: 'Buyer signal', cells: [
  'Some forms mention ChatGPT, Perplexity or "AI"',
  'No mentions and no AI-referred sessions',
 ]},
 {label: 'Break-even path', cells: [
  'Opportunities on course for your break-even number within one sales cycle',
  'No plausible route to break-even',
 ]},
])}
<p>If the test passes on visibility but your cycle is longer than 90 days, extend it and check pipeline after one full cycle. If it fails on shipped work, stop: the problem is execution, not GEO. To report results, use our ${link('https://www.nakama.in/journal/ai-visibility-report-template', 'AI visibility report template')}, and see how to ${link('https://www.nakama.in/journal/track-brand-mentions-in-ai-search', 'track brand mentions in AI search')} engine by engine.</p>
${figure('90-day-test', TEST_ALT, 1600, 1150, false)}
${cta3}
${h2('What proof should you ask for before you pay?')}
<p>Ask for named, dated AI answers with the query behind them, so you can re-run them yourself. A screenshot with no query, client name or date proves nothing. Ask too whether "named" and "cited" are counted separately, because a link to your page is not a recommendation.</p>
<ul>
<li>Dated captures by engine, with the exact prompt.</li>
<li>Named first, named and cited reported separately.</li>
<li>Gaps reported next to wins.</li>
<li>Live placements you can open today.</li>
</ul>
<p>Our ${link('https://www.nakama.in/work', 'case studies')} page lists live placements for B2B SaaS clients that you can check today: Synup (local listings software, 4), Inventive AI (AI RFP software, 4), HubEngage (internal communications, 4) and BacklinkOS (backlink management, 3). Each comes with the query, so you can copy it and run it on the engine that recorded it. They are documented AI answer placements, not pipeline or revenue figures. Live answers vary by account, location and date.</p>
<p>For named first, named and cited counted separately, with gaps next to wins, see the ${link('https://www.nakama.in/work/staragile', 'StarAgile case study')}.</p>
<p>Want to see where you stand before you ask anyone for proof? Get a ${link(CHECK_URL, 'free AI visibility check')}.</p>
${h2('Is it worth hiring a GEO agency?')}
<p>Hiring a GEO agency is worth it when your 90-day test points to an off-site gap and nobody in-house owns AI visibility. An agency suits teams whose gap is off-site reach and who need work live this quarter. It is not worth it if you only need monitoring, which a tool covers.</p>
<p>An in-house owner suits teams that will fund AI visibility for years and can ship on-site changes fast. Tools alone suit teams that are still measuring. We compare the options in detail in ${link('https://www.nakama.in/journal/geo-agency-vs-in-house', 'in-house team, agency or tools')}.</p>
<p>If an agency fits, start with ${link('https://www.nakama.in/journal/best-geo-agencies-for-saas', 'GEO agencies for SaaS, compared')}, and check any agency against our ${link('https://www.nakama.in/journal/how-to-hire-an-aeo-agency', 'questions to ask before you hire')}. If you want Nakama Growth to run the test, see the next step below.</p>
${h2('FAQ')}
${faqHtml}
<aside class="j-cta j-cta--band" aria-labelledby="cta-is-geo-worth-it-band-t">
<div class="j-cta-copy">
<p class="j-cta-eyebrow"><i aria-hidden="true"></i>Next step</p>
<p class="j-cta-title" id="cta-is-geo-worth-it-band-t">Find out if GEO is worth it for your SaaS</p>
<p class="j-cta-sub">Share your website and goals. On a 15-minute pricing call we confirm your goals, channels and where you appear today, then send a written proposal with scope, timeline and price. If a test is not worth it yet, we will say so.</p>
<ol class="j-cta-steps"><li>Share the basics</li><li><span class="j-cta-nw">15-minute</span> pricing call</li><li>Written proposal</li></ol>
</div>
<div class="j-cta-actions">
<a class="j-cta-btn" href="https://www.nakama.in/pricing#quote" id="cta-is-geo-worth-it-band-go">Get a quote</a>
<button type="button" class="nkf-btn" aria-haspopup="dialog">Book a call</button>
</div>
</aside>
${h2('About the author')}
${authorBox}
</div>`;

const decode = (s: string) => s
 .replace(/&quot;/g, '"')
 .replace(/&apos;/g, "'")
 .replace(/&#39;/g, "'")
 .replace(/&amp;/g, '&')
 .replace(/&lt;/g, '<')
 .replace(/&gt;/g, '>')
 .replace(/\u2011/g, '-')
 .replace(/\s+/g, ' ')
 .trim();

function blocks(html: string): string[] {
 const cleaned = stripJournalCta(html).replace(/<figure[\s\S]*?<\/figure>/g, '').replace(/<nav[\s\S]*?<\/nav>/g, '').replace(/<div class="author-box"[\s\S]*?<\/div>\s*<\/div>/g, '');
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

export const isGeoWorthItArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '20 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 modifiedAt: MODIFIED_AT,
 authorName: 'Yash Kumar',
 /** PREVIEW true: noindex,nofollow, and off the sitemap, llms files, RSS, resources and the author index. */
 noindex: PREVIEW,
 nofollow: PREVIEW,
 /** Keep reading is the GEO audit card. A noindex preview can still show that one card. */
 nextSlug: 'geo-audit',
 coverImage: {src: `/journal/${SLUG}/cover.webp`, width: 1920, height: 1080, alt: COVER_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: isGeoWorthItJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
