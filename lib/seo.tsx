import type {Metadata} from 'next';

export const SITE_URL=(process.env.NEXT_PUBLIC_SITE_URL||'https://www.nakama.in').replace(/\/$/,'');
export const SITE_NAME='Nakama Growth';
export const SITE_TAGLINE='Be the brand they already know.';
export const SITE_DESCRIPTION='Nakama gets brands named in AI answers. We earn the off-site sources ChatGPT, Perplexity, Gemini and Google AI Overviews rely on: Reddit, YouTube, LinkedIn, Quora, editorial and review sites.';
export const CONTACT_EMAIL='hello@nakama.in';
export const abs=(path='/')=>`${SITE_URL}${path.startsWith('/')?path:`/${path}`}`;

export const OG_IMAGE={url:'/opengraph-image.png',width:1200,height:630,alt:'Nakama Growth — Be the brand they already know.'};
export const FEEDS={'application/rss+xml':[{url:'/rss.xml',title:'Nakama Growth — Field notes'}]};

/** Per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMeta(path:string,{title,description,type='website',publishedTime}:{title:string;description:string;type?:'website'|'article';publishedTime?:string}):Metadata{
 return {
  title:{absolute:title},
  description,
  alternates:{canonical:path,types:FEEDS},
  openGraph:{type,url:path,siteName:SITE_NAME,title,description,locale:'en_IN',images:[OG_IMAGE],...(publishedTime?{publishedTime}:{})},
  twitter:{card:'summary_large_image',title,description,images:['/twitter-image.png']},
 };
}

export const organizationLd={
 '@context':'https://schema.org',
 '@type':'Organization',
 '@id':`${SITE_URL}/#organization`,
 name:SITE_NAME,
 alternateName:'Nakama',
 url:SITE_URL,
 logo:abs('/brand/apple-touch-icon-180.png'),
 email:CONTACT_EMAIL,
 description:SITE_DESCRIPTION,
 knowsAbout:['Answer engine optimization','Generative engine optimization','AI search visibility','Reddit marketing','YouTube marketing','Digital PR','Content marketing'],
};
export const websiteLd={
 '@context':'https://schema.org',
 '@type':'WebSite',
 '@id':`${SITE_URL}/#website`,
 name:SITE_NAME,
 url:SITE_URL,
 inLanguage:'en',
 publisher:{'@id':`${SITE_URL}/#organization`},
};

export function JsonLd({data}:{data:object|object[]}){
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;
}
