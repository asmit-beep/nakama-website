import type {MetadataRoute} from 'next';
import {abs} from '@/lib/seo';
import {corePages,feedArticles,caseStudies,openings,SITE_UPDATED} from '@/lib/feed';

export default function sitemap():MetadataRoute.Sitemap{
 const latest=[SITE_UPDATED,...feedArticles.map(a=>a.date),...caseStudies.map(c=>c.date),...openings.map(o=>o.date)].sort().at(-1)!;
 return [
  ...corePages.map(p=>({url:abs(p.path),lastModified:p.path==='/'||p.path==='/resources'?latest:SITE_UPDATED,changeFrequency:p.freq,priority:p.priority})),
  ...feedArticles.map(a=>({url:abs(`/journal/${a.slug}`),lastModified:a.date,changeFrequency:'monthly' as const,priority:.6})),
  ...caseStudies.map(c=>({url:abs(`/work/${c.slug}`),lastModified:c.date,changeFrequency:'monthly' as const,priority:.7})),
  ...openings.map(o=>({url:abs(`/careers/${o.slug}`),lastModified:o.date,changeFrequency:'weekly' as const,priority:.5})),
 ];
}
