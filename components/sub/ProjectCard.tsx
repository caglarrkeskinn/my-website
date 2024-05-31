import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url?: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </a>

      <div className="p-4 bg-[#1a1a2e]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
