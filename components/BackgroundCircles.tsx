import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div className='relative flex items-center justify-center pointer-events-none'
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1, 0.2, 0.4, 0.8, 0.1,1.0],
        borderRadius:['20%', '20%', '50%', '80%', '20%']
    }}
    transition={{
        duration:2.5,
    }}

    >
        <div className='border border-[#333333] mt-52 rounded-full w-[200px] h-[200px] animate-ping absolute'/>
        <div className='border border-[#333333] mt-52 rounded-full w-[300px] h-[300px] absolute'/>
        <div className='border border-[#333333] mt-52 rounded-full w-[500px] h-[500px] absolute'/>
        <div className='border border-[#800080 ] mt-52 rounded-full w-[650px] h-[650px] animate-pulse absolute'/>
        <div className='border border-[#333333] mt-52 rounded-full w-[800px] h-[800px] absolute'/>

    </motion.div>
  )
}

export default BackgroundCircles