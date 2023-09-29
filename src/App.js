import React from "react"
import SkillButton from "./components/SkillButton";
import SkillModal from "./components/Skillmodal";
import ProjectButton from "./components/projectButton";
import ProjectModal from "./components/ProjectModal";
import {motion, AnimatePresence} from "framer-motion"
import { skills, projects } from "./skills";
import { whatIdo } from "./pageText";

function App() {

  const [skillModal,setSkillModal,]= React.useState({active:false,currentSkillOpened: 1})
 
  function openModal(num){
    setSkillModal(current => ({...current, active: true, currentSkillOpened: num}))
    console.log("opened the modal")
    console.log(num)

  }
  function closeModal(){
    setSkillModal(current => ({...current, active:false}))
  }


  //Projects

  const [projectModal,setProjectModal]= React.useState({active:false,currentSkillOpened: 1});
  function openProjectModal(num){
    setProjectModal(current => ({...current, active: true, currentSkillOpened: num}))
    console.log("opened the Project modal")
    console.log(num)

  }
  function closeProjectModal(){
    setProjectModal(current => ({...current, active:false}))
  }

  



// Contact Button

const [contact,setContact] = React.useState({name: "", email: "", message: ""})

function changeContact(e){
  setContact(current => ({...current, [e.target.name]: e.target.value}))
  console.log(contact)
}


//Map over for buttons

  let skillbuttons = skills.map((current,index) => { return(<SkillButton title={current.name}  openModal={()=> openModal(index)}/>)})
  let projectbutton = projects.map((current,index) => { return(<ProjectButton title={current.title} image={current.images[0].link}  openModal={()=> openProjectModal(index)} />)})
  return (
  <div className={(skillModal.active || projectModal.active) ? `App m-0  overflow-y-hidden`: `App m-0 bg-slate-200 overflow-x-hidden`}>
      
      <header className={`min-h-screen w-screen App-header bg-neutral-900 text-slate-200  flex  items-center flex-col py-8 px-4 `}>
        
        <motion.div
                                      initial={{ opacity: 0, x: -300 }} 
                                     animate={{ opacity: 1, x: 0 }}   
                                      transition={{ duration: 1 }}  
        
  
        className="flex flex-row flex-nowrap sm:w-3/5 x-32 self-center ">
          <motion.img
          whileTap={{scale:1.10, zIndex:4}}
          
          src={"../images/mainpic.jpg"} alt="picture of me" className="h-12 w-12 md:w-20 md:h-20 rounded-full mr-8 "></motion.img>
          <div>
            <h2 className="text-2xl opacity-90 md:text-4xl text-neutral-300  tracking-wider">Zachary Coats</h2>
            <h3 className="text-sm text-neutral-500 md:text-lg opacity-70 tracking-tighter -mt-2">Software Engineer</h3>
          </div>
          
        </motion.div>
        
        
        
        <motion.h2
                  initial={{ opacity: 0, x: -300 }} 
                  animate={{ opacity: 1, x: 0 }}   
                  transition={{ duration: 1.2 }}  
        className="text-4xl text-slate-200 mt-16  uppercase tracking-wider font-light mb-4">
         Introduction
        </motion.h2>
        <motion.p
                                      initial={{ opacity: 0, x: -300 }} 
                                      animate={{ opacity: 1, x: 0 }}   
                                      transition={{ duration: 1.2}}  
        className="md:text-[16px] tracking-tighter indent-8  xl:tracking-wider font-normal text-gray-400 font-sans    md:w-4/6 xl:w-7/12">
            {whatIdo.Introduction.p1}
        <br></br>
        <br></br>
        <spam className="mt-4 indent-5">
        {whatIdo.Introduction.p2}
        </spam>
        <br></br>
        <br></br>
        <spam className="mt-4 ">
        {`${whatIdo.Introduction.p3}`}
        </spam>
     
        

        </motion.p>
     

      </header>
      <section className="min-h-screen w-screen flex flex-col gap-1 px-4  bg-neutral-800 py-8 text-white  ">
        <h2 className="uppercase text-center text-4xl my-8 font-semibold">What I DO</h2>
        <motion.div
                              initial={{ opacity: 0, x: -300 }} 
                              whileInView={{ opacity: 1, x: 0 }}   
                              transition={{ duration: 1 }}  
        className=" flex flex-col w-full gap-4 md:w-4/6 mb-6 mx-auto md:text-lg">
          
        <p className=" font-sans md:text-[16px] ">
        <span className="font-bold">Front-end Development:</span> 
        {whatIdo.frontend.paragraph}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }} 
          whileInView={{ opacity: 1, x: 0 }}   
          transition={{ duration: 1.2 }}  
          className=" flex flex-row w-full md:w-4/6 mb-6 mx-auto md:text-lg">
         
          <p className=" md:text-[16px] font-sans ">
            <span className="font-bold ">Back-end Development: </span> 
            {whatIdo.backend.paragraph}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }} 
          whileInView={{ opacity: 1, x: 0 }}   
          transition={{ duration: 1.2 }}  
          className=" flex flex-row w-full md:w-4/6 mb-6 mx-auto md:text-lg">
         
          <p className=" md:text-[16px] font-sans ">
            <span className="font-bold ">Android Development: </span> 
            {whatIdo.android.paragraph}
          </p>
        </motion.div>

      </section>
      <section className="min-h-screen w-screen skills bg-neutral-900 py-8 text-slate-200  m-0">
        <h2 className="uppercase text-center text-4xl">Skills</h2>
        <div className="w-36 h-1 mt-6 bg-stone-400 mx-auto shadow-sm "></div>
        <motion.div
                      initial={{ opacity: 0, x: -100 }} 
                      whileInView={{ opacity: 1, x: 0 }}   
                      transition={{ duration: 1 }}  
        
        className="grid grid-cols-1 grid-flow-row gap-3 p-8 md:p-4 md:grid-cols-3 justify-center items-center w-full flex-wrap justify-center my-8">
          {skillbuttons}

        </motion.div>

        
        
        
      </section>
      <section className="min-h-screen w-screen skills bg-zinc-800 py-8 text-slate-200   pr-10 m-0">
        <h2 className="uppercase text-center mb-8 text-4xl">Projects</h2>
        <motion.div
              initial={{ opacity: 0, y: -100 }} 
              whileInView={{ opacity: 1, y: 0 }}   
              transition={{ duration: 1 }}  
              
        
        className="grid grid-cols-1 grid-flow-row gap-3 p-8 md:p-4 md:grid-cols-3 xl:grid-cols-4 w-screen min-h-fit  items-center justify-center ">
          {projectbutton}

        </motion.div>
        
      </section>
            <section className="min-h-screen w-screen skills bg-neutral-900 py-8 text-slate-200   pr-10 m-0">
