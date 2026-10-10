import {NextResponse} from 'next/server';
import {isAdmin,canPublish,readRepoFile,writeRepoFile} from '@/lib/admin';
import {CONTENT_FILES,type ContentKind,posts,caseStudies,openings} from '@/lib/content';

const bundled:Record<ContentKind,unknown[]>={posts,caseStudies,careers:openings};
const isKind=(k:unknown):k is ContentKind=>typeof k==='string'&&k in CONTENT_FILES;
const slugOk=(s:unknown)=>typeof s==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)&&s.length<=90;

export async function GET(req:Request){
 if(!(await isAdmin()))return NextResponse.json({error:'Unauthorised'},{status:401});
 const kind=new URL(req.url).searchParams.get('kind');
 if(!isKind(kind))return NextResponse.json({error:'Unknown content type'},{status:400});
 if(!canPublish())return NextResponse.json({items:bundled[kind],source:'bundled',canPublish:false});
 try{const f=await readRepoFile(CONTENT_FILES[kind]);return NextResponse.json({items:f?JSON.parse(f.text):[],source:'github',canPublish:true});}
 catch(e){return NextResponse.json({items:bundled[kind],source:'bundled',canPublish:true,warning:(e as Error).message});}
}

export async function PUT(req:Request){
 if(!(await isAdmin()))return NextResponse.json({error:'Unauthorised'},{status:401});
 if(!canPublish())return NextResponse.json({error:'Publishing is not connected yet. Add GITHUB_TOKEN in Vercel to enable it.'},{status:503});
 const {kind,items,note}=await req.json().catch(()=>({}));
 if(!isKind(kind)||!Array.isArray(items))return NextResponse.json({error:'Bad request'},{status:400});
 if(items.length>500)return NextResponse.json({error:'Too many items'},{status:400});
 const slugs=new Set<string>();
 for(const it of items){
  if(!it||typeof it!=='object'||!slugOk(it.slug))return NextResponse.json({error:`Invalid slug: ${it?.slug??''}`},{status:400});
  if(slugs.has(it.slug))return NextResponse.json({error:`Duplicate slug: ${it.slug}`},{status:400});
  slugs.add(it.slug);
 }
 const text=JSON.stringify(items,null,1)+'\n';
 if(text.length>2_000_000)return NextResponse.json({error:'Content too large'},{status:400});
 try{await writeRepoFile(CONTENT_FILES[kind],text,`admin: ${typeof note==='string'?note.slice(0,80):`update ${kind}`}`);return NextResponse.json({ok:true});}
 catch(e){return NextResponse.json({error:(e as Error).message},{status:502});}
}
