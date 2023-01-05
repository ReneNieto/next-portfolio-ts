import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    experience: Experience 
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center p-8 space-y-7 flex-shrink-0 w-full  md:w-[600px] xl:w-[900] snap-center opacity-40 hover:opacity-100 bg-[#292929] transition-opacity duration-200 overflow-hidden'>
        <motion.img src={urlFor(experience?.companyImg).url()}  alt="" 
        initial={{
             y:-100,
            opacity:0,
        }}
        whileInView={{
             y:0,
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        viewport={{
            once:true,
        }}
        className='w-32 h-32 rounded-full object-cover md:rounded-lg xl:w-[150px] xl:h-[150px]'/>
        <div className="px-0 md:px-10">
            <h3 className='text-4xl font-light'>{experience.jobTitle}</h3>
            <h4 className='font-bold text-3xl mt-1'>{experience.companyName}</h4>
            <div className="flex space-x-2 my-2 items-center flex-wrap justify-center md:justify-start">
                {
                    experience.tecnologies.map((tech) => (
                        <img 
                        key={tech._id}
                        src={urlFor(tech.image).url()}
                        className='h-10 w-10 rounded-full'
                        alt={tech.title}
                        />
                    ))
                }
            </div>
            <p className='text-gray-300 uppercase py-2 font-medium'>
                {new Date(experience.dateStarted).toDateString()} - {''}
            { experience.isCurrentlyWorkingHere 
                ? 'Present'
                : new Date(experience.dateEnded).toDateString()
            }
            </p>
            <div className="max-h-36 md:max-h-40 overflow-y-scroll w-full scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#800080]/70">
                <ul className='list-disc space-y-4 ml-5 text-base  '>
                    {
                        experience.points.map((point, index) => (
                            <li key={index} className='text-gray-300'>
                                {point}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard