"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body:
      "Quick, focused intake. Goals, audience, integrations, deadlines — on the wall in one call, not three weeks of decks.",
    bullets: ["Stakeholder chat", "Content + IA", "Integration scoping"],
  },
  {
    n: "02",
    title: "Design",
    body:
      "We move to high-fidelity fast. One bold concept route, designed in motion, so craft lives in the details.",
    bullets: ["Art direction", "Prototype in motion", "Design tokens"],
  },
  {
    n: "03",
    title: "Vibecode",
    body:
      "AI-native Next.js build. Typed, accessible, fast. We treat performance and DX as design constraints, not chores.",
    bullets: ["Next.js + TypeScript", "Backend, auth, CMS", "QA + accessibility"],
  },
  {
    n: "04",
    title: "Ship & Evolve",
    body:
      "Launches are day one, not the finish line. You own the code. We stay on to measure, refine, and grow the thing.",
    bullets: ["Analytics + CRO", "Ongoing retainer", "Performance tuning"],
  },
];

export default function Process() {
  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const track = trackRef.current;
        if (!track) return;
        const distance = track.scrollWidth - window.innerWidth + 160;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.from("[data-process-title] [data-line]", {
        yPercent: 120,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "[data-process-title]",
          start: "top 80%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={rootRef}
      className="relative overflow-hidden py-24 md:py-0 md:h-[100svh] md:flex md:flex-col md:justify-center"
    >
      <div className="section-p mx-auto max-w-[1600px] w-full md:shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 md:items-end">
          <div className="md:col-span-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-3">
              ( Process / how we vibecode )
            </div>
            <h2
              data-process-title
              className="font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em]"
            >
              <div className="overflow-hidden">
                <div data-line>Four steps.</div>
              </div>
              <div className="overflow-hidden">
                <div data-line className="italic text-foreground/70">
                  Zero drama.
                </div>
              </div>
            </h2>
          </div>
          <p className="md:col-start-8 md:col-span-5 text-sm md:text-base text-foreground/65 leading-relaxed max-w-md">
            We work in public, ship in days not quarters, and treat clients like collaborators — not stakeholders on a slide.
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-14 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-8 pl-[11vw] md:pl-[clamp(1.25rem,4vw,4rem)] md:pr-40 will-change-transform"
        >
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="snap-center md:snap-align-none w-[78vw] md:w-[480px] shrink-0 rounded-3xl border border-border bg-[#10121f] p-8 md:p-10 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-20"
                style={{
                  backgroundColor:
                    ["#7c86ff", "#7c86ff", "#5eb3ff", "#a78bfa"][i % 4],
                }}
              />
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/50 mb-10">
                <span>step</span>
                <span className="text-accent">{s.n}</span>
              </div>
              <h3 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-5 text-base text-foreground/70 leading-relaxed">
                {s.body}
              </p>
              <ul className="mt-7 space-y-2 text-sm text-foreground/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="h-[1px] w-6 bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div aria-hidden className="shrink-0 w-[11vw] md:hidden" />
        </div>
      </div>
    </section>
  );
}
