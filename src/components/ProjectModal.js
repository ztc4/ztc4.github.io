import React from "react"

function ProjectModal({data, closeModal}) {
    const [currentImage,setCurrentImage]= React.useState(0)
    function add(){
        if(currentImage >= data.images.length - 1){
            return setCurrentImage(current => 0)
        }
        else{
        setCurrentImage(current => current +1)}
        console.log(currentImage)
    }
    function remove(){
        if(currentImage <= 0){
            return setCurrentImage(current => data.images.length - 1)
        }
        else{
            setCurrentImage(current => current - 1)
        }
        
        console.log(currentImage)
       
    }
    let image = data.images[currentImage].link||data.images[0].link
    console.log(image)
   
    return (
        <div className=" h-screen md:p-auto  z-10  bottom-0 right-[0%] w-full  bg-slate-300 bg-opacity-50 fixed overflow-auto p-4 4">
            <div className="bg-slate-200 h-screen md:h-5/6 w-full md:w-10/12 md:mx-auto flex flex-col overflow-y-auto rounded-md shadow-md z-20 shadow-black pb-8 ">
                <div className="flex flex-row  py-3 flex-nowrap justify-between text-3xl border-b-2 border-solid border-slate-900">
                    <h5 className="text-2xl ml-8">{data.title || "title"}</h5>
                    <button className="float-right mr-4 hover:text-neutral-700 text-neutral-500 " onClick={closeModal}>x</button>
                </div>
                <img src={image} alt="Project Images" className=" w-full p-2 rounded-xl"></img>
                <div className="w-full flex flex-row justify-center">
                    <button className="h-12 w-12 bg-neutral-500 rounded-full m-2 opacity-70 hover:opacity-90" onClick={remove}>{`<--`}</button>
                    <button className="h-12 w-12 bg-neutral-500 rounded-full m-2 opacity-70 hover:opacity-90" onClick={add}>{`-->`}</button>
                </div>
                <h6 className="ml-8 text-neutral-900 font-semibold  text-center tracking-tighter text-lg mt-2 mb-0">Description</h6>
                <p className="ml-8 text-neutral-600 text-base ">{data.description ||"There is no description for this skill"}</p>
                <h6 className="ml-8 text-neutral-900 font-semibold  text-center tracking-tighter text-lg mt-8 mb-4">Goals of the Project</h6>
                <p className="ml-8 text-neutral-600  text-base">{data.goals}</p>
                <h6 className="ml-8 text-neutral-900 font-semibold tracking-tighter text-center text-lg mt-8 mb-4">What was Accomplished?</h6>
                <p className="ml-8 text-neutral-600 text-base">{data.accomplishments}</p>
                <h6 className="ml-8 text-neutral-900 font-semibold tracking-tighter text-center text-lg mt-8 mb-4">Technology Used:</h6>
                <div className="flex flex-row flex-wrap">
                    

                </div>
                <div className="flex flex-row ml-8">
                    <a href={data.deployment} className="h-10 min-w-24 bg-sky-950 text-sm flex justify-center items-center tracking-tighter font-semibold text-slate-100 mr-6 py-2 px-2" target="_blank">{`Go to Project -->`}</a>
                    <a href={data.githubLink} className="h-10 min-w-24 bg-sky-950 text-sm tracking-tighter font-semibold flex justify-center items-center text-slate-100 mr-6 p-1 py-2 px-2" target="_blank">{`Go to Source Code -->`}</a>

                </div>
                
                
                

            </div>

         </div>

     );
}

export default ProjectModal;