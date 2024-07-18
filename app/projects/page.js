import Link from "next/link";
import Image from "next/image";
import Project from "../components/project";
import { projectsData } from "./projects.data";
import Nav from "../components/nav";

function Projects() {
  return (
    <div className=" flex h-screen overflow-hidden">
      <Nav />
      <div className="min-h-screen w-screen bg-background-light dark:bg-background-dark  py-4 bg-no-repeat flex flex-col">
        <nav className="grid grid-cols-3 px-10 text-secondary-light dark:text-secondary-dark z-10   font-KyivTypeBold- justify-between  ">
          <div className=" hidden group  sm:flex text-[20px] items-center  flex-row gap-4">
            <Link href="resume" className="">
              Resume
            </Link>
            <Link href="projects" className=" ">
              Projects
            </Link>
            <Link href="skills">Skills</Link>
          </div>
          <div className=" flex items-center mx-auto justify-center">
            <Link
              href="/"
              className="text-lg lg:text-[40px] "
              aria-label="Home"
            >
              HelloZachary
            </Link>
          </div>

          <div className="text-[20px] px-10 hidden lg:flex items-center justify-end">
            <Link
              href="contact"
              className="rounded-full border-2 p-2 px-3 border-black dark:border-white duration-700  hover:bg-[#222] hover:bg-opacity-70 hover:text-secondary-dark   dark:hover:bg-white dark:hover:text-black"
            >
              Contact
            </Link>
          </div>
        </nav>
        <div className=" justify-center flex flex-row mt-10 gap-8 flex-wrap mb-8">
          {projectsData.map((current, index) => (
            <Project key={index} data={current} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
