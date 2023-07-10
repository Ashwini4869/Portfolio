import React from "react";
import Skillparse from "./Skillparse";

const About = () => {
  return (
    <div className="flex items-center flex-col mt-8 text-4xl font-semibold text-slate-700">
      SKILLS & INTERESTS
      <div className="mt-8 p-4 grid grid-cols-5 gap-x-16 gap-y-4">
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="The logo icon for HTML"
          title="HTML5"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="The logo icon for CSS"
          title="CSS3"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="The logo icon for Tailwind"
          title="Tailwind CSS"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          alt="The logo icon for Javascript"
          title="Javascript"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="The logo icon for Typescript"
          title="Typescript"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="The logo icon for python"
          title="Python"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for Nodejs"
          title="NodeJS"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          alt="The logo icon for express"
          title="Express"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
          alt="The logo icon for flask"
          title="Flask"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="The logo icon for mongodb"
          title="MongoDB"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
          alt="The logo icon for Numpy"
          title="Numpy"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
          alt="The logo icon for pandas"
          title="pandas"
        />

        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="The logo icon for git"
          title="Git"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for github"
          title="GitHub"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          alt="The logo icon for C"
          title="C"
        />
        <Skillparse
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="The logo icon for C++"
          title="C++"
        />
      </div>
    </div>
  );
};

export default About;
