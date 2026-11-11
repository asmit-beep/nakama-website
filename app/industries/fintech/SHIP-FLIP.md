# Ship flip · /industries/fintech

Applied on the PR branch in its own commit after Yash's conditional ship GO (12 Nov 2026, about 4:22 AM IST). Not merged; production changes only when the PR merges. The route is index, follow with a self canonical, and it is on the `/industries` hub (card 04 and ItemList), in the header Industries dropdown, `corePages`, `sitemap.xml` and `llms.txt`. The footer has no per-industry links (only /industries, since #91), so nothing was added there. No redirects are listed for fintech.

Checklist as applied. Strings below are from HIBIKU-FINTECH-COPY-V1.3.3 "Ship strings (Dodai, ship release only)", plus the Totonoe meta lock (12 Nov 2026, about 3:36 AM IST).

1. `app/industries/fintech/copy.ts`: set `PREVIEW = false` and `GO_LIVE_DATE = '2026-11-12'` (ISO; feeds WebPage datePublished and dateModified). Both land in the same deploy as items 2 to 5.
2. Schema Service name: Dodai's call. `SERVICE_NAME` is `Fintech GEO` (sibling pattern); his alternative is `Generative engine optimization (GEO) for fintech`.
3. `lib/feed.ts`: add a `corePages` row after real estate, `{path:'/industries/fintech',title:FT_TITLE,summary:FT_META,priority:.8,freq:'monthly',src:['app/industries/fintech']}`, and set the `/industries` summary to `Healthcare, ecommerce, real estate and fintech each have a live page.`
4. `app/site.tsx` `industryLinks`: `['Fintech','/industries/fintech','GEO for fintech brands']`.
5. Totonoe meta lock (already live in `copy.ts` as `TITLE` and `META`, which feed title, og:title, twitter:title, meta description, og:description, twitter:description and the Service JSON-LD description). Use the same two strings wherever the hub or feeds describe this page, so `FT_TITLE` and `FT_META` in item 3 and any hub ItemList `name`/`description` for the fintech entry read:
   - Title (58 chars): `Fintech GEO Agency | Fintech AI Visibility | Nakama Growth`
   - Description (135 chars): `Fintech GEO agency helping payments, lending, crypto and insurtech brands get named and cited in ChatGPT, Gemini and Google AI answers.`
6. Hub card on `/industries`: position 04, eyebrow Industry, title Fintech, blurb `AI answers repeat fees, licences and markets, so fintech facts need a source and a date wherever they appear.`, link label `View fintech →`. ItemList `numberOfItems: 4`. Hub FAQ and table cells per the copy file ship table. `lib/llms.ts` facts[5] per the copy file.
7. Gate: Super Dude GEO pass, Totonoe, Dodai, Kensa, Taiken, Gohan and Sozo passes, then Yash's own ship GO.
