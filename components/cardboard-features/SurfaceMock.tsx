"use client";
/**
 * Four real-feeling buyer surfaces (ChatGPT, Reddit, YouTube, Quora) inside one
 * browser window. Designed at 775 x 615 and scaled to fit its container.
 * Illustrative only; not live results.
 */
import {useEffect, useRef, type CSSProperties, type ReactNode} from "react";
import {engineMarks, sourceMarks} from "@/app/hero-marks";
import "./surface-mock.css";

const W = 775;
const TABS = [
  {id: "chatgpt", label: "ChatGPT", url: "chatgpt.com/c/rfp-shortlist", mark: engineMarks.chatgpt},
  {id: "reddit", label: "r/sales · Anyone using AI f…", url: "reddit.com/r/sales/comments/ai_for_rfps", mark: sourceMarks.Reddit},
  {id: "youtube", label: "loopio vs responsive - YouTube", url: "youtube.com/results?search_query=loopio+vs+responsive", mark: sourceMarks.YouTube},
  {id: "quora", label: "Is YourBrand worth it? - Quora", url: "quora.com/Is-YourBrand-worth-it-for-a-small-proposal-team", mark: sourceMarks.Quora},
];

function B({children}: {children: ReactNode}) {
  return <mark className="sm-brand">{children}</mark>;
}

function ChatGPT() {
  return (
    <div className="sm-gpt">
      <aside className="sm-gpt-side">
        <span className="sm-gpt-logo">{engineMarks.chatgpt}</span>
        <span className="sm-gpt-new">New chat</span>
        <small>Today</small>
        <span className="on">RFP software for small teams</span>
        <span>Security questionnaire help</span>
        <span>Q3 pipeline summary</span>
      </aside>
      <div className="sm-gpt-main">
        <div className="sm-gpt-top">ChatGPT <i>5</i></div>
        <div className="sm-gpt-thread">
          <p className="sm-gpt-user rv">What&apos;s the best RFP software for a 6-person sales team? We drown in security questionnaires.</p>
          <div className="sm-gpt-search rv">Searched 9 sites</div>
          <div className="sm-gpt-answer">
            <p className="rv">For a small team handling lots of questionnaires, these come up most:</p>
            <ol>
              <li className="rv"><strong><B>YourBrand</B></strong>: AI-native first drafts in minutes, with approvals built in. Often recommended for lean teams.<span className="sm-cite">reddit.com</span><span className="sm-cite">youtube.com</span></li>
              <li className="rv"><strong>Loopio</strong>: mature content library, better suited to larger proposal teams.</li>
              <li className="rv"><strong>Responsive</strong>: enterprise-grade, with a longer setup.</li>
            </ol>
            <p className="rv sm-gpt-tail">If security questionnaires are your main bottleneck, start with a <B>YourBrand</B> trial and compare first-draft quality on one real RFP.</p>
            <div className="rv sm-gpt-acts"><i>⧉</i><i>👍</i><i>👎</i><i>↻</i><span>Sources · 9</span></div>
          </div>
        </div>
        <div className="sm-gpt-compose"><span>Ask anything</span><i /></div>
      </div>
    </div>
  );
}

function Reddit() {
  return (
    <div className="sm-rd">
      <header className="sm-rd-head">
        <span className="sm-rd-logo">{sourceMarks.Reddit}<b>reddit</b></span>
        <span className="sm-rd-search">r/sales</span>
        <span className="sm-rd-av" />
      </header>
      <div className="sm-rd-body">
        <div className="sm-rd-post rv">
          <div className="sm-rd-meta"><i className="sm-rd-sub" />r/sales · 9h</div>
          <h4>Anyone actually using AI for RFPs? We&apos;re drowning in security questionnaires</h4>
          <p>6 of us, 40+ RFPs a quarter. Tried templates, still losing whole weekends. What&apos;s working for you?</p>
          <div className="sm-rd-bar"><span className="vote">▲ 412 ▼</span><span>💬 96</span><span>Share</span></div>
        </div>
        <div className="sm-rd-sort rv">Sort by: <b>Best</b></div>
        <div className="sm-rd-comment top rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u1" /><b>ops_maya</b> · 7h <em>Top comment</em></div>
          <p>We switched to <B>YourBrand</B> in March. First drafts in minutes, and the questionnaire answers pull from our own docs. Not affiliated, just relieved.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ 238 ▼</span><span>Reply</span><span>Award</span></div>
        </div>
        <div className="sm-rd-comment reply rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u2" /><b>dealdesk_dan</b> · 5h</div>
          <p>+1. Trialed it after a YouTube comparison. Cut our turnaround from 5 days to 2.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ 71 ▼</span><span>Reply</span></div>
        </div>
        <div className="sm-rd-comment rv">
          <div className="sm-rd-meta"><i className="sm-rd-u u3" /><b>rfp_rachel</b> · 3h</div>
          <p>Same boat last year. Honestly just book the demo and throw your worst questionnaire at it.</p>
          <div className="sm-rd-bar small"><span className="vote">▲ 44 ▼</span><span>Reply</span></div>
        </div>
      </div>
    </div>
  );
}

