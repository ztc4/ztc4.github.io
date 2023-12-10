import Image from "next/image";
import Link from "next/link";



async function Blog({data}) {


    return (
        <Link target="_black" href={`https://article-site-ztc4.vercel.app/article/${data._id}`} alt={`Blog post titled ${data.title}`} className="flex flex-col flex-shrink-0 w-72 h-72 " passHref>
            <Image alt="An Image of Zachary" width={2000} height={2000} className="rounded-2xl  bg-pink h-4/5 w-full flex-shrink-0  " src={`https://article-website-images.s3.amazonaws.com/${data._id}.webp`}  />
            
            <div className="flex flex-row justify-between">
                <p>Author - {data.author}</p>
                <p>Likes - {data.likes}</p>
            </div>
            <h1>{data.title}</h1>
            {/* Check if article is not null before trying to access its properties */}
            
            
        </Link>
    );
}

export default Blog;