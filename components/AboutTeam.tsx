"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEAM = [
  {
    name: "Veljko",
    role: "Founder · Lead Engineer",
    bio: "Builds the backend, the scaffolding, and the odd GSAP timeline. Keeps the codebase honest.",
    accent: "#7c86ff",
  },
  {
    name: "Stevan",
    role: "Design Director",
    bio: "Brand systems, typography, and the way a site feels in the first 3 seconds.",
    accent: "#5eb3ff",
  },
  {
    name: "Marko",
    role: "Motion & Product",
    bio: "GSAP, WebGL, scroll choreography — and turning client goals into shippable scope.",
    accent: "#7c86ff",
  },
];

export default function AboutTeam() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-team-card]", {
        opacity: 0,
        y: 50,
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
            ( The team )
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Small room.<br />
            <span className="italic text-foreground/70">Big range.</span>
          </h2>
        </div>
        <p className="md:col-start-8 md:col-span-5 self-end text-base md:text-lg text-foreground/65 leading-relaxed max-w-md">
          Four specialists, one studio. We skip the handoff-tax and ship faster because everyone writes, designs, and reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEAM.map((m) => (
          <article
            key={m.name}
            data-team-card
            data-hover
            className="group relative rounded-3xl border border-border bg-muted/40 overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          >
            <div
              className="aspect-[4/5] relative"
              style={{
                background: `radial-gradient(120% 90% at 50% 30%, ${m.accent}40 0%, transparent 60%), linear-gradient(135deg, #10121f, #0a0b14)`,
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span
                  className="font-display text-6xl md:text-7xl leading-none tracking-tight"
                  style={{ color: m.accent }}
                >
                  {m.name.split(" ")[0]}
                </span>
              </div>
              <span
                className="absolute top-5 right-5 h-2 w-2 rounded-full"
                style={{ backgroundColor: m.accent, boxShadow: `0 0 20px ${m.accent}` }}
              />
            </div>
            <div className="p-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {m.role}
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
