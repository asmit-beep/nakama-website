import type {Article} from './articles';
import styles from './geo-agency-vs-in-house.module.css';

/**
 * PUBLISH TIME for this preview. ISO 8601 with +05:30.
 * Reset PUBLISHED_AT on ship day. MODIFIED_AT, the visible Updated line,
 * the matrix caption and both JSON-LD dates all read this one constant.
 *
 * Ship GO: set PREVIEW to false.
 * While PREVIEW is true the page stays noindex,follow and off the sitemap,
 * llms.txt, llms-full.txt, RSS, the resources index and the author index.
 */
const PUBLISHED_AT = '2026-11-10T09:00:00+05:30';
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const dayOf = (iso: string) => iso.slice(0, 10);

/** D Mon YYYY, derived from PUBLISHED_AT. */
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const [PY, PM, PD] = dayOf(PUBLISHED_AT).split('-');
const PUBLISHED_DAY = `${Number(PD)} ${MONTHS[Number(PM) - 1]} ${PY}`;
const FRESHNESS = `Updated ${PUBLISHED_DAY}`;

const SLUG = 'geo-agency-vs-in-house';
const TITLE = 'In-House AEO Team vs Agency vs Tools: Which to Pick?';
/** Visible H1. U+2011 keeps "In-house" on one line. Schema uses the ASCII hyphen below. */
const H1 = 'In\u2011house AEO team, agency or tools: which should you pick?';
const ALT_HEADLINE = 'In-house AEO team, agency or tools: which should you pick?';
const DESCRIPTION = 'In-house AEO or GEO team, agency or tools? Compare off-site reach, speed, skills and measurement, then use a five-question test to pick your model.';
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const COVER_ALT = 'Nakama Growth journal cover: in-house AEO or GEO team vs agency vs tools, a guide to choosing the right model.';
const OG_ALT = 'In-House AEO Team vs Agency vs Tools: Which to Pick? A Nakama Growth decision guide.';
const HYBRID_ALT = 'Three hybrid AEO and GEO models showing which work stays in-house and which an agency owns: owner plus agency, content in-house with off-site outsourced, and agency builds then team inherits.';
const RAMP_ALT = 'Our view: a 90-day ramp for a new in-house AEO or GEO team, from access and baseline, to first pages and outreach, to repeat measurement.';
const HERO_URL = `${CANONICAL}/geo-agency-vs-in-house-cover.webp`;
const OG_URL = `${CANONICAL}/geo-agency-vs-in-house-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/sandeep-kumar';
/** Live /authors/sandeep-kumar Person text, verbatim (lib/authors.ts bio[0]). */
const AUTHOR_BIO = 'Sandeep Kumar is an SEO and GEO Specialist at Nakama Growth, based in Delhi, India. He joined the team in June 2026 and works on content strategy and web content writing for brands that want to show up in Google search and in AI answers from tools like ChatGPT, Perplexity and Google AI Overviews.';
const QUOTE_URL = 'https://www.nakama.in/pricing#quote';

const FAQS: {q: string; a: string}[] = [
 {
  q: 'Is an in-house AEO team better than an agency?',
  a: 'No. Neither is better in general. An in-house AEO team is better when AI visibility is core to growth and you can fund the roles and ramp. An agency is better when you need off-site reach and shipped work now. Many teams combine both: an internal owner plus an agency.',
 },
 {
  q: 'Can I do GEO myself with tools?',
  a: 'Yes, if your category is narrow and someone in-house has time to act on the data. DIY GEO with tools works for monitoring and on-site fixes. It struggles with off-site work, which needs relationships and outreach volume that tools do not provide.',
 },
 {
  q: 'Do AI visibility tools replace an AEO or GEO agency?',
  a: 'No. AI visibility tools show where you appear in AI answers and where competitors appear instead. They do not write pages, pitch editors or take part in communities. A tool can replace the measurement part of an agency\'s work, but someone still has to act on what it shows.',
 },
 {
  q: 'Will an agency deliver what in-house can\'t?',
  a: 'Yes, when the gap is reach and speed: existing off-site relationships and several skills working at once. An agency cannot replace product knowledge or internal approvals. If your gap is context rather than reach, an in-house team or a hybrid is the better bet.',
 },
 {
  q: 'Do I need a separate GEO agency if I already have an SEO agency?',
  a: 'No, not if your SEO agency already covers off-site work and tracks each AI engine separately. In that case, extend its scope. If it cannot do both, add a specialist alongside it, and let your in-house owner decide who owns which prompts.',
 },
 {
  q: 'What is the smallest in-house setup that works?',
  a: 'One named owner with real weekly time, backed by your existing SEO and content people, plus a tracker. That covers ownership, on-site pages and measurement. Off-site work is the part this setup usually cannot cover, which is why many small teams pair it with an agency.',
 },
 {
  q: 'When should I move GEO in-house?',
  a: 'When the work is repeatable, an internal owner has shadowed it for a few months and most remaining work is on-site. Secure the prompt list, baselines, accounts and relationship notes first. A phased move, on-site first and off-site later, carries the least risk.',
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
   "alternativeHeadline": ALT_HEADLINE,
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
   "name": "Sandeep Kumar",
   "jobTitle": "SEO and GEO Specialist",
   "url": AUTHOR_URL,
   "description": AUTHOR_BIO,
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

export const geoAgencyVsInHouseJsonLd = articleLd;

const HYBRID_CAPTION = 'Three hybrid models: what stays in-house and what an agency owns.';
const RAMP_CAPTION = 'Our view: a 90-day ramp for a new in-house AEO or GEO team.';

const figure = (file: string, alt: string, width: number, height: number, eager = false, extra?: {caption?: string; narrow?: boolean}) =>
 `<figure${extra?.narrow ? ` class="${styles.narrow}"` : ''}><img src="/journal/${SLUG}/${file}" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">${extra?.caption ? `<figcaption>${extra.caption}</figcaption>` : ''}</figure>`;

