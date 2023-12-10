"use client"
import Image from 'next/image'
import Link from 'next/link'
import About from './components/about'
import ImageCarousel from './components/Image-Carousel'

export default function Home() {

  const images = [
    'url-to-your-first-image.jpg',
    'url-to-your-second-image.jpg',
    'hello',
    "red",
    "four"
    // ... more images
];
  return (
    //Image && Navigation Section
<div className="w-screen min-h-screen flex flex-col min-[400px]:px-10 md:px-20 lg:px-30 2xl:px-60 font-semibold p-4 py-12 text-stone-900 font-['Sloth'] bg-white">
  <div className="flex flex-row ">
    <Image alt="An Image of Zachary" width={2000} height={2000} className=" w-40 h-40 min-[400px]:w-72 min-[400px]:h-72    lg:w-96 lg:h-96  rounded-tl-[50px] rounded-tr-lg rounded-bl-lg rounded-br-[50px] drop-shadow-2xl " src="/image-1.webp" />
    <div className='ml-4 min-[500px]:ml-20 pt-4 md:gap-8 lg:gap-14 duration-500 flex flex-col'> 
      <div className='flex flex-row'>
        <Image alt="Arrow Pointing to the Page Your Own" className=' duration-1000' width={18} height={18} src="/arrow_forward_ios.svg" />
        <Link  href={""}  className=" cursor-pointer text-emerald-300 lg:text-4xl min-[400px]:text-2xl font-semibold ">HOME</Link>
      </div>   
      
      <Link href={"skills"} className=" text-stone-900 duration-500 hover:translate-x-6 hover:text-emerald-300 cursor-pointer min-[400px]:text-2xl lg:text-4xl hover: font-semibold ">SKILLS</Link>
      <Link  href={"projects"}  className=" text-stone-900  duration-500 hover:translate-x-6 hover:text-emerald-300 cursor-pointer min-[400px]:text-2xl lg:text-4xl font-semibold ">PROJECTS</Link>
      <Link  href={"contact"}   className=" text-stone-900  duration-500 hover:translate-x-6 hover:text-emerald-300 cursor- min-[400px]:text-2xl lg:text-4xl font-semibold ">CONTACT</Link>
    </div>
  </div>

  <div className='flex-col flex mt-6 mb-8 gap-0'>
    <div className=" text-stone-900 -mb-1 text-4xl md:text-5xl lg:text-9xl font-normal">Zachary Coats</div>
    <div className=" text-stone-900 text-lg lg:text-4xl font-semibold">Junior Software Engineer</div>
    <div className="text-sm text-[#1C1B1F] lg:text-xl font-normal ">@zachary4coats@gmail.com<br/></div>
    

  </div>
  {/* <div className='relative'>
    <ImageCarousel images={images} />;
  </div> */}
  
  

  <About/>

</div>
  )
}
