export const skills = [
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
    },{
      name: "Kotlin",
      description: `I learned this language for development in Android Applications`
    },
    {
      name: "Jetpack Compose",
      description: `This is the main library used when created mobile Applications. Learned it mainly because it's what used when learning android development through Google Android development course.`
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
    },
    {
      name: "Testing",
      description: " Mainly focusing on unit test, and maybe some integration test. Recently made my first test driven development project"
    },
    {
      name: "Figma",
      description: " I  have learned wireframing using figma, and turning that wireframe into a real-world project "
    }

  ];

  export const projects = [
    {
      title: "Article Site",
      goals: `Learning how to correctly write unit test,learn how to send images between the client and server side, and learning how figma works by wireframing the project.  `,
      description: `This is an application that allows users to post, like, and search throught users articles. The users can then later even access these liked articles through the liked articles page, in the my profile section. Users can also subscribe to other users and have their articles pop up in the subscribed section page. All articles are allowed to have their own image, and multiply paragraphs. The user can choose to search for articles and users, filter throught liked articles, or even their own articles. `,
      issues:`test driven development was an issue, I wrote all my test but ended up rewriting them since I wanted to do things like change my data for better synchorinization with my database schema. I would say I failed planning out how my data was gonna work with my frontend. I also had many issues sizing the image, but later I was able to format them better.
       `,
      images: [

      {name: "article", link: "../images/article-4.png"},
      {name: "article", link: "../images/article-5.png"},
      {name: "article", link: "../images/article-1.png"},
      {name: "article", link: "../images/article-2.png"},

  
  ],
      accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
       An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
      but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
      githubLink: "https://github.com/ztc4/article-site",
      deployment: "https://article-site-ztc4.vercel.app/",
  
  },

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
        {name: "ecommerce", link: "../images/ecommerce-1.png"},
        {name: "ecommerce", link: "../images/ecommerce-2.png"},
        {name: "ecommerce", link: "../images/ecommerce-3.png"},
        {name: "ecommerce", link: "../images/ecommerce-4.png"},
        {name: "ecommerce", link: "../images/ecommerce-cart.png"},
        {name: "ecommerce", link: "../images/ecommerce-checkout.png"},
        {name: "ecommerce", link: "../images/ecommerce-shopify.png"}
    
    ],
        accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
         An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
        but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
        githubLink: "https://github.com/ztc4/Ecommerce-Nextjs",
        deployment: "https://ecommerce-nextjs-xi-nine.vercel.app/",
    
    },
    {
      title: "Material UI Notes ",
      goals: `Learn to create websites using material UI`,
      description: `I took an older project for an notes application, and recreated an new ui for it using the material ui application`,
      issues:` Fix alot of errors in the api I was using to not cause errors, and add a few more endpoints to make the site crash less 
       `,
      images: [
      {name: "Note Image", link: "../images/note1.png"},
      {name: "Note Image", link: "../images/note3.png"},
      {name: "Note Image", link: "../images/note$.png"},
      {name: "Note Image", link: "../images/note5.png"},
      {name: "Note Image", link: "../images/note6.png"},
      {name: "Note Image", link: "../images/note7.png"}
    
    ],
      accomplishments: `This is the first website I ever used an state manager like React Context `,
      githubLink: "https://github.com/ztc4/note-task-frontend",
      deployment: "note-task-frontend.vercel.app",
      backend:"https://github.com/ztc4/note-task-backend"
    
    },
    {
      title: "Android Contact List",
      goals: `Solidify knowledge of data persistence(local database) with Room. Understand State and Navigation in Android. Practice newly acquired kotlin skills.`,
      description: `An android application created using jetpack compose, room, kotlin and the mvm architecture`,
      issues:` Issued understanding what I was implementing due to documentation; I was making it work but wasn't understanding whats an entity, or dao was, I struggled understanding these things connected.
       `,
      images: [
      {name: "Contact List Image", link: "../images/contacts1.png"},
      {name: "Contact List Image", link: "../images/contacts2.png"},
    
    
    ],
      accomplishments: `Understanding how to use create and use local databases in the future, and understanding how to use this data using the Viewmodel layer. I also learned the MVM Architecture< and how to implement it into future projects `,
      githubLink: "https://github.com/ztc4/Contact-List-Kotlin",
    
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
      title: "Share, Create, Edit & Sort Task(Outdated)",
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