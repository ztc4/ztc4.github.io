import Image from 'next/image'
import Link from 'next/link'
import Skill from '../components/skill';

function Skills() {

    function skillInfoConstructor(text,color,facing){
        return {color: color, text: text, direction: facing}
    }

    let data = {text:"hello", color:"\green", facing:"left"}
    return ( 
<div className="w-screen min-h-screen flex flex-col min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold p-4 py-12 text-stone-900 font-['Sloth'] bg-white">


    <div className='flex-col flex mt-6 mb-12 gap-0'>
        <h1 className=" text-stone-900 -mb-1 text-4xl md:text-5xl lg:text-9xl font-normal">Skills</h1>
        <div className=" font-normal text-left text-[#1C1B1F] ">I am most experienced in frontend web development, with backend express.js being the second best. I have 
                built a solid foundation by learning many things from C# to Kotlin and experience with web development,
                allows me to gain skills that can translate from mobile to desktop. Lately have been paying attention to 
                mistakes with architecture and design problems in my applications! 
    </div>
    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Programming </span>Languages</h3>
    <Skill {...skillInfoConstructor("javascript"),}/>


    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Frontend </span>Frameworks</h3>
    <h3 className=" text-stone-900 text-lg lg:text-4xl font-semibold"><span>Backend </span>Frameworks</h3>

    

  </div>

</div>
     );
}

export default Skills;