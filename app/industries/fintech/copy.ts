/**
 * /industries/fintech · Hibiku DRAFT V1.3.3 strings
 * (HIBIKU-FINTECH-COPY-V1.3.3-2026-11-12.md) plus hero cycle card copy V1.3
 * (soften/HIBIKU-FINTECH-CYCLE-CARD-COPY-V1.3-2026-11-12.md). Render these exactly.
 * Nakama Growth. No em or en dashes. Copy V1.3.0 (§09 discovery prompts). Design: Gohan page comp v1.0.6.6 and cycle card
 * comp V1.3.2 (Sozo CLEAR 12 Nov ~02:40 IST). No visible "Example" text (Yash, page-wide).
 *
 * PREVIEW. PREVIEW true keeps this route noindex, follow.
 * It is not on the /industries hub, in the header dropdown, the footer,
 * corePages, sitemap.xml or llms.txt. Do not flip it without Yash's ship GO.
 * {{GO_LIVE_DATE}} is filled at ship (journal date form, for example "11 Nov 2026").
 */
export const PREVIEW = true;

export const SLUG = '/industries/fintech';
export const TITLE = 'Fintech GEO Agency | Fintech AI Visibility | Nakama Growth';
export const META = 'Fintech GEO agency helping payments, lending, crypto and insurtech brands get named and cited in ChatGPT, Gemini and Google AI answers.';
/** Schema Service name and serviceType. Dodai's call: "Fintech GEO" (sibling pattern) or "Generative engine optimization (GEO) for fintech". */
export const SERVICE_NAME = 'Fintech GEO';
export const BREADCRUMB = 'Fintech';
export const AUDIENCE = 'Fintech companies, including payments, lending, neobank, wealth, insurtech, crypto and embedded finance brands';

/* 01 Hero */
export const EYEBROW = 'Fintech';
export const H1 = 'GEO Agency for Fintech Brands';
export const LEAD = 'Nakama Growth helps payments, lending, banking, investing, insurtech, crypto and embedded finance brands get named in ChatGPT search, Perplexity, Gemini, Google AI Overviews and AI Mode, and described the way their own pages and filings say. We work with teams across the US, UK, EU and India.';
export const CTA_PRIMARY = 'Book a call';
export const CTA_PRIMARY_HREF = '/pricing#quote';
export const CTA_SECONDARY = 'AI visibility audit';
export const CTA_SECONDARY_HREF = '/services/ai-visibility-audit';
export const ADVICE = 'Nakama Growth gives marketing advice, not legal, regulatory or financial advice.';
/** Filled at ship. Not rendered: the visible "Updated" line under the hero CTAs was removed (Yash, 12 Nov). Kept for the ship-day date fields (SHIP-FLIP item 1). */
export const GO_LIVE_DATE = '{{GO_LIVE_DATE}}';

/* 01a Sector chips (anchor links to the section 09 cards) */
export const SECTORS_LABEL = 'Sectors';
export const SECTORS: readonly [string, string][] = [
 ['Payments', 'payments'],
 ['Lending', 'lending'],
 ['Neobanks', 'neobanks'],
 ['Wealth', 'wealth'],
 ['Insurtech', 'insurtech'],
 ['Crypto', 'crypto'],
 ['Embedded finance', 'embedded-finance'],
];

/* 01b Markets strip */
export const MARKETS_LABEL = 'Markets';
export const MARKET_LINKS: readonly [string, string][] = [
 ['US', 'market-us'],
 ['UK', 'market-uk'],
 ['EU', 'market-eu'],
 ['India', 'market-india'],
];
export const MARKETS_LINE = 'Answers and sources differ by market, so we run prompts and compare answers in each one.';

/* Hero right column: cycle card (copy V1.3). Replaces the 01c answer trace (V1.2.9 note: 01c drops with it).
   State 4 is the rest state: server HTML, no JS and reduced motion. */
