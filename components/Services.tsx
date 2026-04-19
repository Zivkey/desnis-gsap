"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES = [
  {
    n: "01",
    title: "Web Development",
    body:
      "Production-grade Next.js sites, vibecoded in days not months. Typed, tested, tuned to 100/100 Lighthouse. You own the codebase.",
    tags: ["Next.js", "TypeScript", "Headless CMS", "SEO"],
    color: "#7c86ff",
  },
  {
    n: "02",
    title: "Backend & Auth",
    body:
      "Real logic, not plugins. Auth, databases, payments, dashboards, APIs — built into the same codebase, no duct tape.",
    tags: ["Postgres", "Auth.js", "Stripe", "tRPC"],
    color: "#7c86ff",
  },
  {
    n: "03",
    title: "Interactive Design",
    body:
      "GSAP, WebGL, Lenis. We design experiences that invite interaction, not patience. Motion with a point of view.",
    tags: ["GSAP", "WebGL", "Lenis", "Canvas"],
    color: "#5eb3ff",
  },
  {
    n: "04",
    title: "E-commerce",
    body:
      "Shopify Hydrogen, Medusa, or fully custom stacks. Storefronts that convert because they load fast and feel good.",
    tags: ["Shopify", "Hydrogen", "Medusa", "Stripe"],
    color: "#a78bfa",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
        const lastCard = cards[cards.length - 1] as HTMLElement;

        cards.forEach((card, i) => {
          const depth = cards.length - 1 - i;
          if (depth === 0) return;

          gsap.to(card, {
            yPercent: -6 * depth,
            scale: 1 - 0.04 * depth,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top top+=96",
              endTrigger: lastCard,
              end: "top top+=96",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      gsap.from("[data-services-title] [data-line]", {
        yPercent: 120,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "[data-services-title]",
          start: "top 80%",
        },
      });

      gsap.from("[data-services-sub]", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-services-sub]",
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-p mx-auto max-w-[1600px] py-24 md:py-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-6">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-4">
            ( Services / 4 )
          </div>
          <h2
            data-services-title
            className="font-display text-foreground text-6xl md:text-8xl leading-[0.95] tracking-[-0.03em]"
          >
            <div className="overflow-hidden">
              <div data-line>What we</div>
            </div>
            <div className="overflow-hidden">
              <div data-line className="italic">
                build.
              </div>
            </div>
          </h2>
        </div>
        <p
          data-services-sub
          className="md:col-start-8 md:col-span-5 self-end text-base md:text-lg text-foreground/65 leading-relaxed max-w-md"
        >
          One codebase, four deep obsessions. We don&apos;t glue together plugins — we vibecode everything into a single, fast, typed system.
        </p>
      </div>

      <div ref={stackRef} className="flex flex-col gap-6">
        {SERVICES.map((s, i) => (
          <article
            key={s.n}
            data-service-card
            className="rounded-3xl border border-border bg-[#10121f] p-7 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] md:sticky md:top-24"
            style={{ zIndex: 10 + i }}
          >
            <div className="flex items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/50">
                <span>{s.n}</span>
                <span className="h-px w-8 bg-foreground/20" />
                <span>service</span>
              </div>
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: s.color, boxShadow: `0 0 30px ${s.color}` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <h3 className="md:col-span-7 font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
                <span className="text-foreground">{s.title.split(" ")[0]}</span>{" "}
                <span className="italic text-foreground/70">
                  {s.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
              <div className="md:col-span-5 flex flex-col justify-between gap-8">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
