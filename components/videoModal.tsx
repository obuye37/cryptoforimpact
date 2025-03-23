import React from 'react'

interface VideoModalProps {
  name:string;
  video:string;
}


const VideoModal = ({name, video}: VideoModalProps) => {
  return (
    <iframe width="800" height="600" src={`https://www.youtube.com/embed/${video}`} title={`${name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
  )
}

export default VideoModal
