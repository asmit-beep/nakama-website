import type {ReactNode} from 'react';

export type Shot = {
  id: string;
  title: string;
  meta: string;
  foot: string;
  alt: string;
  w: number;
  h: number;
};

export function shot(id: string, title: string, meta: string, foot: string, w: number, h: number): Shot {
  return {
    id,
    title,
    meta,
    foot,
    w,
    h,
    alt: `Original capture. ${title}, ${meta}. ${foot}`,
  };
}

export function Cap({engine, when, shot: s, forKey, hidden}: {engine: string; when: string; shot: Shot; forKey?: string; hidden?: boolean}) {
  return (
    <p className="ac-cap" data-for={forKey} hidden={hidden}>
      <span>Recreated from {engine} · captured {when}</span>
      <span className="sep" aria-hidden="true">·</span>
      <button type="button" className="lbo" data-shot={s.id} data-title={s.title} data-meta={s.meta} data-foot={s.foot} data-alt={`Recreated from ${engine}, captured ${when}`} data-src={`/work/staragile/${s.id}.webp`} data-w={s.w} data-h={s.h} aria-haspopup="dialog">See original capture</button>
    </p>
  );
}

export function Tag({label, kind = 'nf'}: {label: string; kind?: 'nf' | 'grey'}) {
  return <span className={`tag ${kind}`}><i aria-hidden="true"/>{label}</span>;
}

export function Mini({engine, tag, kind = 'nf', captionEngine, when, shot: s, label, children}: {
  engine: string;
  tag: string;
  kind?: 'nf' | 'grey';
  captionEngine: string;
  when: string;
  shot: Shot;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="acw">
      <div className="ac cs single">
        <article className="answer" aria-label={label}>
          <div className="a-top"><span className="eng">{engine}</span></div>
          <div className="screen"><div className="states">{children}</div></div>
          <div className="ac-foot"><Tag label={tag} kind={kind}/></div>
        </article>
      </div>
      <Cap engine={captionEngine} when={when} shot={s}/>
    </div>
  );
}

export function Chevron() {
  return (
    <span className="chev">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </span>
  );
}

const GLYPH = {f: 'Named first', n: 'Named', x: 'Not present', b: 'not run on this engine'} as const;

export function Cells({states, names}: {states: Array<'f' | 'n' | 'x' | 'b'>; names: string[]}) {
  return (
    <>
      {states.map((state, i) => (
        <td key={names[i]}>
          {state !== 'b' ? <span className={`gl ${state}`} aria-hidden="true"/> : null}
          <span className="vh">{names[i]}: {GLYPH[state]}</span>
        </td>
      ))}
    </>
  );
}
