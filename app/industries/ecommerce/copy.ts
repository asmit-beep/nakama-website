/**
 * /industries/ecommerce · Hibiku LOCKED v1.1 strings.
 * Render these exactly. US spelling. Nakama Growth. No em dashes.
 * Diagram labels are the V1.2 visual chrome, not new claims.
 *
 * Yash GO is preview-only. PREVIEW true keeps this route noindex.
 * Production ship (index, sitemap, llms, hub card, nav, footer child, redirects)
 * stays HOLD until a later, separate GO. Do not flip PREVIEW in a preview commit.
 */
export const PREVIEW = true;

export const SLUG = '/industries/ecommerce';
export const TITLE = 'Ecommerce GEO Agency | AI Visibility for Ecommerce Brands | Nakama Growth';
export const META = 'Ecommerce GEO agency helping DTC, Shopify and online store brands get named, cited and recommended in AI shopping answers. Nakama Growth.';

export const EYEBROW = 'Ecommerce';
export const H1 = 'GEO Agency for Ecommerce Brands';
export const LEAD = 'Nakama Growth helps ecommerce brands, including DTC, Shopify and online store brands, get named when shoppers ask ChatGPT, Perplexity and Google AI Overviews what to buy. We work on the product data, policies and proof those tools read, and we measure mentions, citations, recommendations and product-fact accuracy separately.';

export const CTA_PRIMARY = 'Book a call';
export const CTA_PRIMARY_HREF = '/pricing#quote';
export const CTA_SECONDARY = 'AI visibility audit';
export const CTA_SECONDARY_HREF = '/services/ai-visibility-audit';

export const HERO_PROMPT = 'Best running shoes for flat feet';
export const NAMED = 'Your brand';
export const CHIPS = ['Review', 'Comparison', 'Publisher'] as const;

export const PROOF_LABEL = 'Brands we have grown in AI search';
export const PROOF_ACROSS = 'Across categories';
/** White marks from public/clients/white. Synup is a wordmark; the others are a symbol plus a visible name. */
export const PROOF_LOGOS = [
 {name: 'Synup', src: '/clients/white/synup.svg', w: 557, h: 151, word: true},
 {name: 'Inventive AI', src: '/clients/white/inventive.png', w: 158, h: 157, word: false},
 {name: 'HubEngage', src: '/clients/white/hubengage.png', w: 160, h: 160, word: false},
 {name: 'StarAgile', src: '/clients/white/staragile.png', w: 250, h: 150, word: false},
 {name: 'BacklinkOS', src: '/clients/white/backlinkos.png', w: 84, h: 79, word: false},
] as const;

export const H2_DEF = 'What is GEO for ecommerce?';
export const DAL_DEF = 'GEO for ecommerce is the work of making a store and its products easy for AI answer engines to name, cite and recommend on shopper prompts. It covers catalog and feed accuracy, policy pages, comparison-ready content, off site proof and prompt checks across ChatGPT, Perplexity and Google AI Overviews, without promising sales or traffic.';
export const DEF_ENTITY = 'An ecommerce GEO agency does this work for online store brands, from the first audit to monthly prompt tracking. A geo agency for ecommerce runs the same program: prompt mapping, catalog and proof work, and measured AI mentions.';
export const H3_DIFF = 'How is ecommerce GEO different from ecommerce SEO?';
export const DAL_DIFF = 'Ecommerce SEO focuses on rankings and clicks from search results. Ecommerce GEO and answer engine optimization for ecommerce focus on whether AI shopping answers name, cite or recommend your products on the same buyer questions. Rankings still matter; this page is about what those answers say about your brand and catalog.';

export const DEF_FLOW = [
 {n: '01', title: 'Store and catalog', meta: 'site · feed · policies', named: false},
 {n: '02', title: 'Third-party proof', meta: 'review · Reddit · YouTube', named: false},
 {n: '03', title: 'AI engines', meta: 'ChatGPT · Perplexity · Google AI Overviews', named: false},
 {n: '04', title: 'Shopper answer', meta: 'named', named: true},
] as const;

export const H2_WHY = 'Why AI answers matter for ecommerce';
export const DAL_WHY = 'AI answers now sit between shoppers and your store. When someone asks which product to buy, the engine names a few options. If your price, stock or policy data is missing or mismatched across your site and feeds, it can describe you wrongly or leave you out. AI visibility for ecommerce starts by finding those gaps and fixing the sources.';
export const WHY_SHORT = 'Shopping answers turn on which product to name, at what price, from whom, and with what proof. That raises the bar for a catalog that stays accurate.';

