/**
 * /industries/law-firms · copy SoT COPY-DRAFT-v2.md (13 Nov 2026), rendered verbatim.
 * UI strings from HIBIKU-LAW-FIRMS-UI-STRINGS-V10 (card tabs, mismatch row, sr-only line).
 * Source note per Super Dude (13 Nov 2026): "Source: official bar or regulator register." with no "Checked on [date]".
 * Design: Gohan comp v1.1.1 (Sozo cleared). Tech: DODAI-LAW-FIRMS-TECH-PREBRIEF (13 Nov 2026).
 * Nakama Growth. No em or en dashes.
 *
 * PREVIEW ONLY. PREVIEW true keeps this route noindex, follow, and preview deploys add X-Robots-Tag from proxy.ts.
 * Not in the sitemap, llms.txt, llms-full, corePages, header dropdown, footer or the /industries hub,
 * and no /industries/legal or /industries/law redirects. All of those land with the flip (see SHIP-FLIP.md).
 */
export const PREVIEW = true;

export const SLUG = '/industries/law-firms';
export const TITLE = 'GEO Agency for Law Firms | GEO for Law Firms | Nakama Growth';
/** Meta lock, 144 characters (Super Dude re-lock, 13 Nov 2026). */
export const META = 'GEO for law firms: multi-attorney firms get named and cited in ChatGPT, Gemini and Google AI answers, with attorney and office facts that match.';
/** Schema Service name and serviceType. Dodai default (sibling pattern: Healthcare GEO, Fintech GEO). */
export const SERVICE_NAME = 'Law Firm GEO';
export const BREADCRUMB = 'Law firms';
/** Dodai's copy-derived proposal; Totonoe locks it. */
export const AUDIENCE = 'Law firms with several attorneys, including personal injury, family, immigration, criminal defense, estate planning and employment firms';
/** Ship date (ISO). Empty while PREVIEW: the WebPage node carries no dates until the flip sets this. */
export const GO_LIVE_DATE = '';
/** Bump on any later content edit so WebPage dateModified moves with the sitemap lastmod. Defaults to GO_LIVE_DATE. */
export const MODIFIED_DATE = GO_LIVE_DATE;

export const CTA_PRIMARY = 'Book a call';
export const CTA_PRIMARY_HREF = '/pricing#quote';
export const CTA_SECONDARY = 'AI visibility audit';
export const CTA_SECONDARY_HREF = '/services/ai-visibility-audit';

/* Hero */
export const EYEBROW = 'Law firms';
export const H1 = 'GEO Agency for Law Firms';
export const LEAD = 'Nakama Growth helps law firms with several attorneys, worldwide, get named in ChatGPT search, Perplexity, Gemini, Google AI Overviews and AI Mode, and described the way their own attorney, office and bar facts say. We work with managing partners and marketing leads at firms that handle personal injury, family, immigration, criminal defense, estate planning and employment matters.';
export const PRACTICE_LABEL = 'Practice areas:';
export const PRACTICE_LINE = 'Personal injury · Family · Immigration · Criminal defense · Estate planning · Employment';
export const MARKET_LABEL = 'Market:';
export const MARKET_LINE = 'Worldwide';
/** Hero back-card tab labels (decorative, CSS generated content with empty alt). */
export const HERO_BACK_TABS = ['Immigration', 'Criminal defense'] as const;

/* 1 Prompt cards. Placeholders in [brackets] render as span.ph. */
export const H2_S1 = 'How could your firm show up in AI answers?';
export const DAL_S1 = 'Example AI answers. Each one names a placeholder for your firm and shows where the reason came from. These are discovery questions, the kind of prompt where a firm can be named, not fact-checks of one brand. The answers cite a published fact, not a ranking, a result or a legal opinion.';
export type PromptCard = {tab: string; prompt: string; answer: string; cite: string};
export const CARDS: readonly PromptCard[] = [
 {tab: 'Personal injury', prompt: '“Which personal injury firms in [city] handle truck accident cases?”', answer: '[Your firm] handles truck accident cases, and its attorney page lists an office in [city].', cite: 'Cited from your attorney page'},
 {tab: 'Immigration', prompt: '“Who should I talk to about a green card through marriage in [city]?”', answer: '[Your firm] handles marriage-based green card matters, and its office page lists [city].', cite: 'Cited from your practice and office pages'},
 {tab: 'Criminal defense', prompt: '“I was arrested for DUI in [county]. Which defense lawyers should I look at?”', answer: '[Your firm] handles DUI defense, and its attorney page lists work in [county].', cite: 'Cited from your attorney page'},
 {tab: 'Family law', prompt: '“Which family law firms in [city] work on high-asset divorces?”', answer: '[Your firm] handles high-asset divorce matters, and its family law page lists an office in [city].', cite: 'Cited from your family law page'},
];

