"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { POSTS } from "@/lib/posts";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogGrid() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-post]", {
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

  const [featured, ...rest] = POSTS;

  return (
    <section ref={rootRef} className="section-p mx-auto max-w-[1600px] py-10 md:py-16">
      <Link
        href={`/blog/${featured.slug}`}
        data-post
        data-hover
        className="group block relative overflow-hidden rounded-3xl border border-border bg-[#0e101c] mb-10 md:mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px] overflow-hidden">
            <div
              className="absolute inset-0 scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
              style={{ backgroundImage: featured.gradient, backgroundSize: "cover" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <span
              className="absolute top-6 left-6 rounded-full bg-[#0a0b14]/70 backdrop-blur-md border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]"
              style={{ color: featured.accent }}
            >
              Featured
            </span>
          </div>
          <div className="p-8 md:p-12 flex flex-col gap-6 justify-between">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-5">
                <span style={{ color: featured.accent }}>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span>{formatDate(featured.date)}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
                {featured.title}
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed text-base md:text-lg">
                {featured.excerpt}
              </p>
            </div>
            <span className="inline-flex items-center gap-3 text-sm text-foreground group-hover:text-accent transition-colors">
              Read the article
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            data-post
            data-hover
            className="group flex flex-col rounded-3xl border border-border bg-[#10121f] overflow-hidden"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <div
                className="absolute inset-0 scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
                style={{ backgroundImage: p.gradient, backgroundSize: "cover" }}
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50">
                <span style={{ color: p.accent }}>{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span>{p.readMinutes} min</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-[1.05] tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="text-foreground/65 text-sm leading-relaxed line-clamp-3">
                {p.excerpt}
              </p>
              <div className="mt-auto pt-4 border-t border-border text-xs text-foreground/50">
                {formatDate(p.date)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
