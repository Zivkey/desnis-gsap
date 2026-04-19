"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, type Project } from "@/lib/projects";

const CATEGORIES = ["All", "Web", "E-commerce", "Brand", "Web App"] as const;

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const rootRef = useRef<HTMLElement | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-proj-card]", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      ref={rootRef}
      className="section-p mx-auto max-w-[1600px] py-10 md:py-16"
    >
      <div className="flex flex-wrap items-center gap-2 mb-12 md:mb-16 border-b border-border pb-6">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mr-4">
          ( Filter )
        </span>
        {CATEGORIES.map((c) => {
          const active = filter === c;
          const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-colors ${
                active
                  ? "border-accent bg-accent text-black"
                  : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {c}
              <span className={`font-mono text-[10px] ${active ? "text-black/70" : "text-foreground/40"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {filtered.map((p: Project, i: number) => (
          <Link
            key={p.slug}
            id={p.slug}
            href={`#${p.slug}`}
            data-proj-card
            data-hover
            className={`group relative overflow-hidden rounded-3xl border border-border bg-[#0e101c] block scroll-mt-36 ${
              i % 2 === 1 ? "md:translate-y-20" : ""
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
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-sm mb-3">
                <span className="text-foreground">{p.client}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="text-foreground/60">{p.tag}</span>
              </div>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