export const CC_HEADING = 'How your brand could show up in AI answers';
export const CC_SLOT = 'Your brand';
/** Screen reader only. Never visible. */
export const CC_PANEL_LABEL = 'Example AI answer';
export const CC_CAPTION = 'Example AI answers. Each one names a placeholder for your brand and shows where the reason came from.';
export const CC_PROMPTS = [
 'Which personal loan app is good for a first-time borrower?',
 'Which crypto app should a beginner look at?',
 "What's a simple health insurance app for freelancers?",
 'Which money transfer app should I use to send money to India?',
] as const;
/** States 1 to 3: answer text after the slot, and the chip. */
export const CC_ANSWERS: readonly [string, string][] = [
 [' is one to look at. Its eligibility page explains who can apply and what you need.', 'Cited from your eligibility page'],
 [' is worth a look, and its help centre says which company runs it.', 'Cited from your help centre'],
 [' is a good fit. Its plans page sets out each plan for self-employed people in plain terms.', 'Cited from your plans page'],
];
/** State 4: shortlist (rest state). */
export const CC_S4_INTRO = 'A few apps to compare:';
export const CC_S4_ROWS = ['App A · widely used for transfers abroad', 'App B · supports many countries'] as const;
export const CC_S4_MINE = ' · recommended, shows the full fee before you send';
export const CC_S4_CHIP = 'Cited from your fees page';

/* 03 Definition */
export const LBL_DEF = '03 · Definition';
export const H2_DEF = 'What is GEO for fintech brands?';
export const DAL_DEF = 'GEO for fintech brands is the work of making a fintech company, its products and the entities behind them easy for AI answers to name and describe correctly. It covers entity mapping, licence and register facts, dated fee and terms sources, supported markets, partner bank and provider roles, third-party sources and repeat prompt runs.';
export const DEF_ENTITY = 'A fintech GEO agency does this work for payments, lending, banking, investing, insurtech, crypto and embedded finance brands, from the first audit to monthly prompt tracking. GEO stands for generative engine optimization.';
export const COVERS = ['Entity mapping', 'Licence and register facts', 'Dated fee and terms sources', 'Supported markets', 'Partner bank and provider roles', 'Repeat prompt runs'] as const;
export const NOT_COVERED = ['Legal, regulatory, tax or financial advice', 'Paid ads', 'Lead buying', 'App or website builds'] as const;
export const H3_DIFF = 'How is fintech GEO different from fintech SEO?';
export const DAL_DIFF = 'Fintech SEO works on rankings and clicks in search results. GEO works on whether AI answers name your brand, tie your product to the right licensed entity and partner bank, and repeat your fees, terms and supported markets the way your own pages state them. Rankings still matter. This page covers what those answers say.';
export const DIFF_HEADS = ['Area', 'Fintech SEO', 'Fintech GEO'] as const;
export const DIFF_ROWS: readonly [string, string, string][] = [
 ['What it works on', 'Rankings and clicks in search results', 'Whether AI answers name your brand and describe your products correctly'],
 ['Which facts it gets right', 'Product and content pages in search results', 'The licensed entity and partner bank, plus fees, terms and supported markets as your own pages state them'],
 ['How it is measured', 'Rankings and clicks', 'Mentions, citations, recommendations and fact accuracy, by market and engine'],
];

