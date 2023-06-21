import React from "react"
import SkillButton from "./components/SkillButton";
import SkillModal from "./components/Skillmodal";
import ProjectButton from "./components/projectButton";
import ProjectModal from "./components/ProjectModal";

function App() {

  const [skillModal,setSkillModal,]= React.useState({active:false,currentSkillOpened: 1})
  const skills = [
    {
    name: "JavaScript",
    description: `The first programming language I learned.
     I would say this is the language i'm most proficient in using, 
     and prefer to use just because of the familiarity of the syntax and my understand of the underlying structure of the language.
      As a result of this being my first language, I learnt many features that are javacript specific like hoisting, event loop and even its prototype inheritance system(OOP for Javascript). `},
    {
      name: "Java",
      description: `I have a little proficiency with java, the main reason is I don't use it as often for projects and I couldn't really find any advantages of the language compared to others.
       Initially I learned javaFx, but even that seemed outdated. My current opinion of the language is that its useless outside of an corporate back-end development environment.
        When I first learned this language I was interested in implementing an artificial neural network, but I later realized I should of just learned python or went with C/C++.
        It might not be a total lost cause, because I might run into kotlin in the future`
    },
    {
      name: "Node.js",
      description: `I would say node.js is one of the key tools,
       but I don't want to use this section to talk about things 
       like express, or mongoose.
        I would rather talk about my understanding of nodes built in modules and features. 
        I've got some experience with the fundamentals like implementing my own streams(readable or writable) and sending buffer data across it. Worked with Event emitters, learned about binary data and went into networking layers.`
    },
    {
      name: "React.js",
      description: "When first learning things like javascript, html and css I still couldn't understand how some of my favorite sites used their data in a flexible manner. Learning react and how it takes things beyond the simple static website by saving the trouble of creating elements with vanilla javascript really opened my eyes! I can use the core features like life cycle(useEffect) and controlling state(useState) without looking at things like documention."
    },
    {
      name: "Next.js",
      description: `Not much to take away from next.js because its used to simplify things I've already done before like structuring my routing.
       The concept of being able to divide server side and client side rendering on some react components to allow for better seo is outputs the number reason this would be my go to framework.
       I've used alittle of the api feature but still prefer creating my api myself using a back-end framework like express.`
    },
    {
      name: "CSS",
      description: "Learned more than enought css, prefer to use flexbox over grid."
    },
    {
      name: "Tailwind CSS",
      description: "I would use tailwind css over css anyday just because of the speed I can implement most things. When first learning I thought it made the code to long, but once you really understand the words for the properties, and the abiility to not have to create new ids or classes for elements it looks way more structures"
    },
    {
      name: "MongoDB",
      description: "This my go to for database, especially because I can easily set up an database on the cloud with mongo atlas. I personally like to use the mongoose framework , and haven't used just regular mongodb in months. I can connect documents and even add subdocuments with ease."
    },
    {
      name: "Git",
      description: " I know how to branch off my work, add,commit and push to github. Not much to put here "
    }

  ];
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

  const projects = [
{
    title: "Ecommerce site w/ stripe as payment system",
    goals: `Learn how to use Stripe Api.
    Learn the ins and outs of Next.js, mainly how to use the Search Engine Optimizations features and,
    making a backend using the in-built api features `,
    description: `The project itself is simplistic itself, try to mimic an online shopping site.
     I focused less on login/logout functionally and instead went for just a simple cart feature that connected to stripe.
      I somehow found the tradeoffs that next.js can inccur with trying to optimize SEO and using react client components.  `,
    issues:` I couldn't get the inbuilt api to work how I wanted(I was on a experimental version at the time) so just opted for an outside server with express.js.
     I also made errors in structuring which components should be clientside & which should be server side.
     This ended up with me not having an overarching state(redux,context) and instead making several extra api calls to my server and sending more data than it should be.
     I once messed up my project playing with TypeScript, so I had to find a git version that didn't mess up my deploy.
     `,
    images: [
    {name: "homescreen", link: "../images/ecommerce-1.png"},
    {name: "homescreen", link: "../images/ecommerce-2.png"},
    {name: "homescreen", link: "../images/ecommerce-3.png"},
    {name: "homescreen", link: "../images/ecommerce-4.png"},
    {name: "homescreen", link: "../images/ecommerce-cart.png"},
    {name: "homescreen", link: "../images/ecommerce-checkout.png"},
    {name: "homescreen", link: "../images/ecommerce-shopify.png"}

],
    accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
     An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
    but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
    githubLink: "https://github.com/ztc4/Ecommerce-Nextjs",
    deployment: "https://ecommerce-nextjs-xi-nine.vercel.app/",

},
{
    title: "Javascript Personal Game",
    goals: `Not many goals going into this, Just generally interested in exploring the event Listeners behind games and the oop principles that was shown in small tutorial video games.`,
    description: `A game that allow you to move the your player, interact with other characters(npcs) that allow you to access dialogs to understand your current task and even fight enemies.`,
    issues:` Videos were boring so I dropped them after learning the basic collision using squares, and manipulation of the canvas itself.
     `,
    images: [
      {name: "Group page", link: "../images/Current-Group.png"},

],
    accomplishments: `Greater understanding writing code in a non web-development sense`,
    githubLink: "https://github.com/ztc4/Personal-Game-Project",
    deployment: "https://personal-game-project.vercel.app/",

},
{
  title: "Share, Create, Edit & Sort Task",
  goals: `This is my first self-created full stack projects. 
  The goal when starting this project was to learn how to make a server(express.js),
  use a database to store data and learning how to connect client-side(front-end) to back-end `,
  description: `This project allows user to create a task with a title, description, and even able to add a due date. 
  You are allowed to not only create personal task, but also join or create your own group then assign task to this group.
  Users can easily edit their task, delete task and search task by title, or type(personal or group)`,
  issues:"When making this project I struggled in editing and deleting subdocuments that were arrays filled with objects, also I struggled linking my pages together due to not knowing react-router ",
  images: [
  {name: "Login", link: "../images/Home-Screen.png"},
  {name: "Task", link: "../images/Properties.png"},
  {name: "Create Note", link: "../images/Create-Note.png"},
  {name: "Group page", link: "../images/Current-Group.png"},
  {name: "Edit Note", link: "../images/Edit-Note.png"}
],
accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
githubLink: "https://github.com/ztc4/Full-Stack-Task-App",
deployment: "",

},

]



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
      
      <header className={`min-h-screen w-screen App-header bg-slate-900 text-slate-200 pl-14 pr-10 py-8  `}>
        
        <div className="flex flex-row flex-nowrap items-center ">
          <img src={"../images/mainpic.jpg"} alt="picture of me" className="h-12 w-12 md:w-20 md:h-20 rounded-full mr-8 "></img>
          <div>
            <h2 className="text-2xl opacity-90 md:text-4xl text-neutral-300  tracking-wider">Zachary Coats</h2>
            <h3 className="text-sm text-neutral-500 md:text-lg opacity-70 tracking-tighter -mt-2">Software Engineer</h3>
          </div>
          
        </div>
        
        
        
        <h2 className="text-4xl text-slate-200 mt-24  uppercase tracking-wider font-light mb-4">
         Introduction
        </h2>
        <p className="md:text-lg  md:w-4/6 lg:w-7/12">
        I am a software engineers who's harbor an great interest in exploring many different applications of programming .
        During the past two years, I have spent a tremendous amount of time learning and practicing computer programming, mainly in anything surrounding web development 
        but I have also not forgotten to educate myself on the fundamentals like
        algorithms and data structures, problem-solving, and building and launching real-world products online.
        <br></br>
        <br></br>
        <spam className="mt-4">
          When it comes to web development I currently use Javascript for the front-end and back-end. 
          I feel as if on the front-end of things I could pretty much make about anything that requires of me, 
          but am often stunted due to lack of web design instead of anything like css.
        </spam>
        <br></br>
        <br></br>
        <spam className="mt-4">
        Lately I've taken a great interest into branching out of web development by learning Java, finally adding my second language and shifting into more complex languages that allow me control things like multithreading and restricting myself to object oriented principles.
        </spam>
     
        

    </p>
     

      </header>
      <section className="min-h-screen min-h-screen w-screen what-section bg-slate-600 py-8 text-slate-200   pr-10 m-0">
        <h2 className="uppercase text-center text-4xl mt-16 font-semibold">What I DO</h2>
        <div className="pl-16 my-14 flex flex-row w-full md:w-4/6 m-auto md:text-lg">
          <div className="h-8 w-8 rounded-full  self-center  bg-stone-800"></div>
          <p className="ml-4">
          <span className="font-bold">Front-end Development:</span> I develop responsive, modern-looking front-ends.
           Most of the time, I use css , and  lately i've been using tailwind css for speed and ease of doing projects,
            I don't have much familiarity for component base css frameworks, but have an interest in learning one. As for JavaScript,
            I am an expert in React, and use a fair bit of Next.js for more complex projects with multiply pages.
          </p>
        </div>
        <div className="pl-16 my-14 flex flex-row w-full md:w-4/6 m-auto md:text-lg">
          <div className="h-8 w-8 rounded-full  self-center bg-stone-800"></div>
          <p className="ml-4">
          <span className="font-bold">Back-end Development: </span> 
           For server applications, most of the time, I use Node.js, Python, and C++ for cases that performance is critical. 
           When developing back-end systems,
           I always pay great attention to security, scalability, and performance.
          </p>
        </div>

      </section>
      <section className="min-h-screen w-screen skills bg-slate-950 py-8 text-slate-200    m-0">
        <h2 className="uppercase text-center text-4xl">Skills</h2>
        <div className="w-36 h-1 mt-6 bg-stone-400 mx-auto shadow-sm "></div>
        <div className="flex md:flex-row mx-auto flex-col items-center md:w-4/6 flex-wrap justify-center my-8">
          {skillbuttons}

        </div>

        
        
        
      </section>
      <section className="min-h-screen w-screen skills bg-zinc-800 py-8 text-slate-200   pr-10 m-0">
        <h2 className="uppercase text-center mb-8 text-4xl">Projects</h2>
        <div className="flex flex-col w-screen md:flex-row items-center justify-center ">
          {projectbutton}

        </div>
        
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

{skillModal.active && <SkillModal data={skills[skillModal.currentSkillOpened]} closeModal={closeModal}/>}
{projectModal.active && <ProjectModal data={projects[projectModal.currentSkillOpened]} closeModal={closeProjectModal}/>}
</div>
  );
}

export default App;
