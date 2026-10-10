import {createHmac,scryptSync,timingSafeEqual} from 'crypto';
import {cookies} from 'next/headers';

/* Password is never stored in plain text: only its scrypt hash. Override with ADMIN_PASSWORD_SALT + ADMIN_PASSWORD_HASH. */
const SALT=process.env.ADMIN_PASSWORD_SALT||'3ecda78fa6197a931fce4776f2fb1248';
const HASH=process.env.ADMIN_PASSWORD_HASH||'c5d0504a9c1c212b132c974a437186764501e57ca9fccdbe473e0f61b6742944';
const COOKIE='nk_admin';
const TTL=60*60*12; // 12 hours
const SECRET=process.env.ADMIN_SESSION_SECRET||process.env.GITHUB_TOKEN||process.env.NK_BUILD_SECRET||'';
if(!SECRET)throw new Error('Admin session secret missing');

export function checkPassword(pw:string){
 if(typeof pw!=='string'||pw.length>200)return false;
 const got=scryptSync(pw,SALT,32,{N:32768,r:8,p:1,maxmem:64*1024*1024});
 const want=Buffer.from(HASH,'hex');
 return got.length===want.length&&timingSafeEqual(got,want);
}
const sign=(v:string)=>createHmac('sha256',SECRET).update(v).digest('hex');
export function sessionValue(){const exp=String(Math.floor(Date.now()/1000)+TTL);return `${exp}.${sign(exp)}`;}
export function validSession(v?:string){
 if(!v)return false;const [exp,sig]=v.split('.');if(!exp||!sig)return false;
 const want=sign(exp);if(sig.length!==want.length||!timingSafeEqual(Buffer.from(sig),Buffer.from(want)))return false;
 return Number(exp)>Date.now()/1000;
}
export async function isAdmin(){return validSession((await cookies()).get(COOKIE)?.value);}
export const cookieOpts={name:COOKIE,httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict' as const,path:'/',maxAge:TTL};

/* ---------- GitHub-backed storage: every save is a commit, which redeploys the site ---------- */
const REPO=process.env.GITHUB_REPO||'asmit-beep/nakama-website';
const BRANCH=process.env.GITHUB_BRANCH||'main';
export const canPublish=()=>Boolean(process.env.GITHUB_TOKEN);
async function gh(path:string,init?:RequestInit){
 return fetch(`https://api.github.com/repos/${REPO}/contents/${path}`,{...init,cache:'no-store',headers:{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28',...(init?.headers||{})}});
}
export async function readRepoFile(path:string):Promise<{text:string;sha:string}|null>{
 const r=await gh(`${path}?ref=${BRANCH}`);if(r.status===404)return null;if(!r.ok)throw new Error(`GitHub read failed (${r.status})`);
 const j=await r.json();return {text:Buffer.from(j.content,'base64').toString('utf8'),sha:j.sha};
}
export async function writeRepoFile(path:string,content:Buffer|string,message:string){
 const cur=await readRepoFile(path).catch(()=>null);
 const r=await gh(path,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,branch:BRANCH,content:Buffer.from(content).toString('base64'),...(cur?{sha:cur.sha}:{})})});
 if(!r.ok){const t=await r.text();throw new Error(`GitHub write failed (${r.status}): ${t.slice(0,160)}`);}
}

/* simple per-instance throttle for login attempts */
const tries=new Map<string,{n:number;t:number}>();
export function throttled(ip:string){
 const now=Date.now();const e=tries.get(ip);
 if(!e||now-e.t>15*60_000){tries.set(ip,{n:1,t:now});return false;}
 e.n+=1;return e.n>8;
}
