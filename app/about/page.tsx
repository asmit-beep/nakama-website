import type {Metadata} from 'next';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpCta,LogoRow} from '../inner/kit';

export const metadata:Metadata={
 title:'About — Nakama Growth',
 description:'Nakama means companion. We help SaaS and software brands earn visibility across AI answers, search, communities, editorial and video.',
};

const principles=[
 ['01','Start where buyers talk','We begin in the actual threads, forums, reviews and sales calls where your buyers compare options. Not a boardroom guess at what they might say.'],
 ['02','Craft over volume','Every piece is held to an editor’s standard and has a reason to exist. We would rather publish ten useful things than a hundred forgettable ones.'],
 ['03','Place where attention sits','We publish where people are already researching: communities, video, editorial and the sources AI engines read. Never where there just happens to be room for an ad.'],
 ['04','Compound small gains','We measure openly, keep what works and adjust what doesn’t. Each cycle builds on the evidence and understanding of the last.'],
] as const;

const partnership=[
 ['Shared context','We learn the product, the buyer and the priorities before writing a word. The more we understand, the better the work becomes.'],
 ['Reviewable work','You see the thinking, the drafts and the plan. Ownership and expectations are clear before anything goes live.'],
 ['A continuous conversation','Every cycle we talk through what changed, what is missing and where the next effort belongs.'],
] as const;

export default function About(){
 return (
  <Shell className="about-page shell-cinema ip-page">
   <IpAtmos tone="indigo"/>
   <IpHero
    tone="indigo"
    eyebrow="About Nakama"
    title="Not a vendor."
    accent="A nakama."
    lead="Nakama means companion: someone who shares the work and has a stake in where it leads. We help SaaS and software brands get found, trusted and chosen across AI answers, search, communities, editorial and video."
    aside={<div className="ip-meaning">
     <svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="abg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff1e4"/><stop offset="1" stopColor="#c9cbff"/></linearGradient></defs><path d="M9 57V30A23 23 0 0 1 55 30V57H42V30A10 10 0 0 0 22 30V57Z" fill="url(#abg)"/><circle cx="32" cy="30" r="5.6" fill="#f07c32"/></svg>
     <span className="word">nakama</span>
     <span className="say">NA · KA · MA</span>
     <p>A companion who shares the work and has a stake in where it leads.</p>
     <small>That is the relationship we build with every brand we take on.</small>
    </div>}
   >
    <BookBtn/>
    <LinkBtn href="/pricing" ghost>See how pricing works</LinkBtn>
   </IpHero>

   <IpSection>
    <Reveal><LogoRow/></Reveal>
   </IpSection>

   <IpSection>
    <div className="ip-split">
     <IpHead eyebrow="Why we exist" title={<>Buyers decide before they <em>ever visit your site.</em></>}/>
     <Reveal className="ip-prose">
      <p>Today’s buyer researches in Reddit threads, YouTube comparisons, review sites, newsletters and, more and more, in the answers ChatGPT, Perplexity, Gemini and Google write for them. <strong>By the time they book a demo, the shortlist is usually already made.</strong></p>
      <p>Ads can’t buy a place in those conversations. Trust has to be earned, with useful content in the places buyers already look, and sources credible enough that AI engines quote them back.</p>
      <p>That is the work we do. We find the questions your buyers ask, create the answers they need, place them where they will be found, and prove the result with evidence you can check yourself.</p>
     </Reveal>
    </div>
   </IpSection>


   <IpSection>
    <IpHead eyebrow="What we believe" title={<>Four principles behind <em>every placement.</em></>} lead="They shape how we research, write, publish and measure, for every client and every platform."/>
    <div className="ip-g4">
     {principles.map(([n,t,p])=><Reveal className="ip-card ip-principle" key={n}><span className="ip-num">{n}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpSection>
    <IpHead eyebrow="Working together" title={<>Close to your team. <em>Closer to the work.</em></>}/>
    <div className="ip-g3">
     {partnership.map(([t,p],i)=><Reveal className="ip-card" key={t}><span className="ip-num">0{i+1}</span><h3 style={{marginTop:18}}>{t}</h3><p>{p}</p></Reveal>)}
    </div>
   </IpSection>

   <IpCta/>
  </Shell>
 );
}
