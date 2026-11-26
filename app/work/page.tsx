import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {pageMeta, Crumbs, JsonLd, abs} from '@/lib/seo';
import {shippedCasePages} from '@/lib/feed';
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

const WORK_IMAGE = {
  url: '/work/og.png',
  width: 1200,
  height: 630,
  alt: 'Nakama Growth case studies: StarAgile, Synup, Inventive AI, HubEngage and BacklinkOS',
  type: 'image/png',
};

export const metadata: Metadata = {
  ...pageMeta(SLUG, {title: TITLE, description: META, image: WORK_IMAGE}),
  robots,
};

/** Same ship instant as the StarAgile case study. Both pages went live together. */
const SHIPPED_AT = '2026-11-26T04:55:00+05:30';

const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': abs(`${SLUG}#webpage`),
  url: abs(SLUG),
  name: 'Case studies',
  isPartOf: {'@id': abs('/#website')},
  datePublished: SHIPPED_AT,
  dateModified: SHIPPED_AT,
  publisher: {'@id': abs('/#organization')},
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: shippedCasePages.map((page, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(page.path),
      name: page.headline,
    })),
  },
};

export default function Work() {
  return (
    <Shell className="work-page shell-cinema ip-page work-hub">
      <div id="work-hub">
        <IpAtmos tone="ember"/>
        <Crumbs trail={[{name: 'Case studies', path: '/work'}]}/>
        <JsonLd data={collectionLd}/>
        <IpHero
          tone="ember"
          eyebrow="Nakama Growth case studies"
          title={<>Case Studies: How Nakama Growth Gets Brands Named </>}
          accent="in AI Answers"
          lead={<>Nakama Growth helps B2B SaaS and edtech brands earn citations and first-row placements across Google AI Overviews, Google AI Mode, ChatGPT, Perplexity and YouTube. This portfolio covers one full case study for StarAgile (45 first-named AI answers of 89 captured) and live placements for Synup, Inventive AI, HubEngage and BacklinkOS. <span className="ip-meta">Updated <time dateTime="2026-11-26">26 November 2026</time></span></>}
        >
          <LinkBtn href="/resources#articles" ghost>Read the field notes</LinkBtn>
        </IpHero>
        <section className="wk-section" aria-labelledby="h-client-results">
          <div className="ip-wrap">
            <h2 id="h-client-results" className="wk-sec-h">Client results in AI search</h2>
          </div>
          <WorkGrid/>
        </section>
        <section className="ip-section" id="client-summary" aria-labelledby="h-client-summary">
          <div className="ip-wrap">
            <h2 id="h-client-summary">What results has Nakama Growth documented by client?</h2>
            <p className="wk-sum-lead">Across five client engagements, Nakama Growth has documented one full 89-answer study for StarAgile and live checkable placements for Synup, Inventive AI, HubEngage and BacklinkOS. Every placement links to a tracked query you can test directly on the engine that recorded it.</p>
            <div className="wk-table-scroll">
              <table className="wk-sum">
                <caption>Client results documented by Nakama Growth</caption>
                <thead>
                  <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Category</th>
                    <th scope="col">Work by Nakama Growth</th>
                    <th scope="col">Documented surfaces</th>
                    <th scope="col">Verified outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Link href="/work/staragile">StarAgile</Link></td>
                    <td>Professional certification</td>
                    <td>Question mapping, answer-first guides, comparison and community placements</td>
                    <td>Google AI Overviews, Google AI Mode, ChatGPT, Perplexity</td>
                    <td>Named first in 45 of 89 captured answers across 23 of 48 tracked queries (19 Aug to 9 Nov 2026)</td>
                  </tr>
                  <tr>
                    <td><a href="#proof-synup">Synup</a></td>
                    <td>Local listings software</td>
                    <td>Comparisons and videos for agencies and franchisors</td>
                    <td>Google AI Overviews, Google AI Mode, ChatGPT, YouTube</td>
                    <td>4 documented live placements</td>
                  </tr>
                  <tr>
                    <td><a href="#proof-inventive-ai">Inventive AI</a></td>
                    <td>AI RFP software</td>
                    <td>Buyer-journey comparisons and video comparisons</td>
                    <td>Google AI Overviews, Google AI Mode, ChatGPT, YouTube</td>
                    <td>4 documented live placements</td>
                  </tr>
                  <tr>
                    <td><a href="#proof-hubengage">HubEngage</a></td>
                    <td>Internal communications</td>
                    <td>Category comparisons for AI buyer research</td>
                    <td>Google AI Overviews, Perplexity, Google AI Mode, ChatGPT</td>
                    <td>4 documented live placements</td>
                  </tr>
                  <tr>
                    <td><a href="#proof-backlinkos">BacklinkOS</a></td>
                    <td>Backlink management</td>
                    <td>Category content tying link-building workflows to the product</td>
                    <td>Google AI Overviews, Perplexity</td>
                    <td>3 documented live placements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
          <IpHead
            eyebrow="How we count"
            title="How does Nakama Growth verify AI search results?"
            lead="Nakama Growth verifies AI visibility using dated Incognito screenshots of live queries typed without a year across Google AI Overviews, Google AI Mode, ChatGPT, Perplexity and YouTube. Each answer counts once, and observed brand mentions and source citations are reported separately from analytics traffic estimates."
          />
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
          <p className="wk-count-note">The work behind these answers is Nakama Growth&apos;s <Link href="/services/geo">GEO</Link> and <Link href="/services/aeo">AEO</Link> programs, plus <Link href="/services/content">answer-first content</Link> written for AI search.</p>
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
