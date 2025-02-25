import React from 'react'
import useWindowSize from '@rooks/use-window-size'
import { Slide } from 'react-slideshow-image'

const Statistics = ({children}: {children:React.ReactNode} ) => {
  const { innerWidth } = useWindowSize()
  if(innerWidth != null) {
    if(innerWidth <= 720) {
      return (
      <Slide slidesToScroll={1} slidesToShow={1} canSwipe easing='linear' vertical >
        {children}
      </Slide>
      )
    }
    return <>{children}</>
  }
  return <></>
}

export default Statistics