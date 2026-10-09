import type {Metadata} from 'next';
import {Check} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,LinkBtn,IpCta} from '../inner/kit';

export const metadata:Metadata={title:'Process — Nakama Growth',description:'How Nakama works: understand, create, place and prove. A sequence that compounds, not a one-off campaign.'};

const stages=[
 {n:'01',when:'Weeks 1 – 2',name:'Understand',p:'We start where your buyers talk: the threads, reviews, comparison videos and AI answers they read before they shortlist. We map the exact prompts they use and where you, and your competitors, appear today.',deliv:['Buyer prompt map across ChatGPT, Perplexity, Gemini and Google','Competitor and source audit','Priority gaps and a 90-day plan']},
 {n:'02',when:'Weeks 2 – 4',name:'Create',p:'Every piece is written to an editor’s standard and built to earn its place: answer-first articles, honest comparisons, community answers and video scripts, all reviewed by your team before they go live.',deliv:['Editorial calendar tied to real prompts','Articles, comparisons and buyer guides','Video scripts and community answers']},
 {n:'03',when:'Month 2 onward',name:'Place',p:'We publish where attention already sits: Reddit, Quora, YouTube, Medium, Substack, LinkedIn, G2 and the editorial sources AI engines read, always openly and within each platform’s rules.',deliv:['Placements across 12+ platforms','Disclosed community participation','Digital PR and editorial outreach']},
 {n:'04',when:'Every month',name:'Prove',p:'We re-run your prompts, track every citation and mention, and show you the evidence. What works gets more effort, and what doesn’t gets cut. Each cycle builds on the last.',deliv:['Monthly evidence report','Citations and mentions by engine and prompt','Next moves, agreed together']},
] as const;

const cadence=[
 ['Weekly','Async updates','Drafts, placements and anything that needs your eyes, in one shared workspace.'],
 ['Fortnightly','Working session','A short call to review content and unblock approvals.'],
 ['Monthly','Evidence review','What appeared, where, and what we do next.'],
 ['Quarterly','Strategy reset','We revisit the prompt map and the plan as your market moves.'],
] as const;

export default function Process(){
 return (
  <Shell className="process-page shell-cinema ip-page">
   <IpAtmos tone="rose"/>
   <IpHero
    tone="rose"
    eyebrow="Process"
    title="A sequence,"
    accent="not a campaign."
    lead="Four stages that repeat and compound. Research sharpens the work, distribution creates evidence, and evidence improves what we build next. Your team stays close to every step."
   >
    <LinkBtn href="/pricing#quote">Get your custom quote</LinkBtn>
    <LinkBtn href="#stages" ghost>See the four stages</LinkBtn>
   </IpHero>

   <IpSection id="stages">
    <IpHead eyebrow="How the work moves" title={<>Understand. Create. Place. <em>Prove.</em></>} lead="The first cycle takes about a month. After that, every month builds on the signals and evidence of the one before."/>
    <div className="ip-timeline">
     {stages.map(s=><Reveal className="ip-stage" key={s.n}>
      <span className="ip-stage-dot">{s.n}</span>
      <div className="ip-card">
       <div><span className="when">{s.when}</span><h3>{s.name}</h3><p>{s.p}</p></div>
       <div className="deliv"><span>What you get</span><ul>{s.deliv.map(d=><li key={d}><Check size={15}/>{d}</li>)}</ul></div>
      </div>
     </Reveal>)}
    </div>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="Working rhythm" title={<>Clear cadence. <em>No black boxes.</em></>} lead="You always know what is in progress, what went live and what it changed."/>
    <div className="ip-cadence">
     {cadence.map(([b,t,p])=><Reveal className="ip-card" key={t}><b>{b}</b><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpCta/>
  </Shell>
 );
}