/* 04 Why it matters */
export const LBL_WHY = '04 · Why it matters';
export const H2_WHY = 'Why do AI answers matter for fintech brands?';
export const DAL_WHY = 'People ask AI tools which app to use, who stands behind a product and whether it works in their country, then check the answer elsewhere. Fintech AI visibility starts there. If an answer quotes an old fee, calls a partner bank\'s product yours or puts you in a market you do not serve, the first impression is wrong.';
export const WRONG_LABEL = 'What a wrong answer looks like';
/** Screen reader only cue: the block's own visually hidden heading, never a row cell (Dodai 02:15, 3). */
export const WRONG_CUE = 'Illustration: wrong answers about a placeholder brand.';
export const WRONG_SAID = 'AI said';
export const WRONG_SAYS = 'Your source says';
export const WRONG_ROWS: readonly [string, string, string][] = [
 ['Fees', '[Your brand] charges [an old fee] to send money abroad.', 'Your fees page lists [your current fee], checked [date].'],
 ['Licence', '[Your brand] is a bank.', '[Your brand] is a [licence type], and accounts are provided by [partner bank].'],
 ['Markets', '[Your brand] is available in [market].', '[Your brand] serves [your markets] only.'],
 ['Shortlists', 'A shortlist of [category] apps in [market], without your name.', 'You serve [market] and publish [product] there.'],
];
export const EVIDENCE = [
 'In an FCA-commissioned Yonder survey of 5,026 UK adults with a day-to-day bank account (fieldwork April 2026, published by the FCA in July 2026), 16% use AI to support personal finance. Among the 630 who used AI while shopping for or using a financial product, fewer than a quarter followed its advice, and most compared it with information from other sources. This covers UK consumers.',
 'In an FCA survey of 666 UK adults aged 18 to 40 who own or would consider investments (fieldwork July 2026, published August 2026), 44% wrongly believed AI-generated financial information is regulated. This covers younger UK investors.',
 'Comscore panel data for Q1 2026, published 29 July 2026, found that 34% of US credit card applicants engaged with a generative AI platform while they considered a card. This covers US credit card applicants.',
 'In a Gartner survey of 645 B2B buyers (August to September 2025, published 20 May 2026), 45% used generative AI in a recent purchase, mainly to gather information on vendors and products, and 69% prefer to validate AI-generated insights with sales reps. These are general B2B buyers across industries.',
] as const;
export const SCOPE_LINE = 'No published survey with a full method measures how buyers of fintech services use AI assistants, so each figure above is labelled with the group it covers.';
export const SOURCES_LABEL = 'Sources:';
export const SOURCES: readonly [string, string][] = [
 ['FCA consumer research on AI (PDF)', 'https://www.fca.org.uk/publication/external-research/ai-consumer-research.pdf'],
 ['FCA press release on young investors and AI', 'https://www.fca.org.uk/news/press-releases/young-investors-trust-ai-more-tv-or-celebrities'],
 ['Comscore', 'https://www.comscore.com/Insights/Blog/The-New-Front-Door-to-Financial-Decision-Making'],
 ['Gartner press release', 'https://www.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights'],
];

/* 05 Sourcing */
export const LBL_SRC = '05 · Sourcing';
export const H2_SRC = 'How we source product claims';
export const DAL_SRC = 'Nakama Growth links the fee, licence and product facts we write to the page or document they came from, with the date we checked it. When a fact changes, we look again at the pages and AI answers that repeat it. You decide what goes live on your site, through your own process.';
export const SRC_STEPS: readonly [string, string][] = [
 ['Start from your own pages', 'We draft from the pages and documents you already publish, such as your fees page, your terms or a licence register entry.'],
 ['Note where each fact came from', 'A fee, licence or product fact in our drafts carries a note of the page it came from and when we checked it, so your team can see the source.'],
 ['Look again when a fact changes', 'When a fee, licence or product fact changes, we look again at the pages and AI answers that repeat it.'],
];
export const DATA_LINE = 'We work mainly from public sources and only ask for the access a task needs.';

/* 05a When a fee changes: static three step strip (V1.3.3). No figures, no brand slot. Step numbers come from the ol, not the copy. */
export const FEE_HEADING = 'When a fee changes';
export const FEE_STEPS: readonly [string, string][] = [
 ['Your fee changes', 'You change a fee, and we log the new amount with the date and the page it comes from.'],
 ['We update every page that states it', "We find each page and listing that shows the old fee and update it, or send your team the list for any we can't edit."],
 ['We recheck the AI answers', 'We recheck the AI answers we track for the new fee and flag any that still show the old one.'],
];

