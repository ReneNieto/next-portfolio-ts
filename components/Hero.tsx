import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    
    const [text, count] = useTypewriter({
        words: ["Name's Rene Nieto", 'LovesGames.tsx', '<LovesCodingMore />'],
        loop:true,
        delaySpeed: 2000,
    })

  return (
    <div className='flex flex-col space-y-8 h-screen items-center justify-center text-center overflow-hidden md:pt-32'>
        <BackgroundCircles/>
        <img src={urlFor(pageInfo?.heroImage).url()}  alt='profile  picture' className='rounded-full relative mx-auto h-32 w-32 object-cover '/>

        <div className='z-10'>
            <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[15px] '>{pageInfo.role}</h2>
            <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                <span className='mr-1'>{text}</span><Cursor cursorColor='#800080'/>
            </h1>
        </div>
        <div className="pt-5 z-10">
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