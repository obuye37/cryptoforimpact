export const metadata = {
  title: "Home - Crypto4Impact",
  description: "Re-imaging & Touching Lives with Crypto",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import AboutSection from "@/components/aboutSection";
import Cta from "@/components/cta";
import Partners from "@/components/partners";
import Statistics from "@/components/statistics"

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <AboutSection />
      <Statistics />
      <Partners />
      <Cta />
    </>
  );
}
