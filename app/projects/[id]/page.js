

import Image from "next/image";
import { projectsData } from "../projects.data";
import Link from "next/link";

function ProjectPage(props) {


    let project = projectsData[props.params.id - 1]
    console.log(project)
    let {deployment, githubLink, description,goals,issues, accomplishments, figma} = project



    
 
    
  



    return ( 
        <>
            <div className="w-screen overflow-x-hidden min-h-screen  flex flex-col font-semibold  text-stone-900 font-['Sloth'] bg-white">
                <div className="min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold   bg-gray-200">
                    <Image alt="project image" width={2400} height={2400} className="w-full object-cover" src={project.images[0] ?project.images[0] :  "/ecommerce-2.png"} />
                    <Link className="outline " href="/projects" passHref>
                        <Image alt="Back Button" width={10} height={10} src="/arrow_back_ios.svg" className="absolute left-0 top-0 h-10 w-10 md:h-16 md:w-16 m-4  rounded-full cursor-pointer  "></Image>
                    </Link>
                    

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
                            <Image alt="Deployment Link" width={40} height={40} className="hover:scale-110" src="/Vector-1.svg" />
                        </Link >}
                        <Link href={githubLink} passHref>
                            <Image alt="project image" width={40} height={40} className="hover:scale-110" src="/Vector.svg" />
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