/* 06 Boundaries */
export const LBL_BOUND = '06 · Boundaries';
export const H2_BOUND = 'Regulated claims we will not write';
export const BOUND_LEAD = 'Some claims carry legal weight in every market we work in. Nakama Growth does not write them, on our pages or in drafts for yours. Where a page needs one of these facts, we link to the place you already publish it.';
export const BOUND_LIST = [
 'Interest rates, APRs or fees stated as our own figures',
 'Investment returns, yields or performance',
 'Approval odds, eligibility promises or instant credit wording',
 'Insured status or deposit protection wording',
 'Guarantees of any kind, including guaranteed AI mentions',
 'Any suggestion that a regulator endorses or works with you or with Nakama Growth',
] as const;

/* 07 Markets */
export const LBL_MKT = '07 · Markets';
export const H2_MKT = 'Same question, four markets';
export const MKT_LEAD = 'The same customer question gets a different answer in each market, because the currency, the cost terms, the regulators and the public records all change. Nakama Growth runs prompts and compares answers market by market. The four panels below show what changes for one lending question and one crypto question.';
export const MKT_QUESTION = 'Is [brand] licensed to lend here, and who is behind it?';
/** Tablist aria-label (Taiken N9). The hero markets list keeps "Markets". */
export const MKT_TABLIST_LABEL = 'Choose a market';
export const MKT_ROW_LABELS = ['Question in this market', 'Currency and cost terms', 'Regulators an answer may mention', 'Public records an answer can be compared with', 'Crypto firms'] as const;
export const MKT_FOOTER = `Context only. ${ADVICE}`;
export const MARKETS: readonly {id: string; tab: string; name: string; rows: readonly [string, string, string, string, string]}[] = [
 {
  id: 'market-us', tab: 'US', name: 'United States',
  rows: [
   '"Is this lender licensed in my state?"',
   'US dollars (USD). Credit costs are shown as an annual percentage rate (APR).',
   'The Consumer Financial Protection Bureau (CFPB) and state regulators for consumer lending. Bank regulators (the OCC, the Federal Reserve, the FDIC and the NCUA) for banks and credit unions. The U.S. Securities and Exchange Commission (SEC), and FINRA, a self-regulatory organization overseen by the SEC, for investing. State insurance departments for insurance.',
   'NMLS Consumer Access for lenders, FDIC BankFind for banks, FINRA BrokerCheck for brokers, the SEC\'s Investment Adviser Public Disclosure site for advisers and NAIC Consumer Insurance Search for insurance.',
   'Question: "Who regulates this crypto platform?" There is no single crypto regulator. The SEC and the CFTC share oversight depending on the asset, under a March 2026 interpretation. Payment stablecoins come under the GENIUS Act, and exchanges usually register with FinCEN and hold state licences. Rules still changing.',
  ],
 },
 {
  id: 'market-uk', tab: 'UK', name: 'United Kingdom',
  rows: [
   '"Which personal loan providers are FCA authorised?"',
   'Pounds sterling (GBP). Adverts with a rate must show a representative APR and a representative example.',
   'The Financial Conduct Authority (FCA) for conduct. Some firms are also supervised by the Prudential Regulation Authority (PRA).',
   'The FCA Financial Services Register.',
   'Question: "Is this crypto firm registered with the FCA?" Crypto firms register with the FCA for anti-money laundering. A full authorisation regime is expected from 25 October 2027. Promotions carry the FCA risk warning.',
  ],
 },
 {
  id: 'market-eu', tab: 'EU', name: 'European Union',
  rows: [
   '"Is this provider authorised in my country?"',
   'The local currency, which is the euro (EUR) in the euro area. The cost of credit is shown as the annual percentage rate of charge (APRC).',
   'National authorities license firms. The EBA, ESMA and EIOPA set common rules. The Consumer Credit Directive (EU) 2023/2225 applies to credit agreements from 20 November 2026.',
   'Each national authority\'s register, which is the authoritative record. The EBA also keeps EU-wide registers of credit institutions and payment institutions for reference.',
   'Question: "Is this crypto provider authorised under MiCA?" Crypto service providers need MiCA authorisation from a national authority. The transition period ended on 1 July 2026. ESMA keeps an interim register of authorised providers.',
  ],
 },
 {
  id: 'market-india', tab: 'India', name: 'India',
  rows: [
   '"Is this lending app linked to an RBI regulated entity?"',
   'Indian rupees (INR). Lenders give an APR and a Key Facts Statement (KFS).',
   'The Reserve Bank of India (RBI) for banks, NBFCs and digital lending. The Securities and Exchange Board of India (SEBI) for investing. The Insurance Regulatory and Development Authority of India (IRDAI) for insurance. NPCI runs UPI and is not a regulator.',
   'RBI\'s list of NBFCs and RBI\'s directory of digital lending apps, SEBI\'s list of registered intermediaries, and IRDAI\'s lists of licensed insurers and brokers. A listing in RBI\'s directory of digital lending apps is not RBI registration or endorsement.',
   'Question: "Is this crypto exchange registered with FIU-IND?" There is no crypto-specific regulator. Exchanges must register with FIU-IND as reporting entities under anti-money laundering law. This is not a licence.',
  ],
 },
];

