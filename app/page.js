import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";
import ImageCarousel from "./components/Image-Carousel";
import axios from "axios";
import AnimatedIcon from "./components/AnimatedIcon";
import AnimatedText from "./components/header";
import Blog from "./components/Blog";
import Job from "./components/job";

async function getArticle(id) {
  let data = axios
    .get(
      `https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/${id}`
    )
    .then((res) => {
      return res.data;
    });

  return data;
}

async function LandingPage() {
  const images = [
    { image: "/image-1.svg", project: "2" },
    { image: "/image-2.svg", project: "3" },
    { image: "/image-3.svg", project: "1" },
  ];
  let data = await getArticle("657630a2d68381e8ed305eb8");
  // console.log(data)

  return (
    <div className="bg-white m-0 p-0  font-sloth-light font-ps md:font-pl md:font-sloth-regular text-dark overflow-x-hidden 3xl:my-8">
      <section
        id="ABOUT"
        className=" min-h-screen md:min-h-screen justify-start items-start flex flex-row px-0 mx-0  bg-[url('/version-4/bg-image.jpg')] bg-cover bg-center bg-no-repeat w-screen "
      >
        <Image
          alt="An Image of Zachary"
          width={100}
          height={450}
          className="h-4/5 w-20 my-auto object-cover "
          src="/version-4/name.svg"
        />
        
        <div className="w-2/4">
        {/* <h1 className=" whitespace-nowrap  opacity-0  absolute left-0  text-hs md:text-hl text-white font-sloth-semibold ">Zachary Coats</h1> */}
          <h4 className=" text-[#FF4654] text-hs  font-sloth-semibold">Fullstack Software Engineer</h4>
          <p className=" text-lg  text-white ">
            {` I'm a Software Engineer stationed in Atlanta, Georgia with a profound fascination in the diverse applications of coding. Over the recent two years, I’ve dedicated significant hours to grasping and honing my programming skills, particularly focusing on web development. Lately, I've been deepening my knowledge in concepts like algorithms, data structures, problem-solving techniques, and software architecture.`}
          </p>
        </div>
        {/* <Image
          alt="An Image of Zachary"
          width={1908}
          height={3392}
          className=" object-cover object-center w-full h-72 md:w-72 md:h-72 brightness-90  lg:w-96 lg:h-full  rounded-tl-[50px] rounded-tr-lg rounded-bl-lg rounded-br-[50px]  "
          src="/personalpic2web.webp"
        />
        <div className=" md:h-full  md:p-4">
          <AnimatedText text="Zachary Coats" />
          <h4 className=" -mt-2">Junior Software Engineer</h4>
          <div className="flex relative items-center gap-2 justify-center md:justify-start my-6 md:mt-6  w-full left-0">
            <div className="bg-red h-2 w-1/5 md:hidden mr-auto" />
            <Link
              className=""
              href="https://www.linkedin.com/in/zachary-coats-651211270/"
              passHref
            >
              <AnimatedIcon src="/linkedin.svg" />
            </Link>
            <Link
              className=""
              href="mailto:zachary4coats@gmail.com?subject=Email Subject&body=Hello, I would like to discuss..."
              passHref
            >
              <AnimatedIcon src="/mail.svg" />
            </Link>
            <Link className="" href="https://github.com/ztc4" passHref>
              <AnimatedIcon src="/github.svg" />
            </Link>
            <div className="bg-red h-2 w-1/5 md:hidden ml-auto" />
          </div>
          <p className="my-6 text-lg ">
            {` I'm a Software Engineer stationed in Atlanta, Georgia with a profound fascination in the diverse applications of coding. Over the recent two years, I’ve dedicated significant hours to grasping and honing my programming skills, particularly focusing on web development. Lately, I've been deepening my knowledge in concepts like algorithms, data structures, problem-solving techniques, and software architecture.`}
          </p>
          <div className="flex flex-row gap-4 md:flex-row justify-center mt-4 md:my-16 md:justify-start mx-6 items-center">
            <Link href="contact">
              <Button text="CONTACT ME" />
            </Link>
            <Link href="resume">
              <Button text="RESUME" />
            </Link>
          </div>
        </div> */}
      </section>
      <section
        id="WORK EXPERIENCE"
        className="min-h-screen md:min-h-fit bg-[#1C1B1F]    px-4 py-8 md:justify-center md:py-20 md:px-32 flex-col md:flex-row flex w-screen"
      >
        <div className=" md:flex md:flex-col md:justify-start md:px-4 py-10   min-h-full  md:w-1/2 ">
          <AnimatedText text="Work Experience" color="red" />
          <p className="text-lg text-white">
            So current I have about 1+ year of experience working in the full
            stack development field. I initially started of gaining experience
            with being a freelance developer doing simple bug fixes surrounding
            the frontend side of things. I then transition to work surrounding
            building a private chatbot for small businesses, and along side of
            that I was a chatbot evaluator for outlier AI. I then moved away
            toward the corporate side through getting a web development focused
            job with LaunchCode. Through Launchcode I have had time to gain
            experience with bug fixing, teaching , management and supporting,
            and documenting things for understanding, and even some full stack
            development. I was able to gaom valuable experience in
            communications and understanding how work within a team.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full gap-4 flex-col flex h-full h-[600px]">
          {" "}
          {/* Set a fixed height, e.g., 600px */}
          <Job />
          <Job title="Outlier AI" />
          <Job title="Freelance" />
        </div>
      </section>

      <section
        id="PROJECTS"
        className="min-h-screen md:min-h-fit    px-4 py-8 md:justify-center md:py-20 md:px-32 flex-col md:flex-row flex w-screen"
      >
        <div className=" md:flex md:flex-col md:justify-start md:px-4 py-10   min-h-full  md:w-1/2 ">
          <AnimatedText text="PROJECTS" />
          <p className="text-lg">
            Take a look at the projects I have, some of worked on before. See
            how I progressed as a developer, gained skills and learned from
            mistakes! Click the button to see my projects. There you will be
            able to see the goals, issues and accomplishments of each of
            projects allowing you to picture me as a developer. Also there you
            can potentially view the live site, check out the Github repository
            or look at the initial Figma design I came up with!
          </p>
          <div className=" text-2xl font-sloth-semibold mt-6  md:mt-auto  h-fit w-fit ">
            <Link
              href="projects"
              className="flex flex-row duration-500 hover:underline gap-10 group group-hover:text-purple-500"
            >
              <p className="duration-1000  group-hover:ml-8">
                See More Projects
              </p>
              <Image
                alt="Javascript icon"
                className="group-hover:ml-8 duration-1000 underline"
                width={30}
                height={30}
                src="/arrow_right_alt.svg"
              />
            </Link>
          </div>
        </div>
        <div className="relative md:w-1/2   md:flex md:justify-center md:items-center h-full">
          <ImageCarousel images={images} />
        </div>
      </section>
      <section id="BLOG" className="min-h-fit    px-4 py-20 md:px-32 w-screen">
        <AnimatedText text="Blog" />
        <p>{`Some of the articles I've wrote on the site ARTICLE CRAFT which was created sololy by me. Their mostly technical works meant to show my experience or understanding of a technology!`}</p>
        <p className="font-sloth-semibold mt-12 text-lg md:text-xl ">
          Click to visit the blog
        </p>
        <div className="flex flex-row gap-8  mt-2 h-96 md:p-2  overflow-x-scroll">
          <Blog data={data} />
        </div>
      </section>
      <section
        id="TECH"
        className=" min-h-screen w-screen md:min-h-fit    relative  md:px-32   px-4 py-8"
      >
        <AnimatedText text="Tech Stack" />
        <div className="w-full  md:w-4/5 ">
          <div className="w-full h-44 md:h- bg-red"></div>
          <h3 className="font-sloth-semibold text-center md:mt-4">
            FULL STACK DEVELOPER | WEB DEVELOPER | REACT DEVELOPER{" "}
          </h3>
          <div
            id="Tech-Icons"
            className="[&>*]:p-2 flex justify-center   md:absolute md:right-32  md:flex-col top-20    [&>*]:cursor-pointer [&>*]:md:h-16 [&>*]:md:w-16 [&>*]:w-10 [&>*]:h-10"
          >
            <Image
              alt="Github icons"
              width={30}
              height={30}
              src="/node.svg"
              className=""
            />
            <Image alt="React icons" width={30} height={30} src="/React.svg" />
            <Image alt="Vue icons" width={30} height={30} src="/vuejs.svg" />
            <Image alt="Kotlin icon" width={30} height={30} src="/Kotlin.svg" />
            <Image
              alt="Javascript icon"
              width={30}
              height={30}
              src="/Javascript.svg"
            />
          </div>
          <p className=" md:mt-8 text-lg ">
            As a full stack developer, I have a variety of skills. I have
            understanding of two frontend frameworks React and Vue; along with
            technologies that includes them line next.js and nuxt.js! I also
            have great ability in backend development, specifically in
            express.js and springboot, with ability to build REST APIS in both,
            and use NoSql(Mongodb) and SQL databases! With many projects, and
            freelance work, you can be confident your getting a developer that
            knows how to communicate, motivated to take on challenges and
            progress as developer{" "}
          </p>
          <div className="mx-auto bg-black my-8 h-fit w-fit">
            <Link href="skills">
              <Button text="SKILLS" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex-col flex text-white h-40 px-auto text-center py-10  bg-black  gap-0">
        <div className="  ">Zachary Coats</div>
        <div className="   ">Junior Software Engineer</div>
        <div className="  ">
          @zachary4coats@gmail.com
          <br />
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
