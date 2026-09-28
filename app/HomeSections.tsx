"use client";
import {useEffect,useRef,useState,type CSSProperties,type ReactNode} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Sparkles,Check,ThumbsUp,MessageSquare,Share2,Play,Eye,ChevronUp} from 'lucide-react';
import {Logo,Reveal} from './site';
import {proofClients} from './proof-data';

const clients=[
 {name:'SERPsGrowth',src:'serps.jpeg'},
 {name:'Inventive AI',src:'inventive.jpeg'},
 {name:'StarAgile',src:'staragile.png'},
 {name:'HubEngage',src:'hubengage.jpeg'},
 {name:'BacklinkOS',src:'backlinkos.jpeg'},
 {name:'Inbound Blogging',src:'inbound.jpeg'},
 {name:'Brandenburg',src:'brandenburg.png'},
];

/** Sunk-black void gallery — embossed marks lift from the pitch. */
export function ClientStrip(){
 return (
  <section className="client-strip client-void" aria-label="Client logos">
   <div className="client-void-frame" aria-hidden="true">
    <span className="client-void-ghost">仲間</span>
    <i className="client-void-rule"/><i className="client-void-rule right"/>
   </div>
   <div className="client-strip-heading">
    <span className="client-strip-plus" aria-hidden="true">+</span>
    <h2 className="client-strip-title">In good company.</h2>
    <p className="client-strip-sub">Shared ambition. Quiet proof.</p>
   </div>
   <div className="client-well">
    <div className="client-window">
     <div className="client-ticker">
      {[0,1].map(copy=>(
       <div className="client-group" key={copy} aria-hidden={copy===1}>
        {clients.map(c=>{
         const mark=<><span className="client-mark"><img src={`/clients/${c.src}`} width={42} height={42} alt="" loading="lazy"/></span><span className="client-name">{c.name}</span></>;
         return c.name==='Brandenburg'
          ? <span className="client-signature" key={`${copy}-${c.name}`}>{mark}</span>
          : <Link className="client-signature" href={`/work?client=${encodeURIComponent(c.name)}`} tabIndex={copy?-1:0} key={`${copy}-${c.name}`} aria-label={`Explore work for ${c.name}`}>{mark}</Link>;
        })}
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

/* ---- Connected presence: real-platform constellation ---- */
type PlatformId='reddit'|'linkedin'|'youtube'|'quora';

const platforms:{
 id:PlatformId;name:string;tag:string;title:string;body:string;caption:string;href:string;
 x:number;y:number;rot:number;
}[]=[
 {
  id:'reddit',name:'Reddit',tag:'Be trusted',
  title:'In the conversation.',
  body:'Credible presence in the forums, threads, and feeds your buyers already use to compare tools and pressure-test vendors.',
  caption:'Show up as an operator, not an ad — disclose, add value, and leave a trail peers actually trust.',
  href:'/services#community',x:-1,y:-1,rot:-6,
 },
 {
  id:'linkedin',name:'LinkedIn',tag:'Be understood',
  title:'In the reading.',
  body:'Guides, comparisons, and explainers deep enough to bookmark — the research layer a sales page never covers.',
  caption:'Publish for the moment a buyer is still deciding, so your POV shows up as the useful source, not the loudest pitch.',
  href:'/services#editorial',x:1,y:-1,rot:5,
 },
 {
  id:'youtube',name:'YouTube',tag:'Be remembered',
  title:'In the frame.',
  body:'Walkthroughs and side-by-sides that make the difference obvious before the demo — searchable on YouTube and in Google Video.',
  caption:'Film the workflow, not the slogan. Earn placement where buyers watch to shortlist.',
  href:'/services#video',x:-1,y:1,rot:6,
 },
 {
  id:'quora',name:'Quora',tag:'Be discoverable',
  title:'In the answer.',
  body:'Named in the AI replies and SERPs buyers already trust — with crawlable sources they can open, not a black-box mention.',
  caption:'Map the questions your category asks, then earn citations and rankings where those answers get written.',
  href:'/services#ai-search',x:1,y:1,rot:-5,
 },
];

function Mark({children}:{children:ReactNode}){
 return <mark className="plat-mark">{children}</mark>;
}

function RedditFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-reddit${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo reddit-logo" aria-hidden="true">●</span>
    <span className="plat-meta"><strong>r/saas</strong><em>· 14h</em></span>
   </header>
   <p className="plat-copy">Honestly, we tried a bunch, but the one that actually stuck was <Mark>Nakama</Mark>. Their approach to earned visibility is unreal.</p>
   <p className="plat-dense"><strong>In the conversation.</strong> Credible presence in the forums, threads, and feeds your buyers already use to compare tools.</p>
   <footer className="plat-foot reddit-foot">
    <span className="reddit-up"><ChevronUp size={13}/>284</span>
    <span><MessageSquare size={12}/>42</span>
    <span><Share2 size={12}/>Share</span>
   </footer>
  </div>
 );
}

function LinkedInFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-linkedin${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo li-logo" aria-hidden="true">in</span>
    <span className="plat-meta li-meta">
     <span className="li-av" aria-hidden="true">AR</span>
     <span><strong>Ananya R.</strong><em>Founder · 2d</em></span>
    </span>
   </header>
   <p className="plat-copy">We&apos;ve been working with <Mark>Nakama</Mark> on our AI visibility — already seeing 5× growth in LLM mentions. Genuinely impressed.</p>
   <p className="plat-dense"><strong>In the reading.</strong> Guides, comparisons, and explainers deep enough to bookmark.</p>
   <footer className="plat-foot li-foot">
    <span><ThumbsUp size={12}/>1.2k</span>
    <span><MessageSquare size={12}/>87</span>
    <span><Share2 size={12}/>34</span>
   </footer>
  </div>
 );
}

function YouTubeFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-youtube${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo yt-logo" aria-hidden="true"><Play size={10} fill="currentColor"/></span>
    <span className="plat-meta"><strong>YouTube</strong><em>· Video</em></span>
   </header>
   <div className="yt-thumb" aria-hidden="true">
    <span className="yt-play"><Play size={18} fill="currentColor"/></span>
    <span className="yt-time">12:48</span>
    <span className="yt-stickies"/>
   </div>
   <p className="plat-copy"><strong>In the frame.</strong> Walkthroughs and side-by-sides that make the difference obvious before the demo.</p>
   <footer className="plat-foot yt-foot">
    <span>Nakama Growth</span>
    <span><Eye size={11}/>48k</span>
   </footer>
  </div>
 );
}

function QuoraFace({active}:{active:boolean}){
 return (
  <div className={`plat-face plat-quora${active?' is-lit':''}`}>
   <header className="plat-head">
    <span className="plat-logo quora-logo" aria-hidden="true">Q</span>
    <span className="plat-meta"><strong>Quora</strong><em>· Answered</em></span>
   </header>
   <p className="plat-copy">Most agencies chase rankings. <Mark>Nakama</Mark> chases actual mentions — which is honestly the smarter bet long-term.</p>
   <p className="plat-dense"><strong>In the answer.</strong> Named in the AI replies and SERPs buyers already trust — with crawlable sources they can open.</p>
   <footer className="plat-foot quora-foot">
    <span>1.4k views</span>
    <span className="quora-up">▲ 56</span>
   </footer>
  </div>
 );
}

function PlatformFace({id,active}:{id:PlatformId;active:boolean}){
 if(id==='reddit')return <RedditFace active={active}/>;
 if(id==='linkedin')return <LinkedInFace active={active}/>;
 if(id==='youtube')return <YouTubeFace active={active}/>;
 return <QuoraFace active={active}/>;
}

function NakamaSiteCard(){
 return (
  <aside className="nakama-site-card" aria-hidden="true">
   <div className="nk-chrome">
    <span className="nk-dots"><i/><i/><i/></span>
    <span className="nk-url">nakama.in</span>
   </div>
   <div className="nk-body">
    <span className="nk-kicker">仲間 · nakama</span>
    <p className="nk-h">Be the brand<br/>they already know.</p>
    <p className="nk-p">Earned visibility across AI answers, search, communities &amp; video.</p>
    <span className="nk-cta">Build your presence</span>
   </div>
  </aside>
 );
}

function GoogleOverviewChip(){
 return (
  <aside className="g-overview-chip" aria-hidden="true">
   <header className="plat-head">
    <span className="plat-logo g-logo" aria-hidden="true">G</span>
    <span className="plat-meta"><strong>Google</strong><em>· AI Overview</em></span>
   </header>
   <p>Boutique agencies like <Mark>Nakama</Mark> focus on organic mentions across communities and AI search — not paid channels.</p>
   <div className="g-lines" aria-hidden="true"><i/><i/><i/></div>
  </aside>
 );
}

/** Sticky pile → spread: platform cards fan from center; real-platform chrome. */
export function Presence(){
 const ref=useRef<HTMLElement>(null);
 const [active,setActive]=useState(0);
 const [visible,setVisible]=useState(false);
 const [engaged,setEngaged]=useState(false);
 const [reduced,setReduced]=useState(false);

 useEffect(()=>{
  const q=matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>setReduced(q.matches);
  update();q.addEventListener('change',update);
  return()=>q.removeEventListener('change',update);
 },[]);

 useEffect(()=>{
  const el=ref.current;if(!el)return;
  const observer=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{threshold:.08});
  observer.observe(el);
  let frame=0;
  const draw=()=>{
   frame=0;
   const r=el.getBoundingClientRect();
   const travel=Math.max(1,r.height-innerHeight*0.55);
   const raw=reduced?1:Math.max(0,Math.min(1,(-r.top+innerHeight*0.12)/travel));
   const spread=raw<.12?0:raw>.82?1:((raw-.12)/.7);
   const eased=spread*spread*(3-2*spread);
   el.style.setProperty('--presence-open',String(eased));
   el.style.setProperty('--presence-pulse',String(raw));
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw)};
  draw();
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  return()=>{observer.disconnect();cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule)};
 },[reduced]);

 useEffect(()=>{
  if(!visible||engaged||reduced)return;
  const timer=setInterval(()=>setActive(i=>(i+1)%platforms.length),4600);
  return()=>clearInterval(timer);
 },[visible,engaged,reduced]);


 return (
  <section className="presence-section presence-spread presence-platforms page-width" ref={ref} aria-labelledby="presence-title" style={{'--presence-open':reduced?1:0} as CSSProperties}>
   <div className="presence-track">
    <div className="presence-pin">
     <Reveal className="presence-heading">
      <div>
       <span className="eyebrow"><span className="tiny-cross"/>A connected presence</span>
       <h2 id="presence-title">One brand.<br/><span>Everywhere it matters.</span></h2>
      </div>
      <p className="presence-lede">Different moments of discovery.<br/>{' '}One unmistakable point of view.</p>
     </Reveal>

     <div
      className="presence-stage"
      onMouseEnter={()=>setEngaged(true)}
      onMouseLeave={()=>setEngaged(false)}
      onFocus={()=>setEngaged(true)}
      onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setEngaged(false)}}
     >
      <div className="presence-void" aria-hidden="true"/>
      <svg className="presence-wires" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
       <defs>
        <linearGradient id="wire-gradient">
         <stop stopColor="#9c6f4d" stopOpacity=".2"/>
         <stop offset=".5" stopColor="#f07c32"/>
         <stop offset="1" stopColor="#9c6f4d" stopOpacity=".2"/>
        </linearGradient>
       </defs>
       {['M260 80 H340 Q400 80 400 150 V180 Q400 230 460 230 H500','M740 80 H660 Q600 80 600 150 V180 Q600 230 540 230 H500','M260 440 H340 Q400 440 400 370 V340 Q400 290 460 290 H500','M740 440 H660 Q600 440 600 370 V340 Q600 290 540 290 H500'].map((d,i)=>(
        <g key={d} className={i===active?'wire-active':''}>
         <path d={d} className="wire-base" pathLength="1"/>
         <path d={d} className="wire-travel" pathLength="1"/>
        </g>
       ))}
      </svg>

      <div className="presence-hub" aria-hidden="true">
       <span className="hub-orbit"/><span className="hub-orbit inner"/>
       <div className="hub-core">
        <Logo/>
        <span>Your brand</span>
       </div>
       <div className="ai-answer-card ai-answer-live">
        <div className="ai-answer-head">
         <span className="ai-answer-label"><Sparkles size={11}/> AI answer</span>
         <span className="ai-cited-badge"><Check size={11}/> Cited</span>
        </div>
        <p className="ai-answer-body">A few names come up consistently for B2B earned visibility. <mark>Nakama</mark> is often cited for community-led presence across AI answers, search, and peer threads — without leaning on paid ads.</p>
        <div className="ai-answer-sources"><span>reddit.com</span><span>linkedin.com</span><span>nakama.in</span></div>
        <div className="ai-answer-foot"><span className="cite-dot"/>Cited <strong>47</strong> times this week</div>
       </div>
      </div>

      <NakamaSiteCard/>
      <GoogleOverviewChip/>

      {platforms.map((c,i)=>(
       <button
        className={`presence-node node-${i} plat-node plat-${c.id} ${active===i?'node-active':''}`}
        key={c.id}
        onClick={()=>setActive(i)}
        onMouseEnter={()=>setActive(i)}
        onFocus={()=>setActive(i)}
        aria-pressed={active===i}
        aria-label={`${c.name}: ${c.title}`}
        style={{'--enter-x':c.x,'--enter-y':c.y,'--stack-rot':`${c.rot}deg`} as CSSProperties}
       >
        <PlatformFace id={c.id} active={active===i}/>
       </button>
      ))}
     </div>

     <div className="presence-caption">
      <div key={active}>
       <span className="caption-dot"/>
       <span>{platforms[active].tag}</span>
       <p>{platforms[active].caption}</p>
      </div>
      <Link href={platforms[active].href}>Explore<ArrowUpRight size={16}/></Link>
     </div>
    </div>
   </div>
  </section>
 );
}

