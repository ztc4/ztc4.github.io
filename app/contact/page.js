"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const metadata = {
    title: 'Contact Me',
    description: 'Enter you email and information you want to ask me!',
  }

function Contact() {

    const [contact,setContact] = useState({name: "", email: "", message: ""})

function changeContact(e){
  setContact(current => ({...current, [e.target.name]: e.target.value}))
  console.log(contact)
}
    return ( 
    <>
        <section className="min-h-screen w-screen  bg-neutral-900 py-8 text-slate-200    m-0">
            <h2 className="uppercase text-center text-4xl ">Contact me</h2>
            <div className="w-36 h-1 mt-6 bg-stone-400 mx-auto shadow-sm "></div>
            <p className="text-center md:font-light mt-6 px-2 mb-8 font-thin tracking-tight">I am interested in any offers! Don’t hesitate to ask anything or discuss opportunities not surrounding my skills!</p>
            <form className="flex flex-col justify-center items-center " action="https://formsubmit.co/zachary4coats@gmail.com" method="POST">
                <input type="text" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 p-2 w-5/6 mb-6 md:w-3/6 rounded" placeholder="Full name" name="name" onChange={changeContact} value={contact.name} required></input>
                <input type="email" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 w-5/6 p-2 mb-6 md:w-3/6 rounded" placeholder="Email address" onChange={changeContact} value={contact.email} name="email" required></input>
                <textarea type="text" className=" text-neutral-900 focus:shadow-black focus:shadow-md focus:outline-none focus:border-b-8 focus:border-sky-600 h-48 w-5/6 tracking-wider  p-2 mb-6 md:w-3/6 rounded text-start" onChange={changeContact} value={contact.message} name="message" placeholder="Your Message" required></textarea>
                <div className="p-2 md:w-3/6 w-5/6">
                    <input type="submit" className="bg-sky-600 self-start w-24 font-medium tracking-tight rounded-full hover:cursor-pointer  p-2" value="Send" required></input>
                </div>
            </form>

        </section>
        <Link className="outline text-red-800 " href="/" passHref>
            <Image alt="Back Button" width={10} height={10} src="/arrow_back_ios.svg" className="absolute left-0 top-0 h-10 w-10 md:h-16 md:w-16 m-4 ml-8   rounded-full cursor-pointer  "></Image>
        </Link>
    </>
     );
}

export default Contact;