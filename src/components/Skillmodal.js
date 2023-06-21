import React from "react"

function SkillModal({data, closeModal}) {
    console.log(data)
    return (
        <div>

        
            <div className="h-full w-full md:h-72 md:w-5/12 bg-neutral-800 contrast-100 blur-sm opacity-90  rounded-md shadow-lg shadow-neutral-900 fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 md:-translate-y-3/4">
              

            </div>
            <div className="h-5/6 w-96 md:h-72 md:w-5/12 bg-neutral-200 rounded-md  shadow-md shadow-neutral-900 fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 md:-translate-y-3/4">
                <div className="flex flex-row  py-3 flex-nowrap justify-between text-3xl">
                    <h5 className="text-2xl ml-8">{data.name || "title"}</h5>
                    <button className="float-right mr-4 hover:text-neutral-700 text-neutral-500 " onClick={closeModal}>x</button>
                </div>
                <p className="ml-8 text-neutral-600 text-lg">{data.description ||"There is no description for this skill"}</p>
            </div>
        </div>

     );
}

export default SkillModal;