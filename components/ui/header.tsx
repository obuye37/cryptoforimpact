"use client";

import Link from "next/link";
import Logo from "./logo";
import HamburgerMenu from '@/public/images/burger-menu-right.svg'
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
        {/* Site branding */}
        <Link href='/' className="flex flex-1 items-center">
          <Logo />
        </Link>

        {/* Desktop sign in links */}
        <ul className="flex flex-1 items-center justify-end gap-3">
          <li>
            <a
              href="/"
              className="sm:inline-block hidden btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              href="/"
              className="btn-sm bg-linear-to-t hidden sm:inline-block from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
            >
              Buy C4i
            </a>
          </li>
          <li className='xl:hidden'>
            <Image src={HamburgerMenu} width={32} height={32} alt="hamburger menu" />
          </li>
        </ul>
      </div>
      </div>
    </header>
  );
}
