import type {MetadataRoute} from 'next';
import {abs} from '@/lib/seo';

/** Open to search and AI crawlers alike: being read by answer engines is the point. */
export default function robots():MetadataRoute.Robots{
 const ai=['GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','Claude-User','PerplexityBot','Perplexity-User','Google-Extended','Applebot-Extended','Bingbot','CCBot','Meta-ExternalAgent','Amazonbot','DuckAssistBot','YouBot','MistralAI-User'];
 return {
  rules:[{userAgent:'*',allow:'/',disallow:['/admin','/api/']},{userAgent:ai,allow:'/',disallow:['/admin','/api/']}],
  sitemap:abs('/sitemap.xml'),
 };
}
