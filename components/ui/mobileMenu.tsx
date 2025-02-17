import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
  return (
    <div className='mobileMenu w-80 h-full bg-indigo-950/95 flex flex-col absolute'>
        <div className="flex flex-1 flex-col items-start justify-start p-7 gap-4 border-b">
            <Link
                href="/"
            >
                About C4i
            </Link>
            <Link
                href="/"
            >
                Impact
            </Link>
            <Link
                href="/"
            >
                Blog
            </Link>
        </div>
        <div className="flex flex-col items-start justify-start p-7 gap-4">
            <Link
                href="/"
            >
                Donate
            </Link>
            <Link
                href="/"
            >
                Buy C4i
            </Link>
        </div>
    </div>
  )
}

export default MobileMenu