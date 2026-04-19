"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="section-p mx-auto max-w-[1600px] py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-accent" />
              <span className="relative text-[13px] font-bold text-black">D</span>
            </span>
            <span className="text-[15px] tracking-tight font-medium">desnis</span>
          </Link>
          <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
            Vibecoding studio. We build Next.js websites with deep custom logic — backend, auth, integrations — that take brands to the next level.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40 mb-1">Studio</span>
          <Link href="/projects" className="text-foreground/70 hover:text-foreground transition-colors w-fit">Projects</Link>
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors w-fit">About</Link>
          <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors w-fit">Blog</Link>
          <Link href="/#contact" className="text-foreground/70 hover:text-foreground transition-colors w-fit">Contact</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40 mb-1">Services</span>
          <span className="text-foreground/70">Web Development</span>
          <span className="text-foreground/70">Backend & Auth</span>
          <span className="text-foreground/70">Interactive Design</span>
          <span className="text-foreground/70">E-commerce</span>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40 mb-1">Reach us</span>
          <a href="mailto:hello@desnis.studio" className="text-foreground/70 hover:text-foreground transition-colors w-fit">hello@desnis.studio</a>
          <span className="text-foreground/70">Belgrade · Worldwide</span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-p mx-auto max-w-[1600px] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            All systems operational
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>© {year} Desnis Studio</span>
            <span>Vibecoded with Next.js + GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
