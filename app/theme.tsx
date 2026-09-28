"use client";
import {useEffect,useRef,type ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import './dynamic-background.css';

/** Scroll blends fixed gradient layers; no particle canvas or idle animation. */
function SiteAmbient(){
  const ref=useRef<HTMLDivElement>(null);
  const pathname=usePathname();

  useEffect(()=>{
    const root=ref.current;
    if(!root)return;
    const layers=Array.from(root.querySelectorAll<HTMLElement>('[data-ambient-layer]'));
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0;
    let stops:{top:number;colour:number}[]=[];
    let mounted=true;

    const paint=()=>{
      frame=0;
      const opacity=layers.map(()=>0);
      if(reduced.matches||stops.length<2){
        opacity[0]=1;
      }else{
        const position=scrollY+innerHeight*.4;
        let index=0;
        while(index<stops.length-1&&stops[index+1].top<=position)index++;
        const start=stops[index];
        const end=stops[Math.min(index+1,stops.length-1)];
        const progress=start===end?0:Math.max(0,Math.min(1,(position-start.top)/Math.max(1,end.top-start.top)));
        const blend=progress*progress*(3-2*progress);
        opacity[start.colour]+=1-blend;
        opacity[end.colour]+=blend;
      }
      layers.forEach((layer,index)=>{layer.style.opacity=String(opacity[index])});
    };
    const schedule=()=>{
      if(!frame&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(paint);
    };
    const measure=()=>{
      if(!mounted)return;
      cancelAnimationFrame(frame);
      frame=0;
      const sections=Array.from(document.querySelectorAll<HTMLElement>('main section'))
        .filter(section=>!section.parentElement?.closest('section'));
      stops=sections.map((section,index)=>({
        top:index===0?0:section.getBoundingClientRect().top+scrollY,
        colour:index%layers.length,
      }));
      const footer=document.querySelector('footer.site-footer');
      if(footer)stops.push({top:footer.getBoundingClientRect().top+scrollY,colour:0});
      paint();
    };
    const onMotionChange=()=>{cancelAnimationFrame(frame);frame=0;paint()};
    const onVisibility=()=>{
      if(document.hidden){cancelAnimationFrame(frame);frame=0}else measure();
    };
    measure();
    const resize=new ResizeObserver(measure);
    resize.observe(document.documentElement);
    document.fonts.ready.then(()=>{if(mounted)measure()});
    addEventListener('scroll',schedule,{passive:true});
    addEventListener('resize',measure);
    reduced.addEventListener('change',onMotionChange);
    document.addEventListener('visibilitychange',onVisibility);
    return()=>{
      mounted=false;
      cancelAnimationFrame(frame);
      resize.disconnect();
      removeEventListener('scroll',schedule);
      removeEventListener('resize',measure);
      reduced.removeEventListener('change',onMotionChange);
      document.removeEventListener('visibilitychange',onVisibility);
    };
  },[pathname]);

  return <div ref={ref} className="ambient-background colour-atmosphere" aria-hidden="true">
    <div className="colour-atmosphere-layer atmosphere-ember" data-ambient-layer/>
    <div className="colour-atmosphere-layer atmosphere-jade" data-ambient-layer/>
    <div className="colour-atmosphere-layer atmosphere-indigo" data-ambient-layer/>
    <div className="colour-atmosphere-layer atmosphere-copper" data-ambient-layer/>
  </div>;
}

export function SiteTheme({children}:{children:ReactNode}){
  return <><SiteAmbient/><div className="site-surface">{children}</div></>;
}
