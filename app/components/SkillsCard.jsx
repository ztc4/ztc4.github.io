function Skills({category = "Programming", children}) {
    return ( 
        <div className="bg-white  text-black flex flex-col items-center p-4 border-[5px] border-blue  h-[300px] w-[300px]">
            <h2>{category}</h2>
            <div className="flex mt-4 flex-row flex-wrap gap-4">
            {children}
            </div>
        </div>
     );
}

export default Skills;