const quoteLink = `<p class="${styles.cta}"><a class="ip-btn" href="${QUOTE_URL}"><span>Get a quote</span><i aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></i></a></p>`;

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;
const h3 = (text: string) => `<h3 id="${faqId(text)}">${text}</h3>`;

const faqHtml = FAQS.map(({q, a}) => `${h3(q)}\n<p>${a}</p>`).join('\n');

const authorBox = `<div class="author-box" id="sandeep-kumar">
<img src="/authors/sandeep-kumar-nakama-seo-geo.webp" srcset="/authors/sandeep-kumar-nakama-seo-geo.webp 400w, /authors/sandeep-kumar-nakama-seo-geo-800.webp 800w" sizes="96px" alt="Sandeep, SEO and GEO Specialist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a>${AUTHOR_BIO.slice('Sandeep Kumar'.length)}</p>
</div>
</div>`;

const stackTable = (caption: string, corner: string, columns: string[], rows: {label: string; cells: string[]}[]) => {
 const head = [`<th scope="col">${corner}</th>`, ...columns.map((column) => `<th scope="col">${column}</th>`)].join('');
 const body = rows.map((row) => `<tr><th scope="row">${row.label}</th>${row.cells.map((cell, index) => `<td data-label="${columns[index]}">${cell}</td>`).join('')}</tr>`).join('');
 return `<div class="stack-table"><table class="stack-table"><caption>${caption}</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
};

const toc = `<details class="toc">
<summary>On this page</summary>
<ol>
<li><a href="#${faqId('In-house AEO team vs agency vs tools: the decision matrix')}">Decision matrix</a></li>
<li><a href="#${faqId('How do you choose between in-house and agency GEO?')}">How to choose</a></li>
<li><a href="#${faqId('When does an agency fit best?')}">Agency</a></li>
<li><a href="#${faqId('When does an in-house AEO or GEO team win?')}">In-house team</a></li>
<li><a href="#${faqId('When are tools alone enough?')}">Tools only</a></li>
<li><a href="#${faqId('How does a hybrid AEO and GEO model work?')}">Hybrid</a></li>
<li><a href="#${faqId('What roles and skills does an in-house AEO or GEO team need?')}">Roles and ramp</a></li>
<li><a href="#${faqId('What can in-house teams rarely do off-site?')}">Off-site gap</a></li>
<li><a href="#${faqId('Can your SEO agency handle GEO?')}">SEO agency and GEO</a></li>
<li><a href="#${faqId('When should you move AEO or GEO in-house from an agency?')}">Moving in-house</a></li>
<li><a href="#${faqId('What failure modes sink each option?')}">Failure modes</a></li>
<li><a href="#${faqId('What does 2026 research say about in-house vs agency?')}">Research</a></li>
<li><a href="#${faqId('FAQ')}">FAQ</a></li>
</ol>
</details>`;

const matrixCaption = `In-house AEO team vs agency vs tools only vs hybrid, compared on off-site work, time to first work, skills, measurement and best fit. Nakama Growth, updated ${PUBLISHED_DAY}.`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb ${styles.page}"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<div class="geo-decision ${styles.page}">
<h1 id="${faqId(H1)}">${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a>, SEO and GEO Specialist, Nakama Growth</p>
${figure('geo-agency-vs-in-house-cover.webp', COVER_ALT, 1920, 1080, true)}
<p>Whether you call it AEO or GEO, what matters is who owns AI visibility and who proves it worked. Hire an agency for off-site reach and work shipped this quarter. Build in-house if you have an owner, writers and time to ramp. Use tools alone to see the gap. In our experience, many growing teams land on a hybrid.</p>
<p>This is a decision guide, not a shortlist, a price list or a hiring process.</p>
${h2('Quick answer')}
<ul>
<li><strong>Pick an agency if</strong> nobody in-house owns AI visibility yet and your gap sits on other people's sites: press, Reddit threads, YouTube and review pages.</li>
<li><strong>Pick an in-house team if</strong> AI answers are a channel you plan to fund for years and your product needs expert review before anything is published.</li>
<li><strong>Pick tools only if</strong> you are still measuring the problem, and a marketer already on staff can act on what the tracker shows.</li>
<li><strong>Pick a hybrid if</strong> you have one internal owner with weekly time but not the relationships or capacity for off-site work.</li>
</ul>
${toc}
${h2('In-house AEO team vs agency vs tools: the decision matrix')}
<p>The in-house AEO team vs agency choice comes down to five things: who does off-site work, how fast work starts, which skills you need, how AI search visibility is measured and which stage each model fits. The matrix sets out the pros and cons of an agency, an in-house team, tools only and a hybrid.</p>
<p>Most marketing teams already run AI in their search marketing in-house. In Northwestern's Medill Spiegel Research Center 2026 survey of 198 US marketing professionals, 80% said their internal team implements AI in search marketing (<a href="https://spiegel.medill.northwestern.edu/ai-in-search-marketing-adoption-is-high-while-gaps-remain/">Medill Spiegel Research Center, Aug 2026</a>).</p>
${stackTable(matrixCaption, 'Factor', ['Agency', 'In-house team', 'Tools only', 'Hybrid'], [
 {label: 'Off-site work', cells: [
  'Usually included: digital PR, Reddit, YouTube and third-party mentions, through existing editor, creator and community relationships.',
  'Possible, but relationships start cold and take time to build.',
  'None. Tools show which third-party sites appear in answers. They do not earn placements.',
  'Agency runs it. Your owner approves what goes out in your name.',
 ]},
 {label: 'Time to first work', cells: [
  'Weeks, once access and a baseline are agreed (our view).',
  'Hiring time plus about 90 days before a first meaningful read of results (our view).',
  'Days. Setup is fast, but output depends on who acts on the data.',
  'Agency starts in weeks while your owner builds context.',
 ]},
 {label: 'Skills you need', cells: [
  'One owner to approve claims, give access and review evidence.',
  'Strategy, content, technical SEO, digital PR, community and analytics, in one or more people.',
  'Someone who can turn tracker data into page changes and outreach.',
  'An owner plus on-site content skills. The agency covers the rest.',
 ]},
 {label: 'Measurement', cells: [
  'Per-engine reporting, if you require it in the contract.',
  'Built and owned by you. Often the last skill a new team develops.',
  'Strong at prompt tracking. Weak at linking results to the work behind them.',
  'Agency reports by engine. You own the prompt list and the baseline.',
 ]},
 {label: 'Best fit', cells: [
  'No AI visibility owner yet, a need for speed, an off-site gap.',
  'AI visibility is core to growth, and you have budget to hire and patience to ramp.',
  'Early stage, testing demand, or a capable team that only lacks data.',
  'One internal owner with time, but no outside relationships.',
 ]},
])}
<p>Cost is not in this table on purpose. Our <a href="https://www.nakama.in/journal/geo-aeo-pricing#is-a-geo-agency-cheaper-than-an-in-house-team">GEO pricing guide</a> compares what an agency and an in-house team cost.</p>
<p>If the agency or hybrid column fits, tell us your gap and we will scope the work:</p>
${quoteLink}
<p>Not sure which column? Start with an <a href="https://www.nakama.in/services/ai-visibility-audit">AI visibility audit</a>.</p>
${h2('How do you choose between in-house and agency GEO?')}
<p>To choose between in-house and agency generative engine optimization (GEO), answer five questions: who owns AI visibility today, where the gap is, how fast you need visible work, which skills you can actually hire and who will measure each engine. If three or more answers point the same way, that is your model.</p>
<ol>
<li><strong>Who owns AI visibility today?</strong> If the answer is nobody, lean agency or hybrid. A named owner with time points to in-house or hybrid.</li>
<li><strong>Where is the gap?</strong> Start with a <a href="https://www.nakama.in/journal/geo-audit">GEO audit</a>. If you are missing mostly off-site, lean agency. If your own pages are the weak point, in-house can often fix them.</li>
<li><strong>How fast do you need visible work?</strong> This quarter points to an agency. Next year allows in-house.</li>
<li><strong>Which skills can you actually hire?</strong> Be specific. Content is easier to hire than digital PR relationships or community credibility.</li>
<li><strong>Who will measure, by engine?</strong> If the answer is "the tool", you still need someone to read it and act.</li>
</ol>
<p>If your answers split, you are probably a hybrid.</p>
${h2('When does an agency fit best?')}
<p>An agency fits when nobody in-house owns AI visibility, you need work shipped this quarter, and the biggest gap is off-site: you are missing from the third-party pages, threads and videos that show up in AI answers for your category. It also fits when you need evidence before you commit to a hire.</p>
<p>Choose an agency if most of these are true:</p>
<ul>
<li><strong>No owner today.</strong> AI visibility sits between SEO, content and PR, and nobody is accountable for it.</li>
<li><strong>Off-site is the gap.</strong> Your site is in decent shape, but you are absent from the outside sources that appear in answers for your buyer questions.</li>
<li><strong>You need speed.</strong> A launch, a funding round or a competitor gaining ground means you cannot wait out a hiring cycle.</li>
<li><strong>You are testing the channel.</strong> You want evidence that AI visibility moves pipeline before you commit headcount.</li>
<li><strong>You need several skills at once.</strong> Strategy, content, digital PR, community and measurement are hard to hire as one person.</li>
</ul>
<blockquote><p><strong>Our view:</strong> the agency route fails most often when the client side has no owner. An agency without someone in-house to approve claims, open doors to subject matter experts and push page changes through tends to produce reports with nothing shipped. Plan for at least a few hours a week of an internal owner's time, whichever agency you pick.</p></blockquote>
<p>Before you sign, use our hiring guide to <a href="https://www.nakama.in/journal/how-to-hire-an-aeo-agency#step-5-check-the-proof-yourself">check the proof yourself</a>. It covers what to inspect and how to verify claimed results.</p>
<p>If an agency fits, we will quote against your off-site gap and the owner time you can give:</p>
${quoteLink}
${h2('When does an in-house AEO or GEO team win?')}
<p>An in-house AEO or GEO team wins when AI visibility is a lasting part of how you grow, your product needs deep context to explain well, and you can fund the roles and the ramp. In-house teams keep the knowledge, move faster on approvals and keep building after any contract would have ended.</p>
<p>An in-house GEO team is the right call if most of these are true:</p>
<ul>
<li><strong>AI answers are a core acquisition channel</strong> you plan to keep funding.</li>
<li><strong>Your product is complex or regulated</strong>, so every claim needs expert review and an outside writer would spend most of their time asking questions.</li>
<li><strong>You already have pieces of the team</strong>: a strong SEO lead, content writers or a PR function that can absorb new work.</li>
<li><strong>You can wait hiring time plus about a quarter for first results</strong>, and you will fund measurement as well as content.</li>
</ul>
<p>If most of these are true, an agency would mostly be renting you skills you should own.</p>
<p>The Medill skills finding in the research section below is the warning label here. An in-house plan that depends on one hard-to-find hire stalls the day that person leaves or never joins.</p>
${h2('When are tools alone enough?')}
<p>Tools alone are enough when you mainly need to know where you stand, and someone in-house can act on the data. This is the DIY GEO route: a tracker shows which prompts you appear in, and your team makes the page changes and does the outreach itself.</p>
<p>The tools-only route works if:</p>
<ul>
<li><strong>You are early</strong> and want a baseline before deciding anything else.</li>
<li><strong>Your team can act on the data.</strong> A tracker that nobody acts on becomes a monthly screenshot.</li>
<li><strong>Your category is narrow</strong>, with a short list of buyer questions you can cover yourself.</li>
</ul>
<p>Tools measure visibility. They do not write the page, pitch the editor or join the thread. Our tools review covers <a href="https://www.nakama.in/journal/best-ai-visibility-tools#what-can-t-ai-visibility-tools-fix">what AI visibility tools can't fix</a> in more detail.</p>
<blockquote><p><strong>Our view:</strong> GEO tools vs agency is rarely an either-or choice, because most setups use both. Almost every agency uses tools, and most in-house teams should too. What matters is who acts on what the tool shows.</p></blockquote>
${h2('How does a hybrid AEO and GEO model work?')}
<p>A hybrid model keeps ownership and judgment in-house and buys breadth from an agency. An internal owner sets goals, approves claims and runs on-site content, while the agency runs off-site work and per-engine measurement. In our experience, it is where many teams end up after the first year.</p>
${figure('geo-agency-vs-in-house-hybrid-models.webp', HYBRID_ALT, 1600, 900, false, {caption: HYBRID_CAPTION, narrow: true})}
<p>There are three common ways to split the work. Pick by who you already have.</p>
${stackTable('Three hybrid AEO and GEO models, showing what stays in-house, what the agency owns and when each split fits.', 'Hybrid model', ['In-house owns', 'Agency owns', 'Fits when'], [
 {label: 'Owner plus agency', cells: [
  'Goals, approvals, access, final say on claims',
  'Strategy, content, off-site work, measurement',
  'You have one marketer who can own AI visibility part time',
 ]},
 {label: 'Content in-house, off-site outsourced', cells: [
  'Strategy, on-site pages, expert input',
  'Digital PR, Reddit and community, YouTube, third-party mentions, measurement',
  'You have writers and SEO, but no outside relationships',
 ]},
 {label: 'Agency builds, team inherits', cells: [
  'Learning, shadowing, gradual takeover of on-site work',
  'Initial setup, baseline, playbooks, off-site work',
  'You plan to bring most work in-house within a year or two',
 ]},
])}
<blockquote><p><strong>Our view:</strong> the hybrid only works if the split is written down. Decide in writing who owns the prompt list, who approves claims and who reports results to leadership. When two teams both think they own measurement, nobody does.</p></blockquote>
${h2('What roles and skills does an in-house AEO or GEO team need?')}
<p>An in-house AEO or GEO team needs six skills: strategy and ownership, content, technical SEO, digital PR, community and video, and measurement. Few companies can hire six people, so most teams we see combine skills into two or three roles and fill the rest with an agency or freelancers.</p>
${stackTable('Six skills an in-house AEO or GEO team needs, what each covers and the role it is often combined with.', 'Skill', ['What it covers', 'Often combined with'], [
 {label: 'Owner and strategist', cells: ['Prompt list, priorities, approvals, reporting to leadership', 'Head of SEO or content']},
 {label: 'Content and subject matter', cells: ['Pages that answer buyer questions with checkable facts', 'Content lead plus internal experts']},
 {label: 'Technical SEO', cells: ['Crawl access, rendering, structured data, site health', 'Existing SEO or web team']},
 {label: 'Digital PR', cells: ['Earned coverage and expert quotes on third-party sites', 'PR or comms team']},
 {label: 'Community and video', cells: ['Reddit, forums, YouTube, creator partnerships', 'Social or developer relations']},
 {label: 'Measurement', cells: ['Per-engine tracking, dated evidence, link to pipeline', 'Marketing ops or analytics']},
])}
<p>Technical access is a good example of hidden scope. OpenAI documents that OAI-SearchBot (used to surface sites in ChatGPT search) and GPTBot are controlled by separate robots.txt settings, and that each setting is independent (<a href="https://developers.openai.com/api/docs/bots">OpenAI, crawler documentation</a>). Someone on the team has to own those decisions with legal and security.</p>
${h3('How long does an in-house team take to ramp?')}
<p>Plan for hiring time plus about 90 days before a first meaningful read of results (our view). The first month goes on access and a baseline, the second on first pages and outreach, and the third on repeat measurement. Off-site relationships usually take longer than all three.</p>
${figure('geo-agency-vs-in-house-90-day-ramp.webp', RAMP_ALT, 1600, 700, false, {caption: RAMP_CAPTION, narrow: true})}
<ul>
<li><strong>Days 1 to 30:</strong> get access to analytics, the CMS and experts. Agree the prompt list. Record a dated baseline by engine.</li>
<li><strong>Days 31 to 60:</strong> ship the first pages. Start outreach. Expect slow replies, because editors and communities do not know you yet.</li>
<li><strong>Days 61 to 90:</strong> rerun the same prompts. Compare against the baseline engine by engine. Decide what to double down on.</li>
</ul>
<blockquote><p><strong>Our view:</strong> the usual surprise is month three. Pages are live, but off-site work has barely started, so results look flat. Teams expecting a quick win often cut the program right before the off-site work starts to show.</p></blockquote>
${h2('What can in-house teams rarely do off-site?')}
<p>In-house teams can usually fix their own pages. What they rarely have is reach: established relationships with editors, creators and communities that already appear in AI answers, plus the outreach volume needed to earn mentions. In our experience, this off-site reach gap is the most common reason teams hire an agency.</p>
<p>Four parts of the off-site gap are hard to build from scratch:</p>
<ul>
<li><strong>Editorial relationships.</strong> Journalists and editors respond faster to people who have sent them useful sources before.</li>
<li><strong>Community credibility.</strong> A brand account that appears in Reddit or forum threads only to promote itself gets ignored or removed. Credibility comes from a history of useful answers.</li>
<li><strong>Video and creator reach.</strong> YouTube and creator partnerships need production skills and contacts many marketing teams lack.</li>
<li><strong>Outreach volume.</strong> Earning mentions across many sites takes sustained volume one in-house hire rarely has time for.</li>
</ul>
<blockquote><p><strong>Our view:</strong> this is also where an agency needs the closest watching. Off-site work is easy to report and hard to verify. Require a dated log of every placement, the live URL and whether it was earned or paid, so you can separate real work from activity.</p></blockquote>
${h2('Can your SEO agency handle GEO?')}
<p>Your SEO agency can handle part of GEO. Google says there are no additional requirements to appear in AI Overviews or AI Mode, and that SEO fundamentals still apply. The gaps tend to be off-site work and measuring each AI engine separately, so check whether your SEO retainer includes both.</p>
<p>Google's guidance is direct: "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary" (<a href="https://developers.google.com/search/docs/appearance/ai-features">Google Search Central, AI features</a>). That covers one engine's eligibility. It says nothing about ChatGPT, Perplexity or Gemini, or about being named rather than merely eligible.</p>
<p>So can SEO agencies do GEO? Partly. Ask yours three things:</p>
<ul>
<li><strong>Do you track each AI engine separately?</strong> One blended "AI visibility score" hides the engines where you are missing.</li>
<li><strong>Do you do off-site work beyond link building?</strong> Digital PR, community and video are different skills from link acquisition.</li>
<li><strong>Can you show dated answers, by engine, for clients?</strong> If not, they are likely learning on your account.</li>
</ul>
<p>The same test applies whether a provider calls itself an SEO firm, an AEO agency, an AI SEO agency or a generative engine optimization agency. Labels vary. Scope is what you are buying.</p>
${h3('Do you need a separate GEO agency?')}
<p>You need a separate GEO agency only if your SEO agency cannot cover off-site work and per-engine measurement. If it can, extend the scope. If it cannot, a specialist can run alongside it, with your in-house owner deciding who owns which prompts.</p>
<p>Engines disagree often enough that per-engine tracking matters. In a vendor study by Abovance, a competing GEO agency, 59 buyer questions were sent three times each to ChatGPT search, Perplexity and Claude through their APIs between 20 and 31 Oct 2026. The most-named agency appeared in 60 of 177 Claude answers but only 12 of 177 ChatGPT answers (<a href="https://abovance.com/research/geo-agencies-ai-recommendations-2026/" rel="nofollow">Abovance, 8 Nov 2026</a>). API answers are close to, but not the same as, the consumer apps.</p>
<p>Check only ChatGPT and you would have seen that agency in 12 of 177 answers. Check only Claude and you would have seen it in 60.</p>
${h2('When should you move AEO or GEO in-house from an agency?')}
<p>Move AEO or GEO in-house when the work has become repeatable, you have a named owner with time, and the agency's main value is now execution your team could do. Keep the agency, or a narrower one, for off-site reach if your team still lacks those relationships.</p>
<p>Signs you are ready:</p>
<ul>
<li><strong>The playbook is written.</strong> Your team understands what gets shipped each month and why.</li>
<li><strong>You have an owner who has shadowed the work</strong> for at least a few months.</li>
<li><strong>Most remaining work is on-site.</strong> Off-site is either covered or no longer the gap.</li>
<li><strong>Your measurement runs without the agency.</strong> You own the prompt list, the baseline and the tracker accounts.</li>
</ul>
<p>What to secure before the handover:</p>
<ul>
<li><strong>Data:</strong> the prompt list, every dated baseline and every engine-level report, in files you keep.</li>
<li><strong>Accounts:</strong> tracker logins, analytics access and any third-party profiles created in your name.</li>
<li><strong>Relationships:</strong> a list of editors, creators and communities engaged, with context, so your team is not starting cold.</li>
</ul>
<p>In our view, the cleanest move in-house is a phased one. Take on-site content first, keep off-site with the agency for a quarter, then reassess.</p>
${h2('What failure modes sink each option?')}
<p>Each model fails in a predictable way. Agencies fail without an internal owner. In-house teams fail when one hire carries six skills. Tools fail when nobody acts on the data. Hybrids fail when ownership is unclear. Knowing the failure mode tells you what to guard against.</p>
${stackTable('Typical failure and guardrail for an agency, an in-house team, tools only and a hybrid.', 'Model', ['Typical failure', 'Guardrail'], [
 {label: 'Agency', cells: ['Reports with nothing shipped, because no one in-house approves or ships', 'Name an internal owner with weekly time before you start']},
 {label: 'In-house', cells: ['One hire expected to cover strategy, content, PR, community and analytics', 'Scope two or three roles, or outsource off-site work']},
 {label: 'Tools only', cells: ['A tracker nobody acts on', 'Assign one person to turn each report into actions']},
 {label: 'Hybrid', cells: ['Two teams both "own" measurement, so nobody does', 'Write down who owns prompts, approvals and reporting']},
])}
<p>In our view, you should pick the model whose failure mode you are best placed to prevent.</p>
${h2('What does 2026 research say about in-house vs agency?')}
<p>In Medill's 2026 survey, most US marketers said their own team runs AI in search, while the largest firms leaned more on outside partners. Brafton's research adds that teams with a dedicated GEO budget were more likely to measure AI search visibility, though the link is not proven causal. Treat each figure below with its sample and the publisher's interest.</p>
<p><strong>Most teams run AI in search marketing in-house.</strong> In Northwestern's Medill Spiegel Research Center survey of 198 US marketing professionals, 80% said their internal team implements AI in search marketing, against 36% for agencies and 28% for freelancers (<a href="https://spiegel.medill.northwestern.edu/ai-in-search-marketing-adoption-is-high-while-gaps-remain/">Medill Spiegel Research Center, Aug 2026</a>). The study covers AI use in search marketing broadly, not GEO alone.</p>
<p><strong>Reliance on outside vendors is falling, except at the top.</strong> In the same Medill study, 43% reported reduced reliance on outside vendors and 28% reported increased reliance. Companies with 5,000+ employees were the only size group where more respondents reported increased reliance. That subgroup is 9% of the sample, about 18 people, so read it as a signal, not a rule.</p>
<p><strong>Skills are the worry.</strong> Asked for their top AI-related SEO concerns, 27% of Medill responses named hiring people with AI skill sets, the most of any option. Only 3% named hiring vendors with AI skills. That is the core risk of the in-house route: the plan depends on a hire that marketers themselves rank as their top concern.</p>
<p><strong>Funding tracks with measurement.</strong> In Brafton's research with 142 participants, fewer than 1 in 5 had a dedicated GEO budget. Of those without one, 34.18% were not measuring AI search visibility at all, while none of the funded group gave that answer (<a href="https://www.brafton.com/blog/brafton-research-lab/how-budgets-influence-geo-strategy-and-what-to-do-without-one/">Brafton, Oct 2026</a>). Brafton is a content agency, does not disclose fieldwork dates, geography or how respondents were recruited, and says the link is not causal.</p>
<p><strong>The traffic is starting to matter.</strong> Adobe reports that in September 2026, AI traffic to US retail sites converted 90% better than non-AI traffic, up from converting 9% worse in August 2025 (<a href="https://business.adobe.com/blog/ai-traffic-higher-revenue-per-visit-retail-holiday">Adobe, 29 Oct 2026</a>). This is US retail data, not B2B or services buying, and Adobe sells AI visibility software (<a href="https://business.adobe.com/products/brand-visibility.html">Adobe Brand Visibility</a>).</p>
<p><strong>More people now check the shortlist.</strong> In a predictions post, Forrester says internal buying teams have grown from an average of eight stakeholders to 13, without giving a time frame, and predicts buyers will double their human interactions to validate AI-generated recommendations (<a href="https://www.forrester.com/blogs/predictions-2027-ai-takes-over-business-buying-but-humans-retain-control/">Forrester, 28 Oct 2026</a>). The second point is a forecast, not survey data.</p>
<p>Read together, these figures make AI visibility worth doing, in our view. The open questions are who owns it and who proves it worked. Pick the model that answers both.</p>
${h2('Should you hire an agency or do marketing in-house at all?')}
<p>For marketing in general, in-house wins on context and speed of approval, and agencies win on specialist breadth and capacity you can switch on and off. In our experience, many mature marketing teams already mix both. AEO and GEO add one twist: much of the work happens on sites you do not control.</p>
<p>That off-site layer is where the GEO agency vs in-house choice is hardest, so this guide gives it extra weight.</p>
${h2('FAQ')}
${faqHtml}
<hr>
<p>For an agency or hybrid model built around your gap:</p>
${quoteLink}
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

export const geoAgencyVsInHouseArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '18 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 authorName: 'Sandeep Kumar',
 /** Ship GO: PREVIEW true keeps noindex,follow and leaves this note out of the sitemap, llms files, RSS and the author index. */
 noindex: PREVIEW,
 /** Keep reading is the template card only. A noindex preview can still show that one card. */
 nextSlug: 'best-aeo-agencies',
 coverImage: {src: `/journal/${SLUG}/geo-agency-vs-in-house-cover.webp`, width: 1920, height: 1080, alt: COVER_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: geoAgencyVsInHouseJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
