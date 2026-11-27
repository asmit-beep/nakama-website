import type {Article} from './articles';
import {journalCta, QUOTE_URL, stripJournalCta} from './cta';

/**
 * Preview placeholder. ISO 8601 with +05:30.
 * PUBLISHED_AT and MODIFIED_AT feed the visible freshness line, JSON-LD,
 * og/article times and, once PREVIEW is false, the sitemap lastmod via `date`.
 * Ship time on Yash's GO. The "27 Nov 2026" line in the How we checked box is a fact-check date.
 *
 * PREVIEW false: robots index,follow, and this note is listed in the sitemap,
 * llms.txt, llms-full.txt, RSS, the resources index and the author index.
 */
const PUBLISHED_AT = '2026-11-28T02:40:00+05:30';
const MODIFIED_AT = '2026-11-28T02:40:00+05:30';
const PREVIEW = false;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

const SLUG = 'how-to-get-cited-by-claude';
const TITLE = "How to Get Cited by Claude: A 2026 Guide for SaaS Brands";
const H1 = "How to get cited by Claude: optimize your brand for Claude visibility";
const DESCRIPTION = "How to get cited by Claude and rank in Claude search: the bots to allow, the noindex trap, quotable pages and Team settings. Checked against Anthropic docs.";
/** Field-notes blurb for llms.txt. Applied only once PREVIEW is false and this note enters feedArticles. */
const LLMS_DESCRIPTION = "How to get cited by Claude, based on Anthropic's own documentation: which Anthropic bots to allow, how noindex keeps pages out of Claude, which three providers power Claude's web search, and how to write facts Claude can quote.";
const FRESHNESS = `Published ${shortDate(PUBLISHED_AT)}. Last updated ${shortDate(MODIFIED_AT)}.`;
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const HERO_ALT = "Nakama Growth journal cover on a dark background. Text reads How to get cited by Claude, with the subhead What Anthropic documents for SaaS brands, and pills for Search bots, Quotable facts and Team settings. On the right, an outline illustration of an AI answer card with numbered citation markers above a stack of three source cards.";
const FORK_ALT = "When Claude searches the web: stable questions are answered directly; current or changing ones trigger a search, typically 1 to 3 searches for a single fact, while comparative research can run 10 or more, with results from Brave Search, TurboPuffer and Parallel Web Systems.";
const BOTS_ALT = "Claude-SearchBot and Claude-User affect visibility in Claude search; ClaudeBot is a separate training choice.";
const HERO_PNG = `${CANONICAL}/${SLUG}-hero.png`;
const HERO_4X3_URL = `${CANONICAL}/${SLUG}-hero-4x3.png`;
const HERO_1X1_URL = `${CANONICAL}/${SLUG}-hero-1x1.png`;
const OG_URL = `${CANONICAL}/${SLUG}-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/sandeep-kumar';

/** One array renders the visible FAQ HTML and the FAQPage schema, so both match word for word. */
const FAQS: {q: string; a: string}[] = [
 {
  q: "How do I get my content cited by Claude?",
  a: "To get your content cited by Claude, allow Claude-SearchBot and Claude-User in robots.txt, keep noindex off the pages you want cited, and write short, dated facts that answer buyer questions on their own. Anthropic says every Claude response that uses web search includes citations, and Claude searches when a question depends on current facts, such as prices or products that might have changed.",
 },
 {
  q: "If I block ClaudeBot, will Claude stop citing my site?",
  a: "Anthropic does not document that blocking ClaudeBot removes a site from Claude's search answers. Anthropic calls ClaudeBot its training crawler, and restricting it signals that future content should be excluded from AI model training. Search indexing runs through Claude-SearchBot, and fetches a user asks for run through Claude-User. Anthropic says disabling either of those two may reduce your site's visibility in Claude's search results.",
 },
 {
  q: "Does Claude use Google to search the web?",
  a: "Anthropic does not list Google as a web search provider for Claude. Its Trust Center subprocessor list names three companies for web search: Brave Search, TurboPuffer and Parallel Web Systems. Google appears on that list only as Google Cloud Platform, for cloud infrastructure. Claude's image search is powered by Bing. Brave says its crawler will not crawl pages that Googlebot cannot crawl, so blocking Googlebot also blocks Brave's crawler.",
 },
 {
  q: "Does Claude read llms.txt?",
  a: "Anthropic has not documented that Claude reads llms.txt or uses it to choose sources. Anthropic's crawler and web search help pages cover robots.txt, noindex and citations, and none of them mentions llms.txt. Treat an llms.txt file as optional for Claude, and put the effort into crawler access, indexable pages and quotable facts until Anthropic documents otherwise.",
 },
 {
  q: "Does noindex keep a page out of Claude?",
  a: "Yes, for Claude answers that use web search. Anthropic says the noindex tag tells its search partners not to index your content, and that the content \"will not appear in Claude outputs that use web search.\" People can still open the page from a link. Check pricing, docs and changelog templates for a stray noindex before anything else.",
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
    HERO_PNG,
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
   "url": HERO_PNG,
   "contentUrl": HERO_PNG,
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
   "caption": HERO_ALT
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

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;
const h3 = (text: string) => `<h3 id="${faqId(text)}">${text}</h3>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const cta1 = journalCta({
 variant: 'inline',
 id: 'how-to-get-cited-by-claude-1',
 headline: 'Want these pages ready before your buyers ask?',
 sub: 'Share your site, goals, budget and timeline. We confirm scope on a 15-minute pricing call, then send a written proposal.',
 buttonHref: QUOTE_URL,
});
const cta2 = journalCta({
 variant: 'inline',
 id: 'how-to-get-cited-by-claude-2',
 headline: 'Missing an owner for part of this?',
 sub: 'Robots rules across subdomains, page rewrites or re-running buyer prompts across AI engines. Tell us which parts your team cannot staff.',
 buttonHref: QUOTE_URL,
});
/** End band. Secondary link is the default free AI visibility check. Steps are the default quote steps. */
const ctaBand = journalCta({
 variant: 'band',
 id: 'how-to-get-cited-by-claude-3',
 eyebrow: 'Next step',
 headline: 'See where AI engines cite you, and what to fix first',
 sub: "Tell us where you stand and we'll come back with a plan and a price.",
 buttonHref: QUOTE_URL,
});

