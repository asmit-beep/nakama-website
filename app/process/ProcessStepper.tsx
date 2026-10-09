"use client";
import {useCallback,useEffect,useRef,useState} from 'react';
import {Check} from 'lucide-react';

const DURATION=7000;

const stages=[
 {n:'01',when:'Weeks 1 – 2',name:'Understand',short:'Map the questions buyers ask',p:'We start where your buyers talk: the threads, reviews, comparison videos and AI answers they read before they shortlist. We map the exact prompts they use and where you, and your competitors, appear today.',deliv:['Buyer prompt map across ChatGPT, Perplexity, Gemini and Google','Competitor and source audit','Priority gaps and a 90-day plan']},
 {n:'02',when:'Weeks 2 – 4',name:'Create',short:'Write answers worth quoting',p:'Every piece is written to an editor’s standard and built to earn its place: answer-first articles, honest comparisons, community answers and video scripts, all reviewed by your team before they go live.',deliv:['Editorial calendar tied to real prompts','Articles, comparisons and buyer guides','Video scripts and community answers']},
 {n:'03',when:'Month 2 onward',name:'Place',short:'Publish where attention sits',p:'We publish where people already research: Reddit, Quora, YouTube, Medium, Substack, LinkedIn, G2 and the editorial sources AI engines read, openly and within each platform’s rules.',deliv:['Placements across 12+ platforms','Transparent community participation','Digital PR and editorial outreach']},
 {n:'04',when:'Every month',name:'Prove',short:'Measure, keep, improve',p:'We re-run your prompts, track every citation and mention, and show you the evidence. What works gets more effort, and what doesn’t gets cut. Each cycle builds on the last.',deliv:['Monthly evidence report','Citations and mentions by engine and prompt','Next moves, agreed together']},
] as const;

function Visual({i}:{i:number}){
 if(i===0) return <div className="ps-vis v-understand" aria-hidden="true">
  {['best RFP software','Loopio alternatives','AI for security questionnaires','how to answer RFPs faster','Responsive vs Loopio'].map((q,k)=><span key={q} className="ps-chipq" style={{animationDelay:`${k*120}ms`,['--x' as string]:`${[8,46,14,52,26][k]}%`,['--y' as string]:`${[10,24,44,58,78][k]}%`}}>{q}</span>)}
  <svg className="ps-lines" viewBox="0 0 400 260" preserveAspectRatio="none"><path d="M60 40 C160 60 220 90 300 70 M80 130 C170 120 230 160 330 160 M70 210 C170 190 240 230 320 220" /></svg>
 </div>;
 if(i===1) return <div className="ps-vis v-create" aria-hidden="true">
  {[0,1,2].map(k=><div key={k} className="ps-doc" style={{animationDelay:`${k*140}ms`,['--r' as string]:`${(k-1)*5}deg`,['--o' as string]:`${(k-1)*26}px`}}>
   <i className="h"/><i/><i/><i className="s"/><i/><i className="s"/>
  </div>)}
 </div>;
 if(i===2) return <div className="ps-vis v-place" aria-hidden="true">
  <span className="ps-core">n</span>
  <span className="ps-ring r1"/><span className="ps-ring r2"/>
  {['Reddit','YouTube','Quora','Medium','LinkedIn','G2','Substack','Editorial'].map((p,k)=><span key={p} className="ps-sat" style={{['--a' as string]:`${k*45}deg`,['--d' as string]:k%2?'118px':'78px',animationDelay:`${k*70}ms`}}>{p}</span>)}
 </div>;
 return <div className="ps-vis v-prove" aria-hidden="true">
  <div className="ps-bars">{[28,36,34,48,55,63,72,84].map((h,k)=><span key={k} style={{['--h' as string]:`${h}%`,animationDelay:`${k*70}ms`}}/>)}</div>
  <div className="ps-legend"><b>AI mentions, month by month</b></div>
 </div>;
}

export function ProcessStepper(){
 const [active,setActive]=useState(0);
 const [paused,setPaused]=useState(false);
 const [inView,setInView]=useState(false);
 const [tick,setTick]=useState(0);
 const ref=useRef<HTMLDivElement>(null);

 useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>setInView(e.isIntersecting),{threshold:.35});io.observe(el);return()=>io.disconnect();},[]);
 useEffect(()=>{
  if(paused||!inView)return;
  const t=setTimeout(()=>{setActive(a=>(a+1)%stages.length);setTick(x=>x+1);},DURATION);
  return()=>clearTimeout(t);
 },[active,paused,inView,tick]);
 const go=useCallback((i:number)=>{setActive(i);setTick(x=>x+1);},[]);
 const onKey=(e:React.KeyboardEvent)=>{if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();go((active+1)%4);}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();go((active+3)%4);}};
 const s=stages[active];

 return <div className={`ps${paused||!inView?' is-paused':''}`} ref={ref} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
  <div className="ps-nav" role="tablist" aria-label="Process stages" aria-orientation="vertical" onKeyDown={onKey}>
   {stages.map((st,i)=><button key={st.n} role="tab" aria-selected={i===active} tabIndex={i===active?0:-1} className={`ps-step${i===active?' on':''}${i<active?' done':''}`} onClick={()=>go(i)}>
    <span className="ps-n">{st.n}</span>
    <span className="ps-t"><b>{st.name}</b><small>{st.short}</small></span>
    <span className="ps-bar"><i key={`${i}-${tick}`} style={{animationDuration:`${DURATION}ms`}}/></span>
   </button>)}
  </div>
  <div className="ps-panel" role="tabpanel" aria-live="polite">
   <div className="ps-panel-in" key={active}>
    <Visual i={active}/>
    <div className="ps-copy">
     <span className="ps-when">{s.when}</span>
     <h3>{s.name}</h3>
     <p>{s.p}</p>
     <ul>{s.deliv.map((d,k)=><li key={d} style={{animationDelay:`${200+k*80}ms`}}><Check size={15}/>{d}</li>)}</ul>
    </div>
   </div>
  </div>
 </div>;
}
