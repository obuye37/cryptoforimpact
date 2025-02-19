'use client'
import React, {RefObject, useRef, useState, useEffect} from 'react'
import copyIcon from '@/public/images/copy.svg'
import Image from 'next/image';

const Impacts = () => {
  const SolRef = useRef<HTMLParagraphElement | null>(null)
  const EthRef = useRef<HTMLParagraphElement | null>(null)
  const BSCRef = useRef<HTMLParagraphElement | null>(null)
  const [copySuccess, setCopySuccess] = useState({
    success: false,
    text: ''
  })

  const SolAdress = 'ewuhfehhfhepoiepjdddddddddddddddddddddd'
  const EthAddress = 'ewuhfehhfhepoiepjijiasdfghjkjhgfrfffffffff'
  const BSCAddress = 'ewuhfehhfhepoiepjijiejpqjoijpqijproi'

  const copyAddress = (AddrRef:RefObject<HTMLParagraphElement | null>) => {
    const textToCopy = AddrRef.current?.innerText
    if(!textToCopy) return {success:false, text:''}
      navigator.clipboard.writeText(textToCopy)
      return {success:true, text:textToCopy}
  }

  useEffect(() => {
    if (copySuccess.success) {
      const timer = setTimeout(() => setCopySuccess({success:false, text:''}), 2000); // Hide after 2s
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);
  


  return (
    <div className='p-5 sm:pb-10'>
      <div
      data-aos='fade-up'
      data-aos-delay='300'
      className="flex sm:h-[70vh] justify-center flex-col items-center mx-auto max-w-3xl text-center">
        <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          Transform and Change Lives with Your Donation
        </span>

        <h2
        data-aos='fade-up'
        data-aos-delay='700'
        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Let's Make Impact Together
        </h2>
        
        <p
        data-aos='fade-up'
        data-aos-delay='1000'
        className="w-full text-sm sm:text-lg text-indigo-200/65">
          At Crypto for Impact, we are on a mission to transform lives through the power of crypto. Your donation isn’t just a transaction—it’s a beacon of hope for those in need. Imagine a world where digital assets do more than trade; they feed the hungry, shelter the homeless, and provide education to those who dream of a brighter future. By giving today, you become a part of this movement—one that uses blockchain for real-world impact, ensuring transparency, efficiency, and direct aid to the most vulnerable. Join us in proving that crypto is more than hype—it’s a force for freedom, love, and kindness. 
        </p>
      </div>

      <div className=' text-lg sm:text-4xl text-center p-6 bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-black'>Donate now and make a difference!</div>

      <div className='relative text-center flex justify-center items-center gap-5' >
        <div className={`relative border-1 p-8 ${copySuccess.success ? `before:w-auto before:bg-gray-950 before:text-amber-50 ${copySuccess.text === SolAdress ? "before:content-['copied']" : ""} before:mx-2 before:absolute before:px-2 before:py-1 before:h-auto before:top-0 before:right-10` : ""}`}>
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50" inert>SOLANA(SOL)</h1>
          <p ref={SolRef}>{SolAdress}</p>
          
          <Image
          priority
          src={copyIcon}
          height={20}
          width={20}
          alt='copy-icon'
          className='absolute right-2 top-2 cursor-pointer' 
          onClick={()=>{ 
            const {success, text} = copyAddress(SolRef)
            setCopySuccess({success, text})
        }}
          />
      
        </div>

        <div className={`relative border-1 p-8 ${copySuccess.success ? `before:w-auto before:bg-gray-950 before:text-amber-50 ${copySuccess.text === EthAddress ? "before:content-['copied']" : ""} before:mx-2 before:absolute before:px-2 before:py-1 before:h-auto before:top-0 before:right-10` : ""}`}>
          <Image
            priority
            src={copyIcon}
            height={20}
            width={20}
            alt='copy-icon'
            className='absolute right-2 top-2 cursor-pointer' 
            onClick={()=>{ 
              const {success, text} = copyAddress(EthRef)
              setCopySuccess({success, text})
          }}
          />
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50" inert>ETHEREUM(ETH)</h1>
          <p ref={EthRef}> {EthAddress} </p> 

        </div>

        <div className={`relative border-1 p-8 ${copySuccess.success ? `before:w-auto before:bg-gray-950 before:text-amber-50 ${copySuccess.text === BSCAddress ? "before:content-['copied']" : ""} before:mx-2 before:absolute before:px-2 before:py-1 before:h-auto before:top-0 before:right-10` : ""}`}>
          <Image
            priority
            src={copyIcon}
            height={20}
            width={20}
            alt='copy-icon'
            className='absolute right-2 top-2 cursor-pointer' 
            onClick={()=>{ 
              const {success, text} = copyAddress(BSCRef)
              setCopySuccess({success, text})
          }}
          />
          <h1 className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50" inert>BINANCE SMART CHAIN(BSC) </h1>
          <p ref={BSCRef}>{BSCAddress}</p>
        </div>  
      </div>
      
    </div>
  )
}

export default Impacts