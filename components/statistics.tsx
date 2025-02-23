"use client"

import React, { useState } from 'react'
import { DollarSign, Droplet, Grid, Home, Link2, Users } from 'react-feather'
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Stats = () => {
    
  return ( 
    <>
        <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
        <div data-aos='zoom-in-right' data-aos-duration="500" className="group/card relative h-full overflow-hidden rounded-2xl bg-transparent px-10 flex gap-3 justify-center flex-wrap">
            <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <DollarSign
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                    $
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={40000} />+
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Donated to Charity
                </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <Users
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl" >
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={50} /> +
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Families received food item donations
                </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hiddenw-full w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <Home
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={306} />+
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Donated to Charity
                </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <Grid
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={1} />
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    School Rebuilt
                </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <Droplet
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={1} />
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Borehole Donated
                </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-full sm:w-[25%] h-[200px] max-h-[200px] py-5">
              {/* Image/Icon */}
                <Link2
                  className='animate-pulse'
                  color='whitesmoke'
                  size={50} />
                {/* Content */}
                <div className="flex justify-center items-center w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                    <AnimatedNumbers
                        includeComma
                        transitions={(i) => ({ type: "spring", duration: i + 0.3 })}
                        animateToNumber={15} />+
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Donors/Partners
                </p>
          </div>
      </div>
      </> 
  )
}

export default Stats

 
// Over $40,000 donated

//  donated food items to 50+ families 

// Donated school supplies to 306+ students 

// 1 school rebuild 

// 1 Borehole donated to a village that lacks clean water 

//  crypto projects and individuals as donors/partners 15+