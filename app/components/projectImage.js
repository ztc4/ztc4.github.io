"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProjectImage({project}) {

    const [imageIndex,setImageIndex] =  useState(0);
    function handleClick(){
        if(project.images.length - 1 == imageIndex){
            setImageIndex(0)

        }
        else{
            setImageIndex(current => current += 1 )
        }
        
    }


    return ( 
        <div className="min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold   bg-gray-200">
            <Image alt="project image" width={2400} height={2400} className="w-full object-cover" src={project.images[0] ?project.images[imageIndex] :  "/ecommerce-2.png"} />
            <Link className="outline " href="/projects" passHref>
                <Image alt="Back Button" width={10} height={10} src="/arrow_back_ios.svg" className="absolute left-0 top-0 h-10 w-10 md:h-16 md:w-16 m-4  rounded-full cursor-pointer  "></Image>
            </Link>
            <div className="absolute  top-20 left-3/4 md:top-44 p-2 rounded-full cursor-pointer hover:bg-gray-200" onClick={handleClick}>
                <Image alt="Back Button" width={10} height={10} src="/arrow_forward_ios.svg" className="h-12 w-12" ></Image>
            </div>
        

    </div>
     );
}

export default ProjectImage;