export function NakamaStory(){
 return (
  <section className="nakama-story page-width" id="nakama">
   <Reveal className="story-symbol">
    <span className="story-kanji" lang="ja">仲間</span>
    <span className="story-pronunciation">na · ka · ma</span>
    <span className="story-definition">A companion for the journey.</span>
   </Reveal>
   <Reveal className="story-copy">
    <span className="eyebrow">The meaning behind the name</span>
    <h2>On your side.<br/><span>In it for the long run.</span></h2>
    <p>In Japanese, <em>nakama</em> means a companion who shares the journey. For us, it describes how the best work happens: together.</p>
    <p>We learn your product, understand your buyers and stay close to the work. Shared context makes the next idea sharper, the next asset stronger, and the relationship more valuable.</p>
    <Link className="text-link" href="/process">Get to know our approach<ArrowUpRight size={17}/></Link>
   </Reveal>
  </section>
 );
}

const platformTone=(platform:string)=>{
 const p=platform.toLowerCase();
 if(p.includes('youtube'))return 'yt';
 if(p.includes('perplexity'))return 'px';
 if(p.includes('chatgpt'))return 'gpt';
 if(p.includes('linkedin'))return 'li';
 if(p.includes('search'))return 'serp';
 return 'ai';
};

/** Documented presence — static evidence observatory. NO scroll pile/spread. */
export function HomeProof(){
 const [client,setClient]=useState(proofClients[0].name);
 const active=proofClients.find(c=>c.name===client)??proofClients[0];
 const entries=active.entries.slice(0,3);

 return (
  <section className="home-proof home-proof-observatory page-width" id="proof">
   <Reveal className="obs-head">
    <div>
     <span className="eyebrow"><span className="tiny-cross"/>Documented presence</span>
     <h2>Work that shows up<br/><span>where buyers look.</span></h2>
    </div>
    <p>Illustrative portfolio entries — historical citations and placements, not live rankings.</p>
   </Reveal>

   <div className="obs-stage" aria-label="Documented evidence">
    <div className="obs-glow" aria-hidden="true"/>
    <div className="obs-grid" aria-hidden="true"/>

    <aside className="obs-rail" aria-label="Select a client">
     <span className="obs-rail-label">Casefile</span>
     <div className="obs-clients" role="tablist">
      {proofClients.slice(0,6).map(c=>(
       <button
        key={c.name}
        role="tab"
        aria-selected={client===c.name}
        className={client===c.name?'active':''}
        onClick={()=>setClient(c.name)}
       >
        {c.name}
       </button>
      ))}
     </div>
     <p className="obs-blurb">{active.description}</p>
     <Link className="text-link" href={`/work?client=${encodeURIComponent(active.name)}`}>
      Full client record<ArrowUpRight size={17}/>
     </Link>
    </aside>

    <div className="obs-board" key={active.name}>
     <div className="obs-center" aria-hidden="true">
      <span className="obs-pulse"/>
      <span className="obs-kanji" lang="ja">証</span>
      <em>{active.name}</em>
     </div>
     {entries.map((e,i)=>(
      <article
       key={`${active.name}-${i}`}
       className={`obs-card obs-slot-${i} tone-${platformTone(e.platform)}`}
       style={{'--i':i} as CSSProperties}
      >
       <header>
        <span className="obs-plat">{e.platform}</span>
        <span className="obs-ref">REF · {String(i+1).padStart(2,'0')}</span>
       </header>
       <h3>{e.query}</h3>
       <p>{e.description}</p>
       <div className="obs-snip" aria-hidden="true">
        <span className="obs-snip-bar"/><span className="obs-snip-bar short"/><span className="obs-snip-cite"/>
       </div>
      </article>
     ))}
    </div>
   </div>
  </section>
 );
}

