import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyVibecoding from "@/components/WhyVibecoding";
import Services from "@/components/Services";
import Numbers from "@/components/Numbers";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <WhyVibecoding />
      <Services />
      <Numbers />
      <Work />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
