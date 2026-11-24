import Link from 'next/link';
import type {ReactNode} from 'react';
import {FAQ} from './copy';
import {Cap, Pause, Tag, shot} from './bits';
import {QueryWall} from './Wall';

const HERO = {
  aio: shot('asset01', 'Google AI Overview: “Best Certified Scrum Master Training Providers”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 price and 1 location hidden.', 1200, 678),
  aim: shot('craft003', 'Google AI Mode: “Best Certified Scrum Master Training Providers”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 price and 2 sources hidden.', 1200, 679),
  cgpt: shot('craft023', 'ChatGPT: “Best Certified Scrum Master Training Providers”', 'captured 1 to 7 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 3 prices and 2 sources hidden.', 1562, 890),
  pplx: shot('craft025', 'Perplexity: “best Certified Scrum Master Training Providers”', 'captured 1 to 7 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 3 prices and 2 sources hidden.', 1637, 856),
  before: shot('craft013', 'ChatGPT: “Best Certified Scrum Master Training Providers”', 'captured 21 to 31 Aug 2026 · Not in the first six picks', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source hidden.', 1581, 896),
};

const NAV = [
  ['02', 'tldr', 'TL;DR'],
  ['03', 'company', 'Company'],
  ['04', 'growth', 'Growth summary'],
  ['05', 'challenges', 'Challenges'],
  ['06', 'solution', 'Solution'],
  ['07', 'results', 'Results'],
  ['08', 'open', 'Still open'],
  ['09', 'takeaways', 'Takeaways'],
  ['10', 'faq', 'FAQ'],
] as const;

function Open({n, id, title, children}: {n: string; id: string; title: string; children: ReactNode}) {
  const hid = `h-${id}`;
  return (
    <section className="v3-sec" id={id} aria-labelledby={hid}>
      <div className="v3-open v3-blk is-dark">
        <span className="v3-badge" aria-hidden="true">{n}</span>
        <h2 id={hid}><span className="vh">{n} </span>{title}</h2>
        <i className="v3-bar" aria-hidden="true"/>
      </div>
      {children}
    </section>
  );
}

function ChartRow({name, width, parts, vals, of, label}: {
  name: string;
  width: string;
  parts: Array<{k: string; n: number}>;
  vals: Array<{k: string; n: number}>;
  of: string;
  label: string;
}) {
  return (
    <div className="ca-row">
      <b>{name}</b>
      <div className="ca-bar" role="img" aria-label={label}>
        <div className="ca-st" style={{width}}>
          {parts.map(p => <i key={p.k} className={`ca-${p.k}`} style={{flex: `${p.n} 0 0`}}/>)}
        </div>
      </div>
      <div className="ca-vals" aria-hidden="true">
        {vals.map(v => <span key={v.k} className="ca-v"><i className={`sw ${v.k}`} aria-hidden="true"/>{v.n}</span>)}
        <span className="ca-t">of {of}</span>
      </div>
    </div>
  );
}

const WINS: Array<[string, string, string]> = [
  ['Best Certified Scrum Master Training Providers', 'Google AI Overviews', '“StarAgile is the top overall choice for Certified ScrumMaster (CSM) training in India”'],
  ['Best Certified Scrum Master Training Providers', 'Google AI Mode', 'StarAgile listed first: “Best overall pick for professionals in India”'],
  ['Best Certified Scrum Master Training Providers', 'Perplexity', '“StarAgile currently offers the strongest overall package”'],
  ['Best Certified Scrum Master Training Providers', 'ChatGPT', 'StarAgile in the first row of the provider table'],
  ['Best CSM Certification Training Providers', 'Perplexity', 'Named first of five: StarAgile, KnowledgeHut, Simplilearn, iZenBridge, ShriLearning'],
  ['Certified Scrum Master Providers in India', 'Google AI Overviews', 'StarAgile first in the provider list'],
  ['Top Weekend CSM Courses', 'Google AI Overviews', 'StarAgile first: “Known for flexible weekend schedules”'],
  ['Best CSPO Training', 'Google AI Overviews', 'StarAgile named in the opening sentence and first in the list'],
  ['Top CSPO Training Institutes in Bangalore', 'Google AI Overviews', 'StarAgile first in “Leading CSPO Training Institutes in Bangalore”'],
  ['Simpliaxis Alternatives', 'Google AI Overviews', '“StarAgile is the best overall alternative to Simpliaxis for PMP, Agile, and professional certification training”'],
  ['Best DevOps Course With Placement Support', 'Google AI Overviews', 'StarAgile first in “Top DevOps Courses with Placement”'],
  ['Best Automation Testing Course With Placement Support', 'Google AI Overviews', '“StarAgile offers one of the top automation testing courses with placement support”'],
  ['Best Software Testing Courses With Placement Assistance', 'ChatGPT', 'Named first of five'],
  ['Best Software Testing Courses With Placement Assistance', 'Google AI Overviews', 'StarAgile first in “Top Software Testing Training Providers in India”'],
];

export function CaseStudy() {
  return (
    <article className="sa">
      <p className="sa-back"><Link href="/work">All work</Link></p>
      <section className="v3-hero" aria-labelledby="h-hero">
        <div className="v3-band">
          <div className="v3-band-l">
            <p className="v3-eyebrow">CASE STUDY · EDTECH · GENERATIVE ENGINE OPTIMIZATION</p>
            <h1 id="h-hero">How StarAgile Became AI Search&apos;s First Pick for Scrum Training</h1>
            <p className="v3-sub">StarAgile was named first in <b>45 AI answers</b> across Google AI Overviews, AI Mode, ChatGPT and Perplexity. That covered <b>12 of 13</b> Certified ScrumMaster queries we tracked and <b>all 5</b> CSPO queries.</p>
            <dl className="v3-meta">
              <div><dt>Client</dt><dd>StarAgile (staragile.com)</dd></div>
              <div><dt>Industry</dt><dd>Edtech: professional certification training</dd></div>
              <div><dt>Engagement</dt><dd>12 June 2026 to ongoing</dd></div>
              <div><dt>Results window</dt><dd>19 August to 9 November 2026 (six reports, 115 screenshots)</dd></div>
            </dl>
          </div>
          <div className="v3-band-r">
            <div className="v3-band-card">
              <div className="acw" id="hero-card" data-active="aio" data-rotate="1">
                <div className="ac cs ac-fixed">
                  <article className="answer" aria-label="StarAgile in four AI answers, recreated from dated captures">
                    <div className="a-top">
                      <div className="tabs" role="tablist" aria-label="AI engine">
                        <button type="button" role="tab" id="hero-t-aio" aria-controls="hero-p-aio" aria-selected="true" tabIndex={0} data-k="aio"><span className="lb">AI Overview</span></button>
                        <button type="button" role="tab" id="hero-t-aim" aria-controls="hero-p-aim" aria-selected="false" tabIndex={-1} data-k="aim"><span className="lb">AI Mode</span></button>
                        <button type="button" role="tab" id="hero-t-cgpt" aria-controls="hero-p-cgpt" aria-selected="false" tabIndex={-1} data-k="cgpt"><span className="lb">ChatGPT</span></button>
                        <button type="button" role="tab" id="hero-t-pplx" aria-controls="hero-p-pplx" aria-selected="false" tabIndex={-1} data-k="pplx"><span className="lb">Perplexity</span></button>
                      </div>
                      <Pause/>
                    </div>
                    <div className="screen">
                      <div className="states">
                        <div className="state ui-google on" data-for="aio" id="hero-p-aio" role="tabpanel" aria-labelledby="hero-t-aio">
                          <div className="g-search"><span className="mag"/>Best Certified Scrum Master Training Providers<span className="x">×</span></div>
                          <div className="g-tabs"><span>AI Mode</span><span className="on">All</span><span>Short videos</span><span>Shopping</span><span>Videos</span></div>
                          <div className="g-aio">
                            <div className="g-aio-h"><span className="spark"/>AI Overview</div>
                            <p><b className="yb">StarAgile is the top overall choice for Certified ScrumMaster (CSM) training in India</b>, offering comprehensive Certified Scrum Master Training … which includes the Scrum Alliance exam fee and a two-year membership.</p>
                            <div className="g-chips"><span><i aria-hidden="true">S</i>StarAgile +1</span></div>
                          </div>
                        </div>
                        <div className="state ui-aim" data-for="aim" id="hero-p-aim" role="tabpanel" aria-labelledby="hero-t-aim" aria-hidden="true">
                          <div className="aim-q">Best Certified Scrum Master Training Providers</div>
                          <div className="aim-a">
                            <p>The top-rated CSM training providers are grouped below by their unique advantages.</p>
                            <ul className="x-ul"><li><b className="yb">StarAgile: Best overall pick for professionals in India.</b> It features high pass rates, highly competitive pricing …, and a standard money-back guarantee.</li></ul>
                          </div>
                        </div>
                        <div className="state ui-chat" data-for="cgpt" id="hero-p-cgpt" role="tabpanel" aria-labelledby="hero-t-cgpt" aria-hidden="true">
                          <div className="c-user">Web search Best Certified Scrum Master Training Providers</div>
                          <div className="c-reply">
                            <p>If you&apos;re looking for Certified Scrum Master training providers in India, there are two main certification routes worth considering …</p>
                            <table className="c-table">
                              <thead><tr><th scope="col">Provider / Route</th><th scope="col">Best for</th></tr></thead>
                              <tbody>
                                <tr><td><b className="yb">StarAgile</b></td><td><b className="yb">Working professionals &amp; weekend batches</b></td></tr>
                                <tr><td>upGrad KnowledgeHut</td><td>Structured online learning &amp; support</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="state ui-pplx" data-for="pplx" id="hero-p-pplx" role="tabpanel" aria-labelledby="hero-t-pplx" aria-hidden="true">
                          <p className="p-q">best Certified Scrum Master Training Providers</p>
                          <div className="p-lbl"><i className="ans"/>Answer</div>
                          <p className="p-ans">The best Certified Scrum Master (CSM) training providers in 2026 depend on your priorities… For most working professionals (especially in India), <b className="yb">StarAgile currently offers the strongest overall package</b>; for premium, expert-led cohorts, Mountain Goat Software and Scrum Inc. remain top-tier choices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="ac-foot">
                      <span className="tagw" data-for="aio"><Tag label="Named first"/></span>
                      <span className="tagw" data-for="aim" hidden><Tag label="Named first"/></span>
                      <span className="tagw" data-for="cgpt" hidden><Tag label="Named first"/></span>
                      <span className="tagw" data-for="pplx" hidden><Tag label="Named first"/></span>
                      <Pause/>
                    </div>
                  </article>
                </div>
                <Cap engine="Google AI Overview" when="21 to 31 Aug 2026" shot={HERO.aio} forKey="aio"/>
                <Cap engine="Google AI Mode" when="21 to 31 Aug 2026" shot={HERO.aim} forKey="aim" hidden/>
                <Cap engine="ChatGPT" when="1 to 7 Sep 2026" shot={HERO.cgpt} forKey="cgpt" hidden/>
                <Cap engine="Perplexity" when="1 to 7 Sep 2026" shot={HERO.pplx} forKey="pplx" hidden/>
              </div>
            </div>
            <figure className="v3-quote v3-blk is-cream">
              <span className="v3-qg" aria-hidden="true">&ldquo;</span>
              <blockquote><p>&quot;It&apos;s good to see StarAgile getting visibility on generic prompts now. Let&apos;s maintain this pace.&quot;</p></blockquote>
              <figcaption>Rishav Kumar, StarAgile · 1 September 2026</figcaption>
            </figure>
          </div>
        </div>
        <ul className="v3-tiles">
          <li className="v3-blk is-cream"><span className="n">45</span><span className="l">AI answers that named StarAgile first (of 89 captured)</span></li>
          <li className="v3-blk is-cream"><span className="n">23</span><span className="l">buyer queries where StarAgile was the first pick on at least one engine</span></li>
          <li className="v3-blk is-cream"><span className="n">260</span><span className="l">live placements</span></li>
        </ul>
      </section>

      <div className="v3-page">
        <nav className="v3-side" aria-label="On this page">
          <ul>
            {NAV.map(([n, id, label]) => (
              <li key={id}><a href={`#${id}`}><span className="v3-nb">{n}</span>{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="v3-col">
          <nav className="v3-tabs" aria-label="On this page">
            <ul>
              {NAV.map(([, id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="v3-stack">
            <aside className="v3-how v3-blk is-dark" id="counting" aria-label="How we counted">
              <p className="v3-lbl">How we counted</p>
              <p>Every result comes from dated screenshots of real AI answers, all typed without a year, in Incognito. An answer counts once, however many screenshots it took. &quot;Named first&quot; means StarAgile is ranked #1 or named first. If an answer cites a StarAgile page without naming it, it shows as &quot;StarAgile page cited&quot;. Answers that cite only our own guides count as not present. None of this is a traffic estimate. The window runs from 19 August to 9 November 2026.</p>
            </aside>

            <Open n="02" id="tldr" title="TL;DR">
              <div className="v3-body">
                <ul>
                  <li><b>The problem:</b> Indian professionals now ask ChatGPT, Perplexity and Google&apos;s AI features for &quot;the best CSM training.&quot; On 3 August, StarAgile told us it had &quot;little to no visibility on ChatGPT.&quot;</li>
                  <li><b>What we did:</b> We mapped the questions buyers ask, by intent. Then we wrote an answer-first guide for each one and published it where AI engines already look: comparison guides, community answers and expert articles. We kept StarAgile&apos;s proof points identical everywhere and checked every engine each week.</li>
                  <li><b>The result:</b> Over 19 August to 9 November, AI engines named StarAgile first in 45 answers. That included 26 of 31 answers to Scrum Master queries. Google AI Overviews called it &quot;the best overall alternative to Simpliaxis.&quot; ChatGPT went from &quot;little to no visibility&quot; to listing StarAgile first within five weeks.</li>
                </ul>
              </div>
            </Open>

            <section className="v3-co v3-blk is-cream" id="company" aria-labelledby="h-company">
              <p className="v3-lbl">03</p>
              <h2 id="h-company">The Company</h2>
              <i className="v3-bar" aria-hidden="true"/>
              <p>StarAgile is a Bengaluru-based training company for Agile, Scrum, SAFe, PMP and DevOps certifications. Between 19 August and 9 November 2026, AI engines named it first for 23 different buyer questions. The best example is Google&apos;s AI Overview calling it &quot;the top overall choice for Certified ScrumMaster (CSM) training in India.&quot;</p>
              <p>StarAgile was founded in 2016. Its founder and CEO, Narasimha Reddy Bommaka, is a Certified Scrum Trainer (CST). StarAgile trains working professionals in Agile and Scrum, SAFe, PMP, DevOps and software testing.</p>
              <p>StarAgile reports:</p>
              <ul>
                <li>more than 3,00,000 professionals trained, in 100+ countries, with 730+ trainers</li>
                <li>50,000+ CSM enrolments, 25,000+ Leading SAFe enrolments and about 21,000 PMP enrolments</li>
              </ul>
              <p>It is a Scrum Alliance training partner.</p>
              <dl className="v3-meta v3-co-meta">
                <div><dt>Location</dt><dd>Bengaluru, India</dd></div>
                <div><dt>Services</dt><dd>GEO, AEO, answer-first content, community answers, weekly AI visibility tracking</dd></div>
                <div><dt>Engines</dt><dd>Google AI Overviews, Google AI Mode, ChatGPT, Perplexity</dd></div>
              </dl>
            </section>

            <Open n="04" id="growth" title="Growth Summary: results at a glance">
              <div className="v3-body">
                <p>StarAgile already had the scale, the credentials and the course formats Indian professionals want. What it lacked was a consistent place inside the AI answer, where buyers now build their shortlist.</p>
                <p><b>Across 89 AI answers captured between 19 August and 9 November 2026:</b></p>
                <ul>
                  <li><b>45</b> named StarAgile first: 24 on Google AI Overviews, 11 on ChatGPT, 5 on Google AI Mode and 5 on Perplexity.</li>
                  <li><b>11</b> more named StarAgile in the shortlist, but not first.</li>
                  <li><b>3</b> cited a StarAgile page as a source without naming StarAgile.</li>
                  <li><b>17</b> cited only our own guides. StarAgile wasn&apos;t named in those answers, so we don&apos;t count them as StarAgile visibility.</li>
                  <li><b>13</b> had no StarAgile mention or StarAgile citation.</li>
                  <li>When an engine named StarAgile, it usually named it first: <b>45 of 56</b> named mentions.</li>
                  <li>StarAgile appeared at all (named, or a StarAgile page cited) for <b>30 of the 48</b> queries we tracked in AI answers.</li>
                </ul>
                <p><b>Classic Google:</b> staragile.com&apos;s own guide ranked first for &quot;How to Choose PMP Training Provider.&quot;</p>
              </div>
            </Open>

            <Open n="05" id="challenges" title="The Challenges">
              <aside className="v3-hl v3-blk is-cream" aria-labelledby="hl-c">
                <h3 id="hl-c">Highlights</h3>
                <ul>
                  <li>A commodity category: every provider sells the same Scrum Alliance, PMI and Scaled Agile credentials.</li>
                  <li>Strong incumbents that AI engines had already learned to recommend.</li>
                  <li>Buyers moving from ten blue links to one AI shortlist.</li>
                  <li>A ChatGPT gap the client named on day 52 of the engagement.</li>
                </ul>
              </aside>
              <div className="v3-body">
                <h3>Certification training is a commodity, and AI makes that worse</h3>
                <p>A CSM certificate is the same credential whoever teaches the course. Scrum Alliance issues it, and every provider must run a 16-hour live course led by a Certified Scrum Trainer. So buyers choose on trust, schedule and support, and more and more often they ask an AI to compare for them.</p>
                <p>The captures show what that looks like. Answers to &quot;best Certified Scrum Master training providers&quot; start by explaining that the credential is identical everywhere. Then they shortlist three to six providers and give each one a single label: &quot;best overall,&quot; &quot;best for global scheduling,&quot; &quot;best premium option.&quot; A provider outside the shortlist isn&apos;t considered. A provider inside it with a vague label loses to the one with a clear label.</p>
                <h3>Incumbents had the head start</h3>
                <p>KnowledgeHut, Simplilearn and Simpliaxis have years of reviews, video libraries and comparison pages behind them, and AI engines lean on that history. They appear in most of the answers we captured. The goal was never to remove them. It was to change the order and the labels.</p>
                <h3>ChatGPT was the gap</h3>
              </div>
              <figure className="v3-quote v3-blk is-cream">
                <span className="v3-qg" aria-hidden="true">&ldquo;</span>
                <blockquote><p>&quot;While it is good to see consistent results across Google AI Overview and AI Mode, the overall AI visibility is not yet where it needs to be. ... we currently have little to no visibility on ChatGPT, which is one of the most widely used platforms for all type of queries.&quot;</p></blockquote>
                <figcaption>Rishav Kumar, StarAgile · 3 August 2026</figcaption>
              </figure>
              <div className="v3-body">
                <h3>The bar went up</h3>
                <p>StarAgile then asked us to prove visibility on queries without &quot;2026&quot; in them, checked in Incognito. Every report from then on followed that rule. The results window on this page covers the reports built on that rule, 19 August to 9 November 2026.</p>
              </div>
            </Open>

            <Open n="06" id="solution" title="The Solution: a GEO playbook for edtech">
              <aside className="v3-hl v3-blk is-cream" aria-labelledby="hl-s">
                <h3 id="hl-s">Highlights</h3>
                <ul>
                  <li>Map the questions buyers actually ask, by intent.</li>
                  <li>Write answer-first content that AI can quote, with a verdict in the first lines.</li>
                  <li>Publish where AI engines already look: comparison guides, community answers and expert articles.</li>
                  <li>Repeat one positioning everywhere, so engines repeat it too.</li>
                  <li>Check every engine weekly, and count &quot;named&quot; separately from &quot;cited&quot;.</li>
                </ul>
              </aside>
              <div className="v3-body">
                <h3>1. Map the questions buyers ask</h3>
                <p>We started from StarAgile&apos;s own demand data: Search Console and Bing queries, its priority prompts and 60 sales-call recordings. We grouped the questions by intent:</p>
                <ul>
                  <li>&quot;best&quot; and &quot;top&quot; provider lists</li>
                  <li>competitor alternatives</li>
                  <li>city searches</li>
                  <li>formats such as weekend batches</li>
                  <li>career needs such as placement support</li>
                  <li>cost</li>
                  <li>how-to decisions</li>
                </ul>
                <p>CSM and CSPO came first, because they are StarAgile&apos;s flagship programs and the most contested.</p>
                <h3>2. Answer-first content that AI can quote</h3>
                <p>AI engines lift sentences, not pages. So every guide opens with a direct verdict, then backs it up with a comparison table. Each table uses the same columns: best for, format, inclusions and support. Tables are what Google AI Overviews, ChatGPT and Perplexity turn into their own shortlists. Each guide answers one buyer question, and its title is that question.</p>
                <h3>3. Publish where AI engines already look</h3>
                <p>For each cluster of questions, we checked which kinds of sources the engines were already citing: expert articles, comparison guides, community answers and official Scrum Alliance help pages. Then we made sure StarAgile was well represented on those kinds of sources. Of the 323 unique placements we published from June to November, 260 are live today. That count covers posts, answers and comments, checked on 19 November 2026.</p>
                <h3>4. One position, repeated everywhere</h3>
                <p>AI engines trust claims they see repeated across sources. Every asset used the same StarAgile proof points:</p>
                <ul>
                  <li>CST-led live classes</li>
                  <li>the Scrum Alliance exam fee and two-year membership included</li>
                  <li>weekend batches</li>
                  <li>a money-back exam guarantee</li>
                </ul>
                <p>The engines played them back almost word for word. &quot;Includes Scrum Alliance membership, exam fees, mock tests, and a money-back exam-clearance guarantee,&quot; one AI Overview said. That is how a provider earns a clear label like &quot;best overall pick for professionals in India.&quot;</p>
                <h3>5. Weekly checks and honest counting</h3>
                <p>Every week we ran the mapped questions on all four engines and screenshotted each result. We recorded whether StarAgile was named first, named, or only cited as a source, then shifted effort to the gaps. &quot;Cited&quot; never counts as a win on this page.</p>
              </div>
            </Open>

            <Open n="07" id="results" title="The Results: AI search visibility across four engines">
              <aside className="v3-hl v3-blk is-cream" aria-labelledby="hl-r">
                <h3 id="hl-r">Highlights</h3>
                <ul>
                  <li><b>45</b> AI answers named StarAgile first, out of 89 captured.</li>
                  <li><b>23</b> of the 48 buyer queries we tracked in AI answers had StarAgile first on at least one engine, including 12 of 13 CSM queries and all 5 CSPO queries.</li>
                  <li>First on all four engines: Google AI Overviews (24), ChatGPT (11), AI Mode (5) and Perplexity (5).</li>
                  <li>&quot;Best overall alternative to Simpliaxis&quot; on Google AI Overviews, AI Mode and Perplexity.</li>
                </ul>
              </aside>

              <section className="v3-frame v3-blk is-dark" id="chart-a">
                <header className="v3-fh">
                  <h3>Outcome by engine</h3>
                  <p>Across 89 AI answers captured between 19 August and 9 November 2026</p>
                </header>
                <div className="v3-plot">
                  <ul className="key ca-key" aria-label="Chart key">
                    <li><i className="sw nf"/>Named first</li>
                    <li><i className="sw nm"/>Named</li>
                    <li><i className="sw ct"/>StarAgile page cited</li>
                    <li><i className="sw np"/>Not present</li>
                  </ul>
                  <ChartRow name="Google AI Overviews" width="100%" of="39" label="Google AI Overviews: 24 Named first, 4 named, 2 staragile page cited, 9 not present, of 39 answers" parts={[{k: 'nf', n: 24}, {k: 'nm', n: 4}, {k: 'ct', n: 2}, {k: 'np', n: 9}]} vals={[{k: 'nf', n: 24}, {k: 'nm', n: 4}, {k: 'ct', n: 2}, {k: 'np', n: 9}]}/>
                  <ChartRow name="ChatGPT" width="79.49%" of="31" label="ChatGPT: 11 Named first, 4 named, 0 staragile page cited, 16 not present, of 31 answers" parts={[{k: 'nf', n: 11}, {k: 'nm', n: 4}, {k: 'np', n: 16}]} vals={[{k: 'nf', n: 11}, {k: 'nm', n: 4}, {k: 'ct', n: 0}, {k: 'np', n: 16}]}/>
                  <ChartRow name="Google AI Mode" width="28.21%" of="11" label="Google AI Mode: 5 Named first, 2 named, 0 staragile page cited, 4 not present, of 11 answers" parts={[{k: 'nf', n: 5}, {k: 'nm', n: 2}, {k: 'np', n: 4}]} vals={[{k: 'nf', n: 5}, {k: 'nm', n: 2}, {k: 'ct', n: 0}, {k: 'np', n: 4}]}/>
                  <ChartRow name="Perplexity" width="20.51%" of="8" label="Perplexity: 5 Named first, 1 named, 1 staragile page cited, 1 not present, of 8 answers" parts={[{k: 'nf', n: 5}, {k: 'nm', n: 1}, {k: 'ct', n: 1}, {k: 'np', n: 1}]} vals={[{k: 'nf', n: 5}, {k: 'nm', n: 1}, {k: 'ct', n: 1}, {k: 'np', n: 1}]}/>
                </div>
                <footer className="v3-ff">
                  <p>Not present includes 17 answers that cited only guides we published.</p>
                  <p>Source: StarAgile Weekly Wins, 115 screenshots, 19 Aug to 9 Nov 2026. One answer counted once.</p>
                </footer>
              </section>

              <div className="v3-text">
                <h3>ChatGPT: from the gap to the first row</h3>
                <p>ChatGPT was the platform StarAgile cared about most. On 3 August, StarAgile told us it had little to no visibility on ChatGPT. By 31 August it had StarAgile in its comparison table for &quot;Best CSPO Training&quot;. In the week of 1 to 7 September it put StarAgile in the first row for &quot;Best Certified Scrum Master Training Providers.&quot; By the end of the window, ChatGPT had named StarAgile first in 11 answers, including:</p>
                <ul>
                  <li>&quot;Top CSM Training Institutes in Bangalore&quot; (&quot;1. StarAgile, HSR Layout, Bengaluru&quot;)</li>
                  <li>&quot;Best Software Testing Courses With Placement Assistance&quot; (&quot;I would start by comparing StarAgile, QSpiders, ExcelR, TOPS Technologies, and SSquareIT&quot;)</li>
                </ul>
              </div>

              <figure className="v3-quote v3-blk is-cream">
                <span className="v3-qg" aria-hidden="true">&ldquo;</span>
                <p className="v3-ql">Client baseline · 3 August 2026</p>
                <blockquote><p>&quot;While it is good to see consistent results across Google AI Overview and AI Mode, the overall AI visibility is not yet where it needs to be. ... we currently have little to no visibility on ChatGPT, which is one of the most widely used platforms for all type of queries.&quot;</p></blockquote>
                <figcaption>Rishav Kumar, StarAgile · 3 August 2026</figcaption>
              </figure>

              <section className="v3-frame v3-blk is-dark" id="chatgpt-ba">
                <header className="v3-fh">
                  <h3>Best Certified Scrum Master Training Providers</h3>
                  <p>ChatGPT</p>
                </header>
                <div className="v3-plot">
                  <div className="ba">
                    <div className="ba-c">
                      <p className="ba-k">Before</p>
                      <div className="acw">
                        <div className="ac cs single ac-fixed">
                          <article className="answer" aria-label="ChatGPT answer, recreated from a dated capture">
                            <div className="a-top"><span className="eng">ChatGPT</span></div>
                            <div className="screen"><div className="states">
                              <div className="state ui-chat on">
                                <div className="c-user">Best Certified Scrum Master Training Providers</div>
                                <div className="c-reply">
                                  <p className="x-h2">Best Certified Scrum Master Training Providers in 2026</p>
                                  <p>If you&apos;re looking for a Certified ScrumMaster (CSM®) course, the most important factor is not simply the training company&apos;s name. …</p>
                                  <p className="x-h">Top CSM Training Providers to Consider</p>
                                  <table className="c-table">
                                    <thead><tr><th scope="col">Provider</th><th scope="col">Best for</th><th scope="col">Key advantage</th></tr></thead>
                                    <tbody>
                                      <tr><td>Scrum Alliance</td><td>Overall best</td><td>Official CSM certification ecosystem</td></tr>
                                      <tr><td>KnowledgeHut</td><td>India &amp; online learners</td><td>Established training provider with Scrum Alliance-certified trainers</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div></div>
                            <div className="ac-foot"><Tag label="Not in the first six picks" kind="grey"/></div>
                          </article>
                        </div>
                        <Cap engine="ChatGPT" when="21 to 31 Aug 2026" shot={HERO.before}/>
                      </div>
                    </div>
                    <div className="ba-c">
                      <p className="ba-k">After</p>
                      <div className="acw">
                        <div className="ac cs single ac-fixed">
                          <article className="answer" aria-label="ChatGPT answer, recreated from a dated capture">
                            <div className="a-top"><span className="eng">ChatGPT</span></div>
                            <div className="screen"><div className="states">
                              <div className="state ui-chat on">
                                <div className="c-user">Web search Best Certified Scrum Master Training Providers</div>
                                <div className="c-reply">
                                  <p>If you&apos;re looking for Certified Scrum Master training providers in India, there are two main certification routes worth considering …</p>
                                  <table className="c-table">
                                    <thead><tr><th scope="col">Provider / Route</th><th scope="col">Best for</th></tr></thead>
                                    <tbody>
                                      <tr><td><b className="yb">StarAgile</b></td><td><b className="yb">Working professionals &amp; weekend batches</b></td></tr>
                                      <tr><td>upGrad KnowledgeHut</td><td>Structured online learning &amp; support</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div></div>
                            <div className="ac-foot"><Tag label="Named first"/></div>
                          </article>
                        </div>
                        <Cap engine="ChatGPT" when="1 to 7 Sep 2026" shot={HERO.cgpt}/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="v3-text">
                <h3>From one flagship query to a category position</h3>
                <p>The first report (21 to 31 August) already showed StarAgile first for &quot;Best Certified Scrum Master Training Providers&quot; on Google AI Overviews and AI Mode. Google&apos;s AI Overview said: &quot;StarAgile is the top overall choice for Certified ScrumMaster (CSM) training in India.&quot; From there the work spread to CSPO, competitor alternatives, city searches, formats and placement support.</p>
              </div>

              <section className="v3-frame v3-blk is-dark" id="chart-b">
                <header className="v3-fh">
                  <h3>First-named answers by report, running total</h3>
                  <p>By report, in the order sent. Two of the six are monthly roll-ups whose dates overlap the weekly reports.</p>
                </header>
                <div className="v3-plot">
                  <table className="run">
                    <caption className="vh">First-named answers by report, running total</caption>
                    <thead><tr><th scope="col">Report</th><th scope="col">Running total</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">21 to 31 Aug</th><td>8</td></tr>
                      <tr><th scope="row">1 to 7 Sep</th><td>13</td></tr>
                      <tr><th scope="row">19 Aug to 16 Sep</th><td>31</td></tr>
                      <tr><th scope="row">18 to 27 Sep</th><td>31</td></tr>
                      <tr><th scope="row">28 Sep to 6 Oct</th><td>32</td></tr>
                      <tr><th scope="row">21 Sep to 25 Oct</th><td>45</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <QueryWall/>

              <section className="v3-frame v3-blk is-dark" id="wins">
                <header className="v3-fh"><h3>Representative wins</h3></header>
                <div className="v3-plot">
                  <table className="wins">
                    <caption className="vh">Representative wins</caption>
                    <thead><tr><th scope="col">Buyer query</th><th scope="col">Engine</th><th scope="col">What the answer said</th></tr></thead>
                    <tbody>
                      {WINS.map(([q, e, said]) => (
                        <tr key={`${e}-${q}`}>
                          <th scope="row">{q}</th>
                          <td>{e}</td>
                          <td>{said}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </Open>

            <Open n="08" id="open" title="What's still open">
              <div className="v3-body">
                <p>We report the gaps as plainly as the wins.</p>
                <ul>
                  <li><b>PMP and SAFe:</b> on these questions AI engines often cited only our own guides and rarely named StarAgile. Across 9 PMP queries and 6 SAFe queries, StarAgile wasn&apos;t named first in any answer. These are the next priority.</li>
                  <li><b>DevOps:</b> StarAgile was first for 1 of 6 DevOps queries tracked in AI answers. On ChatGPT, for the same placement-support query, it was the fifth row, not the first.</li>
                  <li><b>Consistency:</b> answers move. For &quot;Best Certified Scrum Master Training Providers&quot;, ChatGPT showed StarAgile in the first row on one check and left it out of the visible table on another. That is why we check every week.</li>
                </ul>
              </div>
            </Open>

            <Open n="09" id="takeaways" title="Key takeaways for edtech brands">
              <div className="v3-body">
                <ol>
                  <li><b>Win the label, not just the list.</b> AI answers give each provider one line. Make yours specific and repeat it everywhere.</li>
                  <li><b>Answer the question in the first sentence.</b> Engines lift verdicts and tables, not introductions.</li>
                  <li><b>Be on the sources the engines already read.</b> Comparison guides, community answers and expert articles shaped these answers more than any one website did.</li>
                  <li><b>Keep your facts identical across every source.</b> The same inclusions, credentials and guarantees, word for word.</li>
                  <li><b>Count honestly.</b> Report &quot;named first&quot;, &quot;named&quot; and &quot;cited&quot; separately, never count a citation of your own guide as a brand win, test without the year, and show the gaps.</li>
                </ol>
              </div>
            </Open>

            <Open n="10" id="faq" title="FAQ">
              <div className="sa-faq">
                {FAQ.map(item => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </Open>
          </div>
        </div>
      </div>

      <section className="sa-cta" aria-labelledby="h-cta">
        <h2 id="h-cta">Is AI recommending your competitors instead of you?</h2>
        <p>We&apos;ll show you where ChatGPT, Perplexity and Google&apos;s AI features name your brand today, where they leave you out, and which sources they trust.</p>
        <Link href="/services/ai-visibility-audit">Get your AI visibility check</Link>
      </section>

      <dialog className="lb" id="sa-lb" aria-labelledby="sa-lb-t">
        <div className="lb-h">
          <div>
            <h2 id="sa-lb-t">Original capture</h2>
            <p id="sa-lb-m"/>
          </div>
          <button type="button" className="lb-x" id="sa-lbx" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="lb-img"><img id="sa-lbi" alt="" width={1} height={1} loading="lazy"/></div>
        <p className="lb-f" id="sa-lb-f">Screenshot as captured. Red boxes as marked in the dated report.</p>
      </dialog>
    </article>
  );
}
