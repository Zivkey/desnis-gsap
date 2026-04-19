"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Score = 1 | 2 | 3 | 4 | 5;

type Approach = {
  name: string;
  tag: string;
  speed: Score;
  cost: Score;
  perf: Score;
  custom: Score;
  verdict: string;
  highlight?: boolean;
};

const approaches: Approach[] = [
  {
    name: "WordPress",
    tag: "The CMS behemoth",
    speed: 2,
    cost: 3,
    perf: 2,
    custom: 3,
    verdict: "Plugin soup. Slow by default. Every update a risk.",
  },
  {
    name: "Custom code",
    tag: "The agency classic",
    speed: 1,
    cost: 1,
    perf: 5,
    custom: 5,
    verdict: "Powerful, but months of work and five-figure invoices.",
  },
  {
    name: "Webflow",
    tag: "The visual builder",
    speed: 4,
    cost: 3,
    perf: 4,
    custom: 2,
    verdict: "Pretty. Limited. Hits a wall the moment you need real logic.",
  },
  {
    name: "Vibecoding",
    tag: "Desnis — AI-native Next.js",
    speed: 5,
    cost: 5,
    perf: 5,
    custom: 5,
    verdict: "Ship in days. Own the code. Add auth, payments, anything.",
    highlight: true,
  },
];

const criteria = [
  { key: "speed" as const, label: "Speed", caption: "time to ship" },
  { key: "cost" as const, label: "Cost", caption: "total investment" },
  { key: "perf" as const, label: "Performance", caption: "real-world Lighthouse" },
  { key: "custom" as const, label: "Custom logic", caption: "backend, auth, integrations" },
];

function Dots({ value }: { value: Score }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i <= value ? "bg-accent" : "bg-foreground/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function WhyVibecoding() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-why-title] [data-line]", {
        yPercent: 120,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "[data-why-title]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-why-card]", {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "[data-why-grid]",
          start: "top 75%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={rootRef}
      className="relative section-p mx-auto max-w-[1600px] py-24 md:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124, 134, 255,0.22),transparent_60%)] blur-3xl" />

      <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/60">
        <span className="h-px w-10 bg-accent" />
        Why vibecoding
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <h2
          data-why-title
          className="md:col-span-8 font-display text-5xl md:text-8xl leading-[0.9] tracking-[-0.03em]"
        >
          <span className="block overflow-hidden"><span data-line className="inline-block">The old way</span></span>
          <span className="block overflow-hidden"><span data-line className="inline-block">is <span className="italic text-accent">slow</span>.</span></span>
          <span className="block overflow-hidden"><span data-line className="inline-block">We vibecode.</span></span>
        </h2>

        <p className="md:col-span-4 text-lg text-foreground/70 leading-relaxed">
          AI-native Next.js development. Same polish as Webflow, same power as custom code, a fraction of the time and cost — with real backend, auth, and any integration you can imagine.
        </p>
      </div>

      <div
        data-why-grid
        className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
      >
        {approaches.map((a) => (
          <article
            key={a.name}
            data-why-card
            data-hover
            className={`group relative rounded-3xl border p-6 md:p-8 flex flex-col gap-6 transition-transform duration-500 hover:-translate-y-2 ${
              a.highlight
                ? "border-accent/50 bg-[linear-gradient(180deg,rgba(124, 134, 255,0.12),rgba(124, 134, 255,0.02))]"
                : "border-border bg-muted/40"
            }`}
          >
            {a.highlight && (
              <>
                <div className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-black">
                  Desnis
                </span>
              </>
            )}

            <header className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className={`font-display text-3xl md:text-4xl leading-none ${a.highlight ? "text-accent" : "text-foreground"}`}>
                  {a.name}
                </h3>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50">
                {a.tag}
              </p>
            </header>

            <ul className="flex flex-col gap-3 border-t border-border pt-4">
              {criteria.map((c) => (
                <li key={c.key} className="flex items-center justify-between text-sm">
                  <span className="text-foreground/70">{c.label}</span>
                  <Dots value={a[c.key]} />
                </li>
              ))}
            </ul>

            <p className={`text-sm leading-relaxed mt-auto ${a.highlight ? "text-foreground" : "text-foreground/55"}`}>
              {a.verdict}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
        <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em] max-w-3xl">
          The only approach that wins on every axis — and the only one that scales <span className="italic text-accent">with</span> your product, not against it.
        </p>
        <Link
          href="/#contact"
          className="btn-glow inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-black hover:bg-accent transition-colors w-fit"
        >
          See if it fits you
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