/* 2 Definition */
export const H2_S2 = 'What is GEO for law firms?';
export const DAL_S2 = 'GEO for law firms is the work of making a law firm, its offices and its attorneys easy for AI answers to name and describe correctly. It covers entity mapping, bar admission and status checks, office and city facts, practice-area alignment, third-party directory and profile sources, and repeat prompt runs.';
export const SUB_S2 = 'A law firm GEO agency does this work for multi-attorney firms, from the first audit to monthly prompt tracking. GEO stands for generative engine optimization.';
export const COVERS_H = 'Covers';
export const COVERS = ['Entity mapping', 'Bar admission and status facts', 'Office and city facts', 'Practice-area alignment', 'Directory and profile sources', 'Repeat prompt runs'] as const;
export const NOT_COVERED_H = 'Does not cover';
export const NOT_COVERED = ['Legal advice, ethics opinions, ad pre-clearance or bar filings', 'Paid ads, PPC or Google Local Services Ads', 'Lead buying, pay-per-case or fee-share deals', 'Website builds', 'Map-pack or local SEO only programs'] as const;
export const AEO_NOTE = 'Some people also look for answer engine optimization for law firms, or AEO for law firms. On this page, AEO means answer engine optimization, not the litigation term Attorneys’ Eyes Only.';
export const H3_DIFF = 'How is law firm GEO different from law firm SEO?';
export const DIFF_LEAD = 'Law firm SEO works on rankings and clicks in search results. GEO works on whether AI answers name your firm, tie each attorney to the right office and bar admission, and repeat your practice areas the way your own pages state them. Rankings still matter. This page covers what those answers say.';
export const DIFF_HEADS = ['Area', 'Law firm SEO', 'Law firm GEO'] as const;
export const DIFF_ROWS: readonly (readonly [string, string, string])[] = [
 ['What it works on', 'Rankings and clicks in search results', 'Whether AI answers name your firm and describe your attorneys correctly'],
 ['Which facts it gets right', 'Practice and content pages in search results', 'Attorney, office, bar admission and practice-area facts as your own pages and public records state them'],
 ['How it is measured', 'Rankings and clicks', 'Mentions, citations, recommendations and fact accuracy, by engine'],
];

