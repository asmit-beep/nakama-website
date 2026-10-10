import type {Metadata} from 'next';
import Link from 'next/link';
import {Shell} from './site';

export const metadata:Metadata={title:{absolute:'Page not found — Nakama Growth'},description:'This page does not exist or has moved.',robots:{index:false,follow:true},alternates:{canonical:null}};

export default function NotFound(){
 return <Shell className="legal-page shell-cinema ip-page"><section className="ip-legal"><div className="ip-wrap" style={{minHeight:'50vh',display:'grid',alignContent:'center',gap:'1rem'}}>
  <h1>Page not found.</h1>
  <p>This page does not exist or has moved. Try the <Link href="/">homepage</Link>, our <Link href="/services">services</Link> or <Link href="/resources">field notes</Link>.</p>
 </div></section></Shell>;
}
