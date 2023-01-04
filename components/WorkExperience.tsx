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
    className='h-screen relative flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-20 pointer-events-none md:top-16'>Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-mandatory snap-x mt-4 xl:mt-24">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}

      </div>

    </motion.div>
  )
}

export default WorkExperience