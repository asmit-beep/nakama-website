import type {Metadata} from 'next';
import {Check,Layers,Film,Globe2,Swords,Gauge,Users,ShieldCheck,FileBarChart,MessageSquareText,Eye} from 'lucide-react';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,FitSplit,IpFaq} from '../inner/kit';
import {QuoteForm} from './QuoteForm';

export const metadata:Metadata={
 title:'Pricing — Nakama Growth',
 description:'Every Nakama engagement is scoped to your product, buyers and category. Get a custom quote and book a 15-minute pricing call.',
};

const plans=[
 {name:'Visibility Audit',for:'See exactly where you stand before you invest.',len:'One-time · about 2 weeks',items:['Prompt map of the questions your buyers ask','Where you, and your competitors, appear in ChatGPT, Perplexity, Gemini and Google','Source gap analysis: which sites AI engines trust in your category','A prioritised 90-day plan your team can run with'],cta:'quote'},
 {name:'Growth Partnership',for:'An ongoing team that builds earned presence every month.',len:'Monthly retainer · 3 month minimum',featured:true,items:['Everything in the audit, refreshed every cycle','Editorial, comparison and buyer-guide content','Community participation on Reddit, Quora and more, always disclosed','YouTube scripts and video, Medium and Substack placements','Monthly evidence report with citations, mentions and next moves'],cta:'quote'},
 {name:'Agency & White-label',for:'Specialist AI visibility capacity under your agency’s name.',len:'Per-client or pod pricing',items:['Strategy, content, video and reporting delivered white-label','Direct line between our team and yours','Your branding on every report and deliverable','Flexible capacity as your client roster grows'],cta:'call'},
] as const;

const factors=[
 [Layers,'Platforms and channels','How many places we publish: communities, editorial, video, review sites and newsletters.'],
 [MessageSquareText,'Content volume','The number of articles, answers, comparisons and posts each month.'],
 [Film,'Video production','Whether we script only, or script, edit and publish YouTube and short-form.'],
 [Swords,'Category competition','Crowded categories need more sources and more consistency to win the answer.'],
 [Globe2,'Markets and languages','One market or several, and the languages your buyers search in.'],
 [Gauge,'Where you start from','A brand AI already mentions moves faster than one it has never heard of.'],
] as const;

const includes=[[Users,'A dedicated strategist'],[Eye,'Review before anything goes live'],[FileBarChart,'Monthly evidence report'],[ShieldCheck,'Disclosed, rule-respecting participation'],[Check,'No fake reviews, ever']] as const;

const faq=[
 ['Why don’t you list fixed prices?','Because two brands rarely need the same thing. A company AI already cites needs a different plan from one it has never heard of. We scope each engagement around your category, channels and goals, then send a clear written quote.'],
 ['How quickly will I get a quote?','Fill in the form and book the 15-minute pricing call. We send a written proposal with scope and price within two business days of that call.'],
 ['Is there a minimum commitment?','The Visibility Audit is a one-time project. Growth Partnerships start with a three-month minimum, because earned visibility compounds and the first month is mostly research and setup.'],
 ['Can we start with a single service?','Yes. Many teams start with the audit, or with one channel such as YouTube or community, and add more once they see the evidence.'],
 ['Do you guarantee rankings or AI mentions?','No, and be wary of anyone who does. No one controls what AI engines say. We guarantee the work, the transparency and the reporting, and we show you exactly where your brand appears.'],
 ['What do you need from our team?','Product context, access to someone who knows your customers, and a quick review of drafts. Usually an hour or two a week.'],
] as const;

export default function Pricing(){
 return (
  <Shell className="pricing-page shell-cinema ip-page">
   <IpAtmos tone="ember"/>
   <IpHero
    tone="ember"
    eyebrow="Pricing"
    title="Priced around your goals,"
    accent="not a package."
    lead="Every brand starts from a different place, so every engagement is scoped to your product, your buyers and your category. Pick a starting shape, tell us about your goals, and get a custom quote."
   >
    <LinkBtn href="#quote">Get your custom quote</LinkBtn>
    <LinkBtn href="#plans" ghost>Compare engagement types</LinkBtn>
   </IpHero>

   <IpSection id="plans">
    <IpHead eyebrow="Ways to work with us" title={<>Three starting shapes. <em>One custom plan.</em></>} lead="Most partners begin with one of these and we tailor it from there. Every price is quoted after a short call, never guessed from a form."/>
    <div className="ip-plans">
     {plans.map(p=><Reveal className={`ip-card ip-plan${'featured' in p&&p.featured?' featured':''}`} key={p.name}>
      {'featured' in p&&p.featured&&<span className="ip-plan-badge">Most chosen</span>}
      <span className="ip-num">{p.len}</span>
      <h3>{p.name}</h3>
      <p className="for">{p.for}</p>
      <div className="price"><b>Custom</b><small>quoted after a 15-min call</small></div>
      <ul>{p.items.map(i=><li key={i}><Check size={16}/>{i}</li>)}</ul>
      {p.cta==='call'?<BookBtn className="ip-btn ip-btn-glass">Talk partnerships</BookBtn>:<LinkBtn href="#quote">Get your custom quote</LinkBtn>}
     </Reveal>)}
    </div>
    <Reveal className="ip-includes">
     {includes.map(([I,t])=><span key={t}><I size={15}/>{t}</span>)}
    </Reveal>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="What shapes your quote" title={<>Six things decide <em>the number.</em></>} lead="We price the work, not the hours. These are the levers we look at on the call."/>
    <Reveal className="ip-factors">
     {factors.map(([I,t,p])=><div className="ip-factor" key={t}><I size={22}/><h3>{t}</h3><p>{p}</p></div>)}
    </Reveal>
   </IpSection>

   <IpSection id="quote">
    <Reveal className="ip-quote">
     <div className="ip-quote-side">
      <span className="ip-eyebrow"><i/>Custom quote</span>
      <h2>Get your <em>custom quote.</em></h2>
      <p>Tell us a little about your brand. When you send it, you will pick a time for a 15-minute pricing call, without leaving this page.</p>
      <ol className="ip-steps">
       <li><b>1</b><div><strong>Share the basics</strong><span>Two minutes. Your answers come with you to the call.</span></div></li>
       <li><b>2</b><div><strong>15-minute pricing call</strong><span>We confirm goals, channels and where you appear today.</span></div></li>
       <li><b>3</b><div><strong>Written proposal</strong><span>Scope, timeline and price, within two business days.</span></div></li>
      </ol>
     </div>
     <QuoteForm/>
    </Reveal>
   </IpSection>

   <FitSplit eyebrow="Before you ask for a quote" title={<>Are we the <em>right fit?</em></>}/>
   <IpFaq items={faq} eyebrow="Pricing questions"/>
  </Shell>
 );
}
