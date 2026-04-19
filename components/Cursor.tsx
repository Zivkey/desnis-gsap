"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xToR = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
    const yToR = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToR(e.clientX);
      yToR(e.clientY);
    };
    window.addEventListener("mousemove", onMove);

    const enter = () => gsap.to(ring, { scale: 1.8, duration: 0.25, ease: "power3.out" });
    const leave = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "power3.out" });

    const bind = () => {
      const hoverables = document.querySelectorAll<HTMLElement>("a, button, [data-hover]");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
      return hoverables;
    };

    let hoverables = bind();
    const observer = new MutationObserver(() => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      hoverables = bind();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
