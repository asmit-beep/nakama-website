# Ship flip · /industries/law-firms

Preview only today. Nothing below is applied on this branch. Every item lands in ONE commit and ONE deploy, with `PREVIEW = false`, and only after Yash's own ship GO. Never land any of these before the flip (Dodai P0 5).

Source: DODAI-LAW-FIRMS-TECH-PREBRIEF (13 Nov 2026), section 1, 2 and 11.

1. `app/industries/law-firms/copy.ts`: `PREVIEW = false`; `GO_LIVE_DATE = '<ship day ISO>'`. `MODIFIED_DATE` follows `GO_LIVE_DATE`; bump it on any later content edit so WebPage `dateModified` agrees with the sitemap lastmod.
2. `lib/feed.ts` `corePages` (feeds sitemap.xml and llms.txt Pages): import `META as LF_META, TITLE as LF_TITLE` from `@/app/industries/law-firms/copy`, add after fintech:
   `{path:'/industries/law-firms',title:LF_TITLE,summary:LF_META,priority:.8,freq:'monthly',src:['app/industries/law-firms']}`.
   The `/industries` row summary gains law firms (Totonoe locks the words).
3. `lib/llms.ts` facts line ("Industries: healthcare, ecommerce, real estate and fintech, ..."): add law firms. Feeds llms.txt and llms-full.txt. llms-full gets no industry URL entry, same as siblings.
4. `app/site.tsx` `industryLinks` (header Industries dropdown and the mobile menu read the same array): append `['Law firms','/industries/law-firms','<locked sub-line, proposed GEO for law firms>']`. Footer: NO change (hub only).
5. `app/industries/page.tsx` hub:
   - Card 05 (`ih-door ih-door-f`) after fintech, before SaaS: numeral 05, `h2 id="ih-law-firms"`, link "View law firms" to `/industries/law-firms`, icon from Gohan (`aria-hidden`).
   - ItemList `numberOfItems: 5` plus `{'@type':'ListItem',position:5,name:'Law firms',url:abs('/industries/law-firms')}`.
   - Hub FAQ "Which industries...": both `FAQ[1].text` and the `faqAnswer()` JSX, with `<Link href="/industries/law-firms">law firms</Link>`.
   - Why table: sixth value per `WHY_ROWS` row, header cell `data-col="Law firms"`, and `industries.css` `repeat(5,...)` to `repeat(6,...)`.
   - Hub `META`: add law firms (Totonoe lock; Dodai candidate is 149 chars).
   - Design flag (Gohan/Kensa): 5 vertical cards leave an orphan cell in the 2-column `.ih-hall`.
6. `next.config.ts` `redirects()`: `{source:'/industries/legal',destination:'/industries/law-firms',permanent:true}` and the same for `/industries/law`. One hop, 308, no others.
7. Not in the flip unless Yash says GO: reverse `GEO for law firms` Related links on healthcare, ecommerce, real estate and fintech.
8. Header "Book a call" CTA on `/industries/*` is a separate PR (`preview/industries-header-book-a-call`).
