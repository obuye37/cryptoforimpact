import React, { useRef, useEffect } from 'react'
import useWindowSize from '@rooks/use-window-size';

interface VideoModalProps {
  name:string;
  video:string;
  pauseVid: string;
}


const VideoModal = ({name, video, pauseVid}: VideoModalProps) => {
  const {innerWidth} = useWindowSize()
  const screenWidth = innerWidth != null ? innerWidth : 400

  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const pauseVideo = () => {
      console.log("effect ran ", pauseVid)
      if(pauseVid == 'pause') {
        if (iframeRef.current) {
          console.log(iframeRef.current.contentWindow)
        const video = iframeRef.current.contentWindow?.postMessage('pause', "*" ) // document.querySelector('video');
        // if (video) {
        //   video.pause();
        // }
      }
      }
    }
    return () => {
      pauseVideo()
    }
  }, [pauseVid])
  
 
  
  return (  
    <div className='max-w-[80%] max-h-[80%] flex flex-col justify-center items-center'>
      <iframe ref={iframeRef} width={screenWidth < 720 ? "500" : "800"} height={screenWidth < 720 ? "300" : "500"} src={`https://www.youtube.com/embed/${video}?version=3&enablejsapi=1`} title={`${name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
   
  ) 
}

export default VideoModal
