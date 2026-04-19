"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VALUES = [
  {
    n: "01",
    t: "You own the code.",
    b: "Every line we write is yours. No proprietary lock-in, no per-seat tax, no hostage hosting.",
  },
  {
    n: "02",
    t: "Ship, don't slide-deck.",
    b: "We replace 3 weeks of discovery decks with 3 days of working prototypes. Direction lives in the artifact.",
  },
  {
    n: "03",
    t: "Performance is design.",
    b: "100/100 Lighthouse is a starting point. If it feels slow, it is slow — and we ship neither.",
  },
  {
    n: "04",
    t: "Integrate anything.",
    b: "Stripe, Auth.js, Postgres, Sanity, OpenAI, Twilio — if it has an API, we've already wired it to a project.",
  },
];

export default function AboutValues() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-val]", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
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
            ( Values )
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            How we operate,<br />
            <span className="italic text-accent">on the record.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {VALUES.map((v) => (
          <article
            key={v.n}
            data-val
            className="rounded-3xl border border-border bg-[#10121f] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/50 mb-6">
              <span>{v.n}</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h3 className="font-display text-3xl md:text-5xl leading-[1] tracking-[-0.02em] mb-4">
              {v.t}
            </h3>
            <p className="text-foreground/70 leading-relaxed">{v.b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
