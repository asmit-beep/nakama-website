import type {Metadata} from 'next';
import Link from 'next/link';
import {preload} from 'react-dom';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 ADVICE, ANSWER_1, ANSWER_1_CHIP, ANSWER_2, ANSWER_2_CHIP, ANSWER_3, ANSWER_3_CHIP, AUDIENCE,
 BOUND_LEAD, BOUND_LIST, BREADCRUMB, COVERS, CTA_PRIMARY, CTA_PRIMARY_HREF, CTA_SECONDARY,
 CTA_SECONDARY_HREF, DAL_DEF, DAL_DIFF, DAL_FIT, DAL_MAP, DAL_NINETY, DAL_PROMPTS, DAL_SRC, DAL_SVC,
 DAL_WHO, DAL_WHY, DATA_LINE, DEF_ENTITY, DIFF_HEADS, DIFF_ROWS, ENGINES, EVIDENCE, EYEBROW, FAQ,
 FIGURE_CAPTION, FIN_LEAD, FIT_NO, FIT_NO_H, FIT_YES, FIT_YES_H, GEO_HREF, H1, H2_BOUND, H2_DEF,
 H2_FAQ, H2_FIN, H2_FIT, H2_MAP, H2_MKT, H2_NINETY, H2_PROMPTS, H2_SRC, H2_SURF, H2_SVC, H2_WHO,
 H2_WHY, H3_DIFF, HERO_ANSWER_LABEL, HERO_ANSWER_STATE, HERO_NAMED, HERO_PILL, HERO_PROMPT,
 HERO_PROMPT_LABEL, LBL_BOUND, LBL_DEF, LBL_FAQ, LBL_FIN, LBL_FIT, LBL_MAP, LBL_MKT, LBL_NINETY,
 LBL_PROMPTS, LBL_SRC, LBL_SURF, LBL_SVC, LBL_WHO, LBL_WHY, LEAD, LISTINGS, LISTINGS_H,
 LISTINGS_SUB, MARKET_LINKS, MARKETS, MARKETS_LABEL, MARKETS_LINE, META, MID_LEAD, MKT_FOOTER,
 MKT_LEAD, MKT_QUESTION, MKT_ROW_LABELS, NINETY_LINE, NOT_COVERED, PHASES, PREVIEW, PROMPTS,
 PROOF_LABEL, PROOF_LOGOS, RATE_ANSWERS, RATE_ANSWERS_H, RATE_CARD_LABEL, RATE_CHANGED,
 RATE_HEADING, RATE_LOG, RATE_PAGES, RATE_PAGES_H, RATE_PILL, RATE_SOURCE, RATE_TOGGLE,
 RATE_TOGGLE_PRESSED, RELATED, REPLAY, SCOPE_LINE, SECTORS, SECTORS_LABEL, SEG_FACTS, SEG_PROMPT,
 SEGMENTS, SERVICE_NAME, SERVICES, SLUG, SOURCES, SOURCES_LABEL, SRC_HEAD, SRC_REF, SRC_ROWS,
 SRC_STEPS, STEPS, STEPS_LABEL, SURF_LEAD, SURFACES, SVC_GEO, TITLE, TRACE_STEPS, TRACKER_LABEL,
 UPDATED, WHO_OUT, WRONG_LABEL, WRONG_PILL, WRONG_ROWS, WRONG_SAID, WRONG_SAYS,
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

/** Schema per HIBIKU V1.2.3 "Schema (Dodai)". Service name is Dodai's call (see copy.ts). */
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

function Glyph() {
 return (
  <span className="fx-mono" aria-hidden="true">
   <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9c97b4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3.5h8.5l4 4v13H6z" />
    <path d="M14.5 3.5v4h4" />
    <path d="M8.8 11.5h6.8" />
    <path d="M9 16.2l1.6 1.6 3.2-3.2" />
   </svg>
  </span>
 );
}

