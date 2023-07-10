import React from "react";
import { ImLocation2 } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { BsTelephonePlusFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="text-slate-700 flex flex-col shadow-lg pb-4">
      <div className="flex items-center justify-end">
        <div className="px-8 text-xl font-semibold">Get In Touch</div>
        <div className="w-3/4 bg-emerald-600 h-1"></div>
      </div>
      {/* Grid for location,email, and phone */}
      <div className="grid grid-cols-3 m-16 self-center gap-x-16 font-serif text-sm ">
        <div className="flex flex-col items-center shadow-md p-2">
          <ImLocation2 size={28} />
          <h1 className="mt-1 ">Jadibuti-32, Kathmandu</h1>
        </div>
        <div className="flex flex-col items-center shadow-md p-2">
          <GoMail size={28} />
          <h1 className="mt-1 ">mandal.ashwini1412@gmail.com</h1>
        </div>
        <div className="flex flex-col items-center shadow-md p-2">
          <BsTelephonePlusFill size={28} />
          <h1 className="mt-1">977-9844536313</h1>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="px-8 text-xl font-semibold">Connect With Me</div>
        <div className="w-3/4 bg-emerald-600 h-1"></div>
      </div>
      {/* social links */}
      <div className="flex justify-between px-8 w-3/4 self-center mt-4 mb-8">
        {/* facebook */}
        <a
          href="https://www.facebook.com/ashwini.mandal.161"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-200 hover:bg-emerald-600 hover:text-white">
            <FaFacebookSquare size={28} />
          </div>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/ashwini_1412"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer  ease-in duration-200 hover:bg-emerald-600 hover:text-white">
            <FaTwitter size={28} />
          </div>
        </a>
        {/* Telegram */}
        <a href="https://t.me/Ashwini3593" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer  ease-in duration-200 hover:bg-emerald-600 hover:text-white">
            <FaTelegram size={28} />
          </div>
        </a>
        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/ashwini-mandal/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer  ease-in duration-200 hover:bg-emerald-600 hover:text-white">
            <FaLinkedin size={28} />
          </div>
        </a>
        {/* github */}
        <a
          href="https://github.com/Ashwini4869"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer  ease-in duration-200 hover:bg-emerald-600 hover:text-white">
            <FaGithubSquare size={28} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
