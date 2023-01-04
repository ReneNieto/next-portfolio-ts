import { motion } from 'framer-motion';

 

type Props = {
    directionLeft?: boolean,

}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
        <motion.img 
            src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="" 
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
            className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out object-cover' 
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className='font-bold text-2xl text-black opacity-100 '>100%</p>
        </div>
        </div>
        
    </div>
   

  )
}

export default Skill