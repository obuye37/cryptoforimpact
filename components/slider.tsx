import React, { ReactNode, HTMLProps } from 'react';
import useWindowSize from '@rooks/use-window-size';
import Carousel from './carousel';

const Sliders = () => {
  const {innerWidth} = useWindowSize()
  if(innerWidth !== null ) 
  if(innerWidth >= 1120) {
     return(
      <Carousel slidesToScroll={1} slidesToShow={3}  />
     )
    } else if(innerWidth >= 720) {
    <Carousel slidesToScroll={1} slidesToShow={2} />
  } else {
    <Carousel slidesToScroll={1} slidesToShow={1} />
  }
}

export default Sliders