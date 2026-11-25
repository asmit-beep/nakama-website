import type {Metadata} from 'next';
import {pageMeta, Crumbs, JsonLd, abs, SITE_URL} from '@/lib/seo';
import {Shell} from '../../site';
import {FAQ, H1, HERO_IMAGES, META, PREVIEW, SLUG, TITLE} from './copy';
import {CaseStudy} from './CaseStudy';
import {Behaviors} from './Behaviors';
import './staragile.css';

/** Preview only. PREVIEW true keeps robots noindex,nofollow and this URL off the sitemap, llms files, RSS and nav. */
const robots: Metadata['robots'] = PREVIEW
  ? {index: false, follow: false, googleBot: {index: false, follow: false}}
  : {index: true, follow: true, googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1}};

export const metadata: Metadata = {
  ...pageMeta(SLUG, {title: TITLE, description: META, type: 'article'}),
  robots,
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': abs(`${SLUG}#article`),
  headline: H1,
  description: META,
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
    sameAs: 'https://staragile.com',
  },
  mentions: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Google AI Mode'].map(name => ({'@type': 'Thing', name})),
  image: HERO_IMAGES.map(img => ({
    '@type': 'ImageObject',
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
  return (
    <Shell className="sa-page">
      <Crumbs trail={[{name: 'Work', path: '/work'}, {name: 'StarAgile', path: SLUG}]}/>
      <JsonLd data={[articleLd, faqLd]}/>
      <CaseStudy/>
      <Behaviors/>
    </Shell>
  );
}
