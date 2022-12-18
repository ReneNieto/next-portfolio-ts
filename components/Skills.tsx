import {motion} from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center space-y-0 mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 '>Hover over a skill to see proficiency</h3>
    </motion.div>
  )
}

export default Skills