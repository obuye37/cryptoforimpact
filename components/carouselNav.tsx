'use client'
import React, {useState} from 'react'
import { Slide } from '@/app/data/types';

const CarouselNav = ({ slides } : {slides:Slide[]} ) => {
    const [curr, setCurr] = useState<number>(0)
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    
      const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

      return (
        <div className='flex justify-between items-center px-5 absolute translate-y-[50%] bg-amber-900 z-[999px]'>
            <button id='prevBtn' className='pb-2.5 rounded-2xl text-amber-300/5 hover:text-amber-200' onClick={prev}>next</button>
            <button id='nextBtn' className='pb-2.5 rounded-2xl text-amber-300/5 hover:text-amber-200' onClick={next}>prev</button>
        </div>
      )
}

export default CarouselNav