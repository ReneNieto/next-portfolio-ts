import React from 'react'
import {motion} from 'framer-motion'

import ProfilePicture from '../public/hero.jpg'


type Props = {}

function About({}: Props) {
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="About Picture" 
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
        className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-8"
        />

        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl text-semibold'>Here's a <span className='underline decoration-[#800080]/50'>little</span> background</h4>

            <p className='text-lg text-justify'>
                I'm Rene and here's a little bit about me, I have been coding for over 2 years now as a fullstack developer, I have worked as a freelance developer before this is where I found my passion for coding and then got a full time job in an agency where I got to work in several projects as well as in large companies. I have worked with many different technologies and frameworks, but my favorite is React and Next.js. I have also worked with Node.js, AWS Lambda, MySQL, and many more. I have also worked with many different languages such as Javascript, Typescript and Php.
            </p>
        </div>
    </motion.div>
  )
}

export default About