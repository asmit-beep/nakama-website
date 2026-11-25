import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {pageMeta, Crumbs} from '@/lib/seo';
import {Shell} from '../site';
import {IpAtmos, IpHero, IpSection, IpHead, LinkBtn} from '../inner/kit';
import {META, PREVIEW, SLUG, TITLE} from './copy';
import {WorkGrid} from './cards';
import {ProofBoard} from './proof';
import {HubMotion} from './hub-motion';
import './hub.css';

/** Preview hub. PREVIEW true keeps robots noindex,follow. */
const robots: Metadata['robots'] = PREVIEW
  ? {index: false, follow: true, googleBot: {index: false, follow: true}}
  : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
  ...pageMeta(SLUG, {title: TITLE, description: META}),
  robots,
};

export default function Work() {
  return (
    <Shell className="work-page shell-cinema ip-page work-hub">
      <div id="work-hub">
        <IpAtmos tone="ember"/>
        <Crumbs trail={[{name: 'Work', path: '/work'}]}/>
        <IpHero
          tone="ember"
          eyebrow="Case studies"
          title={<>Case studies.{" "}</>}
          accent="How we got brands into AI answers."
          lead="One published case study and four more clients with live, verifiable placements across Google AI Overviews, AI Mode, ChatGPT, Perplexity and YouTube."
        >
          <LinkBtn href="/resources#articles" ghost>Read the field notes</LinkBtn>
        </IpHero>
        <section className="wk-section" aria-label="Client work">
          <WorkGrid/>
        </section>
        <IpSection id="proof-board">
          <IpHead
            eyebrow="Verify it yourself"
            title={<>Live placements you can <em>run today.</em></>}
            lead="Copy a tracked query and open it on the engine that recorded the placement. Live answers vary by account, location and date."
          />
          <ProofBoard/>
        </IpSection>
        <IpSection id="how-we-count">
          <IpHead eyebrow="How we count" title={<>Verified answers, <em>never traffic guesses.</em></>}/>
          <div className="ip-factors">
            <div className="ip-factor">
              <span className="num">01</span>
              <h3>Dated incognito captures</h3>
              <p>Every result comes from dated screenshots of real AI answers typed without a year in Incognito.</p>
            </div>
            <div className="ip-factor">
              <span className="num">02</span>
              <h3>Counted once per answer</h3>
              <p>An answer counts once, however many screenshots it took to capture.</p>
            </div>
            <div className="ip-factor">
              <span className="num">03</span>
              <h3>No traffic estimates</h3>
              <p>We report observed mentions, citations, and live checkable queries separately from analytics estimates.</p>
            </div>
          </div>
        </IpSection>
        <section className="ip-section ip-cta-wrap">
          <div className="ip-wrap">
            <div className="ip-cta">
              <div className="ip-cta-glow" aria-hidden="true"/>
              <div>
                <span className="ip-eyebrow"><i aria-hidden="true"/>Next</span>
                <h2>Want your brand in the next answer?</h2>
                <p>Every engagement is shaped around your product, your buyers and your category. Tell us where you are, and we will come back with a plan and a quote.</p>
              </div>
              <div className="ip-cta-actions">
                <Link className="ip-btn" href="/pricing#quote">
                  Get your custom quote
                  <i aria-hidden="true"><ArrowUpRight size={16}/></i>
                </Link>
                <Link className="ip-ghost" href="/contact">Contact us</Link>
              </div>
            </div>
          </div>
        </section>
        <HubMotion/>
      </div>
    </Shell>
  );
}
