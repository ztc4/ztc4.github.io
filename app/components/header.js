"use client"
import {motion} from "framer-motion"


function AnimatedText({text}) {

    const item = {hidden: { y: 40, opacity: 0.3},visible: {y: 0, opacity: 1 },time:{ delay:0, duration:0.6} };
    
    return ( 
        <motion.h1 
                    
        whileInView="visible"
        initial="hidden"
        transition="time"
        variants={item}
        className='text-hs md:text-hl font-sloth-semibold'>{text}</motion.h1>
     );
}

export default AnimatedText;