<h2 className="uppercase text-center text-4xl ">Contact me</h2>
<div className="w-36 h-1 mt-6 bg-stone-400 mx-auto shadow-sm "></div>
<p className="text-center md:font-light mt-6 px-2 mb-8 font-thin tracking-tight">I am currently interested in work related to web & app development. I don't mind learning new languages or framework!</p>
<form className="flex flex-col justify-center items-center " action="https://formsubmit.co/zachary4coats@gmail.com" method="POST">
  <input type="text" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 p-2 w-5/6 mb-6 md:w-3/6 rounded" placeholder="Full name" name="name" onChange={changeContact} value={contact.name} required></input>
  <input type="email" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 w-5/6 p-2 mb-6 md:w-3/6 rounded" placeholder="Email address" onChange={changeContact} value={contact.email} name="email" required></input>
  <textarea type="text" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 h-48 w-5/6 tracking-wider  p-2 mb-6 md:w-3/6 rounded text-start" onChange={changeContact} value={contact.message} name="message" placeholder="Your Message" required></textarea>
  <div className="p-2 md:w-3/6 w-5/6">
    <input type="submit" className="bg-sky-600 self-start w-24 font-medium tracking-tight rounded-full  p-2" value="Send" required></input>
  </div>
 
</form>
<p className="ml-8 md:text-center text-md text-stone-200 px-2 mt-8 font-semibold tracking-normal">If you prefer to contact me directly through email:</p>
<p className="ml-8 md:text-center  text-md text-stone-400 px-2 font-medium tracking-tighter">zachary4coats@gmail.com</p>
<p className="ml-8  md:text-center text-md text-stone-200 px-2 mt-5 font-semibold tracking-normal">MyLinkedIn account:</p>
<div className="flex justify-center">
  <a href="https://www.linkedin.com/in/zachary-coats-651211270/" className="ml-8   text-md text-stone-400 px-2 font-medium tracking-tighter">https://www.linkedin.com/in/zachary-coats-651211270/</a></div>

</section>
<AnimatePresence>
  {skillModal.active && <SkillModal data={skills[skillModal.currentSkillOpened]} closeModal={closeModal}/>}
  {projectModal.active && <ProjectModal data={projects[projectModal.currentSkillOpened]} closeModal={closeProjectModal}/>}
</AnimatePresence>
</div>
  );
}

export default App;
