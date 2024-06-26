import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="flex flex-col [background-color:black] border-t-2 border-gray-900 opacity-85">
      <div className='px-3 xm:px-8 flex flex-col md:flex-row items-center justify-around flex-1'>
        <div className="md:w-[40%] w-full flex flex-col items-center">
          <div className="">
            <h2 className="font-bold text-4xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit leading-[4rem] font-serif">Japan&apos;</h2>
            <p className="text-center font-semibold text-yellow-500">creator&apos;s details</p>
          </div>
          <div className="py-4 flex justify-around items-center bg-slate50 rounded-lg self-center sm:self-auto w-[267px]">
            <Link
              target="_blank"
              href={`https://github.com/abhis12321`}
              className=""
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className=" text-gray-400 hover:text-gray-300 hover:scale-110 text-4xl md:text-5xl"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/in/abhishek-singh-b82427256/`}
              className=""
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                className="text-blue-700 hover:text-blue-600 hover:scale-110 text-4xl md:text-5xl"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.instagram.com/____abhis____/`}
              className=""
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                className="text-rose-800 hover:text-rose-700 hover:scale-110 text-4xl md:text-5xl"
              />
            </Link>
          </div>

        </div>
        <div className="flex justify-center md:justify-around gap-4 items-center w-full md:w-[60%]">
          <div className="flex flex-col gap-2 justify-between items-start">
            <Link href={'/'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center'>home</Link>
            <Link href={'/about'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center'>About Japan</Link>
            <Link href={'/job-listings'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center'>Job listings</Link>
          </div>
          <div className="flex flex-col gap-2 justify-between items-start">
            <Link href={'https://github.com/abhis12321/mobilicis-assignment'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center'>contact</Link>
            <Link href={'/contact'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center'>git repository</Link>
            <Link href={'https://student-login-app-nextjs.onrender.com/'} className='font-semibold py-1 px-3 rounded-md hover:text-gray-400 text-center' target='_blank'>chat with me</Link>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-center p-2 font-semibold"> <span className='font-bold'>©</span>Job-to-Japan! An assignment webapp!</div>
    </div>
  )
}
