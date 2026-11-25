import Link from 'next/link';

/** Cover reels and card copy, carried over from the approved hub prototype. */
export function WorkGrid(){
  return (
  <>
    <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true" focusable="false">
      <symbol id="ptr" viewBox="0 0 24 24">
        <path d="M5 2.5v17.2l4.3-4.1 2.9 6.6 3-1.3-2.9-6.5h6z" fill="#fff" stroke="#111" strokeWidth="1.4" strokeLinejoin="round"/>
      </symbol>
      <symbol id="spark" viewBox="0 0 24 24">
        <path d="M12 0c1 6.5 4.5 11 12 12-7.5 1-11 5.5-12 12-1-6.5-4.5-11-12-12 7.5-1 11-5.5 12-12z"/>
      </symbol>
      <symbol id="pin" viewBox="0 0 24 32">
        <path d="M12 0C5.4 0 0 5.3 0 11.9 0 20.8 12 32 12 32s12-11.2 12-20.1C24 5.3 18.6 0 12 0z"/>
        <circle cx="12" cy="12" r="4.6" fill="#fff"/>
      </symbol>
      <symbol id="star" viewBox="0 0 24 24">
        <path d="m12 1.8 3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z"/>
      </symbol>
    </svg>
    <div className="ip-wrap wk-wrap">
      <div className="wk-grid">
      <div className="wk-lead">
        {/* 1. StarAgile, lead card (published case study) */}
        <Link className="wk-card sa rv" href="/work/staragile" id="tile-staragile" data-reel="staragile" prefetch={false}>
          <div className="wk-media" aria-hidden="true">
            <div className="reel reel-sa">
              <div className="stage">
                <div className="cam">
                  <div className="sa-bg"/>
                  <svg className="spk spk1">
                    <use href="#spark"/>
                  </svg>
                  <svg className="spk spk2">
                    <use href="#spark"/>
                  </svg>
                  <svg className="spk spk3">
                    <use href="#spark"/>
                  </svg>
                  {/* Scene A: search */}
                  <div className="sa-search">
                    <span className="gmark"/>
                    <span className="sa-q">
                      <span className="tyw">
                        <span data-type="sa,1,15,31">
                          {"Best Certified Scrum Master Training Providers"}
                        </span>
                        <i className="caret"/>
                      </span>
                    </span>
                    <span className="sa-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                        <circle cx="11" cy="11" r="7"/>
                        <path d="m20 20-3.5-3.5"/>
                      </svg>
                    </span>
                  </div>
                  <div className="wipe sa-wipe"/>
                  {/* Scene B: AI Overview */}
                  <div className="sa-aio">
                    <div className="sa-aio-in">
                      <div className="aio-head">
                        <span className="gmark"/>
                        <b>
                          {"Best Certified Scrum Master Training Providers"}
                        </b>
                      </div>
                      <div className="aio-tag">
                        <i/>
                        {"AI Overview"}
                      </div>
                      <p className="sa-lead">
                        <span className="wl" data-w="sa,13,47,59">
                          {"StarAgile is the top overall choice for Certified ScrumMaster (CSM) training in India."}
                        </span>
                        <span className="c1">
                          {"1"}
                        </span>
                      </p>
                      <ul className="sa-list">
                        <li className="hit">
                          <span className="sweep"/>
                          <span className="c1 sm">
                            {"1"}
                          </span>
                          <b>
                            {"StarAgile:"}
                          </b>
                          {" Best overall value in India; features live online Certified Scrum Trainers (CSTs), exam fees included."}
                        </li>
                        <li>
                          <b>
                            {"Simplilearn:"}
                          </b>
                          {" Excellent for structured online bootcamps and case studies."}
                        </li>
                      </ul>
                      <div className="sa-src">
                        <span className="lab">
                          {"Sources"}
                        </span>
                        <span className="chip">
                          <img src="/work/clients/staragile.png" alt="" width={236} height={150}/>
                          <span className="c1 sm">
                            {"1"}
                          </span>
                          {"StarAgile"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sa-big">
                    <b className="cnt"/>
                    <span>
                      {"named first"}
                    </span>
                  </div>
                  {/* End card */}
                  <div className="wipe sa-endwipe"/>
                  <div className="endcard sa-end">
                    <img src="/work/brandlogos/staragile.png" alt="" width={298} height={102}/>
                  </div>
                  <svg className="ptr sa-ptr">
                    <use href="#ptr"/>
                  </svg>
                  <span className="ring sa-ring"/>
                </div>
              </div>
            </div>
            <blockquote className="wk-desc wk-quote">
              {"\"It's good to see StarAgile getting visibility on generic prompts now. Let's maintain this pace.\""}
              <cite>
                {"Rishav Kumar, StarAgile"}
              </cite>
            </blockquote>
            <p className="cover-cap">
              <strong>
                {"Google · AI Overview"}
              </strong>
              <span>
                {"Recreated from capture, 21 to 31 Aug 2026"}
              </span>
            </p>
          </div>
          <div className="wk-body">
            <div className="wk-top">
              <span className="wk-logo">
                <img src="/work/clients/staragile.png" alt="" width={236} height={150}/>
              </span>
              <h2>
                {"StarAgile"}
              </h2>
              <span className="wk-pill study">
                {"Case study"}
              </span>
            </div>
            <div className="wk-metric">
              <b>
                {"45"}
              </b>
              <span>
                {"AI answers named first, of 89 captured"}
              </span>
            </div>
            <p className="wk-sub">
              {"First on 23 of 48 buyer queries · all 4 AI engines"}
            </p>
            <span className="wk-go">
              {"Read the case study "}
              <svg className="arrow-go" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 7h10v10"/>
                <path d="M7 17 17 7"/>
              </svg>
            </span>
          </div>
        </Link>
        {/* 2. Synup */}
        <Link className="wk-card place synup rv" href="/work?client=synup#proof-synup" id="tile-synup" data-client="synup" data-reel="synup">
          <div className="wk-media" aria-hidden="true">
            <div className="reel reel-sy">
              <div className="stage">
                <div className="cam">
                  <div className="sy-bg"/>
                  {/* Scene A: multi-location map */}
                  <div className="sy-map">
                    <svg className="sy-roads" viewBox="0 0 800 500" fill="none">
                      <path d="M-20 380C160 300 260 420 420 330S700 160 840 220"/>
                      <path d="M120 -20C170 140 120 300 220 520"/>
                      <path d="M560 -20C520 160 640 300 600 520"/>
                      <path d="M-20 140C200 170 420 90 840 120"/>
                    </svg>
                    <span className="sy-p p1">
                      <svg>
                        <use href="#pin"/>
                      </svg>
                      <i className="st">
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                      </i>
                    </span>
                    <span className="sy-p p2">
                      <svg>
                        <use href="#pin"/>
                      </svg>
                      <i className="st">
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                      </i>
                    </span>
                    <span className="sy-p p3">
                      <svg>
                        <use href="#pin"/>
                      </svg>
                      <i className="st">
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                      </i>
                    </span>
                    <span className="sy-p p4">
                      <svg>
                        <use href="#pin"/>
                      </svg>
                      <i className="st">
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                      </i>
                    </span>
                    <span className="sy-p p5">
                      <svg>
                        <use href="#pin"/>
                      </svg>
                      <i className="st">
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                        <svg>
                          <use href="#star"/>
                        </svg>
                      </i>
                    </span>
                  </div>
                  <div className="wipe sy-wipe"/>
                  {/* Scene B: Google AI Overview */}
                  <div className="sy-aio">
                    <div className="aio-head">
                      <span className="gmark"/>
                      <b className="ty">
                        <span className="tyw">
                          <span data-type="sy,14,45,57">
                            {"Top Review Management Tools for Urgent Care Chains"}
                          </span>
                          <i className="caret"/>
                        </span>
                      </b>
                    </div>
                    <div className="aio-tag">
                      <i/>
                      {"AI Overview"}
                    </div>
                    <p className="sy-lead">
                      <span className="wl" data-w="sy,14,55,66">
                        {"The top review management and patient reputation tools for urgent care chains include "}
                        <u>
                          {"Synup"}
                        </u>
                        {", Birdeye, rater8, Reputation, and RepuGen."}
                      </span>
                      <span className="c1">
                        {"1"}
                      </span>
                    </p>
                    <ul className="sy-list">
                      <li className="hit">
                        <span className="sweep"/>
                        <span className="c1 sm">
                          {"1"}
                        </span>
                        <b>
                          {"Synup:"}
                        </b>
                        {" Combined review collection, Google Business Profile oversight, and multi-location local SEO."}
                      </li>
                      <li>
                        <b>
                          {"Birdeye:"}
                        </b>
                        {" Healthcare-focused reputation workflows and automated review requests."}
                      </li>
                    </ul>
                  </div>
                  <div className="endcard sy-end">
                    <img src="/work/brandlogos/synup.svg" alt="" width={623} height={180}/>
                  </div>
                  <svg className="ptr sy-ptr">
                    <use href="#ptr"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="cover-cap">
              <strong>
                {"Google · AI Overview"}
              </strong>
              <span>
                {"Recreated from capture, 31 Oct 2026"}
              </span>
            </p>
          </div>
          <div className="wk-body">
            <div className="wk-top">
              <span className="wk-logo">
                <img src="/work/clients/synup.svg" alt="" width={623} height={180}/>
              </span>
              <h2>
                {"Synup"}
              </h2>
              <span className="wk-pill live">
                {"Live placements"}
              </span>
            </div>
            <p className="wk-desc">
              {"Comparisons and videos placed where agencies and franchisors research local marketing platforms."}
            </p>
            <span className="wk-go">
              {"See 4 live queries "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14"/>
                <path d="m6 13 6 6 6-6"/>
              </svg>
            </span>
          </div>
        </Link>
        {/* 3. Inventive AI */}
        <Link className="wk-card place inventive rv" href="/work?client=inventive-ai#proof-inventive-ai" id="tile-inventive" data-client="inventive-ai" data-reel="inventive">
          <div className="wk-media" aria-hidden="true">
            <div className="reel reel-iv">
              <div className="stage">
                <div className="cam">
                  <div className="iv-bg"/>
                  {/* Scene A: RFP being drafted */}
                  <div className="iv-doc">
                    <div className="iv-doc-h">
                      <img src="/work/clients/inventive.png" alt="" width={158} height={158}/>
                      <b>
                        {"RFP Agent"}
                      </b>
                      <span className="iv-dot"/>
                    </div>
                    <div className="iv-qrow">
                      <i className="qn">
                        {"Q1"}
                      </i>
                      <span className="ln">
                        <em/>
                      </span>
                    </div>
                    <div className="iv-qrow">
                      <i className="qn">
                        {"Q2"}
                      </i>
                      <span className="ln">
                        <em/>
                      </span>
                    </div>
                    <div className="iv-qrow">
                      <i className="qn">
                        {"Q3"}
                      </i>
                      <span className="ln">
                        <em/>
                      </span>
                    </div>
                    <div className="iv-qrow">
                      <i className="qn">
                        {"Q4"}
                      </i>
                      <span className="ln">
                        <em/>
                      </span>
                    </div>
                  </div>
                  {/* Scene B: Perplexity answer */}
                  <div className="iv-px">
                    <div className="px-top">
                      <span className="px-tabs">
                        <b>
                          {"Answer"}
                        </b>
                        <span>
                          {"Links"}
                        </span>
                        <span>
                          {"Sources"}
                        </span>
                        <i className="px-ul"/>
                      </span>
                      <span className="px-chip">
                        {"Perplexity"}
                      </span>
                    </div>
                    <div className="px-query">
                      {"Best Responsive Alternatives"}
                    </div>
                    <p className="iv-lead">
                      <span className="wl" data-w="iv,14,45,57">
                        {"Recent roundups also highlight newer AI-first tools like "}
                        <u>
                          {"Inventive AI"}
                        </u>
                        {", SiftHub, and others as contenders."}
                      </span>
                      <span className="c1">
                        {"1"}
                      </span>
                    </p>
                    <ul className="iv-list">
                      <li className="hit">
                        <span className="sweep"/>
                        <span className="c1 sm">
                          {"1"}
                        </span>
                        <b>
                          {"Best for newer AI-first workflows:"}
                        </b>
                        {" Inventive AI, SiftHub, Thalamus AI, AutogenAI."}
                      </li>
                    </ul>
                    <div className="iv-src">
                      <span className="lab">
                        {"Sources"}
                      </span>
                      <span className="chip">
                        <span className="c1 sm">
                          {"1"}
                        </span>
                        {"LinkedIn · Best Responsive Alternatives in 2026"}
                      </span>
                    </div>
                  </div>
                  <div className="endcard iv-end">
                    <img src="/work/brandlogos/inventive.svg" alt="" width={531} height={95}/>
                  </div>
                  <svg className="ptr iv-ptr">
                    <use href="#ptr"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="cover-cap">
              <strong>
                {"Perplexity · Answer"}
              </strong>
              <span>
                {"Recreated from capture, date unrecorded"}
              </span>
            </p>
          </div>
          <div className="wk-body">
            <div className="wk-top">
              <span className="wk-logo">
                <img src="/work/clients/inventive.png" alt="" width={158} height={158}/>
              </span>
              <h2>
                {"Inventive AI"}
              </h2>
              <span className="wk-pill live">
                {"Live placements"}
              </span>
            </div>
            <p className="wk-desc">
              {"Comparisons and videos placed along the path a buyer takes to choose RFP software."}
            </p>
            <span className="wk-go">
              {"See 4 live queries "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14"/>
                <path d="m6 13 6 6 6-6"/>
              </svg>
            </span>
          </div>
        </Link>
      </div>
      <div className="wk-pair">
        {/* 4. HubEngage */}
        <Link className="wk-card place hubengage rv" href="/work?client=hubengage#proof-hubengage" id="tile-hubengage" data-client="hubengage" data-reel="hubengage">
          <div className="wk-media" aria-hidden="true">
            <div className="reel reel-he">
              <div className="stage">
                <div className="cam">
                  <div className="he-bg"/>
                  {/* Scene A: one hub, many channels */}
                  <div className="he-hub">
                    <svg className="he-lines" viewBox="0 0 800 500" fill="none">
                      <path className="l1" d="M400 250L170 120"/>
                      <path className="l2" d="M400 250L630 110"/>
                      <path className="l3" d="M400 250L660 370"/>
                      <path className="l4" d="M400 250L150 380"/>
                      <path className="l5" d="M400 250L400 60"/>
                    </svg>
                    <span className="he-core">
                      <img src="/work/clients/white/hubengage.png" alt="" width={160} height={160}/>
                    </span>
                    <span className="he-n n1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="6" y="2" width="12" height="20" rx="3"/>
                        <path d="M11 18h2"/>
                      </svg>
                    </span>
                    <span className="he-n n2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <path d="m3 7 9 6 9-6"/>
                      </svg>
                    </span>
                    <span className="he-n n3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 5h16v11H9l-5 4z"/>
                      </svg>
                    </span>
                    <span className="he-n n4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="13" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                    </span>
                    <span className="he-n n5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.7 21a2 2 0 0 1-3.4 0"/>
                      </svg>
                    </span>
                  </div>
                  <div className="wipe he-wipe"/>
                  {/* Scene B: Google AI Mode */}
                  <div className="he-aim">
                    <div className="aim-top">
                      <span className="aim-chip">
                        {"Google · AI Mode"}
                      </span>
                      <span className="aim-q">
                        {"Best Simpplr Alternatives in 2026"}
                      </span>
                    </div>
                    <p className="he-lead">
                      <span className="wl" data-w="he,14,50,61">
                        {"The best Simpplr alternatives in 2026 are Workvivo, Staffbase, Blink, LumApps, and "}
                        <u>
                          {"HubEngage"}
                        </u>
                        {"."}
                      </span>
                      <span className="c1">
                        {"1"}
                      </span>
                    </p>
                    <div className="he-table">
                      <div className="tr th">
                        <span>
                          {"Platform"}
                        </span>
                        <span>
                          {"Best For"}
                        </span>
                        <span>
                          {"Key Strength"}
                        </span>
                      </div>
                      <div className="tr dim">
                        <span>
                          {"Workvivo"}
                        </span>
                        <span>
                          {"Culture & Social"}
                        </span>
                        <span>
                          {"Social activity feed"}
                        </span>
                      </div>
                      <div className="tr hit">
                        <span className="sweep"/>
                        <span>
                          <span className="c1 sm">
                            {"1"}
                          </span>
                          <b>
                            {"HubEngage"}
                          </b>
                        </span>
                        <span>
                          {"Tool Consolidation"}
                        </span>
                        <span>
                          {"Modular comms, surveys & rewards"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="endcard he-end">
                    <img src="/work/brandlogos/hubengage.png" alt="" width={806} height={134}/>
                  </div>
                  <svg className="ptr he-ptr">
                    <use href="#ptr"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="cover-cap">
              <strong>
                {"Google · AI Mode"}
              </strong>
              <span>
                {"Recreated from capture, after 29 Jul 2026"}
              </span>
            </p>
          </div>
          <div className="wk-body">
            <div className="wk-top">
              <span className="wk-logo">
                <img src="/work/clients/hubengage.png" alt="" width={162} height={162}/>
              </span>
              <h2>
                {"HubEngage"}
              </h2>
              <span className="wk-pill live">
                {"Live placements"}
              </span>
            </div>
            <p className="wk-desc">
              {"Comparisons that put an internal comms platform in front of buyers researching with AI."}
            </p>
            <span className="wk-go">
              {"See 4 live queries "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14"/>
                <path d="m6 13 6 6 6-6"/>
              </svg>
            </span>
          </div>
        </Link>
        {/* 5. BacklinkOS. No AI capture on file, so the cover shows their product UI motif (from backlinkos.io), not a citation. */}
        <Link className="wk-card place backlinkos rv" href="/work?client=backlinkos#proof-backlinkos" id="tile-backlinkos" data-client="backlinkos" data-reel="backlinkos">
          <div className="wk-media" aria-hidden="true">
            <div className="reel reel-bl">
              <div className="stage">
                <div className="cam">
                  <div className="bl-bg"/>
                  <div className="bl-win">
                    <div className="bl-bar">
                      <img src="/work/brandlogos/backlinkos.png" alt="" width={1006} height={294}/>
                      <span className="bl-tabs">
                        <b className="t-ex">
                          {"Exchanges"}
                        </b>
                        <b className="t-pa">
                          {"Partners"}
                        </b>
                        <b className="t-mo">
                          {"Monitor"}
                        </b>
                        <i className="bl-ul"/>
                      </span>
                      <span className="bl-av">
                        {"YK"}
                      </span>
                    </div>
                    <div className="bl-pane bl-mon">
                      <div className="bl-h">
                        <b>
                          {"Backlink monitor"}
                        </b>
                        <span className="bl-auto">
                          <i/>
                          {"Monitoring automatically"}
                        </span>
                      </div>
                      <div className="bl-row r1">
                        <span className="fav f1"/>
                        <span className="sk w1"/>
                        <span className="sk w4"/>
                        <span className="pill live">
                          <svg viewBox="0 0 24 24">
                            <path d="m5 12.5 4.5 4.5L19 7.5"/>
                          </svg>
                          {"Live"}
                        </span>
                      </div>
                      <div className="bl-row r2">
                        <span className="fav f2"/>
                        <span className="sk w2"/>
                        <span className="sk w5"/>
                        <span className="pill live">
                          <svg viewBox="0 0 24 24">
                            <path d="m5 12.5 4.5 4.5L19 7.5"/>
                          </svg>
                          {"Live"}
                        </span>
                      </div>
                      <div className="bl-row r3">
                        <span className="fav f3"/>
                        <span className="sk w3"/>
                        <span className="sk w4"/>
                        <span className="pill chk">
                          <i/>
                          {"Checking"}
                        </span>
                        <span className="pill live late">
                          <svg viewBox="0 0 24 24">
                            <path d="m5 12.5 4.5 4.5L19 7.5"/>
                          </svg>
                          {"Live"}
                        </span>
                      </div>
                      <div className="bl-row r4">
                        <span className="fav f4"/>
                        <span className="sk w1"/>
                        <span className="sk w5"/>
                        <span className="pill live">
                          <svg viewBox="0 0 24 24">
                            <path d="m5 12.5 4.5 4.5L19 7.5"/>
                          </svg>
                          {"Live"}
                        </span>
                      </div>
                      <span className="bl-scan"/>
                    </div>
                    <div className="bl-pane bl-par">
                      <div className="bl-search">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <circle cx="11" cy="11" r="7"/>
                          <path d="m20 20-3.5-3.5"/>
                        </svg>
                        <span className="tyw">
                          <span data-type="bl,2,10,22">
                            {"link building"}
                          </span>
                          <i className="caret"/>
                        </span>
                      </div>
                      <div className="bl-pc c1">
                        <span className="ava a1">
                          {"SR"}
                        </span>
                        <span className="pc-t">
                          <span className="sk w2"/>
                          <span className="sk w5 lt"/>
                        </span>
                        <span className="pc-b">
                          {"Propose exchange"}
                        </span>
                      </div>
                      <div className="bl-pc c2">
                        <span className="ava a2">
                          {"MK"}
                        </span>
                        <span className="pc-t">
                          <span className="sk w1"/>
                          <span className="sk w4 lt"/>
                        </span>
                        <span className="pc-b">
                          <em className="b1">
                            {"Propose exchange"}
                          </em>
                          <em className="b2">
                            {"Proposed"}
                          </em>
                        </span>
                      </div>
                      <div className="bl-pc c3">
                        <span className="ava a3">
                          {"AJ"}
                        </span>
                        <span className="pc-t">
                          <span className="sk w3"/>
                          <span className="sk w5 lt"/>
                        </span>
                        <span className="pc-b">
                          {"Propose exchange"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bl-ex">
                    <div className="ex-top">
                      <span className="ava a2">
                        {"MK"}
                      </span>
                      <span className="ex-sw">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 8h14l-4-4M20 16H6l4 4"/>
                        </svg>
                      </span>
                      <span className="ava a0">
                        {"YK"}
                      </span>
                    </div>
                    <div className="ex-l">
                      <b>
                        {"Link exchange"}
                      </b>
                      <span className="ex-st">
                        <em className="s1">
                          {"Pending"}
                        </em>
                        <em className="s2">
                          {"Accepted"}
                        </em>
                      </span>
                    </div>
                    <span className="sk w5 lt"/>
                  </div>
                  <div className="endcard bl-end">
                    <img src="/work/brandlogos/backlinkos.png" alt="" width={1006} height={294}/>
                  </div>
                  <svg className="ptr bl-ptr">
                    <use href="#ptr"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="cover-cap">
              <strong>
                {"BacklinkOS · Product UI"}
              </strong>
              <span>
                {"Recreated from backlinkos.io, 25 Nov 2026"}
              </span>
            </p>
          </div>
          <div className="wk-body">
            <div className="wk-top">
              <span className="wk-logo">
                <img src="/work/clients/backlinkos.png" alt="" width={84} height={80}/>
              </span>
              <h2>
                {"BacklinkOS"}
              </h2>
              <span className="wk-pill live">
                {"Live placements"}
              </span>
            </div>
            <p className="wk-desc">
              {"Category content tying link-building workflows to the tool built for them."}
            </p>
            <span className="wk-go">
              {"See 3 live queries "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14"/>
                <path d="m6 13 6 6 6-6"/>
              </svg>
            </span>
          </div>
        </Link>
      </div>
      </div>
    </div>
  </>
  );
}
