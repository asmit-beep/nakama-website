import type {Metadata} from 'next';
import {preload} from 'react-dom';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {FAQ, H1, HERO_IMAGES, META, MODIFIED_AT, PREVIEW, PUBLISHED_AT, SLUG, TITLE} from './copy';
import {CaseStudy} from './CaseStudy';
import {Behaviors} from './Behaviors';
import './staragile.css';

/** PREVIEW false keeps robots index,follow and lists this URL. */
const robots: Metadata['robots'] = PREVIEW
  ? {index: false, follow: false, googleBot: {index: false, follow: false}}
  : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
  ...pageMeta(SLUG, {
    title: TITLE,
    description: META,
    type: 'article',
    publishedTime: PUBLISHED_AT,
    modifiedTime: MODIFIED_AT,
    image: {
      url: '/work/staragile/asset01.webp',
      width: 1200,
      height: 678,
      alt: 'Recreated from Google AI Overview, captured 21 to 31 Aug 2026',
      type: 'image/webp',
    },
  }),
  robots,
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': abs(`${SLUG}#article`),
  headline: H1,
  description: META,
  datePublished: PUBLISHED_AT,
  dateModified: MODIFIED_AT,
  articleSection: 'Case study',
  url: abs(SLUG),
  mainEntityOfPage: abs(SLUG),
  author: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth'},
  publisher: {'@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Nakama Growth', url: SITE_URL},
  about: {
    '@type': 'Organization',
    name: 'StarAgile',
    foundingDate: '2016',
    url: 'https://staragile.com',
  },
  mentions: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Google AI Mode'].map(name => ({'@type': 'Thing', name})),
  image: HERO_IMAGES.map(img => ({
    '@type': 'ImageObject',
    url: abs(img.src),
    contentUrl: abs(img.src),
    width: img.w,
    height: img.h,
    caption: img.caption,
    encodingFormat: 'image/webp',
  })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {'@type': 'Answer', text: item.a},
  })),
};

export default function StarAgileCaseStudy() {
  preload('/fonts/manrope-700.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
  preload('/fonts/manrope-600.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
  preload('/fonts/manrope-500.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
  preload('/fonts/manrope-400.woff2', {as: 'font', type: 'font/woff2', crossOrigin: 'anonymous'});
  return (
    <Shell className="sa-page">
      <Crumbs trail={[{name: 'Case studies', path: '/work'}, {name: 'StarAgile', path: SLUG}]}/>
      <JsonLd data={[articleLd, faqLd]}/>
      <CaseStudy/>
      <Behaviors/>
    </Shell>
  );
}
