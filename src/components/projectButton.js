import React from "react"
import {AnimatePresence, motion} from "framer-motion"
function ProjectButton({title, image,openModal}) {
   
    return ( 
        <motion.div
      //   initial={{x:-1000}}
      //   whileInView={{x:0, transition:{duration:3, delay:0}}}
        
        
        whileHover={{scale:1.10,boxShadow: "10px 10px 1px rgba(0, 0, 0, 0.2)",x:10 ,transition:{duration:0.3}}}
        
        className=" h-56 cursor-pointer hover:scale-105   hover:shadow-lg rounded-md w-full bg-neutral-900 flex flex-col" onClick={openModal}>
           <img src={image} alt={title} className="h-5/6 rounded-t-md"></img>
           <p className="pl-4 py-1  text-neutral-400">{title ||"title"}</p>

        </motion.div>
     );
}

export default ProjectButton;