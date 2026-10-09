import type {Metadata} from 'next';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpSection,LinkBtn,IpCta} from '../inner/kit';
import {WorkBoard} from './WorkBoard';
export const metadata:Metadata={title:'Work — Nakama Growth',description:'Documented client work across AI answers, search, editorial and video. Pick a brand and run the queries yourself.'};
export default function Work(){
 return <Shell className="work-page shell-cinema ip-page">
  <IpAtmos tone="ember"/>
  <IpHero tone="ember" eyebrow="Work" title="Built together." accent="Found in the right places." lead="A curated record of where our client brands appear today: AI answers, search results, editorial and video. Pick a brand, copy any query and run it yourself.">
   <LinkBtn href="/resources#case-studies" ghost>Browse all case studies</LinkBtn>
  </IpHero>
  <IpSection className="ip-work-proof"><Reveal><WorkBoard/></Reveal></IpSection>
  <IpCta title={<>Want results like <em>these?</em></>}/>
 </Shell>;
}
