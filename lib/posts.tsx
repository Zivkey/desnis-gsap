import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: "Vibecoding" | "Engineering" | "Design" | "Business";
  accent: string;
  gradient: string;
  content: ReactNode;
};

export const POSTS: Post[] = [
  {
    slug: "what-is-vibecoding",
    title: "What is vibecoding, really?",
    excerpt:
      "Everyone's using the word. Almost no one is saying the same thing. Here's how we define it at Desnis — and why it's already replacing Webflow for our clients.",
    date: "2026-04-10",
    readMinutes: 6,
    category: "Vibecoding",
    accent: "#7c86ff",
    gradient:
      "radial-gradient(120% 90% at 20% 20%, #7c86ff 0%, transparent 55%), radial-gradient(120% 90% at 80% 80%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #0c0a1c, #18102a)",
    content: (
      <>
        <p>
          Vibecoding is a word that blew up in late 2025. It means different things to different people. For some, it&apos;s
          just a synonym for &quot;prompting an AI to write code.&quot; For us at Desnis, it&apos;s a specific workflow — one we&apos;ve
          been using to deliver production-grade Next.js websites in days instead of months.
        </p>
        <h2>The working definition</h2>
        <p>
          Vibecoding is the practice of pairing senior engineers with AI agents inside a real codebase, shipping
          working software end-to-end — frontend, backend, auth, integrations — without the traditional
          design/handoff/implementation chain.
        </p>
        <p>
          It is <em>not</em> &quot;let the AI do it.&quot; It is <em>not</em> no-code. It is engineers who still review, test, and
          type every line that ships — but who move 5–10× faster because they&apos;re directing, not typing.
        </p>
        <h2>Why it replaces Webflow for us</h2>
        <p>
          Webflow is brilliant for static sites. The moment a client needs auth, a Stripe checkout, a protected
          dashboard, real-time data, or a custom AI integration, you&apos;re gluing services together. Vibecoded Next.js
          handles all of that in one codebase — and you keep the whole thing.
        </p>
      </>
    ),
  },
  {
    slug: "next-js-vs-webflow-in-2026",
    title: "Next.js vs Webflow in 2026",
    excerpt:
      "If you&apos;re starting a brand, which platform actually gets you further? Honest trade-offs from a studio that ships both.",
    date: "2026-03-28",
    readMinutes: 9,
    category: "Engineering",
    accent: "#5eb3ff",
    gradient:
      "radial-gradient(120% 90% at 80% 20%, #5eb3ff 0%, transparent 55%), radial-gradient(120% 90% at 20% 80%, #7c86ff 0%, transparent 60%), linear-gradient(135deg, #1a0a2a, #0c0a1c)",
    content: (
      <>
        <p>
          We still ship Webflow projects — usually for marketing teams that want to edit copy without a deploy. But
          more and more, our clients are starting on Next.js from day one. Here&apos;s why, and when you should not.
        </p>
        <h2>When Webflow still wins</h2>
        <ul>
          <li>Marketing sites where the client&apos;s team updates copy weekly</li>
          <li>Static portfolios and landing pages with no user data</li>
          <li>Timelines under two weeks and zero engineering headcount</li>
        </ul>
        <h2>When Next.js is the answer</h2>
        <ul>
          <li>You need auth, payments, or any user-specific state</li>
          <li>You&apos;re integrating AI, realtime, or webhooks</li>
          <li>You want to own the codebase and scale without per-seat rent</li>
          <li>Performance budgets matter (Webflow&apos;s bundle rarely hits &lt;100kb JS)</li>
        </ul>
      </>
    ),
  },
  {
    slug: "gsap-scrolltrigger-patterns",
    title: "GSAP ScrollTrigger patterns we reuse every project",
    excerpt:
      "Four scroll-linked animation recipes — character reveals, pinned cards, horizontal scroll, and parallax headers — with full code.",
    date: "2026-03-15",
    readMinutes: 11,
    category: "Design",
    accent: "#7c86ff",
    gradient:
      "radial-gradient(120% 90% at 10% 10%, #7c86ff 0%, transparent 55%), radial-gradient(120% 90% at 90% 90%, #4f6bff 0%, transparent 60%), linear-gradient(135deg, #0a0d2a, #0c0a1c)",
    content: (
      <>
        <p>
          Every Desnis site ships with GSAP and Lenis. Over 40-ish projects, four patterns keep showing up. Here are
          the ones that do the heavy lifting.
        </p>
        <h2>1. Character reveals</h2>
        <p>
          Split the headline into characters, set each to <code>translateY(110%)</code>, animate to 0 with a stagger
          of 0.02–0.03s. Wrap in <code>overflow-hidden</code> so the overflow clips cleanly.
        </p>
        <h2>2. Sticky card stacking</h2>
        <p>
          Scale each card down by <code>1 − (n − i) × 0.04</code> and translate up by <code>−6(n − i)%</code> as it
          scrolls. Make them sticky so they stack on top of each other.
        </p>
        <h2>3. Horizontal scroll</h2>
        <p>
          Pin a section, translate its inner track by <code>−(scrollWidth − innerWidth)</code>, scrub with
          ScrollTrigger. Wrap in matchMedia to keep the behaviour desktop-only.
        </p>
        <h2>4. Parallax headers</h2>
        <p>
          Scrub a small <code>yPercent: −12</code> on the headline as the hero scrolls out. Subtle, but it gives the
          page depth for almost free.
        </p>
      </>
    ),
  },
  {
    slug: "pricing-websites-honestly",
    title: "How we price websites, honestly",
    excerpt:
      "No mystery packages, no &quot;contact for quote.&quot; Here&apos;s what a vibecoded site actually costs in 2026.",
    date: "2026-02-20",
    readMinutes: 7,
    category: "Business",
    accent: "#ff7a45",
    gradient:
      "radial-gradient(120% 90% at 80% 10%, #ff7a45 0%, transparent 55%), radial-gradient(120% 90% at 20% 90%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #1f0a1a, #0c0a1c)",
    content: (
      <>
        <p>
          The agency industry loves opaque pricing. We don&apos;t. Here&apos;s our actual 2026 rate card, with the math.
        </p>
        <h2>The three bands</h2>
        <p>
          <strong>Landing &amp; marketing sites</strong> — €5–12k, 10–20 days. One to ten pages, CMS-backed, Lighthouse
          100, launched.
        </p>
        <p>
          <strong>Brand + product sites</strong> — €12–30k, 3–5 weeks. Full brand system, multi-template site, headless
          CMS, light backend (contact, auth-gated resources, newsletter).
        </p>
        <p>
          <strong>Web apps &amp; commerce</strong> — €25–60k, 5–10 weeks. Real backend, auth, payments, dashboards,
          custom integrations.
        </p>
        <h2>Why it&apos;s cheaper than custom agencies</h2>
        <p>
          We vibecode. One senior engineer with the right tools now ships what took a team of four a year ago. We
          pass that gain straight to the client.
        </p>
      </>
    ),
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
