import {articles as built,type Article} from './articles';
import {posts,postToArticle} from '@/lib/content';
/** Articles written in /admin come first, newest first, then the original library. */
export const articles:Article[]=[...[...posts].sort((a,b)=>b.date.localeCompare(a.date)).map(postToArticle),...built.filter(b=>!posts.some(p=>p.slug===b.slug))];
