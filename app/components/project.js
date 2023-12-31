import Image from 'next/image';
import Link from 'next/link';


function Project({data,index}) {
    let {title,deployment,githubLink, images, figma} = data
    return (
        <Link href={`/projects/${index + 1}`} passHref>
            <div className="w-72 h-72  md:w-96 md:h-96 font-sloth-semibold   p-1  rounded-xl flex-nowrap cursor-pointer   duration-500 hover:scale-105">
                <Image alt="project image" width={2400} height={2400} className="w-full rounded-xl h-4/6 object-cover" src={images[0]} />
                <div className='w-full h-2/6 text-lg p-2  flex flex-col items-center justify-start'>
                    <h4 className='text-ellipsis text-pl'>{title}</h4>
                    <div className='flex flex-row w-56 z-20 [&>*]:duration-500 bg-gray-950/20 px-4 py-2 white outline gap-12 rounded-3xl'>
                    {figma &&  
                        <Link  href={figma} passHref>
                            <Image alt="project image" width={30} height={30} className="hover:scale-110" src="/Figma.svg" />
                        </Link>}
                        {deployment && 
                        <Link  href={deployment} passHref>
                            <Image alt="Deployment Link" width={30} height={30} className="hover:scale-110" src="/Web.svg" />
                        </Link >}
                        {githubLink && <Link href={githubLink} passHref>
                            <Image alt="project image" width={30} height={30} className="hover:scale-110" src="/github.svg" />
                        </Link>    }                   
                    </div>
                </div>
            </div>
        </Link> 

     );
}

export default Project;