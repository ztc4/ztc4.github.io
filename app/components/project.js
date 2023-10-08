import Image from 'next/image';
import Link from 'next/link';


function Project({data}) {
    let {title,deployment,githubLink, images, figma} = data
    return ( 
        <div className="w-72 h-52  md:w-96 md:h-96 bg-zinc-300 shadow">
            <Image alt="project image" width={2400} height={2400} class="w-full h-4/6 object-cover" src={images[0] ?images[0] :  "/ecommerce-2.png"} />
            <div className='w-full h-2/6 text-xl  flex flex-col items-center justify-center'>
                <h4>{title}</h4>
                <div className='flex flex-row gap-2 '>
                   {figma &&  
                   <Link  href={figma} passHref>
                        <Image alt="project image" width={30} height={30} class="hover:scale-110" src="/Figma.svg" />
                    </Link>}
                    {deployment && 
                    <Link  href={deployment} passHref>
                        <Image alt="Deployment Link" width={30} height={30} class="hover:scale-110" src="/Vector-1.svg" />
                    </Link >}
                    <Link href={githubLink} passHref>
                        <Image alt="project image" width={30} height={30} class="hover:scale-110" src="/Vector.svg" />
                    </Link>
                    


                </div>

            </div>


        </div>
     );
}

export default Project;