import {pageMeta,abs,JsonLd,Crumbs} from '@/lib/seo';
import {articleDate} from '@/lib/feed';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {articles} from '../all';
import {Shell} from '../../site';
import {IpAtmos} from '../../inner/kit';
type Props={params:Promise<{slug:string}>};
/** Topical clusters for the Keep reading card. Pillar first, then members. A post sits in one cluster only. */
const CLUSTERS:string[][]=[
 ['best-generative-engine-optimization-agencies','best-geo-agencies-for-saas','best-geo-agencies-india','geo-agency-vs-in-house','best-ai-seo-agencies','best-enterprise-ai-seo-agencies'],
 ['best-aeo-agencies','how-to-hire-an-aeo-agency','best-aeo-consultants','best-aeo-agencies-india','chatgpt-seo-agency','minuttia-alternatives','geo-aeo-pricing'],
 ['best-ai-visibility-tools','peec-ai-alternatives','profound-alternatives','ai-visibility-report-template'],
 ['aeo-vs-seo-vs-geo','answer-engine-optimization','how-to-rank-in-chatgpt','how-to-rank-in-google-ai-overviews','topics-vs-keywords','geo-audit'],
];
/** Next note in the same cluster, preferring one the body does not already link. */
function nextInCluster(list:typeof articles,current:(typeof articles)[number]){
 const cluster=CLUSTERS.find(c=>c.includes(current.slug));
 if(!cluster)return null;
 const start=cluster.indexOf(current.slug);
 const live=[];
 for(let step=1;step<cluster.length;step++){
  const item=list.find(a=>a.slug===cluster[(start+step)%cluster.length]);
  if(item&&!item.noindex)live.push(item);
 }
 const body=current.bodyHtml??'';
 return live.find(item=>!new RegExp(`/journal/${item.slug}(["#?])`).test(body))??live[0]??null;
}
/** Next indexable note. Preview articles (`noindex`) are skipped so they do not become another page's keep-reading card. An explicit `nextSlug` still shows that one card, including on a noindex preview. Otherwise the card stays in the post's topical cluster, then falls back to publish order. */
function nextPublished(list:typeof articles,current:(typeof articles)[number]){
 if(current.nextSlug){
  const picked=list.find(item=>item.slug===current.nextSlug&&item.slug!==current.slug);
  if(picked&&!picked.noindex)return picked;
 }
 if(current.noindex)return null;
 const topical=nextInCluster(list,current);
 if(topical)return topical;
 const start=list.indexOf(current);
 for(let step=1;step<=list.length;step++){
  const candidate=list[(start+step)%list.length];
  if(!candidate.noindex)return candidate;
 }
 return null;
}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;
 const article=articles.find(a=>a.slug===slug);
 if(!article)return {title:'Note not found'};
 const meta=pageMeta(article.canonical??`/journal/${article.slug}`,{
  title:article.metaTitle??`${article.title.replace(/\.$/,'')} — Nakama Growth`,
  description:article.description,
  type:'article',
  publishedTime:article.publishedAt??articleDate(article.slug),
  modifiedTime:article.publishedAt??article.date,
  image:article.ogImage,
  author:article.authorName,
 });
 if(article.noindex)return {...meta,robots:{index:false,follow:true,googleBot:{index:false,follow:true}}};
 return meta;
}
export default async function ArticlePage({params}:Props){
 const {slug}=await params;
 const a=articles.find(item=>item.slug===slug);
 if(!a)notFound();
 const next=nextPublished(articles,a);
 const html=a.bodyHtml;
 return <Shell className="article-page shell-cinema ip-page ip-article-page">
  {a.jsonLd?<JsonLd data={a.jsonLd}/>:<><Crumbs trail={[{name:'Resources',path:'/resources'},{name:a.title.replace(/\.$/,''),path:`/journal/${a.slug}`}]}/><JsonLd data={{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.description,articleSection:a.category,datePublished:articleDate(a.slug),dateModified:articleDate(a.slug),mainEntityOfPage:abs(`/journal/${a.slug}`),url:abs(`/journal/${a.slug}`),image:abs("/opengraph-image.png"),author:{"@type":"Organization",name:"Nakama Growth",url:abs("/")},publisher:{"@id":abs("/#organization")}}}/></>}
  <IpAtmos tone="teal"/>
  {html?<article><div className="article-rich page-width"><Link className="back-link" href="/resources#articles"><ArrowLeft size={16}/>Resources</Link><div dangerouslySetInnerHTML={{__html:html}}/></div></article>:<article><header className="article-heading page-width"><Link className="back-link" href="/resources#articles"><ArrowLeft size={16}/>Resources</Link><nav aria-label="Breadcrumb" className="article-breadcrumb"><ol style={{listStyle:'none',display:'flex',flexWrap:'wrap',gap:'.5rem',padding:0,margin:'0 0 1.25rem',fontSize:'.9rem'}}><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/resources">Resources</Link></li><li aria-hidden="true">/</li><li aria-current="page">{a.title.replace(/\.$/,'')}</li></ol></nav><div className="article-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h1>{a.title}</h1><p>{a.description}</p>{a.pointerHtml?<div className="article-pointer" dangerouslySetInnerHTML={{__html:a.pointerHtml}}/>:null}<div className="article-byline"><span className="byline-monogram">n.</span><span>Nakama Growth<small>Perspectives & practice</small></span></div></header><div className="article-body-layout page-width"><aside><span className="eyebrow">In this note</span><nav>{a.sections.map((s,i)=><a href={`#part-${i+1}`} key={s.heading}>{s.heading}</a>)}</nav></aside><div className="article-body">{a.sections.map((s,i)=><section id={`part-${i+1}`} key={s.heading}><span className="article-part">0{i+1}</span><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}<p className="article-endnote">A note on our approach, from the Nakama team.</p></div></div></article>}
  {next&&<Link href={`/journal/${next.slug}`} className={`next-article page-width${next.coverImage?' has-image':''}`}>{next.coverImage&&<img className="next-article-img" src={next.coverImage.src} alt={next.coverImage.alt??''} width={next.coverImage.width} height={next.coverImage.height} loading="lazy" decoding="async"/>}<div><span className="eyebrow">Keep reading</span><h2>{next.title}</h2></div><ArrowUpRight size={27}/></Link>}
 </Shell>;
}
