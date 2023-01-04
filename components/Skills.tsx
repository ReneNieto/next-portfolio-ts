import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='min-h-screen relative flex flex-col text-center md:text-left xl:flex-row w-full xl:px-10 justify-center xl:space-y-0 mx-auto items-center overflow-hidden'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 '>Hover over a skill to see proficiency</h3>
        <div className="grid grid-cols-4 gap-5">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    </motion.div>
  )
}

export default Skills