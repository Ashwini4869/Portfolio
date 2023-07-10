import React from "react";
import Image from "next/image";

const Skillparse = ({
  source,
  alt,
  title,
}: {
  source: string;
  alt: string;
  title: string;
}) => {
  return (
    <Image
      className="hover:scale-110 transition duration-150"
      width={90}
      height={90}
      src={source}
      alt={alt}
      title={title}
    />
  );
};

export default Skillparse;
