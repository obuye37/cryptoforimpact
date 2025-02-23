"use client"

import React, { useState } from 'react'
import { DollarSign, Droplet, Grid, Home, Link2, Users } from 'react-feather'
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Stats = () => {
    
  return (
    <div data-aos='zoom-in-right' data-aos-duration="500">
        <h1 className="text-4xl text-center pb-10">IMPACTS</h1>
        <div className="group/card mx-1.5 relative h-full overflow-hidden rounded-2xl bg-transparent px-10 flex gap-3 justify-center flex-wrap">
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px] py-5">
                {/* Image/Icon */}
                <DollarSign 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                        $
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={40000}
                        />+
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Donated to Charity
                </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px]">
                {/* Image/Icon */}
                <Users 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={30}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl justify-center items-center">
                        $
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={50}
                            className='flex justify-center items-center self-center'
                        />+
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Donated food items to 50+ Families
                </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px]">
                {/* Image/Icon */}
                <Home 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={30}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                        $
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={306}
                        />+
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    School supplies Donated to students 
                </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px]">
                {/* Image/Icon */}
                <Grid 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={30}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                        $
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={1}
                        />
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                1 school rebuild 
                </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px]">
                {/* Image/Icon */}
                <Droplet 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={30}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                        $
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={1}
                        />
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                    Borehole donated to a village that lacks clean water
                </p>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center border-double border-2 border-indigo-300 rounded-2xl overflow-hidden w-[25%] h-[200px] max-h-[200px]">
                {/* Image/Icon */}
                <Link2 
                    className='animate-pulse'
                    color='whitesmoke'
                    size={50}
                />
                {/* Content */}
                <div className="p-6">
                <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none hover:bg-gray-800/60">
                    <span className="flex w-full bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-4xl">
                        <AnimatedNumbers 
                            includeComma
                            transitions={(i)=>({type:"spring", duration: i + 0.3})}
                            animateToNumber={15}
                        />+
                    </span>
                    </span>
                </div>
                <p className="text-indigo-200/65 text-wrap text-center">
                Crypto projects and individuals, donors/partners
                </p>
                </div>
            </div>
        </div> 
    </div>
    
  )
}

export default Stats

 
// Over $40,000 donated

//  donated food items to 50+ families 

// Donated school supplies to 306+ students 

// 1 school rebuild 

// 1 Borehole donated to a village that lacks clean water 

//  crypto projects and individuals as donors/partners 15+