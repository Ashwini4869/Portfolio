import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
const Hero = () => {
  return (
    <div id="about" className="pb-28 flex items-center flex-col shadow-md">
      <div className="mt-36 text-4xl text-slate-700 font-bold">
        Hi, I&apos;m <span className="text-emerald-600">Ashwini</span>
      </div>
      <div className="mt-2 text-4xl font-bold text-slate-700 p-2">
        Final Year Computer Engineering Student
      </div>
      {/* intro section */}
      <p className="w-1/2 mt-2 text-sm font-sans font-semibold text-slate-600  text-center p-2 tracking-wide">
        I am a final year computer engineering student (Pulchowk Campus, IOE)
        with a focus on web technologies such as ReactJS, NodeJS, and Express. I
        have hands-on experience working with them and am passionate about
        building modern web applications. I have a strong interest in DevOps and
        am motivated to streamline software delivery processes through
        automation and collaboration.
      </p>
      {/* resume section */}
      <div className="font-semibold text-slate-700 mt-4 flex items-center">
        <a
          className="px-3 py-2 hover:bg-emerald-600 hover:text-white rounded-full"
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          className="ml-2 p-[6px] hover:bg-emerald-600 hover:text-white rounded-md"
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <RiDownload2Fill size={"28px"} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
