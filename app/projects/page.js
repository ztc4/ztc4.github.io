import Project from "../components/project";
import { projectsData } from "./projects.data";

function Projects() {
    return ( 
        <div className="w-screen overflow-x-hidden min-h-screen  flex flex-col min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold p-4 py-12 text-stone-900 font-['Sloth'] bg-white">
            <div className='flex-col items-center flex mt-6 mb-12 gap-4'>
                <h1 className=" text-stone-900 -mb-1 text-4xl md:text-5xl  lg:text-9xl font-semibold">Projects</h1> 
                <h5 className=" text-[#727272] text-lg lg:text-4xl font-semibold">Click on Project to See More</h5>
            </div>
            {projectsData.map((current,index)=> <Project key={index} data={current}/>)}
        </div>
     );
}

export default Projects;