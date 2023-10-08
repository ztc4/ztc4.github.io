import Image from "next/image";
import Project from "../components/project";
import { projectsData } from "./projects.data";
import Link from "next/link";
export const metadata = {
    title: 'Projects',
    description: 'Zachary Coats Projects',
  }

function Projects() {
    return ( 
        <div className="w-screen overflow-x-hidden min-h-screen  flex flex-col min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold p-4 py-12 text-stone-900 font-['Sloth'] bg-white">
            <div className='flex-col items-center flex mt-6 mb-12 gap-4'>
                <h1 className=" text-stone-900 -mb-1 text-4xl md:text-5xl  lg:text-9xl font-semibold">Projects</h1> 
                <h5 className=" text-[#727272] text-lg lg:text-4xl font-semibold">Click on Project to See More</h5>
            </div>
            <div className=" justify-center flex flex-row gap-8 flex-wrap">
                {projectsData.map((current,index)=> <Project key={index} data={current} index={index}/>)}
            </div>
            <Link className="outline " href="/" passHref>
                <Image alt="Back Button" width={10} height={10} src="/arrow_back_ios.svg" className="absolute left-0 top-0 h-10 w-10 md:h-16 md:w-16 m-4 ml-8  rounded-full cursor-pointer  "></Image>
            </Link>
            
        </div>
     );
}

export default Projects;