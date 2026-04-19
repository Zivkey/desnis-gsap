"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

const FAQS = [
  {
    n: "01",
    q: "How long does a project take?",
    a: "Most projects ship in 10–21 days. A landing page can be live in a week. Complex platforms with backend, auth, and third-party integrations take up to a month. We give you a timeline before we start — and we stick to it.",
  },
  {
    n: "02",
    q: "Do you work with remote clients?",
    a: "100% remote. Our clients are across Serbia, the EU, and the US. We run async by default with weekly check-ins. You don't need to be in the same city — or even the same timezone.",
  },
  {
    n: "03",
    q: "Who owns the code after delivery?",
    a: "You do. Full codebase, your GitHub repo. No vendor lock-in, no monthly license fees. We build it so your team — or any developer — can take it forward without us.",
  },
  {
    n: "04",
    q: "Do you offer support after launch?",
    a: "Yes. We offer retainer packages for ongoing support, bugfixes, and new features. Monthly or pay-as-you-go — your call. Most clients keep us on for at least the first 90 days.",
  },
  {
    n: "05",
    q: "Do you work on existing projects?",
    a: "Absolutely. Legacy refactors, Webflow migrations, performance overhauls — we're comfortable jumping into an existing codebase. We audit first, then we fix.",
  },
  {
    n: "06",
    q: "What's your tech stack?",
    a: "Next.js, TypeScript, Tailwind, GSAP, Prisma, PostgreSQL, Auth.js, Stripe, tRPC. We pick the right tool per project — not a one-size-fits-all approach.",
  },
];

function FAQItem({ n, q, a }: { n: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const animating = useRef(false);

  function toggle() {
    if (animating.current) return;
    const el = bodyRef.current;
    if (!el) return;
    animating.current = true;

    if (!open) {
      setOpen(true);
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => { animating.current = false; },
        }
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          setOpen(false);
          animating.current = false;
        },
      });
    }
  }

  return (
    <div className="border-b border-border group/item">
      <button
        onClick={toggle}
        className="w-full flex items-center gap-6 md:gap-10 py-7 text-left"
      >
        <span className="hidden md:block text-[11px] font-mono text-foreground/30 tracking-[0.2em] w-6 flex-shrink-0">
          {n}
        </span>
        <span className="flex-1 font-display text-2xl md:text-3xl text-foreground leading-snug tracking-[-0.02em] group-hover/item:text-accent transition-colors duration-200">
          {q}
        </span>
        <span
          className="flex-shrink-0 h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground/50 group-hover/item:border-accent group-hover/item:text-accent transition-all duration-200"
          aria-hidden
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            <line x1="6.5" y1="0" x2="6.5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="6.5" x2="13" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <div className="flex gap-6 md:gap-10 pb-7">
          <span className="hidden md:block w-6 flex-shrink-0" />
          <p className="flex-1 text-base md:text-lg text-foreground/55 leading-relaxed max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative section-p mx-auto max-w-[1600px] py-16 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-4">
            ( FAQ )
          </div>
          <h2 className="font-display text-foreground text-6xl md:text-8xl leading-[0.95] tracking-[-0.03em]">
            Got<br />
            <span className="italic">questions?</span>
          </h2>
        </div>
        <p className="text-base md:text-lg text-foreground/55 leading-relaxed max-w-xs md:max-w-sm md:text-right">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a href="/#contact" className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors">
            Write to us directly.
          </a>
        </p>
      </div>

      <div className="border-t border-border">
        {FAQS.map((item) => (
          <FAQItem key={item.n} n={item.n} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
