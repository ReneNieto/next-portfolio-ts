import Image from 'next/image'
import React from 'react'
import HeroImg from '../public/hero.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["Name's Rene Nieto", 'LovesGames.tsx', '<LovesCodingMore />'],
        loop:true,
        delaySpeed: 2000,
    })

  return (
    <div className='flex flex-col space-y-8 h-screen items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
        <Image src={HeroImg}  alt='profile  picture' className='rounded-full relative mx-auto h-32 w-32 object-cover '/>

        <div className='z-10'>
            <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[15px] '>FullStack Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span> <Cursor cursorColor='#800080'/>
            </h1>
        </div>
        <div className="pt-5">
            <Link href='#about'>
                <button className='heroBtn'>About</button>            
            </Link>
            <Link href='#workExperience'>
                <button className='heroBtn'>Experience</button>            
            </Link>
            <Link href='#skills'>
                <button className='heroBtn'>Skills</button>            
            </Link>
            <Link href='#projects'>
                <button className='heroBtn'>Projects</button>            
            </Link>
        </div>
    </div>
  )
}

export default Hero