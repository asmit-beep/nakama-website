"use client";
import {useState,type ReactNode} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Sparkles,Check,ThumbsUp,MessageSquare,Share2,Play,Eye,ChevronUp,Search,Globe,Plus} from 'lucide-react';
import {Reveal} from './site';
import './presence-polish.css';
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

/** In-flow cards keep their alignment at every scroll position and text size. */
export function Presence(){
 const [active,setActive]=useState<string|null>(null);
 const channels=[
  {id:'reddit',name:'Reddit',label:'Join the conversation',text:'Useful contributions in the communities where buyers compare tools and share experience.',detail:'Community research · Helpful participation',href:'/services#community'},
  {id:'linkedin',name:'LinkedIn',label:'Publish your perspective',text:'Expert articles, comparisons and practical insights that make your product easier to understand.',detail:'Thought leadership · Buyer guides',href:'/services#editorial'},
  {id:'youtube',name:'YouTube',label:'Show how it works',text:'Searchable walkthroughs and comparison videos that help buyers see the difference.',detail:'Video creation · YouTube discovery',href:'/services#video'},
  {id:'quora',name:'Quora',label:'Answer the real question',text:'Clear, relevant answers that bring your expertise into the questions buyers already ask.',detail:'Question research · Useful answers',href:'/services#community'},
 ];
 return <section className="presence-network page-width" aria-labelledby="presence-title">
  <div className="network-heading"><div><span className="eyebrow"><span className="tiny-cross"/>A connected presence</span><h2 id="presence-title">One brand.<span>More ways to be found.</span></h2></div><p>We turn your expertise into a consistent presence across the places your buyers already trust.</p></div>
  <div className="network-map" data-active={active??'none'}>
   <svg className="network-wires" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
    {['M500 200 H405 Q375 200 375 170 V110 Q375 90 350 90 H290','M500 200 H595 Q625 200 625 170 V110 Q625 90 650 90 H710','M500 200 H405 Q375 200 375 230 V290 Q375 310 350 310 H290','M500 200 H595 Q625 200 625 230 V290 Q625 310 650 310 H710'].map((path,i)=><g key={channels[i].id} className={active===channels[i].id?'is-active':''}><path d={path}/><path className="wire-signal" d={path}/></g>)}
   </svg>
   <div className="network-hub"><span className="network-hub-orbit" aria-hidden="true"/><span className="network-hub-seal" lang="ja">仲間</span><strong>nakama</strong><span>Your visibility partner</span></div>
   {channels.map((c,i)=><Link key={c.id} href={c.href} className={`network-card network-card-${i}`} onMouseEnter={()=>setActive(c.id)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(c.id)} onBlur={()=>setActive(null)}>
    <div className="network-card-top"><span className="network-logo"><img src={`/platforms/${c.id}.svg`} alt="" width="26" height="26"/></span><span>{c.name}</span><ArrowUpRight size={16}/></div>
    <h3>{c.label}</h3><p>{c.text}</p><span className="network-card-detail">{c.detail}</span>
   </Link>)}
  </div>
  <div className="network-note"><span>One strategy. Platform-native execution.</span><Link href="/services">Explore our services <ArrowUpRight size={15}/></Link></div>
 </section>;
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

/** A client gallery with evenly aligned, readable source records. */
export function HomeProof(){
 const [client,setClient]=useState(proofClients[0].name);
 const active=proofClients.find(c=>c.name===client)??proofClients[0];
 return (
  <section className="home-proof proof-gallery page-width" id="proof" aria-labelledby="proof-title">
   <Reveal className="proof-gallery-heading">
    <div>
     <span className="eyebrow"><span className="tiny-cross"/>Documented presence</span>
     <h2 id="proof-title">Work that shows up<br/><span>where buyers look.</span></h2>
    </div>
    <p>Selected client work and historical discovery examples. Rankings and citations change over time.</p>
   </Reveal>
   <div className="proof-client-selector" aria-label="Select a client">
    {proofClients.map(c=>(
     <button key={c.name} type="button" aria-pressed={client===c.name} aria-controls="proof-client-record" onClick={()=>setClient(c.name)}>
      <span className="proof-client-dot" aria-hidden="true"/>{c.name}
     </button>
    ))}
   </div>
   <div className="proof-client-record" id="proof-client-record">
    <header className="proof-record-heading">
     <div>
      <span className="proof-record-label">Casefile / {String(proofClients.indexOf(active)+1).padStart(2,'0')}</span>
      <h3>{active.name}</h3>
      <p>{active.description}</p>
     </div>
     <Link className="proof-record-link" href={`/work?client=${encodeURIComponent(active.name)}`}>Full client record<ArrowUpRight size={18}/></Link>
    </header>
    <div className="proof-record-grid" key={active.name}>
     {active.entries.map((e,i)=>{
      const tone=platformTone(e.platform);
      const Icon=tone==='yt'?Play:e.platform.includes('AI')?Sparkles:e.platform.includes('Search')?Search:Globe;
      return (
       <article className={`proof-record-card tone-${tone}`} key={`${active.name}-${i}`}>
        <header><span className="proof-source-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5}/></span><span className="proof-record-number">{String(i+1).padStart(2,'0')}</span></header>
        <span className="proof-source-name">{e.platform}</span>
        <h4>{e.query}</h4>
        <p>{e.description}</p>
       </article>
      );
     })}
    </div>
   </div>
  </section>
 );
}

/** Native disclosures keep the FAQ accessible without animation or layout offsets. */
export function HomeFaqLite(){
 const items=[
  {ask:'How do AEO and GEO fit into our SEO strategy?',answer:'They build on a strong search foundation. AEO focuses on clear answers to buyer questions; GEO also considers how generative platforms understand your brand and retrieve supporting sources. We connect both with useful content, technical clarity and relevant distribution.',tag:'Strategy',glyph:'01'},
  {ask:'Can we start with one service?',answer:'Yes. We can begin with a focused content, Reddit, link-building or YouTube project, then expand when the work and your priorities justify it. We agree on the deliverables, responsibilities and reporting before starting.',tag:'Scope',glyph:'02'},
  {ask:'Do you handle YouTube videos from idea to publishing?',answer:'We support topic research, scripts, video creation and editing, thumbnails, titles, chapters and publishing. We agree on the format, production requirements and review process with your team before work begins.',tag:'Video',glyph:'03'},
  {ask:'How will we know whether the work is helping?',answer:'We track the signals relevant to your scope: published assets, relevant mentions, search and video visibility, and observed AI citations. Where analytics access is available, we also review traffic and conversion signals, keeping those separate from claims of direct attribution.',tag:'Measurement',glyph:'04'},
  {ask:'Can you guarantee rankings or AI recommendations?',answer:'No. Search engines, communities and AI platforms control what they show. We commit to an agreed scope, careful execution and transparent reporting, and use the evidence to refine the next steps.',tag:'Expectations',glyph:'05'},
 ];
 return (
  <section className="home-faq faq-editorial page-width" id="faq" aria-labelledby="faq-title">
   <Reveal className="faq-editorial-intro">
    <span className="eyebrow"><span className="tiny-cross"/>A little more clarity</span>
    <h2 id="faq-title">Good questions.<br/><span>Straight answers.</span></h2>
    <Link className="text-link" href="/services">More on how we work<ArrowUpRight size={17}/></Link>
   </Reveal>
   <div className="faq-editorial-list">
    {items.map((item,i)=>(
     <details className="faq-editorial-item" key={item.ask} open={i===0}>
      <summary>
       <span className="faq-editorial-number" aria-hidden="true">{item.glyph}</span>
       <span className="faq-editorial-question"><span className="faq-editorial-tag">{item.tag}</span><span>{item.ask}</span></span>
       <span className="faq-editorial-toggle" aria-hidden="true"><Plus size={18}/></span>
      </summary>
      <p>{item.answer}</p>
     </details>
    ))}
   </div>
  </section>
 );
}

/** Homepage-only contact panel; supporting pages keep their existing layout. */
export function HomeContact(){
 return (
  <section className="home-contact-panel" aria-labelledby="home-contact-title">
   <div className="home-contact-orbits" aria-hidden="true"><i/><i/><i/><span>仲間</span></div>
   <div className="home-contact-inner">
    <div className="home-contact-top"><span className="eyebrow"><span className="tiny-cross"/>The next move</span></div>
    <h2 id="home-contact-title">Let’s build your<br/><span>next chapter.</span></h2>
    <div className="home-contact-bottom">
     <p>A shared ambition. A good conversation.<br/>A place to start.</p>
     <div className="home-contact-actions">
      <Link href="/work" className="home-contact-work">See the work<ArrowUpRight size={17}/></Link>
      <Link href="/contact" className="home-contact-link">Contact<span><ArrowUpRight size={23}/></span></Link>
     </div>
    </div>
   </div>
  </section>
 );
}
