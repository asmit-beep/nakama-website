import type {Article} from './articles';

/**
 * PUBLISH TIME for this article. ISO 8601 with +05:30.
 * It feeds the Article and WebPage datePublished and dateModified, og/article published and
 * modified times (via pageMeta), the RSS pubDate and lastBuildDate, and the sitemap lastmod (via `date`).
 * The visible "Updated" line is generated from MODIFIED_AT. The update-log line and the
 * "last checked" sentence under the intro steps are copy: change them by hand if this ships on a later day.
 *
 * PREVIEW is true: noindex,follow, and this note stays out of the sitemap, llms.txt,
 * llms-full.txt, RSS, the resources index and the author index (feedArticles, articlesBy
 * and the resources page all filter on noindex). Set PREVIEW to false only on a merge GO.
 */
export const CHATGPT_BUSINESS_HUB_PUBLISHED_AT = '2026-11-17T09:00:00+05:30';
const PUBLISHED_AT = CHATGPT_BUSINESS_HUB_PUBLISHED_AT;
const MODIFIED_AT = PUBLISHED_AT;
const PREVIEW = true;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOf = (iso: string) => iso.slice(0, 10);
const shortDate = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

const SLUG = 'chatgpt-business-hub';
const TITLE = 'Claim Your Business in ChatGPT: Business Hub Guide (2026)';
const H1 = 'How to Claim Your Business in ChatGPT: Business Hub Guide (2026)';
const DESCRIPTION = "Claim your business in ChatGPT Business Hub: who can claim, India status, each verification step, what insights show and what claiming won't do.";
const FRESHNESS = `Updated ${shortDate(MODIFIED_AT)}. Businesses in ChatGPT is in beta, so steps and eligibility may change.`;
const CANONICAL = `https://www.nakama.in/journal/${SLUG}`;
const HERO_ALT = "Nakama Growth journal cover: how to claim your business in ChatGPT, a 2026 Business Hub guide to who can claim, how to verify and what claiming will not do.";
const OG_ALT = "Nakama Growth journal cover: how to claim your business in ChatGPT, a Business Hub guide checked 17 Nov 2026.";
const CLAIM_STEPS_ALT = "Step cards of the 9 steps to claim a business in ChatGPT Business Hub, from signing in and finding your listing to verification, the Persona ID check, checking the badge and team access.";
const VERIFICATION_PATHS_ALT = "Flow chart of Business Hub verification: one of four methods (business phone, business email, website DNS TXT or Shopify), then OpenAI's review, then a Persona identity check that unlocks publishing, product feeds, insights and business agents.";
const COMPARISON_ALT = "Comparison table of ChatGPT Business Hub, Google Business Profile, Apple Business and Bing Places for Business by where each shows, how you verify and whether online-only businesses can list.";
const PLAN_ALT = "Timeline of the 28-day AI citation check: baseline on day 0, read-only check on day 14 and first effect call on day 28, with 7 runs per prompt on each of 5 engines.";
const HERO_URL = `${CANONICAL}/${SLUG}-hero.webp`;
const OG_URL = `${CANONICAL}/${SLUG}-og.png`;
const AUTHOR_URL = 'https://www.nakama.in/authors/sandeep-kumar';

