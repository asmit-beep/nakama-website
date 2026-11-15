# Ship flip · /industries/law-firms

Applied on the PR branch in one commit after Yash's own ship GO (16 Nov 2026, about 12:59 AM IST), together with his logo strip change. Production changes only when the PR merges. Source: DODAI-LAW-FIRMS-TECH-PREBRIEF (13 Nov 2026), sections 1, 2 and 11.

Checklist as applied:

1. `app/industries/law-firms/copy.ts`: `PREVIEW = false` (index, follow with the max-* tokens, self canonical); `GO_LIVE_DATE = '2026-11-16'`. `MODIFIED_DATE` follows `GO_LIVE_DATE`; bump it on any later content edit so WebPage `dateModified` agrees with the sitemap lastmod.
2. Logo strip (Yash, 16 Nov 2026): heading and logo set now match the live industry pages ("Brands we have grown in AI search", Synup, Inventive AI, HubEngage, StarAgile, BacklinkOS). `LOGOS_LABEL` and `LOGOS` re-export fintech's `PROOF_LABEL` and `PROOF_LOGOS`, so the list is not forked. "(not law firms)" is gone.
3. `lib/feed.ts` `corePages` (sitemap.xml and llms.txt Pages): law firms row after fintech; the `/industries` summary names law firms.
4. `lib/llms.ts` facts line names law firms (llms.txt and llms-full.txt). llms-full gets no industry URL entry, same as siblings.
5. `app/site.tsx` `industryLinks`: `['Law firms','/industries/law-firms','GEO for law firms']` (header dropdown and mobile menu). Footer: no change (hub only).
6. `app/industries/page.tsx` hub: card 05 after fintech, before SaaS (`h2 id="ih-law-firms"`, "View law firms"); ItemList `numberOfItems: 5` plus position 5; hub FAQ "Which industries..." in both `FAQ[1].text` and `faqAnswer()` with the law firms link; Why table sixth column (`data-col="Law firms"`, `industries.css` `repeat(6,...)`); hub `META` names law firms.
7. `next.config.ts` `redirects()`: `/industries/legal` and `/industries/law` to `/industries/law-firms`, permanent (308), one hop.
8. Not done (needs Yash's separate GO): reverse `GEO for law firms` Related links on healthcare, ecommerce, real estate and fintech.
9. Header "Book a call" CTA on `/industries/*` ships as its own PR (#104, `preview/industries-header-book-a-call`).
