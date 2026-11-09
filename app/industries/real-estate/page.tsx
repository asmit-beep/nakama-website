import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {
 AUDIENCE, BREADCRUMB, BROKERAGE_FIT, CHIPS, CTA_PRIMARY, CTA_PRIMARY_HREF, CTA_SECONDARY,
 CTA_SECONDARY_HREF, DAL_BROKERAGES, DAL_DEF, DAL_DIFF, DAL_MAP, DAL_NINETY, DAL_PROMPTS,
 DAL_SVC, DAL_TEAMS, DAL_TRUST, DAL_WHO, DAL_WHY, DEF_ENTITY, ECFR_HREF, ECFR_LABEL,
 EVIDENCE_1, EVIDENCE_2, EYEBROW, FAQ, FAIR_AFTER, FAIR_BEFORE, FIN_LEAD, FIT_NO, FIT_NO_H,
 FIT_YES, FIT_YES_H, H1, H2_DEF, H2_FAQ, H2_FIN, H2_FIT, H2_MAP, H2_NINETY, H2_PROMPTS,
 H2_SURFACES, H2_SVC, H2_TRUST, H2_WHO, H2_WHY, H3_BROKERAGES, H3_DIFF, H3_PROFILES, H3_TEAMS,
 HERO_ANSWER_LABEL, HERO_ANSWER_STATE, HERO_NAMED, HERO_PROMPT, HERO_PROMPT_LABEL, LEAD,
 LBL_DEF, LBL_FAQ, LBL_FIN, LBL_FIT, LBL_MAP, LBL_NINETY, LBL_PROMPTS, LBL_SVC, LBL_TRUST,
 LBL_WHO, LBL_WHY, META, MID_LEAD, NINETY_LINE, PHASES, PORTAL_LINE, PREVIEW, PROFILES,
 PROMPT_STATES, PROMPTS, PROOF_LABEL, PROOF_LOGOS, RELATED, SEGMENTS, SERVICE_NAME, SERVICES,
 SLUG, STATE_LABEL, STEPS, SURFACES, TITLE, TREE, TRUST, TRUST_SCOPE, WHO_HEADS, WHO_OUT,
} from './copy';
import './real-estate.css';

/** Preview. PREVIEW true keeps robots noindex, follow. Ship flips the flag. */
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

const serviceLd = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': abs(`${SLUG}#service`),
 name: SERVICE_NAME,
 serviceType: SERVICE_NAME,
 description: META,
 url: abs(SLUG),
 provider: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
 audience: {
  '@type': 'BusinessAudience',
  audienceType: AUDIENCE,
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

function Ctas() {
 return (
  <div className="re-btns">
   <Link className="re-btn re-btn-p" href={CTA_PRIMARY_HREF}>{CTA_PRIMARY}</Link>
   <Link className="re-btn re-btn-s" href={CTA_SECONDARY_HREF}>{CTA_SECONDARY}</Link>
  </div>
 );
}

function Label({children}: {children: string}) {
 return <p className="re-lbl">{children}</p>;
}

function Key() {
 return (
  <span className="re-mark" aria-hidden="true">
   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#a8996f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.2" cy="12" r="3.3" />
    <path d="M10.4 12H20" />
    <path d="M16.2 12v3" />
    <path d="M19 12v2.2" />
   </svg>
  </span>
 );
}

function MapMini({step}: {step: number}) {
 if (step === 1) {
  return (
   <ul className="re-tree" aria-hidden="true">
    <li>Team
     <ul>
      <li className="re-tr"><span>Agent</span><span className="re-tg re-tg-ok">License lookup</span></li>
      <li className="re-tr"><span>Agent</span><span className="re-tg re-tg-fl">Left brokerage</span></li>
     </ul>
    </li>
   </ul>
  );
 }
 if (step === 2) {
  return (
   <ul className="re-tree" aria-hidden="true">
    <li>Office
     <ul>
      <li>Service area</li>
      <li>Team
       <ul>
        <li>Service area</li>
       </ul>
      </li>
     </ul>
    </li>
   </ul>
  );
 }
 if (step === 3) {
  return (
   <ul className="re-tree" aria-hidden="true">
    <li>Listing page
     <ul>
      <li>Status date</li>
      <li>Listing firm named</li>
     </ul>
    </li>
   </ul>
  );
 }
 if (step === 4) {
  return (
   <ul className="re-tree" aria-hidden="true">
    <li>Agent
     <ul>
      <li className="re-tr"><span>Your site</span><span className="re-tg">Owner</span></li>
      <li className="re-tr"><span>Portal profile</span><span className="re-tg">Owner</span></li>
      <li className="re-tr"><span>Google Business Profile</span><span className="re-tg">Owner</span></li>
     </ul>
    </li>
   </ul>
  );
 }
 if (step === 5) {
  return (
   <ul className="re-tree" aria-hidden="true">
    <li>AI answer
     <ul>
      <li>Mentioned</li>
      <li>Cited</li>
      <li>Recommended</li>
     </ul>
    </li>
   </ul>
  );
 }
 return null;
}

function RosterTree() {
 return (
  <ul className="re-tree" role="list">
   <li>
    {TREE[0]}
    <ul role="list">
     <li>
      {TREE[1]}
      <ul role="list">
       <li>
        {TREE[2]}
        <ul role="list">
         <li>{TREE[3]}</li>
        </ul>
       </li>
      </ul>
     </li>
    </ul>
   </li>
  </ul>
 );
}

export default function RealEstateIndustry() {
 return (
  <Shell className="re-page shell-cinema">
   <Crumbs trail={[{name: 'Industries', path: '/industries'}, {name: BREADCRUMB, path: SLUG}]} />
   <JsonLd data={[serviceLd, faqLd]} />
   <div className="re">
    <section className="re-hero" id="re-hero">
     <div className="re-vap" aria-hidden="true" />
     <div className="re-w">
      <nav className="re-crumb" aria-label="Breadcrumb">
       <Link href="/">Home</Link>
       <span className="re-sep" aria-hidden="true">›</span>
       <Link href="/industries">Industries</Link>
       <span className="re-sep" aria-hidden="true">›</span>
       <Link href={SLUG} aria-current="page">{BREADCRUMB}</Link>
      </nav>
      <div className="re-hg">
       <div>
        <p className="re-eye">{EYEBROW}</p>
        <h1>{H1}</h1>
        <p className="re-lead">{LEAD}</p>
        <Ctas />
       </div>
       <figure className="re-panel" aria-labelledby="re-hero-prompt-label">
        <p className="re-pl" id="re-hero-prompt-label"><span>{HERO_PROMPT_LABEL}</span></p>
        <div className="re-prompt"><span className="re-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
        <div className="re-answer">
         <span className="re-pulse" aria-hidden="true" />
         <p className="re-pl"><span>{HERO_ANSWER_LABEL}</span><span className="re-named">{HERO_ANSWER_STATE}</span></p>
         <div className="re-nm"><Key />{HERO_NAMED}</div>
         <div aria-hidden="true">
          <div className="re-line" />
          <div className="re-line re-line-sh" />
          <div className="re-line re-line-xs" />
         </div>
         <div className="re-chips">
          {CHIPS.map(chip => <span className="re-chip" key={chip}>{chip}</span>)}
         </div>
        </div>
       </figure>
      </div>
     </div>
    </section>

    <section className="re-sec" id="re-def" aria-labelledby="re-def-h">
     <div className="re-w re-with-side">
      <Label>{LBL_DEF}</Label>
      <h2 id="re-def-h">{H2_DEF}</h2>
      <p className="re-ans">{DAL_DEF}</p>
      <div className="re-side-card">
       <p className="re-side-lab" id="re-def-covers">Covers</p>
       <ul aria-labelledby="re-def-covers" role="list">
        {['Entity mapping', 'Public license sources', 'Service areas', 'Dated listing sources', 'Portal profile ownership', 'Repeat prompt runs'].map(item => (
         <li key={item}><span className="re-side-dot is-ring" aria-hidden="true" />{item}</li>
        ))}
       </ul>
       <p className="re-side-lab" id="re-def-out">Does not cover</p>
       <ul aria-labelledby="re-def-out" role="list">
        {['IDX builds', 'Website rebuilds', 'Lead buying'].map(item => (
         <li key={item}><span className="re-side-dot is-ring" aria-hidden="true" />{item}</li>
        ))}
       </ul>
      </div>
      <p className="re-sub">{DEF_ENTITY}</p>
      <h3 className="re-h3-gap">{H3_DIFF}</h3>
      <p className="re-ans">{DAL_DIFF}</p>
     </div>
    </section>

    <section className="re-sec re-alt" id="re-why" aria-labelledby="re-why-h">
     <div className="re-w re-with-side">
      <Label>{LBL_WHY}</Label>
      <h2 id="re-why-h">{H2_WHY}</h2>
      <p className="re-ans">{DAL_WHY}</p>
      <div className="re-side-card">
       <p className="re-side-lab" id="re-why-wrong">What a wrong answer looks like</p>
       <ul aria-labelledby="re-why-wrong" role="list">
        {['An agent tied to a brokerage they left', 'A sold listing quoted as active', 'Your office left off a shortlist'].map(item => (
         <li key={item}><span className="re-side-dot is-ring" aria-hidden="true" />{item}</li>
        ))}
       </ul>
      </div>
      <p className="re-sub">{EVIDENCE_1}</p>
      <p className="re-sub">{EVIDENCE_2}</p>
      <p className="re-sub">{PORTAL_LINE}</p>
     </div>
    </section>

    <section className="re-sec" id="re-surfaces" aria-labelledby="re-surfaces-h">
     <div className="re-w">
      <h2 id="re-surfaces-h">{H2_SURFACES}</h2>
      <div className="re-g3">
       {SURFACES.map(([title, body]) => (
        <div className="re-card re-rule" key={title}>
         <h3>{title}</h3>
         <p>{body}</p>
        </div>
       ))}
      </div>
      <div className="re-srcp">
       <div className="re-wh">
        <h3 id="re-profiles-h">{H3_PROFILES}</h3>
       </div>
       <ul className="re-srcl" role="list">
        {PROFILES.map(([name, sub]) => (
         <li className="re-row" key={name}>
          <span className="re-dot" aria-hidden="true" />
          <div>
           <b>{name}</b>
           <small>{sub}</small>
          </div>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </section>

    <section className="re-sec re-alt" id="re-who" aria-labelledby="re-who-h">
     <div className="re-w">
      <Label>{LBL_WHO}</Label>
      <h2 id="re-who-h">{H2_WHO}</h2>
      <p className="re-ans">{DAL_WHO}</p>
      <div className="re-stbl">
       <table>
        <thead>
         <tr>
          {WHO_HEADS.map(head => <th scope="col" key={head}>{head}</th>)}
         </tr>
        </thead>
        <tbody>
         {SEGMENTS.map(row => (
          <tr key={row[0]}>
           <th scope="row" data-l={WHO_HEADS[0]}>{row[0]}</th>
           <td data-l={WHO_HEADS[1]}>{row[1]}</td>
           <td data-l={WHO_HEADS[2]}>{row[2]}</td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
      <p className="re-note">{WHO_OUT}</p>
      <div className="re-block">
       <h3>{H3_BROKERAGES}</h3>
       <p className="re-sub">{DAL_BROKERAGES}</p>
       <p className="re-sub">{BROKERAGE_FIT}</p>
      </div>
      <div className="re-block" id="re-teams">
       <h3>{H3_TEAMS}</h3>
       <p className="re-sub">{DAL_TEAMS}</p>
      </div>
     </div>
    </section>

    <section className="re-sec" id="re-map" aria-labelledby="re-map-h">
     <div className="re-w">
      <Label>{LBL_MAP}</Label>
      <h2 id="re-map-h">{H2_MAP}</h2>
      <p className="re-ans">{DAL_MAP}</p>
      <ol className="re-map-ol" role="list">
       {STEPS.map(([n, title, line], i) => (
        <li className="re-st" key={n}>
         <div className="re-ring" aria-hidden="true">{n}</div>
         <h3>{title}</h3>
         <p>{line}</p>
         {i === 0 ? <RosterTree /> : <MapMini step={i} />}
        </li>
       ))}
      </ol>
     </div>
    </section>

    <section className="re-sec re-mid" id="mid-cta">
     <div className="re-w">
      <p className="re-midlead">{MID_LEAD}</p>
      <Ctas />
     </div>
    </section>

    <section className="re-sec" id="re-services" aria-labelledby="re-svc-h">
     <div className="re-w">
      <Label>{LBL_SVC}</Label>
      <h2 id="re-svc-h">{H2_SVC}</h2>
      <p className="re-ans">{DAL_SVC}</p>
      <div className="re-g3">
       {SERVICES.map(([title, line, href]) => (
        <div className="re-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
         <Link className="re-lk" href={href}>{title}</Link>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="re-sec re-alt" id="re-trust" aria-labelledby="re-trust-h">
     <div className="re-w">
      <Label>{LBL_TRUST}</Label>
      <h2 id="re-trust-h">{H2_TRUST}</h2>
      <p className="re-ans">{DAL_TRUST}</p>
      <p className="re-sub">{TRUST_SCOPE}</p>
      <div className="re-g3 re-trust-grid">
       {TRUST.map(step => (
        <div className="re-card" key={step.title}>
         <h3>{step.title}</h3>
         {step.fair ? (
          <p>
           {FAIR_BEFORE}
           <a href={ECFR_HREF}>{ECFR_LABEL}</a>
           {FAIR_AFTER}
          </p>
         ) : <p>{step.body}</p>}
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="re-sec" id="re-prompts" aria-labelledby="re-prompts-h">
     <div className="re-w re-split re-split-start">
      <div>
       <Label>{LBL_PROMPTS}</Label>
       <h2 id="re-prompts-h">{H2_PROMPTS}</h2>
       <p className="re-ans">{DAL_PROMPTS}</p>
       <ul className="re-pls" role="list">
        {PROMPTS.map(prompt => <li key={prompt}>{prompt}</li>)}
       </ul>
      </div>
      <div className="re-way re-states">
       <div className="re-wh">
        <span className="re-cap">{STATE_LABEL}</span>
       </div>
       <div className="re-wq"><span className="re-chev" aria-hidden="true">›</span>{HERO_PROMPT}</div>
       {PROMPT_STATES.map(row => (
        <div className="re-state" key={row.engine}>
         <span className="re-bn">{HERO_NAMED}</span>
         <span className="re-eng">{row.engine}</span>
         <span className={row.hot ? 're-tag is-hot' : 're-tag'}>{row.state}</span>
        </div>
       ))}
      </div>
     </div>
    </section>

    <section className="re-sec re-alt" id="re-90" aria-labelledby="re-ninety-h">
     <div className="re-w">
      <Label>{LBL_NINETY}</Label>
      <h2 id="re-ninety-h">{H2_NINETY}</h2>
      <p className="re-ans">{DAL_NINETY}</p>
      <ol className="re-phases" role="list">
       {PHASES.map(([title, line]) => (
        <li className="re-card" key={title}>
         <h3>{title}</h3>
         <p>{line}</p>
        </li>
       ))}
      </ol>
      <p className="re-note">{NINETY_LINE}</p>
     </div>
    </section>

    <section className="re-sec" id="re-fit" aria-labelledby="re-fit-h">
     <div className="re-w">
      <Label>{LBL_FIT}</Label>
      <h2 id="re-fit-h">{H2_FIT}</h2>
      <div className="re-split re-fit">
       <div className="re-card re-good">
        <h3>{FIT_YES_H}</h3>
        <ul role="list">{FIT_YES.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
       <div className="re-card re-bad">
        <h3>{FIT_NO_H}</h3>
        <ul role="list">{FIT_NO.map(item => <li key={item}>{item}</li>)}</ul>
       </div>
      </div>
     </div>
    </section>

    <section className="re-sec re-alt" id="re-faq" aria-labelledby="re-faq-h">
     <div className="re-w">
      <Label>{LBL_FAQ}</Label>
      <h2 id="re-faq-h">{H2_FAQ}</h2>
      <div className="re-faq">
       {FAQ.map((item, i) => (
        <details className="re-fq" key={item.q} open={i === 0}>
         <summary>
          <h3>{item.q}<span className="re-pm" aria-hidden="true" /></h3>
         </summary>
         <p><FaqBody a={item.a} href={item.href} linkLabel={item.linkLabel} /></p>
        </details>
       ))}
      </div>
     </div>
    </section>

    <section className="re-rel-sec">
     <div className="re-w">
      <ul className="re-rel" aria-label="Related services">
       {RELATED.map(link => (
        <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
       ))}
      </ul>
     </div>
    </section>

    <section className="re-logos" id="re-logos">
     <div className="re-w">
      <p className="re-cap" id="re-proof-label">{PROOF_LABEL}</p>
      <ul className="re-lr" role="list" aria-labelledby="re-proof-label">
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

    <section className="re-sec re-final" id="re-final" aria-labelledby="re-fin-h">
     <div className="re-w">
      <div className="re-fin">
       <div className="re-vap re-vap-fin" aria-hidden="true" />
       <div className="re-fin-copy">
        <Label>{LBL_FIN}</Label>
        <h2 id="re-fin-h">{H2_FIN}</h2>
        <p className="re-lead re-lead-fin">{FIN_LEAD}</p>
       </div>
       <Ctas />
      </div>
     </div>
    </section>
   </div>
  </Shell>
 );
}
