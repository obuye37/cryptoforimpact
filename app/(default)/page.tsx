export const metadata = {
  title: "Home - Crypto4Impact",
  description: "Re-imaging & Touching Lives with Crypto",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import AboutSection from "@/components/aboutSection";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <AboutSection />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
