import type {Metadata} from 'next';
import Link from 'next/link';
import {Fragment} from 'react';
import {preload} from 'react-dom';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 ADVICE, AUDIENCE, BOUND_LEAD, BOUND_LIST, BREADCRUMB, CC_ANSWERS, CC_CAPTION, CC_HEADING,
 CC_PANEL_LABEL, CC_PROMPTS, CC_S4_CHIP, CC_S4_INTRO, CC_S4_MINE,
 CC_S4_ROWS, CC_SLOT, COVERS, CTA_PRIMARY, CTA_PRIMARY_HREF, CTA_SECONDARY, CTA_SECONDARY_HREF,
 DAL_DEF, DAL_DIFF, DAL_FIT, DAL_MAP, DAL_NINETY, DAL_PROMPTS, DAL_SRC, DAL_SVC, DAL_WHO, DAL_WHY,
 DATA_LINE, DEF_ENTITY, DIFF_HEADS, DIFF_ROWS, EVIDENCE, EYEBROW, FAQ, FIN_LEAD, FIT_NO, FIT_NO_H,
 FIT_YES, FIT_YES_H, GEO_HREF, H1, H2_BOUND, H2_DEF, H2_FAQ, H2_FIN, H2_FIT, H2_MAP, H2_MKT,
 H2_NINETY, H2_PROMPTS, H2_SRC, H2_SURF, H2_SVC, H2_WHO, H2_WHY, H3_DIFF, LBL_BOUND, LBL_DEF,
 LBL_FAQ, LBL_FIN, LBL_FIT, LBL_MAP, LBL_MKT, LBL_NINETY, LBL_PROMPTS, LBL_SRC, LBL_SURF, LBL_SVC,
 LBL_WHO, LBL_WHY, LEAD, LISTINGS, LISTINGS_H, LISTINGS_SUB, MARKET_LINKS, MARKETS, MARKETS_LABEL,
 MARKETS_LINE, META, MID_LEAD, MKT_FOOTER, MKT_LEAD, MKT_QUESTION, MKT_ROW_LABELS,
 MKT_TABLIST_LABEL, NINETY_LINE, NOT_COVERED, PHASES, PREVIEW, PROMPTS, PROOF_LABEL, PROOF_LOGOS,
 RATE_ANSWERS, RATE_ANSWERS_H, RATE_CARD_LABEL, RATE_CUE, RATE_HEADING, RATE_LOG, RATE_NEW,
 RATE_OLD, RATE_PAGES, RATE_PAGES_H, RATE_REF, RATE_TOGGLE, RATE_TOGGLE_PRESSED,
 RATE_VALUE_AFTER_SLOT, RELATED, SCOPE_LINE, SECTORS, SECTORS_LABEL, SEG_FACTS, SEG_PROMPT,
 SEGMENTS, SERVICE_NAME, SERVICES, SLUG, SOURCES, SOURCES_LABEL, SRC_STEPS, STEPS, SURF_LEAD,
 SURFACES, SVC_GEO, TITLE, TRACKER_CUE, TRACKER_ENGINES, TRACKER_HEADS, TRACKER_LABEL,
 TRACKER_STATE, WHO_OUT, WRONG_CUE, WRONG_LABEL, WRONG_ROWS, WRONG_SAID, WRONG_SAYS,
} from './copy';
import {FintechMotion} from './motion';
import './fintech.css';

/** PREVIEW true keeps robots noindex, follow. Flip only with Yash's ship GO. */
const robots: Metadata['robots'] = PREVIEW
 ? {index: false, follow: true, googleBot: {index: false, follow: true}}
 : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
 ...pageMeta(SLUG, {
  title: TITLE,
  description: META,
  image: {url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Nakama Growth'},
 }),
 alternates: {
  canonical: SLUG,
  types: {'application/rss+xml': [{url: '/rss.xml', title: 'Nakama Growth field notes'}]},
 },
 robots,
};

