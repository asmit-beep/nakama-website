import type {Metadata} from 'next';
import {Shell,PageIntro,NextChapter,Reveal} from '../site';
import {NakamaStory} from '../HomeSections';

export const metadata:Metadata={
 title:'About — Nakama Growth',
 description:'The meaning behind Nakama — a companion for earned growth. On your side, in it for the long run.',
};

export default function About(){
 return (
  <Shell className="about-page shell-cinema">
   <PageIntro
    label="About Nakama"
    title="A companion"
    accent="for the journey."
    description="We learn your product, understand your buyers and stay close to the work — so earned visibility compounds over time."
   />
   <NakamaStory/>
   <section className="working-principles page-width about-principles-block">
    <Reveal>
     <span className="eyebrow">What working together feels like</span>
     <h2>Close to your team.<br/><span>Closer to the work.</span></h2>
    </Reveal>
    <div>
     {[
      ['01','Shared context','We get to know the product, the audience and the priorities. The more we understand, the better the work becomes.'],
      ['02','Reviewable work','You can see the thinking, the drafts and the next steps. Ownership and expectations are clear before anything goes live.'],
      ['03','A continuous conversation','We discuss what changed, what is missing and where the next effort belongs. The relationship gets more useful over time.'],
     ].map(([n,t,p])=>(
      <Reveal className="principle" key={n}>
       <span>{n}</span>
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
