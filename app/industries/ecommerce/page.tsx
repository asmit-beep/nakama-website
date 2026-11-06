import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 BADGE, CHIPS, CTA_PRIMARY, CTA_PRIMARY_HREF, CTA_SECONDARY, CTA_SECONDARY_HREF, DAL_DEF, DAL_DIFF,
 DAL_FRAME, DAL_NINETY, DAL_PROOF, DAL_PROMPTS, DAL_SHOP, DAL_SVC, DAL_WHO, DAL_WHY, DEF_ENTITY,
 DEF_FLOW, EYEBROW, FAQ, FIN_LEAD, FIT_NO, FIT_NO_H, FIT_NOTE, FIT_YES, FIT_YES_H, FRAME_NOTE, H1,
 H2_DEF, H2_FAQ, H2_FIN, H2_FIT, H2_FRAME, H2_NINETY, H2_PROOF, H2_PROMPTS, H2_SVC, H2_WHO, H2_WHY,
 H3_DIFF, H3_SHOP, HERO_CAPTION, HERO_PROMPT, LEAD, MEASURES, META, NAMED, NINETY_NOTE, PAINS, PHASES,
 PREVIEW, PROMPT_STATES, PROMPTS, PROOF_ACROSS, PROOF_LABEL, PROOF_LOGOS, PROOF_SHORT, PROOF_STEPS,
 RELATED_LIVE, SEGMENTS, SERVICES, SHOP_BRIDGE, SHOP_PROMPT, SLUG, SOURCE_CAPTION, SOURCE_HEADS,
 SOURCES, STATE_LABEL, STEPS, SURFACE_CAPTION, SURFACES, SVC_NOTE, TITLE, WHY_SHORT,
} from './copy';
import './ecommerce.css';

/** Preview only. Production index,follow is a later ship GO. Do not drop this while PREVIEW is true. */
const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {title: TITLE, description: META}),
 robots,
};

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: 'Ecommerce GEO',
 serviceType: 'Ecommerce GEO',
 description: META,
 url: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {
  '@type': 'BusinessAudience',
  audienceType: 'Ecommerce brands, including DTC, Shopify and online store brands',
 },
 areaServed: [
  {'@type': 'Country', name: 'United States'},
  {'@type': 'Country', name: 'United Kingdom'},
  {'@type': 'AdministrativeArea', name: 'European Union'},
  {'@type': 'Place', name: 'Middle East'},
  {'@type': 'Place', name: 'APAC'},
  {'@type': 'Country', name: 'India'},
 ],
};

const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQ.map(({q, a}) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: {'@type': 'Answer', text: a},
 })),
};

function FaqBody({a, href, linkLabel}: {a: string; href?: string; linkLabel?: string}) {
 if (!href || !linkLabel) return a;
 const at = a.indexOf(linkLabel);
 if (at < 0) return a;
 return (
  <>
   {a.slice(0, at)}
   <Link href={href}>{linkLabel}</Link>
   {a.slice(at + linkLabel.length)}
  </>
 );
}

function Ctas({id}: {id?: string}) {
 return (
  <div className="ec-btns" id={id}>
   <Link className="ec-btn ec-btn-p" href={CTA_PRIMARY_HREF}>{CTA_PRIMARY}</Link>
   <Link className="ec-btn ec-btn-s" href={CTA_SECONDARY_HREF}>{CTA_SECONDARY}</Link>
  </div>
 );
}

function Label({children}: {children: string}) {
 return <p className="ec-lbl">{children}</p>;
}

function Bag() {
 return (
  <span className="ec-mark" aria-hidden="true">
   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7d93b2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14l-1.2 11.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
   </svg>
  </span>
 );
}

