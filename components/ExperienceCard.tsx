import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 p-10 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900] snap-center opacity-40 hover:opacity-100 bg-[#292929] transition-opacity duration-200 overflow-hidden'>


        <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"  alt="" 
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
        className='w-32 h-32 rounded-full object-center md:rounded-lg  xl:w-[200px] xl:h-[200px] mt-8 object-cover'
        />
        <div className="px-0 md:px-10">
            <h3 className='text-4xl font-light'>Role</h3>
            <h4 className='font-bold text-3xl mt-1'>Company</h4>
            <div className="flex space-x-2 my-2">
                <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"  alt="" className='h-10 w-10 rounded-full' />
                <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className='h-10 w-10 rounded-full' />
                <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className='h-10 w-10 rounded-full' />
            </div>
            <p className='text-gray-300 uppercase py-5'>from --- to </p>
            <div className="max-h-56 overflow-y-scroll w-full">
                <ul className='list-disc space-y-4 ml-5 text-lg  '>
                    <li className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id. Consequatur placeat sit aliquam expedita corrupti, porro natus reiciendis! Officiis, nisi aperiam?</li>
                    <li className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</li>
                    <li className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem iure, optio, iste soluta laudantium quo culpa alias nobis qui aspernatur id explicabo repellat. Adipisci, dolorem aut? At, non sit!</li>
                </ul>
            </div>
           
        </div>
    </article>
  )
}

export default ExperienceCard