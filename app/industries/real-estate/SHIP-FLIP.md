# Ship flip · /industries/real-estate

Not applied. The preview route stays noindex, and it is not on the hub, in the header, in `sitemap.xml`, or in `llms.txt`.

Do this only on a later ship GO. Do not merge this note as the ship.

## Ship checklist

1. Set `PREVIEW = false` in `app/industries/real-estate/copy.ts` in the same deploy that makes the page live. The hub card, the `corePages` row (sitemap and llms.txt), and the header link all land together. Do not flip the flag in a commit that leaves any of those off, and do not ship the listings while the flag is still true.

2. Apply the `/industries` summary rewrite at `lib/feed.ts` line 26. Current line:

```ts
{path:'/industries',title:'Industries We Serve: GEO & AI Visibility by Sector | Nakama',summary:'Industry pages for GEO and AI visibility at Nakama Growth. Healthcare and ecommerce each have a live page; SaaS, tech and AI run through our services.',priority:.8,freq:'monthly',src:['app/industries']},
```

Locked summary, verbatim. Replace only the `summary` string. No em dash in this line.

```ts
summary:'Healthcare, ecommerce and real estate each have a live page.'
```

3. Add the real estate `industryLinks` sub-line in `app/site.tsx`. Current entries, for context:

```ts
export const industryLinks=[['All industries','/industries','Every sector we serve'],['Healthcare','/industries/healthcare','GEO for clinics, hospitals and health brands'],['Ecommerce','/industries/ecommerce','GEO for DTC, Shopify and online store brands']] as const;
```

Locked sub-line, verbatim. Add it beside Healthcare and Ecommerce. Href `/industries/real-estate`. No em dash in this line.

```ts
['Real estate','/industries/real-estate','AEO for residential brokerages and agent teams']
```

4. Hub card icon from Gohan. Paste this in `app/industries/page.tsx` the same way `Heart()` and `Bag()` are inlined: a `span` with `className="ih-heart"` and `aria-hidden="true"`, then the SVG with `strokeWidth` and `vectorEffect`. Call it `<Key />` inside the real estate door, above the "Industry" label, where `<Heart />` and `<Bag />` sit on their cards.

```tsx
function Key() {
 return (
  <span className="ih-heart" aria-hidden="true">
   <svg viewBox="0 0 48 48" fill="none" stroke="#f3f1ed" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
    <g transform="rotate(-45 24 24)">
     <path d="M23 24a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
     <path d="M16.5 24a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
     <path d="M23 24h20M37 24v6M42 24v5" />
    </g>
   </svg>
  </span>
 );
}
```

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

The `/industries` summary on line 26 is a separate string from the real-estate page meta. Replace it with the locked summary in checklist item 2: `Healthcare, ecommerce and real estate each have a live page.` Leave the title on that line as it is.

## 3. Hub card

On `/industries`, after the Ecommerce door, add a third live card. No Coming soon. The icon is the `Key()` JSX in checklist item 4.

Hub card blurb, verbatim from HIBIKU-RE-COPY-V2 V2.1 (Hub card for /industries):

> People check a brokerage in AI answers before they call, so agent, team and office facts have to match everywhere.

- Position: 03
- Eyebrow: Industry
- Title: Real estate
- Link label: View real estate →
- Link: /industries/real-estate

CollectionPage ItemList becomes `numberOfItems: 3`, in this order:

1. Healthcare → `/industries/healthcare`
2. Ecommerce → `/industries/ecommerce`
3. Real estate → `/industries/real-estate`

Hub Title and H1 stay free of hire terms. Do not put "real estate AEO agency" in the hub Title, H1, or H2s.

Hub FAQ "Which industries does Nakama Growth work with today?"

The visible FAQ answer and the FAQPage `acceptedAnswer` text must be changed together and must match word for word. In `app/industries/page.tsx`, `faqAnswer()` builds the visible words and `FAQ[].text` is what `faqLd` copies into `acceptedAnswer.text`. Set both to the resulting answer below in the same edit. Do not leave the schema on the old opening.

Current full answer, from `app/industries/page.tsx` line 30 (the FAQ `text`, which is also the FAQPage schema answer, and the visible words):

> Healthcare and ecommerce each have their own page. Healthcare covers clinics, hospitals, healthtech and wellness brands. Ecommerce covers DTC, Shopify and online store brands. SaaS, tech and AI companies work through our GEO and AEO services, which cover how those buyers ask and which sources engines cite. Other categories can still start with a prompt and source check before any commitment.

Resulting full answer. The opening is replaced verbatim, and "Real estate covers residential brokerages and agent teams." is inserted verbatim right after the ecommerce sentence. Neither added sentence has an em dash.

> Healthcare, ecommerce and real estate each have their own page. Healthcare covers clinics, hospitals, healthtech and wellness brands. Ecommerce covers DTC, Shopify and online store brands. Real estate covers residential brokerages and agent teams. SaaS, tech and AI companies work through our GEO and AEO services, which cover how those buyers ask and which sources engines cite. Other categories can still start with a prompt and source check before any commitment.

