import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      id="/#home"
      className="border-black shadow-md w-full h-14 flex justify-between"
    >
      {/* //logo part */}
      <div>
        <Image
          src={Logo}
          className="h-14 w-auto p-2 ml-6 cursor-pointer"
          alt="Logo"
        />
      </div>
      {/* links part */}
      <div className="flex items-center w-1/3 justify-evenly font-semibold mr-6 text-slate-700">
        <Link
          className="px-3 py-2 hover:bg-emerald-600 hover:text-white rounded-full ease-in-out duration-300"
          href="/#home"
        >
          Home
        </Link>
        <Link
          className="px-3 py-2  hover:bg-emerald-600  hover:text-white rounded-full ease-in-out duration-300"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="px-3 py-2  hover:bg-emerald-600 hover:text-white rounded-full ease-in-out duration-300"
          href="/#skills"
        >
          Skills
        </Link>
        <Link
          className="px-3 py-2  hover:bg-emerald-600 hover:text-white rounded-full ease-in-out duration-300"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="px-3 py-2  hover:bg-emerald-600 hover:text-white rounded-full ease-in-out duration-300"
          href="/#contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
