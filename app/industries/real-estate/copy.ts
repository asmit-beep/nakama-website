/**
 * /industries/real-estate · Hibiku DRAFT V2.1 strings.
 * Render these exactly. US spelling. Nakama Growth. No em dashes.
 *
 * Live. PREVIEW false keeps this route index, follow.
 * The hub card, sitemap and llms.txt list this page.
 *
 * Sample badges from section 01b are not rendered. Live healthcare and
 * ecommerce do not show them, and this page must not restore them.
 */
export const PREVIEW = false;

export const SLUG = '/industries/real-estate';
export const TITLE = 'Real Estate AEO Agency for Brokerages | Nakama Growth';
export const META = 'Real estate AEO agency helping residential brokerages and agent teams get named, cited and recommended in AI answers from ChatGPT, Perplexity and Google.';
export const SERVICE_NAME = 'Real Estate AEO';
export const BREADCRUMB = 'Real estate';
export const AUDIENCE = 'Residential real estate brokerages and agent teams';

export const EYEBROW = 'Real estate';
export const H1 = 'AEO Agency for Real Estate Brokerages';
export const LEAD = 'Nakama Growth helps residential brokerages and agent teams get named, cited and recommended when home buyers and sellers check them in ChatGPT, Perplexity or Google AI Overviews before they call. We compare those answers with your roster, license, listing and profile facts, help you fix the sources behind any mismatch with your approval, and track mentions, citations and recommendations separately.';

export const CTA_PRIMARY = 'Book a call';
export const CTA_PRIMARY_HREF = '/pricing#quote';
export const CTA_SECONDARY = 'AI visibility audit';
export const CTA_SECONDARY_HREF = '/services/ai-visibility-audit';

export const HERO_PROMPT_LABEL = 'Buyer or seller prompt';
export const HERO_PROMPT = 'Is [brokerage] a good choice to sell a condo in [neighborhood]?';
export const HERO_ANSWER_LABEL = 'AI answer';
export const HERO_ANSWER_STATE = 'Named';
export const HERO_NAMED = 'Your brokerage';
export const CHIPS = ['Office page', 'Portal profile', 'License lookup'] as const;

export const LBL_DEF = '03 · Definition';
export const H2_DEF = 'What is AEO for real estate brokerages?';
export const DAL_DEF = 'AEO for real estate brokerages is the work of making a brokerage, its offices, its agent teams and its agents easy for AI answers to name and describe correctly. It covers entity mapping, public license sources, service areas, dated listing sources, portal profile ownership and repeat prompt runs. It does not cover IDX builds, website rebuilds or lead buying.';
export const DEF_ENTITY = 'A real estate AEO agency does this work for brokerages and agent teams, from the first audit to monthly prompt tracking. Some people call it AI SEO for real estate. You may also hear it called GEO. GEO here means generative engine optimization, not geo farming a neighborhood.';
export const H3_DIFF = 'How is real estate AEO different from real estate SEO?';
export const DAL_DIFF = 'Real estate SEO works on rankings and clicks in search results. AEO works on whether AI answers name your brokerage or team, tie each agent to the right office and describe your services correctly on the same buyer and seller questions. Rankings still matter. This page is about what those answers say.';

export const LBL_WHY = '04 · Why it matters';
export const H2_WHY = 'Why do AI answers matter for real estate brokerages?';
export const DAL_WHY = 'Buyers still most often find an agent through people they know, then many check that agent and brokerage in AI tools before they call. Real estate AI visibility starts there. If an answer ties an agent to a brokerage they left, quotes a sold listing as active or leaves your office off a shortlist, the first impression is wrong.';
export const EVIDENCE_1 = 'In a 1000WATT survey of 1,500 recent US buyers and sellers, published January 2026, 44% used an AI chatbot during the deal, and 61% of those used it to find or assess agents.';
export const EVIDENCE_2 = 'In NAR\'s 2026 Profile of Home Buyers and Sellers, as reported by Chicago Agent and WAV Group (Nov 5, 2026), 40% of buyers found their agent through a friend, neighbor or relative, and 1% found their agent through AI search. WAV Group notes that NAR measured how buyers found their agent, not how many used AI for research. So NAR\'s 1% does not capture a buyer who gets a referral and then checks that agent in an AI tool.';
export const PORTAL_LINE = 'Zillow (October 2025), Redfin (February 2026) and Realtor.com (March 2026) each launched an app inside ChatGPT. Zillow and Realtor.com say agent contact and tours go back to their own sites. This work is about what AI answers say about your brokerage and your agents.';

