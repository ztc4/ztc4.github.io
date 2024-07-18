import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zachary Coats",
  description:
    "Portfolio site for Zachary Coats, junior software engineer/developer used to allow people to see projects, what skills I currently have and a little about me!",
};

export default function RootLayout({ children, pathname }) {
  console.log(1, children);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Zachary's portfolio showcasing full-stack development projects, skills in HTML, CSS, JavaScript, React, Node.js, and more. Contact for web development services and collaboration."
        />
        <meta
          name="keywords"
          content="full-stack developer, portfolio, HTML, CSS, JavaScript, React, Node.js, web development, Zachary, freelance web developer, front-end developer, back-end developer"
        />
        <meta name="author" content="Zachary Coats" />
        <link rel="canonical" href="https://hellozachary.dev" />
        <title>Zachary | Full-Stack Developer Portfolio</title>
        <link rel="icon" href="/version-4/title.svg" type="image/x-icon" />
           
      </head>

      <body
        className={
          inter && "font-sans bg-background-light dark:bg-background-dark"
        }
      >
        {children}
      </body>
    </html>
  );
}