/* 08 Sources */
export const LBL_SURF = '08 · Sources';
export const H2_SURF = 'What shapes the answer about your fintech brand';
export const SURF_LEAD = 'AI answers about a fintech brand draw on many pages at once, and most of them sit outside your own site. Fees pages, licence registers, market listings, comparison sites and reviews can all be quoted, and they can disagree. These are the source types to inspect first.';
export const SURFACES: readonly [string, string][] = [
 ['Fees and terms pages', 'Answers can quote your fees page, terms and help centre. When old versions stay live, or a comparison site copies an old figure, the answer can repeat it.'],
 ['Licences and registers', 'Public registers and your own legal pages say which entity holds which licence. Answers can mix up a brand, its legal entity and its partner bank or insurer.'],
 ['Supported markets', 'Country pages, app store listings and help articles each say where a product works. When they disagree, answers can place you in the wrong market.'],
 ['Comparison sites and publishers', 'Questions like "which app should I use" can pull from comparison sites, finance publishers, Reddit threads and YouTube. If those sources never mention you, the answer may leave you out.'],
 ['Reviews and app stores', 'App store listings and review sites carry product descriptions and customer reviews that answers can draw on. Each platform sets its own rules, and listings can drift out of date.'],
 ['Explainers and help pages', 'Questions about how a product works can be answered from your own guides. Guides written before a product or fee change can still get quoted.'],
];
export const LISTINGS_H = 'One product, many listings';
export const LISTINGS = ['Your site', 'App store listing', 'Comparison site', 'Partner bank or insurer page', 'Review site'] as const;
export const LISTINGS_SUB = 'Fees, terms and entity facts';

