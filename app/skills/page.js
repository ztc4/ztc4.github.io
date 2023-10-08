import Image from 'next/image'
import Link from 'next/link'
import Skill from '../components/skill';
import {frontend,backend,languages} from "./skills.data"

export const metadata = {
    title: 'Skills',
    description: 'Zachary Coats Skills as an Web developer',
  }

function Skills() {

    function skillInfoConstructor(text,color,facing){
        return {color: color, text: text, direction: facing}
    }

    let data = {text:"hello", color:"\green", facing:"left"}
    return ( 
<div className="w-screen overflow-x-hidden min-h-screen  flex flex-col min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold p-4 py-12 text-stone-900 font-['Sloth'] bg-white">


    <div className='flex-col flex mt-6 mb-12 gap-4'>
        <h1 className=" text-stone-900 -mb-1 text-4xl md:text-5xl  lg:text-9xl font-normal">Skills</h1>
        <div className=" font-normal text-left text-[#1C1B1F] ">I am most experienced in frontend web development, with backend express.js being the second best. I have 
                built a solid foundation by learning many things from C# to Kotlin and experience with web development,
                allows me to gain skills that can translate from mobile to desktop. Lately have been paying attention to 
                mistakes with architecture and design problems in my applications! 
    </div>
    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Programming </span>Languages</h3>
    <div className='flex flex-row flex-wrap gap-1 md:gap-4 left-0  w-full'>
        {languages.map(language => <Skill color="red" text={language.description} name={language.name} key={language.name}/>)}

    </div>
    

    
    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Frontend </span>Frameworks</h3>
    <div className='flex flex-row flex-wrap gap-1 md:gap-4 left-0 justify-center min-[355px]:justify-start  w-full'>
        {frontend.map(frontendFramework => <Skill color="green" text={frontendFramework.description} name={frontendFramework.name} key={frontendFramework.name}/>)}
    </div>
    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Backend </span>Frameworks</h3>
    <div className='flex flex-row flex-wrap gap-1 md:gap-4 left-0  w-full'>
        {backend.map(language => <Skill color="blue" text={language.description} name={language.name} key={language.name}/>)}
    </div>
    <p className='text-[#727272]'>Skills are ranked in order of proficiency and experience</p>

    

  </div>
  <Link className="outline text-red-800 " href="/" passHref>
            <Image alt="Back Button" width={10} height={10} src="/arrow_back_ios.svg" className="absolute left-0 top-0 h-10 w-10 md:h-16 md:w-16 m-4 ml-8   rounded-full cursor-pointer  "></Image>
    </Link>
</div>
     );
}

export default Skills;