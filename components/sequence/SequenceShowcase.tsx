"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import "./sequence.css";

const SCRUB = 720;
const STAGE_INSET = 88;
const SNAP_IDLE = 420;

const ROWS = [
  {
    id: "map",
    eyebrow: "Map",
    heading: "See exactly where AI leaves your SaaS out",
    intro:
      "We run the questions closest to a buying decision across ChatGPT, Perplexity, Gemini, and AI Overviews—then trace who gets recommended and why.",
    steps: [
      {
        title: "Map high-intent buyer prompts",
        body: "Build a living set of category, comparison, use-case, and replacement prompts from the language buyers actually use.",
      },
      {
        title: "Benchmark recommendation share",
        body: "Measure where you are named, cited, or recommended against the competitors already owning the shortlist.",
      },
      {
        title: "Trace every citation gap",
        body: "Find the pages, communities, and third-party sources teaching answer engines to choose someone else.",
      },
    ],
  },
  {
    id: "earn",
    eyebrow: "Earn",
    heading: "Build the evidence answer engines can trust",
    intro:
      "Nakama turns real buyer questions into clear, source-backed answers and places them where models—and the people using them—already look.",
    steps: [
      {
        title: "Create citation-ready answers",
        body: "Publish answer-first assets with extractable claims, original evidence, and unmistakable product-category context.",
      },
      {
        title: "Earn third-party authority",
        body: "Place useful contributions across editorial, Reddit, LinkedIn, YouTube, comparison pages, and relevant communities.",
      },
      {
        title: "Strengthen entity consistency",
        body: "Align how your category, use cases, proof, and product language appear everywhere the model retrieves them.",
      },
    ],
  },
  {
    id: "compound",
    eyebrow: "Compound",
    heading: "Turn AI visibility into measurable demand",
    intro:
      "We track the answer, the source behind it, and the buyer action after it—then continuously reinforce the signals that create recommendation.",
    steps: [
      {
        title: "Track citations and recommendations",
        body: "Monitor mention rate, citation share, recommendation rate, sentiment, and competitor movement across answer engines.",
      },
      {
        title: "Connect visibility to pipeline",
        body: "Attribute AI-referred visits, assisted conversions, demo requests, and influenced opportunities—not just screenshots.",
      },
      {
        title: "Reinforce what compounds",
        body: "Refresh winning sources, close new gaps, and scale the placements that move your SaaS from known to recommended.",
      },
    ],
  },
] as const;

const ENGINES = ["ChatGPT", "Perplexity", "Gemini", "AI Overview"];
const PROMPTS = [
  ["best AI-native proposal software", "Commercial", "48/mo"],
  ["RFP response tools for SaaS", "Comparison", "31/mo"],
  ["Loopio alternatives with AI", "Replacement", "22/mo"],
  ["proposal automation for enterprise", "Use case", "19/mo"],
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m3 8 3 3 7-7" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function DragFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, y: 0, dx: 0, dy: 0 });
  const [moved, setMoved] = useState(false);

  const setPosition = useCallback((dx: number, dy: number) => {
    drag.current.dx = dx;
    drag.current.dy = dy;
    frameRef.current?.style.setProperty("--drag-x", `${dx}px`);
    frameRef.current?.style.setProperty("--drag-y", `${dy}px`);
  }, []);

  const pointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button,input")) return;
    drag.current.active = true;
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("dragging");
  };

  const pointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const nextX = Math.max(-90, Math.min(90, drag.current.dx + event.clientX - drag.current.x));
    const nextY = Math.max(-65, Math.min(65, drag.current.dy + event.clientY - drag.current.y));
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
    setPosition(nextX, nextY);
    setMoved(true);
  };

  const pointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
    event.currentTarget.classList.remove("dragging");
  };

  return (
    <>
      <div
        ref={frameRef}
        className={`visibility-frame ${className}`}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        onPointerCancel={pointerUp}
      >
        {children}
      </div>
      <button
        className={`visibility-reset${moved ? " visible" : ""}`}
        type="button"
        onClick={() => {
          setPosition(0, 0);
          setMoved(false);
        }}
      >
        ↺ Reset
      </button>
    </>
  );
}

