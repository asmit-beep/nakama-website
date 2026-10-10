import type {Metadata} from 'next';
import {Shell,Reveal} from '../site';
import {IpAtmos,IpHero,IpSection,IpHead,LinkBtn,IpCta} from '../inner/kit';
import {WorkBoard} from './WorkBoard';
import {CaseCards} from './CaseCards';
import {caseStudies} from '@/lib/content';
export const metadata:Metadata={title:'Work — Nakama Growth',description:'Documented client work across AI answers, search, editorial and video. Pick a brand and run the queries yourself.'};
export default function Work(){
 return <Shell className="work-page shell-cinema ip-page">
  <IpAtmos tone="ember"/>
  <IpHero tone="ember" eyebrow="Work" title="Built together." accent="Found in the right places." lead="A curated record of where our client brands appear today: AI answers, search results, editorial and video. Pick a brand, copy any query and run it yourself.">
   <LinkBtn href="/resources#case-studies" ghost>Browse all case studies</LinkBtn>
  </IpHero>
  {caseStudies.length?<IpSection id="case-studies"><IpHead eyebrow="Case studies" title={<>Stories in <em>depth</em></>}/><Reveal><CaseCards items={[...caseStudies].sort((a,b)=>b.date.localeCompare(a.date))}/></Reveal></IpSection>:null}
  <IpSection className="ip-work-proof"><Reveal><WorkBoard/></Reveal></IpSection>
  <IpCta title={<>Want results like <em>these?</em></>}/>
 </Shell>;
}
