"use client";

const items = [
  "Vibecoding",
  "Next.js",
  "Backend & Auth",
  "Custom Integrations",
  "E-commerce",
  "GSAP Motion",
  "Headless CMS",
  "Performance",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative border-y border-border bg-background py-14 md:py-20 overflow-hidden"
    >
      <div className="edge-fade">
        <div className="flex w-max marquee-track">
          {loop.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-10 pr-10 text-4xl md:text-6xl font-display tracking-tight leading-[1.4]"
            >
              <span className={i % 2 ? "text-outline" : "text-foreground"}>{t}</span>
              <span className="text-accent text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
