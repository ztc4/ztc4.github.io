export const projectsData = [

    {
      title: "ARTICLE CRAFT",
      goals: ["Learning how to correctly write unit test","learn how to send images between the client and server side","Learning how figma works by wireframing the project."],
      description: `This is an application that allows users to post, like, and search throught users articles. The users can then later even access these liked articles through the liked articles page, in the my profile section. Users can also subscribe to other users and have their articles pop up in the subscribed section page. All articles are allowed to have their own image, and multiply paragraphs. The user can choose to search for articles and users, filter throught liked articles, or even their own articles. `,
      issues:`Test driven development was an issue, I wrote all my test but ended up rewriting them since I wanted to do things like change my data for better synchronization with my database schema. I would say I failed planning out how my data was gonna work with my frontend. I also had many issues sizing the image, but later I was able to format them better. There were also many challenges with the deployment on the backend, I had trouble getting the aws lambda server to send images to the frontend, the data kept getting corrupted and that is something I still can't figure out the errors for!
       `,
      images: [ "/article-1.svg","/article-2.svg","/article-3.svg","/article-4.svg","/article-5.svg","/article-6.svg" ]
       ,
      accomplishments: ["Writing basic unit test","How to better optimize database queries and Fetches, allowing for less data used!","Learned the basics of wireframing with figma, allowing me to make better designs and speed up development!","Due to errors made in structure in frontend architecture, I learned what not to try again next time when structuring the pages and components!"],
      githubLink: "https://github.com/ztc4/article-site",
      deployment: "https://article-site-ztc4.vercel.app/",
      figma: "https://www.figma.com/file/mjkmQIBiVHFlPSasqSnOMw/article?type=design&node-id=0-1&mode=design&t=tFWjTkFin2PkxHy4-0",
      techstack:["Javascript","Next.js","React","Tailwind CSS","Express.js","Node.js"]
  
  },
  {
    title: "Business Chatbot",
    goals: ["Learning how to correctly write unit test","learn how to send images between the client and server side","Learning how figma works by wireframing the project."],
    description: `This is an application that allows users to post, like, and search throught users articles. The users can then later even access these liked articles through the liked articles page, in the my profile section. Users can also subscribe to other users and have their articles pop up in the subscribed section page. All articles are allowed to have their own image, and multiply paragraphs. The user can choose to search for articles and users, filter throught liked articles, or even their own articles. `,
    issues:`Test driven development was an issue, I wrote all my test but ended up rewriting them since I wanted to do things like change my data for better synchronization with my database schema. I would say I failed planning out how my data was gonna work with my frontend. I also had many issues sizing the image, but later I was able to format them better. There were also many challenges with the deployment on the backend, I had trouble getting the aws lambda server to send images to the frontend, the data kept getting corrupted and that is something I still can't figure out the errors for!
     `,
    images: [ "/asc-1.svg","/asc-2.svg"]
     ,
    accomplishments: ["Writing basic unit test","How to better optimize database queries and Fetches, allowing for less data used!","Learned the basics of wireframing with figma, allowing me to make better designs and speed up development!","Due to errors made in structure in frontend architecture, I learned what not to try again next time when structuring the pages and components!"],
    githubLink: "https://github.com/ztc4/article-site",
    deployment: "https://article-site-ztc4.vercel.app/",
    figma: "https://www.figma.com/file/mjkmQIBiVHFlPSasqSnOMw/article?type=design&node-id=0-1&mode=design&t=tFWjTkFin2PkxHy4-0",
    techstack:["Javascript","Nuxt.js","Vue.js", "Kotlin", "Spring Boot"," Tesseract", "Chatgpt", "SQL"]

},
  {
    title: "Sharing Task App",
    goals: [`Learn to create websites using material UI`,"do a little bit of refactoring of older code"],
    description: `I took an older project for an notes application, and recreated an new ui for it using the material ui application`,
    issues:` Fix alot of errors in the api I was using to not cause errors, and add a few more endpoints to make the site crash less 
     `,
    images: [ "/notes-1.svg","/notes-2.svg","/n-4.png","/n-5.png"

  
  ],
    accomplishments: [`Implement React Context to handle state`,"Fixed a few errors in my API and fixed the error I was making of sending status after res.json/send"],
    githubLink: "https://github.com/ztc4/note-task-frontend",
    deployment: "https://note-task-frontend.vercel.app",
    figma: null,
    techstack:["Javascript","Next.js","React","MaterialUI","Express.js","Node.js","Mongoose/Mongodb"]
    
  
  },
  {
    title: "Portfolio",
    goals: ["Designing a site using figma and implementing it responsively","Further practice wireframing and mapping out websites","Further practice with Next.js not using the mistakes I previously used!"],
    description: `My portfolio site, except using figma this time to allow for a better deisgn for desktop and mobile! `,
    issues:`No issues, when making the site
     `,
    images: [ "/po-1.svg","/po-2.svg","/po-3.svg" ]
     ,
    accomplishments: ["Wireframing and programming the site in one Day, or to be specific 12 hours"],
    githubLink: "https://github.com/ztc4/ztc4.github.io",
    deployment: "https://ztc4-github-io.vercel.app/",
    figma: "https://www.figma.com/file/L4BYc2wn8SjCwJAzm0gXAq/PORTFOLIO-DESIGN-WEB-PAGE?type=design&node-id=0-1&mode=design&t=WvWZbus4EZDAYPth-0",
    techstack:["Javascript","Next.js","React","Tailwind CSS","Framer-Motion", "Figma"]

},

    {
        title: "Ecommerce",
        goals: [
            "Learn how to use Stripe Api.",
            "Learn the ins and outs of Next.js, mainly how to use the Search Engine Optimizations features.",
            "Making a backend using the in-built api features of Next.js."
          ],
        description: `The project itself is simplistic itself, try to mimic an online shopping site.
         I focused less on login/logout functionally and instead went for just a simple cart feature that connected to stripe.
          I somehow found the tradeoffs that next.js can inccur with trying to optimize SEO and using react client components.  `,
        issues:` I couldn't get the inbuilt api to work how I wanted(I was on a experimental version at the time) so just opted for an outside server with express.js.
         I also made errors in structuring which components should be clientside & which should be server side.
         This ended up with me not having an overarching state(redux,context) and instead making several extra api calls to my server and sending more data than it should be.
         I once messed up my project playing with TypeScript, so I had to find a git version that didn't mess up my deploy.
         `,
        images: ["/e-1.svg","/e-2.svg","/e-2.svg"],
        accomplishments: [
            "The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.",
            "An unexpected accomplishment would be learning Tailwind. I made a mockery of it before, thinking it made the code look like gibberish.",
            "Using my first api  that I didn't create, the stripe payment API"
      
          ],
        githubLink: "https://github.com/ztc4/Ecommerce-Nextjs",
        deployment: null,
        figma:null,
        techstack:["Javascript","stripe-api","Next.js","React","Tailwind CSS","Express.js","Node.js"]
    
    },

    {
      title: "Android Contact List",
      goals: [
        "Solidify knowledge of data persistence(local database) with Room.",
        "Understand State and Navigation in Android.",
        "Practice newly acquired kotlin skills."
      ],
      description: `An android application created using jetpack compose, room, kotlin and the mvm architecture`,
      issues:` Issued understanding what I was implementing due to documentation; I was making it work but wasn't understanding whats an entity, or dao was, I struggled understanding these things connected.
       `,
      images: ["/c-1.svg","/c-2.svg" ],
      accomplishments: [
        "Understanding how to use create and use local databases in the future.",
        "Understanding how to use this data using the Viewmodel layer.",
        "Learned the MVM Architecture and how to implement it into future projects."
      ],
      githubLink: "https://github.com/ztc4/Contact-List-Kotlin",
      deployment:null,
      figma: null,
      techstack:["KOTLIN","ANDROID STUDIO","JETPACK COMPOSE","SQLLITE"]
    
    },



    
    ]