"use client";
import {useEffect,useRef,useState,type CSSProperties,type ReactNode,type RefObject} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {ArrowUpRight,ArrowRight,Menu,Plus} from 'lucide-react';
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription,SheetClose} from '@/components/ui/sheet';
export const BOOKING='https://app.cal.com/snehil-srivastava-4jm7sq';
export const navigationLinks=[['Services','/services'],['Process','/process'],['Work','/work'],['Journal','/journal'],['About','/about']] as const;
export function Logo({className=''}:{className?:string}){return <svg className={className} viewBox="0 0 100 100" aria-hidden="true"><path d="M10,90 Q46,46 86,10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="27" cy="70" r="5.5" fill="currentColor"/><circle cx="48" cy="50" r="8.5" fill="currentColor"/><circle cx="72" cy="29" r="13" fill="#f07c32"/></svg>}
export function Booking({children='Book a conversation',className=''}:{children?:ReactNode,className?:string}){return <a className={`button ${className}`} href={BOOKING} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17}/></a>}
export function Header(){
  const path=usePathname();
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const update=()=>setScrolled(window.scrollY>18);
    update();
    addEventListener('scroll',update,{passive:true});
    return()=>removeEventListener('scroll',update);
  },[]);
  return <header className={`site-nav${scrolled?' is-scrolled':''}`}>
    <Link className="brand" href="/" aria-label="Nakama Growth home"><Logo/><span>Nakama<small>Growth</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigationLinks.map(([label,href])=><Link key={href} href={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined}>{label}</Link>)}</nav>
    <div className="nav-actions">
      <Link className="nav-contact" href="/contact">Contact us<ArrowUpRight size={16}/></Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button className="menu-button" aria-label="Open navigation"><Menu size={21}/></button></SheetTrigger>
        <SheetContent className="mobile-menu">
          <SheetTitle>Nakama Growth</SheetTitle>
          <SheetDescription>Choose where to explore.</SheetDescription>
          <nav>{[['Home','/'],...navigationLinks,['Contact us','/contact']].map(([label,href])=><SheetClose asChild key={href}><Link href={href} aria-current={path===href?'page':undefined}>{label}<ArrowUpRight size={18}/></Link></SheetClose>)}</nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
}
export function Reveal({children,className='',style}:{children:ReactNode,className?:string,style?:CSSProperties}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches)return;el.classList.add('reveal-ready');const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('reveal-in');observer.disconnect()}},{threshold:.08});observer.observe(el);return()=>observer.disconnect()},[]);return <div className={`reveal ${className}`} ref={ref} style={style}>{children}</div>}
export function SectionTitle({label,title,description,center=false}:{label:string,title:ReactNode,description?:string,center?:boolean}){return <Reveal className={`section-title ${center?'center':''}`}><span className="eyebrow">{label}</span><h2>{title}</h2>{description&&<p>{description}</p>}</Reveal>}
export function useScrollProgress(ref:RefObject<HTMLElement|null>){const [p,setP]=useState(0);useEffect(()=>{let frame=0;const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{frame=0;if(!ref.current)return;const r=ref.current.getBoundingClientRect();setP(q.matches?1:Math.max(0,Math.min(1,(110-r.top)/Math.max(1,r.height-innerHeight+110))))};const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);q.addEventListener('change',schedule);return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);q.removeEventListener('change',schedule)}},[ref]);return p}
export function PageIntro({label,title,accent,description,children}:{label:string,title:string,accent:string,description:string,children?:ReactNode}){return <section className="page-intro page-intro-cinema page-width"><Reveal className="intro-stack"><span className="eyebrow"><span className="tiny-cross"/>{label}</span><h1>{title}<br/><span>{accent}</span></h1><p>{description}</p>{children}</Reveal><div className="intro-rule" aria-hidden="true"><i/><Plus size={13}/><i/></div></section>}
export function NextChapter({title='Let’s build your next chapter.',text='A shared ambition. A good conversation. A place to start.'}:{title?:string,text?:string}){
  return (
    <Reveal className="next-chapter next-chapter-cinema next-chapter-frame next-contact-card page-width">
      <div className="next-frame-glow" aria-hidden="true"/>
      <div className="next-contact-surface">
        <div className="next-copy">
          <span className="eyebrow"><span className="tiny-cross"/>The next move</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="next-actions">
            <Link href="/contact" className="button next-contact-primary">Contact<ArrowUpRight size={17}/></Link>
            <Link href="/work" className="text-link next-contact-secondary">See the work<ArrowUpRight size={16}/></Link>
          </div>
          <p className="next-contact-meta">Continue on-site · <Link href="/contact">nakama.in/contact</Link></p>
        </div>
        <Link href="/contact" className="round-link" aria-label="Go to contact page"><ArrowUpRight size={27}/></Link>
      </div>
    </Reveal>
  );
}
export function Footer(){return <footer className="site-footer site-footer-cinema"><div className="footer-meta page-width"><Link href="/contact" className="footer-invitation">A good place to start.<br/><span>Say hello <ArrowUpRight size={20}/></span></Link><div className="footer-columns"><div className="footer-col"><span className="footer-col-label">Company</span><nav aria-label="Company">{[['Home','/'],['Services','/services'],['Process','/process'],['Work','/work'],['Journal','/journal'],['About','/about']].map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div><div className="footer-col"><span className="footer-col-label">Legal</span><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div><div className="footer-col"><span className="footer-col-label">Contact</span><nav aria-label="Contact"><Link href="/contact">Contact us</Link><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book a conversation<ArrowUpRight size={13}/></a><a href="mailto:contact@nakama.in">contact@nakama.in</a></nav></div><div className="footer-col"><span className="footer-col-label">Social</span><nav aria-label="Social links"><a href="https://www.linkedin.com/company/nakama-growth/" target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={13}/></a><a href="https://www.instagram.com/nakama.growth/" target="_blank" rel="noopener noreferrer">Instagram<ArrowUpRight size={13}/></a></nav></div></div></div><div className="footer-wordmark footer-wordmark-bold" tabIndex={0} aria-label="Nakama — 仲間, in it together"><span className="footer-latin-full" aria-hidden="true">nakama</span><span className="footer-kana-full" lang="ja" aria-hidden="true">仲間</span></div><div className="footer-baseline page-width"><span>© {new Date().getFullYear()} Nakama Growth</span><span className="footer-pronunciation">na · ka · ma / in it together</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="#top" aria-label="Back to top"><ArrowUpRight size={16}/></a></div></div></footer>}
export function Shell({children,className=''}:{children:ReactNode,className?:string}){
  /* Frame carries cinema classes so Super Dude's .home-cinema .site-nav glass can match the header (sibling of main otherwise). */
  return <div className={`site-frame ${className}`.trim()}>
    <div id="top"/>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header/>
    <main id="main" className={className}>{children}</main>
    <Footer/>
  </div>
}