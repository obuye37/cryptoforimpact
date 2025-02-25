import React, { ReactNode, HTMLProps } from 'react';
import useWindowSize from '@rooks/use-window-size';
import Carousel from './carousel';
import { Slide } from 'react-slideshow-image'


import 'react-slideshow-image/dist/styles.css'

const Sliders = () => {
  const {innerWidth} = useWindowSize()
  if(innerWidth !== null ) 
  if(innerWidth >= 1120) {
     return(
      <Slide slidesToScroll={1} slidesToShow={3} autoplay infinite pauseOnHover easing='ease' duration={2000}>
        <Carousel />
      </Slide>
     )
    } else if(innerWidth >= 720) {
      <Slide slidesToScroll={1} slidesToShow={2} autoplay infinite pauseOnHover easing='ease' duration={2000}>
         <Carousel  />
      </Slide>
   
  } else {
    <Slide slidesToScroll={1} slidesToShow={1} autoplay infinite pauseOnHover easing='ease' duration={2000}>
      <Carousel />
    </Slide>
    
  }
}

export default Sliders