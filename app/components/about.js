"use client"
import Image from "next/image";
import { useState } from "react";

function About() {
    const [visible,setVisible]= useState(false)

    function handleClick(){
        setVisible(true)
    }
    return ( 
        
    <div className='flex flex-col items-center'>
     
        <div className=" text-lg ">ABOUT ME</div>
        <div className=" font-normal text-center text-[#1C1B1F] ">I’m a 19 year old taught developer, looking for opportunities  to work in a environment that would allow me to experience many challenges and learn many things! I mainly have experience learning full stack web development, with some experience with android development. </div>
        {visible == false &&<Image alt="Click to Expand About me" 
        className='mt-8 animate-bounce duration-1000' 
        width={36} height={32} 
        src="/expand_circle_down.svg" 
        onClick={handleClick}/>}
        { visible == true&& 
        <div className="font-normal flex flex-col gap-8 mt-8 text-center text-[#1C1B1F] ">
            <p>
                I'm a Software Engineer stationed in Atlanta, Georgia with a profound fascination in the diverse applications of coding. 
                Over the recent two years, I've dedicated significant hours to grasping and honing my programming skills, particularly focusing 
                on web development and a bit of Android development. Concurrently, I've ensured to deepen my knowledge in the foundational concept
                s like algorithms, data structures, problem-solving techniques, and the creation of functional software solutions.
            </p>
            <p>
                In the realm of web development, my expertise primarily lies in Javascript, both for the client and server sides. 
                However, of late, I've been contemplating diving into SpringBoot with Kotlin. On the backend, my inclination is towards REST APIs,
                 though I've had some exposure to GRAPHQL. My projects predominantly leverage the NoSQL database, MongoDB, where I feel most adept at query optimization and harnessing its advanced querying capabilities.
                  On the frontend spectrum, I've been infusing more animations and embracing design strategies such as wireframing to craft superior applications. Tailwind CSS has been my go-to for translating wireframes to code, but I'm equally proficient with MaterialUI.
            </p>
            <p>
                Recently, I've been refining my web-centric skills and seeking to broaden my grasp on tools frequently employed in professional environments. 
                Activities on my immediate agenda and those undertaken in the preceding days encompass getting acquainted with framer motion for animations, mastering the core concepts of SQL, and addressing any gaps in my understanding of Kotlin before embarking on Springboot.
                 I'm currently open to exploring new opportunities. You can find my contact details below.
            </p>

        </div>
        }

  </div>
     );
}

export default About;