export default function EcommerceIndustry() {
 return (
  <Shell className="ec-page shell-cinema">
   <Crumbs trail={[{name: 'Industries', path: '/industries'}, {name: 'Ecommerce', path: SLUG}]} />
   <JsonLd data={[serviceLd, faqLd]} />
   <div className="ec">
    <section className="ec-hero">
     <div className="ec-vap" aria-hidden="true" />
     <div className="ec-w">
      <nav className="ec-crumb" aria-label="Breadcrumb">
       <Link href="/">Home</Link>
       <span className="ec-sep" aria-hidden="true">›</span>
       <Link href="/industries">Industries</Link>
       <span className="ec-sep" aria-hidden="true">›</span>
       <Link href={SLUG} aria-current="page">Ecommerce</Link>
      </nav>
      <div className="ec-hg">
       <div>
        <p className="ec-eye">{EYEBROW}</p>
        <h1>{H1}</h1>
        <p className="ec-lead">{LEAD}</p>
        <Ctas />
       </div>
       <div className="ec-panel">
        <p className="ec-pl"><span>Shopper prompt</span><span className="ec-sb">{BADGE}</span></p>
        <div className="ec-prompt"><span className="ec-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
        <div className="ec-answer">
         <span className="ec-pulse" aria-hidden="true" />
         <p className="ec-pl"><span>AI answer</span><span>Named</span></p>
         <div className="ec-nm"><Bag />{NAMED}</div>
         <div aria-hidden="true">
          <div className="ec-line" />
          <div className="ec-line ec-line-sh" />
          <div className="ec-line ec-line-xs" />
         </div>
         <div className="ec-chips">
          {CHIPS.map(chip => <span className="ec-chip" key={chip}>{chip}</span>)}
         </div>
        </div>
        <p className="ec-wcn">{HERO_CAPTION}</p>
       </div>
      </div>
     </div>
    </section>

    <section className="ec-logos" aria-labelledby="ec-proof-label">
     <div className="ec-w">
      <div className="ec-lgh">
       <p className="ec-cap" id="ec-proof-label">{PROOF_LABEL}</p>
       <span className="ec-ac">{PROOF_ACROSS}</span>
      </div>
      <ul className="ec-lr">
       {PROOF_LOGOS.map(logo => (
        <li key={logo.name} className={logo.word ? 'is-word' : undefined}>
         {/* eslint-disable-next-line @next/next/no-img-element -- existing client marks, fixed size */}
         <img src={logo.src} alt={logo.word ? logo.name : ''} width={logo.w} height={logo.h} loading="lazy" decoding="async" />
         {logo.word ? null : <span>{logo.name}</span>}
        </li>
       ))}
      </ul>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-def">
     <div className="ec-w ec-split">
      <div>
       <Label>03 · Definition</Label>
       <h2 id="ec-def">{H2_DEF}</h2>
       <p className="ec-ans">{DAL_DEF}</p>
       <p className="ec-sub">{DEF_ENTITY}</p>
       <h3 className="ec-h3-gap">{H3_DIFF}</h3>
       <p className="ec-ans">{DAL_DIFF}</p>
      </div>
      <div className="ec-flow">
       {DEF_FLOW.map((step, i) => (
        <div key={step.n} className="ec-flow-step">
         {i > 0 ? <div className="ec-arr" aria-hidden="true" /> : null}
         <div className={step.named ? 'ec-fn is-named' : 'ec-fn'}>
          <span>{step.n}</span>
          <b>{step.title}</b>
          <em>{step.meta}</em>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="ec-sec ec-alt" aria-labelledby="ec-why">
     <div className="ec-w">
      <Label>04 · Why it matters</Label>
      <h2 id="ec-why">{H2_WHY}</h2>
      <p className="ec-ans">{DAL_WHY}</p>
      <p className="ec-sub">{WHY_SHORT}</p>
      <div className="ec-g3 ec-pain">
       {PAINS.map(([kicker, title, body]) => (
        <div className="ec-card ec-rule" key={kicker}>
         <small>{kicker}</small>
         <p className="ec-pt">{title}</p>
         <p>{body}</p>
        </div>
       ))}
      </div>
      <div className="ec-stbl">
       <div className="ec-tc">
        <span className="ec-cap">{SOURCE_CAPTION}</span>
        <span className="ec-cap ec-sb">{BADGE}</span>
       </div>
       <table>
        <thead>
         <tr>
          {SOURCE_HEADS.map(head => <th scope="col" key={head}>{head}</th>)}
         </tr>
        </thead>
        <tbody>
         {SOURCES.map(row => (
          <tr key={row[0]}>
           <th scope="row" data-l={SOURCE_HEADS[0]}>{row[0]}</th>
           <td data-l={SOURCE_HEADS[1]}>{row[1]}</td>
           <td data-l={SOURCE_HEADS[2]}>{row[2]}</td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-who">
     <div className="ec-w">
      <Label>05 · Who we work with</Label>
      <h2 id="ec-who">{H2_WHO}</h2>
      <p className="ec-ans">{DAL_WHO}</p>
      <div className="ec-g2">
       {SEGMENTS.map(([title, line, prompt]) => (
        <div className="ec-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <span className="ec-pr">{prompt}</span>
        </div>
       ))}
      </div>
      <div className="ec-shop">
       <div>
        <h3>{H3_SHOP}</h3>
        <p className="ec-sub">{DAL_SHOP}</p>
        <p className="ec-sub">{SHOP_BRIDGE}</p>
        <span className="ec-pr ec-pr-block">{SHOP_PROMPT}</span>
       </div>
       <div className="ec-way">
        <div className="ec-wh">
         <span className="ec-cap">{SURFACE_CAPTION}</span>
         <span className="ec-cap ec-sb">{BADGE}</span>
        </div>
        {SURFACES.map((row, i) => (
         <div className={row.on ? 'ec-wr is-on' : 'ec-wr'} key={row.title}>
          <span className="ec-ar" aria-hidden="true">{i + 1}</span>
          <div><b>{row.title}</b><small>{row.sub}</small></div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>

    <section className="ec-sec ec-alt" aria-labelledby="ec-frame">
     <div className="ec-w">
      <Label>06 · Checklist</Label>
      <h2 id="ec-frame">{H2_FRAME}</h2>
      <p className="ec-ans">{DAL_FRAME}</p>
      <div className="ec-g6">
       {STEPS.map(([n, title, line]) => (
        <div className="ec-st" key={n}>
         <div className="ec-ring">{n}</div>
         <h3>{title}</h3>
         <p>{line}</p>
        </div>
       ))}
      </div>
      <p className="ec-note">{FRAME_NOTE}</p>
      <div className="ec-sig">
       {MEASURES.map(measure => <span key={measure}>{measure}</span>)}
      </div>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-svc">
     <div className="ec-w">
      <Label>07 · Services</Label>
      <h2 id="ec-svc">{H2_SVC}</h2>
      <p className="ec-ans">{DAL_SVC}</p>
      <div className="ec-g3">
       {SERVICES.map(([title, line, href]) => (
        <div className="ec-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <Link className="ec-lk" href={href}>{title} →</Link>
        </div>
       ))}
      </div>
      <p className="ec-note">{SVC_NOTE}</p>
      <Ctas id="mid-cta" />
     </div>
    </section>

    <section className="ec-sec ec-alt" aria-labelledby="ec-proof">
     <div className="ec-w">
      <Label>08 · Process</Label>
      <h2 id="ec-proof">{H2_PROOF}</h2>
      <p className="ec-ans">{DAL_PROOF}</p>
      <p className="ec-sub">{PROOF_SHORT}</p>
      <div className="ec-g3">
       {PROOF_STEPS.map(step => (
        <div className="ec-card ec-ck" key={step.n}>
         <span className="ec-bx">{step.n}</span>
         <div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-prompts">
     <div className="ec-w ec-split ec-split-start">
      <div>
       <Label>09 · Prompts</Label>
       <h2 id="ec-prompts">{H2_PROMPTS}</h2>
       <p className="ec-ans">{DAL_PROMPTS}</p>
       <ul className="ec-pls">
        {PROMPTS.map(prompt => <li key={prompt}>{prompt}</li>)}
       </ul>
      </div>
      <div className="ec-way ec-states">
       <div className="ec-wh">
        <span className="ec-cap">{STATE_LABEL}</span>
        <span className="ec-cap ec-sb">{BADGE}</span>
       </div>
       <div className="ec-wq"><span className="ec-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
       {PROMPT_STATES.map(row => (
        <div className="ec-state" key={row.engine}>
         <span className="ec-bn">{NAMED}</span>
         <span className="ec-eng">{row.engine}</span>
         <span className={row.hot ? 'ec-tag is-hot' : 'ec-tag'}>{row.state}</span>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="ec-sec ec-alt" aria-labelledby="ec-ninety">
     <div className="ec-w">
      <Label>10 · First 90 days</Label>
      <h2 id="ec-ninety">{H2_NINETY}</h2>
      <p className="ec-ans">{DAL_NINETY}</p>
      <div className="ec-g3">
       {PHASES.map(([num, title, line]) => (
        <div className="ec-card" key={num}>
         <span className="ec-num">{num}</span>
         <h3>{title}</h3>
         <p>{line}</p>
        </div>
       ))}
      </div>
      <p className="ec-note">{NINETY_NOTE}</p>
      <div className="ec-mets">
       {MEASURES.map(measure => <span className="ec-met" key={measure}>{measure}</span>)}
      </div>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-fit">
     <div className="ec-w">
      <Label>11 · Fit</Label>
      <h2 id="ec-fit">{H2_FIT}</h2>
      <div className="ec-split ec-fit">
       <div className="ec-card ec-good">
        <h3>{FIT_YES_H}</h3>
        <ul>{FIT_YES.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="ec-fit-note">{FIT_NOTE}</p>
       </div>
       <div className="ec-card ec-bad">
        <h3>{FIT_NO_H}</h3>
        <ul>{FIT_NO.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
      </div>
     </div>
    </section>

    <section className="ec-sec ec-alt" aria-labelledby="ec-faq">
     <div className="ec-w">
      <Label>12 · FAQ</Label>
      <h2 id="ec-faq">{H2_FAQ}</h2>
      <div className="ec-faq">
       {FAQ.map((item, i) => (
        <details className="ec-fq" key={item.q} open={i === 0}>
         <summary><h3>{item.q}</h3></summary>
         <p><FaqBody a={item.a} href={item.href} linkLabel={item.linkLabel} /></p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="ec-sec" aria-labelledby="ec-fin">
     <div className="ec-w">
      <div className="ec-fin">
       <div className="ec-vap ec-vap-fin" aria-hidden="true" />
       <div className="ec-fin-copy">
        <Label>13 · Next step</Label>
        <h2 id="ec-fin">{H2_FIN}</h2>
        <p className="ec-lead ec-lead-fin">{FIN_LEAD}</p>
       </div>
       <Ctas />
      </div>
      <div className="ec-rel">
       {RELATED_LIVE.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </div>
     </div>
    </section>
   </div>
  </Shell>
 );
}
