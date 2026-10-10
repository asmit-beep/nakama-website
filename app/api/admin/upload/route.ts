import {NextResponse} from 'next/server';
import {randomBytes} from 'crypto';
import {isAdmin,canPublish,writeRepoFile} from '@/lib/admin';
const TYPES:Record<string,string>={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/gif':'gif'};
export async function POST(req:Request){
 if(!(await isAdmin()))return NextResponse.json({error:'Unauthorised'},{status:401});
 if(!canPublish())return NextResponse.json({error:'Publishing is not connected yet.'},{status:503});
 const form=await req.formData();const file=form.get('file');
 if(!(file instanceof File))return NextResponse.json({error:'No file'},{status:400});
 const ext=TYPES[file.type];if(!ext)return NextResponse.json({error:'Use PNG, JPG, WebP or GIF.'},{status:400});
 if(file.size>3_500_000)return NextResponse.json({error:'Images must be under 3.5 MB.'},{status:400});
 const base=(file.name.replace(/\.[^.]+$/,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'image').slice(0,40);
 const name=`${base}-${randomBytes(3).toString('hex')}.${ext}`;
 try{await writeRepoFile(`public/uploads/${name}`,Buffer.from(await file.arrayBuffer()),`admin: upload ${name}`);return NextResponse.json({url:`/uploads/${name}`});}
 catch(e){return NextResponse.json({error:(e as Error).message},{status:502});}
}
