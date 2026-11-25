import type {ReactNode} from 'react';
import {Cells, Chevron, Mini, Tag, shot} from './bits';

const NAMES = ['Google AI Overviews', 'Google AI Mode', 'ChatGPT', 'Perplexity'];

function Row({
  n, query, states, open, extra, also, children,
}: {
  n: number;
  query: string;
  states: Array<'f' | 'n' | 'x' | 'b'>;
  open?: boolean;
  extra?: boolean;
  also?: string;
  children: ReactNode;
}) {
  return (
    <>
      <tr className={extra ? 'r qx' : 'r'}>
        <th scope="row">
          <button type="button" className="xb" id={`qb${n}`} aria-expanded={open ? 'true' : 'false'} aria-controls={`qd${n}`}>
            <Chevron/>
            <span className="qt">{query}</span>
          </button>
        </th>
        <Cells states={states} names={NAMES}/>
      </tr>
      <tr className={extra ? 'd qx' : 'd'} id={`qd${n}`} hidden={!open}>
        <td colSpan={5}>
          <div className="inner">
            {children}
            {also ? <p className="also">{also}</p> : null}
          </div>
        </td>
      </tr>
    </>
  );
}

function Aio({children, chips, search}: {children: ReactNode; chips?: {mark: string; label: string}; search?: boolean}) {
  return (
    <div className="state ui-google on">
      {search ? (
        <>
          <div className="g-search"><span className="mag"/>Best Certified Scrum Master Training Providers<span className="x">×</span></div>
          <div className="g-tabs"><span>AI Mode</span><span className="on">All</span><span>Short videos</span><span>Shopping</span><span>Videos</span></div>
        </>
      ) : null}
      <div className="g-aio" style={search ? undefined : {marginTop: 0}}>
        <div className="g-aio-h"><span className="spark"/>AI Overview</div>
        {children}
        {chips ? <div className="g-chips"><span><i aria-hidden="true">{chips.mark}</i>{chips.label}</span></div> : null}
      </div>
    </div>
  );
}

