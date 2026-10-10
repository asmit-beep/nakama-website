import {execSync} from 'node:child_process';

/** Build-time "last changed" date for a page, read from git history of its source files.
 *  Runs once per deploy, so the sitemap refreshes itself every time the site ships. */
const BUILD_DATE=new Date().toISOString().slice(0,10);
const cache=new Map<string,string>();
export function lastChanged(files:string[]):string{
 const key=files.join('|');
 if(cache.has(key))return cache.get(key)!;
 let date=BUILD_DATE;
 try{
  const out=execSync(`git log -1 --format=%cs -- ${files.map(f=>`"${f}"`).join(' ')}`,{stdio:['ignore','pipe','ignore'],timeout:5000}).toString().trim();
  if(/^\d{4}-\d{2}-\d{2}$/.test(out))date=out;
 }catch{}
 cache.set(key,date);
 return date;
}
