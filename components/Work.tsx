"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function Work() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-work-title] [data-line]", {
        yPercent: 120,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "[data-work-title]",
          start: "top 80%",
        },
      });

      const items = gsap.utils.toArray<HTMLElement>("[data-project]");
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={rootRef}
      className="relative section-p mx-auto max-w-[1600px] py-24 md:py-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-4">
            ( Selected work / 2024–25 )
          </div>
          <h2
            data-work-title
            className="font-display text-6xl md:text-8xl leading-[0.95] tracking-[-0.03em]"
          >
            <div className="overflow-hidden">
              <div data-line>A few things</div>
            </div>
            <div className="overflow-hidden">
              <div data-line>
                <span className="italic">we&apos;re</span> proud of.
              </div>
            </div>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {FEATURED_PROJECTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects#${p.slug}`}
            data-project
            data-hover
            className={`group relative overflow-hidden rounded-3xl border border-border bg-[#0e101c] block ${
              i % 2 === 1 ? "md:translate-y-24" : ""
            }`}
          >
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <div
                className="absolute inset-0 scale-110 transition-transform duration-700 group-hover:scale-[1.18]"
                style={{ backgroundImage: p.gradient, backgroundSize: "cover" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <div
                className="absolute inset-x-8 bottom-8 flex items-end justify-between"
                style={{ color: p.accent }}
              >
                <span className="font-display text-5xl md:text-7xl leading-none tracking-tight">
                  {p.title}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                  {p.year}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-6 md:p-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-foreground">{p.client}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="text-foreground/60">{p.tag}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                Case study
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 md:mt-36 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm text-foreground hover:bg-white/5 transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          See all projects
          <span className="inline-block">→</span>
        </Link>
      </div>
    </section>
  );
}
