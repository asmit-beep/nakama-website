"use client";
/* Interactive, illustrative dashboards for Map / Earn / Compound. Fictional brands and numbers. */
import {useMemo, useState, type CSSProperties} from "react";
import {engineMarks, sourceMarks} from "@/app/hero-marks";
import "./dashboards.css";

const ENG = [
  {id: "chatgpt", name: "ChatGPT", mark: engineMarks.chatgpt},
  {id: "perplexity", name: "Perplexity", mark: engineMarks.perplexity},
  {id: "gemini", name: "Gemini", mark: engineMarks.gemini},
  {id: "google", name: "AI Overview", mark: engineMarks.google},
];

function Bar({title, right}: {title: string; right?: string}) {
  return (
    <div className="dx-bar">
      <span className="dx-dots"><i /><i /><i /></span>
      <b>{title}</b>
      <span className="dx-bar-r"><i className="dx-live" />{right ?? "Illustrative data"}</span>
    </div>
  );
}

function EngineIcon({i}: {i: number}) {
  return <span className={`dx-eng dx-eng-${ENG[i].id}`}>{ENG[i].mark}</span>;
}

/* ---------------- MAP ---------------- */
type Verdict = "named" | "cited" | "missing";
const PROMPTS: {q: string; tag: string; v: Verdict[]; who: string}[] = [
  {q: "best RFP software for small teams", tag: "Category", v: ["named", "missing", "cited", "missing"], who: "Perplexity named NorthPeak and Quillbase. You weren't mentioned."},
  {q: "NorthPeak alternatives", tag: "Replacement", v: ["missing", "missing", "missing", "cited"], who: "Every engine recommends Quillbase first. Biggest gap on the board."},
  {q: "AI for security questionnaires", tag: "Use case", v: ["named", "named", "cited", "named"], who: "You're named on 3 of 4 engines. Protect this one."},
  {q: "NorthPeak vs Quillbase", tag: "Comparison", v: ["missing", "cited", "missing", "missing"], who: "Comparison answers lean on one YouTube video. You aren't in it."},
  {q: "how to answer RFPs faster", tag: "Problem", v: ["cited", "missing", "named", "missing"], who: "Answers quote a Reddit thread from r/sales. Room to add a useful reply."},
];
const SOV: Record<string, number[]> = {chatgpt: [22, 41, 27, 10], perplexity: [14, 38, 36, 12], gemini: [26, 33, 29, 12], google: [18, 44, 25, 13]};
const BRANDS = ["YourBrand", "NorthPeak", "Quillbase", "Others"];
const TYPES = [
  {name: "Category prompts", k: 1.2, l: 1.1},
  {name: "Comparisons", k: 0.6, l: 1.3},
  {name: "Alternatives", k: 0.4, l: 1.4},
  {name: "Use cases", k: 1.6, l: 0.8},
];
const GAPS = [
  {src: "reddit.com/r/sales", share: 34, status: "Missing", plan: "Two genuinely useful replies from a practitioner, disclosed, in the threads answers already cite."},
  {src: "youtube.com · 'vs' videos", share: 27, status: "Competitor", plan: "One side-by-side comparison built around the exact 'NorthPeak vs Quillbase' query."},
  {src: "Listicles · 'best RFP tools'", share: 21, status: "Opportunity", plan: "Pitch inclusion to the 6 listicles that show up most in AI sources."},
  {src: "quora.com", share: 11, status: "Weak", plan: "Detailed answers to the 4 questions engines quote for this category."},
];

