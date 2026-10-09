"use client";
import {useEffect,useRef,useState,type CSSProperties,type KeyboardEvent} from 'react';
import {ArrowUpRight,Pause,Play} from 'lucide-react';
import {heroPanels} from './hero-panels';
import {heroClients} from './hero-clients';
import {engineMarks,sourceMarks} from './hero-marks';

const sources = [
 {name:'Reddit',kind:'Thread',glyph:'r',text:'Anyone switched proposal tools this year?',position:'p1'},
 {name:'YouTube',kind:'Video',glyph:'▶',text:'Proposal software compared: a full walkthrough',position:'p2'},
 {name:'LinkedIn',kind:'Post',glyph:'in',text:'How B2B teams pick proposal software',position:'p4'},
 {name:'Quora',kind:'Question',glyph:'Q',text:'What’s the best tool for answering RFPs?',position:'p5'},
];

/** Sukriti’s “Into the Answer” direction, with React-owned, accessible controls. */
export function HeroRuntime({booking}:{booking:string}){
 const hero=useRef<HTMLElement>(null);
 const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 const [active,setActive]=useState(0);
 const [paused,setPaused]=useState(false);
 const [hidden,setHidden]=useState(false);
 const [offscreen,setOffscreen]=useState(false);
 const [reduced,setReduced]=useState(false);
 const dwell=5000;
 const held=paused||hidden||offscreen;
 useEffect(()=>{
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{setReduced(motion.matches);setPaused(motion.matches);};
  const visibility=()=>setHidden(document.hidden);
  sync();visibility();
  motion.addEventListener('change',sync);
  document.addEventListener('visibilitychange',visibility);
  const observer=new IntersectionObserver(([entry])=>setOffscreen(!entry.isIntersecting),{threshold:.05});
  if(hero.current)observer.observe(hero.current);
  return()=>{observer.disconnect();motion.removeEventListener('change',sync);document.removeEventListener('visibilitychange',visibility);};
 },[]);
 /* every engine shows for exactly 5 s, then the next one opens; choosing a tab restarts the 5 s */
 useEffect(()=>{
  if(held)return;
  const timer=window.setTimeout(()=>setActive(i=>(i+1)%heroPanels.length),dwell);
  return()=>clearTimeout(timer);
 },[active,held,dwell]);
 function choose(index:number){setActive(index);}
 function onKeys(event:KeyboardEvent<HTMLDivElement>){
  const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(event.key))return;
  event.preventDefault();
  const index=event.key==='Home'?0:event.key==='End'?3:(active+(event.key==='ArrowRight'?1:-1)+4)%4;
  choose(index);tabs.current[index]?.focus();
 }
 return <section ref={hero} className={`answer-hero${held?' paused':''}${paused||hidden||offscreen||reduced?' still':''}`} aria-labelledby="answer-hero-title">
  <div className="halo" aria-hidden="true"/><div className="grain" aria-hidden="true"/>
  <div className="head">
   <h1 id="answer-hero-title" aria-label="We put your brand inside the AI answer.">
    {['We put your brand','inside the AI answer.'].map((line,row)=><span className={`hl ${row?'accent-line':''}`} key={line} aria-hidden="true">{line.split(' ').map((word,i)=><span className="w" key={word}><span style={{'--d':`${.2+(row*4+i)*.05}s`} as CSSProperties}>{word}</span>{' '}</span>)}</span>)}
   </h1>
   <p className="sub rv" style={{'--d':'.7s'} as CSSProperties}>AI does its homework. We write the notes it copies.</p>
   <div className="ctas rv" style={{'--d':'.85s'} as CSSProperties}><a className="btn" href={booking} target="_blank" rel="noopener noreferrer">Book a call<i aria-hidden="true"><ArrowUpRight/></i></a><a className="ghost" href="/process">See how it works</a></div>
  </div>
  <div className="stage">
   <div className="core" aria-hidden="true"/>
   <div className="corridor" aria-label="The sources AI engines read"><div className="cwrap">
    {sources.map(source=><div className={`plane ${source.position}`} key={source.name}><div className="pt"><span className="glyph" aria-hidden="true">{sourceMarks[source.name]}</span>{source.name}<em>{source.kind}</em></div><p className="snip">{source.text}</p></div>)}
   </div></div>
   <div className="card-wrap">
    <article className="answer" aria-label="Illustrative AI answers">
     <div className="a-top">
      <div className="tabs" role="tablist" aria-label="Example answers by AI engine" onKeyDown={onKeys}>
       {heroPanels.map((panel,i)=><button key={panel.id} ref={el=>{tabs.current[i]=el;}} type="button" role="tab" className="tab" title={panel.name} aria-label={panel.name} id={`hero-tab-${panel.id}`} aria-controls={`hero-panel-${panel.id}`} aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>choose(i)}><span className="mark">{engineMarks[panel.id]}</span><span className="sr-only">{panel.name}</span></button>)}
      </div>
      <p className="a-foot">Example only. Not live AI results.</p>
      <button type="button" className="pp" aria-label={paused?'Play rotation':'Pause rotation'} aria-pressed={paused} onClick={()=>setPaused(p=>!p)}>{paused?<Play size={12}/>:<Pause size={12}/>}</button>
     </div>
     <div className="screen"><div className="states">
      {heroPanels.map((panel,i)=><div key={panel.id} id={`hero-panel-${panel.id}`} role="tabpanel" aria-labelledby={`hero-tab-${panel.id}`} aria-hidden={active!==i} className={`state ${panel.ui}${active===i?' on':''}`} dangerouslySetInnerHTML={{__html:panel.html}}/>)}
     </div></div>
    </article>
   </div>
  </div>
  <div className="clients" role="region" aria-label="Companies we've worked with" tabIndex={0}>
   <div className="c-track">{[0,1,2].map(copy=><ul className="c-group" key={copy} aria-hidden={copy?true:undefined}>{heroClients.map(client=><li className="c-item" key={client.name} aria-label={client.name} style={{'--brand':client.tint} as CSSProperties}><span className={`c-logo ${client.kind==='icon'?'':client.kind==='wordmark'?'c-wordmark':'c-lockup'}`}><img src={client.src} alt="" width={client.w} height={client.h} loading={copy?'lazy':'eager'}/><img className="c-colour" src={client.colour} alt="" width={client.w} height={client.h} loading="lazy"/></span>{client.kind==='icon'&&<span aria-hidden="true">{client.name}</span>}</li>)}</ul>)}</div>
  </div>
  <div className="floor" aria-hidden="true"/>
 </section>;
}
