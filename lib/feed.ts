import {articles} from '@/app/journal/all';
import {posts,caseStudies,openings} from '@/lib/content';

/** The original article library shipped on 28 Sep 2026; admin posts carry their own date. */
export const LIBRARY_DATE='2026-09-28';
export const SITE_UPDATED='2026-10-10';

export function articleDate(slug:string){return posts.find(p=>p.slug===slug)?.date||LIBRARY_DATE;}
export const feedArticles=articles.map(a=>({...a,date:articleDate(a.slug)}));

export const corePages:{path:string;title:string;summary:string;priority:number;freq:'weekly'|'monthly'|'yearly'}[]=[
 {path:'/',title:'Home',summary:'What Nakama does: gets brands named in AI answers through earned, off-site sources.',priority:1,freq:'weekly'},
 {path:'/services',title:'Services',summary:'AEO, GEO, Reddit and community, content and editorial, YouTube and video, digital PR, plus measurement.',priority:.9,freq:'monthly'},
 {path:'/work',title:'Work',summary:'Documented client placements in Google AI Overviews, AI Mode, Perplexity, ChatGPT, YouTube and search, with queries you can run.',priority:.9,freq:'weekly'},
 {path:'/process',title:'Process',summary:'Understand, create, place, prove: the monthly cycle and working cadence.',priority:.8,freq:'monthly'},
 {path:'/pricing',title:'Pricing',summary:'One all-inclusive Nakama plan, enterprise and custom pricing, and a quote form.',priority:.8,freq:'monthly'},
 {path:'/about',title:'About',summary:'Who Nakama is and the principles behind the work.',priority:.7,freq:'monthly'},
 {path:'/resources',title:'Resources',summary:'Field notes on AI visibility and an index of client work.',priority:.7,freq:'weekly'},
 {path:'/careers',title:'Careers',summary:'Open roles at Nakama.',priority:.5,freq:'weekly'},
 {path:'/contact',title:'Contact',summary:'Book a call, request a quote or email hello@nakama.in.',priority:.6,freq:'yearly'},
 {path:'/privacy',title:'Privacy',summary:'Privacy policy.',priority:.2,freq:'yearly'},
 {path:'/terms',title:'Terms',summary:'Terms of service.',priority:.2,freq:'yearly'},
];
export {caseStudies,openings};
