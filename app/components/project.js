import Image from 'next/image';
import Link from 'next/link';


function Project({data,index}) {
    let {title,deployment,githubLink, images, figma} = data
    return (
        <Link href={`/projects/${index + 1}`} passHref>
            <div className="w-72 h-72  md:w-96 md:h-96 bg-zinc-300 flex-nowrap cursor-pointer shadow hover:shadow-lg duration-500 hover:scale-105">
                <Image alt="project image" width={2400} height={2400} className="w-full h-4/6 object-cover" src={images[0] ?images[0] :  "/p-1.png"} />
                <div className='w-full h-2/6 text-lg p-2  flex flex-col items-center justify-center'>
                    <h4 className='text-ellipsis'>{title}</h4>
                    <div className='flex flex-row gap-2 z-20'>
                    {figma &&  
                    <Link  href={figma} passHref>
                            <Image alt="project image" width={30} height={30} className="hover:scale-110" src="/Figma.svg" />
                        </Link>}
                        {deployment && 
                        <Link  href={deployment} passHref>
                            <Image alt="Deployment Link" width={30} height={30} className="hover:scale-110" src="/Vector-1.svg" />
                        </Link >}
                        <Link href={githubLink} passHref>
                            <Image alt="project image" width={30} height={30} className="hover:scale-110" src="/Vector.svg" />
                        </Link>                       
                    </div>
                </div>
            </div>
        </Link> 

     );
}

export default Project;