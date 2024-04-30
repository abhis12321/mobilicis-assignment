"use client"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    const handleRight = () => {
        document.querySelector('.right-navbar').classList.toggle('hidden');
        document.querySelector('.cutX').classList.toggle('hidden');
        document.querySelector('.hamberger').classList.toggle('hidden');
    }


    return (
        <div className='leading-[3rem] flex items-center justify-between px-7 py-1 bg-gradient-to-b from-gray-950 to-gray-800'>
            <div className="text-3xl font-serif leading-[3.4rem] bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent font-extrabold">Japan</div>
            <div className="right-navbar hidden md:flex flex-col md:flex-row lg:gap-4 bg-gradient-to-r from-slate-800 to-gray-950 md:[background:none] border-l-2 border-gray-700 md:border-none min-w-[200px] min-h-[100vh] md:min-h-fit fixed md:static top-0 right-0">
                <div className="text-4xl hover:text-red-800 text-center cursor-pointer mt-3" onClick={handleRight}>
                    <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
                </div>
                <div className="w-full md:w-fit flex items-center justify-center">
                    <Link href={'/'} className='hover:bg-lime-950/50 md:hover:bg-red-950/20 md:hover:shadow-[0_0_3px_white] text-center w-full md:min-w-28 md:px-4 md:rounded-xl'>Home</Link>
                </div>
                <div className="w-full md:w-fit flex items-center justify-center">
                    <Link href={'/job-listings'} className='hover:bg-lime-950/50 md:hover:bg-red-950/20 md:hover:shadow-[0_0_3px_white] text-center w-full md:min-w-28 md:px-4 md:rounded-xl'>Job Listings</Link>
                </div>
                <div className="w-full md:w-fit flex items-center justify-center">
                    <Link href={'/about'} className='hover:bg-lime-950/50 md:hover:bg-red-950/20 md:hover:shadow-[0_0_3px_white] text-center w-full md:min-w-28 md:px-4 md:rounded-xl'>About Japan</Link>
                </div>
                <div className="w-full md:w-fit flex items-center justify-center">
                    <Link href={'contact'} className='hover:bg-lime-950/50 md:hover:bg-red-950/20 md:hover:shadow-[0_0_3px_white] text-center w-full md:min-w-28 md:px-4 md:rounded-xl'>Contact</Link>
                </div>
            </div>

            <div className="md:hidden text-3xl py-2">
                <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer" onClick={handleRight} />
            </div>
        </div>
    )
}
