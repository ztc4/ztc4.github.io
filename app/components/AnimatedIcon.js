"use client"
import {motion} from "framer-motion"
import Image from "next/image";

function AnimatedIcon({src}) {


    const icon = { hover:{scale:1.05,rotate: 350}}
    return ( 

        <motion.div
        whileHover="hover"
        variants={icon}
        >
            <Image alt="Linkedin icon" width={10} height={10} src={src} className="h-10 w-10   cursor-pointer  "></Image>
        </motion.div>
     );
}

export default AnimatedIcon;