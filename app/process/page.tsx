import type {Metadata} from 'next';
import {Shell,Reveal,NextChapter} from '../site';
import {Sequence} from '../ContentSections';

export const metadata:Metadata={title:'Our Process — Nakama Growth',description:'Follow the Nakama process from buyer questions and original content to thoughtful distribution and evidence.'};

const overview=[
 {n:'01',title:'Understand',tag:'Research'},
 {n:'02',title:'Create',tag:'Content'},
 {n:'03',title:'Distribute',tag:'Channels'},
 {n:'04',title:'Prove',tag:'Evidence'},
] as const;

const principles=[
 ['Shared context','We get to know the product, the audience and the priorities. The more we understand, the better the work becomes.'],
 ['Reviewable work','You can see the thinking, the drafts and the next steps. Ownership and expectations are clear before anything goes live.'],
 ['A continuous conversation','We discuss what changed, what is missing and where the next effort belongs. The relationship gets more useful over time.'],
] as const;

export default function Process(){
 return (
  <Shell className="process-page process-atelier shell-cinema">
   <section className="atelier-hero page-width">
    <Reveal>
     <span className="eyebrow"><span className="tiny-cross"/>Our process</span>
     <h1>How the work<br/><em>actually moves.</em></h1>
     <p>Four stages. One shared workspace. We learn, create, distribute and measure — with your team close to every step.</p>
    </Reveal>
    <ol className="atelier-stages" aria-label="Process overview">
     {overview.map(s=>(
      <li key={s.n}>
       <span>{s.n}</span>
       <strong>{s.title}</strong>
       <small>{s.tag}</small>
      </li>
     ))}
    </ol>
   </section>

   <div className="atelier-thread">
    <Sequence/>
   </div>

   <section className="atelier-principles page-width">
    <Reveal className="atelier-principles-head">
     <span className="eyebrow">Partnership</span>
     <h2>Close to your team.<br/><span>Closer to the work.</span></h2>
    </Reveal>
    <div className="atelier-principle-grid">
     {principles.map(([t,p],i)=>(
      <Reveal className="atelier-principle" key={t}>
       <span className="atelier-principle-n" aria-hidden="true">{String(i+1).padStart(2,'0')}</span>
       <h3>{t}</h3>
       <p>{p}</p>
      </Reveal>
     ))}
    </div>
   </section>

   <NextChapter title="Let’s find a shared direction."/>
  </Shell>
 );
}
