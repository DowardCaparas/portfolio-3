import Image from "next/image";
import { ProjectCardTypes } from "../lib/types";
import RedirectButton from "./redirect-button";

const ProjectCard = ({
  name,
  type,
  image,
  technologies,
  url,
  github,
  description,
}: ProjectCardTypes) => {
  return (
    <div
      className="flex flex-col transition ring ring-gray-500 dark:ring-[#424242] rounded-xl"
    >
      <div className="md:h-70 sm:h-96 h-80">
      <Image
        src={image}
        alt={name}
        width={500}
        height={610}
        className="w-full rounded-t-xl h-full object-contain"
        quality={100}
      />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="inline-grid -mt-6">
          <span className="text-xl font-semibold">{name}</span>
          <span>{type}</span>
        </div>
        <span>{description}</span>
        <div className="flex flex-wrap items-center gap-2 my-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full ring-2 ring-gray-300 dark:ring-[#333333] bg-gray-200 
              dark:bg-[#0A0A0A] py-1 px-4 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <RedirectButton url={url} label="Live Demo" image="/arrowup.svg" />
          <RedirectButton url={github} label="Github" image="/github.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
