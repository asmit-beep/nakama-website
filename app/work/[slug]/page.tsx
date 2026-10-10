import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft} from 'lucide-react';
import {Shell,Reveal} from '../../site';
import {IpAtmos,IpCta} from '../../inner/kit';
import {caseStudies,toSections} from '@/lib/content';

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return caseStudies.map(c=>({slug:c.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const c=caseStudies.find(x=>x.slug===slug);return {title:c?`${c.client}: ${c.title} — Nakama`:'Case study — Nakama',description:c?.summary};}

export default async function CaseStudyPage({params}:Props){
 const {slug}=await params;const c=caseStudies.find(x=>x.slug===slug);if(!c)notFound();
 const sections=toSections(c.body);
 return <Shell className="shell-cinema ip-page">
  <IpAtmos tone="ember"/>
  <article className="ip-wrap doc">
   <Reveal className="doc-head">
    <Link href="/work" className="doc-back"><ArrowLeft size={15}/>All work</Link>
    <div className="cs-top big">{c.logo?<span className="cs-logo"><img src={c.logo} alt=""/></span>:null}<div><b>{c.client}</b><small>{c.industry}</small></div></div>
    <h1>{c.title}</h1>
    <p className="doc-lead">{c.summary}</p>
    {c.results.length?<ul className="doc-results">{c.results.map(r=><li key={r}>{r}</li>)}</ul>:null}
   </Reveal>
   {c.cover?<Reveal className="doc-cover"><img src={c.cover} alt=""/></Reveal>:null}
   <div className="doc-body">{sections.map(s=><Reveal key={s.heading} className="doc-sec"><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</Reveal>)}</div>
  </article>
  <IpCta title={<>Want a result like <em>this?</em></>}/>
 </Shell>;
}
