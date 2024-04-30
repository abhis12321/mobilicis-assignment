import Image from 'next/image';
import Link from 'next/link';
import React from "react";

export default function AnimationReact() {
  return (
      <Link href={'/job-listings'} className="md:w-[34%] lg:w-[34%] mb-4 mb:my-auto">
        <div className="group cursor-pointer w-fit">
          <div className=" w-20 h-20 md:w-64 md:h-64 rounded-full bg-transparent cursor-pointer [perspective:1000px] relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-[1200ms]">
              <Image
                width={200}
                height={200}
                src={'/people.jpg'}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-center shadow-[0_0_10px_red] opacity-70 md:[transform:rotateY(180deg)] "
              />
            <div className="absolute bg-slate-800 w-fit h-full rounded-full [backface-visibility:hidden] shadow-xl flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-lg font-bold text-purple-200 font-mono">Job Opportunities in Japan</h1>
                <h1 className="text-2xl text-white font-medium">Visit Japan</h1>
            </div>
          </div>
        </div>
      </Link>
  );
};