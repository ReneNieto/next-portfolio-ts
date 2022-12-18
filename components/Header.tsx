import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='p-5 flex items-start xl:items-center justify-between sticky top-0 max-w-7xl mx-auto'> 
        <motion.div className="header_icons"
        initial={
            {
                x:-500,
                opacity:0,
                scale:0.5,

            }
        }
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }}> 
            <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/> <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/> <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/> <SocialIcon url='https://www.linkedin.com/in/rene-nieto/' fgColor='gray' bgColor='transparent'/>


        </motion.div>

        <motion.div className="header_icons2"

        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5
        }}>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='hidden md:inline-flex uppercase text-gray-500 '>get in touch</p>

        </motion.div>
        
    </header>
  )
}

export default Header