export function MapDash({step}: {step: number}) {
  const [row, setRow] = useState(0);
  const [eng, setEng] = useState(0);
  const [gap, setGap] = useState(0);
  const count = useMemo(() => (k: Verdict) => PROMPTS.reduce((n, p) => n + p.v.filter(v => v === k).length, 0), []);
  return (
    <div className="dx">
      <Bar title="Prompt radar · YourBrand" />
      {step === 0 && (
        <div className="dx-body dx-in" key="m0">
          <div className="dx-head"><div><small>Named</small><strong className="ok">{count("named")}<em>of 20 checks</em></strong></div><div><small>Cited as a source</small><strong className="mid">{count("cited")}</strong></div><div><small>Missing</small><strong className="bad">{count("missing")}</strong></div></div>
          <div className="dx-radar">
            <div className="dx-radar-row dx-radar-labels"><span>Prompt</span>{ENG.map((e, i) => <span key={e.id} className="c"><EngineIcon i={i} /></span>)}</div>
            {PROMPTS.map((p, i) => (
              <button type="button" key={p.q} className={`dx-radar-row${row === i ? " on" : ""}`} onClick={() => setRow(i)} onMouseEnter={() => setRow(i)} style={{"--d": `${i * 60}ms`} as CSSProperties}>
                <span className="q"><em>{p.tag}</em>{p.q}</span>
                {p.v.map((v, j) => <span className="c" key={j}><i className={`dx-v ${v}`} title={v} /></span>)}
              </button>
            ))}
          </div>
          <div className="dx-insight" key={row}><span className="dx-spark">✦</span>{PROMPTS[row].who}</div>
          <div className="dx-legend"><span><i className="dx-v named" />Named</span><span><i className="dx-v cited" />Cited as a source</span><span><i className="dx-v missing" />Missing</span></div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="m1">
          <div className="dx-tabs">{ENG.map((e, i) => <button type="button" key={e.id} className={eng === i ? "on" : ""} onClick={() => setEng(i)}><EngineIcon i={i} />{e.name}</button>)}</div>
          <div className="dx-sov">
            {BRANDS.map((b, i) => (
              <div className={`dx-sov-row${i === 0 ? " you" : ""}`} key={b}>
                <span>{b}</span>
                <i><em style={{width: `${SOV[ENG[eng].id][i] * 2}%`}} /></i>
                <b>{SOV[ENG[eng].id][i]}%</b>
              </div>
            ))}
          </div>
          <div className="dx-types">
            {TYPES.map((t, i) => {
              const you = Math.max(4, Math.round(SOV[ENG[eng].id][0] * t.k));
              const lead = Math.min(78, Math.round(SOV[ENG[eng].id][1] * t.l));
              return (
                <div key={t.name} style={{"--d": `${i * 70}ms`} as CSSProperties}>
                  <small>{t.name}</small>
                  <div className="dx-types-v"><b>{you}%</b><span>vs {lead}% leader</span></div>
                  <i><em style={{width: `${you}%`}} /><u style={{left: `${lead}%`}} /></i>
                </div>
              );
            })}
          </div>
          <div className="dx-insight"><span className="dx-spark">✦</span>On {ENG[eng].name}, NorthPeak owns {SOV[ENG[eng].id][1]}% of recommendations. Closing half that gap is the first goal.</div>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in" key="m2">
          <div className="dx-head"><div><small>Sources mapped</small><strong>126</strong></div><div><small>Domains AI cites</small><strong>38</strong></div><div><small>Start with</small><strong className="mid sm">r/sales</strong></div></div>
          <div className="dx-sub">Sources the answers lean on · tap one for the plan</div>
          <div className="dx-gaps">
            {GAPS.map((g, i) => (
              <button type="button" key={g.src} className={`dx-gap${gap === i ? " on" : ""}`} onClick={() => setGap(i)} style={{"--d": `${i * 70}ms`} as CSSProperties}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="s"><b>{g.src}</b><small>Cited in {g.share}% of answers</small></span>
                <span className={`dx-chip ${g.status.toLowerCase()}`}>{g.status}</span>
                <span className="p">{g.plan}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- EARN ---------------- */
const CHECKS = ["Answers the question in the first line", "Names the category plainly", "Backs claims with a real number", "Links to a source anyone can open"];
type Col = 0 | 1 | 2;
const CARDS: {id: string; plat: keyof typeof sourceMarks | "Listicle"; title: string}[] = [
  {id: "a", plat: "Reddit", title: "Reply: 'What's working for RFPs?'"},
  {id: "b", plat: "YouTube", title: "NorthPeak vs Quillbase vs YourBrand"},
  {id: "c", plat: "LinkedIn", title: "How lean teams answer 40 RFPs a quarter"},
  {id: "d", plat: "Quora", title: "Is AI good enough for security questionnaires?"},
  {id: "e", plat: "Listicle", title: "Inclusion: 'Best RFP software 2026'"},
];
const NODES = [
  {name: "Reddit", x: 14, y: 20, says: "“the one that drafts security questionnaires fast”"},
  {name: "YouTube", x: 80, y: 16, says: "“best for lean proposal teams”"},
  {name: "LinkedIn", x: 86, y: 74, says: "“AI-native RFP software for small teams”"},
  {name: "Quora", x: 10, y: 76, says: "“fast first drafts, built-in approvals”"},
  {name: "Listicles", x: 48, y: 90, says: "“AI-native RFP software, best for small teams”"},
];

export function EarnDash({step}: {step: number}) {
  const [done, setDone] = useState([true, true, false, false]);
  const [cols, setCols] = useState<Record<string, Col>>({a: 2, b: 1, c: 0, d: 1, e: 0});
  const [node, setNode] = useState(0);
  const score = 52 + done.filter(Boolean).length * 12;
  return (
    <div className="dx">
      <Bar title="Authority workbench" />
      {step === 0 && (
        <div className="dx-body dx-in dx-earn0" key="e0">
          <div className="dx-draft">
            <small>Draft · answer-first</small>
            <h4>What's the best RFP software for a small team?</h4>
            <p><mark>For teams under 10, AI-native tools like YourBrand cut first-draft time from days to minutes</mark>, because they write from your own past answers. Larger teams with huge content libraries may prefer NorthPeak.</p>
            <p className="dim">Source: 2026 survey of 140 proposal managers · full method linked</p>
          </div>
          <div className="dx-ready">
            <div className="dx-ring" style={{"--p": score} as CSSProperties}><b>{score}</b><small>quote-ready</small></div>
            <ul>
              {CHECKS.map((c, i) => (
                <li key={c}><button type="button" className={done[i] ? "on" : ""} onClick={() => setDone(d => d.map((x, j) => (j === i ? !x : x)))}><i>{done[i] ? "✓" : ""}</i>{c}</button></li>
              ))}
            </ul>
            <span className="dx-hint">Tap to tick. Every box makes it easier for AI to quote.</span>
          </div>
          <div className="dx-ships">
            <small>Ships as</small>
            {[["Reddit", "Reply"], ["LinkedIn", "Article"], ["Quora", "Answer"], ["YouTube", "Video"]].map(([k, v]) => (
              <span key={k}>{sourceMarks[k as keyof typeof sourceMarks]}<b>{k}</b><em>{v}</em></span>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="e1">
          <div className="dx-kanban">
            {["Drafting", "Review", "Live"].map((name, c) => (
              <div className="dx-col" key={name}>
                <div className="dx-col-h"><span>{name}</span><b>{Object.values(cols).filter(v => v === c).length}</b></div>
                {CARDS.filter(k => cols[k.id] === c).map(k => (
                  <button type="button" key={k.id} className={`dx-card col-${c}`} onClick={() => setCols(s => ({...s, [k.id]: ((s[k.id] + 1) % 3) as Col}))}>
                    <span className="dx-card-p">{k.plat === "Listicle" ? <i className="dx-list-ic">≡</i> : sourceMarks[k.plat]}{k.plat}</span>
                    <b>{k.title}</b>
                    <small>{c === 2 ? "Live · indexed" : c === 1 ? "Client review" : "Writing"} →</small>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <span className="dx-hint center">Click a card to move it along.</span>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in" key="e2">
          <div className="dx-graph">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {NODES.map((n, i) => <line key={n.name} x1="50" y1="50" x2={n.x} y2={n.y} className={node === i ? "on" : ""} />)}
            </svg>
            <span className="dx-core"><b>YourBrand</b><small>AI-native RFP software for small teams</small></span>
            {NODES.map((n, i) => (
              <button type="button" key={n.name} className={`dx-node${node === i ? " on" : ""}`} style={{left: `${n.x}%`, top: `${n.y}%`}} onMouseEnter={() => setNode(i)} onFocus={() => setNode(i)} onClick={() => setNode(i)}>{n.name}</button>
            ))}
          </div>
          <div className="dx-insight" key={node}><span className="dx-spark">✓</span><b>{NODES[node].name}</b>&nbsp;describes you as {NODES[node].says}. Same story, every source.</div>
        </div>
      )}
    </div>
  );
}

/* ---------------- COMPOUND ---------------- */
const SERIES: Record<string, number[]> = {
  Mentions: [4, 6, 5, 9, 12, 14, 13, 19, 24, 27, 31, 38],
  Citations: [2, 2, 4, 5, 5, 8, 11, 12, 15, 19, 22, 26],
  Recommendations: [0, 1, 1, 2, 3, 3, 5, 7, 8, 11, 13, 16],
};
const ACTIONS = [
  {k: "Refresh", t: "Update the comparison video with 2026 pricing", m: "+6 citations last cycle"},
  {k: "Expand", t: "Add 12 enterprise prompts to the radar", m: "New prompt cluster"},
  {k: "Place", t: "Answer 3 new r/sales threads", m: "Threads AI cites this week"},
];

export function CompoundDash({step}: {step: number}) {
  const [metric, setMetric] = useState<keyof typeof SERIES>("Mentions");
  const [hover, setHover] = useState(11);
  const [queued, setQueued] = useState([true, false, false]);
  const data = SERIES[metric];
  const max = 40;
  const pts = data.map((v, i) => [(i / 11) * 100, 100 - (v / max) * 100]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  return (
    <div className="dx">
      <Bar title="Visibility report · last 12 weeks" />
      {step === 0 && (
        <div className="dx-body dx-in" key="c0">
          <div className="dx-tabs">{Object.keys(SERIES).map(m => <button type="button" key={m} className={metric === m ? "on" : ""} onClick={() => setMetric(m as keyof typeof SERIES)}>{m}</button>)}</div>
          <div className="dx-big"><strong>{data[hover]}</strong><span>{metric.toLowerCase()} in week {hover + 1}</span><em>↑ {Math.round(((data[11] - data[0]) / Math.max(1, data[0])) * 100)}% since week 1</em></div>
          <div className="dx-chart" onMouseLeave={() => setHover(11)}>
            <svg key={metric} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="dx-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f07c32" stopOpacity=".45" /><stop offset="1" stopColor="#f07c32" stopOpacity="0" /></linearGradient></defs>
              <path key={metric + "a"} className="dx-area" d={`${line} L100,100 L0,100 Z`} />
              <path key={metric + "l"} className="dx-line" d={line} />
            </svg>
            {pts.map((p, i) => (
              <span key={i} className={`dx-hit${hover === i ? " on" : ""}`} style={{left: `${p[0]}%`}} onMouseEnter={() => setHover(i)}>
                <i style={{top: `${p[1]}%`}} />
              </span>
            ))}
          </div>
          <div className="dx-axis"><span>Wk 1</span><span>Wk 4</span><span>Wk 8</span><span>Wk 12</span></div>
        </div>
      )}
      {step === 1 && (
        <div className="dx-body dx-in" key="c1">
          <div className="dx-head"><div><small>AI-referred visits</small><strong>2,310<em className="up">↑ 212%</em></strong></div><div><small>Demo rate</small><strong>1.8%</strong></div><div><small>Pipeline touched</small><strong className="ok">$184K</strong></div></div>
          <div className="dx-sub">From an AI answer to a real conversation</div>
          <div className="dx-funnel">
            {[["Buyers who saw you in an answer", "18,400", 100], ["Visited from an AI engine", "2,310", 74], ["Read pricing or a comparison", "690", 50], ["Booked a demo", "41", 28]].map(([l, v, w], i) => (
              <div key={l as string} style={{"--w": `${w}%`, "--d": `${i * 120}ms`} as CSSProperties}><span>{l}</span><b>{v}</b></div>
            ))}
          </div>
          <div className="dx-insight"><span className="dx-spark">✦</span>Reported straight from analytics, kept separate from screenshots and guesses.</div>
        </div>
      )}
      {step === 2 && (
        <div className="dx-body dx-in dx-cycle-wrap" key="c2">
          <div className="dx-cycle" aria-hidden="true">
            <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="46" /><circle className="run" cx="60" cy="60" r="46" pathLength={1} /></svg>
            <span className="s1">Map</span><span className="s2">Earn</span><span className="s3">Compound</span>
            <b>Cycle<br />04</b>
          </div>
          <div className="dx-actions">
            <small>Next cycle</small>
            {ACTIONS.map((a, i) => (
              <button type="button" key={a.t} className={queued[i] ? "on" : ""} onClick={() => setQueued(q => q.map((x, j) => (j === i ? !x : x)))}>
                <em>{a.k}</em><b>{a.t}</b><small>{a.m}</small><i>{queued[i] ? "Queued ✓" : "Queue"}</i>
              </button>
            ))}
            <div className="dx-moved">
              <small>Last cycle moved</small>
              <div><span><b>+14</b>prompts now naming you</span><span><b>+9</b>new citations</span><span><b>3</b>gaps closed</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
