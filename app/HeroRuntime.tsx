"use client";
import {moveLight,resetLight} from './pointer-light';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import './hero-landing.css';

/* every file is trimmed to its own ink, so the CSS height for a kind is the optical height */
const FLOAT_COS = [
  {name:'SERPsGrowth',src:'/clients/white/serps.png',kind:'icon',w:200,h:200},
  {name:'Inventive AI',src:'/clients/white/inventive.png',kind:'icon',w:158,h:157},
  {name:'StarAgile',src:'/clients/white/staragile.png',kind:'icon',w:250,h:150},
  {name:'Synup',src:'/clients/white/synup.svg',kind:'wordmark',w:557,h:151},
  {name:'HubEngage',src:'/clients/white/hubengage.png',kind:'icon',w:160,h:160},
  {name:'BacklinkOS',src:'/clients/white/backlinkos.png',kind:'icon',w:84,h:79},
  {name:'Inbound Blogging',src:'/clients/white/inbound.png',kind:'icon',w:127,h:182},
  {name:'Brosix',src:'/clients/white/brosix.svg',kind:'lockup',w:980,h:197},
];

export function HeroRuntime({booking}:{booking:string}){
  return <section className="hero-runtime hero-giga hero-landing" aria-label="Nakama Growth" onPointerMove={moveLight} onPointerLeave={resetLight}>
    <div className="hero-pane">
      <div className="hero-glow-mesh" aria-hidden="true"/>
      <div className="hero-colour-halo" aria-hidden="true"/><div className="hero-orbital" aria-hidden="true"><i/><i/><i/></div><div className="hero-cursor-light" aria-hidden="true"/>
      <div className="hero-edge-light" aria-hidden="true"/>
      <div className="hero-copy hero-copy-giga">
        <div className="hero-signature" aria-label="Nakama. In it together."><span className="hero-signature-seal" lang="ja" aria-hidden="true">仲間</span><span className="hero-signature-copy"><span>Nakama</span><strong>In it together.</strong></span></div>
        <h1 className="hero-serif-title" aria-label="Be the brand they already know."><span aria-hidden="true">Be the brand</span><span className="hero-title-rotation" aria-hidden="true"><span className="hero-title-accent hero-rotating-line">they already know.</span><span className="hero-title-accent hero-rotating-line">they search for.</span><span className="hero-title-accent hero-rotating-line">they choose.</span></span></h1>
        <h2 className="hero-subhead">We earn visibility across AI answers, search, communities, and video so your product shows up where decisions already happen.</h2>
        <div className="hero-ctas"><a className="hero-cta-white" href={booking} target="_blank" rel="noopener noreferrer">Start a conversation<span className="hero-cta-icon" aria-hidden="true"><ArrowUpRight size={16}/></span></a><a className="hero-cta-quiet" href="/process"><span>See our approach</span><ArrowRight size={16} aria-hidden="true"/></a></div>
      </div>

      {/* Bottom floating white company logos on amber glow */}
      <div className="hero-logo-bar" aria-label="Companies we've worked with">
        <div className="hero-logo-track">
          {[0,1,2].map(copy=>(
            <div className="hero-logo-group" key={copy} aria-hidden={copy===0?undefined:true}>
              {FLOAT_COS.map(c=>(
                <span className="hero-logo-item" key={`${copy}-${c.name}`}>
                  <img className={`hero-logo-mark hero-logo-mark--${c.kind}`} src={c.src} alt={c.name} width={c.w} height={c.h} loading={copy? 'lazy':'eager'}/>
                  {c.kind==='icon'&&<span>{c.name}</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
    <div id="hero-end"/>
  </section>;
}
