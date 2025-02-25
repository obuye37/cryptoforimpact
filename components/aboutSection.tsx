'use client'

import React, {useRef} from "react";
import Sliders from "./slider";


export default function AboutSection() {
  // const userAgent = navigator.userAgent
  // const isMobile = userAgent.match(/Android/g)
  // console.log("isMobile: ", isMobile)

  const sliderRef = useRef<HTMLDivElement |null>(null)
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span data-aos='fade' className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm md:text-[1rem]">
              CRYPTO IS HUMANITY. CRYPTO IS POSITIVITY.
              </span>
            </div>
            <h2 data-aos="fade-up" className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-4xl">
              ABOUT US
            </h2>
            <p data-aos="fade-up" data-aos-delay='300' className="text-sm md:text-lg text-indigo-200/65">
            Crypto for Impact is a crypto charity brand dedicated to using crypto to impact humanity positively. We believe Crypto isn't just about hype or the money made. We believe Crypto is a tool to bless lives, put smiles on the faces of the needy, give hope to the hopeless. We believe Crypto is about freedom, peace, love, and kindness.
            </p>
          </div>
          {/* <Marquee className="relative" pauseOnHover direction="right" speed={30} >
          <Sliders ref={sliderRef} className="slider no-scrollbar relative flex overflow-hidden md:scroll-smooth">
              {/* Card 1 */}
            <Sliders />
         {/* </Sliders>
          </Marquee> }*/}
        </div>
      </div>
    </section>
  );
}
