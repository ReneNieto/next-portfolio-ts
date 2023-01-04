import {motion} from 'framer-motion'
type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4]


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
            <div key={index} className="max-w-full lg:max-w-4xl flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-20 md:p-44 h-screen mt-10 md:mt-0">
                <motion.img src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" 
                className="w-[400px] h-[200px] rounded-lg object-cover"
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
                       <span className="underline decoration-[#800080]/70">Project {index + 1}</span> name
                    </h4>
                    <p className="text-lg text-center md:text-left">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident expedita iste quidem rerum repellendus at voluptatibus ea blanditiis non a, animi quos. Magnam adipisci tenetur a molestias culpa eum sit!
                    </p>

                </motion.div>
            </div>
        ))}
      </div>

       <div className="w-full absolute top-[30%] bg-[#800080]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects