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
      className="flex flex-col hover:shadow-md shadow-green-300 transition
    bg-[#151515] ring-2 ring-[#252525] rounded-xl"
    >
      <div className="h-70">
      <Image
        src={image}
        alt={name}
        width={500}
        height={610}
        className="w-full bg-[#222222] rounded-t-xl h-full"
        quality={100}
      />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="inline-grid space-y-2">
          <span className="text-xl font-semibold">{name}</span>
          <span>{type}</span>
        </div>
        <span>{description}</span>
        <div className="flex flex-wrap items-center gap-2 my-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full ring-2 ring-[#333333] bg-[#0A0A0A] py-1 px-4 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <RedirectButton url={url} label="Live Demo" image="/arrowup.svg" />
          <RedirectButton url={github} label="Github" image="/github.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
