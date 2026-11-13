import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import Link from 'next/link';
import {preload} from 'react-dom';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 ACCESS_NOTE, AEO_NOTE, AUDIENCE, BREADCRUMB, BUSINESS_LINE, CARDS, COVERS, COVERS_H, CTA_PRIMARY, CTA_PRIMARY_HREF,
 CTA_SECONDARY, CTA_SECONDARY_HREF, DAL_S1, DAL_S11, DAL_S2, DAL_S3, DAL_S4, DAL_S5, DAL_S6, DAL_S7, DAL_S8, DAL_S9,
 DIFF_HEADS, DIFF_LEAD, DIFF_ROWS, EYEBROW, FACTS_LABEL, FAQ, FIT_NO, FIT_NO_H, FIT_YES, FIT_YES_H, GO_LIVE_DATE, H1,
 H2_FAQ, H2_S1, H2_S11, H2_S2, H2_S3, H2_S4, H2_S5, H2_S6, H2_S7, H2_S8, H2_S9, H3_DIFF, HERO_BACK_TABS, LEAD,
 LISTINGS, LISTINGS_H, LISTINGS_NODE, LOGOS, LOGOS_LABEL, MAP, MAP_TAB, MARKET_LABEL, MARKET_LINE, META, MID_Q,
 MISMATCH_CUR, MISMATCH_LABEL, MISMATCH_PREV, MISMATCH_ROW, MISMATCH_SR, MODIFIED_DATE, NINETY_NOTE, NOT_COVERED,
 NOT_COVERED_H, OUT_LINE, PHASES, PRACTICE_LABEL, PRACTICE_LINE, PRACTICES, PREVIEW, RELATED, RELATED_LABEL,
 SEG_HEADS, SEG_ROWS, SERVICE_NAME, SERVICES, SLUG, SOURCE_NOTE, SOURCE_TYPES, SRC_STEP_FN, SRC_STEPS, SUB_S2, TITLE,
 type PromptCard,
} from './copy';
import './law-firms.css';

/** PREVIEW true: noindex, follow. The flip sets PREVIEW false (index, follow with the max-* tokens, as fintech). */
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

/** Service only. No LegalService, Attorney, Person, Review, AggregateRating, Product or Offer nodes (Dodai MUST NOT). */
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
 areaServed: 'Worldwide',
};

/** WebPage (fintech pattern). Dates only once GO_LIVE_DATE is set at the flip. */
const webPageLd = {
 '@context': 'https://schema.org',
 '@type': 'WebPage',
 '@id': abs(`${SLUG}#webpage`),
 url: abs(SLUG),
 name: TITLE,
 description: META,
 inLanguage: 'en',
 isPartOf: {'@id': `${SITE_URL}/#website`},
 publisher: {'@id': `${SITE_URL}/#organization`},
 about: {'@id': abs(`${SLUG}#service`)},
 ...(GO_LIVE_DATE ? {datePublished: GO_LIVE_DATE, dateModified: MODIFIED_DATE || GO_LIVE_DATE} : {}),
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

/** Renders [placeholder] tokens as span.ph with muted brackets; a trailing period stays inside so it never wraps alone. */
function Ph({text}: {text: string}) {
 const out: ReactNode[] = [];
 const re = /\[([^\]]+)\](\.?)/g;
 let last = 0;
 let m: RegExpExecArray | null;
 let i = 0;
 while ((m = re.exec(text))) {
  if (m.index > last) out.push(text.slice(last, m.index));
  out.push(<span className="ph" key={i++}><b>[</b>{m[1]}<b>]</b>{m[2]}</span>);
  last = m.index + m[0].length;
 }
 if (last < text.length) out.push(text.slice(last));
 return <>{out}</>;
}

/** Ember footnote marker. The digit is CSS generated content (empty alt), so raw text has no stray "1". */
function Fn() {
 return <span className="fn" aria-hidden="true" />;
}
function Sup() {
 return <span className="sup" aria-hidden="true" />;
}

