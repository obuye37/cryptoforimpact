'use client'

import { VideoProps } from "@/app/api/videos/route";
import useWindowSize from "@rooks/use-window-size";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function HeroHome() {
  const { innerWidth } = useWindowSize()
  const [onHover, setOnHover] = useState<boolean>(false)
  const [videoArr, setVideoArr] = useState<VideoProps[]>([])
  const [hovered, setHovered] = useState<string>('')

useEffect(() => {
  async function fetchVideos() {
    try {
      const response = await fetch('/api/videos');
      const data = await response.json();
      setVideoArr(data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  fetchVideos();
}, []);

const handleMouseEnter: any = (title:string) => {
  setOnHover(true)
  setHovered(title)
}

console.log("_videos: ", videoArr)
   return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative text-center py-5 md:py-30 z-10">
            <p className="pb-4 text-xs md:text-lg">Reimagining Crypto for Hope. Love. Positivity</p>
            <h1
              className=" animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 text-3xl font-black not-first:md:font-semibold text-transparent md:text-8xl"
              data-aos="fade-up"
            >
              Crypto for Impact
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-1 text-md md:text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Giving Hope | Spreading Smiles | Creating Change | Turning Digital Assets into Acts of Kindness | As A Currency for Freedom | Kindness
              </p>
              <p className="text-sm md:text-2xl py-2 text-green-200/65 font-medium"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                This is What Crypto Means to Us
              </p>
            </div>
        </div>
        <div className="flex justify-center flex-col gap-2 items-center rounded-4x overflow-hidden">
          <iframe
            width={innerWidth != null ? innerWidth : 960}
            height={innerWidth != null && innerWidth <= 640 ? 200 : 480}
            src='https://www.youtube.com/embed/UQmceS9GJXI?si=xky052RG2Nj-c8ch'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          {videoArr ?
          <Marquee pauseOnHover pauseOnClick speed={25}>
           {videoArr.map(({title, description, videoId, thumbnail}, idx) => {
          const contentTitle = title.length > 40 ? `${title.slice(0, 20)}...` : title.replaceAll("&quot;", "")
          return (
        <Link href={`/impacts?vid=${videoId}`} onMouseEnter={()=>handleMouseEnter(title)} onMouseLeave={()=>setOnHover(false)} key={idx} className='flex flex-col items-center relative max-w-[250px] mx-2 w-[250px] max-h-[250px] h-[250px] shadow-[.5rem_1rem_3rem_#111222ee] rounded-xl overflow-hidden cursor-pointer'>
          <div className='w-full h-[80%] bg-no-repeat bg-[size:200%] bg-center' style={{backgroundImage: `url(${thumbnail})`}} />
          <div className='retlative w-full flex flex-col justify-center items-center text-center'>
            <h3 className={onHover ? 'hidden' : `${!title && "absolute h-full translate-[50%] left-0 top-0"} text-xs`}>{contentTitle ? contentTitle.toUpperCase()  : "No file uploaded yet"}</h3>
          </div>
          <div className={onHover && title == hovered ? 'flex justify-center items-center bg-gray-950/80 absolute top-0 w-full h-full text-center text-gray-100' : 'hidden'}>{description}</div>
        </Link>
      )})}
      </Marquee> : <>no videos</>
      }
        </div>
      </div>
    </section>
  );
}
