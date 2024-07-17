import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zachary Coats',
  description: 'Portfolio site for Zachary Coats, junior software engineer/developer used to allow people to see projects, what skills I currently have and a little about me!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Laila:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter &&"font-sans"}>{children}</body>
    </html>
  )
}
