import {motion} from "framer-motion"

function ProjectImage({image,index}) {
    return ( 

        <motion.img
        key={index}
        src={image}
        initial={{ opacity: 0, scale: 0.8, x:-100 }}
        animate={{ opacity: 1, scale: 1,x:0 }}
        exit={{ opacity: 0, scale: 0.8, x:400, transition:{duration:1} }}
        transition={{ duration: 2, delay: 2  }}
        style={{ width: '300px', height: '200px' }}
      />
  
     );
}

export default ProjectImage;