/* 09 Who we work with */
export const LBL_WHO = '09 · Who we work with';
export const H2_WHO = 'Who we work with in fintech';
export const DAL_WHO = 'Nakama Growth can work with fintech brands that sell to consumers or to businesses in the US, UK, EU and India, where customers check them in AI tools before they sign up. This is for heads of marketing, growth and product marketing. Each card below names the facts AI answers need to get right for that kind of product.';
export const SEG_FACTS = 'Facts to get right';
export const SEG_PROMPT = 'Prompt';
export const SEGMENTS: readonly {id: string; title: string; facts: string; prompt: string}[] = [
 {id: 'payments', title: 'Payments and money transfer', facts: 'Fees, supported countries, delivery times and which entity holds the licence', prompt: '"Best international money transfer apps"'},
 {id: 'lending', title: 'Lending', facts: 'The type of lender, who provides the credit and which markets the product serves. We do not write eligibility promises or representative examples', prompt: '"Best online personal loan apps"'},
 {id: 'neobanks', title: 'Neobanks and banking apps', facts: 'Which partner bank holds the money, which entity holds which licence and what the app offers in each market', prompt: '"Best neobanks for freelancers"'},
 {id: 'wealth', title: 'Wealth and investing', facts: 'Which company runs the product, where it is registered and which products are offered in each market', prompt: '"Best apps to start investing"'},
 {id: 'insurtech', title: 'Insurtech', facts: 'Whether the brand is the insurer, a broker or an agent, and which licensed insurer stands behind each product', prompt: '"Best online insurance for small businesses"'},
 {id: 'crypto', title: 'Crypto', facts: 'Which company operates the service in each market, and the registration or authorisation status it publishes where one applies', prompt: '"Top crypto exchanges for buying Bitcoin"'},
 {id: 'embedded-finance', title: 'Embedded finance and B2B fintech', facts: 'The partner bank or licensed provider behind the platform, supported markets and the docs and integration pages buyers read', prompt: '"Best embedded finance platforms for SaaS"'},
];
export const WHO_OUT = 'Paid ads, lead generation, loan lead resale, app builds and work for products that are not licensed or partnered where they operate are outside this page.';

/* 10 Framework */
export const LBL_MAP = '10 · Framework';
export const H2_MAP = 'The Fintech AI Visibility Map';
export const DAL_MAP = 'The Fintech AI Visibility Map is the six part framework Nakama Growth uses for fintech brands. It is our own house label and carries no industry score. It ties each product to its legal entity, licence and partner, helps you check fees, terms and markets at the source, then compares what AI answers say against those facts.';
export const STEPS: readonly [string, string, string][] = [
 ['01', 'Entity', 'Tie each product to the brand, the legal entity that offers it and any partner bank, insurer or provider, and use one name for each across your site, app stores and profiles.'],
 ['02', 'Licences and registers', 'Help you check licence and registration facts against the public register in each market where one exists, such as the FCA Financial Services Register in the UK.'],
 ['03', 'Product facts', 'Record each fee, term and product fact with its source page and the date it was checked.'],
 ['04', 'Markets', 'Record which products work in which markets, and match that on your country pages, help articles and app store listings.'],
 ['05', 'Third-party sources', 'Find the comparison sites, publishers, review sites and communities that answers draw on for your category, and help keep facts about you current where you or the owner can edit them.'],
 ['06', 'Measure', 'Run the same prompts on repeat and log mentions, citations, recommendations and whether each answer\'s facts match your sources, as separate numbers for each market and engine.'],
];
export const MID_LEAD = 'Want to see what AI answers say about your fintech brand?';

/* 11 Services */
export const LBL_SVC = '11 · Services';
export const H2_SVC = 'GEO and AEO for fintech brands';
export const DAL_SVC = 'Nakama Growth runs answer engine optimization in the same program as GEO, so AI answers can name your fintech brand and describe your products correctly. Method detail sits on our service pages, and the audit shows where you stand today.';
export const GEO_HREF = 'https://www.nakama.in/services/geo';
export const SVC_GEO = {title: 'GEO', before: 'Work on the third-party sources that shape AI answers about your brand. See ', link: 'how our GEO service works', after: '.'} as const;
export const SERVICES: readonly [string, string, string][] = [
 ['AEO', 'Make your pages the clearest answer to real customer and buyer questions.', '/services/aeo'],
 ['AI visibility audit', 'See how AI answers describe your fintech brand today.', '/services/ai-visibility-audit'],
];

