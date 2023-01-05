import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences : Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5, 
    }}
    className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-16 md:pt-0 '>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-20 pointer-events-none md:top-16'>Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-mandatory snap-x mt-4 xl:mt-24 scrollbar scrollbar-track-transparent scrollbar-thumb-[#800080]/70 scrollbar-thin">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}

      </div>

    </motion.div>
  )
}

export default WorkExperience