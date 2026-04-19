import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogGrid from "@/components/BlogGrid";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Blog — Desnis",
  description:
    "Notes on vibecoding, engineering, design, and the business of running a modern web studio.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            <div className="overflow-hidden">
              <div data-line>Notes from</div>
            </div>
            <div className="overflow-hidden">
              <div data-line>
                the <span className="italic">studio</span>.
              </div>
            </div>
          </>
        }
        description="Vibecoding tactics, engineering deep-dives, pricing transparency, and the occasional rant about Webflow plugins. New things when we have something worth saying."
        meta={[
          { label: "Focus", value: "Vibecoding · Next.js · GSAP" },
          { label: "Cadence", value: "Roughly monthly" },
        ]}
      />
      <BlogGrid />
      <Contact />
    </main>
  );
}
