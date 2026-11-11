# Ship flip · /industries/fintech

Not applied. This branch is a preview only (Yash approved a preview, 11 Nov 2026 4:33 AM IST). The route stays noindex, follow, and it is not on the `/industries` hub, in the header dropdown, the footer, `corePages`, `sitemap.xml` or `llms.txt`.

Do this only on a later ship GO from Yash. Strings below are from HIBIKU-FINTECH-COPY-V1.2.9 "Ship strings (Dodai, ship release only)".

1. `app/industries/fintech/copy.ts`: set `PREVIEW = false` and fill `GO_LIVE_DATE` in the journal date form (for example `11 Nov 2026`). Both land in the same deploy as items 2 to 5.
2. Schema Service name: Dodai's call. `SERVICE_NAME` is `Fintech GEO` (sibling pattern); his alternative is `Generative engine optimization (GEO) for fintech`.
3. `lib/feed.ts`: add a `corePages` row after real estate, `{path:'/industries/fintech',title:FT_TITLE,summary:FT_META,priority:.8,freq:'monthly',src:['app/industries/fintech']}`, and set the `/industries` summary to `Healthcare, ecommerce, real estate and fintech each have a live page.`
4. `app/site.tsx` `industryLinks`: `['Fintech','/industries/fintech','GEO for fintech brands']`.
5. Hub card on `/industries`: position 04, eyebrow Industry, title Fintech, blurb `AI answers repeat fees, licences and markets, so fintech facts need a source and a date wherever they appear.`, link label `View fintech →`. ItemList `numberOfItems: 4`. Hub FAQ and table cells per the copy file ship table. `lib/llms.ts` facts[5] per the copy file.
6. Gate: Super Dude GEO pass, Totonoe, Dodai, Kensa, Taiken, Gohan and Sozo passes, then Yash's own ship GO.
