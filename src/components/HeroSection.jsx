'use client'
import { useRouter } from "next/navigation";
import Image from 'next/image'

import coverPic from '@/assets/cover.webp'

import wella from '@/assets/wella.png'
import lotus from '@/assets/lotus.webp'
import matrix from '@/assets/matrix.png'
import schw from '@/assets/schw.webp'
import loreal from '@/assets/loreal.png'
import raga from '@/assets/raga.png'

export default function Hero(){
    const router = useRouter()
    return(
        <div className="container" id="home">
            <Image width={0} height={0} sizes="100vw" className={`h-auto w-full lg:w-1/3 mx-auto`} src={coverPic} alt={`Brand Logo`} draggable={`false`} />
            <div className="relative pt-8 ml-auto">
                <div className="text-center mx-auto">
                    <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Unveil Your Inner Beauty at <br />Smart and Glam Family Salon!</h1>
                    <p className="mt-8 text-gray-700">Smart and Glam Family salon is your family&apos;s haven for all things beauty. From pampering hair treatments to flawless makeup, we offer a wide range of services designed to help you look and feel your best.</p>
                    <button className="relative mt-16 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white" onClick={()=> router.push('/#features')}>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"> Get Started </span>
                    </button>
                    <div className="hidden py-8 mt-16 border-y border-gray-100 sm:flex justify-between">
                        <section className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 ">Expert Skill</h6>
                            <p className="mt-2 text-stone-600 text-md">Our team of highly trained and experienced hairdressers and beauticians are passionate about creating stunning results.</p>
                        </section>
                        <section className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700">Uncompromising Quality</h6>
                            <p className="mt-2 text-stone-600">We use only the best products and techniques to ensure your hair and skin look and feel their healthiest.</p>
                        </section>
                        <section className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700">Relaxing Ambiance</h6>
                            <p className="mt-2 text-stone-600">Escape the daily grind and unwind in our tranquil salon environment.</p>
                        </section>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    <section className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={wella} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                    <section className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={lotus} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                    <section className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <Image src={matrix} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                    <section className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={schw} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                    <section className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <Image src={loreal} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                    <section className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={raga} height="0" width="0" sizes="100vw" className={`h-16 w-auto mx-auto`} alt={`wella logo`} objectFit={`contain`} />
                    </section>
                </div>
            </div>
        </div>
    )
}