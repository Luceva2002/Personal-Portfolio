import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="w-[300px] h-[400px] relative overflow-hidden rounded-lg shadow-lg border">
      <Image
        src={src}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-[200px]"
      />

      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