/** Pain-card titles stay non-headings. Illustration chrome from the V1.2 visual. */
export const PAINS: readonly [string, string, string][] = [
 ['Catalog and variants', 'Wrong product', 'Inconsistent titles, variants or attributes can lead an answer to recommend a product you do not sell in that size, color or spec.'],
 ['Prices and feeds', 'Stale price', 'When the site, product feed and Merchant Center disagree, an answer can quote a price or stock status that is out of date.'],
 ['Policies', 'Missing policy', 'Shipping, returns and warranty terms that are hard to find can be left out of the answer, or filled in from someone else\'s page.'],
 ['Comparison-ready pages', 'Left off the shortlist', 'Pages that never state who a product is for, or how it compares, give the engine little to work with when it builds a shortlist.'],
 ['Third-party proof', 'Proof from elsewhere', 'Reviews, Reddit threads, YouTube reviews and review publishers often shape which brands get named. Your site alone is rarely enough.'],
];

export const SOURCE_CAPTION = 'Source types AI answers pull for shopping prompts';
export const SOURCE_HEADS = ['Source type', 'What engines often use it for', 'What Nakama Growth does'] as const;
export const SOURCES: readonly [string, string, string][] = [
 ['Official product and policy pages', 'Facts, variants, shipping and returns', 'Keep catalog and policy pages accurate and consistent'],
 ['Product feeds', 'Shopping answers that read structured catalog data', 'Align on-site data with Google Merchant Center and Shopify Catalog'],
 ['Review publishers', 'Shortlists and product picks', 'Earn mentions where your category is already cited'],
 ['Reddit and YouTube', 'Lived experience and product explainers', 'Disclosure-safe community and video answers when relevant'],
 ['Comparison and buying guides', 'How to choose and product versus product', 'Build comparison-ready pages on your own site'],
];

export const H2_WHO = 'Who we work with in ecommerce';
export const DAL_WHO = 'Nakama Growth can work with ecommerce brands whose shoppers research in AI tools before they buy. That includes DTC and brand.com stores, Shopify store brands, and online stores with their own catalogs. Prompt sets follow the shopper questions for that brand, not a fixed list per segment.';

export const SEGMENTS: readonly [string, string, string][] = [
 ['DTC and brand.com stores', 'Products people compare before they buy', '“Which trail running shoe brands are worth buying this year?”'],
 ['Online stores with deep catalogs', 'Category, comparison and policy answers', '“[Product A] vs [Product B] for a small apartment”'],
];

export const H3_SHOP = 'GEO for Shopify and DTC brands';
export const DAL_SHOP = 'Shopify and DTC brands need AI answers that name the right products, at the right price, with policies that match the live shop. A geo agency for Shopify brands maps those shopper prompts, aligns on-site data with Shopify Catalog, and tracks whether answers name your products. Product claims go through your team first.';
export const SHOP_BRIDGE = 'If you are looking for a shopify SEO agency, Nakama Growth covers the AI answer side: product and category prompts, catalog consistency and the review sources engines cite.';
export const SHOP_PROMPT = 'Example prompt: “Best everyday backpacks under $100”';
export const SURFACE_CAPTION = 'One product, four surfaces';
export const SURFACES = [
 {title: 'Storefront', sub: 'Product pages, policies, structured data', on: true},
 {title: 'Product feed', sub: 'Titles, variants, price, availability', on: false},
 {title: 'Merchant Center', sub: 'Feed status and product details', on: false},
 {title: 'Shopify Catalog', sub: 'Catalog fields as published', on: false},
] as const;

export const H2_FRAME = 'The Ecommerce AI Visibility Checklist';
export const DAL_FRAME = 'The Ecommerce AI Visibility Checklist is the six step framework Nakama Growth uses on ecommerce accounts. It is our house label, not an industry score or ranking index. It moves from entity and catalog to proof and measurement. Method detail for each step lives on our GEO and AEO pages.';
export const STEPS: readonly [string, string, string][] = [
 ['01', 'Entity', 'Keep brand and product names consistent on your site, profiles and listings.'],
 ['02', 'Catalog and feeds', 'Match price, availability, variants and IDs across your site, your feed, Google Merchant Center and Shopify Catalog.'],
 ['03', 'Policies', 'Publish shipping, returns and support pages that match what the store actually does.'],
 ['04', 'Proof', 'Earn mentions on review publishers, YouTube and forums engines already cite for your category.'],
 ['05', 'Comparison-ready pages', 'Write buying guides and product comparisons that open with a clear answer.'],
 ['06', 'Measure', 'Track mentions, citations, recommendations and product-fact accuracy as separate numbers on repeat prompt runs.'],
];
export const FRAME_NOTE = 'A cited page can still leave the recommendation to someone else, so a citation is not counted as a recommendation. Product-fact accuracy covers whether the answer got price, stock, variants or policies right.';
export const MEASURES = ['Mentions', 'Citations', 'Recommendations', 'Product-fact accuracy'] as const;