export const H2_SURFACES = 'What shapes the answer about your brokerage';
export const SURFACES: readonly [string, string][] = [
 ['Agent and brokerage identity', 'Answers can draw on agent bios, office pages, portal profiles and public license lookups. When those disagree, an agent can show up at a brokerage they left, or a team can read as its own brokerage.'],
 ['Service areas', 'Office pages, team pages and Google Business Profiles each say where you work. Mismatched or overstated areas can put you in the wrong answers, or in none.'],
 ['Listing status', 'Listing pages go stale fast. An answer can quote a sold or withdrawn home as still for sale and attach your agent\'s name to it.'],
 ['Portal profiles and reviews', 'Zillow and Redfin say their for-sale listings come from IDX feeds and local listing databases, and their agent reviews are moderated or survey-based. Each portal sets its own profile rules, and profiles can drift out of date when agents move.'],
 ['Local shortlists', 'Questions like "best brokerage in [city]" can pull from local news, Reddit threads, YouTube and directories. If those sources never mention you, the answer may not either.'],
 ['Buyer and seller explainers', 'Questions about listing agreements, buyer agreements and fees can be answered from your own pages. Pages written before the NAR practice changes of August 2024 can still get quoted.'],
];

export const H3_PROFILES = 'One agent, five profiles';
export const PROFILES: readonly [string, string][] = [
 ['Zillow', 'Affiliation and service facts'],
 ['Realtor.com', 'Affiliation and service facts'],
 ['Redfin', 'Affiliation and service facts'],
 ['Homes.com', 'Affiliation and service facts'],
 ['Google Business Profile', 'Office and agent profiles'],
];

export const LBL_WHO = '05 · Who we work with';
export const H2_WHO = 'Who we work with in real estate';
export const DAL_WHO = 'Nakama Growth can work with residential brokerages and the agent teams inside them, where buyers and sellers check them in AI tools before they call. This is for broker-owners, team leads and marketing directors. The broker of record signs off on agent, listing and brokerage claims.';
export const WHO_HEADS = ['Segment', 'One line', 'Example check prompt'] as const;
export const SEGMENTS: readonly [string, string, string][] = [
 ['Independent brokerages', 'One brand, one roster, facts that must match everywhere', '"Is [brokerage] good for selling a home in [market]?"'],
 ['Franchise offices', 'Local office facts that should not blur into the national brand', '"Which [franchise] office covers [suburb]?"'],
 ['Multi-office brokerages', 'Offices, teams and agents that each need the right affiliation', '"Is [agent] still with [brokerage]?"'],
 ['Agent teams', 'A team name that answers should tie to its brokerage', '"Who leads [team name] and which brokerage are they with?"'],
];
export const WHO_OUT = 'Solo agent local SEO, proptech software, commercial real estate, developers, property managers and mortgage lenders are outside this page.';

export const H3_BROKERAGES = 'Residential brokerages: independent, franchise and multi-office';
export const DAL_BROKERAGES = 'A brokerage with several offices needs AI answers to keep the structure straight: which agents and teams sit in which office, what each office covers and who the broker of record is. Google treats real estate agents as individual practitioners, so an agent can have a profile separate from the brokerage office\'s. We map each one to the right office.';
export const BROKERAGE_FIT = 'Brokerages that run their own listing and search sites are in scope for the brokerage, office and agent facts on those sites, not for IDX or website builds.';

export const H3_TEAMS = 'Agent teams inside a brokerage';
export const DAL_TEAMS = 'Agent teams need AI answers to name the team, list the right members and tie the team to its brokerage. Nakama Growth traces each agent to the team, office and brokerage, keeps the team name consistent everywhere, and routes team claims through the broker of record. Teams can work with us directly or through their brokerage.';

export const LBL_MAP = '06 · Framework';
export const H2_MAP = 'The Brokerage AI Visibility Map';
export const DAL_MAP = 'The Brokerage AI Visibility Map is the six part framework Nakama Growth uses for brokerages and teams. It is our house label, not an industry score or index. It traces every agent to a team, office and brokerage, helps you check license, service area, profile and listing facts at the source, then compares what AI answers say against those facts.';

