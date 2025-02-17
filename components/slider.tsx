import React, { ReactNode, HTMLProps } from 'react';

interface SliderProps extends HTMLProps <HTMLDivElement> {
  children: ReactNode
}

const Sliders = ({ children, ...props }: SliderProps) => {

  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default Sliders