function Ctas({className = ''}: {className?: string}) {
 return (
  <div className={`btns ${className}`.trim()}>
   <Link className="btn btn-p" href={CTA_PRIMARY_HREF}>{CTA_PRIMARY}</Link>
   <Link className="btn btn-s" href={CTA_SECONDARY_HREF}>{CTA_SECONDARY}</Link>
  </div>
 );
}

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

function CardBody({card}: {card: PromptCard}) {
 return (
  <div className="ex-body">
   <span className="ex-ln" aria-hidden="true" />
   <div className="ex-tx">
    <p className="ex-q"><Ph text={card.prompt} /></p>
    <p className="ex-a"><Ph text={card.answer} /><Fn /></p>
    <span className="ex-fr" aria-hidden="true" />
    <p className="ex-fn"><Sup />{card.cite}</p>
   </div>
  </div>
 );
}

function Tick() {
 return <svg className="tick" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Arrow() {
 return <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

function Table({heads, rows, className, muted}: {heads: readonly string[]; rows: readonly (readonly string[])[]; className: string; muted: number}) {
 return (
  <div className={`tw ${className}`}>
   <table>
    <thead><tr>{heads.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
    <tbody>
     {rows.map(row => (
      <tr key={row[0]}>
       <th scope="row" data-l={heads[0]}>{row[0]}</th>
       {row.slice(1).map((cell, i) => <td key={i} data-l={heads[i + 1]} className={i + 1 === muted ? 'mu' : undefined}><Ph text={cell} /></td>)}
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}

/** Server Component. Every word is in the server HTML; no Reveal, no client state. The only motion is the hero card's run-once CSS draw. */
export default function LawFirmsIndustry() {
 preload('/fonts/manrope-700.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-600.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-500.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 preload('/fonts/manrope-400.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
 const hero = CARDS[0];
 return (
  <Shell className="lf-page shell-cinema">
   <Crumbs trail={[{name: 'Industries', path: '/industries'}, {name: BREADCRUMB, path: SLUG}]} />
   <JsonLd data={[webPageLd, serviceLd, faqLd]} />
   <div className="lf">
    <section className="lf-hero" aria-labelledby="h1">
     <div className="glow" aria-hidden="true" />
     <div className="w">
      <nav aria-label="Breadcrumb">
       <p className="crumb">
        <Link href="/">Home</Link><span className="sep" aria-hidden="true">›</span>
        <Link href="/industries">Industries</Link><span className="sep" aria-hidden="true">›</span>
        <Link href={SLUG} aria-current="page">{BREADCRUMB}</Link>
       </p>
      </nav>
      <div className="hg">
       <div className="hl">
        <p className="eye">{EYEBROW}</p>
        <h1 id="h1">{H1}</h1>
        <p className="lead">{LEAD}</p>
        <Ctas className="hb" />
        <div className="meta">
         <p><b>{PRACTICE_LABEL}</b> {PRACTICE_LINE}</p>
         <p><b>{MARKET_LABEL}</b> {MARKET_LINE}</p>
        </div>
       </div>
       <div className="hr">
        <figure className="exs hero-stack draw" aria-labelledby="hx1-tab">
         <div className="ex front"><span className="ex-tab" id="hx1-tab">{hero.tab}</span><CardBody card={hero} /></div>
         <div className="ex bk bk1" aria-hidden="true"><span className="ex-tab" data-l={HERO_BACK_TABS[0]} /></div>
         <div className="ex bk bk2" aria-hidden="true"><span className="ex-tab" data-l={HERO_BACK_TABS[1]} /></div>
        </figure>
       </div>
      </div>
     </div>
    </section>

    <section className="sec" id="s1" aria-labelledby="s1-h">
     <div className="w">
      <h2 id="s1-h">{H2_S1}</h2>
      <p className="ans">{DAL_S1}</p>
      <div className="exg">
       {CARDS.map((card, i) => (
        <figure className="exs" aria-labelledby={`c${i + 1}-tab`} key={card.tab}>
         <div className="ex front"><span className="ex-tab" id={`c${i + 1}-tab`}>{card.tab}</span><CardBody card={card} /></div>
        </figure>
       ))}
      </div>
     </div>
    </section>

    <section className="sec alt" id="s2" aria-labelledby="s2-h">
     <div className="w">
      <div className="g-def">
       <div>
        <h2 id="s2-h">{H2_S2}</h2>
        <p className="ans">{DAL_S2}</p>
        <p className="sub">{SUB_S2}</p>
       </div>
       <div className="rcols">
        <div className="rc"><h3 className="cap">{COVERS_H}</h3><ul>{COVERS.map(t => <li key={t}>{t}</li>)}</ul></div>
        <div className="rc mu"><h3 className="cap">{NOT_COVERED_H}</h3><ul>{NOT_COVERED.map(t => <li key={t}>{t}</li>)}</ul></div>
       </div>
      </div>
      <p className="note">{AEO_NOTE}</p>
      <h3 className="h3l">{H3_DIFF}</h3>
      <p className="sub0">{DIFF_LEAD}</p>
      <Table heads={DIFF_HEADS} rows={DIFF_ROWS} className="t-vs" muted={1} />
     </div>
    </section>

    <section className="sec" id="s3" aria-labelledby="s3-h">
     <div className="w">
      <h2 id="s3-h">{H2_S3}</h2>
      <p className="ans">{DAL_S3}</p>
      <div className="stl">
       {SOURCE_TYPES.map(st => (
        <div className="st" key={st.h}>
         <h3>{st.h}</h3>
         <p>{st.p}</p>
         {st.cites?.map(([pre, bold, rest]) => <p className="cite" key={bold}>{pre}<b>{bold}</b>{rest}</p>)}
         {st.note ? <p className="note sm">{st.note}</p> : null}
         {st.after ? <p>{st.after}</p> : null}
        </div>
       ))}
      </div>
      <figure className="oa" aria-labelledby="oa-h">
       <h3 id="oa-h" className="h3l">{LISTINGS_H}</h3>
       <div className="oa-g">
        <div className="oa-node oa-doc" aria-hidden="true">
         <span className="oa-tab" /><span className="oa-ln" />
         <span className="oa-tx"><span className="oa-nm"><Ph text={LISTINGS_NODE} /></span><span className="oa-fr" /></span>
        </div>
        <ul className="oa-l">
         {LISTINGS.map(([src, facts], i) => i === MISMATCH_ROW ? (
          <li className="x" key={src}>
           <span className="src">{src}</span><span className="f">{facts}</span>
           <span className="mm"><s aria-hidden="true">{MISMATCH_PREV}</s><span className="cur">{MISMATCH_CUR}</span><small>{MISMATCH_LABEL}</small></span>
           <span className="vh" data-sr-only="">{MISMATCH_SR}</span>
          </li>
         ) : (
          <li key={src}><span className="src">{src}</span><span className="f">{facts}</span><Tick /></li>
         ))}
        </ul>
       </div>
      </figure>
     </div>
    </section>

    <section className="sec alt" id="s4" aria-labelledby="s4-h">
     <div className="w">
      <h2 id="s4-h">{H2_S4}</h2>
      <p className="ans">{DAL_S4}</p>
      <ol className="paras">
       {SRC_STEPS.map(([n, h, p], i) => (
        <li className="para" key={n}>
         <p className="pn" aria-hidden="true"><span className="pm">¶</span>{n}</p>
         <h3>{h}{i === SRC_STEP_FN ? <Fn /> : null}</h3>
         <p>{p}</p>
        </li>
       ))}
      </ol>
      <div className="srcn"><span className="srcn-r" aria-hidden="true" /><p><Sup />{SOURCE_NOTE}</p></div>
      <p className="note">{ACCESS_NOTE}</p>
     </div>
    </section>

    <section className="sec" id="s5" aria-labelledby="s5-h">
     <div className="w">
      <h2 id="s5-h">{H2_S5}</h2>
      <p className="ans">{DAL_S5}</p>
      <Table heads={SEG_HEADS} rows={SEG_ROWS} className="t-seg" muted={2} />
      <div className="pcg">
       {PRACTICES.map(([h, facts, prompt]) => (
        <div className="pc" key={h}>
         <h3>{h}</h3>
         <p><b>{FACTS_LABEL}</b> {facts}</p>
         <p className="pq"><Ph text={prompt} /></p>
        </div>
       ))}
      </div>
      <p className="sub0 mt">{BUSINESS_LINE}</p>
      <p className="note">{OUT_LINE}</p>
     </div>
    </section>

    <section className="sec map-sec alt" id="s6" aria-labelledby="s6-h">
     <div className="w">
      <h2 id="s6-h">{H2_S6}</h2>
      <p className="ans">{DAL_S6}</p>
      <div className="map">
       <span className="map-tab" aria-hidden="true">{MAP_TAB}</span>
       <div className="map-in">
        <span className="map-ln" aria-hidden="true" />
        <ol className="map-g">
         {MAP.map(([h, p], i) => (
          <li className="art" key={h}>
           <p className="secn" aria-hidden="true"><span className="s">§</span><span className="n">{i + 1}</span></p>
           <h3>{h}</h3>
           <p>{p}</p>
          </li>
         ))}
        </ol>
       </div>
      </div>
      <div className="mid">
       <p className="midq">{MID_Q}</p>
       <Ctas />
      </div>
     </div>
    </section>

    <section className="sec" id="s7" aria-labelledby="s7-h">
     <div className="w">
      <h2 id="s7-h">{H2_S7}</h2>
      <p className="ans">{DAL_S7}</p>
      <ul className="lkg">
       {SERVICES.map(([h, href, p]) => (
        <li className="lk" key={href}>
         <h3><Link href={href}>{h}</Link></h3>
         <p>{p}</p>
         <span className="la" aria-hidden="true"><Arrow /></span>
        </li>
       ))}
      </ul>
     </div>
    </section>

    <section className="sec alt" id="s8" aria-labelledby="s8-h">
     <div className="w">
      <h2 id="s8-h">{H2_S8}</h2>
      <p className="ans">{DAL_S8}</p>
      <ol className="ph3">
       {PHASES.map(([cap, p]) => <li className="phs" key={cap}><p className="cap">{cap}</p><p>{p}</p></li>)}
      </ol>
      <p className="note">{NINETY_NOTE}</p>
     </div>
    </section>

    <section className="sec" id="s9" aria-labelledby="s9-h">
     <div className="w">
      <h2 id="s9-h">{H2_S9}</h2>
      <p className="ans">{DAL_S9}</p>
      <div className="fit">
       <div className="rc"><h3>{FIT_YES_H}</h3><ul>{FIT_YES.map(t => <li key={t}>{t}</li>)}</ul></div>
       <div className="rc mu"><h3>{FIT_NO_H}</h3><ul>{FIT_NO.map(t => <li key={t}>{t}</li>)}</ul></div>
      </div>
     </div>
    </section>

    <section className="logos" aria-labelledby="lg-h">
     <div className="w">
      <p className="lgh" id="lg-h">{LOGOS_LABEL}</p>
      <ul className="lr">
       {LOGOS.map(logo => (
        <li key={logo.name}>
         {/* eslint-disable-next-line @next/next/no-img-element -- existing client marks, fixed size */}
         <img src={logo.src} alt={logo.word ? logo.name : ''} width={logo.w} height={logo.h} loading="lazy" decoding="async" />
         {logo.word ? null : <span>{logo.name}</span>}
        </li>
       ))}
      </ul>
     </div>
    </section>

    <section className="sec alt" id="s10" aria-labelledby="s10-h">
     <div className="w faqw">
      <div><h2 id="s10-h">{H2_FAQ}</h2></div>
      <div className="lf-faq">
       {FAQ.map((f, i) => (
        <details id={f.id} key={f.id} open={i === 0 ? true : undefined}>
         <summary><h3>{f.q}</h3><span className="pm2" aria-hidden="true" /></summary>
         <p><FaqBody a={f.a} href={f.href} linkLabel={f.linkLabel} /></p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="sec close" id="s11" aria-labelledby="s11-h">
     <div className="w">
      <h2 id="s11-h">{H2_S11}</h2>
      <p className="ans">{DAL_S11}</p>
      <Ctas />
      <nav className="rel" aria-label="Related services and industries">
       <span className="rl">{RELATED_LABEL}</span>
       <ul>{RELATED.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
      </nav>
     </div>
    </section>
   </div>
  </Shell>
 );
}
