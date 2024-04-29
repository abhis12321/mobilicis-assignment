import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='leading-[3.4rem] flex items-center justify-between px-7 py-2 bg-gradient-to-b from-gray-950 to-gray-800 text-white'>
      <div className="text-3xl font-serif leading-[3.4rem] bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent font-extrabold">Japan</div>
      <div className="hidden md:flex lg:gap-4">
        <Link href={'/'} className='hover:bg-cyan-950/40 hover:shadow-[0_0_3px_white] rounded-xl text-center min-w-28 px-4'>Home</Link>
        <Link href={''} className='hover:bg-cyan-950/40 hover:shadow-[0_0_3px_white] rounded-xl text-center min-w-28 px-4'>Job Listings</Link>
        <Link href={''} className='hover:bg-cyan-950/40 hover:shadow-[0_0_3px_white] rounded-xl text-center min-w-28 px-4'>About Japan</Link>
        <Link href={''} className='hover:bg-cyan-950/40 hover:shadow-[0_0_3px_white] rounded-xl text-center min-w-28 px-4'>Contact</Link>
      </div>
    </div>
  )
}