/* 3 Sources */
export const H2_S3 = 'What shapes the AI answer about your law firm?';
export const DAL_S3 = 'AI answers about a law firm draw on many pages at once, and most of them sit outside the firm’s own site. Attorney bios, bar and regulator registers, office pages, Google Business Profiles, legal directories, reviews, YouTube and Reddit can all be quoted, and they can disagree. These are the source types to inspect first.';
/** cite: [plain lead, bold attribution, rest]. note: small note line. after: paragraph after the cites. */
export type SourceType = {h: string; p: string; cites?: readonly (readonly [string, string, string])[]; note?: string; after?: string};
export const SOURCE_TYPES: readonly SourceType[] = [
 {h: 'Attorney bios and office pages', p: 'Answers can quote your attorney pages, office pages and practice pages. When an attorney has left, an office has moved or a practice page is out of date, the answer can repeat the old fact.'},
 {h: 'Bar lookups', p: 'Official bar and regulator registers are the public record for admission and status. Answers can still drift if a bio, a directory and the lookup do not agree.'},
 {h: 'Google Business Profile', p: 'Office profiles and individual attorney profiles each say where someone practices. Mismatched cities or extra profiles can put you in the wrong answers, or in none.'},
 {h: 'Legal directories', p: 'Avvo, Justia, Super Lawyers, FindLaw and Martindale carry bios, practice categories and recognition listings that answers can draw on. Each directory sets its own rules, and profiles can drift out of date.', cites: [['The mix is not the same for every query. ', 'Juris Digital, updated 4 October 2026,', ' found Justia cited in 227 of 500 personal-injury answers but in 12 of 500 car-accident answers. Juris Digital sells to law firms, so treat this as vendor research, and as a reminder that source mix shifts by query.']]},
 {h: 'YouTube, Reddit and other third-party sources', p: 'Questions like “which firm should I call” can pull from directories, local sites, YouTube and Reddit.', cites: [['', 'OptimizeMyFirm, in a personal-injury-only study with data from 17 October 2026,', ' lists Google AI Overviews’ top cited third-party sources as Google Business Profile listings 21%, Super Lawyers 12%, YouTube 10%, Reddit 8% and Yelp 8%, as a share of answers.'], ['', 'A Citorian five-engine study, published 19 June 2026,', ' shows Reddit in 8% of answers and YouTube in 5%, with Reddit above Avvo at 5%.']], note: 'All three are vendor studies, they do not agree on every source, and the OptimizeMyFirm figures are personal injury only.', after: 'If those sources never mention you, the answer may leave you out. Nakama Growth already runs YouTube, Reddit, digital PR and content as services. Reddit work, when it is in scope, is disclosed and helpful participation. We do not pose as clients.'},
 {h: 'Reviews', p: 'Review sites and directory reviews can be quoted. We work with genuine reviews only. We do not write, buy or edit reviews, and we do not generate reviews tied to sentiment.'},
];
export const LISTINGS_H = 'One attorney, many listings';
export const LISTINGS: readonly (readonly [string, string])[] = [
 ['Your site', 'name, office, practice areas, bar facts'],
 ['Bar or regulator register', 'admission and status'],
 ['Google Business Profile', 'office or practitioner profile'],
 ['Avvo, Justia, Super Lawyers, FindLaw, Martindale', 'bio and category facts'],
 ['YouTube, Reddit and press', 'third-party mentions'],
];
/** Index of the mismatch row in LISTINGS, and its Hibiku V10 strings. */
export const MISMATCH_ROW = 3;
export const MISMATCH_PREV = '[previous office city]';
export const MISMATCH_CUR = '[current office city]';
export const MISMATCH_LABEL = 'Not yet updated';
export const MISMATCH_SR = 'Illustration: a directory profile still shows the previous office city, while your site shows the current one.';
export const LISTINGS_NODE = '[attorney]';

/* 4 Sourcing */
export const H2_S4 = 'How do we source attorney, office and bar facts?';
export const DAL_S4 = 'Nakama Growth links the attorney, office and bar facts we write to the page or record they came from, with the date we checked it. When a fact changes, we look again at the pages and AI answers that repeat it. The firm’s responsible attorney decides what goes live, through the firm’s own process.';
export const SRC_STEPS: readonly (readonly [string, string, string])[] = [
 ['01', 'Start from your own pages', 'We draft from the pages you already publish, such as attorney bios, office pages, practice pages and any bar or directory links you already display.'],
 ['02', 'Check the public record', 'For each attorney, we compare the name, office and city, practice areas, and bar admission state or states and status with the official bar or regulator register, and with Google Business Profile, Avvo, Justia, Super Lawyers, FindLaw and Martindale where a profile exists.'],
 ['03', 'Note where each fact came from', 'An attorney, office or bar fact in our drafts carries a note of the page or record it came from and when we checked it, so your team can see the source.'],
 ['04', 'Look again when a fact changes', 'When an attorney joins or leaves, an office opens or closes, or a bar fact changes, we look again at the pages, listings and AI answers that repeat it. We update what we can edit, or we send your team a fix list for the rest, then recheck the answers we track.'],
];
/** Index of the step whose H3 carries the ember footnote marker. */
export const SRC_STEP_FN = 1;
export const SOURCE_NOTE = 'Source: official bar or regulator register.';
export const ACCESS_NOTE = 'We work mainly from public sources and only ask for the access a task needs. We do not need case files or client data.';