function MapPrototype({ step }: { step: number }) {
  return (
    <DragFrame className="map-frame">
      <div className="prototype-bar">
        <span>Buyer prompt map</span>
        <span className="prototype-live"><i /> LIVE</span>
      </div>
      <div className="map-head">
        <span>Inventive AI / Proposal software</span>
        <strong>50 high-intent prompts</strong>
      </div>
      <div className="engine-tabs">
        {ENGINES.map((engine, i) => (
          <button className={i === Math.min(step, 3) ? "active" : ""} key={engine}>
            {engine}
          </button>
        ))}
      </div>
      <div className="map-state" key={step}>
        {step === 0 && (
          <>
            <div className="prompt-table">
              <div className="prompt-row prompt-labels">
                <span>Buyer prompt</span><span>Intent</span><span>Demand</span>
              </div>
              {PROMPTS.map(([prompt, intent, volume], i) => (
                <div
                  className="prompt-row"
                  key={prompt}
                  style={{ "--delay": `${i * 55}ms` } as CSSProperties}
                >
                  <span><i>{i + 1}</i>{prompt}</span><span>{intent}</span><span>{volume}</span>
                </div>
              ))}
            </div>
            <div className="map-detail">
              <small>PROMPT COVERAGE</small>
              <strong>Mapped from actual buyer language</strong>
              <p>Category, comparison, replacement, and use-case questions prioritized by buying intent.</p>
            </div>
          </>
        )}
        {step === 1 && (
          <div className="benchmark-view">
            <div className="benchmark-summary">
              <span><small>RECOMMENDATION RATE</small><strong>18%</strong><em>Category median 31%</em></span>
              <span><small>CITATION SHARE</small><strong>12.4%</strong><em>Gap to leader −16 pts</em></span>
            </div>
            <div className="benchmark-table">
              <div><span>Engine</span><span>Mentioned</span><span>Recommended</span></div>
              {ENGINES.map((engine, i) => (
                <div key={engine} style={{ "--delay": `${i * 65}ms` } as CSSProperties}>
                  <b>{engine}</b><span>{[24, 18, 21, 11][i]} / 50</span>
                  <i><em style={{ "--w": `${[48, 36, 42, 22][i]}%` } as CSSProperties} /></i>
                </div>
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="citation-gap-view">
            <div className="gap-head"><span><small>CITATION GAP</small><strong>7 sources shape this shortlist</strong></span><em>3 urgent</em></div>
            {[
              ["reddit.com/r/sales", "Cited in 32% of answers", "Missing"],
              ["g2.com/categories/rfp", "Cited in 26% of answers", "Competitor"],
              ["youtube.com/results", "Cited in 19% of answers", "Opportunity"],
              ["linkedin.com/pulse", "Cited in 14% of answers", "Weak"],
            ].map(([source, reach, status], i) => (
              <button className="gap-source" key={source} style={{ "--delay": `${i * 70}ms` } as CSSProperties}>
                <i>{i + 1}</i><span><b>{source}</b><small>{reach}</small></span><em>{status}</em><Arrow />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="prototype-foot">
        <span><i /> Updated 2m ago</span>
        <button>Open prompt set <Arrow /></button>
      </div>
    </DragFrame>
  );
}

const PLACEMENTS = [
  ["Comparison page", "AI-native proposal software", "Ready"],
  ["Reddit contribution", "r/SaaS · RFP tools", "Review"],
  ["YouTube answer", "Loopio vs Responsive vs Inventive", "Live"],
];

function EarnPrototype({ step }: { step: number }) {
  return (
    <DragFrame className="earn-frame">
      <div className="prototype-bar">
        <span>Authority workbench</span>
        <span>Draft 08</span>
      </div>
      {step === 0 && (
        <div className="answer-editor state-enter">
          <div className="editor-meta"><span>ANSWER-FIRST ASSET</span><span>High intent</span></div>
          <h4>What should an AI-native proposal platform actually do?</h4>
          <p>
            The strongest platforms do more than generate a document. They connect
            discovery, source retrieval, approvals, and buyer context in one reliable workflow.
          </p>
          <blockquote>
            <i>01</i>
            <span><b>Direct answer</b> Extractable, unambiguous opening</span>
          </blockquote>
          <blockquote>
            <i>02</i>
            <span><b>Original proof</b> Claims linked to primary evidence</span>
          </blockquote>
          <div className="quality">
            <span>Retrievability</span><b>94</b><i style={{ "--score": "94%" } as CSSProperties} />
            <span>Source strength</span><b>88</b><i style={{ "--score": "88%" } as CSSProperties} />
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="placement-board state-enter">
          <div className="board-head"><span>SOURCE PLACEMENTS</span><strong>Meet buyers where they research</strong></div>
          {PLACEMENTS.map(([type, title, status], i) => (
            <button className="placement-item" key={title} style={{ "--delay": `${i * 80}ms` } as CSSProperties}>
              <i>{type[0]}</i><span><small>{type}</small><b>{title}</b></span><em>{status}</em><Arrow />
            </button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div className="entity-map state-enter">
          <div className="entity-head"><span>ENTITY CONSISTENCY</span><strong>One clear story across every source</strong></div>
          <div className="entity-graph">
            <svg viewBox="0 0 600 250" aria-hidden="true">
              <path d="M300 125 115 55M300 125 490 45M300 125 520 188M300 125 88 196M300 125 290 25" />
            </svg>
            <span className="entity-core">Inventive AI<small>AI-native RFP software</small></span>
            <span style={{ left: "8%", top: "12%" }}>Reddit</span>
            <span style={{ left: "72%", top: "8%" }}>Editorial</span>
            <span style={{ left: "78%", top: "68%" }}>YouTube</span>
            <span style={{ left: "4%", top: "72%" }}>LinkedIn</span>
            <span style={{ left: "42%", top: "0%" }}>Website</span>
          </div>
          <div className="entity-score"><span>Category consistency</span><strong>91%</strong></div>
        </div>
      )}
      <div className="prototype-foot">
        <span><i /> Sources checked</span>
        <button>Review authority <Arrow /></button>
      </div>
    </DragFrame>
  );
}

const CHART = [22, 31, 28, 41, 49, 46, 61, 68, 73, 82, 88, 94];

function CompoundPrototype({ step }: { step: number }) {
  return (
    <DragFrame className="compound-frame">
      <div className="prototype-bar">
        <span>AI visibility report</span>
        <span>LAST 12 WEEKS</span>
      </div>
      {step === 0 && (
        <div className="visibility-report state-enter">
          <div className="metric-grid">
            <div><small>Recommendation rate</small><strong>32.8%</strong><span>↑ 11.4 pts</span></div>
            <div><small>Citation share</small><strong>21.4%</strong><span>↑ 6.8 pts</span></div>
            <div><small>Positive mentions</small><strong>184</strong><span>↑ 38%</span></div>
          </div>
          <div className="visibility-chart">
            <div><span>Answer presence</span><strong>94</strong></div>
            <div className="chart-bars">
              {CHART.map((height, i) => (
                <i key={i} style={{ "--height": `${height}%`, "--delay": `${i * 38}ms` } as CSSProperties} />
              ))}
            </div>
            <div className="chart-axis"><span>Jun</span><span>Jul</span><span>Aug</span></div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="attribution state-enter">
          <div className="attribution-head"><span>AI-ASSISTED PIPELINE</span><strong>From answer to opportunity</strong></div>
          <div className="funnel">
            <div style={{ "--w": "100%" } as CSSProperties}><span>AI answer impressions</span><b>42,810</b></div>
            <div style={{ "--w": "78%" } as CSSProperties}><span>AI-referred sessions</span><b>3,284</b></div>
            <div style={{ "--w": "55%" } as CSSProperties}><span>High-intent visits</span><b>1,106</b></div>
            <div style={{ "--w": "34%" } as CSSProperties}><span>Demo requests</span><b>87</b></div>
          </div>
          <div className="pipeline-total"><span>Influenced pipeline</span><strong>$486k</strong><small>↑ 27% vs previous period</small></div>
        </div>
      )}
      {step === 2 && (
        <div className="reinforce state-enter">
          <div className="reinforce-head"><span>NEXT CYCLE</span><strong>Scale what earns recommendation</strong></div>
          <div className="reinforce-grid">
            <article><small>REFRESH</small><b>RFP software comparison</b><span>+9 citations</span></article>
            <article><small>EXPAND</small><b>Enterprise proposal cluster</b><span>12 new prompts</span></article>
            <article><small>PLACE</small><b>Technical buyer proof</b><span>4 source targets</span></article>
          </div>
          <div className="cycle-line">
            <span className="done"><Check /> Map</span><i />
            <span className="done"><Check /> Earn</span><i />
            <span className="active">Compound</span>
          </div>
        </div>
      )}
      <div className="prototype-foot">
        <span><i /> Evidence updated 2m ago</span>
        <button>Open citations <Arrow /></button>
      </div>
    </DragFrame>
  );
}

const PROTOTYPES = [MapPrototype, EarnPrototype, CompoundPrototype];

export function SequenceShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const stageInnerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const headRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [compact, setCompact] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [steps, setSteps] = useState([0, 0, 0]);
  const activeRowRef = useRef(0);
  const stepsRef = useRef([0, 0, 0]);
  const snapTimer = useRef<number | null>(null);
  const snapping = useRef(false);

  useLayoutEffect(() => {
    const media = matchMedia("(max-width: 1199px)");
    const layout = () => {
      const isCompact = media.matches;
      setCompact(isCompact);
      if (!isCompact && stageInnerRef.current && rootRef.current) {
        rootRef.current.style.setProperty("--visibility-stage-h", `${stageInnerRef.current.clientHeight}px`);
      }
    };
    layout();
    media.addEventListener("change", layout);
    const resize = new ResizeObserver(layout);
    if (stageInnerRef.current) resize.observe(stageInnerRef.current);
    return () => {
      media.removeEventListener("change", layout);
      resize.disconnect();
    };
  }, []);

  useEffect(() => {
    if (compact) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (snapping.current) return;
      const nextSteps = [...stepsRef.current];
      rowRefs.current.forEach((section, row) => {
        if (!section) return;
        const progress = Math.min(0.9999, Math.max(0, -section.getBoundingClientRect().top / SCRUB));
        nextSteps[row] = Math.min(2, Math.floor(progress * 3 + 1e-6));
      });
      if (nextSteps.some((value, i) => value !== stepsRef.current[i])) {
        stepsRef.current = nextSteps;
        setSteps(nextSteps);
      }

      let focused = activeRowRef.current;
      let head = headRefs.current[focused]?.getBoundingClientRect();
      while (focused < ROWS.length - 1 && head && head.bottom <= STAGE_INSET) {
        focused += 1;
        head = headRefs.current[focused]?.getBoundingClientRect();
      }
      while (focused > 0 && head && head.top >= innerHeight) {
        focused -= 1;
        head = headRefs.current[focused]?.getBoundingClientRect();
      }
      if (focused !== activeRowRef.current) {
        activeRowRef.current = focused;
        setActiveRow(focused);
      }
    };

    const settle = () => {
      if (snapping.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const root = rootRef.current;
      if (!root) return;
      const rootTop = root.getBoundingClientRect().top + scrollY;
      const rootBottom = rootTop + root.offsetHeight;
      if (scrollY < rootTop - innerHeight || scrollY > rootBottom) return;

      const targets: number[] = [];
      rowRefs.current.forEach((section) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top + scrollY;
        for (let i = 0; i < 3; i += 1) targets.push(top + i * (SCRUB / 3));
      });
      const target = targets.reduce((best, value) =>
        Math.abs(value - scrollY) < Math.abs(best - scrollY) ? value : best,
      );
      if (Math.abs(target - scrollY) < 10 || Math.abs(target - scrollY) > 150) return;
      snapping.current = true;
      scrollTo({ top: target, behavior: "smooth" });
      window.setTimeout(() => {
        snapping.current = false;
      }, 550);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      if (snapTimer.current) clearTimeout(snapTimer.current);
      snapTimer.current = window.setTimeout(settle, SNAP_IDLE);
    };
    const interrupt = () => {
      snapping.current = false;
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    addEventListener("wheel", interrupt, { passive: true });
    addEventListener("touchstart", interrupt, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      removeEventListener("wheel", interrupt);
      removeEventListener("touchstart", interrupt);
      if (raf) cancelAnimationFrame(raf);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [compact]);

  const choose = useCallback(
    (row: number, step: number) => {
      const next = [...stepsRef.current];
      next[row] = step;
      stepsRef.current = next;
      setSteps(next);
      activeRowRef.current = row;
      setActiveRow(row);
      if (compact) return;
      const section = rowRefs.current[row];
      if (!section) return;
      const top = section.getBoundingClientRect().top + scrollY;
      snapping.current = true;
      // Browser smooth-scrolls can settle a few pixels short. Bias into the
      // intended band and hold the authored state until the glide is complete.
      scrollTo({ top: top + step * (SCRUB / 3) + 18, behavior: "smooth" });
      window.setTimeout(() => {
        snapping.current = false;
      }, 1800);
    },
    [compact],
  );

  return (
    <section id="how" ref={rootRef} className="visibility-how">
      <div className="visibility-layout">
        <div className="visibility-rails">
          {ROWS.map((row, rowIndex) => {
            const Prototype = PROTOTYPES[rowIndex];
            return (
              <section
                className={`visibility-row${activeRow === rowIndex ? " focused" : ""}`}
                key={row.id}
                ref={(node) => { rowRefs.current[rowIndex] = node; }}
              >
                <div className="visibility-row-sticky">
                  <div className="visibility-row-inner">
                    <div className="visibility-rail">
                      <div className="visibility-copy">
                        <div className="visibility-eyebrow"><i />{row.eyebrow}</div>
                        <h2 ref={(node) => { headRefs.current[rowIndex] = node; }}>{row.heading}</h2>
                        <p>{row.intro}</p>
                      </div>
                      {compact && (
                        <div className="visibility-compact-panel">
                          <div className="visibility-panel-glow" />
                          <Prototype step={steps[rowIndex]} />
                        </div>
                      )}
                      <div className="visibility-steps" role="tablist" aria-label={`${row.eyebrow} steps`}>
                        {row.steps.map((step, stepIndex) => (
                          <button
                            type="button"
                            role="tab"
                            aria-selected={steps[rowIndex] === stepIndex}
                            className={`visibility-step${steps[rowIndex] === stepIndex ? " active" : ""}`}
                            onClick={() => choose(rowIndex, stepIndex)}
                            key={step.title}
                          >
                            <i className="visibility-progress" />
                            <strong>{step.title}</strong>
                            <span>{step.body}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <aside className="visibility-stage" aria-label="Nakama AI visibility workflow">
          <div className="visibility-stage-inner" ref={stageInnerRef}>
            {ROWS.map((row, rowIndex) => {
              const Prototype = PROTOTYPES[rowIndex];
              return (
                <div
                  className={`visibility-panel${activeRow === rowIndex ? " active" : ""}`}
                  aria-hidden={activeRow !== rowIndex}
                  key={row.id}
                >
                  <div className="visibility-panel-glow" />
                  <div className="visibility-panel-grain" />
                  <Prototype step={steps[rowIndex]} />
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}