export function QueryWall() {
  return (
    <section className="v3-frame v3-blk is-dark" id="wall-frame">
      <header className="v3-fh">
        <h3>The 23 queries where StarAgile was named first on at least one engine</h3>
        <p>19 August to 9 November 2026. Best result per engine. Select a query to see the answer.</p>
      </header>
      <div className="v3-plot">
        <div className="qw-wrap collapsed" id="wall">
          <ul className="qw-lg" aria-label="Key">
            <li><span className="gw"><span className="gl f"/></span>Named first</li>
            <li><span className="gw"><span className="gl n"/></span>Named</li>
            <li><span className="gw"><span className="gl x"/></span>Not present</li>
            <li><span className="gw"><span className="gl b"/></span>Blank: not run on this engine</li>
          </ul>
          <p className="qw-best">Best result in any capture, 19 Aug to 9 Nov 2026</p>
          <table className="qw" id="qw">
            <caption className="vh">The 23 queries where StarAgile was named first on at least one engine, 19 August to 9 November 2026. Best result per engine. Select a query to see the answer.</caption>
            <colgroup><col/><col className="e"/><col className="e"/><col className="e"/><col className="e"/></colgroup>
            <thead>
              <tr>
                <th scope="col">Query</th>
                <th scope="col"><span aria-hidden="true" className="dk">AI Overviews</span><span aria-hidden="true" className="mb">AIO</span><span className="vh">Google AI Overviews</span></th>
                <th scope="col"><span aria-hidden="true" className="dk">AI Mode</span><span aria-hidden="true" className="mb">Mode</span><span className="vh">Google AI Mode</span></th>
                <th scope="col"><span aria-hidden="true" className="dk">ChatGPT</span><span aria-hidden="true" className="mb">GPT</span><span className="vh">ChatGPT</span></th>
                <th scope="col"><span aria-hidden="true" className="dk">Perplexity</span><span aria-hidden="true" className="mb">Pplx</span><span className="vh">Perplexity</span></th>
              </tr>
            </thead>
            <tbody id="qw-body">
              <Row n={1} query="Best Certified Scrum Master Training Providers" states={['f', 'f', 'f', 'f']} also="Also named first on: Google AI Mode, ChatGPT, Perplexity">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 to 31 Aug 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('asset01', 'Google AI Overview: “Best Certified Scrum Master Training Providers”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 price and 1 location hidden.', 1200, 678)}>
                  <Aio search chips={{mark: 'S', label: 'StarAgile +1'}}>
                    <p><b className="yb">StarAgile is the top overall choice for Certified ScrumMaster (CSM) training in India</b>, offering comprehensive Certified Scrum Master Training … which includes the Scrum Alliance exam fee and a two-year membership.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={2} query="Best CSM Certification Training Providers" states={['f', 'b', 'f', 'f']} also="Also named first on: ChatGPT, Perplexity">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="19 Aug to 16 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft027', 'Google AI Overview: “Best CSM Certification Training Providers”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 2 sources hidden.', 1822, 813)}>
                  <Aio>
                    <p>The best Certified ScrumMaster (CSM) training providers include <b className="yb">StarAgile</b>, Simplilearn, and KnowledgeHut, all offering mandatory 16-hour live instructor-led courses required by the Scrum Alliance.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={3} query="Best Simpliaxis Alternatives" states={['f', 'b', 'f', 'f']} also="Also named first on: ChatGPT, Perplexity">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="19 Aug to 16 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft032', 'Google AI Overview: “Best Simpliaxis Alternatives”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 3 sources hidden.', 1827, 856)}>
                  <Aio>
                    <p>The best alternatives to Simpliaxis for PMP, Agile, and Scrum training are <b className="yb">StarAgile for overall value and breadth</b>, and KnowledgeHut for specialized Agile and SAFe bootcamps.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={4} query="Certified Scrum Master Training Providers" states={['f', 'f', 'f', 'x']} also="Also named first on: Google AI Mode, ChatGPT">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="1 to 7 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft024', 'Google AI Overview: “Certified Scrum Master Training Providers”', 'captured 1 to 7 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 1 source hidden.', 1860, 856)}>
                  <Aio chips={{mark: 'S', label: 'StarAgile +1'}}>
                    <p>Top Certified Scrum Master (CSM) training providers offer live virtual or in-person courses led by Certified Scrum Trainers (CSTs) with exam support and Scrum Alliance memberships.</p>
                    <p className="x-h">Top Certified Scrum Master Training Providers</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile: Provides 16 hours of live online training by experienced CSTs</b>, exam fee inclusion, a 2-year Scrum Alliance membership, and a 100% pass guarantee.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={5} query="Best CSPO Courses Compared" states={['n', 'f', 'f', 'b']} also="Also named first on: ChatGPT">
                <Mini engine="Google AI Mode" tag="Named first" captionEngine="Google AI Mode" when="21 Sep to 25 Oct 2026" label="Google AI Mode answer, recreated from a dated capture" shot={shot('craft088', 'Google AI Mode: “Best CSPO Courses Compared”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source hidden.', 1700, 861)}>
                  <div className="state ui-aim on">
                    <div className="aim-q">Best CSPO Courses Compared</div>
                    <div className="aim-a">
                      <p className="x-h">Comparison of Top CSPO Course Providers</p>
                      <table className="c-table t4">
                        <thead><tr><th scope="col">Provider</th><th scope="col">Best For</th><th scope="col">Format &amp; Schedules</th><th scope="col" className="c4">Unique Value Add / Strengths</th></tr></thead>
                        <tbody><tr><td><b className="yb">StarAgile</b></td><td>Working Professionals &amp; Career Changers</td><td>Live virtual workshops (Weekday &amp; weekend options available)</td><td className="c4">Includes 16 SEUs/PDUs, highly dynamic training led by global experts, and rich bonus learning repositories.</td></tr></tbody>
                      </table>
                      <p className="x-stack"><b>Unique Value Add / Strengths</b> Includes 16 SEUs/PDUs, highly dynamic training led by global experts, and rich bonus learning repositories.</p>
                      <p className="x-note">First row of the comparison table, as captured.</p>
                    </div>
                  </div>
                </Mini>
              </Row>
              <Row n={6} query="Best CSPO Training" states={['f', 'b', 'n', 'f']} also="Also named first on: Perplexity">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 to 31 Aug 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft006', 'Google AI Overview: “Best CSPO Training”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 1 source hidden.', 1842, 831)}>
                  <Aio chips={{mark: 'K', label: 'KnowledgeHut +1'}}>
                    <p>For professionals in India looking for the best Certified Scrum Product Owner (CSPO) training, top providers like <b className="yb">StarAgile and KnowledgeHut</b> offer reputable, 16-hour live virtual classes authorized by the Scrum Alliance.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={7} query="Best Online CSM Courses Compared" states={['f', 'b', 'f', 'b']} also="Also named first on: ChatGPT">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft085', 'Google AI Overview: “Best Online CSM Courses Compared”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 prices and 3 sources hidden.', 1875, 842)}>
                  <Aio>
                    <p>The best online Certified ScrumMaster (CSM) courses depend on your budget, schedule flexibility, and preferred learning style, with top providers including <b className="yb">StarAgile</b>, Simplilearn, and KnowledgeHut. …</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={8} query="Best Software Testing Courses With Placement Assistance" states={['f', 'b', 'f', 'b']} also="Also named first on: ChatGPT">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft092', 'Google AI Overview: “Best Software Testing Courses With Placement Assistance”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source hidden.', 1765, 843)}>
                  <Aio chips={{mark: 'S', label: 'StarAgile +2'}}>
                    <p>Top software testing courses with placement assistance in India combine manual testing, automation tools (like Selenium, Cypress, Playwright, and Java), live capstone projects, and career services.</p>
                    <p className="x-h">Top Software Testing Training Providers in India</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile:</b> Offers a comprehensive manual and automation testing curriculum integrated with Gen AI tools, practical capstone projects, and an internship certificate.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={9} query="Simpliaxis Alternatives" states={['f', 'f', 'b', 'b']} extra also="Also named first on: Google AI Mode">
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 to 31 Aug 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft010', 'Google AI Overview: “Simpliaxis Alternatives”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 sources hidden.', 1842, 822)}>
                  <Aio>
                    <p>Choose <b className="yb">StarAgile</b> as the top Simpliaxis alternative if you need broad training across PMP, Agile, DevOps, and data science with strong placement support.</p>
                    <p className="x-h">Top Alternatives to Simpliaxis</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile:</b> Best all-round choice for balanced, expert-led training, career assistance, and competitive pricing across multiple technical domains.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={10} query="Automation Testing Course With Placement Support" states={['b', 'b', 'f', 'b']} extra>
                <Mini engine="ChatGPT" tag="Named first" captionEngine="ChatGPT" when="19 Aug to 16 Sep 2026" label="ChatGPT answer, recreated from a dated capture" shot={shot('craft058', 'ChatGPT: “Automation Testing Course With Placement Support”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 prices and 1 source hidden.', 1617, 892)}>
                  <div className="state ui-chat on">
                    <div className="c-user">Automation Testing Course With Placement Support</div>
                    <div className="c-reply">
                      <p>If you&apos;re specifically looking for automation testing + placement support, current programs range from short Playwright/Selenium courses to full SDET-style programs.</p>
                      <table className="c-table">
                        <thead><tr><th scope="col">Provider</th><th scope="col">Main focus</th><th scope="col">Duration</th></tr></thead>
                        <tbody><tr><td><b className="yb">StarAgile</b></td><td>Java, Selenium, Playwright, Cypress, API, SQL, Git/Jenkins/Docker</td><td>~3 months + career track</td></tr></tbody>
                      </table>
                    </div>
                  </div>
                </Mini>
              </Row>
              <Row n={11} query="Best Automation Testing Course With Placement Support" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="19 Aug to 16 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft057', 'Google AI Overview: “Best Automation Testing Course With Placement Support”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 1 source hidden.', 1872, 851)}>
                  <Aio chips={{mark: 'S', label: 'StarAgile'}}>
                    <p><b className="yb">StarAgile offers one of the top automation testing courses with placement support</b>, featuring a curriculum that integrates GenAI, Java, Selenium, and Cypress alongside dedicated career bootcamps and job interviews.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={12} query="Best CSPO Courses" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft089', 'Google AI Overview: “Best CSPO Courses”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 price and 1 source hidden.', 1546, 826)}>
                  <Aio>
                    <p>The top providers for Certified Scrum Product Owner (CSPO) courses include <b className="yb">StarAgile</b>, Simplilearn, upGrad KnowledgeHut, Invensis Learning, Agilemania, Cprime, and Mountain Goat Software.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={13} query="Best DevOps Course With Placement Support" states={['f', 'b', 'n', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="19 Aug to 16 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft055', 'Google AI Overview: “Best DevOps Course With Placement Support”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source hidden.', 1836, 852)}>
                  <Aio chips={{mark: 'S', label: 'StarAgile +1'}}>
                    <p>Top DevOps courses with placement support in India include programs offered by <b className="yb">StarAgile</b>, Intellipaat, and Paperlive Learning.</p>
                    <p className="x-h">Top DevOps Courses with Placement</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile:</b> This course includes Generative AI tools, an IBM collaboration, and access to over 400 hiring partners. …</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={14} query="Best Online CSM Courses" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft083', 'Google AI Overview: “Best Online CSM Courses”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source hidden.', 1857, 847)}>
                  <Aio>
                    <p>Top online CSM training providers and prep options compared by learner priority include:</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile:</b> Best for schedule choice, offering an extensive published calendar with frequent weekday and weekend live batches. …</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={15} query="Best Training Providers Scrum Master Certification" states={['f', 'b', 'n', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 to 31 Aug 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft014', 'Google AI Overview: “Best Training Providers Scrum Master Certification”', 'captured 21 to 31 Aug 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 1 source hidden.', 1805, 850)}>
                  <Aio>
                    <p>The best training providers for a Scrum Master certification include <b className="yb">StarAgile</b>, Simplilearn, and KnowledgeHut, which offer structured, live-instructor courses tailored for official credentials.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={16} query="Certified Scrum Master Providers in India" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="19 Aug to 16 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft044', 'Google AI Overview: “Certified Scrum Master Providers in India”', 'captured 19 Aug to 16 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 prices and 1 source hidden.', 1862, 813)}>
                  <Aio>
                    <p>Top Certified Scrum Master training providers in India include:</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile</b>: Offers live online weekend training, mock tests, and real-world case studies with certified trainers.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={17} query="CSM Certification Training Providers" states={['f', 'b', 'b', 'b']} extra>
                <div className="qcompact">
                  <p className="qc-eng"><span>Google AI Overview</span></p>
                  <Tag label="Named first"/>
                  <p className="ac-cap">captured 27 Oct to 3 Nov 2026</p>
                </div>
              </Row>
              <Row n={18} query="CSM Certification Training Providers for Career Switchers" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="27 Oct to 3 Nov 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft112', 'Google AI Overview: “CSM Certification Training Providers for Career Switchers”', 'captured 27 Oct to 3 Nov 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 sources hidden.', 1847, 860)}>
                  <Aio>
                    <p className="x-h">Top CSM Training Providers for Career Switchers</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile</b></li></ul>
                    <p>Best for: Cost-effectiveness and value in India.</p>
                    <p>Highlights: Includes the Scrum Alliance exam fee, 2-year membership, interactive case studies, and structured class scheduling around working hours.</p>
                  </Aio>
                </Mini>
              </Row>
              <Row n={19} query="CSPO Training Institutes in Bangalore" states={['b', 'b', 'f', 'b']} extra>
                <Mini engine="ChatGPT" tag="Named first" captionEngine="ChatGPT" when="21 Sep to 25 Oct 2026" label="ChatGPT answer, recreated from a dated capture" shot={shot('craft105', 'ChatGPT: “CSPO Training Institutes in Bangalore”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 source and 1 address hidden.', 1490, 846)}>
                  <div className="state ui-chat on">
                    <div className="c-user">CSPO Training Institutes in Bangalore</div>
                    <div className="c-reply">
                      <p className="x-h">Top institutes to compare</p>
                      <p>1. <b className="yb">StarAgile</b></p>
                      <p>Offers CSPO certification training with live virtual classes and weekend scheduling options. Compare the trainer, practical exercises and package inclusions before booking.</p>
                    </div>
                  </div>
                </Mini>
              </Row>
              <Row n={20} query="Scrum Master Training Providers" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="1 to 7 Sep 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft021', 'Google AI Overview: “Scrum Master Training Providers”', 'captured 1 to 7 Sep 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 location and 1 source hidden.', 1842, 851)}>
                  <Aio chips={{mark: 'Y', label: 'YouTube · Simplilearn +1'}}>
                    <p>Top Certified Scrum Master (CSM) training providers include <b className="yb">StarAgile</b>, KnowledgeHut, and Simplilearn.</p>
                    <p className="x-h">Top Providers Overview</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile</b>: Offers live, trainer-led sessions, weekend schedules, and mock tests.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={21} query="Top CSM Training Institutes in Bangalore" states={['n', 'b', 'f', 'b']} extra>
                <Mini engine="ChatGPT" tag="Named first" captionEngine="ChatGPT" when="21 Sep to 25 Oct 2026" label="ChatGPT answer, recreated from a dated capture" shot={shot('craft110', 'ChatGPT: “Top CSM Training Institutes in Bangalore”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 sources and 1 address hidden.', 1483, 822)}>
                  <div className="state ui-chat on">
                    <div className="c-user">Top CSM Training Institutes in Bangalore</div>
                    <div className="c-reply">
                      <p className="x-h">Recommended institutes</p>
                      <p>1. <b className="yb">StarAgile</b></p>
                      <p>A good starting point for working professionals seeking structured CSM preparation, mock exams and trainer-led instruction.</p>
                    </div>
                  </div>
                </Mini>
              </Row>
              <Row n={22} query="Top CSPO Training Institutes in Bangalore" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft103', 'Google AI Overview: “Top CSPO Training Institutes in Bangalore”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 2 prices, 1 location and 1 source hidden.', 1855, 847)}>
                  <Aio>
                    <p>Top Certified Scrum Product Owner (CSPO) training institutes … offer 16-hour, two-day live instructor-led programs approved by the Scrum Alliance.</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile</b>: Offers a 2-day live virtual training format with packages starting around … (Standard, StarX, and StarMax tiers), including a 2-year Scrum Alliance membership and 16 SEUs/PDUs.</li></ul>
                  </Aio>
                </Mini>
              </Row>
              <Row n={23} query="Top Weekend CSM Courses" states={['f', 'b', 'b', 'b']} extra>
                <Mini engine="Google AI Overview" tag="Named first" captionEngine="Google AI Overview" when="21 Sep to 25 Oct 2026" label="Google AI Overview answer, recreated from a dated capture" shot={shot('craft101', 'Google AI Overview: “Top Weekend CSM Courses”', 'captured 21 Sep to 25 Oct 2026 · Named first', 'Screenshot as captured. Red boxes as marked in the dated report. 1 price and 1 source hidden.', 1847, 862)}>
                  <Aio chips={{mark: 'S', label: 'StarAgile +2'}}>
                    <p>Top Certified ScrumMaster (CSM) weekend training providers … offer 16-hour live-online or classroom bootcamps certified by the Scrum Alliance.</p>
                    <p className="x-h">Top Weekend CSM Course Providers</p>
                    <ul className="x-ul"><li><b className="yb">StarAgile:</b> Known for flexible weekend schedules, live Certified Scrum Trainer (CST) sessions, and a bundled pricing model … which includes the exam fee and a 2-year Scrum Alliance membership.</li></ul>
                  </Aio>
                </Mini>
              </Row>
            </tbody>
          </table>
          <p className="qw-note">23 of the 48 queries we tracked in AI answers. The other 25 never had StarAgile first.</p>
          <button type="button" className="qw-more" aria-expanded="false" aria-controls="qw-body">Show all 23</button>
        </div>
      </div>
    </section>
  );
}
