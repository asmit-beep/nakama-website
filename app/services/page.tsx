import type {Metadata} from 'next';
import Link from 'next/link';
import {Sparkles,FileText,MessageCircle,Play,Share2,ChartNoAxesCombined,ArrowUpRight} from 'lucide-react';
import {Shell,Reveal,NextChapter,Booking} from '../site';
import {Faq} from '../ContentSections';

export const metadata:Metadata={title:'Services — Nakama Growth',description:'Connected strategy, editorial, community, video and measurement for SaaS brands that want to be discovered.'};

const capabilities=[
 {id:'ai-search',icon:Sparkles,name:'AEO · Answer engine optimization',lead:'Be part of the answer.',description:'We turn buyer questions into clear, useful answers that search and answer engines can understand and retrieve.',items:['Buyer-question and answer-gap research','Answer-first content and FAQ structure','Source, citation and visibility tracking'],span:'base'},
 {id:'geo',icon:Sparkles,name:'GEO · Generative engine optimization',lead:'Build a brand AI can understand.',description:'We strengthen the content, context and third-party sources that help generative engines understand your product and its place in the market.',items:['AI answer and competitor audits','Consistent product and category context','Citation-ready content and source strategy'],span:'base'},
 {id:'community',icon:MessageCircle,name:'Reddit & community',lead:'Earn a place in the conversation.',description:'We research relevant communities and contribute useful, transparent perspectives that respect each community’s rules and audience.',items:['Subreddit and conversation research','Helpful answers and discussion-led content','Disclosed participation and mention monitoring'],span:'base'},
 {id:'editorial',icon:FileText,name:'Content writing',lead:'Make your expertise useful.',description:'Original articles, comparisons and buyer guides turn product knowledge into content that helps people understand their options.',items:['Expert-led articles and thought leadership','Comparison pages and buyer guides','Editorial research, fact-checking and refreshes'],span:'base'},
 {id:'publishing',icon:Share2,name:'Link building & digital PR',lead:'Connect your work to credible sources.',description:'We pursue relevant editorial opportunities and relationships that bring useful content to the right audiences.',items:['Relevant publisher and partner research','Editorial outreach and linkable assets','Placement reporting and source-quality review'],span:'base'},
 {id:'video',icon:Play,name:'YouTube & video creation',lead:'Turn questions into videos worth watching.',description:'From the first idea to the published video, we create clear explanations, product walkthroughs and comparisons built around your buyers.',items:['YouTube strategy, research and scripting','Video creation, editing and short-form cuts','Thumbnails, titles, chapters and publishing'],span:'base'},
 {id:'measurement',icon:ChartNoAxesCombined,name:'Measurement & reporting',lead:'Keep the evidence in view.',description:'We report what appeared, where it appeared and what to do next, with context around citations, mentions and discovery.',items:['Citation and source-presence monitoring','Search and YouTube visibility tracking','Evidence, gaps and next priorities'],span:'wide'},
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
     {capabilities.map((c,i)=><span key={c.id}>{String(i+1).padStart(2,'0')}</span>)}
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
