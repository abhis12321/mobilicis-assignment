import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='text-gray-300 py-4 mx-auto w-[98%]'>
            <div className="px-2">
                <h1 className="py-2 text-3xl text-lime-400/60 font-semibold">Japanese Culture</h1>
                <p className="text-sm text-gray-400">Japan has a fascinating and multifaceted culture; on the one hand it is steeped in the deepest of traditions dating back thousands of years; on the other it is a society in a continual state of rapid flux, with continually shifting fads and fashions and technological development that constantly pushes back the boundaries of the possible. This is part of what makes it such a fascinating country to visit. If you are in search of the extraordinary, our Japan holidays promise to deliver just that</p>
            </div>

            <div className="flex flex-wrap gap-5 items-center justify-center py-8 mx-auto w-[98%]">
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/people.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">People</Link>
                    <p className="text-sm">
                        Japan is famous for its supposed homogeny, but Japan&apos;s population is much more diverse than you might think.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/religion.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Religion</Link>
                    <p className="text-sm">Multiple religions coexist in a country where people are born Shinto, get married Christian and die Buddhist.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/social-conventions.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Social conventions</Link>
                    <p className="text-sm">Let us demystify Japan&apos;s complex social conventions, from bowing to chopstick etiquette.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/food.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Food</Link>
                    <p className="text-sm">
                        Japan is a foodie&apos;s paradise, with some of the finest and most varied cuisine in the world.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/drink.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Drink</Link>
                    <p className="text-sm">With sake, whiskey, beer, green tea and a multitude of soft drinks - Japan has something for every palate.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/theatre.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Theatre</Link>
                    <p className="text-sm">From Kabuki, Noh and Karakuri to modern musicals and cabaret - Japan has a strong theatrical tradition.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/manga-and-anime.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Manga & anime</Link>
                    <p className="text-sm">Discover the growing global phenomenon of Japanese manga (comics) and anime (animation).
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>
                <div className="flex flex-col gap-3 max-w-[350px] sm:max-w-[315px] md:max-w-[350px] min-h-[352px] sm:min-h-[370px] bg-gray-800 rounded p-4">
                    <Image src={'/cherry-blossom.jpg'} alt='' className='w-full rounded' height={300} width={400} />
                    <Link href={''} className="text-lime-600 active:text-gray-500 text-lg">Cherry blossom</Link>
                    <p className="text-sm">The spring cherry blossom is a major event in Japan&apos;s calendar, and the most popular time to visit Japan.
                    </p>
                    <Link href={''} className='text-lime-600 hover:text-lime-400 active:text-gray-500 text-sm'>Read more <FontAwesomeIcon icon={faCircleArrowRight} className='' /></Link>
                </div>

            </div>
        </div>
    )
}
