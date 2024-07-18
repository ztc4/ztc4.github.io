"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  function toggleNav() {
    setToggle((current) => !current);
  }

  return (
    <div className="">
      {/* OPEN CLOSE MENU */}
      <button
        onClick={toggleNav}
        aria-label="Open the Nav Menu"
        className={`  bg-[#d9d9d9] cursor-pointer sm:hidden  top-6 right-7 z-50  absolute 
        ${toggle && "hidden"}`}
      >
        <Image
          height={20}
          width={20}
          className="h-8 w-8"
          alt=""
          src="/icons/menu.svg"
        />
      </button>
      {toggle && (
        <button
          aria-label="Expand Menu Button"
          onClick={toggleNav}
          className={`border-white bg-white border-2 flex justify-center items-center rounded-full p-2 absolute z-50 top-10 size-10  ${
            toggle ? "left-44" : "sm2:hidden    sm:left-20"
          }`}
        >
          <Image
            // Corrected onClick syntax for React
            width={8}
            height={8}
            src="/icons/arrow_forward_ios-1.svg"
            className="object-fill h-4 w-4 z-10 duration-500"
            alt="Button to Expand NavBar"
          />
        </button>
      )}

      <div
        className={`w-48 ${
          !toggle && "hidden w-0"
        } sm:hidden text-secondary-dark flex gap-3 px-4 bg-background-dark pt-10 flex-col h-screen [&>*]:duration-1000 duration-1000 [&>*]:w-full [&>*]:border-2 [&>*]:text-center  [&>*]:rounded-3xl [&>*]:py-2  [&>*]:px-4 [&>*:hover]:hover:bg-white [&>*:hover]:text-secondary-light  text-[20px]`}
      >
        <Link href="resume" className=" ">
          Resume
        </Link>
        <Link href="projects" className="  ">
          Projects
        </Link>
        <Link href="skills">Skills</Link>
        <button onClick={toggleNav} className=" ">
          close
        </button>
      </div>
    </div>
  );
}

export default Nav;
