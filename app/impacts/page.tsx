'use client'

import React,{ useState } from 'react'
import Image from 'next/image';
import videos from '@/data/videos';
import VideoModal from '@/components/videoModal';
import Statistics from '@/components/statistics';

 const metadata = {
    title: "Impacts - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};
const Impacts = () => {
const [modalOpen, setModalOpen] = useState(false)
const [videoName, setVideoName] = useState('')
const [vidSrc, setVidSrc] = useState('')

const handleModalVideo = (name:string, videSrc:string) => {
  setModalOpen(true)
  setVidSrc(videSrc)
  setVideoName(name)
}

  return (
    <>
      <Statistics />
      <div className='flex flex-wrap justify-around items-center p-10 bg-[url("/images/dotBg.webp")] bg-cover bg-center'>
      {videos.map(({name, desc, thumb, vidSrc}, idx) => (
      <div key={idx} className='flex flex-col items-center relative p-1.5 border-1 border-amber-300/80 rounded-2xl overflow-hidden cursor-pointer' onClick={() => handleModalVideo(name, vidSrc) }>
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
    ))}
    <div className={`${modalOpen ? "flex" : "hidden"} absolute w-full h-full bg-gray-950/85 justify-center items-center`} onClick={()=>setModalOpen(false)} >
      <VideoModal name={videoName} video={vidSrc} />
    </div>
    
    </div>
    </>
    
  )
}

export default Impacts