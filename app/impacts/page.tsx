'use client'

import React,{ useState, useEffect } from 'react'
import Image from 'next/image';
import { GetVideos } from '@/data/videos';
import VideoModal from '@/components/videoModal';
import Statistics from '@/components/statistics';
import { VideoProps } from '@/data/videos';

 const metadata = {
    title: "Impacts - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};


const Impacts = () => {

const [modalOpen, setModalOpen] = useState(false)
const [videoName, setVideoName] = useState('')
const [vidSrc, setVidSrc] = useState('')
const [videos, setVideos] = useState<VideoProps[]>([])

const handleModalVideo = (title:string, videSrc:string) => {
  setModalOpen(true)
  setVidSrc(videSrc)
  setVideoName(title)
}

useEffect(() => {
  const allVids = async () => {
    const vids = await GetVideos()
    setVideos(vids)
    // console.log("vid: ", vids)
  }
  allVids()
}, [])

console.log("videosssssss: ", videos.map(({title}) => title.length))

  return (
    <>
      <div  className='relative flex gap-1 flex-wrap justify-around items-center p-10 bg-[url("/images/dotBg.webp")] bg-cover sm:h-screen bg-center'>
        {videos.map(({title, description, videoId, thumbnails}, idx) => {
          const contentTitle = title.length > 20 ? `${title.replaceAll("&quot;", "").slice(0, 20)}...` : title
          return (
        <div onMouseEnter={()=>console.log("mouse entered '" + title +"'")} key={idx} className='flex flex-col items-center relative max-w-[250px] w-[250px] max-h-[250px] h-[250px] shadow-[.5rem_1rem_3rem_#111222ee] rounded-xl overflow-hidden cursor-pointer' onClick={() => handleModalVideo(title, videoId) }>
          <div className='w-full h-[80%] bg-no-repeat bg-[size:200%] bg-center' style={{backgroundImage: `url(${thumbnails.url})`}} />
            {/* <Image 
            src={thumbnails['url']}
            alt={title}
            width={300}
            height={250}
            className='place-self-center rounded-b-2xl object-contain'
          />
          </div> */}
          <div className='w-full h-[20%] flex flex-col justify-center items-center'>
            <h3 className={`${!title && "absolute h-full translate-[50%] left-0 top-0"} text-xs h-[20%]`}>{contentTitle ? contentTitle.toUpperCase()  : "No file uploaded yet"}</h3>
            {/* <p>{description}</p> */}
          </div>
          
          
        </div>
      )})}
      <div className={`${modalOpen ? "flex" : "hidden"} absolute w-full h-full bg-gray-950/85 justify-center items-center top-0`} onClick={()=>setModalOpen(false)}>
        <VideoModal name={videoName} video={vidSrc} pauseVid={modalOpen ? "pause" : ""} />
      </div>
    </div>

    <hr className='my-3'/>
    
    <Statistics />
      
    </>
    
  )
}

export default Impacts