"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitChars(text: string, className = "") {
  return text.split("").map((c, i) => (
    <span
      key={i}
      data-char
      className={`inline-block ${className}`}
      style={{ whiteSpace: "pre" }}
    >
      {c}
    </span>
  ));
}

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set("[data-char]", { yPercent: 120 });
      gsap.set(["[data-hero-sub]", "[data-hero-cta]"], {
        autoAlpha: 0,
        y: 20,
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 });

      tl.to("[data-hero-eyebrow] [data-char]", {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.015,
      })
        .to(
          "[data-hero-title] [data-char]",
          { yPercent: 0, duration: 1.1, stagger: 0.025 },
          "-=0.55"
        )
        .to(
          "[data-hero-sub]",
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          "[data-hero-cta]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.65"
        );

      gsap.to(orbRef.current, {
        yPercent: 40,
        scale: 0.85,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(titleRef.current, {
        yPercent: -12,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const onPointer = (e: PointerEvent) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 60;
        const y = (e.clientY / h - 0.5) * 60;
        gsap.to(orbRef.current, { x, y, duration: 1, ease: "power3.out" });
      };
      window.addEventListener("pointermove", onPointer);
      return () => window.removeEventListener("pointermove", onPointer);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] w-full overflow-hidden pt-28 md:pt-36"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124, 134, 255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(12,10,28,0.6))]" />
      </div>

      <div
        ref={orbRef}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 md:top-10 h-[460px] w-[460px] md:h-[620px] md:w-[620px] rounded-full bg-[conic-gradient(from_120deg,#7c86ff,#a5b4fc,#5eb3ff,#7c86ff)] blur-3xl opacity-50"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="section-p mx-auto max-w-[1600px]">
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span data-hero-eyebrow className="flex overflow-hidden">
            {splitChars("Vibecoding studio — Booking 2026")}
          </span>
        </div>

        <h1
          ref={titleRef}
          data-hero-title
          className="mt-5 md:mt-8 font-display text-foreground text-[15vw] md:text-[7.5vw] leading-[0.9] tracking-[-0.04em]"
        >
          <div className="overflow-hidden">{splitChars("Websites,")}</div>
          <div className="overflow-hidden italic">{splitChars("next")}</div>
          <div className="overflow-hidden">
            {splitChars("level")}
            {splitChars(".", "text-accent")}
          </div>
        </h1>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <p
            data-hero-sub
            className="md:col-start-7 md:col-span-5 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl"
          >
            We vibecode ultra-fast Next.js sites with real backend, auth and custom logic — faster than WordPress, cheaper than custom, more powerful than Webflow.
          </p>

          <div className="md:col-start-7 md:col-span-5 flex flex-wrap gap-3 mt-2">
            <Link
              data-hero-cta
              href="/#contact"
              className="btn-glow group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-black"
            >
              Start a project
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              data-hero-cta
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm text-foreground hover:bg-white/5 transition-colors"
            >
              View our work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
