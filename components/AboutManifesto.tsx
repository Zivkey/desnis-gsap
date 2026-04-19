"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WORDS = [
  "We",
  "believe",
  "websites",
  "should",
  "be",
  "fast,",
  "beautiful,",
  "and",
  "programmable —",
  "not",
  "pretty",
  "cages",
  "you",
  "pay",
  "rent",
  "on.",
];

export default function AboutManifesto() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-man-word]",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="section-p mx-auto max-w-[1600px] py-24 md:py-40 border-t border-border"
    >
      <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-10">
        ( Manifesto )
      </div>
      <p className="font-display text-4xl md:text-7xl leading-[1.1] tracking-[-0.02em] max-w-5xl">
        {WORDS.map((w, i) => {
          const highlighted = w === "programmable —";
          return (
            <span
              key={i}
              data-man-word
              className={`inline-block mr-3 md:mr-5 ${highlighted ? "italic text-accent" : ""}`}
            >
              {w}
            </span>
          );
        })}
      </p>
    </section>
  );
}
