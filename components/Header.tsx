import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[]
}

const Header = ({socials}: Props) => {
  return (
    <header className='p-5 flex items-start xl:items-center justify-between sticky top-0 max-w-7xl mx-auto z-20'> 
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
            {socials.map((social) => (
                <SocialIcon className='cursor-pointer' key={social._id} url={social.url} fgColor='gray' bgColor='transparent'/>
            ))}
        </motion.div>

        <Link href='#contact' legacyBehavior>
        
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
                <p className='hidden md:inline-flex uppercase text-gray-500 cursor-pointer'>get in touch</p>
            </motion.div>
        </Link>

    </header>
  )
}

export default Header