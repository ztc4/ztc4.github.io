import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import YouTubePlayer from "../components/YoutubePlayer";

export default async function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="h-[500px] relative px-20 pt-6 bg-cover bg-no-repeat bg-[url('/version-4/landing-image.jpg')] bg-blue-700">
        <nav className="flex h-fit flex-row justify-between  ">
          <div className=" flex text-[20px] flex-row gap-4">
            <Link href="resume" className="">
              Resume
            </Link>
            <Link href="projects">Projects</Link>
            <Link href="skills">Skills</Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="" className="text-[40px] " aria-label="Home">
              HelloZachary
            </Link>
          </div>

          <div className="text-[20px]">
            <Link href="contact">Contact</Link>
          </div>
        </nav>

        <h1 class="text-[128px] absolute bottom-8  font-bold leading-[0.75]">
          Zachary
          <br />
          <span className="ml-72">Coats</span>
        </h1>
      </header>
      <section
        id="About"
        className="flex flex-col py-10 gap-4 w-1/2 mx-auto justify-center items-center"
      >
        <h2 className="text-[32px] font-sans font-bold">About Me</h2>
        <p className="text-center  text-[16px] ">
          I'm a Software Engineer based in Atlanta, Georgia, with a profound
          fascination for the diverse applications of coding. With over a year
          of experience in full stack development, I've honed my skills through
          freelance work, developing private chatbots, and a role at LaunchCode
          where I gained experience in web development, bug fixing, teaching,
          and team collaboration. Recently, I have been deepening my knowledge
          in algorithms, data structures, problem-solving techniques, and
          software architecture.
        </p>
        <div className="min-h-fit flex flex-col items-center justify-center">
          <p className="text-[32px] ">Quick Introduction</p>
          <YouTubePlayer videoId={"YOUR_YOUTUBE_VIDEO_ID"} />
        </div>
      </section>
      <section id="Work-Experience" className="mx-20  my-10  screen h-[458px]">
        <div className=" h-[458px] bg-[url('/version-4/work-experience-image.jpg')] bg-no-repeat bg-cover"></div>
      </section>
      <section
        id="More"
        className=" flex flex-col gap-20 justify-center items-center my-20"
      >
        <div className="flex w-3/4 flex-row gap-6 justify-center items-center  h-[380px]">
          <Image
            alt="An Image of Zachary"
            width={383}
            height={489}
            className=" h-[382px] w-1/2 object-cover"
            src="/version-4/current-status-image.png"
          />
          <div className="w-1/2">
            <h3 className="text-[32px] text-center opacity-50 my-4">
              Current Status
            </h3>
            <p className="text-[20px] text-center">
              Working towards obtaining an Amazon Web Service Cloud Solution
              Architect Certification, have prior experience using some of the
              services, but decided to go more into detail to allow for an
              greater understanding and also to build a foundation for things I
              might take interest in the future
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-3/4 flex-row gap-6 justify-center items-center  h-[380px]">
          <Image
            alt="An Image of Zachary"
            width={383}
            height={489}
            className=" h-[382px] w-1/2 object-cover"
            src="/version-4/skills-image.jpg"
          />
          <div className="w-1/2">
            <h3 className="text-[32px] text-center opacity-50 my-4">Skills</h3>
            <p className="text-[20px] text-center">
              Working towards obtaining an Amazon Web Service Cloud Solution
              Architect Certification, have prior experience using some of the
              services, but decided to go more into detail to allow for an
              greater understanding and also to build a foundation for things I
              might take interest in the future
            </p>
            <div className="flex flex-col w-full mt-8 text-[20px] justify-center items-center">
              <label className="">See More</label>
              <div className="flex flex-row gap-4  [&>*]:duration-1000">
                <Link
                  href="skills"
                  className=" border-black p-2 rounded-full    border-2"
                >
                  Skills
                </Link>
                <Link
                  href="projects"
                  className=" border-black relative p-2 rounded-full  z-10 hover:bg-red  border-2"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
