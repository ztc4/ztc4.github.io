import React from "react";
import {motion} from "framer-motion"
function SkillButton({title,openModal}) {
    return ( 
        <motion.div 
      
        whileHover={{scale:1.10,opacity:1,boxShadow: "10px 10px 1px rgba(0, 0, 0, 0.2)",x:10 ,transition:{duration:0.4}}}
        className=" h-12 w-full md:h-16  bg-slate-300 opacity-80 rounded-md flex justify-center items-center cursor-pointer  hover:shadow-neutral-900" onClick={openModal}>
            <p className="text-neutral-800 text-lg  tracking-wider font-medium ">{title}</p>

        </motion.div>
     );
}

export default SkillButton;