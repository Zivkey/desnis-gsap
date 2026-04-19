"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  { v: 40, suffix: "+", label: "Projects shipped" },
  { v: 14, suffix: "d", label: "Avg. build time" },
  { v: 98, suffix: "%", label: "Avg. Lighthouse" },
  { v: 100, suffix: "%", label: "Code ownership" },
];

export default function Numbers() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>("[data-counter]");
      nums.forEach((el) => {
        const target = Number(el.dataset.counter);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="section-p mx-auto max-w-[1600px] py-20 md:py-32 border-y border-border"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-3">
            <div className="font-display text-6xl md:text-8xl leading-none tracking-[-0.03em] text-foreground">
              <span data-counter={s.v}>0</span>
              <span className="text-accent">{s.suffix}</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
