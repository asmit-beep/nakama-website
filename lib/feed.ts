import {articles} from '@/app/journal/all';
import {posts,caseStudies,openings} from '@/lib/content';
import {authors,authorPath,articlesBy,jobTitleText} from '@/lib/authors';
import {registeredDate,dayOf,newest} from '@/lib/lastmod';
import {META as HC_META, TITLE as HC_TITLE} from '@/app/industries/healthcare/copy';
import {META as EC_META, TITLE as EC_TITLE} from '@/app/industries/ecommerce/copy';
import {META as RE_META, TITLE as RE_TITLE} from '@/app/industries/real-estate/copy';
import {META as FT_META, TITLE as FT_TITLE} from '@/app/industries/fintech/copy';
import {META as LF_META, TITLE as LF_TITLE} from '@/app/industries/law-firms/copy';
import {META as AIA_META, PREVIEW as AIA_PREVIEW, SLUG as AIA_SLUG} from '@/app/services/ai-visibility-audit/copy';
import {META as DPR_META, PREVIEW as DPR_PREVIEW, SLUG as DPR_SLUG} from '@/app/services/digital-pr/copy';
import {META as WORK_META, PREVIEW as WORK_PREVIEW, SLUG as WORK_SLUG, TITLE as WORK_TITLE} from '@/app/work/copy';
import {H1 as SA_H1, META as SA_META, MODIFIED_AT as SA_MODIFIED, PREVIEW as SA_PREVIEW, PUBLISHED_AT as SA_PUBLISHED, SLUG as SA_SLUG, TITLE as SA_TITLE} from '@/app/work/staragile/copy';

/** The original article library shipped on 28 Sep 2026; admin posts carry their own date. */
export const LIBRARY_DATE='2026-09-28';

export function articleDate(slug:string){return posts.find(p=>p.slug===slug)?.date||articles.find(a=>a.slug===slug)?.date||LIBRARY_DATE;}
/** Day an article first went live: publishedAt (IST day) if set, else its content date. A NEW item moves a listing page's lastmod; edits to an existing item do not. */
export const publishedDay=(a:{slug:string;publishedAt?:string})=>dayOf(a.publishedAt)??articleDate(a.slug);
/** Preview notes (`noindex`) stay on their URL only. They are left out of the sitemap, llms files and RSS. */
export const feedArticles=articles.filter(a=>!a.noindex).map(a=>({...a,date:articleDate(a.slug)}));
/** Build guard: a live note with a placeholder or malformed date fails the build instead of shipping a bad sitemap lastmod or an Invalid Date RSS item. */
for(const a of feedArticles){if(!/^\d{4}-\d{2}-\d{2}$/.test(a.date)||(a.publishedAt&&!dayOf(a.publishedAt))||(a.modifiedAt&&!dayOf(a.modifiedAt)))throw new Error(`journal ${a.slug}: invalid date/publishedAt/modifiedAt`);}

