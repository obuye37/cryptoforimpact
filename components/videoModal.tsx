import React from 'react'
import useWindowSize from '@rooks/use-window-size';

interface VideoModalProps {
  name:string;
  video:string;
}


const VideoModal = ({name, video}: VideoModalProps) => {
  const {innerWidth, innerHeight} = useWindowSize()
  const screenWidth = innerWidth != null ? innerWidth : 400
  
  return (  
    <div className='max-w-[80%] max-h-[80%] flex flex-col justify-center items-center'>
      <iframe width={screenWidth < 720 ? "500" : "800"} height={screenWidth < 720 ? "300" : "500"} src={`https://www.youtube.com/embed/${video}`} title={`${name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
   
  ) 
}

export default VideoModal
