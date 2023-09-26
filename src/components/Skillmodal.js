import React from "react"
import {motion, AnimatePresence} from "framer-motion"

function SkillModal({data, closeModal}) {
    console.log(data)
    return (



            
            <motion.div
               
                initial={{opacity:0.8, x:-200, originX: 0, originY:0}}
                animate={{opacity:1,x:0}}
                transition={{ duration: 1.3 }}
                exit={{x:600, opacity:0.3}}
                  
            
            className="h-5/6 w-fit md:w-96 md:h-72  bg-neutral-200 rounded-md overflow-scroll fixed top-8 left-4 md:top-1/4 md:left-1/4 transform md:-translate-x-3/4 md:-translate-y-1/2 ">
                <div className="flex flex-row  py-3 flex-nowrap justify-between text-3xl">
                    <h5 className="text-2xl ml-8">{data.name || "title"}</h5>
                    <button className="float-right mr-4 hover:text-neutral-700 text-neutral-500 " onClick={closeModal}>x</button>
                </div>
                <p className="ml-8 text-neutral-600 text-lg">{data.description ||"There is no description for this skill"}</p>
            </motion.div>
           

     );
}

export default SkillModal;