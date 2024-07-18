"use client";
import Link from "next/link";
// import { useState } from "react";
// function Nav() {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className=" sm:hidden  ">
//       <button
//         onClick={() => setOpen((c) => !c)}
//         className="absolute right-8 top-6 bg-red-700"
//       >
//         {" "}
//         OPEN
//       </button>
//       {open && (
//         <div className="bg-background-dark float-right duration-1000 absolute right-0 h-screen sticky h-screen z-20 w-[300px] top-0">
//           <div className=" flex text-[20px] [&>*]:text-center [&>*]:rounded-3xl [&>*]:duration-1000 [&>*]:py-2 [&>*:hover]:hover:bg-white [&>*:hover]:text-secondary-light [&>*]:border-2 [&>*]:w-full px-4  items-center just text-white  flex-col gap-4 mt-12">
//             <Link href="resume" className=" ">
//               Resume
//             </Link>
//             <Link href="projects" className="  ">
//               Projects
//             </Link>
//             <Link href="skills">Skills</Link>
//             <button onClick={()=> setOpen(c => !c)} className=" "> close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Nav;

import Image from "next/image";
import { useState } from "react";

function Nav() {
 
  const [toggle, setToggle] = useState(false);
  function toggleNav() {
    setToggle((current) => !current);
  }

  return (
    <div className=" sm:hidden">
      {/* OPEN CLOSE MENU */}

      <button
        onClick={toggleNav}
        aria-label="Open the Nav Menu"
        className={` items-center bg-[#d9d9d9] cursor-pointer sm:hidden  top-6 right-7 z-50  absolute right-0
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

{toggle &&       <button
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
          className={`object-fill h-4 w-4 z-10 duration-500 ${toggle && "rotate"}`}
          alt="Button to Expand NavBar"
        />
      </button>
}
      <div
        className={`bg-background-dark h-screen sm:overflow-hidden py-4 max-h-screen z-10 visible hover:overflow-y-auto  flex flex-col w-[200px] rounded-r-xl !duration-[1500ms]  drop-shadow-md gap-8 relative  text-white font-haskoy-regular ${
          toggle ? " min-w-fit px-6  w-72 block" : "   sm:px-6  w-0  sm:w-48"
        }`}
      >
        {/* <!-- Header --> */}

        <div className={`  flex text-[20px] [&>*]:text-center [&>*]:rounded-3xl [&>*]:py-2 [&>*]:duration-1000 [&>*]:px-4 [&>*:hover]:hover:bg-white [&>*:hover]:text-secondary-light [&>*]:border-2 [&>*]:w-full px-4  items-center just text-white  flex-col gap-4 mt-12 ${!toggle && "hidden"}`}>
          <Link href="resume" className=" ">
            Resume
          </Link>
          <Link href="projects" className="  ">
            Projects
          </Link>
          <Link href="skills">Skills</Link>
          <button onClick={toggleNav} className=" ">
            {" "}
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
