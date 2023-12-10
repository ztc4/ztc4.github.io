"use client"
import Image from 'next/image'
import Link from 'next/link'
import Button from './components/button';
import ImageCarousel from './components/Image-Carousel'

function LandingPage() {
    const images = [
        'url-to-your-first-image.jpg',
        'url-to-your-second-image.jpg',
        'hello',
        "red",
        "four"
        // ... more images
    ];
    return ( 
        <div className="bg-white m-0 p-0 bg-red font-sloth-light font-ps md:font-pl text-dark">
            <section id="ABOUT" className=' relative min-h-screen w-screen  px-4 py-8'>
                <Image alt="An Image of Zachary" width={2000} height={2000} className=" w-full h-60 min-[400px]:w-72 min-[400px]:h-72    lg:w-96 lg:h-96  rounded-tl-[50px] rounded-tr-lg rounded-bl-lg rounded-br-[50px]  " src="/image-1.webp" />
                <h1 className='text-hs md:text-hl font-sloth-semibold'>Zachary Coats</h1>
                <h4 className=' -mt-2'>Junior Software Engineer</h4>
                <div className='flex relative items-center justify-center my-3  w-full left-0'>
                    <div className='bg-red h-2 w-1/5 mr-auto'/>
                    <Link className="" href="/" passHref>
                        <Image alt="Back Button" width={10} height={10} src="/linkedin.svg" className="h-10 w-10 md:h-16 md:w-16  rounded-full cursor-pointer  "></Image>
                    </Link>
                    <Link className="" href="/" passHref>
                        <Image alt="Back Button" width={10} height={10} src="/mail.svg" className=" h-10 w-10 md:h-16 md:w-16   rounded-full cursor-pointer  "></Image>
                    </Link>
                    <Link className="" href="/" passHref>
                        <Image alt="Back Button" width={10} height={10} src="/github.svg" className=" h-10 w-10 md:h-16 md:w-16 rounded-full cursor-pointer  "></Image>
                    </Link>
                    <div className='bg-red h-2 w-1/5 ml-auto'/>
                </div>
                <p>
                I’m a Software Engineer stationed in Atlanta, Georgia with a profound fascination in the diverse applications of coding. Over the recent two years, I’ve dedicated significant hours to grasping and honing my programming skills, particularly focusing on web development. Lately, I’ve been deepening my knowledge in concepts like algorithms, data structures, problem-solving techniques, and software architecture.
                </p>
                <div className='flex flex-col gap-4 justify-center mt-4 items-center'>
                    <Button text="CONTACT ME"/>
                    <Button text="RESUME" />
                </div>

            </section>
            <section id="TECH" className=' min-h-screen w-screen  relative    px-4 py-8'>
                <h1 className='text-hs md:text-hl text-center font-sloth-semibold tex'>Tech Stack</h1>
                <div className='w-full h-44 bg-red'>

                </div>
                <h3 className='font-sloth-semibold text-center'>FULL STACK DEVELOPER | WEB DEVELOPER | REACT DEVELOPER </h3>
                <Image src="/tech-icons.svg" width={100} height={50} alt="icons" className='-my-10 mx-auto  h-40 w-40'/>
                <p className=' '>As a full stack developer, I have a variety of skills. I have understanding of two frontend frameworks React and Vue; along with technologies that  includes them line next.js and nuxt.js! I also have great ability in backend development, specifically in express.js and springboot, with ability to build REST APIS in both, and use NoSql(Mongodb) and SQL databases! With many projects, and freelance work, you can be confident your getting a developer that knows how to communicate, motivated to take on challenges and progress as developer </p>
                <div className='mx-auto bg-black my-8 h-fit w-fit'>
                    <Button text="SKILLS" />

                </div>

            </section>
            <section id="PROJECTS" className='h-screen    px-4 py-8 w-screen'>
                <h1 className='text-hs md:text-hl  font-sloth-semibold '>PROJECTS</h1>
                <p>Take a look at the projects I have, some of worked on before. See how I progressed as a developer, gained skills and learned from mistakes! Click the button to see my projects.  There you will be able to see the goals, issues and accomplishments of each of projects allowing you to picture me as a developer. Also there you can potentially view the live site, check out the Github repository or look at the initial Figma design I came up with!</p>
                <div className=' bg-black my-8 h-fit w-fit'>
                    <Button text="PROJECTS" />
                </div>
                <div className='relative'>
                    <ImageCarousel images={images} />
                </div>
            </section>
            <section id="BLOG" className='h-screen    px-4 py-20 w-screen'>
                <h1 className='text-hs md:text-hl  font-sloth-semibold '>Blog</h1>
                <p>Some of the articles I’ve wrote on the site ARTICLE CRAFT which was created sololy by me. Their mostly technical works meant to show my experience or understanding of a technology!</p>
                <p className='font-sloth-semibold mt-8'>Click to visit the blog</p>
                <div className='flex gap-8 flex-row mt-8   overflow-x-scroll'>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>
                    <div className='h-72 rounded-2xl flex-shrink-0  w-72 bg-pink '/>


                </div>
            </section>
            <footer className='flex-col flex text-white h-40 px-auto text-center py-10  bg-black  gap-0'>
                <div className="  ">Zachary Coats</div>
                <div className="   ">Junior Software Engineer</div>
                <div className="  ">@zachary4coats@gmail.com<br/></div>
    

            </footer>
        </div>
     );
}

export default LandingPage;