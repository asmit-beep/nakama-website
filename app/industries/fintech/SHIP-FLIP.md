# Ship flip · /industries/fintech

Applied on the PR branch in its own commit after Yash's conditional ship GO (12 Nov 2026, about 4:22 AM IST). Not merged; production changes only when the PR merges. The route is index, follow with a self canonical, and it is on the `/industries` hub (card 04 and ItemList), in the header Industries dropdown, `corePages`, `sitemap.xml` and `llms.txt`. The footer has no per-industry links (only /industries, since #91), so nothing was added there. No redirects are listed for fintech.

Checklist as applied. Strings below are from HIBIKU-FINTECH-COPY-V1.3.3 "Ship strings (Dodai, ship release only)", plus the Totonoe meta lock (12 Nov 2026, about 3:36 AM IST).

1. `app/industries/fintech/copy.ts`: set `PREVIEW = false` and `GO_LIVE_DATE = '2026-11-12'` (ISO; feeds WebPage datePublished and dateModified). Both land in the same deploy as items 2 to 5.
2. Schema Service name: Dodai's call. `SERVICE_NAME` is `Fintech GEO` (sibling pattern); his alternative is `Generative engine optimization (GEO) for fintech`.
3. `lib/feed.ts`: add a `corePages` row after real estate, `{path:'/industries/fintech',title:FT_TITLE,summary:FT_META,priority:.8,freq:'monthly',src:['app/industries/fintech']}`, and set the `/industries` summary to `Healthcare, ecommerce, real estate and fintech each have a live page.`
4. `app/site.tsx` `industryLinks`: `['Fintech','/industries/fintech','GEO for fintech brands']`.
5. Totonoe meta lock (live in `copy.ts` as `TITLE` and `META`, which feed title, og:title, twitter:title, meta description, og:description, twitter:description, the Service and WebPage JSON-LD and the corePages row via `FT_TITLE`/`FT_META`):
   - Title (58 chars): `Fintech GEO Agency | Fintech AI Visibility | Nakama Growth`
   - Description (135 chars): `Fintech GEO agency helping payments, lending, crypto and insurtech brands get named and cited in ChatGPT, Gemini and Google AI answers.`
   The hub ItemList entry names the visible card, like its siblings (Totonoe M2): `{'@type': 'ListItem', position: 4, name: 'Fintech', url: abs('/industries/fintech')}` with `numberOfItems: 4`. Hub `META` (138 chars): `Industry pages for GEO, AEO and AI visibility: healthcare, ecommerce, real estate and fintech. SaaS, tech and AI run through our services.`
6. Hub card on `/industries` (after the real estate card, before SaaS, tech and AI, so the visible order matches the ItemList): position 04, eyebrow Industry, title Fintech, blurb `AI answers repeat fees, licences and markets, so fintech facts need a source and a date wherever they appear.`, link label `View fintech →`. ItemList `numberOfItems: 4`. Hub FAQ per the copy file ship table in both `FAQ[1].text` (FAQPage JSON-LD) and the `faqAnswer()` JSX, with fintech linked; hub table Fintech column per the ship table. `lib/llms.ts` facts[5] per the copy file.
7. Gate: Super Dude GEO pass, Totonoe, Dodai, Kensa, Taiken, Gohan and Sozo passes, then Yash's own ship GO.

Not done here (need Yash's separate GO): reverse `GEO for fintech brands` links in the healthcare, ecommerce and real estate RELATED rows (Totonoe S5).
