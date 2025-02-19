import { Collapse } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const MobileMenu = ({openNav}: {openNav:boolean}) => {
  return (
    <Collapse open={openNav} className={`${openNav === false ? 'close' : 'mobileMenu'} w-80 h-full bg-gray-950 flex flex-col absolute left-4.5 rounded-2xl`}>
        <div className="flex flex-1 flex-col items-start justify-start p-7 gap-4 border-b">
            <Link
                href="/about-us"
            >
                About C4i
            </Link>
            <Link
                href="/impact"
            >
                Impact
            </Link>
            <Link
                href="/blog"
            >
                Blog
            </Link>
        </div>
        <div className="flex flex-col items-start justify-start p-7 gap-4">
            <Link
                href="/donate"
            >
                Donate
            </Link>
            <Link
                href="/buyC4i"
            >
                Buy C4i
            </Link>
        </div>
    </Collapse>
  )
}

export default MobileMenu