/* 5 Who */
export const H2_S5 = 'Who do we work with in law?';
export const DAL_S5 = 'Nakama Growth works with law firms worldwide with several attorneys, and often several offices, states or countries, in practice areas where people ask AI tools who to call: personal injury, family, immigration, criminal defense, estate planning and employment. This is for managing partners and marketing leads. The firm’s responsible attorney signs off on every claim about its lawyers and results.';
export const SEG_HEADS = ['Segment', 'Facts to get right', 'Example check prompt'] as const;
export const SEG_ROWS: readonly (readonly [string, string, string])[] = [
 ['Multi-office consumer firms', 'Each office and attorney ties to the right city and bar', '“Which [practice] firms have an office in [city]?”'],
 ['Multi-state and multi-country firms', 'Bar admissions decide where an attorney can take a matter', '“Is [attorney] licensed in [state]?”'],
 ['Practice-group firms', 'Practice pages and directory categories agree', '“Does [firm] handle [case type]?”'],
 ['Business-facing firms (also a fit)', 'Founders and HR leads ask AI for counsel', '“Which firms in [state] help startups with a first fundraising round?”'],
];
export const FACTS_LABEL = 'Facts to get right:';
export const PRACTICES: readonly (readonly [string, string, string])[] = [
 ['Personal injury', 'attorneys, offices, bar admissions and the case types the firm actually handles, such as truck accident work, as the firm’s own pages state them.', '“Which personal injury firms in [city] handle truck accident cases?”'],
 ['Family and divorce', 'the family matters the firm handles, and which office covers which city.', '“Which family law firms in [city] work on high-asset divorces?”'],
 ['Immigration', 'the immigration matters the firm handles, the office city, and the attorneys listed for that work.', '“Who should I talk to about a green card through marriage in [city]?”'],
 ['Criminal defense', 'the defense matters the firm handles, and the office or county the attorney pages list.', '“I was arrested for DUI in [county]. Which defense lawyers should I look at?”'],
 ['Estate planning', 'the estate and trust matters the firm handles, and the state the office and bar facts support.', '“Who can help me set up a trust for my parents in [state]?”'],
 ['Employment', 'the employment matters the firm handles, and the state those attorney pages list.', '“I think I was fired for reporting harassment. Which employment lawyers in [state] take these cases?”'],
];
export const BUSINESS_LINE = 'Business-facing work is also a fit, including employment counsel, business immigration, and startup or corporate counsel, when people ask AI which firm to call. Example prompt: “Which immigration firms handle H-1B petitions for small companies?”';
export const OUT_LINE = 'Big Law or AmLaw 100 brand programs, legal tech and practice-management software, legal marketing agencies, solo attorneys who only want map-pack local SEO, lead buying or pay-per-case deals, and PPC or Google Local Services Ads management are outside this page. Legal tech brands fit our GEO services. Legal agencies fit our white-label work.';

/* 6 Map */
export const H2_S6 = 'What is the Law Firm AI Visibility Map?';
export const MAP_TAB = 'Law Firm AI Visibility Map';
export const DAL_S6 = 'The Law Firm AI Visibility Map is the six part framework Nakama Growth uses for law firms. It is our own house label and carries no industry score. It traces each attorney to the right office and bar admission, helps you check those facts at the source, then compares what AI answers say against them.';
export const MAP: readonly (readonly [string, string])[] = [
 ['Entity', 'Trace each attorney to the firm and the right office, and use one name for each across your site, directories and profiles.'],
 ['Bar admissions', 'Help you check each attorney’s admission jurisdiction or jurisdictions and status against the official bar or regulator register, and flag facts that do not agree with the bio.'],
 ['Offices and cities', 'Record which attorneys sit in which office and city, including Google Business Profiles for the office and for individual practitioners.'],
 ['Practice areas', 'Record the matters each attorney and office actually handle, and match that on your practice pages and directory categories.'],
 ['Third-party sources', 'Find the directories, profiles, publishers, YouTube and Reddit sources that answers draw on for your practice areas, and help keep facts about you current where you or the owner can edit them.'],
 ['Measure', 'Run the same prompts on repeat and log mentions, citations, recommendations and whether each answer’s facts match your sources, as separate numbers for each engine.'],
];
export const MID_Q = 'Want to see what AI answers say about your law firm?';

