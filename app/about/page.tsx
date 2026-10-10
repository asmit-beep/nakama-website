import {pageMeta} from '@/lib/seo';
import type {Metadata} from 'next';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,BookBtn,LinkBtn,IpCta,LogoRow} from '../inner/kit';

export const metadata:Metadata=pageMeta('/about',{title:'About — Nakama Growth',description:'Nakama means companion. Meet the team that gets brands named in AI answers, and the rules we hold ourselves to.'});

const principles=[
 ['01','Disclosed, always','Every community post is open about who is behind it. No fake reviews, no hidden endorsements. A mention that can’t survive being traced back isn’t worth having.'],
 ['02','Useful first','If a piece wouldn’t help a buyer who never picks you, it doesn’t ship. Usefulness is what gets content quoted.'],
 ['03','Proof you can check','Results come with the query and the link, so you see them with your own eyes rather than in a screenshot.'],
 ['04','A small roster','We take on a small number of partners at a time, so each one gets the founding team’s attention.'],
] as const;

const partnership=[
 ['Shared context','We learn the product, the buyer and the priorities before writing a word. The more we understand, the better the work becomes.'],
 ['Reviewable work','You see the thinking, the drafts and the plan. Ownership and expectations are clear before anything goes live.'],
 ['One team, start to finish','Research, writing, video and reporting sit with the same people, so nothing gets lost in a handoff.'],
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
    lead="We get brands named when buyers ask ChatGPT, Reddit or YouTube what to pick. The name is how we want to work: alongside you, with a stake in the outcome."
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
      <p>So we work off-site, in the places that shape the answer, and every placement we report comes with a link you can open.</p>
     </Reveal>
    </div>
   </IpSection>


   <IpSection>
    <IpHead eyebrow="What we believe" title={<>The rules we <em>hold ourselves to.</em></>} lead="Whoever the client is, whatever the platform."/>
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
