import React from "react";
import NN_front from "../../public/assets/NN_frontend.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-8 flex flex-col items-center mb-8 shadow-md"
    >
      <div className="text-4xl font-bold text-slate-700">PROJECTS</div>
      <div className="mt-4 mb-8 flex flex-col items-center">
        <div className="bg-white p-4 w-1/2 text-slate-700 font-sans border-emerald-500 border-2 rounded-md">
          <Image
            width={500}
            height={500}
            src={NN_front}
            alt="Project_Cover"
            className="rounded-md"
          ></Image>
          <h1 className="font-semibold mt-2 pt-2 pl-2">Novel Navigator</h1>
          <h1 className="p-2">
            WebApp for personalized book recommendations. Developed using React
            and Flask.
          </h1>
          <a
            href="https://github.com/Ashwini4869/Novel-Navigator-vite"
            className="mt-1 px-3 py-1 hover:bg-emerald-600 hover:text-white rounded-full mb-2"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