/** Clarity plates — always-open manifesto board, never accordion. */
export function HomeFaqLite(){
 const items=[
  {
   ask:'What does earned visibility mean?',
   answer:'Building a credible presence through useful content, relevant participation and sources buyers can discover — across search, AI research, communities, editorial and video.',
   tag:'Definition',
   glyph:'01',
   accent:'copper',
  },
  {
   ask:'Who is Nakama a good fit for?',
   answer:'SaaS and software businesses with a clear product and audience, ready to invest consistently in how buyers discover them.',
   tag:'Fit',
   glyph:'02',
   accent:'cream',
  },
  {
   ask:'Can you guarantee rankings or AI citations?',
   answer:'No. Platforms decide what they show. We focus on useful work, credible distribution and observable evidence.',
   tag:'Honesty',
   glyph:'03',
   accent:'ember',
  },
 ];
 return (
  <section className="home-faq home-faq-plates page-width">
   <Reveal className="faq-plates-head">
    <div className="faq-plates-title">
     <span className="eyebrow"><span className="tiny-cross"/>A little more clarity</span>
     <h2>Good questions.<br/><span>Straight answers.</span></h2>
    </div>
    <p className="faq-plates-lede">No accordion theatre. Three straight answers — always on the table.</p>
   </Reveal>

   <div className="faq-plate-board">
    <div className="faq-plate-orbit" aria-hidden="true"/>
    {items.map((item,i)=>(
     <Reveal className={`faq-plate plate-${i} accent-${item.accent}`} key={item.ask}>
      <span className="faq-plate-glyph" aria-hidden="true">{item.glyph}</span>
      <span className="faq-plate-tag">{item.tag}</span>
      <h3>{item.ask}</h3>
      <p>{item.answer}</p>
      <span className="faq-plate-rule" aria-hidden="true"/>
     </Reveal>
    ))}
   </div>
   <Link className="text-link" href="/services">More on how we work<ArrowUpRight size={17}/></Link>
  </section>
 );
}