function HeroPanel() {
 return (
  <div className="fx-hr">
   <div className="fx-panel" id="trail" data-s="4">
    <p className="fx-pl"><span>{HERO_PROMPT_LABEL}</span><span className="fx-sb">{HERO_PILL}</span></p>
    <div className="fx-prompt"><i aria-hidden="true">›</i><span>{HERO_PROMPT}</span></div>
    <div className="fx-trail">
     <div className="fx-src">
      <p className="fx-sh"><span className="fx-k">{SRC_HEAD[0]}</span><span aria-hidden="true">·</span><span>{SRC_HEAD[1]}</span></p>
      <dl className="fx-rows">
       {SRC_ROWS.map(([label, value], i) => (
        <div className={i === 0 ? 'fx-r fx-cl' : 'fx-r'} key={label}>
         {i === 0 ? <><span className="fx-hb" aria-hidden="true" /><span className="fx-lr" aria-hidden="true" /></> : null}
         <dt>{label}</dt>
         <dd>{value}</dd>
        </div>
       ))}
      </dl>
      <p className="fx-ref"><span>{SRC_REF[0]}</span><span aria-hidden="true">·</span><span>{SRC_REF[1]}</span></p>
     </div>
     <div className="fx-ans2">
      <p className="fx-pl"><span>{HERO_ANSWER_LABEL}</span><span>{HERO_ANSWER_STATE}</span></p>
      <div className="fx-nm"><Glyph />{HERO_NAMED}</div>
      <p className="fx-cla fx-k1"><span className="fx-lr" aria-hidden="true" /><span>{ANSWER_1[0]}<span className="fx-mv">{ANSWER_1[1]}</span>{ANSWER_1[2]}</span><button type="button" className="fx-chip fx-c1">{ANSWER_1_CHIP}</button></p>
      <p className="fx-cla fx-k2"><span className="fx-lr" aria-hidden="true" /><span>{ANSWER_2}</span><button type="button" className="fx-chip fx-c2">{ANSWER_2_CHIP}</button></p>
      <p className="fx-cla fx-k3"><span className="fx-lr" aria-hidden="true" /><span>{ANSWER_3}</span><button type="button" className="fx-chip fx-c3">{ANSWER_3_CHIP}</button></p>
      <div className="fx-eng">
       {ENGINES.map(row => (
        <span key={row.engine}>{row.engine} <b className={row.hot ? 'fx-rec' : undefined}>{row.state}</b></span>
       ))}
      </div>
     </div>
     <span className="fx-cx" aria-hidden="true"><i className="fx-s1" /><i className="fx-s2" /><i className="fx-s3" /></span>
     <span className="fx-tok" aria-hidden="true">[fee]</span>
    </div>
    <p className="ft-vh">{FIGURE_CAPTION}</p>
   </div>
   <div className="fx-steps">
    <ol aria-label={STEPS_LABEL}>
     {TRACE_STEPS.map(([label], i) => (
      <li key={label}>
       <button type="button" className="fx-st" aria-current={i === 3 ? 'step' : undefined}><span>{i + 1}</span>{label}</button>
      </li>
     ))}
    </ol>
    <button type="button" className="fx-rp" hidden>{REPLAY}</button>
    <p className="fx-scap" aria-live="polite">
     {TRACE_STEPS.map(([, caption], i) => <span key={caption} hidden={i !== 3}>{caption}</span>)}
    </p>
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
        <p className="fx-adv">{ADVICE}</p>
        <p className="fx-adv fx-upd">{UPDATED}</p>
       </div>
       <HeroPanel />
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
       <div className="fx-tc"><span className="fx-cap">{WRONG_LABEL}</span><span className="fx-cap fx-sb">{WRONG_PILL}</span></div>
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
       <div className="fx-tc"><h3 className="fx-cap fx-rch">{RATE_HEADING}</h3><span className="fx-cap fx-sb">{RATE_PILL}</span></div>
       <div className="fx-rcg">
        <div className="fx-rsrc">
         <small className="fx-k">{RATE_CARD_LABEL}</small>
         <p className="fx-v">{RATE_SOURCE[0]}</p>
         <p className="fx-rf2">{`${RATE_SOURCE[1]} · ${RATE_SOURCE[2]}`}</p>
         <p className="fx-now">{RATE_CHANGED}</p>
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
          {RATE_ANSWERS.map(([name, label, hit]) => <li className={hit ? 'fx-hit' : 'fx-no'} key={name}><span>{name}</span><b className="fx-lab">{label}</b></li>)}
         </ul>
        </div>
       </div>
       <div className="fx-rcf">
        <button type="button" className="fx-tg" aria-pressed="true" hidden><span className="fx-ta">{RATE_TOGGLE}</span><span className="fx-tb">{RATE_TOGGLE_PRESSED}</span></button>
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
       <div className="fx-mt" role="tablist" aria-label={MARKETS_LABEL}>
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
     <div className="ft-w ft-split ft-split-start">
      <div>
       <Label>{LBL_PROMPTS}</Label>
       <h2 id="ft-prompts-h">{H2_PROMPTS}</h2>
       <p className="ft-ans">{DAL_PROMPTS}</p>
       <ul className="ft-pls" role="list">
        {PROMPTS.map(prompt => <li key={prompt}>{prompt}</li>)}
       </ul>
      </div>
      <div className="ft-way ft-states">
       <div className="ft-wh"><span className="ft-cap">{TRACKER_LABEL}</span></div>
       <div className="ft-wq"><span className="ft-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
       {ENGINES.map(row => (
        <div className="ft-state" key={row.engine}>
         <span className="ft-bn">{HERO_NAMED}</span>
         <span className="ft-eng">{row.engine}</span>
         <span className={row.hot ? 'ft-tag is-hot' : 'ft-tag'}>{row.state}</span>
        </div>
       ))}
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