/* 7 Services */
export const H2_S7 = 'How do GEO and answer engine optimization work for law firms?';
export const DAL_S7 = 'Nakama Growth runs answer engine optimization in the same program as GEO, so AI answers can name your law firm and describe your attorneys, offices and practice areas correctly. On this page, AEO means answer engine optimization, not Attorneys’ Eyes Only. Method detail sits on our service pages, and the audit shows where you stand today.';
export const SERVICES: readonly (readonly [string, string, string])[] = [
 ['GEO', '/services/geo', 'Work on the third-party sources that shape AI answers about your firm. See how our GEO service works.'],
 ['Answer engine optimization (AEO)', '/services/aeo', 'Make your pages the clearest answer to real questions people ask before they call a firm.'],
 ['AI visibility audit', '/services/ai-visibility-audit', 'See how AI answers describe your law firm today.'],
];

/* 8 First 90 days */
export const H2_S8 = 'What happens in your first 90 days with Nakama Growth?';
export const DAL_S8 = 'The first 90 days run in three phases. We learn your firm and set the baseline, fix or flag attorney, office and bar mismatches with your approval, and work on the sources AI answers pull from. We then show you where you now appear and where you don’t yet.';
export const PHASES: readonly (readonly [string, string])[] = [
 ['Days 1 to 30 · Audit', 'Understand your firm and market, map the attorney-to-office-to-bar facts, set a baseline on the prompts that matter, find the gaps and build the plan.'],
 ['Days 31 to 60 · Push', 'Fix or flag bios, office pages, directory and profile facts with your responsible attorney’s approval, and publish or support content, YouTube, Reddit and press where those channels are in scope. Reddit work stays disclosed and helpful. We do not pose as clients, and we do not write reviews.'],
 ['Days 61 to 90 · Measure', 'Rerun every prompt and report mentions, citations, recommendations and fact accuracy, so you see where you’re visible and where you’re not yet.'],
];
export const NINETY_NOTE = 'Timing depends on how fast changes go live on your site and on profiles you or the owner can edit. We do not promise that an engine will name you by day 90.';

/* 9 Fit */
export const H2_S9 = 'Is Nakama Growth the right GEO agency for law firms?';
export const DAL_S9 = 'Nakama Growth is a good fit for law firms with several attorneys that want accuracy in AI answers measured on an agreed prompt set, and that can keep attorney, office and bar facts current. It is a poor fit for anyone who wants a guaranteed mention, a signed-case deal, map-pack only work, or a legal opinion on their marketing.';
export const FIT_YES_H = 'A good fit';
export const FIT_YES = [
 'Law firms worldwide with several attorneys, and often several offices, states or countries, in personal injury, family, immigration, criminal defense, estate planning or employment',
 'Business-facing firms in those or adjacent areas, such as employment counsel, business immigration, or startup and corporate counsel, when people ask AI which firm to call',
 'Teams that want mentions, citations, recommendations and fact accuracy measured on an agreed prompt set',
 'Firms whose responsible attorney will sign off on claims about lawyers, offices and results',
] as const;
export const FIT_NO_H = 'Not a fit';
export const FIT_NO = [
 'Anyone who wants a guaranteed ChatGPT mention, guaranteed cases or guaranteed revenue',
 'Pay-per-case, per-signed-case, percent-of-fee or lead-buying deals',
 'Solo attorneys who only want map-pack local SEO',
 'Big Law or AmLaw 100 brand programs',
 'Legal tech or practice-management software (our GEO services cover that)',
 'Legal marketing agencies (our white-label work covers that)',
 'Anyone who wants legal advice, an ethics opinion, ad pre-clearance or a bar filing',
 'PPC or Google Local Services Ads management',
] as const;

/* Logo strip (between Fit and FAQ). Existing site paths (public/clients/white, byte-identical to the comp logos; used by fintech). */
export const LOGOS_LABEL = 'Teams we have grown in AI search (not law firms)';
export const LOGOS = [
 {name: 'Inventive AI', src: '/clients/white/inventive.png', w: 28, h: 28, word: false},
 {name: 'HubEngage', src: '/clients/white/hubengage.png', w: 28, h: 28, word: false},
 {name: 'StarAgile', src: '/clients/white/staragile.png', w: 45, h: 28, word: false},
 {name: 'Synup', src: '/clients/white/synup.svg', w: 92, h: 25, word: true},
] as const;