export const TREE = ['Your brokerage', 'Office', 'Team', 'Agent'] as const;

export const STEPS: readonly [string, string, string][] = [
 ['01', 'Entity', 'Trace each agent to team, office and brokerage, and use one name for each across your site, portals and profiles.'],
 ['02', 'Roster and licenses', 'Help you check agent names and brokerage affiliation against your market\'s public license lookup where one exists, such as TREC in Texas or the DRE in California, and flag agents who have left.'],
 ['03', 'Service areas', 'Record the areas each office and team actually serves, and match them on your pages and Google Business Profiles.'],
 ['04', 'Listing sources', 'Work only from listing pages you are authorized to publish, each with a status date. NAR MLS policy, an industry rule for MLS participants and not a law, says IDX displays should identify the listing firm, so we help you check that your firm is named where your listings appear. We do not need or request access to your MLS.'],
 ['05', 'Profiles and reviews', 'Record who owns each portal and Google profile, then help that owner fix affiliation and service facts. Real reviews only.'],
 ['06', 'Measure', 'Run the same prompts on repeat and log mentions, citations, recommendations and whether each answer\'s facts match your source facts, as separate numbers. Leads are read separately, from your own analytics and lead records.'],
];

export const MID_LEAD = 'Want to see what AI answers say about your brokerage or team?';

export const LBL_SVC = '07 · Services';
export const H2_SVC = 'Real estate answer engine optimization and GEO services';
export const DAL_SVC = 'Answer engine optimization for real estate sits in the same program as GEO, not as an add on. Nakama Growth runs both so AI answers can name your brokerage or team and describe your agents correctly. Method detail stays on our service pages, and the audit shows where you stand today.';
export const SERVICES: readonly [string, string, string][] = [
 ['GEO', 'Work on the third-party sources that shape AI answers about your brokerage', '/services/geo'],
 ['AEO', 'Make your pages the clearest answer to real buyer and seller questions', '/services/aeo'],
 ['AI visibility audit', 'See how AI answers describe your brokerage and agents', '/services/ai-visibility-audit'],
];

export const LBL_TRUST = '08 · Compliance as process';
export const H2_TRUST = 'Accurate rosters, compliant claims';
export const DAL_TRUST = 'Nakama Growth sends every agent, team, listing and brokerage claim to your broker of record or compliance lead before it publishes. We work from public facts and keep private buyer and seller data out of prompt logs and reports. Your market\'s advertising, licensing and fair housing rules apply. This is process, not legal advice.';
export const TRUST_SCOPE = 'The rules cited in this section are US rules. In other markets, your market\'s own advertising, licensing and fair housing rules apply.';
export const ECFR_HREF = 'https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-B/section-100.75';
export const ECFR_LABEL = '24 CFR 100.75';
export const FAIR_BEFORE = 'We do not write content that signals a preference or limitation based on a protected class, steer buyers toward or away from neighborhoods, or describe neighborhoods by who lives there. In the US, the Fair Housing Act and HUD\'s rule at ';
export const FAIR_AFTER = ' bar housing ads and statements that indicate a preference based on a protected class. In the US, 24 CFR 100.70 covers steering.';

export const TRUST: readonly {title: string; body: string; fair?: boolean}[] = [
 {title: 'Roster match', body: 'Your site roster, team pages, portal profiles and Google Business Profiles should agree on who works where.'},
 {title: 'License facts', body: 'License and brokerage name disclosures follow your market\'s rules. For example, Texas requires the broker\'s name in every ad, including online, and California requires agents to show their license number and responsible broker on first-contact marketing.'},
 {title: 'Listing status', body: 'Listing facts come from sources you are authorized to publish, carry a status date and come down when a home sells or is withdrawn.'},
 {title: 'Real reviews', body: 'We work with genuine client reviews only. We do not write, buy or edit reviews.'},
 {title: 'Fair housing language', body: `${FAIR_BEFORE}${ECFR_LABEL}${FAIR_AFTER}`, fair: true},
 {title: 'Your approval', body: 'Your broker of record or compliance lead approves changes before they publish. We do not silently edit live pages or profiles.'},
];

