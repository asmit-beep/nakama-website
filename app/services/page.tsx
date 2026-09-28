import type {Metadata} from 'next';
import Link from 'next/link';
import {Sparkles,FileText,MessageCircle,Play,Share2,ChartNoAxesCombined,ArrowUpRight} from 'lucide-react';
import {Shell,Reveal,NextChapter,Booking} from '../site';
import {Faq} from '../ContentSections';

export const metadata:Metadata={title:'Services — Nakama Growth',description:'Connected strategy, editorial, community, video and measurement for SaaS brands that want to be discovered.'};

const capabilities=[
 {id:'ai-search',icon:Sparkles,name:'AI discovery & search',lead:'Be part of the answer.',description:'We map how buyers research your category, identify the questions and sources that matter, and shape a focused plan for earning visibility.',items:['Buyer-question and source research','Search-led content strategy','Competitive visibility gaps'],span:'wide'},
 {id:'editorial',icon:FileText,name:'Editorial & authority',lead:'Put your expertise to work.',description:'Product knowledge becomes original articles, buyer guides and comparisons that help people understand their options and make informed decisions.',items:['Expert-led articles and perspectives','Comparisons and buyer guides','Content refreshes and editorial outreach'],span:'tall'},
 {id:'community',icon:MessageCircle,name:'Community & distribution',lead:'Earn a place in the conversation.',description:'We find the places your buyers exchange ideas, listen to the context, and contribute in ways that are useful, relevant and appropriate to each community.',items:['Community and conversation research','Platform-native publishing','Helpful, transparent participation'],span:'base'},
 {id:'video',icon:Play,name:'Video & discovery',lead:'Make the difference easy to see.',description:'Clear explanations, product walkthroughs and thoughtful comparisons turn buyer questions into videos people can find, learn from and share.',items:['Strategy, scripts and production','Titles, thumbnails and chapters','Publishing and short-form adaptations'],span:'base'},
 {id:'publishing',icon:Share2,name:'Publishing & digital PR',lead:'Give good ideas more places to go.',description:'Strong work deserves thoughtful distribution. We adapt the story for relevant platforms and pursue editorial opportunities that fit the audience.',items:['Editorial and digital PR outreach','Platform-specific content adaptations','Relevance-first authority building'],span:'base'},
 {id:'measurement',icon:ChartNoAxesCombined,name:'Measurement & reporting',lead:'Keep the evidence in view.',description:'A useful report shows what appeared, where it appeared and what to do next. We keep the context around citations, mentions and discovery observations.',items:['Citation and source-presence monitoring','Search and video visibility tracking','Evidence, gaps and next priorities'],span:'wide'},
] as const;

export default function Services(){
 return (
  <Shell className="services-page services-atlas shell-cinema">
   <section className="atlas-hero page-width">
    <Reveal className="atlas-hero-copy">
     <span className="eyebrow"><span className="tiny-cross"/>Our services</span>
     <h1>Capability,<br/><em>not a menu.</em></h1>
     <p>Strategy, content and distribution working as one system. Built around your product, your buyers and the next opportunity.</p>
     <div className="atlas-hero-actions">
      <Booking>Book a conversation</Booking>
      <a className="text-link" href="#atlas">Explore the mix<ArrowUpRight size={17}/></a>
     </div>
    </Reveal>
    <div className="atlas-hero-rail" aria-hidden="true">
     <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span>
    </div>
   </section>

   <section className="atlas-jump page-width" aria-label="Jump to a capability">
    {capabilities.map(c=>(
     <a href={`#${c.id}`} key={c.id} className="atlas-jump-chip">
      <c.icon size={14}/><span>{c.name}</span>
     </a>
    ))}
   </section>

   <section className="atlas-grid page-width" id="atlas">
    {capabilities.map((c,i)=>(
     <Reveal className={`atlas-tile atlas-${c.span}`} key={c.id}>
      <div id={c.id} className="service-anchor"/>
      <div className="atlas-tile-top">
       <span className="atlas-index">{String(i+1).padStart(2,'0')}</span>
       <c.icon size={22} className="atlas-icon"/>
      </div>
      <span className="atlas-name">{c.name}</span>
      <h2>{c.lead}</h2>
      <p>{c.description}</p>
      <ul>{c.items.map(item=><li key={item}>{item}</li>)}</ul>
     </Reveal>
    ))}
   </section>

   <Reveal className="atlas-agency page-width">
    <div className="atlas-agency-copy">
     <span className="eyebrow">For agencies</span>
     <h2>Your team.<br/><span>With a little more reach.</span></h2>
    </div>
    <div className="atlas-agency-body">
     <p>White-label strategy, content, video and reporting support. Clear ownership, direct communication, and a team that understands the work behind your name.</p>
     <Link className="text-link" href="/contact">Talk partnerships<ArrowUpRight size={17}/></Link>
    </div>
   </Reveal>

   <Faq/>
   <NextChapter/>
  </Shell>
 );
}
