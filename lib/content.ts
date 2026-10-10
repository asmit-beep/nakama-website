import postsJson from '@/content/posts.json';
import caseJson from '@/content/case-studies.json';
import careersJson from '@/content/careers.json';
import type {Article} from '@/app/journal/articles';

/** Content edited from /admin. Each file is committed to the repo by the admin API, which redeploys the site. */
export type Post={slug:string;title:string;category:string;description:string;body:string;cover?:string;date:string};
export type CaseStudy={slug:string;client:string;industry:string;title:string;summary:string;results:string[];body:string;logo?:string;cover?:string;date:string};
export type Opening={slug:string;title:string;team:string;location:string;type:string;summary:string;body:string;apply?:string;date:string};

export const CONTENT_FILES={posts:'content/posts.json',caseStudies:'content/case-studies.json',careers:'content/careers.json'} as const;
export type ContentKind=keyof typeof CONTENT_FILES;

export const posts=postsJson as Post[];
export const caseStudies=caseJson as CaseStudy[];
export const openings=careersJson as Opening[];

/** "## Heading" starts a section; blank lines separate paragraphs. */
export function toSections(body:string,fallback='Overview'){
 const out:{heading:string;paragraphs:string[]}[]=[];
 let cur={heading:fallback,paragraphs:[] as string[]};
 for(const block of body.replace(/\r/g,'').split(/\n\s*\n/)){
  const t=block.trim();if(!t)continue;
  const m=t.match(/^##\s+(.+?)(?:\n([\s\S]*))?$/);
  if(m){if(cur.paragraphs.length||out.length)out.push(cur);cur={heading:m[1].trim(),paragraphs:m[2]?[m[2].trim()]:[]};}
  else cur.paragraphs.push(t.replace(/\n/g,' '));
 }
 if(cur.paragraphs.length||!out.length)out.push(cur);
 return out.filter(s=>s.paragraphs.length);
}
export const readTime=(body:string)=>`${Math.max(2,Math.round(body.split(/\s+/).length/220))} min read`;

export function postToArticle(p:Post):Article{
 return {slug:p.slug,category:p.category||'Insight',title:p.title,description:p.description,readTime:readTime(p.body),motif:'question',sections:toSections(p.body)};
}
