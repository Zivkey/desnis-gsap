"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      document.body.classList.add("no-scroll");
      gsap.fromTo(
        el,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" }
      );
      gsap.fromTo(
        el.querySelectorAll("[data-menu-item]"),
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.06,
          delay: 0.2,
        }
      );
    } else {
      document.body.classList.remove("no-scroll");
      if (!mountedRef.current) {
        mountedRef.current = true;
        return;
      }
      gsap.to(el.querySelectorAll("[data-menu-item]"), {
        yPercent: 120,
        duration: 0.4,
        ease: "power3.in",
        stagger: 0.03,
      });
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.55,
        ease: "power4.inOut",
        delay: 0.15,
      });
    }
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 py-4">
        <div className="mx-auto flex items-center justify-between max-w-6xl rounded-full border border-border bg-[#0a0b14]/70 backdrop-blur-md py-2.5 px-5">

          <Link
            href="/"
            className="group flex items-center gap-2.5 text-foreground"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-accent transition-transform duration-500 group-hover:rotate-180" />
              <span className="relative text-[15px] font-bold text-black">D</span>
            </span>
            <span className="text-[18px] tracking-tight font-medium">desnis</span>
            <span className="hidden sm:inline text-[12px] font-mono text-foreground/40 ml-1">
              ® studio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-[15px] text-foreground/80">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative group"
                >
                  <span className={`transition-colors ${active ? "text-foreground" : "group-hover:text-foreground"}`}>
                    {l.label}
                  </span>
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-accent transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-black hover:bg-foreground transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Start a project
            </Link>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative h-10 w-10 rounded-full border border-border bg-[#0a0b14]/50 backdrop-blur-md flex items-center justify-center"
            >
              <span className="flex flex-col gap-[5px]">
                <span
                  className={`h-[1.5px] w-4 bg-foreground transition-all duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-4 bg-foreground transition-all duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#0a0b14] md:hidden ${open ? "" : "pointer-events-none"}`}
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <div className="flex h-full flex-col justify-between section-p pt-28 pb-10">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <li key={l.href} className="overflow-hidden">
                  <Link
                    data-menu-item
                    href={l.href}
                    className={`block font-display text-6xl leading-none tracking-tight transition-colors ${
                      active ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 text-sm text-foreground/50">
            <span>hello@desnis.studio</span>
            <span>Belgrade · Remote</span>
          </div>
        </div>
      </div>
    </>
  );
}