/** One array renders the visible FAQ HTML and the FAQPage schema, so both match word for word. */
const FAQS: {q: string; a: string}[] = [
 {
  q: "Is Business Hub the same as ChatGPT Business?",
  a: "No. Business Hub is the interface inside Businesses in ChatGPT where you claim and manage a business profile, launched in beta on 10 November 2026. ChatGPT Business is OpenAI's paid workspace plan for teams. You do not need an Ads account or a ChatGPT Enterprise agreement to claim.",
 },
 {
  q: "Can you delete a ChatGPT business profile?",
  a: "You can delete only an unpublished draft profile, from the three-dot menu on its Overview page in Business Hub. OpenAI Support cannot delete, unpublish or hide a published profile as part of a setup or ownership request. Profiles created through Persona publish automatically on approval, so review everything before you submit.",
 },
 {
  q: "Can you manage several brands or locations together?",
  a: "Not yet. OpenAI's help center says each distinct brand is managed separately, and central management across a parent company's brands and locations is not currently available. Claiming the main brand does not claim its locations.",
 },
 {
  q: "Why might OpenAI call my business?",
  a: "OpenAI's Businesses in ChatGPT Terms say that by using Business Hub, you agree OpenAI's AI assistant may make calls to you on behalf of ChatGPT users. The Terms link to an opt-out. Read section 4.1 before you claim if your phone line cannot take automated calls from an AI assistant.",
 },
 {
  q: "Can I claim a business someone else already claimed?",
  a: "You can dispute it. Open the profile, choose Dispute ownership from the three-dot menu, and verify with Persona that you are authorized to represent the business. OpenAI says disputing ownership does not change the profile's visibility in ChatGPT.",
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
   },
   "about": [
    {
     "@type": "Thing",
     "name": "Businesses in ChatGPT"
    }
   ],
   "mentions": [
    {
     "@type": "Organization",
     "name": "OpenAI",
     "url": "https://openai.com/"
    },
    {
     "@type": "Organization",
     "name": "Persona",
     "url": "https://withpersona.com/"
    }
   ]
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

export const chatgptBusinessHubJsonLd = articleLd;

/** Inline figures: WebP with a PNG fallback, lazy, with width and height set. */
const figure = (name: string, alt: string, width: number, height: number) =>
 `<figure><picture><source srcset="/journal/${SLUG}/${name}.webp" type="image/webp"><img src="/journal/${SLUG}/${name}.png" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async"></picture></figure>`;

const h2 = (text: string) => `<h2 id="${faqId(text)}">${text}</h2>`;

const faqHtml = FAQS.map(({q, a}) => `<h3 id="${faqId(q)}">${q}</h3>\n<p>${a}</p>`).join('\n');

const authorBox = `<div class="author-box" id="sandeep-kumar">
<img src="/authors/sandeep-kumar-nakama-seo-geo.webp" srcset="/authors/sandeep-kumar-nakama-seo-geo.webp 400w, /authors/sandeep-kumar-nakama-seo-geo-800.webp 800w" sizes="96px" alt="Sandeep, SEO and GEO Specialist at Nakama Growth" width="96" height="96" loading="lazy" decoding="async">
<div class="author-box-text">
<p><a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a> is an SEO and GEO Specialist at Nakama Growth, based in Delhi, India. He joined the team in June 2026 and works on content strategy and web content writing for brands that want to show up in Google search and in AI answers from tools like ChatGPT, Perplexity and Google AI Overviews.</p>
</div>
</div>`;

/* Hero: shown once, below the byline as on the majority of journal posts (for example best-enterprise-ai-seo-agencies). Eager with fetchpriority high, WebP with a PNG fallback. og:image and twitter:image use the -og file. */
const coverHtml = `<figure><picture><source srcset="/journal/${SLUG}/${SLUG}-hero.webp" type="image/webp"><img src="/journal/${SLUG}/${SLUG}-hero.png" alt="${HERO_ALT}" width="1600" height="900" fetchpriority="high" decoding="async"></picture></figure>`;

/* H1: same override as geo-agency-vs-in-house (lift the shared 18ch cap, balance the lines) so this 64-character headline sets in 3 lines at 1440px like best-enterprise-ai-seo-agencies. Text unchanged. */
const H1_STYLE = 'max-width:none;text-wrap:balance';

/** On this page: same nav.toc markup as topics-vs-keywords (numbered, two columns at 960px and up), placed after the first answer section. Labels are short; hrefs come from faqId so each one resolves to its H2 id. */
const toc = `<nav class="toc" aria-labelledby="toc-h"><p class="toc-head" id="toc-h">On this page <span>16 sections</span></p><ol><li><a href="#${faqId("Who can claim a business in ChatGPT, and can Indian businesses claim?")}">Who can claim, and India</a></li><li><a href="#${faqId("What do you need before you start?")}">What you need first</a></li><li><a href="#${faqId("How do you claim your business in ChatGPT, step by step?")}">Claim it step by step</a></li><li><a href="#${faqId("What if your business is missing, locked or already claimed?")}">Missing, locked or claimed</a></li><li><a href="#${faqId("What if Business Hub verification fails or stays pending?")}">Verification problems</a></li><li><a href="#${faqId("What can you edit in a ChatGPT business profile?")}">What you can edit</a></li><li><a href="#${faqId("How do you fix wrong hours or wrong details about your business in ChatGPT?")}">Fixing wrong details</a></li><li><a href="#${faqId("Is claiming your business in ChatGPT free?")}">Is it free?</a></li><li><a href="#${faqId("Does claiming your business improve your visibility in ChatGPT?")}">Does it improve visibility?</a></li><li><a href="#${faqId("What do Business Hub insights show, and how do they compare with GA4 and prompt tracking?")}">Insights vs GA4 and prompt tracking</a></li><li><a href="#${faqId("How is ChatGPT Business Hub different from Google Business Profile, Apple Business and Bing Places?")}">Vs Google, Apple and Bing</a></li><li><a href="#${faqId("How should an agency get access to a client's Business Hub?")}">Agency access</a></li><li><a href="#${faqId("What do you agree to when you claim your business in ChatGPT?")}">What you agree to</a></li><li><a href="#${faqId("What are ChatGPT business agents, and who can create one?")}">Business agents</a></li><li><a href="#${faqId("What should you do in the first 28 days after claiming?")}">Your first 28 days</a></li><li><a href="#${faqId("What else do people ask about Businesses in ChatGPT?")}">FAQ</a></li></ol></nav>`;

const bodyHtml = `<nav aria-label="Breadcrumb" class="article-breadcrumb"><ol style="list-style:none;display:flex;flex-wrap:wrap;gap:.5rem;padding:0;margin:0 0 1.25rem;font-size:.9rem"><li><a href="https://www.nakama.in/">Home</a></li><li aria-hidden="true">/</li><li><a href="https://www.nakama.in/resources">Resources</a></li><li aria-hidden="true">/</li><li aria-current="page">${TITLE}</li></ol></nav>
<h1 id="${faqId(H1)}" style="${H1_STYLE}">${H1}</h1>
<p>${FRESHNESS}</p>
<p>By <a href="${AUTHOR_URL}" rel="author">Sandeep Kumar</a>, SEO and GEO Specialist, Nakama Growth</p>
${coverHtml}
<p>To claim your business in ChatGPT:</p>
<ol>
<li>Sign in to ChatGPT and open Business Hub from the sidebar.</li>
<li>Search for your business by name and select its listing.</li>
<li>Confirm the ChatGPT account that will manage it.</li>
<li>Verify with your business phone, business email, a DNS TXT record or Shopify.</li>
<li>Wait for OpenAI's review, then complete a Persona identity check to publish changes and see insights.</li>
</ol>
<p>These steps follow <a href="https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt" target="_blank" rel="noopener">OpenAI's help center</a>. OpenAI calls the program Businesses in ChatGPT, and you manage it in Business Hub. Every OpenAI page cited here was last checked on 17 Nov 2026.</p>
${h2("What is ChatGPT Business Hub?")}
<p>ChatGPT Business Hub is the interface inside ChatGPT where a business owner claims and manages a business profile. It belongs to Businesses in ChatGPT, a beta program <a href="https://openai.com/index/introducing-businesses-chatgpt/" target="_blank" rel="noopener">OpenAI announced on 10 November 2026</a>. From Business Hub you control profile details, product feeds and insights, and eligible US businesses can also build an optional business agent.</p>
<p>OpenAI's <a href="https://openai.com/policies/businesses-in-chatgpt-terms/" target="_blank" rel="noopener">Businesses in ChatGPT Terms</a> define Business Hub as "the interface within Businesses in ChatGPT through which businesses may create, claim, and manage their business listings and access and use the Tools."</p>
<p>Your business may already have a listing. The Terms say OpenAI may create and display a listing "regardless of whether you claim, manage, or cease managing it" (section 4.1).</p>
<p>Business Hub is not ChatGPT Business, which is OpenAI's paid workspace plan for teams.</p>
${toc}
${h2("Who can claim a business in ChatGPT, and can Indian businesses claim?")}
<p>An owner or authorized representative can claim a business in ChatGPT, and no Ads account or Enterprise agreement is needed. OpenAI says claiming works where ChatGPT is available and the required verification is supported. India is on ChatGPT's supported countries list, but OpenAI publishes no Business Hub country list, so Indian eligibility is likely but not confirmed.</p>
<p>What OpenAI does confirm:</p>
<ul>
<li>"Claiming is initially available to eligible businesses with a website." Eligibility also depends on "industry, location, and our verification and integrity checks" (<a href="https://openai.com/business/businesses-in-chatgpt/" target="_blank" rel="noopener">OpenAI's Businesses in ChatGPT page</a>).</li>
<li>OpenAI may hold off on some business categories until it has the safeguards to support them (<a href="https://openai.com/policies/businesses-in-chatgpt/" target="_blank" rel="noopener">Businesses in ChatGPT policy</a>).</li>
<li>Existing OpenAI Enterprise customers and advertisers can work with their OpenAI representative to claim.</li>
</ul>
<p>India appears on <a href="https://help.openai.com/en/articles/7947663-chatgpt-and-openai-api-supported-countries-and-territories" target="_blank" rel="noopener">ChatGPT's supported countries page</a>. Two things are settled for Indian businesses. Local stores and restaurants cannot claim yet, because OpenAI's help center says they "can currently claim only an existing U.S. listing." Business agents are US only. For an Indian SaaS, agency or services company with a website, the online route is the likeliest path. OpenAI has not said whether Indian ID documents and business records pass its identity check, so treat that as unconfirmed until you try.</p>
<h3 id="what-if-my-business-is-online-only">What if my business is online only?</h3>
<p>An eligible online-only business can use Business Hub. OpenAI's help center says that if you run an eligible online business and cannot find a listing, you may see an option to add one. Google Business Profile works differently: it requires a physical location customers can visit, or a business that travels to its customers.</p>
${h2("What do you need before you start?")}
<p>You need a ChatGPT account you will keep, access to one verification channel, and documents for the identity check. Gather these before you open Business Hub, because the person who completes the identity check should be the person who will own the account.</p>
<ul>
<li><strong>The managing ChatGPT account.</strong> Ideally a work account. OpenAI does not document whether the managing account can be changed after claiming.</li>
<li><strong>One verification channel:</strong> the business phone shown on the listing, the business email linked to it, access to your domain's DNS, or a login to the business's Shopify store.</li>
<li><strong>For the identity check:</strong> a government-issued ID, business registration information, and proof that you are authorized to represent the business.</li>
<li><strong>Matching records.</strong> OpenAI asks that the business name, address and any registration or tax number match your official business records.</li>
</ul>
${h2("How do you claim your business in ChatGPT, step by step?")}
<p>You claim your business in ChatGPT in Business Hub. Sign in, find the listing, confirm the managing account and verify through one of the methods offered. OpenAI then reviews the claim and emails a decision. After approval, a separate identity check with Persona unlocks publishing, product feeds, insights and business agents.</p>
<ol>
<li><strong>Sign in</strong> to ChatGPT with the account that will manage the business.</li>
<li><strong>Open Business Hub</strong> from the sidebar and search for your business by name. OpenAI's help center gives no direct web address; it only says to open it from the sidebar.</li>
<li><strong>Select the listing</strong> that matches your business and confirm the account. If the listing shows "Contact support", it is locked and you need to request access.</li>
<li><strong>Choose a verification method.</strong> OpenAI shows the methods available for your business: business phone, business email, website domain or Shopify. If you received a claim invitation by email, open that personal link and sign in with the address that received it. Never forward it.</li>
<li><strong>Wait for OpenAI's review.</strong> OpenAI emails a decision or a request for more information. You can cancel a pending claim.</li>
<li><strong>Complete Persona identity verification.</strong> Submit the ID and business details Persona asks for. If you create a new profile through Persona, OpenAI's approval publishes it automatically, so review everything before you submit.</li>
<li><strong>Check the badge.</strong> The help center says the blue check appears after Persona approval. OpenAI's Businesses page says it shows a profile has been claimed. The pages differ on timing, so treat it as unconfirmed.</li>
<li><strong>Optional: connect a product feed</strong> by CSV, hosted URL or Shopify. Eligible US ecommerce and online service businesses can also build a business agent.</li>
<li><strong>Optional: add teammates or an agency.</strong> Each person uses their own ChatGPT account.</li>
</ol>
${figure("chatgpt-business-hub-claim-steps", CLAIM_STEPS_ALT, 1600, 1200)}
<div class="article-table"><table>
<caption>Business Hub verification methods (from OpenAI's help center)</caption>
<thead><tr><th scope="col">Method</th><th scope="col">What you do</th><th scope="col">What you need</th></tr></thead>
<tbody>
<tr><th scope="row">Business phone</th><td>Choose SMS or an automated call, then enter the code</td><td>Access to the business phone number shown</td></tr>
<tr><th scope="row">Business email</th><td>Select Get code, then enter the code</td><td>Access to the email address linked to the business</td></tr>
<tr><th scope="row">Website domain</th><td>Add the TXT record shown in ChatGPT to your DNS, then select Verify domain</td><td>DNS access, or the person who manages your domain</td></tr>
<tr><th scope="row">Shopify store</th><td>Select Connect Shopify and sign in to the store</td><td>Login to the Shopify store for the business</td></tr>
</tbody>
</table></div>
<p>For the DNS route, copy the type, host and value exactly as ChatGPT shows them, and add the record as soon as you get it. OpenAI notes that DNS changes may take time to appear. If someone else manages your domain, have them ready before you start.</p>
${figure("chatgpt-business-hub-verification-paths", VERIFICATION_PATHS_ALT, 1600, 1000)}
${h2("What if your business is missing, locked or already claimed?")}
<p>If you cannot find your business, an eligible online business may see an option to add it, while local stores and restaurants can only claim an existing US listing. A locked listing needs a support request. If someone else has already claimed it, use Dispute ownership and verify with Persona.</p>
<ul>
<li><strong>Not found.</strong> Online businesses: look for the option to add one. Local stores and restaurants outside the US have no route yet.</li>
<li><strong>"Contact support" on the listing.</strong> The listing is locked. Select Contact support to request access.</li>
<li><strong>Already claimed by someone else.</strong> Open the profile, select the three-dot menu, then Dispute ownership, and verify with Persona that you are authorized to represent the business. OpenAI says disputing ownership does not change the profile's visibility.</li>
<li><strong>A duplicate or wrong listing.</strong> OpenAI's policy bars fake or duplicate profiles, but the help center does not document how to merge or remove a duplicate. Contact OpenAI Support. Support cannot delete, unpublish or hide a published profile as part of a setup or ownership request.</li>
<li><strong>Brands on a managed claim process.</strong> Individual location profiles stay locked by default. Ask your OpenAI account contact which claim path to use.</li>
</ul>
${h2("What if Business Hub verification fails or stays pending?")}
<p>If verification is pending, wait for OpenAI's email before trying again. If it fails or expires, follow the email, use Try again if it appears, and correct any details that do not match your official records. If there is no retry option, contact OpenAI Support.</p>
<ol>
<li><strong>While pending:</strong> wait for OpenAI's decision or request for more information. Review time varies, and OpenAI asks you to let the review finish before trying again. You can cancel a pending Persona submission.</li>
<li><strong>If a check fails or expires:</strong> follow the instructions in the email. If Try again is available, submit corrected information.</li>
<li><strong>Match your records:</strong> the business name, address and any registration or tax number must match your official business records.</li>
<li><strong>If you cannot retry</strong>, or Business Hub still shows verification as incomplete after you were told it was approved, contact OpenAI Support. Include the step you were on, any error message and a screenshot with sensitive details removed.</li>
</ol>
<p>Submitting to Persona is not approval. Features that need Persona verification stay unavailable until it is approved, and you cannot create a business agent while verification is pending or after it fails. If you first verified the claim another way, you can finish Persona later from your business overview: find Complete verification with Persona and select Verify.</p>
<p>Never enter a registration number that is not yours to get past a field. OpenAI's policy requires information that truthfully represents the business.</p>
${h2("What can you edit in a ChatGPT business profile?")}
<p>After Persona verification, a ChatGPT business profile lets you edit the website, description, category, logo, delivery policy, return policy and cover photo, plus "other optional details" the help center does not name. OpenAI reviews and publishes each change, and ChatGPT may still use other sources about your business.</p>
<p>Retailers can also connect a product feed by CSV, hosted URL or Shopify. OpenAI says a feed does not guarantee that ChatGPT recommends your products. Eligible Shopify products were already in ChatGPT through Shopify Catalog before Business Hub launched.</p>
<h3 id="how-should-a-b2b-or-saas-company-write-its-description">How should a B2B or SaaS company write its description?</h3>
<p>A B2B or SaaS company should write its ChatGPT business description as category first, then what it does and for whom, in the same words it uses on its website and in its Organization schema. Avoid misleading claims and unsupported guarantees, which OpenAI's policy bans.</p>
<p>An example, using the description Nakama Growth already publishes in its site schema:</p>
<blockquote><p>Nakama gets brands named in AI answers. We earn the off-site sources ChatGPT, Perplexity, Gemini and Google AI Overviews rely on: Reddit, YouTube, LinkedIn, Quora, editorial and review sites.</p></blockquote>
<p>It states what the company does and how, in wording that matches the website, with no rankings or results promised. OpenAI does not publish a length limit for the field in its help center, so keep the most important words first.</p>
${h2("How do you fix wrong hours or wrong details about your business in ChatGPT?")}
<p>If ChatGPT shows the wrong hours or details for your business, claim and verify the profile in Business Hub, then correct the fields Business Hub lets you edit. OpenAI's policy requires accurate hours, address and contact details, and ChatGPT may also use other sources, so fix the same details on your website too.</p>
<p>The policy names "business name, category, address or service area, hours, contact details, and products or services offered" as information that must be truthful and kept current.</p>
<p>Hours are not confirmed as an editable field. The help center's edit list does not name hours, though the Terms list opening hours among the basic details a business can submit for display (section 4.2).</p>
<p>Updates take time to appear. OpenAI says a saved change does not mean every answer will reflect it immediately.</p>
${h2("Is claiming your business in ChatGPT free?")}
<p>OpenAI has not published a price for claiming a business in ChatGPT. <a href="https://venturebeat.com/technology/openai-lets-you-claim-your-business-in-chatgpt-and-set-up-a-custom-agentic-ai-customer-sales-rep" target="_blank" rel="noopener">VentureBeat, citing Digiday, reported on 10 November 2026</a> that claiming a profile and publishing a business agent are free at launch, and that OpenAI left future charges open.</p>
<p>Advertising is separate. OpenAI's help center says claiming, publishing an agent and advertising are separate, and you can manage your business information and insights without running ads.</p>
${h2("Does claiming your business improve your visibility in ChatGPT?")}
<p>Not by itself. OpenAI says claiming a profile does not change its visibility in ChatGPT and does not guarantee increased visibility, placement or traffic, and that advertising does not influence ChatGPT's independent answers. Claiming keeps your details accurate and unlocks insights. Visibility still depends on what ChatGPT finds about you across the web.</p>
<p>The Terms add that OpenAI does not guarantee "any particular placement, ranking, visibility or level of distribution" (section 8).</p>
<p>So claim for accuracy and measurement, not for reach. What moves mentions is what the pages ChatGPT reads say about you; our guide on <a href="https://www.nakama.in/journal/how-to-rank-in-chatgpt">how to rank in ChatGPT and get cited</a> covers that work, and <a href="https://www.nakama.in/services/geo">generative engine optimization</a> is the service we run for it.</p>
${h2("What do Business Hub insights show, and how do they compare with GA4 and prompt tracking?")}
<p>Business Hub insights show the past 28 days of mentions, website clicks and discovery topics. For an online business, a mention counts only when ChatGPT references its website, not just the brand name. OpenAI shares no prompts or conversations, and a blank metric can mean the number sits below a reporting threshold rather than zero.</p>
<p>For a local business, a mention counts when ChatGPT shows a result for that location. Discovery topics are aggregate themes; they do not reveal individual prompts or measure customer intent.</p>
<p>Each source answers a different question:</p>
<ul>
<li><strong>Business Hub insights:</strong> how often ChatGPT referenced your website and how often people clicked through.</li>
<li><strong>GA4:</strong> what visitors from chatgpt.com did on your site. Clicks and sessions are counted differently, so expect them to differ, and some ChatGPT clicks arrive with no referrer and show up as Direct.</li>
<li><strong>Prompt tracking:</strong> whether you appear for the questions you care about, and who appears instead. Our <a href="https://www.nakama.in/journal/best-ai-visibility-tools">comparison of AI visibility tools</a> covers the tools that run it.</li>
</ul>
<p>Business Hub is now ChatGPT's first-party report, in the same family as Search Console and Bing Webmaster Tools. Our guide to <a href="https://www.nakama.in/journal/track-brand-mentions-in-ai-search#method-3-what-do-first-party-reports-and-analytics-show">first-party reports for tracking brand mentions in AI search</a> explains how to read them together and why none of them counts unlinked mentions.</p>
<h3 id="how-should-you-log-business-hub-numbers">How should you log Business Hub numbers?</h3>
<p>Log Business Hub numbers once a month with the date range, next to GA4 sessions from chatgpt.com and your prompt-tracking results for the same period. Keep the log internal. OpenAI's Terms treat insight data as confidential, so do not publish screenshots or figures from Business Hub.</p>
<p>Section 6 of the Terms says insight data is OpenAI's Confidential Information and may be shared only with service providers acting for you. Our <a href="https://www.nakama.in/journal/ai-visibility-report-template">AI visibility report template</a> is a simple place to keep this monthly log.</p>
${h2("How is ChatGPT Business Hub different from Google Business Profile, Apple Business and Bing Places?")}
<p>ChatGPT Business Hub manages how a business appears in ChatGPT and accepts eligible online-only businesses. Google Business Profile covers Google Search and Maps and needs a physical location or a service area. Apple Business, which replaced Apple Business Connect, covers Apple Maps and other Apple apps. Bing Places for Business covers Bing search and Maps.</p>
<p>Google's <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener">Business Profile guidelines</a> limit profiles to businesses that have a physical location customers can visit or that travel to customers. Google's <a href="https://support.google.com/business/answer/7107242" target="_blank" rel="noopener">verification page</a> lists phone or text, email, live video call and postcard, with reviews taking up to 5 business days. If AI Overviews matter to you as much as ChatGPT, our guide to <a href="https://www.nakama.in/journal/how-to-rank-in-google-ai-overviews">ranking in Google AI Overviews</a> covers the Google side.</p>
<div class="article-table"><table>
<caption>ChatGPT Business Hub vs Google Business Profile vs Apple Business vs Bing Places for Business</caption>
<thead><tr><th scope="col">Question</th><th scope="col">Business Hub (ChatGPT)</th><th scope="col"><a href="https://business.google.com/in/business-profile/" target="_blank" rel="noopener">Google Business Profile</a></th><th scope="col"><a href="https://www.apple.com/in/newsroom/2026/03/introducing-apple-business/" target="_blank" rel="noopener">Apple Business</a></th><th scope="col"><a href="https://blogs.bing.com/search/2025/10/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research/" target="_blank" rel="noopener">Bing Places for Business</a></th></tr></thead>
<tbody>
<tr><th scope="row">Where it shows</th><td>ChatGPT answers and your ChatGPT business profile</td><td>Google Search and Maps</td><td>Apple Maps, Wallet, Siri, Mail and other Apple apps</td><td>Bing search and Bing Maps</td></tr>
<tr><th scope="row">Launched</th><td>10 Nov 2026 (beta)</td><td>Long established</td><td>14 Apr 2026, replacing Apple Business Connect</td><td>New version 3 Oct 2025</td></tr>
<tr><th scope="row">Online-only businesses</th><td>Yes, eligible online businesses can add a listing</td><td>No, needs a physical location or a business that travels to customers</td><td>Built around location place cards; online-only not stated</td><td>Not stated</td></tr>
<tr><th scope="row">Cost</th><td>No price from OpenAI; reported free at launch</td><td>Free</td><td>Free</td><td>Free</td></tr>
<tr><th scope="row">How you verify</th><td>Business phone, business email, DNS TXT or Shopify, then a Persona ID check</td><td>Phone or text, email, live video call or postcard; review up to 5 business days</td><td>Not stated in Apple's announcement</td><td>Not stated in Bing's announcement; listings can be imported from Google</td></tr>
<tr><th scope="row">Edit hours</th><td>Policy requires accurate hours; editable field not confirmed</td><td>Yes</td><td>Yes, on place cards</td><td>Yes</td></tr>
<tr><th scope="row">Insights</th><td>Mentions, website clicks, discovery topics, past 28 days</td><td>Not covered here</td><td>Location insights: searches, views, taps on actions</td><td>Not stated in Bing's announcement</td></tr>
<tr><th scope="row">Someone else claimed it</th><td>Dispute ownership, then a Persona check</td><td>Not covered here</td><td>Not covered here</td><td>Not covered here</td></tr>
<tr><th scope="row">AI agent</th><td>Business agent, eligible US ecommerce and online services only</td><td>Not covered here</td><td>Not stated</td><td>Not stated</td></tr>
</tbody>
</table></div>
${figure("chatgpt-business-hub-vs-google-apple-bing", COMPARISON_ALT, 1600, 1200)}
<p>Keep all four listings consistent. ChatGPT may draw on other sources, so a wrong phone number on another listing may still surface in an answer after you fix Business Hub.</p>
${h2("How should an agency get access to a client's Business Hub?")}
<p>An agency should not claim a client's business with its own identity. OpenAI's help center says the admin who claims a business can add teammates and grant agency access, each person using their own ChatGPT account. So the client's owner or authorized person claims and verifies the business, then invites the agency into Business Hub.</p>
<p>Invitees may need to be members of the ChatGPT workspace that claimed the business. If an agency invitation is blocked, OpenAI says to contact support. Never forward a personal claim invitation to give someone access.</p>
<p>If you are weighing outside help for ChatGPT specifically, our guide to <a href="https://www.nakama.in/journal/chatgpt-seo-agency">what a ChatGPT SEO agency should cover</a> lists the questions to ask.</p>
${h2("What do you agree to when you claim your business in ChatGPT?")}
<p>Claiming your business in ChatGPT means accepting OpenAI's Businesses in ChatGPT Terms. OpenAI may show and edit listings whether or not they are claimed, keeps a perpetual licence to display basic business details, treats your insight data as confidential, and may let its AI assistant call your business for users unless you opt out.</p>
<p>From the Terms, last updated 9 Nov 2026:</p>
<ul>
<li><strong>Section 3:</strong> product feed providers must let OpenAI's crawlers in, and text and data mining opt-outs have no effect toward OpenAI.</li>
<li><strong>Section 4.1:</strong> OpenAI may supplement, edit or replace listing information whether or not you claim. Claiming gives no exclusive control, and OpenAI does not guarantee verification. Its AI assistant may call you on behalf of users, and the Terms link to an opt-out.</li>
<li><strong>Section 4.2:</strong> the display licence is perpetual and irrevocable for basic business information you submit, including name, address, contact details, category, opening hours and website.</li>
<li><strong>Section 6:</strong> insight data is OpenAI's Confidential Information.</li>
<li><strong>Section 8:</strong> no guarantee of placement, traffic or sales.</li>
</ul>
<p>This is a summary, not legal advice. Read the Terms before you claim.</p>
${h2("What are ChatGPT business agents, and who can create one?")}
<p>A ChatGPT business agent is an optional AI agent that answers customer questions for a verified business. Right now only eligible US ecommerce and online service businesses with a website can create one. Business agents cannot complete purchases, bookings or order checks, and a business can appear in ChatGPT without one.</p>
<p>Verification alone does not make a business eligible. OpenAI's help center says the business must also meet the agent requirements for location, type of business and industry, and some businesses can manage a profile without being eligible for an agent.</p>
<p>OpenAI says businesses can sponsor their agent and use it as a ChatGPT Ads destination, with sponsored placements labeled and kept separate from ChatGPT's answers. VentureBeat's launch report adds that OpenAI's advertising help center describes Sponsored Agents as a limited test with selected advertisers.</p>
<p>Indian and other non-US businesses cannot create a business agent yet. OpenAI says it plans to expand to more markets and categories over time, with no dates given. If you run a US-facing ecommerce brand, our page on <a href="https://www.nakama.in/industries/ecommerce">GEO for ecommerce</a> covers the wider AI visibility work around it.</p>
${h2("What should you do in the first 28 days after claiming?")}
<p>In the first 28 days after claiming, finish Persona verification, publish an accurate profile that matches your website and schema, record the first insights snapshot with its date range, and compare clicks with GA4 sessions from chatgpt.com. Then keep earning third-party mentions, because claiming alone does not change ChatGPT's answers.</p>
<ol>
<li>Finish Persona. Submitting is not approval.</li>
<li>Match the profile to your site and Organization schema, including sameAs links.</li>
<li>Fix the same details on Google Business Profile, Apple Business and Bing Places.</li>
<li>Write down when each change was saved. OpenAI reviews changes and they take time to show.</li>
<li>Log the first insights snapshot internally, with its date range.</li>
<li>Track GA4 sessions from chatgpt.com for the same range.</li>
<li>Recheck OpenAI's help center monthly. It is a beta.</li>
</ol>
<p>To see whether your work changes AI answers, Nakama Growth uses its own 28-day plan (our standard, not an OpenAI requirement): a baseline on day 0 before you publish, a read-only check on day 14, and the first effect call on day 28, never earlier. Each of 10 prompts gets 7 runs per engine, logged out in fresh sessions, on 5 engines (ChatGPT, Perplexity, Google AI Overviews, Google AI Mode and Gemini): 350 runs per checkpoint, reported per engine. A captcha, error or no answer counts as an invalid run, not as not cited.</p>
${figure("chatgpt-business-hub-28-day-measurement-plan", PLAN_ALT, 1600, 900)}
<p>If you want to see where your brand stands in AI answers before you start, request a <a href="https://www.nakama.in/services/ai-visibility-audit#free-ai-visibility-check">Free AI visibility check</a>.</p>
${h2("What else do people ask about Businesses in ChatGPT?")}
${faqHtml}
${h2("Where does this information come from?")}
<p>This guide relies on OpenAI's own help center, launch post, Businesses page, policy and Terms, plus Google, Apple and Microsoft pages for the comparison and one press report for pricing. Each is linked where it is first used. Nakama Growth has not claimed its own profile yet.</p>
<p>Primary OpenAI sources: Introducing Businesses in ChatGPT (10 Nov 2026); Setting up your business on ChatGPT (help center); Businesses in ChatGPT: Claim your business; Businesses in ChatGPT policy (updated 10 Nov 2026); Businesses in ChatGPT Terms (last updated 9 Nov 2026); ChatGPT Supported Countries.</p>
<p>Update log:</p>
<ul>
<li>17 Nov 2026: First published. All OpenAI sources last checked on 17 Nov 2026.</li>
</ul>
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

export const chatgptBusinessHubArticle: Article = {
 slug: SLUG,
 category: 'Guide',
 title: TITLE,
 description: DESCRIPTION,
 readTime: '17 min read',
 motif: 'guide',
 metaTitle: TITLE,
 date: dayOf(MODIFIED_AT),
 publishedAt: PUBLISHED_AT,
 modifiedAt: MODIFIED_AT,
 authorName: 'Sandeep Kumar',
 /** PREVIEW true sets noindex,follow and keeps this note out of the sitemap, llms.txt, llms-full.txt, RSS, resources and the author index. */
 noindex: PREVIEW,
 /** Keep reading goes to how to rank in ChatGPT. A noindex preview can still show that one card. */
 nextSlug: 'how-to-rank-in-chatgpt',
 coverImage: {src: `/journal/${SLUG}/${SLUG}-hero.webp`, width: 1600, height: 900, alt: HERO_ALT},
 ogImage: {
  url: OG_URL,
  width: 1200,
  height: 630,
  alt: OG_ALT,
  type: 'image/png',
 },
 jsonLd: chatgptBusinessHubJsonLd,
 bodyHtml,
 sections: sectionsFromBody(bodyHtml),
};
