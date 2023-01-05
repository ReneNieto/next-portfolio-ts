import {motion} from 'framer-motion'
import { Skill } from '../typings'
import SkillElement from './Skill'

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div className='min-h-screen px-2 relative flex flex-col text-center md:text-left xl:flex-row w-full xl:px-10 justify-end lg:justify-center lg:items-end xl:space-y-0 mx-auto items-center overflow-hidden pb-32 md:pb-8'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 '>Hover over a skill to see proficiency</h3>
        <div className="grid grid-cols-4 gap-5">
          {skills.slice(0, skills.length / 2).map((skill, index) => (
            <SkillElement key={index} skill={skill}/>
          ))}
           {skills.slice(skills.length / 2, skills.length).map((skill, index) => (
            <SkillElement key={index} skill={skill} directionLeft/>
          ))}

        </div>
    </motion.div>
  )
}

export default Skills