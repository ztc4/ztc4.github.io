function Job({title = "Launch Code", description}) {
    return ( 
        <div className=" bg-[#FF4654] group flex flex-col h-1/3 pt-12 justify-between w-full px-4">
            <p className=" text-white font-sloth-base text-lg">{description}</p>

            <p className="text-white group-hover:text-3xl duration-700 text-2xl self-start font-extrabold tracking-wide ">{title}</p>
        </div>
     );
}

export default Job;