/* 10 FAQ. Ids fixed by the spec. Visible text and FAQPage JSON-LD both read from this array. */
export const H2_FAQ = 'FAQ about hiring a GEO agency for law firms';
export type Faq = {id: string; q: string; a: string; href?: string; linkLabel?: string};
export const FAQ: readonly Faq[] = [
 {id: 'faq-cost', q: 'How much does a law firm GEO agency engagement cost?', a: 'Pricing depends on how many attorneys, offices, profiles and practice areas are in scope, which engines we cover and how much source and listing work you need. We do not publish a flat fee on this page. Book a call for a quote, or read our GEO and AEO pricing guide for how we price this work.', href: '/journal/geo-aeo-pricing', linkLabel: 'GEO and AEO pricing guide'},
 {id: 'faq-timeline', q: 'How long before we see movement in AI answers?', a: 'Engagements start with an audit and a 90 day plan. First we learn your firm, map attorney, office and bar facts, and set a baseline on the prompts that matter. Then we fix or flag sources, with your responsible attorney’s approval, and work where AI answers pull from. We then rerun every prompt and report mentions, citations, recommendations and fact accuracy. We do not promise a date when an engine will name you.'},
 {id: 'faq-guarantee', q: 'Can you guarantee ChatGPT will name or recommend our law firm?', a: 'No. No agency can guarantee that ChatGPT or any other AI answer will name or recommend a law firm, and we do not promise cases, clients or revenue. We measure mentions, citations, recommendations and fact accuracy separately, and we work on the sources those answers already draw on.'},
 {id: 'faq-vs-seo', q: 'How is GEO for law firms different from hiring a law firm SEO agency?', a: 'A law firm SEO agency works on rankings and clicks for your practice and content pages. GEO works on whether AI answers name your firm and describe your attorneys, offices and bar facts correctly. Some people call this answer engine optimization for law firms, or AI SEO for law firms. We can work alongside your SEO partner on the same questions people ask before they call.'},
 {id: 'faq-approval', q: 'Who approves attorney, office and bar claims?', a: 'The firm’s responsible attorney signs off on every claim about its lawyers, offices and results before it publishes. We help you check names, offices and admissions against your own pages and the official bar or regulator register, and we send a fix list for sources we cannot edit. Rules differ by country and state. Nakama Growth gives marketing advice, not legal advice.'},
 {id: 'faq-practice-areas', q: 'Do you work with personal injury, family, immigration and defense firms?', a: 'Yes. Those are core practice areas on this page, along with estate planning and employment. Business-facing firms are also a fit. Big Law brand programs, solo map-pack only work, legal tech and legal agencies are outside this page.'},
 {id: 'faq-data', q: 'Do you need access to our case files or client data?', a: 'Usually not. We work mainly from public sources, such as your website, attorney and office pages, public bar lookups and directory or Google profiles, along with documents you choose to share. We only ask for the access a task needs, and you decide what to share. We do not need case files or client matter data.'},
];

/* 11 Closing */
export const H2_S11 = 'How can you see what AI answers say about your law firm?';
export const DAL_S11 = 'Book a call and we will walk through the questions people ask AI about firms in your practice areas, the engines they use and the attorney, office and bar facts behind the answers. You will leave with a clear first look at where those answers already name firms, and where your facts need to agree.';
export const RELATED_LABEL = 'Related:';
/** No reverse links from the four siblings in this PR (out of scope). */
export const RELATED = [
 {label: 'GEO for healthcare brands', href: '/industries/healthcare'},
 {label: 'GEO for ecommerce brands', href: '/industries/ecommerce'},
 {label: 'GEO for fintech brands', href: '/industries/fintech'},
 {label: 'AEO for real estate brokerages', href: '/industries/real-estate'},
 {label: 'See all industries', href: '/industries'},
 {label: 'GEO services', href: '/services/geo'},
 {label: 'AEO services', href: '/services/aeo'},
 {label: 'AI visibility audit', href: '/services/ai-visibility-audit'},
 {label: 'GEO and AEO pricing guide', href: '/journal/geo-aeo-pricing'},
] as const;
