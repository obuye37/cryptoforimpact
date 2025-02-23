import React from 'react'
import Image from 'next/image';
import videos from '@/data/videos';

export const metadata = {
    title: "Impacts - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};

const Impacts = () => {
  return (
    <div className='flex flex-wrap justify-around items-center p-10 bg-[url("/images/dotBg.webp")] bg-cover bg-center'>
      {videos.map(({name, desc, thumb}, idx) => (
      <div key={idx} className='flex items-center relative p-1.5 border-1 border-amber-300/80 rounded-2xl overflow-hidden'>
        <Image 
          src={thumb.imgSrc}
          alt={thumb.imgAlt}
          width={250}
          height={250}
          className='place-self-center rounded-2xl'
        />
        <h3 className={`${!name && "absolute h-full translate-[50%] left-0 top-0"}`}>{name ? name : "No file uploaded yet"}</h3>
        <p>{desc}</p>
      </div>
    ))}</div>
  )
}

export default Impacts