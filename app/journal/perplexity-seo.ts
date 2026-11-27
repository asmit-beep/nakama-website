import type {Article} from './articles';
import {journalCta, stripJournalCta} from './cta';

/**
 * PUBLISH TIME for this article. ISO 8601 with +05:30.
 * This one constant feeds the Article and WebPage datePublished and dateModified,
 * og/article published and modified times (via pageMeta), the RSS pubDate, the sitemap
 * lastmod (via `date`), and the visible freshness line. Set the real go-live time here at merge.
 *
 * PREVIEW is false: noindex is off, so this note is listed in the sitemap, llms.txt,
 * llms-full.txt, RSS, the resources index and the author index (feedArticles, articlesBy
 * and the resources page all filter on noindex).
 */
export const PERPLEXITY_SEO_PUBLISHED_AT = '2026-11-18T03:27:00+05:30';
const PUBLISHED_AT = PERPLEXITY_SEO_PUBLISHED_AT;
const MODIFIED_AT = '2026-11-28T02:40:00+05:30';
const PREVIEW = false;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

const SLUG = 'perplexity-seo';
const TITLE = "How to rank in Perplexity: a Perplexity SEO guide (2026)";
const H1 = "How to rank in Perplexity: a Perplexity SEO guide (2026)";
const DESCRIPTION = "How to rank in Perplexity, a Perplexity SEO guide built on Perplexity's docs and labelled studies: getting cited, PerplexityBot vs Perplexity-User.";
const FRESHNESS = `Published ${shortDate(PUBLISHED_AT)}. Last updated ${shortDate(MODIFIED_AT)}.`;
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const HERO_ALT = "Nakama journal cover on a dark background. Text reads How to rank in Perplexity, with the subhead What Perplexity’s docs and studies say gets cited, pills for Crawler access, Page structure and Tracking, and Checked 18 Nov 2026. On the right, a hand-drawn outline illustration of an AI answer card with grey placeholder text lines and small numbered citation markers 1, 2 and 3, above a staggered stack of three source cards numbered 1 to 3; card 2 is outlined brighter, marked with an orange dot and labelled Your page.";
const OG_ALT = "Nakama journal share card reading How to rank in Perplexity, What Perplexity’s docs and studies say gets cited, Checked 18 Nov 2026. On the right, a hand-drawn outline illustration of an AI answer card with grey placeholder text lines and small numbered citation markers 1, 2 and 3, above a staggered stack of three source cards numbered 1 to 3; card 2 is outlined brighter, marked with an orange dot and labelled Your page.";
const HERO_URL = `${CANONICAL}/${SLUG}-hero.png`;
const HERO_4X3_URL = `${CANONICAL}/${SLUG}-hero-4x3.png`;
const HERO_1X1_URL = `${CANONICAL}/${SLUG}-hero-1x1.png`;
const OG_URL = `${CANONICAL}/${SLUG}-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/sandeep-kumar';
const QUOTE_URL = 'https://www.nakama.in/pricing#quote';

/** One array renders the visible FAQ HTML and the FAQPage schema, so both match word for word. */
const FAQS: {q: string; a: string}[] = [
 {
  q: "What is Perplexity SEO?",
  a: "Perplexity SEO is the work of getting your pages cited in Perplexity's answers. It covers letting PerplexityBot crawl your site, writing pages that answer buyer questions directly, keeping facts in plain text, and earning mentions on the third-party sites Perplexity cites. It does not mean using Perplexity as an SEO research tool.",
 },
 {
  q: "Does Perplexity respect robots.txt?",
  a: "PerplexityBot does. Perplexity says it will not index the full or partial text of a page that disallows it, though it may still index the domain, headline and a brief factual summary. Perplexity-User is different: its docs say it generally ignores robots.txt rules, because a user requested the fetch.",
 },
 {
  q: "How long do robots.txt changes take to show in Perplexity?",
  a: "Perplexity says it may take up to 24 hours for its systems to reflect robots.txt changes. Each setting works independently, so a change for PerplexityBot does not change Perplexity-User. Firewall rules are separate again, so check your logs after any change.",
 },
 {
  q: "Can you pay Perplexity to be cited?",
  a: "We found no Perplexity documentation that offers paid citations. Its Publishers' Program and Comet Plus share revenue with publisher partners, and its 2024 launch post said it would introduce sponsored related follow-up questions that brands pay for. Neither is a way to buy a citation in an answer.",
 },
 {
  q: "How often should you check Perplexity for brand mentions?",
  a: "Check on a fixed schedule and judge the trend over weeks, not one result. A University of St. Gallen preprint found a single run essentially uninformative for a brand's detection rate and recommends rolling aggregation over two to four weeks for stable per-brand estimates. Keep the same prompt list each time so months compare.",
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
    HERO_URL,
    HERO_4X3_URL,
    HERO_1X1_URL
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
  },
  {
   "@type": "Person",
   "@id": `${AUTHOR_URL}#person`,
   "name": "Sandeep Kumar",
   "jobTitle": "SEO and GEO Specialist",
   "url": AUTHOR_URL,
   "image": {
    "@type": "ImageObject",
    "url": "https://www.nakama.in/authors/sandeep-kumar-nakama-seo-geo-800.webp",
    "contentUrl": "https://www.nakama.in/authors/sandeep-kumar-nakama-seo-geo-800.webp",
    "width": 800,
    "height": 800,
    "caption": "Sandeep, SEO and GEO Specialist at Nakama Growth"
   },
   "worksFor": {
    "@id": "https://www.nakama.in/#organization"
   },
   "sameAs": [
    "https://www.linkedin.com/in/marketingbysandeep/"
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

export const perplexitySeoJsonLd = articleLd;

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

/** Journal CTAs (cta.ts, Kaimen spec v1.0.1, Sozo CLEAR). Copy verbatim from cta/mocks/HANDOFF.md. Each one replaces its lead-in line and the bare Get a quote link. */
const cta1 = journalCta({
 variant: 'inline',
 id: 'perplexity-seo-1',
 headline: 'Want us to run these six steps?',
 sub: 'Tell us your category and the questions your buyers ask. We confirm scope on a 15-minute pricing call, then send a written proposal.',
 buttonHref: QUOTE_URL,
});
const cta2 = journalCta({
 variant: 'inline',
 id: 'perplexity-seo-2',
 headline: 'Missing an owner for part of this?',
 sub: 'Crawler access, page rewrites or monthly prompt sampling. Tell us which parts your team cannot staff and where you are stuck.',
 buttonHref: QUOTE_URL,
});
/** End band. The free AI visibility check secondary link is on by default; secondaryLabel: null switches it off. */
const ctaBand = journalCta({
 variant: 'band',
 id: 'perplexity-seo-3',
 headline: 'Cover Perplexity alongside the other AI engines',
 sub: 'Tell us where you stand and we’ll come back with a plan and a price.',
 buttonHref: QUOTE_URL,
});

const authorBox = `<div class="author-box" id="sandeep-kumar">
<img src="/authors/sandeep-kumar-nakama-seo-geo.webp" srcset="/authors/sandeep-kumar-nakama-seo-geo.webp 400w, /authors/sandeep-kumar-nakama-seo-geo-800.webp 800w" sizes="96px" alt="Sandeep, SEO and GEO Specialist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a> is an SEO and GEO Specialist at Nakama Growth in Delhi. He writes content built for AI answers: pages that answer a buyer's question in plain words, so ChatGPT, Perplexity and Google AI Overviews can quote them. His focus is B2B software comparison content that AI tools can pick up and cite.</p>
</div>
</div>`;

/* Hero: shown once, below the byline as on chatgpt-business-hub. Eager with fetchpriority high, WebP with a PNG fallback. og:image and twitter:image use the -og file. */
const coverHtml = `<figure><picture><source srcset="/journal/${SLUG}/${SLUG}-hero.webp" type="image/webp"><img src="/journal/${SLUG}/${SLUG}-hero.png" alt="${HERO_ALT}" width="1600" height="900" fetchpriority="high" decoding="async"></picture></figure>`;

/* H1: same override as chatgpt-business-hub (lift the shared 18ch cap, balance the lines). Text unchanged. */
const H1_STYLE = 'max-width:none;text-wrap:balance';

/** On this page: same nav.toc markup as chatgpt-business-hub, placed after the first answer section. Labels are the H2 headings as written; hrefs come from faqId so each one resolves to its H2 id. */
const toc = `<nav class="toc" aria-labelledby="toc-h"><p class="toc-head" id="toc-h">On this page <span>8 sections</span></p><ol><li><a href="#${faqId("How to rank in Perplexity: which steps come first?")}">How to rank in Perplexity: which steps come first?</a></li><li><a href="#${faqId("How does Perplexity choose which sources to cite?")}">How does Perplexity choose which sources to cite?</a></li><li><a href="#${faqId("How do you optimize crawler access, page structure and freshness for Perplexity?")}">How do you optimize crawler access, page structure and freshness for Perplexity?</a></li><li><a href="#${faqId("Perplexity SEO vs traditional SEO: what actually changes?")}">Perplexity SEO vs traditional SEO: what actually changes?</a></li><li><a href="#${faqId("How do you track Perplexity visibility?")}">How do you track Perplexity visibility?</a></li><li><a href="#${faqId("What should you not count on in Perplexity SEO?")}">What should you not count on in Perplexity SEO?</a></li><li><a href="#${faqId("Should you do Perplexity SEO yourself or get help?")}">Should you do Perplexity SEO yourself or get help?</a></li><li><a href="#${faqId("FAQ")}">FAQ</a></li></ol></nav>`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="${faqId(H1)}" style="${H1_STYLE}">${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a>, SEO and GEO Specialist, Nakama Growth</p>
${coverHtml}
<p>Perplexity SEO is the work of getting your pages cited in Perplexity's answers. Perplexity searches the web in real time and adds numbered citations to each answer. To get cited, let PerplexityBot crawl your site, make one page the clearest answer to each buyer question, starting with its title, and earn mentions on the third-party sites Perplexity already cites.</p>
<p>One note on intent. Some people search "perplexity seo" to use Perplexity as a research tool for their own SEO work. This page is not about that. Whether you call it Perplexity AI SEO or SEO for Perplexity, it covers one job: becoming a source Perplexity cites.</p>
<p>Everything below comes from Perplexity's own documentation or from third-party studies we name with their publisher and date. We report what Perplexity says and what each study observed. None of it is a confirmed ranking factor, and no one outside Perplexity can promise a citation.</p>
<blockquote>
<p><strong>Quick answer</strong></p>
<ul>
<li>Perplexity says PerplexityBot "is designed to surface and link websites in search results" and recommends allowing it in robots.txt.</li>
<li>Perplexity-User fetches pages when a user asks a question, and Perplexity's docs say it "generally ignores robots.txt rules". Treat the two agents as separate rules.</li>
<li>Perplexity says robots.txt changes can take up to 24 hours to show in its systems.</li>
<li>What Perplexity cites depends on the questions. Reddit, YouTube and Wikipedia led across US queries on all topics in Ahrefs' November 2026 data, while publishers and G2 led for B2B software prompts in a Citlyze vendor study.</li>
<li>A single prompt run tells you little. A University of St. Gallen preprint calls one run "essentially uninformative" for estimating how often a brand appears.</li>
</ul>
</blockquote>
${h2("What does Perplexity document, and what have studies observed?")}
<p>Perplexity documents how its crawlers work and that every answer carries numbered citations. It does not publish how it picks which sources to cite. Studies fill part of that gap with observations, not rules. This table separates the two, so you can see what each claim rests on.</p>
<div class="article-table"><table>
<thead><tr><th scope="col">Claim</th><th scope="col">Type</th><th scope="col">Source and date</th><th scope="col">Caveat</th></tr></thead>
<tbody>
<tr><th scope="row">PerplexityBot surfaces and links sites in Perplexity search and is not used to crawl content for AI foundation models</th><td>Perplexity documentation</td><td><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers">Perplexity Crawlers</a>, read 18 Nov 2026</td><td>None; this is Perplexity's own statement</td></tr>
<tr><th scope="row">Perplexity-User "generally ignores robots.txt rules" because a user requested the fetch</th><td>Perplexity documentation</td><td>Perplexity Crawlers (same page), read 18 Nov 2026</td><td>Applies to user-requested fetches, not to crawling</td></tr>
<tr><th scope="row">A page blocked from PerplexityBot may still have its domain, headline and a brief factual summary indexed</th><td>Perplexity documentation</td><td><a href="https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt">Perplexity Help Center</a>, last modified 14 Sep 2026</td><td>Blocking is not the same as disappearing</td></tr>
<tr><th scope="row">Each answer includes numbered citations linking to the original sources</th><td>Perplexity documentation</td><td><a href="https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work">How does Perplexity work?</a>, last modified 12 Nov 2026</td><td>Says that it cites, not how it chooses</td></tr>
<tr><th scope="row">Reddit (24.6%), YouTube (14.2%) and Wikipedia (7.2%) led Perplexity's citations across US queries on all topics</th><td>Third-party study (vendor)</td><td><a href="https://ahrefs.com/blog/most-cited-domains-perplexity/">Ahrefs</a>, November 2026 snapshot, over 3.1 million US queries</td><td>Share of the top 50 domains' citations; all topics, not B2B only; page refreshes monthly, figures as of its 3 Nov 2026 update</td></tr>
<tr><th scope="row">For 110 B2B software prompts, Perplexity cited forbes.com in 66.4% of answers, pcmag.com in 46.4% and g2.com in 41.8%</th><td>Third-party study (vendor)</td><td><a href="https://www.citlyze.com/blog/ai-citation-sources-study-q3-2026">Citlyze</a>, 2 Oct 2026, run on 26 Sep 2026</td><td>API, one run per prompt; Citlyze sells an AI visibility tool</td></tr>
<tr><th scope="row">Title match went with more citations from Gemini and Perplexity, and showed no effect for ChatGPT</th><td>Third-party study (academic preprint)</td><td><a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, University of Toronto, 10 Oct 2026</td><td>Association within websites; preprint; Perplexity data from its Sonar API</td></tr>
</tbody>
</table></div>
${toc}
${h2("How to rank in Perplexity: which steps come first?")}
<p>To rank in Perplexity, start with the documented step, crawler access, then do the work studies associate with citations: match buyer questions closely and earn third-party mentions. "Rank" is a loose word here. Perplexity writes a new answer each time, so the goal is to be cited more often across many runs.</p>
<ol>
<li><strong>Allow PerplexityBot.</strong> Check robots.txt and your firewall, and allow Perplexity's published IP ranges. This is the one step Perplexity itself recommends.</li>
<li><strong>Record a baseline.</strong> Pick 10 to 20 unbranded buyer questions and run each several times before you change anything.</li>
<li><strong>Match the question in the title and the answer paragraph.</strong> Make one page the clearest answer to each buyer question, in the words buyers use.</li>
<li><strong>Put official facts in plain text.</strong> Prices, plans, features and company details belong on crawlable pages, not only in PDFs or images.</li>
<li><strong>Earn mentions on the sites Perplexity cites for your category.</strong> Find them in your baseline runs, then pitch, list or contribute where it fits.</li>
<li><strong>Recheck monthly.</strong> Compare cited sources and brand mentions against the baseline, not against one run.</li>
</ol>
<p>Steps 3 and 5 draw on associations in the studies covered in the next section, not on anything Perplexity documents. Step 1 rests on Perplexity's crawler documentation. Steps 2 and 6 follow from the measurement research in the tracking section.</p>
${cta1}
${h2("How does Perplexity choose which sources to cite?")}
<p>We found no Perplexity documentation on how it chooses which sources to cite. Its help center says it searches the internet in real time, gathers information from sources such as "articles, websites, and journals", and adds numbered citations. To get cited by Perplexity, you work from what studies observed, not from a published rule.</p>
<p>Its help center describes three steps: understanding the question, searching the web, then summarizing what it finds with citations (<a href="https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work">Perplexity Help Center</a>, last modified 12 Nov 2026). That tells you a page must be findable in Perplexity's search before it can be cited. It does not tell you how sources are ranked.</p>
<h3 id="do-your-own-pages-or-other-sites-get-cited-more">Do your own pages or other sites get cited more?</h3>
<p>Other sites, mostly, in the API studies we found, but company sites still count, especially for B2B software. In a Citlyze vendor study using Perplexity's API on 26 Sep 2026, publishers and independent review sites made up 53.9% of cited sources across 200 buyer prompts. Sites of vendors in the prompt's own category made up 6.1% (<a href="https://www.citlyze.com/blog/ai-citation-sources-study-q3-2026">Citlyze</a>, 2 Oct 2026).</p>
<p>That 6.1% is not all company-owned content. Sites of other companies, such as software roundups from businesses outside the category, took another 18.0%. For the 110 B2B software prompts alone, company-owned sites of any kind took 36.7% of Perplexity's cited sources, against 41.5% for publishers. Citlyze sells an AI visibility tool and ran each prompt once.</p>
<p>A University of Toronto preprint by Mahe Chen and Nick Koudas reports 6.8% of Perplexity's citations going to brand websites (<a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>, 10 Oct 2026). Read it with care. The answers came from Perplexity's Sonar API on one US internet provider's market, and 95.8% of those Perplexity answers cited nothing at all, so the figure describes only the minority that did and may not match the Perplexity app.</p>
<p>Our reading: in these samples, publisher and review sites carried the most weight, but for B2B software prompts company-owned pages still took over a third of Perplexity's cited sources in Citlyze's data. Keep your own pages clear and factual, and earn third-party mentions too. That is an inference from two API studies, not a documented factor.</p>
<h3 id="which-sites-does-perplexity-cite-most">Which sites does Perplexity cite most?</h3>
<p>It depends on the questions. Across over 3.1 million US queries on all topics, Ahrefs found Reddit, YouTube and Wikipedia at the top of Perplexity's citations in its November 2026 snapshot (the page refreshes monthly) (<a href="https://ahrefs.com/blog/most-cited-domains-perplexity/">Ahrefs</a>). For B2B software buyer prompts, Citlyze found publishers and G2 at the top instead.</p>
<p>The source mix also moved fast. In Citlyze's API sample, Reddit fell from 13.5% of Perplexity answers on 9 Aug 2026 to 1.5% on 26 Sep 2026. So build your list of target sites from your own category's prompts, and refresh it, rather than copying a global top 10.</p>
<p>A University of St. Gallen preprint found Perplexity spread its citations across domains the most evenly of four engines, with a mean Gini coefficient of 0.671, against 0.684 for ChatGPT, 0.723 for Gemini and 0.782 for Google AI Mode (<a href="https://arxiv.org/abs/2604.07585">arXiv 2604.07585</a>, April 2026). That study scraped each engine's web interface, not its API, using German-language prompts on Swiss servers, 24 Jan to 20 Mar 2026.</p>
<h3 id="does-page-wording-matter-for-perplexity">Does page wording matter for Perplexity?</h3>
<p>Wording that matches the question went with more citations in one study. In the Toronto preprint, title match went with more citations from Gemini and Perplexity and showed no effect for ChatGPT (<a href="https://arxiv.org/abs/2610.15033">arXiv 2610.15033</a>). The best-paragraph effect held for each engine.</p>
<p>For Perplexity, each went with about 5% more citations per standard deviation of match. These are associations within websites, and the paper is a preprint.</p>
<p>For the cross-engine method behind this, see our <a href="https://www.nakama.in/journal/answer-engine-optimization">answer engine optimization playbook</a>. This page covers only what is specific to Perplexity.</p>
${h2("How do you optimize crawler access, page structure and freshness for Perplexity?")}
<p>Perplexity optimization starts with crawler access, because Perplexity's documentation names PerplexityBot as the agent that surfaces and links sites in its search. Then make each page easy to quote: one question, a paragraph that answers it plainly, facts in plain text. We found nothing from Perplexity on freshness.</p>
<p>For the short multi-engine crawler checklist, see <a href="https://www.nakama.in/journal/geo-audit#step-3-which-ai-crawlers-should-i-allow">Step 3 of our GEO audit</a>. The detail below is Perplexity only.</p>
<h3 id="which-perplexity-user-agent-does-robots-txt-control">Which Perplexity user agent does robots.txt control?</h3>
<p>robots.txt controls PerplexityBot. Perplexity's crawler docs say Perplexity-User "generally ignores robots.txt rules" because a user requested the fetch, so one combined "Perplexity" rule does not do what most teams expect. Set PerplexityBot in robots.txt, and handle Perplexity-User at the firewall if you need to restrict it. Claude works differently, as our guide on <a href="https://www.nakama.in/journal/how-to-get-cited-by-claude">optimizing for Claude visibility</a> explains: Anthropic says its bots honor robots.txt, and that Claude-User lets site owners control which sites user-initiated requests can reach.</p>
<p>Perplexity's help center separately says an older feature that let users summarize a robots-blocked URL was disabled, so check your logs rather than assume either way.</p>
<div class="article-table"><table>
<thead><tr><th scope="col"></th><th scope="col">PerplexityBot</th><th scope="col">Perplexity-User</th></tr></thead>
<tbody>
<tr><th scope="row">What Perplexity says it does</th><td>Surfaces and links websites in Perplexity search results</td><td>Visits a page when a user asks a question, and may link it in the answer</td></tr>
<tr><th scope="row">Used for AI foundation model training?</th><td>No, per Perplexity</td><td>No, per Perplexity</td></tr>
<tr><th scope="row">Follows robots.txt?</th><td>Yes. Perplexity recommends allowing it so your site can appear</td><td>"Generally ignores robots.txt rules", since a user requested the fetch</td></tr>
<tr><th scope="row">If you block it</th><td>Perplexity may still index the domain, headline and a brief factual summary</td><td>A robots.txt block may not stop it, since the docs say it generally ignores robots.txt. Blocking it would need a firewall rule matched to perplexity-user.json (our inference from the docs' WAF notes)</td></tr>
<tr><th scope="row">Published IP list</th><td><a href="https://www.perplexity.ai/perplexitybot.json">perplexitybot.json</a></td><td><a href="https://www.perplexity.ai/perplexity-user.json">perplexity-user.json</a></td></tr>
</tbody>
</table></div>
<p>Sources: <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers">Perplexity Crawlers</a>, read 18 Nov 2026, and the <a href="https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt">Perplexity Help Center robots.txt article</a>, last modified 14 Sep 2026. Perplexity says each setting works independently and changes can take up to 24 hours to show.</p>
<p>A robots.txt that allows PerplexityBot looks like this:</p>
<pre><code>User-agent: PerplexityBot
Allow: /</code></pre>
<h3 id="can-a-firewall-block-perplexity-even-when-robots-txt-allows-it">Can a firewall block Perplexity even when robots.txt allows it?</h3>
<p>Yes. robots.txt never shows your firewall or CDN rules, and Perplexity's docs give setup notes for Cloudflare and AWS WAF. They advise matching each user agent against its own published IP ranges, and they warn that Cloudflare Bot Fight Mode cannot be skipped with WAF custom rules, so it can still challenge Perplexity's bots.</p>
<p>Perplexity says its IP ranges change and the JSON files are the source of truth. If your team allowlists by IP, update the list on a schedule. Then check your server logs for successful PerplexityBot requests.</p>
<h3 id="how-should-pages-be-structured-for-perplexity">How should pages be structured for Perplexity?</h3>
<p>Structure each page around one buyer question, with the question in the title and a paragraph that answers it plainly. The Toronto preprint associated title match and best-paragraph match with more Perplexity citations, and found the best-matching paragraph need not sit at the top of the page.</p>
<p>Keep official facts, such as prices and plans, in plain HTML text so a crawler can read them without running scripts.</p>
<h3 id="does-freshness-matter-in-perplexity">Does freshness matter in Perplexity?</h3>
<p>We found no Perplexity documentation or study that isolates freshness for Perplexity. Perplexity searches in real time, so, in our inference, an updated page can be found once it is recrawled. Keep a visible last-updated date and update facts when they change, so the facts Perplexity can quote stay current. Do not expect a date change alone to earn citations.</p>
${h2("Perplexity SEO vs traditional SEO: what actually changes?")}
<p>Perplexity SEO differs from traditional SEO in what you win and how you measure it. In Google you win a position in a ranked list. In Perplexity you win a numbered citation inside a written answer, which changes between runs. Crawler control and reporting work differently too. For general AEO and GEO definitions, see <a href="https://www.nakama.in/journal/aeo-vs-seo-vs-geo">AEO vs SEO vs GEO</a>.</p>
<div class="article-table"><table>
<thead><tr><th scope="col"></th><th scope="col">Traditional SEO (Google organic)</th><th scope="col">Perplexity SEO</th></tr></thead>
<tbody>
<tr><th scope="row">What the user sees</th><td>A ranked list of links</td><td>A written answer with numbered citations</td></tr>
<tr><th scope="row">What counts as a win</th><td>A position for a query</td><td>Being cited or named across repeated runs of a question</td></tr>
<tr><th scope="row">Crawler control</th><td>Googlebot, governed by robots.txt</td><td>Two agents: PerplexityBot follows robots.txt; Perplexity-User generally ignores it</td></tr>
<tr><th scope="row">Reporting</th><td>Search Console shows queries, clicks and positions</td><td>No equivalent report for site owners that we know of; you sample prompts and read logs</td></tr>
<tr><th scope="row">Stability</th><td>One check shows your position for that query</td><td>One run is "essentially uninformative" for a brand's detection rate, per the St. Gallen preprint</td></tr>
</tbody>
</table></div>
<p>The overlap is real. Crawlable pages, clear answers and earned mentions help in both. What changes is the unit of success and the way you check it.</p>
${h2("How do you track Perplexity visibility?")}
<p>You track Perplexity visibility by sampling a fixed set of buyer prompts, repeated over time, and reading your own logs and analytics. There is no Perplexity report for ordinary site owners like Search Console, that we know of. The full four-method system is in our guide to <a href="https://www.nakama.in/journal/track-brand-mentions-in-ai-search">tracking brand mentions in AI search</a>.</p>
<p>Three checks are specific to Perplexity:</p>
<ul>
<li><strong>Split the two agents in your logs.</strong> PerplexityBot requests mean crawling for search. Perplexity-User requests mean a user's question led Perplexity to your page. Confirm the request IPs against perplexitybot.json and perplexity-user.json before you trust the count.</li>
<li><strong>Watch referrals from perplexity.ai</strong> in your analytics, as a rough count of clicks from answers.</li>
<li><strong>Aggregate over weeks.</strong> The St. Gallen preprint recommends rolling aggregation over two to four weeks for stable per-brand estimates.</li>
</ul>
<p>Tool coverage of Perplexity varies, so check before you buy. Our comparison of <a href="https://www.nakama.in/journal/best-ai-visibility-tools">AI visibility tools</a> notes which ones include it.</p>
<p>If you want an outside baseline of where you show up in Perplexity and other engines, our <a href="https://www.nakama.in/services/ai-visibility-audit">AI visibility audit</a> covers it.</p>
${h2("What should you not count on in Perplexity SEO?")}
<p>Do not count on publisher programs, single test runs, blocking as a way to vanish, or one combined robots.txt rule. Each is a common shortcut that Perplexity's own documentation, or the research above, does not support. Here is what each one does and does not do.</p>
<ul>
<li><strong>The Publishers' Program or Comet Plus.</strong> Perplexity's <a href="https://www.perplexity.ai/hub/blog/introducing-the-perplexity-publishers-program">Publishers' Program</a> (30 Jul 2024) launched with partners such as TIME and Der Spiegel, and joining runs through publishers@perplexity.ai. These are publisher partnerships, not a self-serve tactic for a SaaS site.</li>
<li><strong>One "Perplexity" robots.txt rule.</strong> PerplexityBot and Perplexity-User follow different rules.</li>
<li><strong>Blocking as a way to vanish.</strong> A blocked page may still have its domain, headline and a brief factual summary indexed.</li>
<li><strong>One test run.</strong> Answers and cited sources change from run to run.</li>
<li><strong>Study findings as guaranteed factors.</strong> The studies above report associations in their own samples.</li>
</ul>
${h2("Should you do Perplexity SEO yourself or get help?")}
<p>Do it yourself if one person can own crawler access, page rewrites and monthly prompt sampling. Perplexity SEO stalls when no one has time to sample, because there is no first-party report to fall back on. It also stalls when firewall rules sit with another team, or when needed citations depend on coverage your team cannot earn.</p>
<p>If any of those apply, weigh the options in <a href="https://www.nakama.in/journal/geo-agency-vs-in-house">agency vs in-house</a>, check vendors with <a href="https://www.nakama.in/journal/how-to-hire-an-aeo-agency">how to hire an AEO agency</a>, and see <a href="https://www.nakama.in/journal/geo-aeo-pricing">GEO and AEO pricing</a> for cost.</p>
${cta2}
${h2("FAQ")}
${faqHtml}
${ctaBand}
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

export const perplexitySeoArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '14 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 modifiedAt: MODIFIED_AT,
 authorName: 'Sandeep Kumar',
 /** PREVIEW false: index,follow, and this note is listed in the sitemap, llms.txt, llms-full.txt, RSS, resources and the author index. */
 noindex: PREVIEW,
 /** Keep reading goes to the GEO audit guide. A noindex preview can still show that one card. */
 nextSlug: 'geo-audit',
 coverImage: {src: `/journal/${SLUG}/${SLUG}-hero.webp`, width: 1600, height: 900, alt: HERO_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: perplexitySeoJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
