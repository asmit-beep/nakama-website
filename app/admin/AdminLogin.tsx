"use client";
import {useState} from 'react';
import {ArrowRight,Eye,EyeOff,Lock} from 'lucide-react';

export function AdminLogin(){
 const [pw,setPw]=useState('');const [show,setShow]=useState(false);
 const [err,setErr]=useState('');const [busy,setBusy]=useState(false);
 async function submit(e:React.FormEvent){
  e.preventDefault();if(!pw||busy)return;setBusy(true);setErr('');
  const r=await fetch('/api/admin/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:pw})});
  if(r.ok){location.reload();return;}
  const j=await r.json().catch(()=>({}));setErr(j.error||'Something went wrong.');setBusy(false);
 }
 return <main className="adm-login">
  <form className="adm-login-card" onSubmit={submit}>
   <div className="adm-brand"><img src="/brand/nakama-icon-dark.svg" alt=""/><span>nakama</span><em>Admin</em></div>
   <h1>Welcome back</h1>
   <p>Sign in to manage articles, case studies and careers.</p>
   <label htmlFor="adm-pw">Password</label>
   <div className={`adm-pw${err?' bad':''}`}>
    <Lock size={16}/>
    <input id="adm-pw" type={show?'text':'password'} autoComplete="current-password" autoFocus value={pw} onChange={e=>{setPw(e.target.value);setErr('');}} placeholder="Enter password"/>
    <button type="button" onClick={()=>setShow(s=>!s)} aria-label={show?'Hide password':'Show password'}>{show?<EyeOff size={16}/>:<Eye size={16}/>}</button>
   </div>
   <p className="adm-err" role="alert">{err}</p>
   <button className="adm-primary wide" disabled={!pw||busy}>{busy?'Signing in…':'Sign in'}<ArrowRight size={16}/></button>
  </form>
 </main>;
}
