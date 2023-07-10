import React from "react";
import Card from "./Card";
import NN_front from "../../public/assets/NN_frontend.png";

const Projects = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="text-4xl font-bold text-slate-700">PROJECTS</div>
      <div className="mt-4 mb-8 flex flex-col items-center">
        <Card
          image_url={NN_front}
          title="Novel Navigator"
          desc="WebApp for personalized book recommendations. Created Using React and Flask."
          project_link="https://github.com/Ashwini4869/Novel-Navigator-vite"
        />
      </div>
    </div>
  );
};

export default Projects;
