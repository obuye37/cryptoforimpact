'use client'

import React from 'react'
import { Donors } from "@/data/donors";
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from "@rooks/use-window-size";

const Partners = () => {
  const { innerWidth } = useWindowSize()
  const screenWidth = innerWidth !== null ?  innerWidth : 150
  const screenHeight = innerHeight !== null ? innerHeight : 150

  return (
    <div className="flex flex-col gap-2 h-[300px] sm:gap-10 sm:h-[500px] justify-center items-center">
        <h1 style={{color:'whitesmoke', fontSize:'2rem', textAlign: 'center', padding:'5rem 0 0 0'}}> OUR DONORS </h1>
        <div className="w-[90%] sm:px-20 justify-center items-center">
          <Marquee pauseOnHover speed={55} direction="left">
          {Donors.map(({name, img, uri}, idx) => 
              <Link href={uri} key={`${name+idx}`} className='flex flex-col gap-1.5 min-w-[110] sm:gap-5 sm:min-w-[200px] max-w-[200px] justify-center items-center '>
                <Image src={img} alt={`${name}-logo`} width={screenWidth} height={screenHeight} style={{borderRadius: '50%'}}/>
                <p className="text-center text-xs sm:text-sm">{name}</p>
              </Link>
          )}
          </Marquee>
        </div>
      </div>
  )
}

export default Partners