Links may stay on the existing link labels. The link labels are part of the words, so the visible text and the schema text stay the same sentence.

## Hub meta description

Current meta, `app/industries/page.tsx` line 12:

```ts
const META = 'Industry pages for GEO and AI visibility at Nakama Growth. Healthcare and ecommerce each have a live page; SaaS, tech and AI run through our services.';
```

That string is 150 characters. `pageMeta` uses it as the meta description and `og:description`. The CollectionPage `description` at line 71 is the same `META` constant, so it changes with this edit. Title stays line 11, unchanged: `Industries We Serve: GEO & AI Visibility by Sector | Nakama`.

New meta, verbatim. 151 characters. No em dash.

```ts
const META = 'Industry pages for GEO, AEO and AI visibility. Healthcare, ecommerce and real estate each have a live page; SaaS, tech and AI run through our services.';
```

This is the page meta, not the `lib/feed.ts` line 26 summary. That summary stays the shorter locked sentence in checklist item 2. `llms.txt` uses the feed summary. The HTML meta and the CollectionPage description use this 151-character string.

## Hub industry-list audit

Checked the hub page, the shell it renders (header, mobile menu, footer), its JSON-LD, and the llms files that repeat the hub's industry lines. Real estate entries below are either already specified in this note, or marked DRAFT, pending Hibiku lock. No em dashes in the drafts.

Already specified above, not a new draft:

- Header and mobile menu, `app/site.tsx` line 11 (`industryLinks`). Same array fills the Industries dropdown and the mobile sheet. Locked sub-line: `AEO for residential brokerages and agent teams`.
- Hub doors, `app/industries/page.tsx` lines 140-158. Healthcare and ecommerce are the two live cards. The real estate card is the V2.1 blurb, title, and link above. Also add an `aria-hidden` numeral `03` on that door, beside `01` (line 139) and `02` (line 150).
- CollectionPage ItemList, `app/industries/page.tsx` lines 75-81. Add position 3, name `Real estate`, url `/industries/real-estate`.
- FAQPage for this question, lines 29-30 and 222-234. The resulting answer above. Visible text and `acceptedAnswer.text` together.
- `corePages` healthcare and ecommerce rows, `lib/feed.ts` lines 27-28. They become two lines in `llms.txt` under Pages, and two sitemap URLs. The real estate row is the `corePages` snippet in section 2, using the real estate page title and meta.
- Footer Company, `app/site.tsx` lines 65-69. The column links the Industries hub only. It does not list Healthcare or Ecommerce, so it gets no real estate child.
- Root Organization `hasOfferCatalog` in `lib/seo.tsx`, rendered on the hub from the root layout. It lists services, not industries. No healthcare or ecommerce entry. No real estate entry.
- FAQ "Why does GEO change by industry?", `app/industries/page.tsx` lines 25-26. It names a clinic and a software company. It does not list Healthcare and Ecommerce as entries. No real estate sentence.

DRAFT, pending Hibiku lock:

1. Comparison table, `app/industries/page.tsx` lines 17-21 (`WHY_ROWS`) and the header row at lines 179-180. Columns today are Healthcare and SaaS, tech and AI. There is no ecommerce column. The draft adds a Real estate column in the same shape as Healthcare: one header, then one cell on each of Prompts, Sources, and Claim risk.

```ts
header: 'Real estate'
Prompts: 'Buyers and sellers check a brokerage or agent before they call.'
Sources: 'Office pages, portal profiles, public license lookups and listing pages.'
'Claim risk': 'High. Agent, listing and brokerage claims need the broker of record\'s approval before they publish.'
```

2. llms.txt Industries fact, `lib/llms.ts` line 21. The same array is printed in `llms.txt` and `llms-full.txt`. Current text does not name healthcare or ecommerce:

```ts
'Industries: B2B SaaS and software, plus local services, education, travel and consumer brands.',
```

Proposed replacement, same single bullet, with real estate added to the list:

```ts
'Industries: B2B SaaS and software, plus real estate, local services, education, travel and consumer brands.',
```

## 4. Header

Add Real estate to `industryLinks` in `app/site.tsx`, beside Healthcare and Ecommerce, pointing at `/industries/real-estate`. The sub-line is the locked line in checklist item 3: `AEO for residential brokerages and agent teams`. Footer Company stays the Industries hub only. No Real estate footer child.

## 5. Already on this branch

These aliases are already one-hop permanent redirects (`permanent: true`, Next responds 308) to `/industries/real-estate`:

- `/industries/realestate`
- `/industries/real-estate-brokerages`

Leave them. They are not in the sitemap or llms files.

Sample badges stay off. See checklist item 5.

No ship until checklist item 6 is met: Kensa QA passes, and Yash personally gives the GO.

The hub FAQ item is no longer pending a Totonoe check. The visible answer and the FAQPage `acceptedAnswer` text still have to change together and match word for word.
