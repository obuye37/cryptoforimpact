'use client'

import React, {useRef} from "react";
import Carousel from "./carousel";


export default function AboutSection() {
  // const userAgent = navigator.userAgent
  // const isMobile = userAgent.match(/Android/g)
  // console.log("isMobile: ", isMobile)

  const sliderRef = useRef<HTMLDivElement |null>(null)
  return (
    <section className=" bg-gray-950/93 bg-blend-multiply bg-fixed bg-[url('/images/c4i6.jpg')] bg-no-repeat bg-[200%] bg-[cover] pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          {/* Section header */}
          <div className="relative overflow-hidde mx-auto w-full px-40 pb-10 md:pb-20 text-center">
            <div className="" />
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
          
          {/* <Sliders ref={sliderRef} className="slider no-scrollbar relative flex overflow-hidden md:scroll-smooth"> */}
              {/* Card 1 */}
            <Carousel />
          {/* </Sliders> */}
        </div>
      </div>
    </section>
  );
}
