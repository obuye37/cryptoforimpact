'use client'

import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { Donors } from "@/data/donors";
import Marquee from "react-fast-marquee";
import { Slides } from "@/data/Slides";
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
          <Marquee className="relative" pauseOnHover direction="right" speed={30} >
          <Sliders ref={sliderRef} className="slider no-scrollbar relative flex overflow-hidden md:scroll-smooth">
              {/* Card 1 */}
            {Slides.map((slide, idx) =>
              <Link
                key={idx}
                className="group/card mx-1 relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
                href="#0"
              >
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 w-[350] h-[430px] max-h-[430px] min-h-[400px]">
                  {/* Image */}
                    <Image
                    className="inline-flex max-h-[300px] object-cover"
                    src={slide.imgUri}
                    width={350}
                    height={288}
                    alt={slide.alt}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </span>
                    </div>
                    <p className="text-indigo-200/65 text-wrap">
                      {slide.subTitle}
                    </p>
                  </div>
                </div>
              </Link> 
            )}
          </Sliders>
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-[300px] sm:gap-10 sm:h-[500px]">
        <h1 style={{color:'whitesmoke', fontSize:'2rem', textAlign: 'center', padding:'5rem 0 0 0'}}> OUR DONORS </h1>
        <div className='flex gap-1.5 p-2 sm:gap-6 sm:px-20 justify-center items-center flex-wrap'>
          <Marquee pauseOnHover speed={55} direction="left">
          {Donors.map(({name, img, uri}, idx) => 
              <Link href={uri} key={`${name+idx}`} className='flex flex-col gap-1.5 min-w-[110] sm:gap-5 sm:min-w-[200px] max-w-[200px] justify-center items-center '>
                <Image src={img} alt={`${name}-logo`} width={100} height={100} style={{borderRadius: '50%'}}/>
                <p className="text-center text-xs sm:text-sm">{name}</p>
              </Link>
          )}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