/* 12 Prompts */
export const LBL_PROMPTS = '12 · Prompts';
export const H2_PROMPTS = 'Fintech prompts we track';
export const DAL_PROMPTS = 'For each fintech brand, we build a prompt set from the questions customers and buyers ask AI tools when they compare providers or check one before signing up. Each prompt runs repeatedly across engines and markets, and results are logged with dates. The rows below are illustrations only and promise no placement.';
export const TRACKER_LABEL = 'Prompt, engine, state';
/** Screen reader only table caption, never a row cell (Dodai 02:15, 3). */
export const TRACKER_CUE = 'Illustration: placeholder rows showing how the prompt tracker is laid out.';
/** Same in every row. No outcome states, counts or ranks (Dodai 02:15, 1). */
export const TRACKER_ENGINES = 'ChatGPT search, Perplexity, Gemini, Google AI Overviews';
export const TRACKER_STATE = 'Logged [date]';
export const TRACKER_HEADS = ['Prompt', 'Engine', 'State'] as const;
export const PROMPTS = [
 '"Which money transfer apps can send money from the UK to India?"',
 '"Is [brand] authorised by the FCA?"',
 '"Which bank holds the money in a [brand] account?"',
 '"[Brand A] vs [Brand B] fees for international transfers"',
 '"Does [brand] work in [country]?"',
 '"Which payment platforms support payouts in the UK and EU?"',
 '"Who runs [brand] in [market], and is it registered there?"',
] as const;

/* 13 First 90 days */
export const LBL_NINETY = '13 · First 90 days';
export const H2_NINETY = 'Your first 90 days with Nakama Growth';
export const DAL_NINETY = "The first 90 days run in three phases. We learn your brand and set the baseline, push content and mentions hard where AI answers pull from, then show you where you now appear and where you don't yet.";
export const PHASES: readonly [string, string][] = [
 ['Days 1 to 30 · Audit', 'Understand your brand and market, map competitors, set a baseline on the prompts that matter, find the gaps and build the content plan.'],
 ['Days 31 to 60 · Push', 'Publish and fix content fast and often across your site, listings, YouTube, Reddit and press, the places ChatGPT, Perplexity, Gemini and Google AI Overviews pull answers from.'],
 ['Days 61 to 90 · Measure', "Rerun every prompt and report mentions, citations and recommendations, so you see where you're visible and where you're not yet."],
];
export const NINETY_LINE = 'Timing depends on how fast changes go live on your site. We do not promise that an engine will name you by day 90.';

/* 14 Fit */
export const LBL_FIT = '14 · Fit';
export const H2_FIT = 'Is Nakama Growth the right fintech GEO agency for you?';
export const DAL_FIT = 'Nakama Growth is a good fit for fintech brands that publish product facts they can keep current and want accuracy in AI answers measured on an agreed prompt set. It is a poor fit for anyone who wants guaranteed placement, regulated claims written for them or a legal opinion on their marketing.';
export const FIT_YES_H = 'A good fit';
export const FIT_NO_H = 'Not a fit';
export const FIT_YES = [
 'Licensed or partnered fintech brands with published product facts they can maintain',
 'Teams that want mentions, citations, recommendations and fact accuracy measured on an agreed prompt set',
 'Teams that serve customers in the US, UK, EU or India and want each market tracked on its own',
] as const;
export const FIT_NO = [
 'Anyone who wants guaranteed ChatGPT mentions, sign-ups or applications',
 'Requests to publish any of the regulated claims listed in section 06',
 'Lead generation or loan lead resale',
 'Products that are not licensed or partnered where they operate and want to look as if they are',
 'Anyone who wants a legal, regulatory or compliance opinion',
 'Paid ad buying or app builds',
] as const;

