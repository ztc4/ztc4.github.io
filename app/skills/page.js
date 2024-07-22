import Link from "next/link";
import { frontend, backend, languages, other } from "./skills.data";
import SkillCard from "../components/SkillsCard";
import Skill from "../components/Skills";
import Nav from "../components/nav";

export const metadata = {
  title: "Skills",
  description:
    "Portfolio site for Zachary Coats, junior software engineer/developer used to allow people to see projects, what skills I currently have and a little about me!",
};
function Skills() {
  return (
    <div className=" flex h-screen overflow-hidden">
      <Nav />
      <div className="min-h-screen overflow-y-scroll w-screen skill-background bg-background-light dark:bg-background-dark  py-4 bg-no-repeat flex flex-col">
        <nav className="grid grid-cols-3 px-10 text-white z-10 sticky top-0  font-KyivTypeBold- justify-between  ">
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

        <div className="mt-12 flex flex-col z-10 text-white  justify-center items-center">
          <h1 className="text-[64px]  font-bold">Skills</h1>
          <p className=" text-center max-w-[600px] text-sm sm:text-lg">
            I am most experienced in frontend web development, with backend
            express.js being the second best. I have built a solid foundation by
            learning many things from C# to Kotlin and experience with web
            development, allows me to gain skills that can translate from mobile
            to desktop. Lately have been paying attention to mistakes with
            architecture and design problems in my applications!
          </p>
        </div>
        <div className=" z-10 mt-8  justify-center flex-wrap min-w-it gap-4 flex flex-col items-center sm:flex-row">
          <SkillCard>
            {languages.map((languages) => (
              <Skill
                category=""
                text={languages.description}
                name={languages.name}
                key={languages.name}
              />
            ))}
          </SkillCard>
          <SkillCard category="Frontend">
            {frontend.map((frontendFramework) => (
              <Skill
                text={frontendFramework.description}
                name={frontendFramework.name}
                key={frontendFramework.name}
              />
            ))}
          </SkillCard>
          <SkillCard category="Backend">
            {backend.map((backend) => (
              <Skill
                text={backend.description}
                name={backend.name}
                key={backend.name}
              />
            ))}
          </SkillCard>
          <SkillCard category="Tools">
            {other.map((other) => (
              <Skill
                text={other.description}
                name={other.name}
                key={other.name}
              />
            ))}
          </SkillCard>
        </div>
      </div>
    </div>
  );
}

export default Skills;
