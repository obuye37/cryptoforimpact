import React from 'react'

interface VideoModalProps {
  name:string;
  video:string;
}


const VideoModal = ({name, video}: VideoModalProps) => {
  return (  
    <div className='max-w-[80%] max-h-[80%] flex flex-col justify-center items-center'>
      <iframe width="800" height="600" src={`https://www.youtube.com/embed/${video}`} title={`${name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
   
  ) 
}

export default VideoModal
