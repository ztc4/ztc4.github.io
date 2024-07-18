
  export default function RootLayout({ children, pathname }) {
    console.log(1, children);
    return (
      <html lang="en">
        <head>
   
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Zachary's portfolio showcasing full-stack development projects, skills in HTML, CSS, JavaScript, React, Node.js, and more. Contact for web development services and collaboration."
          />
          <meta
            name="keywords"
            content="Skills ,full-stack developer,  Hello Zachary, HelloZachary, Skills, portfolio, HTML, CSS, JavaScript, React, Node.js, web development, Zachary, freelance web developer, front-end developer, back-end developer"
          />
          <meta name="author" content="Zachary Coats" />
          <link rel="canonical" href="https://hellozachary.dev" />
          <title>Skills| Zachary Coats</title>
          <link rel="icon" href="/version-4/title.svg" type="image/x-icon" />
             
        </head>
  
        <body
        >
          {children}
        </body>
      </html>
    );
}