import { Collapse } from '@material-tailwind/react'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface showMobileMenuProps {
    openNav: boolean,
    menuState: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({openNav, menuState}: showMobileMenuProps) => {
  return (
    <Collapse open={openNav} className={`${openNav === false ? 'close' : 'mobileMenu'} w-80 h-full bg-gray-950 flex flex-col absolute left-4.5 rounded-2xl`}>
        <div className="flex flex-1 flex-col items-start justify-start p-7 gap-4 border-b">
            <Link
                href="/about-us"
                onClick={()=>menuState(false)}
            >
                About C4i
            </Link>
            <Link
                href="/impacts"
                onClick={()=>menuState(false)}
            >
                Impact
            </Link>
            <Link
                href="/blog"
                onClick={()=>menuState(false)}
            >
                Blog
            </Link>
        </div>
        <div className="flex flex-col items-start justify-start p-7 gap-4">
            <Link
                href="/donate"
                onClick={()=>menuState(false)}
            >
                Donate
            </Link>
            <Link
                href="/buyC4i"
                onClick={()=>menuState(false)}
            >
                Buy C4i
            </Link>
        </div>
    </Collapse>
  )
}

export default MobileMenu