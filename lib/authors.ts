import {articles} from '@/app/journal/all';
import {abs} from '@/lib/seo';

/** Author profiles. Add a profile here and its page appears at /authors/<slug>, in the sitemap and in llms.txt.
 *  An article is listed on its author's page when its `authorName` matches `name`, so new guides show up on their own. */
export type Author={
 slug:string,name:string,jobTitle:string,
 /** Bio paragraphs shown on the page. The first is also the schema description. */
 bio:string[],
 metaTitle:string,metaDescription:string,
 image:{src:string,src800:string,width:number,height:number,alt:string},
 /** Verified public profiles. Optional; rendered as links on the page and emitted as Person sameAs. */
 links?:{label:'LinkedIn'|'Instagram',url:string}[],
};

export const authors:Author[]=[
 {
  slug:'yash-kumar',
  name:'Yash Kumar',
  jobTitle:'Co-founder and CEO',
  metaTitle:'Yash Kumar, Co-founder and CEO of Nakama Growth',
  metaDescription:'Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India. Read his guides to AEO and GEO agencies.',
  bio:[
   'Yash Kumar is Co-founder and CEO of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose. He leads Nakama\u2019s work on earning mentions on the sources those tools read.',
  ],
  image:{src:'/authors/yash-kumar-nakama-ceo.webp',src800:'/authors/yash-kumar-nakama-ceo-800.webp',width:800,height:800,alt:'Yash Kumar, Co-founder and CEO of Nakama Growth'},
 },
 {
  slug:'snehil-srivastava',
  name:'Snehil Srivastava',
  jobTitle:'Co-founder',
  metaTitle:'Snehil Srivastava, Co-founder of Nakama Growth',
  metaDescription:'Snehil Srivastava is Co-founder of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named in AI answers.',
  bio:[
   'Snehil Srivastava is Co-founder of Nakama Growth, an AEO and GEO agency in India that helps B2B and SaaS brands get named when buyers ask ChatGPT, Perplexity, Gemini and Google AI Overviews what to choose.',
  ],
  image:{src:'/authors/snehil-srivastava-nakama-cofounder.webp',src800:'/authors/snehil-srivastava-nakama-cofounder-800.webp',width:800,height:800,alt:'Snehil Srivastava, Co-founder of Nakama Growth'},
  links:[
   {label:'LinkedIn',url:'https://www.linkedin.com/in/snehil-srivastava-356739175/'},
   {label:'Instagram',url:'https://www.instagram.com/maazakthakya/'},
  ],
 },
];

export const authorPath=(slug:string)=>`/authors/${slug}`;
export const authorUrl=(slug:string)=>abs(authorPath(slug));
export const authorId=(slug:string)=>`${authorUrl(slug)}#person`;
export const getAuthor=(slug:string)=>authors.find(a=>a.slug===slug);
export const articlesBy=(a:Author)=>articles.filter(x=>x.authorName===a.name);