export const LBL_PROMPTS = '09 · Prompts';
export const H2_PROMPTS = 'Real estate prompts we track';
export const DAL_PROMPTS = 'For each brokerage or team, we build a prompt set from the questions buyers and sellers ask AI tools when they check out a brokerage, team or agent before they call. Each prompt runs repeatedly across engines, and results are logged with dates. The examples below are illustrations, not results or promises of placement.';
export const PROMPTS = [
 '"Is [brokerage] a good fit for first time buyers in [city]?"',
 '"Is [brokerage] a good choice to sell a condo in [neighborhood]?"',
 '"Is [agent] still with [brokerage]?"',
 '"[Brokerage A] vs [Brokerage B] for selling a home in [market]"',
 '"Which brokerage covers [suburb] and [suburb]?"',
 '"What should I ask before signing a listing agreement?"',
] as const;

export const STATE_LABEL = 'Prompt → engine → state';
export const PROMPT_STATES = [
 {engine: 'ChatGPT', state: 'Mentioned', hot: false},
 {engine: 'Perplexity', state: 'Cited', hot: false},
 {engine: 'Google AI Overviews', state: 'Recommended', hot: true},
] as const;

export const LBL_NINETY = '10 · First 90 days';
export const H2_NINETY = 'Your first 90 days with Nakama Growth';
export const DAL_NINETY = 'The first 90 days run in three phases. Days 1 to 30 build the prompt set, the baseline and the entity map, and help you check rosters, licenses and service areas. Days 31 to 60 fix profile, listing source and page facts with your broker\'s approval. Days 61 to 90 rerun the prompts and report each measure separately.';
export const PHASES: readonly [string, string][] = [
 ['Days 1 to 30 · Audit', 'Prompt set, engine baseline, entity map, help with roster, license and service area checks, prioritized gaps'],
 ['Days 31 to 60 · Implement', 'Profile and listing source alignment, page fixes, team and office naming, your broker\'s approval'],
 ['Days 61 to 90 · Measure', 'Repeat runs; report mentions, citations, recommendations and fact accuracy separately'],
];
export const NINETY_LINE = 'We do not promise that an engine will name you by day 90.';

export const LBL_FIT = '11 · Fit';
export const H2_FIT = 'Is Nakama Growth the right real estate AEO agency for you?';
export const FIT_YES_H = 'A good fit';
export const FIT_NO_H = 'Not a fit';
export const FIT_YES = [
 'Residential brokerages and agent teams whose buyers and sellers check them in AI tools before they call',
 'Brokerages and teams willing to keep rosters, licenses, service areas and listing status current',
 'Brokerages and teams that already invest in content, reviews or PR and want mentions, citations and recommendations measured separately',
 'Brokerages that run their own listing and search sites, for the brokerage and agent facts on those sites',
] as const;
export const FIT_NO = [
 'Anyone who wants guaranteed leads, listings or a guaranteed ChatGPT mention',
 'Solo agent local SEO or personal map rankings',
 'Geo farming or mailer campaigns',
 'Zillow or other portal ad buying, or lead purchasing',
 'IDX builds, website-only rebuilds or city page sets',
 'Proptech software marketing (our GEO services cover that)',
 'Commercial real estate, developers and property managers',
] as const;

