"use client";
import {useEffect} from 'react';

const SEL='.ip-card,.ip-fit-card,.ip-quote,.ip-cta,.ip-agency,.wb-row,.wb-client,.ps-panel,.ip-factor,.ip-faq-item';

/** Pointer-aware light: every card catches a soft glow where the cursor is. */
export function Fx(){
 useEffect(()=>{
  if(window.matchMedia('(hover: none)').matches)return;
  let last:HTMLElement|null=null;
  const move=(e:PointerEvent)=>{
   const el=(e.target as HTMLElement|null)?.closest?.(SEL) as HTMLElement|null;
   if(last&&last!==el)last.classList.remove('fx-on');
   if(!el){last=null;return;}
   const r=el.getBoundingClientRect();
   el.style.setProperty('--mx',`${e.clientX-r.left}px`);
   el.style.setProperty('--my',`${e.clientY-r.top}px`);
   el.classList.add('fx-on');last=el;
  };
  const leave=()=>{last?.classList.remove('fx-on');last=null;};
  document.addEventListener('pointermove',move,{passive:true});
  document.addEventListener('pointerleave',leave);
  return()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave);};
 },[]);
 return null;
}
