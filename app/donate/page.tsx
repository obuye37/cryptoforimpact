import React from 'react'

export const metadata = {
    title: "Donate - Crypto4Impact",
    description: "Re-imaging & Touching Lives with Crypto",
};

const Impacts = () => {
  return (
    <>
      <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
        <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          Transform and Change Lives with Your Donation
        </span>

        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Let's Make Impact Together
        </h2>
        
        <p className="text-lg text-indigo-200/65">
          At Crypto for Impact, we are on a mission to transform lives through the power of crypto. Your donation isn’t just a transaction—it’s a beacon of hope for those in need. Imagine a world where digital assets do more than trade; they feed the hungry, shelter the homeless, and provide education to those who dream of a brighter future. By giving today, you become a part of this movement—one that uses blockchain for real-world impact, ensuring transparency, efficiency, and direct aid to the most vulnerable. Join us in proving that crypto is more than hype—it’s a force for freedom, love, and kindness. 
        </p>
      </div>
      <div className='text-5xl text-center p-6'>Donate now and make a difference!</div>
      <div className='text-center flex justify-center items-center gap-5'>
        <div className='border-1 p-8'>
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">SOLANA - SOL</h1>
          <p>ewuhfehhfhepoiepjijiejpqjoijpqijproi</p>
        </div>

        <div className='border-1 p-8'>
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">ETHEREUM - ETH</h1>
          <p>ewuhfehhfhepoiepjijiejpqjoijpqijproi</p>  
        </div>

        <div className='border-1 p-8'>
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">BINANCE SMART CHAIN - BSC </h1>
          <p>ewuhfehhfhepoiepjijiejpqjoijpqijproi</p>
        </div>  
      </div>
      
    </>
  )
}

export default Impacts