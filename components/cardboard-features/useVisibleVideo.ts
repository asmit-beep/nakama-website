"use client";
import {useEffect,type RefObject} from 'react';

/** Play only visible demo media and stop work in hidden browser tabs. */
export function useVisibleVideo(ref:RefObject<HTMLVideoElement|null>,source:string,reduced:boolean){
  useEffect(()=>{
    const video=ref.current;
    if(!video)return;
    let inView=false;
    let resume=true;
    let wasVisible=false;
    const update=()=>{
      const visible=inView&&!document.hidden;
      if(!visible||reduced){
        if(wasVisible)resume=!video.paused;
        video.pause();
      }else if(!wasVisible&&resume){
        void video.play().catch(()=>{});
      }
      wasVisible=visible;
    };
    const observer=new IntersectionObserver(([entry])=>{
      inView=entry.isIntersecting&&entry.intersectionRatio>=.2;
      update();
    },{threshold:[0,.2]});
    observer.observe(video);
    document.addEventListener('visibilitychange',update);
    return()=>{
      observer.disconnect();
      document.removeEventListener('visibilitychange',update);
      video.pause();
    };
  },[ref,source,reduced]);
}
