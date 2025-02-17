import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { Children } from 'react';
 
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div>
        
      </div>
    </Carousel>
  );
}