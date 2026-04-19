"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_LOGOS } from "@/lib/projects";

export default function ClientLogos() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-client]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="section-p mx-auto max-w-[1600px] py-24 md:py-40 border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 md:mb-16">
        <div className="md:col-span-6">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-4">
            ( Trusted by )
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Brands we&apos;ve <span className="italic text-accent">vibecoded</span> with.
          </h2>
        </div>
        <p className="md:col-start-8 md:col-span-5 self-end text-foreground/70 leading-relaxed max-w-md">
          From solo founders to Series B startups — if it needs to move fast and feel premium, we build it.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border rounded-3xl overflow-hidden">
        {CLIENT_LOGOS.map((c, i) => (
          <div
            key={c}
            data-client
            className={`group flex items-center justify-center p-8 md:p-10 border-border relative ${
              i % 4 !== 3 ? "md:border-r" : ""
            } ${i % 2 !== 1 ? "border-r md:border-r" : ""} ${
              i < CLIENT_LOGOS.length - 4 ? "md:border-b" : ""
            } ${i < CLIENT_LOGOS.length - 2 ? "border-b md:border-b" : ""}`}
          >
            <span className="font-display text-2xl md:text-3xl text-foreground/50 group-hover:text-foreground transition-colors duration-300">
              {c}
            </span>
            <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
