'use client'
import React, {RefObject, useEffect, useState} from 'react'
import { Slide } from '@/data/types';

interface carouselNavProps {
  slides:Slide[];
  slideRef:RefObject<HTMLDivElement | null>
}

const CarouselNav = ({ slides, slideRef } : carouselNavProps ) => {
    const [curr, setCurr] = useState<number>(0)
    const sliderId = slideRef.current?.id

    const prev = () => {
      console.log("slides:", slides.length)
      setCurr((prev) => Math.max(prev - 1, 0));
    }
        
    
      const next = () =>{
        console.log("slides:", slides.length) 
        setCurr((prev) => Math.min(prev + 1, slides.length - 1));
      }

      useEffect(()=>{
        if(slideRef.current) {
          slideRef.current.scrollTo({
            left: curr * (slideRef.current.clientWidth),
            behavior: 'smooth'
          })
        }
      },[curr, slideRef])
       

      return (
        <div className='flex justify-between items-center px-5 absolute z-[999] w-full h-full top-0'>
            <button id='prevBtn' className='rounded-sm text-gray-950 hover:bg-gray-950/50 hover:text-white bg-amber-300/10 py-2 px-4 cursor-pointer' onClick={prev}>&#x276E;</button>
            <button id='nextBtn' className='rounded-sm text-gray-950 hover:bg-gray-950/50 hover:text-white bg-amber-300/10 py-2 px-4 cursor-pointer' onClick={next}>&#x276F;</button>
        </div>
      )
}

export default CarouselNav