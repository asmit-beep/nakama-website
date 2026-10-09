"use client";
import {useEffect,useRef,useState,type CSSProperties,type KeyboardEvent} from 'react';
import {ArrowUpRight,Pause,Play} from 'lucide-react';
import {heroPanels} from './hero-panels';
import {heroClients} from './hero-clients';
import {engineMarks,sourceMarks} from './hero-marks';
import {BookCallButton} from '@/components/booking/BookCall';

const TOPICS = [
 {tool:'RFP tool',q:'answering RFPs faster'},
 {tool:'listings tool',q:'keeping 200 store listings accurate'},
 {tool:'internal comms app',q:'reaching frontline staff'},
 {tool:'link building CRM',q:'tracking backlink outreach'},
 {tool:'PMP course',q:'passing the PMP first try'},
];
const cap=(t:string)=>t.charAt(0).toUpperCase()+t.slice(1);
const FORMATS:Record<string,{kind:string;f:(t:typeof TOPICS[number])=>string}>={
 Reddit:{kind:'Thread',f:t=>`Anyone switched ${t.tool}s this year?`},
 Medium:{kind:'Article',f:t=>`What we learned ${t.q}`},
 X:{kind:'Thread',f:t=>`5 mistakes teams make ${t.q}`},
 YouTube:{kind:'Video',f:t=>`${cap(t.tool)}s compared: a full walkthrough`},
 Instagram:{kind:'Reel',f:t=>`A 60-second guide to ${t.q}`},
 'Product Hunt':{kind:'Launch',f:t=>`New ${t.tool}s launching this month`},
 LinkedIn:{kind:'Post',f:t=>`How teams choose the right ${t.tool}`},
 Substack:{kind:'Newsletter',f:t=>`This week: ${t.tool}s we’d buy again`},
 Facebook:{kind:'Group',f:t=>`Which ${t.tool} is your team on?`},
 Quora:{kind:'Question',f:t=>`What’s the best ${t.tool} right now?`},
 G2:{kind:'Reviews',f:t=>`Top-rated ${t.tool}s by verified users`},
 Discord:{kind:'Community',f:t=>`Open thread: your ${t.tool} stack?`},
};
const sourceSlots = [
 {position:'p1',items:['Reddit','Medium','X']},
 {position:'p2',items:['YouTube','Instagram','Product Hunt']},
 {position:'p4',items:['LinkedIn','Substack','Facebook']},
 {position:'p5',items:['Quora','G2','Discord']},
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
 const dwell=3000;
 const [srcTick,setSrcTick]=useState(0);
 const held=paused||hidden||offscreen;
 useEffect(()=>{if(held)return;const t=window.setInterval(()=>setSrcTick(n=>n+1),3000);return()=>clearInterval(t);},[held]);
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
   <div className="ctas rv" style={{'--d':'.85s'} as CSSProperties}><BookCallButton className="btn">Book a call<i aria-hidden="true"><ArrowUpRight/></i></BookCallButton><a className="ghost" href="/process">See how it works</a></div>

  </div>
  <div className="stage">
   <div className="core" aria-hidden="true"/>
   <div className="corridor" aria-label="The sources AI engines read"><div className="cwrap">
    {sourceSlots.map((slot,i)=>{const turn=Math.floor((srcTick+(4-i))/4);const name=slot.items[turn%slot.items.length];const topic=TOPICS[(turn+i*2)%TOPICS.length];const source={name,kind:FORMATS[name].kind,text:FORMATS[name].f(topic)};return <div className={`plane ${slot.position}`} key={slot.position}><div className="src-swap" key={source.name+source.text}><div className="pt"><span className="glyph" aria-hidden="true">{sourceMarks[source.name]}</span>{source.name}<em>{source.kind}</em></div><p className="snip">{source.text}</p></div></div>;})}
   </div></div>
   <div className="card-wrap">
    <article className="answer" aria-label="Illustrative AI answers">
     <div className="a-top">
      <div className="tabs" role="tablist" aria-label="Example answers by AI engine" onKeyDown={onKeys}>
       {heroPanels.map((panel,i)=><button key={panel.id} ref={el=>{tabs.current[i]=el;}} type="button" role="tab" className="tab" title={panel.name} aria-label={panel.name} id={`hero-tab-${panel.id}`} aria-controls={`hero-panel-${panel.id}`} aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>choose(i)}><span className="mark">{engineMarks[panel.id]}</span><span className="sr-only">{panel.name}</span></button>)}
      </div>
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