export const H2_SVC = 'Ecommerce answer engine optimization and GEO services';
export const DAL_SVC = 'Answer engine optimization sits in the same program as GEO, not as a separate add on. Nakama Growth runs GEO and ecommerce AEO services so shopping answers can name, cite and recommend the right products. Method detail stays on the GEO, AEO and audit pages.';
export const SERVICES: readonly [string, string, string][] = [
 ['GEO', 'Get named in AI shopping answers through the sources engines trust', '/services/geo'],
 ['AEO', 'Make your pages the clearest answer to real shopper questions', '/services/aeo'],
 ['AI visibility audit', 'See how AI answers describe your store and products', '/services/ai-visibility-audit'],
];
export const SVC_NOTE = 'Generative engine optimization for ecommerce is part of this same program, not a separate service. An AI visibility audit covers a baseline, sampled answers, prioritized gaps, a roadmap and a review. Details live on the audit page.';

export const H2_PROOF = 'Accurate catalog, honest proof';
export const DAL_PROOF = 'Nakama Growth treats catalog accuracy and proof as a process, not a badge. We do not certify your store or guarantee platform eligibility. We keep product facts aligned across your site and feeds, ask for real reviews only, and send product claims to your team before they publish. Your team keeps final sign off.';
export const PROOF_SHORT = 'Platform eligibility for Google Merchant Center, Shopify Catalog or ChatGPT is set by those platforms.';
export const PROOF_STEPS: readonly {n: string; title: string; body: string}[] = [
 {n: '1', title: 'Catalog match', body: 'Product data on your site, feed, Google Merchant Center and Shopify Catalog should agree on price, availability, variants and IDs.'},
 {n: '2', title: 'Policy clarity', body: 'Shipping, returns and refund pages should be public and should match what you actually do.'},
 {n: '3', title: 'Real reviews', body: 'We work with genuine reviews. We do not create fake or hidden paid reviews.'},
 {n: '4', title: 'Substantiated claims', body: 'Product claims need a source you can stand behind before they go live.'},
 {n: '5', title: 'Entity consistency', body: 'Brand and product names should match across your site, profiles and listings.'},
 {n: '6', title: 'Your approval', body: 'Your team approves catalog and claim changes before they publish. We do not silently overwrite live product or policy pages.'},
];

export const H2_PROMPTS = 'Ecommerce prompts we track';
export const DAL_PROMPTS = 'We track the questions your shoppers actually type into AI tools. Each prompt is run repeatedly across engines, and results are logged with dates. The examples below show the kind of shopper prompts we start from. They are illustrations, not results or promises of placement.';
export const PROMPTS = [
 '“Best running shoes for flat feet”',
 '“Best fragrance free skincare brands for sensitive skin”',
 '“Is [brand] robot vacuum worth it”',
 '“[Product A] vs [Product B] for a small apartment”',
 '“Where to buy [product] with free returns”',
 '“How to choose a cabin bag that fits most airlines”',
] as const;
export const STATE_LABEL = 'Prompt → engine → state';
export const PROMPT_STATES = [
 {engine: 'ChatGPT', state: 'Mentioned', hot: false},
 {engine: 'Perplexity', state: 'Cited', hot: false},
 {engine: 'Google AI Overviews', state: 'Recommended', hot: true},
] as const;

export const H2_NINETY = 'Your first 90 days with Nakama Growth';
export const DAL_NINETY = 'The first 90 days run in three phases. Days 1 to 30 set the baseline prompts and audit. Days 31 to 60 fix catalog, policy and comparison gaps and start proof work, with your approval before anything publishes. Days 61 to 90 rerun those prompts and report mentions, citations, recommendations and product-fact accuracy separately.';
export const PHASES: readonly [string, string, string][] = [
 ['DAYS 1 TO 30', 'Audit', 'Prompt set, engine baseline, sampled answers, source map, prioritized gaps and roadmap'],
 ['DAYS 31 TO 60', 'Implement', 'Catalog and feed alignment, policy pages, comparison-ready content, first proof placements, your approval'],
 ['DAYS 61 TO 90', 'Measure', 'Repeat runs; report mentions / citations / recommendations / product-fact accuracy separately'],
];
export const NINETY_NOTE = 'No promise that an engine will name you by day 90.';

