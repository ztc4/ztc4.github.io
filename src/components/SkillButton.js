import React from "react";

function SkillButton({title,openModal}) {
    return ( 
        <div className=" h-12 w-5/6 md:h-24 md:w-48 bg-slate-300 rounded-md flex my-4 md:m-8 justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-neutral-900" onClick={openModal}>
            <p className="text-neutral-800 text-lg  tracking-wider font-medium ">{title}</p>

        </div>
     );
}

export default SkillButton;