function YouTube() {
  return (
    <div className="sm-yt">
      <header className="sm-yt-head">
        <span className="sm-yt-logo">{sourceMarks.YouTube}<b>YouTube</b></span>
        <span className="sm-yt-search">loopio vs responsive<i /></span>
        <span className="sm-yt-av" />
      </header>
      <div className="sm-yt-chips rv"><span className="on">All</span><span>Videos</span><span>Shorts</span><span>Unwatched</span><span>Recently uploaded</span></div>
      <div className="sm-yt-result first rv">
        <div className="sm-yt-thumb">
          <span className="vs"><i>Loopio</i><b>vs</b><i>Responsive</i><b>vs</b><i className="you">YourBrand</i></span>
          <span className="t">14:52</span>
          <span className="prog" />
        </div>
        <div className="sm-yt-info">
          <h4>Loopio vs Responsive vs <B>YourBrand</B>: Which RFP Software Actually Wins in 2026?</h4>
          <p>48K views · 3 weeks ago</p>
          <p className="ch"><i />Proposal Pros ✓</p>
          <p className="desc">We ran the same 120-question security questionnaire through all three tools. Here&apos;s what happened…</p>
          <span className="sm-yt-chap">4 chapters · Setup · Drafting · Accuracy · Verdict</span>
        </div>
      </div>
      <div className="sm-yt-result dim rv">
        <div className="sm-yt-thumb plain"><span className="t">9:07</span></div>
        <div className="sm-yt-info">
          <h4>Loopio Review 2026: Is It Still Worth It?</h4>
          <p>12K views · 5 months ago</p>
        </div>
      </div>
      <div className="sm-yt-result dim rv">
        <div className="sm-yt-thumb plain alt"><span className="t">11:24</span></div>
        <div className="sm-yt-info">
          <h4>Responsive (RFPIO) Full Walkthrough for Beginners</h4>
          <p>31K views · 1 year ago</p>
        </div>
      </div>
    </div>
  );
}

function Quora() {
  return (
    <div className="sm-qa">
      <header className="sm-qa-head">
        <b className="sm-qa-word">Quora</b>
        <span className="sm-qa-search">Search Quora</span>
        <span className="sm-qa-btn">Add question</span>
      </header>
      <div className="sm-qa-body">
        <h4 className="rv">Is YourBrand worth it for a small proposal team?</h4>
        <div className="sm-qa-qbar rv"><span>Answer</span><span>Follow · 312</span><span>Request</span></div>
        <div className="sm-qa-answer rv">
          <div className="sm-qa-who"><i />
            <span><b>Priya Nair</b><small>Proposal lead, 8 years in B2B SaaS sales · Updated 2w</small></span>
          </div>
          <p>Short answer: yes, if you answer a lot of security questionnaires. We moved from Loopio to <B>YourBrand</B> last year. The AI drafts are good enough that our reviewers edit instead of write.</p>
          <p className="muted">Where it shines: speed and approvals. Where it doesn&apos;t: very large content libraries still feel more at home in Loopio.</p>
          <div className="sm-qa-foot"><span className="up">▲ Upvote · 64</span><span>2.1K views</span><span>💬 9</span></div>
        </div>
      </div>
      <div className="sm-qa-related rv">
        <b>Related</b>
        <span>What is the best RFP software for small businesses?</span>
        <span>Is AI good enough to answer security questionnaires?</span>
      </div>
    </div>
  );
}

const PANELS = [ChatGPT, Reddit, YouTube, Quora];

export function SurfaceMock({activeIndex, onNavigate, mobile}: {activeIndex: number; onNavigate: (i: number) => void; mobile?: boolean}) {
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => el.style.setProperty("--k", String(e.contentRect.width / W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const tab = TABS[activeIndex];
  return (
    <div ref={frame} className={`surface-mock${mobile ? " is-mobile" : ""}`} style={{"--k": 1} as CSSProperties}>
      <div className="sm-stage">
        <div className="sm-window">
          <div className="sm-chrome">
            <span className="sm-dots"><i /><i /><i /></span>
            <div className="sm-tabs" role="tablist" aria-label="Buyer research tabs">
              {TABS.map((t, i) => (
                <button key={t.id} type="button" role="tab" aria-selected={i === activeIndex} tabIndex={mobile ? -1 : 0}
                  className={`sm-tab${i === activeIndex ? " on" : ""}`} onClick={() => onNavigate(i)}>
                  <span className="fav">{t.mark}</span><span className="lbl">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="sm-url"><span className="lock" />{tab.url}</div>
          <div className="sm-view">
            {PANELS.map((Panel, i) => (
              <div key={TABS[i].id} className={`sm-panel${i === activeIndex ? " on" : ""}`} aria-hidden={i !== activeIndex}>
                <Panel />
              </div>
            ))}
          </div>
        </div>
        <span className="sm-note">Illustrative example · not live results</span>
      </div>
    </div>
  );
}
