import type {Metadata} from 'next';
import {Sparkles,Bot,FileText,MessageCircle,Play,Share2,ChartNoAxesCombined,Check} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpFaq,IpCta} from '../inner/kit';

export const metadata:Metadata={title:'Services — Nakama Growth',description:'AI visibility, community, content, video, digital PR and measurement for SaaS and software brands that want to be found and chosen.'};

const services=[
 {icon:Sparkles,tag:'AEO · Answer engines',name:'Be part of the answer.',p:'We turn buyer questions into clear, structured answers that search and answer engines can understand, retrieve and quote.',items:['Buyer-question and answer-gap research','Answer-first content and FAQ structure','Citation and visibility tracking']},
 {icon:Bot,tag:'GEO · Generative engines',name:'Build a brand AI understands.',p:'We strengthen the content, context and third-party sources that teach ChatGPT, Perplexity, Gemini and Google where your product fits.',items:['AI answer and competitor audits','Consistent product and category context','Source strategy for citation-ready content']},
 {icon:MessageCircle,tag:'Reddit & community',name:'Earn a place in the conversation.',p:'Useful, transparent participation in the communities your buyers trust, always within each community’s rules.',items:['Subreddit and conversation research','Helpful, disclosed answers and threads','Mention monitoring across Reddit, Quora and Discord']},
 {icon:FileText,tag:'Content & editorial',name:'Make your expertise useful.',p:'Original articles, comparisons and buyer guides that turn product knowledge into content people, and AI engines, rely on.',items:['Expert-led articles on Medium, Substack and LinkedIn','Comparison pages and buyer guides','Research, fact-checking and refreshes']},
 {icon:Play,tag:'YouTube & video',name:'Questions, answered on camera.',p:'From idea to published video: explainers, walkthroughs and honest comparisons built around what buyers search.',items:['YouTube strategy, research and scripting','Editing, short-form cuts and thumbnails','Titles, chapters and publishing']},
 {icon:Share2,tag:'Digital PR & links',name:'Connect to credible sources.',p:'Relevant editorial placements and relationships that put your brand in front of the right audiences, and the right crawlers.',items:['Publisher and partner research','Editorial outreach and linkable assets','Placement and source-quality reporting']},
] as const;

const flow=[
 ['Research tells us where to play','The prompt map and source audit show which questions matter and which platforms AI engines trust in your category.'],
 ['Content and placement run together','Each answer is written once, then shaped for the article, the thread, the video and the newsletter where it will be found.'],
 ['Evidence decides the next cycle','We track every citation and mention, double down on what moves and cut what doesn’t, every month.'],
] as const;

const faq=[
 ['Do I need all of these services?','No. Most partners start with an audit plus one or two channels. We recommend a mix based on where your buyers actually research.'],
 ['How is this different from SEO?','SEO focuses on your own site ranking in search. We focus on your brand being mentioned and cited everywhere buyers research, including AI answers, communities and video. The two work well together.'],
 ['Is community work transparent?','Always. We participate openly, follow each community’s rules and never post fake reviews or hidden endorsements.'],
 ['How do you measure results?','A monthly evidence report shows where your brand appeared, in which AI engines, for which prompts, which sources were cited, and what we will do next.'],
] as const;

export default function Services(){
 return (
  <Shell className="services-page shell-cinema ip-page">
   <IpAtmos tone="teal"/>
   <IpHero
    tone="teal"
    eyebrow="Services"
    title="One system for"
    accent="earned visibility."
    lead="Strategy, content and distribution working together, built around your product, your buyers and the places they already research. Pick a single channel or the full system."
   >
    <LinkBtn href="/pricing#quote">Get your custom quote</LinkBtn>
    <LinkBtn href="#services" ghost>Explore services</LinkBtn>
   </IpHero>

   <IpSection id="services">
    <IpHead eyebrow="What we do" title={<>Six capabilities. <em>One shared goal.</em></>} lead="Every service is designed to make your brand easier to find, trust and choose, by people and by AI engines."/>
    <div className="ip-g3">
     {services.map(s=><Reveal className="ip-card ip-svc" key={s.tag}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><s.icon size={21}/></span></div>
      <span className="tag">{s.tag}</span>
      <h3>{s.name}</h3>
      <p>{s.p}</p>
      <ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul>
     </Reveal>)}
     <Reveal className="ip-card ip-svc wide" style={{gridColumn:'1/-1'}}>
      <div className="ip-svc-top"><span className="ip-svc-ico"><ChartNoAxesCombined size={21}/></span></div>
      <span className="tag">Included in every engagement</span>
      <h3>Measurement & reporting</h3>
      <p>We report what appeared, where it appeared and what to do next, with full context around citations, mentions and discovery.</p>
      <ul>{['Citation and source-presence monitoring','AI answer tracking across 4 engines','Search and YouTube visibility','Evidence, gaps and next priorities'].map(i=><li key={i}>{i}</li>)}</ul>
     </Reveal>
    </div>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="How it fits together" title={<>Services that <em>feed each other.</em></>}/>
    <div className="ip-flow">
     {flow.map(([t,p])=><Reveal className="ip-card" key={t}><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpSection>
    <Reveal className="ip-agency">
     <div>
      <span className="ip-eyebrow"><i/>For agencies</span>
      <h2>Your team, with <em>more reach.</em></h2>
     </div>
     <div>
      <p>White-label AI visibility, content, video and reporting for agencies that want a specialist partner behind their name.</p>
      <ul>{['Your branding on every deliverable','Direct line between our team and yours','Capacity that scales with your roster'].map(i=><li key={i}><Check size={16}/>{i}</li>)}</ul>
      <BookBtn>Talk partnerships</BookBtn>
     </div>
    </Reveal>
   </IpSection>

   <IpFaq items={faq}/>
   <IpCta/>
  </Shell>
 );
}
