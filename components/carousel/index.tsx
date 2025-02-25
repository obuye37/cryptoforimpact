import React from 'react'
import { Slide } from 'react-slideshow-image'
import Image from "next/image";
import Link from "next/link";
import { Slides } from "@/data/Slides";


import 'react-slideshow-image/dist/styles.css'

const Carousel = ({...props}) => {
  return (
    <Slide { ...props } autoplay infinite pauseOnHover easing='ease' duration={2000}>
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
  </Slide>
  )
}

export default Carousel