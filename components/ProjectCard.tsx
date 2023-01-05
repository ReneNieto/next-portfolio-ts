import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div  className="max-w-full lg:max-w-4xl flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen mt-10 md:mt-0">
    <motion.img src={urlFor(project.image).url()} alt={project.title}
    className="w-full h-auto md:w-[400px] md:h-[200px] rounded-lg object-cover"
    initial={{
        y:-300,
        opacity:0,
    }}
    whileInView={{
        y:0,
        opacity:1,
    }}
    transition={{duration:1.2,}}
    viewport={{once:true}}
    />
    <motion.div className=""
    initial={{
        y:200,
        opacity:0,
    }}
    whileInView={{
        y:0,
        opacity:1,
    }}
    transition={{duration:1.2,}}
    viewport={{once:true}}
    >
        <h4 className="text-4xl font-semibold text-center">
           <span className="underline decoration-[#800080]/70">Project</span> {project.title}
        </h4>
        <div className="flex justify-center gap-2 mt-4 items-center flex-wrap">
        {project.tecnologies.map((tecnology, index) => (
             <img key={index} src={urlFor(tecnology.image).url()} alt={tecnology.title}
             className="w-10 h-10"
             />
            ))}
        </div>
       
        <p className="text-lg text-center md:text-left mt-8">
            {project.summary}
        </p>

    </motion.div>
</div>

  )
}

export default ProjectCard