const authorBox = `<div class="author-box" id="sandeep-kumar">
<img src="/authors/sandeep-kumar-nakama-seo-geo.webp" srcset="/authors/sandeep-kumar-nakama-seo-geo.webp 400w, /authors/sandeep-kumar-nakama-seo-geo-800.webp 800w" sizes="96px" alt="Sandeep, SEO and GEO Specialist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a> is an SEO and GEO Specialist at Nakama Growth in Delhi. He writes content built for AI answers: pages that answer a buyer's question in plain words, so ChatGPT, Perplexity and Google AI Overviews can quote them. His focus is B2B software comparison content that AI tools can pick up and cite.</p>
</div>
</div>`;

/** Hero sits once, right after the byline. Eager, fetchpriority high. Nothing else gets fetchpriority high. */
const coverHtml = `<figure><picture><source srcset="/journal/${SLUG}/${SLUG}-hero.webp" type="image/webp"><img src="/journal/${SLUG}/${SLUG}-hero.png" alt="${HERO_ALT}" width="1600" height="900" loading="eager" fetchpriority="high" decoding="async"></picture></figure>`;

const figure = (name: string, alt: string, width: number, height: number) =>
 `<figure><picture><source srcset="/journal/${SLUG}/${name}.webp" type="image/webp"><img src="/journal/${SLUG}/${name}.png" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async"></picture></figure>`;

const forkFig = figure(`${SLUG}-search-fork`, FORK_ALT, 1600, 1170);
const botsFig = figure(`${SLUG}-search-vs-training-bots`, BOTS_ALT, 1600, 950);

const toc = `<nav class="toc" aria-labelledby="toc-h"><p class="toc-head" id="toc-h">On this page, <span>8 sections</span></p><ol><li><a href="#${faqId("How do you rank in Claude, and how does Claude decide what to cite?")}">How do you rank in Claude, and how does Claude decide what to cite?</a></li><li><a href="#${faqId("Which Anthropic bots need access before Claude can cite you?")}">Which Anthropic bots need access before Claude can cite you?</a></li><li><a href="#${faqId("What makes content citeable by Claude?")}">What makes content citeable by Claude?</a></li><li><a href="#${faqId("How do Claude Team and Enterprise users find your brand?")}">How do Claude Team and Enterprise users find your brand?</a></li><li><a href="#${faqId("What happens when a buyer pastes your URL into Claude?")}">What happens when a buyer pastes your URL into Claude?</a></li><li><a href="#${faqId("How do apps built on the Claude API pick your domain?")}">How do apps built on the Claude API pick your domain?</a></li><li><a href="#${faqId("How do you remove or correct a page Claude shows?")}">How do you remove or correct a page Claude shows?</a></li><li><a href="#${faqId("FAQ")}">FAQ</a></li></ol></nav>`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="${faqId(H1)}" style="max-width:none;text-wrap:balance">${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a>, SEO and GEO Specialist, Nakama Growth</p>
${coverHtml}
<p>How to get cited by Claude comes down to three things Anthropic documents: let Claude-SearchBot and Claude-User reach your site, stay indexable by Anthropic's search partners, and publish short, current facts Claude can quote. Anthropic says every response that uses web search includes citations, so a cited page appears as a linked source in the answer.</p>
<p>Claude SEO, in this sense, means getting cited by Claude, not using Claude to do SEO. Some teams call it Claude search optimization. Learning how to optimize for Claude visibility means becoming a source Claude picks when buyers ask about your category.</p>
<p>This guide is for SaaS, tech and AI companies. Everything below comes from Anthropic's own documentation, one Brave help page, or outside studies we name. Anthropic documents its crawlers, its search providers and how citations work. It does not publish how Claude chooses which result to cite, so no one outside Anthropic can promise a citation.</p>
<blockquote><p><strong>Quick answer</strong></p><ul><li>Allow Claude-SearchBot and Claude-User. Anthropic says blocking either may reduce your visibility in Claude's search results.</li><li>Don't put noindex on pages you want cited. Anthropic says noindex tells its search partners not to send your content to Claude.</li><li>Claude's web search draws on three providers named in Anthropic's Trust Center: Brave Search, TurboPuffer and Parallel Web Systems. Anthropic doesn't say which one answers which question.</li><li>Anthropic's web search docs say Claude searches when a request depends on current or changing facts, such as prices or products that might have changed. For a SaaS company, that means pricing, integration, security and changelog pages.</li><li>Write facts that survive as a short quote. In the Claude API's web search tool, each citation's cited_text field holds "Up to 150 characters of the cited content." We found no quote length published for the Claude app.</li><li>On Claude Team and Enterprise plans, an Owner or Primary Owner must first turn on web search for the workspace.</li></ul></blockquote>
<p>Short on time? Jump to <a href="#which-claude-settings-should-a-saas-site-verify">the 7-point Claude check for SaaS sites</a>.</p>
<blockquote><p><strong>How we checked</strong></p><p>We started with published outside research on Claude citations: OtterlyAI's study of 379,321 Claude citations from June 2026, and Is My Brand in AI's review of the claims repeated across Claude ranking guides. We then read each Anthropic help center article, developer doc, engineering post and Trust Center page linked in this guide, plus Brave's crawler help page, all on 27 Nov 2026. Quotes are copied from those pages. Where Anthropic is silent, we say so.</p></blockquote>
${toc}
${h2("How do you rank in Claude, and how does Claude decide what to cite?")}
<p>You rank in Claude by being findable in the search sources Claude uses and by having a page that answers the question better than the other results. Claude decides what to cite from those search results. Anthropic's <a href="https://support.claude.com/en/articles/10684626-enable-and-use-web-search">web search help page</a> says Claude "processes multiple sources to find relevant content", but it does not publish a ranking formula.</p>
<p>So the work splits into two jobs you can control: getting into the results Claude receives, and being the page worth quoting once you are there. The cross-engine method is in our <a href="https://www.nakama.in/journal/answer-engine-optimization">answer engine optimization playbook</a>, and the ChatGPT side is in <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>. This page covers only what is specific to Claude: when it searches, where its results come from, what outside studies have seen, and which popular claims don't hold up.</p>
${h3("When does Claude search the web?")}
<p>Claude searches when the answer depends on fresh facts. Anthropic's <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool">web search tool docs</a> say "Claude searches when the request depends on information that is current, changing, or outside its training data." Its examples include "Current prices, rates, scores, or statistics" and "Information about specific organizations, people, or products that might have changed."</p>
<p>The same page says Claude answers directly without searching when the request draws on stable knowledge, such as established facts or coding concepts. In its section on search limits, it says single-fact queries typically use 1 to 3 searches, while comparative or multientity research can use 10 or more.</p>
<p>For a SaaS company, the pages most likely to be pulled into a live answer are the ones that change:</p>
<div class="article-table"><table><caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">Buyer questions in Claude and the SaaS page that should answer each</caption><thead><tr><th scope="col">Buyer question in Claude</th><th scope="col">What Claude may search for</th><th scope="col">SaaS page that should answer it</th></tr></thead><tbody><tr><td>"How much does [product] cost for 50 seats?"</td><td>Current prices</td><td>Pricing page with plans, limits and billing terms in plain text</td></tr><tr><td>"Does [product] integrate with Salesforce?"</td><td>Products that might have changed</td><td>Integration page per major tool, with setup notes</td></tr><tr><td>"Is [product] SOC 2 compliant?"</td><td>Organization facts that might have changed</td><td>Security or trust page with certifications and dates</td></tr><tr><td>"What's new in [product] this year?"</td><td>Recent events, news, or announcements</td><td>Changelog or release notes</td></tr><tr><td>"Best [category] tools for a mid-size team"</td><td>Comparative, multi-entity research</td><td>Category, comparison and use-case pages, plus third-party coverage</td></tr></tbody></table></div>
<p>Anthropic's docs say comparative research can use 10 or more searches, against 1 to 3 for a single fact, so comparison prompts can pull more sources into the answer: review sites, competitors and your own pages.</p>
${cta1}
${h3("Where do Claude's search results come from?")}
<p>Anthropic's <a href="https://trust.anthropic.com/subprocessors">Trust Center subprocessor list</a> names three companies with the purpose "Web Search": Brave Search, listed for all products, and TurboPuffer and Parallel Web Systems, each listed for all products except Claude for Government. Brave Search is one of three listed providers, not the whole story. Anthropic doesn't say which provider answers which question or how results are combined.</p>
<p>Google appears on the same list only as Google Cloud Platform, with the purpose "Cloud infrastructure", not web search.</p>
<p>Two controls follow from Anthropic's own wording. Its <a href="https://support.claude.com/en/articles/7996906-report-block-and-remove-content-from-claude">report, block and remove page</a> says the noindex tag "tells our partners not to index your content so that they don't send it to us in response to your web search query." A stray noindex on a pricing or docs page can therefore keep it out of Claude's search answers. Its web search help page also says "Image search is powered by Bing."</p>
<p>Brave's <a href="https://search.brave.com/help/brave-search-crawler">crawler help page</a> adds one detail for that provider: "if a domain or page is not crawlable by Googlebot, then Brave Search's bot will not crawl it either." Brave says its crawler does not advertise a separate user agent, so you can't write a robots.txt rule just for it. In practice, it follows what your rules allow Googlebot to crawl.</p>
${forkFig}
${h3("What do outside studies say Claude cites?")}
<p>Outside studies describe patterns in their own samples, not Anthropic rules. The largest we found, <a href="https://otterly.ai/blog/claude-ai-citation-study/">OtterlyAI's study</a> of 379,321 Claude citations on SaaS and tech prompts in June 2026, found company and product domains made up 64.0% of citations, and Reddit was cited 0 times.</p>
<ul><li>The same study spread those citations across 16,406 domains, and the top 10 domains held 9.5% of them. Otterly sells AI visibility tracking, so read this as vendor research.</li><li>Otterly also reports that only 13% of cited domains overlapped between Claude and ChatGPT. Work that earns ChatGPT citations doesn't automatically carry over to Claude, so check each engine on its own.</li><li>The "86.7% Brave overlap" figure that many guides repeat comes from <a href="https://www.tryprofound.com/blog/what-is-claude-web-search-explained">Profound's "Claude web search explained"</a> (21 Mar 2025): 13 of 15 results matched Brave across three test queries. <a href="https://ismybrandinai.com/how-to-rank-on-claude">Is My Brand in AI</a> traced the repeated figure back to that test. It is a real result from a very small sample.</li></ul>
<p>The practical reading from the Otterly study: for SaaS and tech prompts, company and product sites made up most of Claude's citations in that sample, and community threads barely appeared. Keep first-party facts complete and accurate.</p>
${h3("Which Claude claims don't hold up?")}
<p>Six popular claims about how Claude cites sources are not supported by Anthropic's or Brave's documentation, including "Claude runs on Brave's index" and "Schema or llms.txt gets you cited by Claude." Anthropic lists three web search providers, separates its training bot from its search bots, and publishes no ranking weights. Check each one before you act on it.</p>
<div class="article-table"><table><caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">Six popular Claude claims checked against Anthropic and Brave documentation</caption><thead><tr><th scope="col">Claim you will see</th><th scope="col">What Anthropic or Brave documents</th><th scope="col">Verdict</th></tr></thead><tbody><tr><td>"Claude runs on Brave's index."</td><td>The Trust Center lists Brave Search, TurboPuffer and Parallel Web Systems for web search.</td><td>One of three listed providers</td></tr><tr><td>"Submit your URL to Brave to get into Claude."</td><td>Brave's help page describes its form for re-fetching a page after you add noindex, and for delisting pages that no longer exist.</td><td>Not documented as a way in</td></tr><tr><td>"Blocking ClaudeBot removes you from Claude search."</td><td>ClaudeBot is Anthropic's training crawler; search runs through Claude-SearchBot and Claude-User.</td><td>Mixes up training and search</td></tr><tr><td>"Schema or llms.txt gets you cited by Claude."</td><td>We found no Anthropic page that says Claude uses schema or reads llms.txt.</td><td>Not documented</td></tr><tr><td>Ranking factor tables with percentage weights</td><td>Anthropic's web search docs describe when Claude searches and what results contain, not how results are ordered.</td><td>Not from Anthropic</td></tr><tr><td>"Claude's training makes it prefer your content."</td><td>Anthropic documents no citation preference tied to training.</td><td>Not documented</td></tr></tbody></table></div>
${h2("Which Anthropic bots need access before Claude can cite you?")}
<p>Claude-SearchBot and Claude-User need access, and ClaudeBot is a separate training choice. Anthropic's <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler">crawler page</a> says disabling either search bot may reduce your visibility in Claude's search, while restricting ClaudeBot signals that future content should be excluded from training. It describes three bots:</p>
<ul><li><strong>Claude-SearchBot</strong> indexes content for search. Anthropic says blocking it "may reduce your site's visibility and accuracy in user search results."</li><li><strong>Claude-User</strong> fetches pages when a person asks Claude a question. Blocking it "may reduce your site's visibility for user-directed web search."</li><li><strong>ClaudeBot</strong> collects content that may be used for training. Restricting it signals that your "future materials should be excluded from our AI model training datasets."</li></ul>
${botsFig}
<p>Anthropic documents one more identity on a separate page: Claude-Agent, for Anthropic-hosted browsers that Claude uses to complete tasks for users, including in Claude Duet.</p>
<p>For the full allow list across every AI engine, use Step 3 of our <a href="https://www.nakama.in/journal/geo-audit#step-3-which-ai-crawlers-should-i-allow">GEO audit</a>. Below are the Claude details that SaaS sites most often miss.</p>
${h3("How should SaaS subdomains set robots rules for Claude?")}
<p>Set robots rules on every subdomain, not just www. Docs, help centers, status pages and app login pages often sit on their own subdomains, and Anthropic's rules apply per subdomain. A permissive robots.txt on www does not cover docs or help, so check each host Claude might search or a buyer might paste.</p>
<ul><li><strong>Set rules on every subdomain.</strong> Anthropic says to add robots.txt rules "for every subdomain that you wish to opt out from." The same logic applies when you allow its bots.</li><li><strong>Don't block by IP.</strong> Anthropic warns that IP blocking "may not work correctly or persistently guarantee an opt-out, as doing so impedes our ability to read your robots.txt file." To check whether a request really comes from Anthropic, compare it against the IP list it publishes at <a href="https://claude.com/crawling/bots.json">claude.com/crawling/bots.json</a>.</li><li><strong>Slow bots down instead of blocking them.</strong> Anthropic says its bots respect Crawl-delay "where appropriate."</li><li><strong>Keep training and visibility separate.</strong> As of 30 October 2026, Anthropic says it has begun recognizing "a machine-readable signal that lets website owners express a preference about whether their content may be used to train AI models," with rollout across its services over time. That signal is about training. Search access still depends on Claude-SearchBot and Claude-User.</li></ul>
${h2("What makes content citeable by Claude?")}
<p>Content is citeable by Claude when a short passage on the page answers the question on its own, carries a true date, and sits in plain HTML. That is how to optimize content for Claude, and it follows from how Claude shows citations: as linked sources with short quotes, not as a summary of your whole page.</p>
<p>Anthropic's <a href="https://support.claude.com/en/articles/10684626-enable-and-use-web-search">web search help page</a> says answers include "Direct citations to sources" and "Relevant quotes when appropriate." The <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool">web search tool docs</a> say each citation in an API response carries a cited_text field of "Up to 150 characters of the cited content", and each result carries a page_age field described as "When the site was last updated."</p>
<p>What that means for a SaaS page:</p>
<ul><li><strong>Put one fact in one sentence.</strong> A line like "[Product] Pro costs [price] per user per month, billed annually" fits inside the API's 150-character cited_text limit. "Our flexible plans scale with you" says nothing quotable.</li><li><strong>Name the product in the sentence.</strong> A quote that starts with "It" loses its subject when it is lifted out of the page.</li><li><strong>Keep dates true.</strong> Show a real updated date on pricing, security and integration pages, and change it only when the content changes.</li><li><strong>Keep key facts in the HTML.</strong> Anthropic's developer web fetch tool "currently does not support websites dynamically rendered with JavaScript." If your pricing table only renders in the browser, some Claude tools may never see it. Our GEO audit shows how to <a href="https://www.nakama.in/journal/geo-audit#step-4-is-your-key-saas-content-visible-without-javascript">check whether key SaaS content is visible without JavaScript</a>.</li><li><strong>Favor original, attributed facts.</strong> In its <a href="https://www.anthropic.com/engineering/multi-agent-research-system">engineering post on the Research system</a>, Anthropic says early agents "consistently chose SEO-optimized content farms over authoritative but less highly-ranked sources", and that "Adding source quality heuristics to our prompts helped resolve this issue." That describes Anthropic's research agents, not a published ranking factor, but it shows which way Anthropic is pushing.</li></ul>
<p>For general on-page work that applies to every engine, see our guides to <a href="https://www.nakama.in/journal/perplexity-seo">Perplexity SEO</a> and <a href="https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews">Google AI Overviews</a>. This section covers only what is specific to Claude.</p>
${h2("How do Claude Team and Enterprise users find your brand?")}
<p>Claude Team and Enterprise users see live citations to your site only when web search is enabled for their workspace. That decides whether your company can be cited at all inside a buyer's own Claude workspace, before content quality even comes into it.</p>
<p>Anthropic's <a href="https://support.claude.com/en/articles/10684626-enable-and-use-web-search">web search help page</a> says that on a Team or Enterprise plan, "An Owner or Primary Owner must first enable web search for the entire workspace in Organization settings > Capabilities." After that, members can switch search on per chat, and "Users can toggle this off for chats that don't require web search capabilities."</p>
<p>Anthropic's web search help page also notes one change: "If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps."</p>
<p>What this means if you sell to companies on Claude Team or Enterprise:</p>
<ul><li>With search off or not triggered, Claude answers without live sources, so a buyer sees no citation to your site.</li><li>With search on, your pricing, integration and security pages compete in the same results as everyone else.</li><li>When you test, record whether web search was on for that chat, or add "Search the web" to the prompt, which the same help page suggests to make sure Claude searches. Claude may also use your location, inferred from your IP address, so test from your buyers' country where you can. <a href="https://www.nakama.in/journal/ai-visibility-report-template">Keep the prompt list fixed</a> so runs from different weeks compare.</li></ul>
${h2("What happens when a buyer pastes your URL into Claude?")}
<p>When a buyer pastes your URL, Claude can fetch the page and read it directly. The buyer has already chosen your page, so the only question is whether Claude can reach and read it. That depends on Claude-User access and on the page working without scripts.</p>
<p>Anthropic's <a href="https://support.claude.com/en/articles/10684626-enable-and-use-web-search">web search help page</a> says that with web search on, "Claude can also retrieve content directly from web pages when provided with specific URLs. This feature, called web fetch." Its <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler">crawler page</a> says "When individuals ask questions to Claude, it may access websites using a Claude-User agent."</p>
<p>For SaaS sites, three checks follow:</p>
<ul><li><strong>Allow Claude-User on every subdomain a buyer might paste</strong>, including docs, help and trust pages.</li><li><strong>Don't let a firewall or bot rule block it.</strong> If the fetch fails, Claude can't read the page the buyer chose.</li><li><strong>Make the fetched page complete without scripts.</strong> Anthropic's developer <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool">web fetch tool</a> doesn't support JavaScript-rendered sites, and on that tool "citations are optional for web fetch and disabled by default."</li></ul>
${h2("How do apps built on the Claude API pick your domain?")}
<p>Apps built on the Claude API pick your domain from the search results the API returns, filtered by whatever domain rules the developer or organization sets. Products that use the Claude API can search the web too, so this is a second route to visibility beyond the Claude app itself.</p>
<p>Anthropic's <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool">web search tool docs</a> list the controls a developer has:</p>
<ul><li><strong>Domain filters.</strong> allowed_domains limits results to listed domains, and blocked_domains removes listed domains. The docs say to "Use allowed_domains or blocked_domains, not both."</li><li><strong>Organization controls.</strong> Anthropic's <a href="https://claude.com/resources/articles/web-search-api">web search API announcement</a> says administrators can set domain allow lists and block lists, and can "allow or prohibit web search use at the organization level."</li><li><strong>Location.</strong> A user_location setting localizes results.</li><li><strong>Search limits.</strong> max_uses caps "the number of searches in a turn."</li><li><strong>Citations.</strong> "Citations are always enabled for web search", and apps that show API outputs directly to end users must include citations to the original source.</li></ul>
<p>You can't control another company's allow list. You can control the three fields the Claude API returns for your page: a url that matches the topic, a title that says what the page is, and a page_age that changes only when the content does.</p>
${h2("How do you remove or correct a page Claude shows?")}
<p>To remove a page from Claude's search answers, take it down, password-protect it, add noindex, or ask Anthropic to block the URL. To correct a wrong fact, fix it at the source page Claude cites. Anthropic lists six routes on one help page, and only one of them, the webresultsoptout request, needs Anthropic to act.</p>
<p>Anthropic's <a href="https://support.claude.com/en/articles/7996906-report-block-and-remove-content-from-claude">report, block and remove page</a> lists these routes:</p>
<ul><li><strong>Remove the content.</strong> Anthropic calls this "the best way to ensure that it won't appear in Claude outputs when Claude searches the web."</li><li><strong>Password-protect private pages,</strong> so only authorized users can access them.</li><li><strong>Add noindex.</strong> Partners then won't send the page to Claude.</li><li><strong>Block images and video with robots.txt.</strong> "Our search partners only index images and videos that their bots are allowed to crawl."</li><li><strong>Disallow Anthropic's bots.</strong> The same page points to Anthropic's crawler instructions. Blocking Claude-SearchBot and Claude-User this way also gives up visibility in Claude's search answers.</li><li><strong>Request removal.</strong> For a URL already appearing in Claude outputs, email webresultsoptout@anthropic.com with proof that you own the URL.</li></ul>
<p>Most problems for SaaS brands are wrong facts, not unwanted pages: an old price, a retired plan or a missing integration. If Claude quotes your own page, update that page. If it quotes a review site or directory, fix the listing there. Our GEO audit covers how to <a href="https://www.nakama.in/journal/geo-audit#step-5-which-sources-do-ai-engines-cite-for-my-category">find which sources each engine cites for your category</a>. Fixing or earning those third-party listings is off-site work, and it's what our <a href="https://www.nakama.in/services/geo">GEO service</a> covers.</p>
${h3("Which Claude settings should a SaaS site verify?")}
<p>A SaaS site should verify seven Claude settings: robots rules on every subdomain, no IP blocks on Anthropic's ranges, Googlebot access for Brave, no stray noindex, quotable facts that fit the API's 150-character cited_text limit, true updated dates, and repeat prompt tests with web search on. Each row below names the Anthropic or Brave page behind the check.</p>
<div class="article-table"><table><caption style="caption-side:top;text-align:left;color:#8e8a84;font-size:13px;line-height:1.5;padding:0 0 10px">Seven Claude checks for SaaS sites, with the source for each</caption><thead><tr><th scope="col">Check</th><th scope="col">What to look for</th><th scope="col">Anthropic or Brave source</th></tr></thead><tbody><tr><td>1. Subdomain robots rules</td><td>Claude-SearchBot and Claude-User are allowed on www and on every docs, help and trust subdomain</td><td>Crawler page</td></tr><tr><td>2. No IP blocks</td><td>The firewall doesn't block Anthropic ranges listed in bots.json</td><td>Crawler page, bots.json</td></tr><tr><td>3. Googlebot not blocked</td><td>Key pages are crawlable by Googlebot, which Brave's crawler follows</td><td>Brave crawler help</td></tr><tr><td>4. No stray noindex</td><td>Pricing, integration, security and changelog pages have no noindex</td><td>Report, block and remove page</td></tr><tr><td>5. Quotable facts</td><td>Each key fact fits in one sentence under 150 characters (the API's cited_text limit) and is in the HTML</td><td>Web search tool docs</td></tr><tr><td>6. True dates</td><td>Updated dates change only when the content changes</td><td>Web search tool docs (page_age)</td></tr><tr><td>7. Repeat tests</td><td>The same buyer prompts run on a schedule, with web search on and logged</td><td>Web search help page</td></tr></tbody></table></div>
<p>Rows 1 to 6 are one-time fixes your team can make this week. Row 7 is the ongoing part: running the same buyer prompts on a schedule, with web search on, and reading each engine on its own. One chat is a sample, not a measurement.</p>
<p>To see how often AI engines name you over time, use our guide on how to <a href="https://www.nakama.in/journal/track-brand-mentions-in-ai-search">track brand mentions in AI search</a>, and compare tracking tools in our <a href="https://www.nakama.in/journal/best-ai-visibility-tools">AI visibility tools</a> review.</p>
<p>If you want a team to see where AI engines cite you today and what to fix first, our <a href="https://www.nakama.in/services/ai-visibility-audit">AI visibility audit</a> covers that. To start smaller, the <a href="https://www.nakama.in/services/ai-visibility-audit#free-ai-visibility-check">free AI visibility check</a> runs 1 to 3 of your buyer prompts across 2 engines, 3 runs each, and emails you the results.</p>
${cta2}
${h2("FAQ")}
${faqHtml}
${ctaBand}
${h2("About the author")}
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

export const howToGetCitedByClaudeArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 llmsDescription: LLMS_DESCRIPTION,
 readTime: '15 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 modifiedAt: MODIFIED_AT,
 authorName: 'Sandeep Kumar',
 /** PREVIEW false: index,follow, and this note is listed in the sitemap, llms files, RSS, resources and the author index. */
 noindex: PREVIEW,
 nofollow: PREVIEW,
 /** Keep reading goes to the GEO audit guide. */
 nextSlug: 'geo-audit',
 coverImage: {src: `/journal/${SLUG}/${SLUG}-hero.webp`, width: 1600, height: 900, alt: HERO_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: HERO_ALT,
  type: 'image/png',
 },
 jsonLd: articleLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