/* 15 FAQ. FAQPage JSON-LD is generated from these exact strings. */
export const LBL_FAQ = '15 · FAQ';
export const H2_FAQ = 'FAQ about hiring a fintech GEO agency';
export const FAQ: {q: string; a: string; href?: string; linkLabel?: string}[] = [
 {
  q: 'How much does a fintech GEO agency engagement cost?',
  a: 'Pricing depends on how many brands, products and markets are in scope, which engines we cover and how much source and listing work you need. We do not publish a flat fee on this page. Book a call for a quote, or read our GEO and AEO pricing guide for how we price this work.',
  href: '/journal/geo-aeo-pricing',
  linkLabel: 'our GEO and AEO pricing guide',
 },
 {
  q: 'How long before we see movement in AI answers?',
  a: 'Engagements start with an audit and a 90 day plan. First we learn your brand, map competitors and set a baseline on the prompts that matter. Then we push content and mentions where AI answers pull from. We then rerun every prompt and report mentions, citations and recommendations. We do not promise a date when an engine will name you.',
 },
 {
  q: 'Can you guarantee ChatGPT will recommend our fintech brand?',
  a: 'No. No agency can guarantee that ChatGPT or any other AI answer will name or recommend a fintech brand, and we do not promise sign-ups, applications or revenue. We measure mentions, citations, recommendations and fact accuracy separately, and we work on the sources those answers already draw on.',
 },
 {
  q: 'Which markets do you work in?',
  a: 'Nakama Growth can work with fintech brands that serve customers in the US, UK, EU and India. Advertising, licensing and financial promotion rules differ by market, and sometimes by product, so you and your own advisers decide which rules apply to each page. We run prompts and report results separately for each market.',
 },
 {
  q: 'How is this different from a fintech SEO agency?',
  a: 'A fintech SEO agency works on rankings and clicks for your product and content pages. GEO works on whether AI answers name your brand and describe your fees, licences and markets correctly. Some people call this AI SEO for fintech. We can work alongside your SEO partner on the same customer and buyer questions.',
 },
 {
  q: 'Do you work with crypto and insurtech brands?',
  a: 'Yes. Nakama Growth can work with crypto and insurtech brands as fintech categories. For both, we work on entity facts: which company runs the product, where it operates and which licence or registration applies, as your own pages and public registers state them. We do not write product performance or policy claims for either.',
 },
 {
  q: 'Do you approve our financial promotions or regulatory claims?',
  a: 'No. Nakama Growth is a marketing agency, so we cannot approve financial promotions or confirm that a claim meets a rule in any market. Your firm stays responsible for its own regulated communications, and for deciding which rules apply to each page. Nakama Growth gives marketing advice, not legal, regulatory or financial advice.',
 },
 {
  q: 'Do you need access to our customer data or product systems?',
  a: 'Usually not. We work mainly from public sources, such as your website, help pages, app store listings and public registers, along with documents you choose to share, such as fee schedules and terms. We only ask for the access a task needs, and you decide what to share.',
 },
];

/* 16 Logo row + final band + related */
export const PROOF_LABEL = 'Brands we have grown in AI search';
/** Same marks, files, order and alt treatment as live real estate. */
export const PROOF_LOGOS = [
 {name: 'Synup', src: '/clients/white/synup.svg', w: 557, h: 151, word: true},
 {name: 'Inventive AI', src: '/clients/white/inventive.png', w: 158, h: 157, word: false},
 {name: 'HubEngage', src: '/clients/white/hubengage.png', w: 160, h: 160, word: false},
 {name: 'StarAgile', src: '/clients/white/staragile.png', w: 250, h: 150, word: false},
 {name: 'BacklinkOS', src: '/clients/white/backlinkos.png', w: 84, h: 79, word: false},
] as const;
export const LBL_FIN = '16 · Next step';
export const H2_FIN = 'See how AI answers describe your fintech brand';
export const FIN_LEAD = 'Book a call and we will walk through the questions people ask AI about your brand, the engines and markets they use and the fee, licence and product facts behind the answers.';
export const RELATED = [
 {label: 'GEO services', href: 'https://www.nakama.in/services/geo'},
 {label: 'AEO services', href: '/services/aeo'},
 {label: 'AI visibility audit', href: '/services/ai-visibility-audit'},
 {label: 'GEO and AEO pricing guide', href: '/journal/geo-aeo-pricing'},
] as const;
