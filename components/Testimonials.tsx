"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const QUOTES = [
  {
    q: "They designed, built, and launched our entire storefront in under three weeks. It doubled our conversion rate.",
    name: "Ana Petrović",
    role: "CEO, Halcyon Audio",
  },
  {
    q: "The rare studio that ships real backend logic with the polish of a design shop. Auth, Stripe, a dashboard — one sprint.",
    name: "Marko Jovanović",
    role: "Head of Product, Northline",
  },
  {
    q: "Felt like hiring a senior team, not an agency. We own the codebase and it's the cleanest Next.js we've seen.",
    name: "Lena Knight",
    role: "Editor-in-chief, Fieldnote",
  },
];

export default function Testimonials() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-quote]", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="section-p mx-auto max-w-[1600px] py-24 md:py-40"
    >
      <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-10">
        ( Words from the room )
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {QUOTES.map((t, i) => (
          <figure
            key={i}
            data-quote
            className="rounded-3xl border border-border bg-[#10121f] p-8 md:p-10 flex flex-col gap-8"
          >
            <span className="font-display text-6xl leading-none text-accent">&ldquo;</span>
            <blockquote className="text-lg md:text-xl text-foreground/85 leading-relaxed">
              {t.q}
            </blockquote>
            <figcaption className="mt-auto pt-6 border-t border-border text-sm">
              <div className="text-foreground">{t.name}</div>
              <div className="text-foreground/50">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
