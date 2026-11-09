# Ship flip · /industries/real-estate

Not applied. The preview route stays noindex, and it is not on the hub, in the header, in `sitemap.xml`, or in `llms.txt`.

Do this only on a later ship GO. Do not merge this note as the ship.

## Ship checklist

1. Set `PREVIEW = false` in `app/industries/real-estate/copy.ts` in the same deploy that makes the page live. The hub card, the `corePages` row (sitemap and llms.txt), and the header link all land together. Do not flip the flag in a commit that leaves any of those off, and do not ship the listings while the flag is still true.

2. Apply the `/industries` summary rewrite at `lib/feed.ts` line 26. Current line:

```ts
{path:'/industries',title:'Industries We Serve: GEO & AI Visibility by Sector | Nakama',summary:'Industry pages for GEO and AI visibility at Nakama Growth. Healthcare and ecommerce each have a live page; SaaS, tech and AI run through our services.',priority:.8,freq:'monthly',src:['app/industries']},
```

TODO (Hibiku): PENDING. The replacement summary is not supplied. Leave this placeholder. Invent no copy.

3. Add the real estate `industryLinks` sub-line in `app/site.tsx`. Current entries, for context:

```ts
export const industryLinks=[['All industries','/industries','Every sector we serve'],['Healthcare','/industries/healthcare','GEO for clinics, hospitals and health brands'],['Ecommerce','/industries/ecommerce','GEO for DTC, Shopify and online store brands']] as const;
```

TODO (Hibiku): PENDING. The real estate sub-line is not supplied. Leave this placeholder. Invent no copy. The href, when the line exists, is `/industries/real-estate`, beside Healthcare and Ecommerce.

4. Hub card icon: PENDING from Gohan. Invent no mark. Drop it into `app/industries/page.tsx`, where the live cards set theirs:
   - Healthcare uses `Heart()` (the inline SVG in that file) inside the first `ih-door` article, above the "Industry" label and the Healthcare h2.
   - Ecommerce uses `Bag()` (the inline SVG in that file) inside the second `ih-door` article, above the "Industry" label and the Ecommerce h2.
   A real estate card would take a third component in that same spot, on a new door after Ecommerce.

5. Keep omitting the Sample badges. Do not render the hero, five-profile, or prompt-tracker Sample pills on the live page.

6. Gate: no ship until Kensa QA passes and Yash personally gives the GO.

## 1. Index the page

In `app/industries/real-estate/copy.ts`, set:

```ts
export const PREVIEW = false;
```

That switches the page robots meta to `index, follow` (and the same for googlebot, with the large image preview). Canonical stays `https://www.nakama.in/industries/real-estate`. This flip is checklist item 1. It ships in the same deploy as the hub card, `corePages`, and the header link.

## 2. Sitemap and llms.txt

In `lib/feed.ts`, import `META as RE_META, TITLE as RE_TITLE` from the real-estate copy and add this `corePages` row after ecommerce:

```ts
{path:'/industries/real-estate',title:RE_TITLE,summary:RE_META,priority:.8,freq:'monthly',src:['app/industries/real-estate']},
```

`sitemap.xml` and `llms.txt` both read `corePages`. Add the URL once in each. Do not add `/industries/realestate` or `/industries/real-estate-brokerages`.

`llms-full.txt` does not list industry URLs today. Leave it.

The `/industries` summary on line 26 is a separate string. Rewrite it only with Hibiku's text. See checklist item 2. Until that text exists, do not change the line.

## 3. Hub card

On `/industries`, after the Ecommerce door, add a live card. No Coming soon. The icon is checklist item 4 and is still PENDING from Gohan.

- Eyebrow: Industry
- Title: Real estate
- Blurb: People check a brokerage in AI answers before they call, so agent, team and office facts have to match everywhere.
- Link label: View real estate →
- Link: /industries/real-estate

CollectionPage ItemList becomes `numberOfItems: 3`, in this order:

1. Healthcare → `/industries/healthcare`
2. Ecommerce → `/industries/ecommerce`
3. Real estate → `/industries/real-estate`

Hub Title and H1 stay free of hire terms. Hub meta and the FAQ answer "Which industries does Nakama Growth work with today?" still need a rewrite from the hub owner. Hibiku V2.1 did not draft that rewrite, so it is not invented here. The live sentence still says healthcare and ecommerce each have a page. Replace that at ship so real estate is included, keep the meta between 150 and 160 characters, and do not put "real estate AEO agency" in the hub Title, H1, or H2s.

## 4. Header

Add Real estate to `industryLinks` in `app/site.tsx`, beside Healthcare and Ecommerce, pointing at `/industries/real-estate`. The third-column sub-line is checklist item 3 and is still PENDING from Hibiku. Do not invent it. Footer Company stays the Industries hub only. No Real estate footer child.

## 5. Already on this branch

These aliases are already one-hop permanent redirects (`permanent: true`, Next responds 308) to `/industries/real-estate`:

- `/industries/realestate`
- `/industries/real-estate-brokerages`

Leave them. They are not in the sitemap or llms files.

Sample badges stay off. See checklist item 5.

No ship until checklist item 6 is met: Kensa QA passes, and Yash personally gives the GO.
