import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div className='relative h-screen flex flex-col text-center md:text-left md:flex-row  max-w-7Xl px-10 mx-auto justify-evenly items-center'
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5,
    }}
    >
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center '>About</h3>

        <motion.img src={urlFor(pageInfo?.profilePicture).url()} alt="About Picture" 
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        viewport={{
            once:true,
        }}
        className=" -mb-24 mt-14 md:mb-0 md:mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] "
        />

        <div className=' space-y-4 md:space-y-10 px-0 md:px-10 mt-10 md:mt-0 '>
            <h4 className='text-3xl text-semibold'>Here's a <span className='underline decoration-[#800080]/50'>little</span> background</h4>

            <p className='text-sm md:text-base text-justify'>
                {pageInfo?.backgroundInfo}
            </p>
        </div>
    </motion.div>
  )
}

export default About