export const H2_FIT = 'Is Nakama Growth the right ecommerce GEO agency for you?';
export const FIT_YES_H = 'A good fit';
export const FIT_NO_H = 'Not a fit';
export const FIT_YES = [
 'DTC, Shopify and online store brands whose shoppers ask AI tools what to buy',
 'Teams willing to keep product facts, prices and claims accurate across the site and feeds',
 'Teams that already invest in content, reviews or PR and want mentions, citations and recommendations measured separately',
 'Brands that also sell on marketplaces when the job is AI visibility for the brand and its products, not marketplace rank',
 'Enterprise retail and omnichannel teams when the brief is AI product recommendations, not a replatform',
] as const;
export const FIT_NOTE = 'AI shopping answers can name a marketplace instead of the brand\'s own store; that is still a brand-visibility gap, not an Amazon or marketplace ranking service.';
export const FIT_NO = [
 'Buyers who want a guaranteed ChatGPT mention or guaranteed sales from AI answers',
 'Amazon or marketplace rank, listing optimization, or PPC-only briefs',
 'Theme rebuilds, feed-only work, or shopping ads retainers with no answer engine layer',
 'Classic ecommerce SEO encyclopedia retainers that skip GEO and AEO',
 'Brands that will not keep product data and claims current',
 'Anyone expecting a ranked agency shortlist (that belongs on a journal page, when it exists)',
] as const;

export const H2_FAQ = 'FAQ about hiring an ecommerce GEO agency';
export const PRICING_HREF = '/journal/geo-aeo-pricing';
export const FAQ: readonly {q: string; a: string; href?: string; linkLabel?: string}[] = [
 {
  q: 'How much does an ecommerce GEO agency engagement cost?',
  a: 'Pricing depends on prompt scope, engines covered and how much catalog and claim work your team needs. Book a call for a quote on your category; we do not publish a single flat fee on this page. For how we think about GEO and AEO pricing, see our GEO and AEO pricing guide.',
  href: PRICING_HREF,
  linkLabel: 'our GEO and AEO pricing guide',
 },
 {
  q: 'How long before we see movement in AI answers?',
  a: 'Most teams start with an audit and a 90 day plan. Early work is baseline prompts, catalog and policy fixes and your approval on claims; mention, citation and recommendation movement usually follows once those foundations are live. We do not promise a date when an engine will name you.',
 },
 {
  q: 'Who approves catalog and product claims?',
  a: 'Your team keeps final sign off. We flag mismatches across your site and feeds and wait for your approval before anything publishes. We do not silently overwrite live pages, and analytics you already run stay yours.',
 },
 {
  q: 'Can you guarantee ChatGPT will mention us?',
  a: 'No. No agency can guarantee mentions in ChatGPT or any other AI answer, and we do not guarantee sales from AI answers. We measure mentions, citations, recommendations and product-fact accuracy separately and work the sources engines already trust.',
 },
 {
  q: 'How is GEO different from an ecommerce SEO agency?',
  a: 'An ecommerce SEO agency focuses on rankings and clicks. GEO and AEO focus on whether AI answers name, cite or recommend you on the same shopper questions. If you compared ecommerce SEO agencies or ecommerce SEO services, this page is about what AI answers say about your store. We can work alongside an existing SEO partner.',
 },
 {
  q: 'Which AI engines do you cover?',
  a: 'Typical coverage includes ChatGPT, Perplexity and Google AI Overviews, with Gemini or Claude added when your buyers use them. Scope is set per engagement, not as a fixed public list.',
 },
 {
  q: 'Which markets do you work in?',
  a: 'Nakama Growth can work with ecommerce brands that publish for buyers in the US, UK and EU, the Middle East, APAC, and India. We match product claim and disclosure rules to the markets you publish in.',
 },
 {
  q: 'Is this a fit for Shopify and DTC brands, and for brands that also sell on marketplaces?',
  a: 'Yes for Shopify and DTC brands when shopper prompts are clear and the catalog will stay accurate. Marketplace sellers can be a fit when the work is AI visibility for the brand and products, not Amazon rank, listing SEO or PPC. If you came looking for a shopify SEO agency, this page is about whether AI answers name your products.',
 },
 {
  q: 'Who are the best GEO agencies for ecommerce brands?',
  a: 'There is no single public ranking every store brand should trust. Look for an ecommerce GEO agency that maps your shopper prompts, keeps catalog and claims accurate, and measures mentions, citations and recommendations separately. Nakama Growth does that work for ecommerce brands that publish across the US, UK and EU, the Middle East, APAC, and India.',
 },
];

export const H2_FIN = 'See how AI answers describe your ecommerce brand';
export const FIN_LEAD = 'Book a call and we will walk through your shopper prompts, engines and catalog needs.';
export const RELATED_LIVE = [
 {href: '/services/geo', label: 'GEO services'},
 {href: '/services/aeo', label: 'AEO services'},
 {href: '/services/ai-visibility-audit', label: 'AI visibility audit'},
 {href: PRICING_HREF, label: 'GEO and AEO pricing guide'},
] as const;
