"use client";
import {useState,type FormEvent} from 'react';
import {ArrowUpRight,CalendarCheck} from 'lucide-react';
import {openBookCall} from '@/components/booking/BookCall';

const SERVICES=['AI visibility (AEO / GEO)','Community & Reddit','Editorial content','YouTube & video','Digital PR & links','White-label'];
const BUDGETS=['Not sure yet','Under $2,000 / month','$2,000 – $5,000 / month','$5,000 – $10,000 / month','$10,000+ / month'];
const TIMELINES=['As soon as possible','Within a month','In 1 – 3 months','Just exploring'];

export function QuoteForm(){
 const [picked,setPicked]=useState<string[]>([]);
 const [sent,setSent]=useState<null|{name:string;email:string;notes:string}>(null);
 const [error,setError]=useState('');
 const toggle=(s:string)=>setPicked(p=>p.includes(s)?p.filter(x=>x!==s):[...p,s]);

 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const name=String(f.get('name')||'').trim();
  const email=String(f.get('email')||'').trim();
  const company=String(f.get('company')||'').trim();
  if(!name||!email||!company){setError('Please add your name, work email and company.');return;}
  if(!/^\S+@\S+\.\S+$/.test(email)){setError('That email doesn’t look quite right.');return;}
  setError('');
  const notes=[
   `Custom quote request: ${company}`,
   f.get('website')?`Website: ${f.get('website')}`:'',
   picked.length?`Interested in: ${picked.join(', ')}`:'',
   `Budget: ${f.get('budget')}`,
   `Timeline: ${f.get('timeline')}`,
   f.get('goals')?`Goals: ${f.get('goals')}`:'',
  ].filter(Boolean).join('\n');
  const payload={name,email,notes};
  setSent(payload);
  openBookCall({len:'15min',...payload});
 }

 return <form className="ip-form" onSubmit={submit} noValidate>
  <div className="ip-field"><label htmlFor="q-name">Name</label><input className="ip-input" id="q-name" name="name" autoComplete="name" placeholder="Your name" required/></div>
  <div className="ip-field"><label htmlFor="q-email">Work email</label><input className="ip-input" id="q-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></div>
  <div className="ip-field"><label htmlFor="q-company">Company</label><input className="ip-input" id="q-company" name="company" autoComplete="organization" placeholder="Company or brand" required/></div>
  <div className="ip-field"><label htmlFor="q-site">Website<small>Optional</small></label><input className="ip-input" id="q-site" name="website" inputMode="url" placeholder="company.com"/></div>
  <fieldset className="ip-field full"><legend>What do you need help with?<small>Pick any</small></legend>
   <div className="ip-chips">{SERVICES.map(s=><label className="ip-chip" key={s}><input type="checkbox" checked={picked.includes(s)} onChange={()=>toggle(s)}/><span>{s}</span></label>)}</div>
  </fieldset>
  <div className="ip-field"><label htmlFor="q-budget">Monthly budget</label><select className="ip-input" id="q-budget" name="budget" defaultValue={BUDGETS[0]}>{BUDGETS.map(b=><option key={b}>{b}</option>)}</select></div>
  <div className="ip-field"><label htmlFor="q-time">Timeline</label><select className="ip-input" id="q-time" name="timeline" defaultValue={TIMELINES[1]}>{TIMELINES.map(b=><option key={b}>{b}</option>)}</select></div>
  <div className="ip-field full"><label htmlFor="q-goals">What would success look like?<small>Optional</small></label><textarea className="ip-input" id="q-goals" name="goals" placeholder="e.g. Get named in ChatGPT and Perplexity for ‘best RFP software’ within two quarters."/></div>
  {error&&<p className="ip-err full" role="alert" style={{gridColumn:'1/-1'}}>{error}</p>}
  {sent&&<div className="ip-form-ok" role="status"><CalendarCheck size={20}/><div>Thanks, {sent.name.split(' ')[0]}. Your answers are attached to the booking. Pick a time for your 15-minute pricing call. <button type="button" onClick={()=>openBookCall({len:'15min',...sent})}>Open the calendar again</button></div></div>}
  <div className="ip-form-foot">
   <p>Your answers go straight into the call notes. No mailing list, no spam.</p>
   <button className="ip-btn" type="submit"><span>Get my quote</span><i aria-hidden="true"><ArrowUpRight size={16}/></i></button>
  </div>
 </form>;
}
