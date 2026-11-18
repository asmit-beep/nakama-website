#!/usr/bin/env node
// Warns when a core route's own content files changed in git after its content/lastmod.json date.
// Needs FULL git history: refuses to run on a shallow clone (Vercel builds are depth 10), so it never
// runs in the Vercel build. Run locally or in CI with fetch-depth: 0. Usage: npm run lastmod:check [-- --strict]
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

const git=(...a)=>execFileSync('git',a,{encoding:'utf8'}).trim();
if(git('rev-parse','--is-shallow-repository')==='true'){
 console.error('lastmod:check needs full history. Run `git fetch --unshallow` first.');
 process.exit(2);
}
const reg=JSON.parse(readFileSync('content/lastmod.json','utf8'));
const EXCLUDE=[':(exclude,glob)**/*.css',':(exclude,glob)**/*.md'];
let stale=0;
for(const [path,e] of Object.entries(reg)){
 if(path.startsWith('_'))continue;
 const last=git('log','-1','--format=%cs %h %s','--',...e.src,...EXCLUDE);
 const day=last.slice(0,10);
 const seen=[e.modified,e.reviewedThrough].filter(Boolean).sort().at(-1);
 if(day&&day>seen){
  stale++;
  console.log(`REVIEW ${path}: registry ${e.modified}, own files last changed ${last}`);
 }
}
console.log(stale?`${stale} route(s) to review. Bump "modified" if the change was significant content; otherwise set "reviewedThrough" to that day.`:'lastmod registry is up to date with git.');
process.exit(stale&&process.argv.includes('--strict')?1:0);
