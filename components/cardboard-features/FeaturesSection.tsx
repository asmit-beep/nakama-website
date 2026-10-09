"use client";

import {
  AnimatePresence,
  MotionConfig,
  useInView,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
const SurfaceMock=dynamic(()=>import("./SurfaceMock").then(module=>module.SurfaceMock),{ssr:false});
import { cn } from "./cn";
import { EASE_OUT, FEATURES } from "./data";
import "./features.css";

/**
 * "From first prompt to final pick" — a 400vh scroll runway on desktop. The layout
 * is sticky for the full height; scroll progress through the runway selects
 * one of four features, which drives the left accordion and the product mock.
 * Below `lg` the four features stack with their own static mock each.
 */
export function FeaturesSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if(reduceMotion)return;
    const next = Math.min(FEATURES.length - 1, Math.max(0, Math.floor(p * FEATURES.length)));
    setActiveIndex((current) => (current === next ? current : next));
  });

  // Scroll to the middle of a feature's runway band so it stays selected.
  const jumpTo = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    if (reduceMotion) setActiveIndex(index);
    const t = (index + 0.5) / FEATURES.length;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + t * Math.max(0,el.offsetHeight - window.innerHeight), behavior: reduceMotion ? "instant" : "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user"><section
      ref={sectionRef}
      id="features"
      className="cardboard-features relative z-10 w-full scroll-mt-20 lg:h-[400vh]"
      aria-labelledby="footage-title"
    >
      <div className="features-pin lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div className="features-layout mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-x-16 gap-y-16 px-6 py-20 lg:grid-cols-12 lg:gap-y-0 lg:px-10 lg:py-0">
          {/* Copy + accordion */}
          <div className="relative lg:col-span-5">
            <motion.h2 id="footage-title"
              initial={reduceMotion ? false : { opacity: 0, filter: "blur(8px)", y: 8 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
              className="features-heading font-display text-[42px] leading-[1.05] font-thin tracking-[-0.01em] text-white lg:text-[52px]"
            >
              From first prompt
              <br />
              <span className="relative inline-block">
                to final pick
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full bg-[url('/brand/underline-ember.svg')] bg-no-repeat"
                  style={{ backgroundSize: "100% 100%", transform: "translateZ(0)" }}
                />
              </span>
            </motion.h2>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
              className="features-description font-marketing-sans mt-5 max-w-[420px] text-[16px] leading-[1.4] text-[#9B9B9B]"
            >
              Buyers make up their minds across four tabs before they ever book a demo. We make sure every tab says your name.
            </motion.p>

            {/* Desktop accordion */}
            <ul className="features-accordion mt-32 hidden flex-col lg:mt-40 lg:flex">
              {FEATURES.map((feature, i) => {
                const active = i === activeIndex;
                return (
                  <li key={feature.title} className="group">
                    <motion.button
                      type="button"
                      onClick={() => jumpTo(i)}
                      layout
                      transition={{ layout: { duration: 0.45, ease: EASE_OUT } }}
                      className="features-choice flex w-full cursor-pointer flex-col items-start pt-[22px] pb-[22px] text-left outline-none"
                      aria-pressed={active}
                    >
                      <span
                        className={cn(
                          "font-marketing-sans text-[20px] leading-none font-medium text-white transition-opacity duration-300 ease-out",
                          active ? "opacity-100" : "opacity-30 group-hover:opacity-65 group-focus-visible:opacity-65 group-active:opacity-80",
                        )}
                      >
                        {feature.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {active ? (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{
                              opacity: { duration: 0.3, delay: 0.1 },
                              height: { duration: 0.4, ease: EASE_OUT },
                              marginTop: { duration: 0.4, ease: EASE_OUT },
                            }}
                            className="font-marketing-sans max-w-[420px] overflow-hidden text-[15px] leading-[1.5] text-white/70"
                          >
                            {feature.description}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </motion.button>
                    <div className="relative h-px w-full overflow-hidden">
                      <div
                        className={cn(
                          "absolute inset-0 transition-colors duration-300",
                          active ? "bg-white/[0.09]" : "bg-white/[0.09] group-hover:bg-white/[0.22]",
                        )}
                      />
                      <motion.div
                        initial={false}
                        animate={{ opacity: active ? 1 : 0, scaleX: active ? 1 : 0.2 }}
                        transition={{ opacity: { duration: 0.4 }, scaleX: { duration: 0.6, ease: EASE_OUT } }}
                        className="absolute inset-y-0 left-0 w-[75%] origin-left bg-gradient-to-r from-white/85 via-white/40 to-transparent"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Mobile / tablet: stacked features with their own mock */}
            <div className="features-mobile mt-10 flex flex-col gap-16 lg:hidden">
              {FEATURES.map((feature, i) => (
                <div key={feature.title}>
                  <h3 className="font-marketing-sans text-[21px] leading-none font-medium text-white">{feature.title}</h3>
                  <p className="font-marketing-sans mt-3 max-w-[440px] text-[15px] leading-[1.5] text-white/65">{feature.description}</p>
                  <div className="relative mt-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[55%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C32]/12 blur-[60px]"
                    />
                    <DeferredMock activeIndex={i} onNavigate={() => {}} mobile />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop product mock */}
          <div className="features-desktop relative hidden lg:col-span-7 lg:block">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[40%] left-1/2 -z-10 h-[40%] w-[70%] -translate-x-1/2 rounded-full bg-[#F07C32]/14 blur-[70px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 -left-[30%] -z-10 h-[90%] w-[90%] -translate-y-1/2 rounded-full bg-[#B0573A]/14 blur-[120px]"
              />
              <DeferredMock activeIndex={activeIndex} onNavigate={jumpTo} />
            </motion.div>
          </div>
        </div>
      </div>
    </section></MotionConfig>
  );
}

function DeferredMock(props: {activeIndex:number;onNavigate:(index:number)=>void;mobile?:boolean}){
  const ref=useRef<HTMLDivElement>(null);
  const visible=useInView(ref,{margin:"200px 0px"});
  return <div ref={ref} style={{aspectRatio:"775/615"}}>
    {visible?<SurfaceMock {...props}/>:null}
  </div>;
}
