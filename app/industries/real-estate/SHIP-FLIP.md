# Ship flip · /industries/real-estate

Not applied. The preview route stays noindex, and it is not on the hub, in the header, in `sitemap.xml`, or in `llms.txt`.

Do this only on a later ship GO. Do not merge this note as the ship.

## 1. Index the page

In `app/industries/real-estate/copy.ts`, set:

```ts
export const PREVIEW = false;
```

That switches the page robots meta to `index, follow` (and the same for googlebot, with the large image preview). Canonical stays `https://www.nakama.in/industries/real-estate`.

## 2. Sitemap and llms.txt

In `lib/feed.ts`, import `META as RE_META, TITLE as RE_TITLE` from the real-estate copy and add this `corePages` row after ecommerce:

```ts
{path:'/industries/real-estate',title:RE_TITLE,summary:RE_META,priority:.8,freq:'monthly',src:['app/industries/real-estate']},
```

`sitemap.xml` and `llms.txt` both read `corePages`. Add the URL once in each. Do not add `/industries/realestate` or `/industries/real-estate-brokerages`.

`llms-full.txt` does not list industry URLs today. Leave it.

## 3. Hub card

On `/industries`, after the Ecommerce door, add a live card. No Coming soon.

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

Add Real estate to `industryLinks` in `app/site.tsx`, beside Healthcare and Ecommerce, pointing at `/industries/real-estate`. Footer Company stays the Industries hub only. No Real estate footer child.

## 5. Already on this branch

These aliases are already one-hop permanent redirects (`permanent: true`, Next responds 308) to `/industries/real-estate`:

- `/industries/realestate`
- `/industries/real-estate-brokerages`

Leave them. They are not in the sitemap or llms files.
