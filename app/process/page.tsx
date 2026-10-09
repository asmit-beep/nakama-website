import type {Metadata} from 'next';
import {ProcessStepper} from './ProcessStepper';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,LinkBtn,IpCta} from '../inner/kit';

export const metadata:Metadata={title:'Process — Nakama Growth',description:'How Nakama works: understand, create, place and prove. A sequence that compounds, not a one-off campaign.'};

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
    <Reveal><ProcessStepper/></Reveal>
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
