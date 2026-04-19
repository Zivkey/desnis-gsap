"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const rootRef = useRef<HTMLElement | null>(null);
  const bigRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-line] > span", {
        yPercent: 120,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });

      gsap.to(bigRef.current, {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative overflow-hidden py-24 md:py-40 border-t border-border"
    >
      <div className="section-p mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-6">
              ( Let&apos;s talk )
            </div>
            <h2 className="font-display text-foreground text-6xl md:text-8xl leading-[0.95] tracking-[-0.03em]">
              <div className="overflow-hidden">
                <div data-contact-line>
                  <span className="inline-block">Got an idea?</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div data-contact-line>
                  <span className="inline-block italic text-accent">Let&apos;s vibecode it.</span>
                </div>
              </div>
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@desnis.studio"
                className="btn-glow group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-black"
              >
                hello@desnis.studio
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm text-foreground hover:bg-white/5 transition-colors"
              >
                Book a 20-min intro
              </a>
            </div>
          </div>

          <div className="md:col-start-9 md:col-span-4 flex flex-col gap-10">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40">
                Studio
              </div>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Kneza Miloša 42
                <br />
                11000 Belgrade, Serbia
              </p>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40">
                Socials
              </div>
              <ul className="mt-3 space-y-2 text-foreground/85">
                <li>
                  <a className="hover:text-accent transition-colors" href="#">
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent transition-colors" href="#">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent transition-colors" href="#">
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40">
                Press & Inquiries
              </div>
              <p className="mt-3 text-foreground/85">press@desnis.studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Giant outline word */}
      <div
        ref={bigRef}
        aria-hidden
        className="select-none pointer-events-none mt-16 md:mt-28 text-outline font-display text-[26vw] leading-[0.8] tracking-[-0.04em] whitespace-nowrap will-change-transform"
      >
        desnis · desnis · desnis
      </div>
    </section>
  );
}
