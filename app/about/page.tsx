import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutManifesto from "@/components/AboutManifesto";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import Numbers from "@/components/Numbers";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About — Desnis",
  description:
    "Desnis is a small, senior studio that vibecodes Next.js websites with real backend, auth, and custom logic. Meet the people and principles behind it.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About · Est. 2020"
        title={
          <>
            <div className="overflow-hidden">
              <div data-line>Three people.</div>
            </div>
            <div className="overflow-hidden">
              <div data-line>
                <span className="italic">One</span> codebase.
              </div>
            </div>
          </>
        }
        description="We're a small studio that writes, designs, and ships everything in-house. No account managers, no handoffs — you talk to the people building the thing."
        meta={[
          { label: "Based", value: "Belgrade, RS" },
          { label: "Working", value: "Worldwide" },
          { label: "Founded", value: "2020" },
          { label: "Team size", value: "3 senior" },
        ]}
      />
      <AboutManifesto />
      <AboutValues />
      <AboutTeam />
      <Numbers />
      <Contact />
    </main>
  );
}
