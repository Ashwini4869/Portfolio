import React from "react";
import { ImLocation2 } from "react-icons/Im";
import { GoMail } from "react-icons/go";
import { BsTelephonePlusFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="text-slate-700 flex flex-col">
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
      {/* Links to Socials */}
      <div></div>
    </div>
  );
};

export default Contact;
