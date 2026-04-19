"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  meta?: { label: string; value: string }[];
};

export default function PageHero({ eyebrow, title, description, meta }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-ph-eyebrow]", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from("[data-ph-title] [data-line]", {
        yPercent: 120,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.1,
      });
      gsap.from("[data-ph-desc]", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
      });
      gsap.from("[data-ph-meta]", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.5,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden pt-36 md:pt-48 pb-16 md:pb-28 section-p mx-auto max-w-[1600px]"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[conic-gradient(from_120deg,#7c86ff,#a5b4fc,#5eb3ff,#7c86ff)] blur-3xl opacity-30" />

      <div
        data-ph-eyebrow
        className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/60"
      >
        <span className="h-px w-10 bg-accent" />
        {eyebrow}
      </div>

      <h1
        data-ph-title
        className="mt-8 font-display text-foreground text-6xl md:text-[9vw] leading-[0.92] tracking-[-0.03em]"
      >
        {title}
      </h1>

      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <p
          data-ph-desc
          className="md:col-span-6 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl"
        >
          {description}
        </p>

        {meta && (
          <div className="md:col-start-9 md:col-span-4 grid grid-cols-2 gap-6">
            {meta.map((m, i) => (
              <div key={i} data-ph-meta>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/40">
                  {m.label}
                </div>
                <div className="mt-1 text-foreground/90 text-sm">{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
