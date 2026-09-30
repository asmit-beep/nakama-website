import type {PointerEvent} from 'react';
export function moveLight(event:PointerEvent<HTMLElement>){
 if(event.pointerType!=='mouse'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const node=event.currentTarget,box=node.getBoundingClientRect();
 const x=(event.clientX-box.left)/box.width,y=(event.clientY-box.top)/box.height;
 node.style.setProperty('--light-x',`${x*100}%`);
 node.style.setProperty('--light-y',`${y*100}%`);
 node.style.setProperty('--drift-x',`${(x-.5)*22}px`);
 node.style.setProperty('--drift-y',`${(y-.5)*16}px`);
 node.style.setProperty('--light-on','1');
}
export function resetLight(event:PointerEvent<HTMLElement>){
 const node=event.currentTarget;
 node.style.setProperty('--light-on','0');
 node.style.setProperty('--drift-x','0px');node.style.setProperty('--drift-y','0px');
}