/** Schema per HIBIKU V1.2.9 "Schema (Dodai)". Service name is Dodai's call (see copy.ts). */
const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: SERVICE_NAME,
 serviceType: SERVICE_NAME,
 url: abs(SLUG),
 description: META,
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`},
 audience: {'@type': 'BusinessAudience', audienceType: AUDIENCE},
 areaServed: [
  {'@type': 'Country', name: 'United States'},
  {'@type': 'Country', name: 'United Kingdom'},
  {'@type': 'AdministrativeArea', name: 'European Union'},
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

/** Sets html.ft-js before first paint so JS states never shift layout. The client hook sets it too after soft navigation. */
const JS_FLAG = 'document.documentElement.classList.add("ft-js")';

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

function Ctas() {
 return (
  <div className="ft-btns">
   <Link className="ft-btn ft-btn-p" href={CTA_PRIMARY_HREF}>{CTA_PRIMARY}</Link>
   <Link className="ft-btn ft-btn-s" href={CTA_SECONDARY_HREF}>{CTA_SECONDARY}</Link>
  </div>
 );
}

function Label({children}: {children: string}) {
 return <p className="ft-lbl">{children}</p>;
}

function Slot({className}: {className?: string}) {
 return <span className={className ? `slot ${className}` : 'slot'}>{CC_SLOT}</span>;
}

/**
 * Hero cycle card (Gohan comp V1.3.2, copy V1.3). Every state is server HTML in one grid cell;
 * inactive states are visibility:hidden. State 4 is the rest state (no JS, reduced motion); with JS the card loops 1 to 4 continuously.
 * The cycle itself lives in cycle.ts (Dodai guardrail re-check, conditions 1 to 8 plus addenda).
 */
function CycleCard() {
 return (
  <div className="fx-hr">
   <div className="cc fx-cycle" data-s="4">
    <h2 id="cc-h" className="cc-h">{CC_HEADING}</h2>
    <p className="cc-ps">
     {CC_PROMPTS.map((prompt, i) => (
      <Fragment key={prompt}>
       {i > 0 ? ' ' : null}
       <span className={i === 3 ? 'cc-p is-on' : 'cc-p'}><span className="cc-t">{prompt}</span></span>
      </Fragment>
     ))}
    </p>
    <div className="cc-panel" role="region" aria-label={CC_PANEL_LABEL}>
     <p className="ft-vh">{CC_CAPTION}</p>
     <div className="cc-q">
      {CC_PROMPTS.map((prompt, i) => (
       <p className={i === 3 ? 'cc-l is-in' : 'cc-l'} data-s={i + 1} key={prompt}><span className="fx-p">{prompt}</span></p>
      ))}
     </div>
     <div className="cc-a">
      {CC_ANSWERS.map(([answer, chip], i) => (
       <div className="cc-l" data-s={i + 1} key={chip}>
        <p className="cc-ans fx-a"><Slot />{answer}</p>
        <span className="cc-chip fx-c"><i />{chip}</span>
       </div>
      ))}
      <div className="cc-l s4 is-in" data-s="4">
       <p className="cc-intro fx-a r1">{CC_S4_INTRO}</p>
       <ul className="cc-rows">
        <li className="fx-a r1 m">{CC_S4_ROWS[0]}</li>
        <li className="fx-a r2 m">{CC_S4_ROWS[1]}</li>
        <li className="fx-a r3"><Slot />{CC_S4_MINE}</li>
       </ul>
       <span className="cc-chip fx-c"><i />{CC_S4_CHIP}</span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default function FintechIndustry() {
 preload('/fonts/manrope-700.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-600.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-500.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-400.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 return (
  <Shell className="ft-page shell-cinema">
   <script dangerouslySetInnerHTML={{__html: JS_FLAG}} />
   <Crumbs trail={[{name: 'Industries', path: '/industries'}, {name: BREADCRUMB, path: SLUG}]} />
   <JsonLd data={[serviceLd, faqLd]} />
   <div className="ft" id="ft-root">
    <section className="ft-hero fx-hero" id="ft-hero">
     <div className="ft-vap" aria-hidden="true" />
     <div className="ft-w">
      <nav className="ft-crumb" aria-label="Breadcrumb">
       <Link href="/">Home</Link>
       <span className="ft-sep" aria-hidden="true">›</span>
       <Link href="/industries">Industries</Link>
       <span className="ft-sep" aria-hidden="true">›</span>
       <Link href={SLUG} aria-current="page">{BREADCRUMB}</Link>
      </nav>
      <div className="ft-hg">
       <div>
        <p className="ft-eye">{EYEBROW}</p>
        <span className="fx-hrule" aria-hidden="true" />
        <h1>{H1}</h1>
        <p className="ft-lead">{LEAD}</p>
        <Ctas />
       </div>
       <CycleCard />
      </div>
      <ul className="fx-scope" aria-label={SECTORS_LABEL}>
       <li className="fx-cap" aria-hidden="true">{SECTORS_LABEL}</li>
       {SECTORS.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
      </ul>
      <ul className="fx-scope fx-mks" aria-label={MARKETS_LABEL}>
       <li className="fx-cap" aria-hidden="true">{MARKETS_LABEL}</li>
       {MARKET_LINKS.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
       <li className="fx-mkl">{MARKETS_LINE}</li>
      </ul>
     </div>
    </section>

    <section className="ft-sec" id="ft-def" aria-labelledby="ft-def-h">
     <div className="ft-w ft-with-side">
      <Label>{LBL_DEF}</Label>
      <h2 id="ft-def-h">{H2_DEF}</h2>
      <p className="ft-ans">{DAL_DEF}</p>
      <div className="ft-side-card">
       <p className="ft-side-lab" id="ft-def-covers">Covers</p>
       <ul aria-labelledby="ft-def-covers" role="list">
        {COVERS.map(item => <li key={item}><span className="ft-side-dot is-ring" aria-hidden="true" />{item}</li>)}
       </ul>
       <p className="ft-side-lab" id="ft-def-out">Does not cover</p>
       <ul aria-labelledby="ft-def-out" role="list">
        {NOT_COVERED.map(item => <li key={item}><span className="ft-side-dot is-ring" aria-hidden="true" />{item}</li>)}
       </ul>
      </div>
      <p className="ft-sub">{DEF_ENTITY}</p>
      <h3 className="ft-h3-gap">{H3_DIFF}</h3>
      <p className="ft-ans">{DAL_DIFF}</p>
      <div className="ft-stbl ft-diff">
       <table>
        <thead>
         <tr>{DIFF_HEADS.map(head => <th scope="col" key={head}>{head}</th>)}</tr>
        </thead>
        <tbody>
         {DIFF_ROWS.map(row => (
          <tr key={row[0]}>
           <th scope="row" data-l={DIFF_HEADS[0]}>{row[0]}</th>
           <td data-l={DIFF_HEADS[1]}>{row[1]}</td>
           <td data-l={DIFF_HEADS[2]}>{row[2]}</td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-why" aria-labelledby="ft-why-h">
     <div className="ft-w">
      <Label>{LBL_WHY}</Label>
      <h2 id="ft-why-h">{H2_WHY}</h2>
      <p className="ft-ans">{DAL_WHY}</p>
      <div className="fx-wa">
       <h3 className="ft-vh">{WRONG_CUE}</h3>
       <div className="fx-tc"><span className="fx-cap">{WRONG_LABEL}</span></div>
       {WRONG_ROWS.map(([label, said, says]) => (
        <div className="fx-war" key={label}>
         <h3>{label}</h3>
         <div className="fx-said"><small>{WRONG_SAID}</small><p><span className="fx-sk">{said}</span></p></div>
         <div className="fx-says"><small>{WRONG_SAYS}</small><p>{says}</p></div>
        </div>
       ))}
      </div>
      <div className="fx-wa fx-evc">
       <ul className="fx-evl">{EVIDENCE.map(line => <li key={line.slice(0, 40)}>{line}</li>)}</ul>
      </div>
      <p className="fx-note">{SCOPE_LINE}</p>
      <p className="fx-note fx-srcs">
       <span>{SOURCES_LABEL}</span>{' '}
       {SOURCES.map(([label, href], i) => (
        <span className="fx-srci" key={href}>
         {i > 0 ? <span className="fx-dot" aria-hidden="true">·</span> : null}
         <a href={href}>{label}</a>
        </span>
       ))}
      </p>
     </div>
    </section>

    <section className="ft-sec" id="ft-sourcing" aria-labelledby="ft-src-h">
     <div className="ft-w">
      <Label>{LBL_SRC}</Label>
      <h2 id="ft-src-h">{H2_SRC}</h2>
      <p className="ft-ans">{DAL_SRC}</p>
      <ol className="fx-g4 fx-g3 fx-how">
       {SRC_STEPS.map(([title, body], i) => (
        <li className="fx-card" key={title}>
         <span className="fx-n">{`0${i + 1}`}</span>
         <h3>{title}</h3>
         <p>{body}</p>
        </li>
       ))}
      </ol>
      <p className="fx-note">{DATA_LINE}</p>
      <div className="fx-rc fx-chg" id="rc">
       <p className="ft-vh">{RATE_CUE}</p>
       <div className="fx-tc"><h3 className="fx-cap fx-rch">{RATE_HEADING}</h3></div>
       <div className="fx-rcg">
        <div className="fx-rsrc">
         <small className="fx-k">{RATE_CARD_LABEL}</small>
         <p className="fx-v"><Slot className="slot--pre slot--inherit" />{RATE_VALUE_AFTER_SLOT}<span className="fx-vf"><span className="fx-v0">{RATE_OLD}</span><span className="fx-v1">{RATE_NEW}</span></span></p>
         <p className="fx-rf2">{RATE_REF}</p>
         <p className="fx-now">Was <span className="fx-sk">{RATE_OLD}</span>, now {RATE_NEW}</p>
        </div>
        <div>
         <h3>{RATE_PAGES_H}</h3>
         <ul className="fx-rl">
          {RATE_PAGES.map(([name, label, hit]) => <li className={hit ? 'fx-hit' : 'fx-no'} key={name}><span>{name}</span><b className="fx-lab">{label}</b></li>)}
         </ul>
        </div>
        <div>
         <h3>{RATE_ANSWERS_H}</h3>
         <ul className="fx-rl">
          {RATE_ANSWERS.map(([before, slot, after]) => (
           <li className="fx-hit" key={before + after}>
            <span>{before}{slot ? <Slot className={before === '"' ? 'slot--post' : undefined} /> : null}{after}</span>
            <b className="fx-lab">Re-check</b>
           </li>
          ))}
         </ul>
        </div>
       </div>
       <div className="fx-rcf">
        <button type="button" className="fx-tg" hidden><span className="fx-ta">{RATE_TOGGLE}</span><span className="fx-tb">{RATE_TOGGLE_PRESSED}</span></button>
        <p className="fx-logw"><span className="fx-log">{RATE_LOG}</span></p>
        <p className="ft-vh" aria-live="polite" id="rclive" />
       </div>
      </div>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-bound" aria-labelledby="ft-bound-h">
     <div className="ft-w">
      <Label>{LBL_BOUND}</Label>
      <h2 id="ft-bound-h">{H2_BOUND}</h2>
      <p className="ft-ans">{BOUND_LEAD}</p>
      <div className="ft-card ft-bad ft-bound">
       <ul role="list">{BOUND_LIST.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="ft-note">{ADVICE}</p>
     </div>
    </section>

    <section className="ft-sec" id="ft-markets" aria-labelledby="ft-mkt-h">
     <div className="ft-w">
      <Label>{LBL_MKT}</Label>
      <h2 id="ft-mkt-h">{H2_MKT}</h2>
      <p className="ft-ans">{MKT_LEAD}</p>
      <div className="fx-mk">
       <p className="fx-mq"><i aria-hidden="true">›</i>{MKT_QUESTION}</p>
       <div className="fx-mt" role="tablist" aria-label={MKT_TABLIST_LABEL}>
        {MARKETS.map((m, i) => (
         <button type="button" role="tab" id={`t-${m.id}`} aria-controls={m.id} aria-selected={i === 0} tabIndex={i === 0 ? 0 : -1} key={m.id}>{m.tab}</button>
        ))}
       </div>
       <div className="fx-mps">
        {MARKETS.map((m, i) => (
         <div className="fx-mkp" role="tabpanel" id={m.id} aria-labelledby={`t-${m.id}`} data-on={i === 0 ? 'true' : 'false'} key={m.id}>
          <h3 className="fx-mkh">{m.name}</h3>
          <dl>
           {m.rows.map((value, r) => (
            <div key={MKT_ROW_LABELS[r]}><dt>{MKT_ROW_LABELS[r]}</dt><dd>{value}</dd></div>
           ))}
          </dl>
          <p className="fx-mf">{MKT_FOOTER}</p>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-surfaces" aria-labelledby="ft-surf-h">
     <div className="ft-w">
      <Label>{LBL_SURF}</Label>
      <h2 id="ft-surf-h">{H2_SURF}</h2>
      <p className="ft-ans">{SURF_LEAD}</p>
      <div className="ft-g3">
       {SURFACES.map(([title, body]) => (
        <div className="ft-card ft-rule" key={title}>
         <h3>{title}</h3>
         <p>{body}</p>
        </div>
       ))}
      </div>
      <div className="ft-srcp">
       <div className="ft-wh"><h3>{LISTINGS_H}</h3></div>
       <ul className="ft-srcl" role="list">
        {LISTINGS.map(name => (
         <li className="ft-row" key={name}>
          <span className="ft-dot" aria-hidden="true" />
          <div><b>{name}</b><small>{LISTINGS_SUB}</small></div>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </section>

    <section className="ft-sec" id="ft-who" aria-labelledby="ft-who-h">
     <div className="ft-w">
      <Label>{LBL_WHO}</Label>
      <h2 id="ft-who-h">{H2_WHO}</h2>
      <p className="ft-ans">{DAL_WHO}</p>
      <div className="ft-g3 ft-segs">
       {SEGMENTS.map(seg => (
        <div className="ft-card ft-seg" id={seg.id} key={seg.id}>
         <h3>{seg.title}</h3>
         <p className="ft-seg-lab">{SEG_FACTS}</p>
         <p>{seg.facts}</p>
         <p className="ft-seg-lab">{SEG_PROMPT}</p>
         <p className="ft-seg-q">{seg.prompt}</p>
        </div>
       ))}
      </div>
      <p className="ft-note">{WHO_OUT}</p>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-map" aria-labelledby="ft-map-h">
     <div className="ft-w">
      <Label>{LBL_MAP}</Label>
      <h2 id="ft-map-h">{H2_MAP}</h2>
      <p className="ft-ans">{DAL_MAP}</p>
      <ol className="ft-map-ol" role="list">
       {STEPS.map(([n, title, line]) => (
        <li className="ft-st" key={n}>
         <div className="ft-ring" aria-hidden="true">{n}</div>
         <h3>{title}</h3>
         <p>{line}</p>
        </li>
       ))}
      </ol>
     </div>
    </section>

    <section className="ft-sec ft-mid" id="mid-cta">
     <div className="ft-w">
      <p className="ft-midlead">{MID_LEAD}</p>
      <Ctas />
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-services" aria-labelledby="ft-svc-h">
     <div className="ft-w">
      <Label>{LBL_SVC}</Label>
      <h2 id="ft-svc-h">{H2_SVC}</h2>
      <p className="ft-ans">{DAL_SVC}</p>
      <div className="ft-g3">
       <div className="ft-card">
        <h3>{SVC_GEO.title}</h3>
        <p>{SVC_GEO.before}<a href={GEO_HREF}>{SVC_GEO.link}</a>{SVC_GEO.after}</p>
       </div>
       {SERVICES.map(([title, line, href]) => (
        <div className="ft-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <Link className="ft-lk" href={href}>{title}</Link>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="ft-sec" id="ft-prompts" aria-labelledby="ft-prompts-h">
     <div className="ft-w">
      <Label>{LBL_PROMPTS}</Label>
      <h2 id="ft-prompts-h">{H2_PROMPTS}</h2>
      <p className="ft-ans">{DAL_PROMPTS}</p>
      <div className="ft-way ft-trk">
       <div className="ft-wh"><span className="ft-cap">{TRACKER_LABEL}</span></div>
       <table>
        <caption className="ft-vh">{TRACKER_CUE}</caption>
        <thead>
         <tr>{TRACKER_HEADS.map(head => <th scope="col" key={head}>{head}</th>)}</tr>
        </thead>
        <tbody>
         {PROMPTS.map(prompt => (
          <tr key={prompt}>
           <th scope="row"><span className="ft-chev" aria-hidden="true">›</span>{prompt}</th>
           <td className="ft-eng">{TRACKER_ENGINES}</td>
           <td><span className="ft-tag">{TRACKER_STATE}</span></td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-90" aria-labelledby="ft-ninety-h">
     <div className="ft-w">
      <Label>{LBL_NINETY}</Label>
      <h2 id="ft-ninety-h">{H2_NINETY}</h2>
      <p className="ft-ans">{DAL_NINETY}</p>
      <ol className="ft-phases" role="list">
       {PHASES.map(([title, line]) => (
        <li className="ft-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
        </li>
       ))}
      </ol>
      <p className="ft-note">{NINETY_LINE}</p>
     </div>
    </section>

    <section className="ft-sec" id="ft-fit" aria-labelledby="ft-fit-h">
     <div className="ft-w">
      <Label>{LBL_FIT}</Label>
      <h2 id="ft-fit-h">{H2_FIT}</h2>
      <p className="ft-ans">{DAL_FIT}</p>
      <div className="ft-split ft-fit">
       <div className="ft-card ft-good">
        <h3>{FIT_YES_H}</h3>
        <ul role="list">{FIT_YES.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
       <div className="ft-card ft-bad">
        <h3>{FIT_NO_H}</h3>
        <ul role="list">{FIT_NO.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
      </div>
     </div>
    </section>

    <section className="ft-sec ft-alt" id="ft-faq" aria-labelledby="ft-faq-h">
     <div className="ft-w">
      <Label>{LBL_FAQ}</Label>
      <h2 id="ft-faq-h">{H2_FAQ}</h2>
      <div className="ft-faq">
       {FAQ.map((item, i) => (
        <details className="ft-fq" key={item.q} open={i === 0}>
         <summary>
          <h3>{item.q}<span className="ft-pm" aria-hidden="true" /></h3>
         </summary>
         <p><FaqBody a={item.a} href={item.href} linkLabel={item.linkLabel} /></p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="ft-logos" id="ft-logos">
     <div className="ft-w">
      <p className="ft-cap" id="ft-proof-label">{PROOF_LABEL}</p>
      <ul className="ft-lr" role="list" aria-labelledby="ft-proof-label">
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

    <section className="ft-sec ft-final" id="ft-final" aria-labelledby="ft-fin-h">
     <div className="ft-w">
      <div className="ft-fin">
       <div className="ft-vap ft-vap-fin" aria-hidden="true" />
       <div className="ft-fin-copy">
        <Label>{LBL_FIN}</Label>
        <h2 id="ft-fin-h">{H2_FIN}</h2>
        <p className="ft-lead ft-lead-fin">{FIN_LEAD}</p>
       </div>
       <Ctas />
      </div>
      <ul className="ft-rel fx-relrow" aria-label="Related services">
       {RELATED.map(link => (
        <li key={link.href}>{link.href.startsWith('http') ? <a href={link.href}>{link.label}</a> : <Link href={link.href}>{link.label}</Link>}</li>
       ))}
      </ul>
     </div>
    </section>
   </div>
   <FintechMotion />
  </Shell>
 );
}