export const LBL_FAQ = '12 · FAQ';
export const H2_FAQ = 'FAQ about hiring a real estate AEO agency';
export const FAQ: {q: string; a: string; href?: string; linkLabel?: string}[] = [
 {
  q: 'How much does a real estate AEO agency engagement cost?',
  a: 'Pricing depends on how many offices, teams, agents and profiles are in scope, which engines we cover and how much roster and listing work you need. We do not publish a flat fee on this page. Book a call for a quote, or read our GEO and AEO pricing guide for how we price this work.',
  href: '/journal/geo-aeo-pricing',
  linkLabel: 'our GEO and AEO pricing guide',
 },
 {
  q: 'How long before we see movement in AI answers?',
  a: 'Engagements start with an audit and a 90 day plan. Early work is the entity map, help with your roster and license checks, and fixes your broker approves. We then rerun the same prompts to see whether mentions, citations and recommendations move. We do not promise a date when an engine will name you.',
 },
 {
  q: 'Who approves agent, listing and brokerage claims?',
  a: 'Your broker of record or compliance lead approves every claim before it publishes. We help you check agent names and brokerage affiliation in your market\'s license lookup where one exists, such as TREC in Texas or the DRE in California. We avoid steering, protected class preferences and demographic neighborhood descriptions (24 CFR 100.70 and 100.75 for the US) and, as Nakama Growth house policy, school quality claims. Other markets follow local law. Not legal advice.',
 },
 {
  q: 'Can you guarantee ChatGPT will recommend our brokerage?',
  a: 'No. No agency can guarantee that ChatGPT or any other AI answer will name or recommend a brokerage or team, and we do not guarantee leads, listings or closings. We measure mentions, citations, recommendations and fact accuracy separately, and we work on the sources those answers already draw on.',
 },
 {
  q: 'How is AEO different from a real estate SEO agency?',
  a: 'A real estate SEO agency works on rankings and clicks, often for listing and local pages. AEO works on whether AI answers name your brokerage and describe your agents correctly on the same buyer and seller questions. If you compared real estate SEO companies, this page covers the AI answer side. We can work alongside your SEO partner.',
 },
 {
  q: 'Which markets do you work in?',
  a: 'Nakama Growth can work with brokerages and agent teams that serve buyers and sellers in the US, UK and EU, the Middle East, APAC, and India. Licensing, advertising and fair housing rules differ by market, so your broker of record confirms which rules apply in your market and signs off before anything publishes.',
 },
 {
  q: 'Is this a fit for agent teams, solo agents and property platforms?',
  a: 'Yes for agent teams that work under a brokerage, when the team and the broker of record agree on who approves claims. Solo agents looking for personal local SEO are usually not a fit. Brokerages that run their own listing and search sites are a fit for the facts on those sites, not for IDX builds. Proptech software companies fit our GEO services instead.',
 },
 {
  q: 'Who are the best AEO agencies for real estate brokerages?',
  a: 'There is no single public ranking every brokerage should trust. Look for a real estate AEO agency that traces agents to the right team and brokerage, helps you check public license and listing sources, follows your market\'s rules and measures mentions, citations and recommendations separately. Nakama Growth offers that work to residential brokerages and agent teams.',
 },
 {
  q: 'Do you need access to our MLS?',
  a: 'No. We work from your own site and the public listing pages you are authorized to publish, each with a status date. We never request MLS logins or private MLS data. How your listings are displayed is set by your MLS and IDX agreements, which stay with you. Portal and Google profile changes are made by, or with, whoever owns the profile.',
 },
 {
  q: 'Do Zillow, Redfin and other portal profiles change what AI answers say about our agents?',
  a: 'Possibly, but there is no published evidence we can cite on which AI engines read which portal, so we do not claim that fixing a profile changes an answer. We help you keep affiliation and service facts current on the profiles your agents and brokerage manage, then rerun the same prompts to see whether answers change.',
 },
];

export const PROOF_LABEL = 'Brands we have grown in AI search';
/** Same marks as the live siblings. Synup is a wordmark, so its name is visually hidden. Every image alt is empty. */
export const PROOF_LOGOS = [
 {name: 'Synup', src: '/clients/white/synup.svg', w: 557, h: 151, word: true},
 {name: 'Inventive AI', src: '/clients/white/inventive.png', w: 158, h: 157, word: false},
 {name: 'HubEngage', src: '/clients/white/hubengage.png', w: 160, h: 160, word: false},
 {name: 'StarAgile', src: '/clients/white/staragile.png', w: 250, h: 150, word: false},
 {name: 'BacklinkOS', src: '/clients/white/backlinkos.png', w: 84, h: 79, word: false},
] as const;

export const LBL_FIN = '13 · Next step';
export const H2_FIN = 'See how AI answers describe your brokerage';
export const FIN_LEAD = 'Book a call and we will walk through the questions people ask AI about your brokerage or team, the engines they use and the roster and listing facts behind the answers.';

export const RELATED = [
 {label: 'GEO services', href: '/services/geo'},
 {label: 'AEO services', href: '/services/aeo'},
 {label: 'AI visibility audit', href: '/services/ai-visibility-audit'},
 {label: 'GEO and AEO pricing guide', href: '/journal/geo-aeo-pricing'},
 {label: 'GEO for healthcare brands', href: '/industries/healthcare'},
 {label: 'GEO for ecommerce brands', href: '/industries/ecommerce'},
 {label: 'See all industries', href: '/industries'},
] as const;
