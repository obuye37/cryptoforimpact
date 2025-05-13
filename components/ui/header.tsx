"use client";
import React, {useState} from "react";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const handleSlideIn = () => {
    console.log("hamburger clicked")
    setShowMobileMenu(!showMobileMenu)}
  return (
    <header className="z-30 mt-2 py-2 bg-gray-900 w-full md:mt-5 sticky top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
        {/* Site branding */}
        <Link href='/' className="flex flex-2" onClick={()=>setShowMobileMenu(false)}>
          <Logo />
        </Link>

        {/* Desktop sign in links */}
        <div className="flex flex-8 items-center justify-start gap-3">
          <Link
            href="/about-us"
            className="sm:inline-block hidden btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
          >
            About C4i
          </Link>
           
          <Link
            href="/impacts"
            className="sm:inline-block hidden btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
          >
            Impact
          </Link>

          <Link
            href="/blog"
            className="sm:inline-block hidden btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
          >
            Blog
          </Link>
        </div>

        <div className=" hidden sm:flex"> CA: <small>EXN7bKgFX2UHXf1GYzbj29niyyptikh3NyXxkShNNsaV</small> </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Link
            href="/donate"
            className="sm:inline-block hidden btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
          >
            Donate
          </Link>
           
          <Link
            href="/buyC4i"
            className="btn-sm bg-linear-to-t hidden sm:inline-block from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
          >
            Buy C4i
          </Link>
        </div>
        <div className='flex sm:hidden'>
          {showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 cursor-pointer"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={handleSlideIn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              onClick={handleSlideIn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
          
      </div>
      </div>
      {showMobileMenu && <MobileMenu openNav={showMobileMenu} menuState={setShowMobileMenu} />}
    </header>
  );
}
