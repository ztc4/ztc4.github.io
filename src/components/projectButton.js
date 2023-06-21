import React from "react"

function ProjectButton({title, image,openModal}) {
   
    return ( 
        <div className=" h-52 md:w-96 cursor-pointer hover:scale-105 shadow-black shadow-md hover:shadow-black hover:shadow-lg rounded-md w-9/12 mx-6 my-4 bg-neutral-900 flex flex-col" onClick={openModal}>
           <img src={image} alt={title} className="h-5/6 rounded-t-md"></img>
           <p className="pl-4 py-1  text-neutral-400">{title ||"title"}</p>

        </div>
     );
}

export default ProjectButton;