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
      className="grid md:grid-cols-2 grid-cols-1 gap-4
    bg-[#0A0A0A] border-2 border-[#252525] p-5 rounded-xl"
    >
      <Image
        src={image}
        alt={name}
        width={500}
        height={610}
        className="w-full bg-[#151515] rounded-xl"
        quality={100}
      />
      <div className="flex flex-col gap-8">
        <div className="inline-grid space-y-2">
          <span className="text-xl font-semibold">{name}</span>
          <span>{type}</span>
        </div>
        <span>{description}</span>
        <div className="flex flex-wrap items-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full ring-2 ring-[#333333] py-1 px-4 text-sm"
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
