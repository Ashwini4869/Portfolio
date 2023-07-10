import Image from "next/image";
import React from "react";

const Card = ({
  image_url,
  title,
  desc,
  project_link,
}: {
  image_url: string;
  title: string;
  desc: string;
  project_link: string;
}) => {
  return (
    <div className="bg-white p-4 w-1/2 text-slate-700 font-sans">
      <Image
        width={500}
        height={500}
        src={image_url}
        alt="Project_Cover"
        className="rounded-md"
      ></Image>
      <h1 className="font-semibold mt-2 pt-2 pl-2">{title}</h1>
      <h1 className="p-2">{desc}</h1>
      <a
        href="project_link"
        className="mt-1 px-3 py-1 hover:bg-emerald-600 hover:text-white rounded-full mb-2"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Card;
