import React from "react";

const Hero = () => {
  return (
    <div className="w-full border-black border h-screen flex items-center flex-col">
      <div className="mt-36 text-4xl text-slate-700 font-bold">
        Hi, I&apos;m <span className="text-emerald-600">Ashwini</span>
      </div>
      <div className="text-4xl font-bold text-slate-700 p-2">
        Final Year Computer Engineering Student
      </div>
      <p className="w-1/2 text-sm font-sans font-semibold text-slate-700  text-center p-2 tracking-wider">
        I am a final year computer engineering student (Pulchowk Campus, IOE)
        with a focus on web technologies such as ReactJS, NodeJS, and Express. I
        have hands-on experience working with them and am passionate about
        building modern web applications. I have a strong interest in DevOps and
        am motivated to streamline software delivery processes through
        automation and collaboration.
      </p>
    </div>
  );
};

export default Hero;
