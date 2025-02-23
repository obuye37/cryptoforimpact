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
import Statistics from "@/components/statistics";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <AboutSection />
      <div data-aos='zoom-in-right'data-aos-duration="3000" data-aos-easeing='ease-in-sine'>
        <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
        <Statistics />
      </div>
      <Partners />
      <Cta />
    </>
  );
}
