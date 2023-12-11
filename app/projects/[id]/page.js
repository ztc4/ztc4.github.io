

import Image from "next/image";
import { projectsData } from "../projects.data";
import Link from "next/link";
import ProjectImage from "@/app/components/projectImage";

function ProjectPage(props) {


    let project = projectsData[props.params.id - 1]
    console.log(project)
    let {deployment, githubLink, description,goals,issues, accomplishments, figma} = project



    
 
    
  



    return ( 
        <>
            <div className="w-screen overflow-x-hidden min-h-screen  flex flex-col font-semibold  text-stone-900 font-['Sloth'] bg-white">
                <div className="h-1/2 bg-pink">   
                    <ProjectImage project={project}/>
                </div>
                

                
                <div className='flex-col items-left flex px-4 min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60  mb-12 gap-6 '>
                    {/* <h1 className=" text-stone-900 -mb-1 text-4xl md:text-5xl  lg:text-9xl font-semibold">Projects</h1>  */}
                    <h5 className="  text-4xl lg:text-4xl font-semibold self-center">{project.title}</h5>
                    <div className="flex flex-row gap-4 self-center">
                        {figma &&  
                        <Link  href={figma} passHref>
                            <Image alt="project image" width={40} height={40} className="hover:scale-110 " src="/Figma.svg" />
                        </Link>}
                        {deployment && 
                        <Link  href={deployment} passHref>
                            <Image alt="Deployment Link" width={40} height={40} className="hover:scale-110" src="/Web.svg" />
                        </Link >}
                        <Link href={githubLink} passHref>
                            <Image alt="project image" width={40} height={40} className="hover:scale-110" src="/github.svg" />
                        </Link>

                    </div>
                    <h4 className="text-lg lg:text-4xl font-semibold ">Description</h4>
                    <p className="font-normal">{description}</p>
                    <h4 className="text-lg lg:text-4xl font-semibold ">Goals of the Project</h4>
                    <ol className="gap-4 text-base lg:text-xl font-normal">
                        {goals.map(goal => <li key={goal}>- {goal}</li>)}
                    </ol>
                    <h4 className="text-lg lg:text-4xl  ">Challenges</h4>
                    <p className="font-normal">{issues}</p>
                    <h4 className="text-lg lg:text-4xl  ">Accomplishments</h4>
                    <ol className="gap-4 text-base lg:text-xl font-normal">
                        {accomplishments.map(acc => <li key={acc}>- {acc}</li>)}
                    </ol>

                </div>
            </div>
        </>

     );
}

export default ProjectPage;