export const corePages:{path:string;title:string;summary:string;priority:number;freq:'weekly'|'monthly'|'yearly';modified:string}[]=[
 {path:'/',title:'Home',summary:'What Nakama does: gets brands named in AI answers through earned, off-site sources.',priority:1,freq:'weekly',modified:registeredDate('/')},
 {path:'/services',title:'Services',summary:'AEO, GEO, Reddit and community, content and editorial, YouTube and video, digital PR, plus measurement.',priority:.9,freq:'monthly',modified:registeredDate('/services')},
 {path:'/services/geo',title:'GEO services',summary:'Generative engine optimization services for SaaS, tech and AI. We audit where AI names your competitors, then build product context and sources ChatGPT, Perplexity, Gemini and Google AI Overviews cite.',priority:.8,freq:'monthly',modified:registeredDate('/services/geo')},
 {path:'/services/aeo',title:'AEO services',summary:'AEO agency for SaaS, tech and AI. Nakama Growth maps the questions your buyers ask and builds answer-first pages, FAQs and site structure that answer them.',priority:.8,freq:'monthly',modified:registeredDate('/services/aeo')},
 {path:'/services/reddit',title:'Reddit marketing services',summary:'Reddit marketing agency for SaaS, tech and AI. Nakama Growth maps the subreddits your buyers use and joins their threads with helpful, rules-fit answers.',priority:.8,freq:'monthly',modified:registeredDate('/services/reddit')},
 {path:'/services/content',title:'Content & editorial',summary:'Answer-first content for AI search: listicles and comparisons for SaaS, tech & AI. AEO content writing you own and publish.',priority:.8,freq:'monthly',modified:registeredDate('/services/content')},
 {path:'/services/youtube',title:'YouTube Marketing',summary:'Nakama Growth runs YouTube end to end for SaaS, tech and AI brands: script, shoot, edit, publish. Long-form, chaptered videos built to be easy to cite.',priority:.8,freq:'monthly',modified:registeredDate('/services/youtube')},
 ...(DPR_PREVIEW?[]:[{path:DPR_SLUG,title:'Digital PR services',summary:DPR_META,priority:.8,freq:'monthly' as const,modified:registeredDate(DPR_SLUG)}]),
 ...(AIA_PREVIEW?[]:[{path:AIA_SLUG,title:'AI Visibility Audit',summary:AIA_META,priority:.8,freq:'monthly' as const,modified:registeredDate(AIA_SLUG)}]),
 {path:'/industries',title:'Industries We Serve: GEO & AI Visibility by Sector | Nakama',summary:'Healthcare, ecommerce, real estate, fintech and law firms each have a live page.',priority:.8,freq:'monthly',modified:registeredDate('/industries')},
 {path:'/industries/healthcare',title:HC_TITLE,summary:HC_META,priority:.8,freq:'monthly',modified:registeredDate('/industries/healthcare')},
 {path:'/industries/ecommerce',title:EC_TITLE,summary:EC_META,priority:.8,freq:'monthly',modified:registeredDate('/industries/ecommerce')},
 {path:'/industries/real-estate',title:RE_TITLE,summary:RE_META,priority:.8,freq:'monthly',modified:registeredDate('/industries/real-estate')},
 {path:'/industries/fintech',title:FT_TITLE,summary:FT_META,priority:.8,freq:'monthly',modified:registeredDate('/industries/fintech')},
 {path:'/industries/law-firms',title:LF_TITLE,summary:LF_META,priority:.8,freq:'monthly',modified:registeredDate('/industries/law-firms')},
 {path:'/white-label',title:'White label',summary:'White label YouTube production plus AEO, GEO, Reddit and Quora, content, digital PR and link building for agencies, delivered under the agency brand.',priority:.8,freq:'monthly',modified:registeredDate('/white-label')},
 ...(WORK_PREVIEW?[]:[{path:WORK_SLUG,title:WORK_TITLE,summary:WORK_META,priority:.9,freq:'weekly' as const,modified:newest(registeredDate(WORK_SLUG),...caseStudies.map(c=>dayOf(c.date)))}]),
 {path:'/process',title:'Process',summary:'Understand, create, place, prove: the monthly cycle and working cadence.',priority:.8,freq:'monthly',modified:registeredDate('/process')},
 {path:'/pricing',title:'Pricing',summary:'One all-inclusive Nakama plan, enterprise and custom pricing, and a quote form.',priority:.8,freq:'monthly',modified:registeredDate('/pricing')},
 {path:'/about',title:'About',summary:'Who Nakama is and the principles behind the work.',priority:.7,freq:'monthly',modified:registeredDate('/about')},
 {path:'/resources',title:'Resources',summary:'Field notes on AI visibility and an index of client work.',priority:.7,freq:'weekly',modified:newest(registeredDate('/resources'),...feedArticles.map(publishedDay))},
 {path:'/careers',title:'Careers',summary:'Open roles at Nakama.',priority:.5,freq:'weekly',modified:newest(registeredDate('/careers'),...openings.map(o=>dayOf(o.date)))},
 ...authors.map(a=>({path:authorPath(a.slug),title:a.name,summary:articlesBy(a).length?`${jobTitleText(a)} of Nakama Growth, and author of the Nakama guides to AEO and GEO agencies.`:`${jobTitleText(a)} of Nakama Growth.`,priority:.5,freq:'monthly' as const,modified:newest(registeredDate(authorPath(a.slug)),...articlesBy(a).map(publishedDay))})),
 {path:'/contact',title:'Contact',summary:'Book a call, request a quote or email contact@nakama.in.',priority:.6,freq:'yearly',modified:registeredDate('/contact')},
 {path:'/privacy',title:'Privacy',summary:'Privacy policy.',priority:.2,freq:'yearly',modified:registeredDate('/privacy')},
 {path:'/terms',title:'Terms',summary:'Terms of service.',priority:.2,freq:'yearly',modified:registeredDate('/terms')},
];
/** Shipped case-study pages that are not rows in content/case-studies.json. */
export const shippedCasePages=SA_PREVIEW?[]:[{path:SA_SLUG,title:SA_TITLE,headline:SA_H1,summary:SA_META,date:dayOf(SA_PUBLISHED)!,publishedAt:SA_PUBLISHED,modifiedAt:SA_MODIFIED}];

export {caseStudies,openings};

/** Shared parts every page renders (header, footer, global styles). */
export const SHARED_SOURCES=['app/layout.tsx','app/site.tsx','app/globals.css'];
