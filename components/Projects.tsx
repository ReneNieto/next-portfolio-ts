import {motion} from 'framer-motion'
import { Project } from '../typings'
import ProjectCard from './ProjectCard'
type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
    className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{duration:1.5}}
    viewport={{once:true}}
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#800080]/70 s scrollbar-thin">
        {projects.map((project, index) => (
           <ProjectCard project={project} key={index}/>
        ))}
      </div>

       <div className="w-full absolute top-[30%] bg-[#800080]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects