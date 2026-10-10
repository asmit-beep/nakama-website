import {NextResponse} from 'next/server';
import {cookieOpts} from '@/lib/admin';
export async function POST(){const res=NextResponse.json({ok:true});res.cookies.set({...cookieOpts,value:'',maxAge:0});return res;}
