import {NextResponse} from 'next/server';
import {checkPassword,cookieOpts,sessionValue,throttled} from '@/lib/admin';
export async function POST(req:Request){
 const ip=req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'local';
 if(throttled(ip))return NextResponse.json({error:'Too many attempts. Try again in 15 minutes.'},{status:429});
 const {password}=await req.json().catch(()=>({password:''}));
 if(!checkPassword(password)){await new Promise(r=>setTimeout(r,600));return NextResponse.json({error:'That password isn’t right.'},{status:401});}
 const res=NextResponse.json({ok:true});res.cookies.set({...cookieOpts,value:sessionValue()});return res;
}
