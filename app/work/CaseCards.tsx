import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import type {CaseStudy} from '@/lib/content';

export function CaseCards({items}:{items:CaseStudy[]}){
 if(!items.length)return null;
 return <div className="cs-grid">
  {items.map(c=><Link key={c.slug} href={`/work/${c.slug}`} className="ip-card cs-card">
   {c.cover?<span className="cs-cover"><img src={c.cover} alt=""/></span>:null}
   <div className="cs-top">{c.logo?<span className="cs-logo"><img src={c.logo} alt=""/></span>:null}<div><b>{c.client}</b><small>{c.industry}</small></div></div>
   <h3>{c.title}</h3>
   <p>{c.summary}</p>
   {c.results.length?<ul className="cs-results">{c.results.slice(0,3).map(r=><li key={r}>{r}</li>)}</ul>:null}
   <span className="cs-go">Read the case study<ArrowUpRight size={16}/></span>
  </Link>)}
 </div>;
}
