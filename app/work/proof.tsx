import {proofClients} from '../proof-data';
import {CLIENT_DIM, CLIENT_LOGO, SECTOR, clientSlug} from './copy';

/** Queries and row copy come from app/proof-data.ts, the live work board source. */
function engineOf(platform: string) {
  const p = platform.toLowerCase();
  if (p.startsWith('perplexity')) return {k: 'perplexity', src: '/work/engines/perplexity.svg', w: 26, h: 26};
  if (p.startsWith('chatgpt')) return {k: 'chatgpt', src: '/work/engines/openai.svg', w: 26, h: 26};
  if (p.startsWith('youtube')) return {k: 'youtube', src: '/work/engines/youtube.svg', w: 26, h: 26};
  return {k: 'google', src: '/work/engines/google-g.svg', w: 26, h: 26};
}

function runLink(platform: string, q: string) {
  const p = platform.toLowerCase();
  const e = encodeURIComponent(q);
  if (p.startsWith('perplexity')) return {href: `https://www.perplexity.ai/search?q=${e}`, label: 'Run it on Perplexity'};
  if (p.startsWith('chatgpt')) return {href: `https://chatgpt.com/?q=${e}`, label: 'Run it on ChatGPT'};
  if (p.startsWith('youtube')) return {href: `https://www.youtube.com/results?search_query=${e}`, label: 'Run it on YouTube'};
  if (p.includes('ai mode')) return {href: `https://www.google.com/search?udm=50&q=${e}`, label: 'Run it in AI Mode'};
  return {href: `https://www.google.com/search?q=${e}`, label: 'Run it on Google'};
}

function surfaces(entries: {platform: string}[]) {
  return [...new Set(entries.map(e => e.platform.split(' · ')[0]))].join(', ');
}

export function ProofBoard() {
  return (
    <div className="wb">
      <div className="wb-tabs-scroll">
        <div className="wb-tabs" role="tablist" aria-label="Client">
          <span className="wb-pill" aria-hidden="true"/>
          {proofClients.map((c, i) => (
            <button
              key={c.name}
              type="button"
              role="tab"
              id={`wb-tab-${i}`}
              aria-controls={`proof-${clientSlug(c.name)}`}
              aria-selected={i === 0}
              className={i === 0 ? 'on' : undefined}
              data-i={i}
            >
              <img src={CLIENT_LOGO[c.name]} alt="" width={CLIENT_DIM[c.name].w} height={CLIENT_DIM[c.name].h}/>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>
      {proofClients.map((c, i) => (
        <div
          key={c.name}
          className="wb-stage"
          role="tabpanel"
          id={`proof-${clientSlug(c.name)}`}
          aria-labelledby={`wb-tab-${i}`}
          hidden={i === 0 ? undefined : true}
        >
          <div className="wb-client">
            <span className="wb-logo"><img src={CLIENT_LOGO[c.name]} alt="" width={CLIENT_DIM[c.name].w} height={CLIENT_DIM[c.name].h}/></span>
            <span className="wb-sector">{SECTOR[c.name]}</span>
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <dl className="wb-meta">
              <div><dt>{c.name === 'StarAgile' ? 'Documented here' : 'Documented'}</dt><dd>{c.entries.length} placements</dd></div>
              <div><dt>Surfaces</dt><dd>{surfaces(c.entries)}</dd></div>
            </dl>
          </div>
          <ol className="wb-list">
            {c.entries.map(e => {
              const eng = engineOf(e.platform);
              const run = runLink(e.platform, e.query);
              return (
                <li key={e.platform + e.query} className="wb-row">
                  <span className={`wb-engine e-${eng.k}`} aria-hidden="true">
                    <img src={eng.src} alt="" width={eng.w} height={eng.h}/>
                  </span>
                  <div className="wb-body">
                    <span className="wb-platform">{e.platform}</span>
                    <div className="wb-query"><span className="wb-q-ico" aria-hidden="true">⌕</span>{e.query}</div>
                    <p>{e.description}</p>
                    <div className="wb-actions">
                      <button type="button" data-copy={e.query}>Copy query</button>
                      <a href={run.href} target="_blank" rel="noreferrer">{run.label}<span className="ext" aria-hidden="true"> ↗</span><span className="wb-sr"> (opens in a new tab)</span></a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
      <p className="wb-note">Captured when each placement went live. Live answers vary by account, location and date.</p>
    </div>
  );
}
