export const projectsData = [
    {
      title: "Article Site",
      goals: ["Learning how to correctly write unit test","learn how to send images between the client and server side","Learning how figma works by wireframing the project."],
      description: `This is an application that allows users to post, like, and search throught users articles. The users can then later even access these liked articles through the liked articles page, in the my profile section. Users can also subscribe to other users and have their articles pop up in the subscribed section page. All articles are allowed to have their own image, and multiply paragraphs. The user can choose to search for articles and users, filter throught liked articles, or even their own articles. `,
      issues:`test driven development was an issue, I wrote all my test but ended up rewriting them since I wanted to do things like change my data for better synchorinization with my database schema. I would say I failed planning out how my data was gonna work with my frontend. I also had many issues sizing the image, but later I was able to format them better.
       `,
      images: [ "/ecommerce-2.png" ]
       ,
      accomplishments: ["Successfully learned Next.js, fulfilling my initial goal.","Surprisingly mastered Tailwind CSS, despite initial reservations and considering it to look like gibberish."],
      githubLink: "https://github.com/ztc4/article-site",
      deployment: "https://article-site-ztc4.vercel.app/",
      figma: "https://www.figma.com/file/mjkmQIBiVHFlPSasqSnOMw/article?type=design&node-id=0-1&mode=design&t=tFWjTkFin2PkxHy4-0"
  
  },

    {
        title: "Ecommerce site w/ stripe as payment system",
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
        images: [],
        accomplishments: [
            "The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.",
            "An unexpected accomplishment would be learning Tailwind. I made a mockery of it before, thinking it made the code look like gibberish.",
            "Now, I'm contemplating remaking this very portfolio site using Tailwind and my 500+ lines of css for this site look like garbage in comparison."
          ],
        githubLink: "https://github.com/ztc4/Ecommerce-Nextjs",
        deployment: "https://ecommerce-nextjs-xi-nine.vercel.app/",
        figma:null
    
    },
    {
      title: "Material UI Notes ",
      goals: [`Learn to create websites using material UI`,"do a little bit of refactoring of older code"],
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
      accomplishments: [`Implement React Context to handle state`,"Fixed a few errors in my API and fixed the error I was making of sending status after res.json/send"],
      githubLink: "https://github.com/ztc4/note-task-frontend",
      deployment: "note-task-frontend.vercel.app",
      figma: null
      
    
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
      images: [
      {name: "Contact List Image", link: "../images/contacts1.png"},
      {name: "Contact List Image", link: "../images/contacts2.png"},
    
    
    ],
      accomplishments: [
        "Understanding how to use create and use local databases in the future.",
        "Understanding how to use this data using the Viewmodel layer.",
        "Learned the MVM Architecture and how to implement it into future projects."
      ],
      githubLink: "https://github.com/ztc4/Contact-List-Kotlin",
      deployment:null,
      figma: null
    
    },



    
    ]