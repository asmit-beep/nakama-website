import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight,BookOpen,FolderKanban} from 'lucide-react';
import {Shell} from '../site';
import {IpAtmos,IpHero,IpHead,IpSection,IpCta} from '../inner/kit';
import {proofClients} from '../proof-data';
import {articles} from '../journal/all';
import {CaseCards} from '../work/CaseCards';
import {caseStudies} from '@/lib/content';

export const metadata:Metadata={
 title:'Resources — Nakama Growth',
 description:'Case studies and field notes from Nakama: where client brands show up in AI answers, search and video, and how the work gets done.',
};

const LOGO:Record<string,string>={'Synup':'/clients/color/synup.svg','Inventive AI':'/clients/color/inventive.png','HubEngage':'/clients/color/hubengage.png','StarAgile':'/clients/color/staragile.png','BacklinkOS':'/clients/color/backlinkos.png','SERPsGrowth':'/clients/color/serps.png','Inbound Blogging':'/clients/color/inbound.png'};
const SECTOR:Record<string,string>={'Synup':'Local listings software','Inventive AI':'AI RFP software','HubEngage':'Internal communications','StarAgile':'Professional certification','BacklinkOS':'Backlink management','SERPsGrowth':'Digital PR & links','Inbound Blogging':'SaaS SEO'};

const ART=[
 {bg:'radial-gradient(120% 120% at 0% 0%,#3a2a6b,transparent 60%),radial-gradient(120% 120% at 100% 100%,#7a3a1c,transparent 55%),#14131b',dots:['#f07c32','#9aa6ff','#7fd1c3']},
 {bg:'radial-gradient(120% 120% at 100% 0%,#1d5a52,transparent 60%),radial-gradient(120% 120% at 0% 100%,#4a2a5f,transparent 55%),#14131b',dots:['#7fd1c3','#e8a3c4','#ffb27a']},
 {bg:'radial-gradient(120% 120% at 50% 0%,#6b3a1c,transparent 60%),radial-gradient(120% 120% at 50% 100%,#23315f,transparent 55%),#14131b',dots:['#ffb27a','#7fd1c3','#9aa6ff']},
];

function Art({i}:{i:number}){
 const a=ART[i%ART.length];
 return <div className="ip-art" style={{background:a.bg}} aria-hidden="true">
  <div className="m">
   <svg width="190" height="120" viewBox="0 0 190 120" fill="none">
    {i%3===0&&<><circle cx="60" cy="60" r="40" stroke="rgba(255,255,255,.25)"/><circle cx="130" cy="60" r="40" stroke="rgba(255,255,255,.25)"/><text x="95" y="72" textAnchor="middle" fontSize="40" fontWeight="700" fill="rgba(255,255,255,.85)" fontFamily="Manrope,Arial">?</text></>}
    {i%3===1&&<>{[0,1,2,3].map(k=><rect key={k} x={10+k*45} y={30+(k%2)*14} width="36" height="46" rx="8" stroke="rgba(255,255,255,.3)" fill={k===1?'rgba(255,255,255,.12)':'none'}/>)}</>}
    {i%3===2&&<>{[18,36,28,52,44,70,64].map((h,k)=><rect key={k} x={14+k*24} y={100-h} width="14" height={h} rx="4" fill={k===6?'#ffb27a':'rgba(255,255,255,.22)'}/>)}</>}
   </svg>
  </div>
  {a.dots.map((c,k)=><i key={c} style={{width:90,height:90,background:c,opacity:.35,left:`${15+k*30}%`,top:`${k%2?55:10}%`}}/>)}
 </div>;
}

export default function Resources(){
 const [feature,...rest]=proofClients;
 const [lead,...more]=articles;
 return (
  <Shell className="resources-page shell-cinema ip-page">
   <IpAtmos tone="teal"/>
   <IpHero
    tone="teal"
    eyebrow="Resources"
    title="Proof from the work."
    accent="Notes on how it’s done."
    lead="Real case studies of where our client brands show up in AI answers, search and video, plus field notes on the method behind them. Every query is one you can run yourself."
   >
    <nav className="ip-tabs" aria-label="Resource types">
     <a href="#case-studies"><FolderKanban size={16}/>Case studies<small>{proofClients.length+caseStudies.length}</small></a>
     <a href="#articles"><BookOpen size={16}/>Articles<small>{articles.length}</small></a>
    </nav>
   </IpHero>

   <IpSection id="case-studies">
    <IpHead eyebrow="Case studies" title={<>Brands that now show up <em>where buyers look.</em></>} lead="A curated sample of client work. Open any case to see the exact queries, platforms and placements."/>
    {caseStudies.length?<div className="cs-wrap"><CaseCards items={[...caseStudies].sort((a,b)=>b.date.localeCompare(a.date))}/></div>:null}
    <div className="ip-g3">
      <Link href={`/work?client=${encodeURIComponent(feature.name)}`} className="ip-card ip-case feature">
       <div className="ip-case-main">
        <div className="ip-case-top"><span className="ip-case-logo"><img src={LOGO[feature.name]} alt=""/></span><div><b>{feature.name}</b><small>{SECTOR[feature.name]}</small></div></div>
        <p>{feature.description}</p>
        <div className="ip-case-go">Read the case study<ArrowUpRight size={17}/></div>
       </div>
       <div className="ip-case-side">
        {feature.entries.slice(0,3).map(e=><div key={e.query}><small>{e.platform}</small><strong>{e.query}</strong></div>)}
       </div>
      </Link>
     {rest.map(c=>
      <Link key={c.name} href={`/work?client=${encodeURIComponent(c.name)}`} className="ip-card ip-case">
       <div className="ip-case-top"><span className="ip-case-logo"><img src={LOGO[c.name]} alt=""/></span><div><b>{c.name}</b><small>{SECTOR[c.name]}</small></div></div>
       <p>{c.description}</p>
       <div className="ip-case-q">{[...new Set(c.entries.map(e=>e.query))].slice(0,2).map(q=><span key={q}>{q}</span>)}</div>
       <div className="ip-case-go">Read the case study<ArrowUpRight size={17}/></div>
      </Link>)}
    </div>
   </IpSection>

   <IpSection id="articles">
    <IpHead eyebrow="Articles" title={<>Field notes on <em>earned visibility.</em></>} lead="Short, practical reads on buyer questions, useful content, distribution and measuring what matters."/>
    <div className="ip-g2">
     <Link href={`/journal/${lead.slug}`} className="ip-card ip-article big"><Art i={0}/><div className="ip-article-body"><div className="ip-article-meta"><span>{lead.category}</span><span>{lead.readTime}</span></div><h3>{lead.title}</h3><p>{lead.description}</p><div className="ip-case-go">Read the article<ArrowUpRight size={17}/></div></div></Link>
     {more.map((a,i)=><Link key={a.slug} href={`/journal/${a.slug}`} className="ip-card ip-article"><Art i={i+1}/><div className="ip-article-body"><div className="ip-article-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h3>{a.title}</h3><p>{a.description}</p><div className="ip-case-go">Read the article<ArrowUpRight size={17}/></div></div></Link>)}
    </div>
   </IpSection>

   <IpCta title={<>Want to be the <em>next case study?</em></>}/>
  </Shell>
 );
}
