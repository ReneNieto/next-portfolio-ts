import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

 

type Props = {
    directionLeft?: boolean,
    skill: Skill
}

const Skill = ({directionLeft, skill}: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
        <motion.img 
            src={urlFor(skill.image).url()}
            alt={skill.title}
            initial={{
                opacity:0,
                x: directionLeft ? -150 : 150,
            }}
            whileInView={{
                opacity:1,
                x:0,
            }}
            transition={{
                duration:1,
            }}
            className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out object-cover' 
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className='font-bold text-2xl text-black opacity-100 '>{skill.progress}%</p>
        </div>
        </div>
        
    </div>
   

  )
}

export default Skill