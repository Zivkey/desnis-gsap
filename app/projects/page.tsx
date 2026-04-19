import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Projects — Desnis",
  description:
    "Selected work from Desnis — Next.js websites, web apps, e-commerce storefronts and brand systems, all vibecoded.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects · 2023 — 2025"
        title={
          <>
            <div className="overflow-hidden">
              <div data-line>The receipts,</div>
            </div>
            <div className="overflow-hidden">
              <div data-line>
                <span className="italic">not</span> the pitch.
              </div>
            </div>
          </>
        }
        description="Every project here was vibecoded end-to-end — brand, design, frontend, backend, auth, payments, CMS. Click through to see what went into them."
        meta={[
          { label: "Shipped", value: "40+ projects" },
          { label: "Verticals", value: "SaaS, fintech, retail" },
          { label: "Avg. build", value: "14 days" },
          { label: "Code ownership", value: "100% yours" },
        ]}
      />
      <ProjectsGrid />
      <ClientLogos />
      <Contact />
    </main>
  );
}
