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
    <div className="flex flex-col dark:bg-[#313131] bg-white transition ring ring-gray-500 dark:ring-[#424242] rounded-xl">
      <div className="h-50 bg-gray-300 dark:bg-[#515151] rounded-t-xl">
        <Image
          src={image}
          alt={name}
          width={500}
          height={600}
          className="w-full rounded-t-xl h-full object-contain"
          quality={100}
        />
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 h-full justify-between p-4">
        <div className="inline-grid gap-2 -mt-6">
            <div className="inline-grid">
              <span className="text-xl font-semibold mt-4">{name}</span>
              <span>{type}</span>
            </div>
          <span className="text-sm text-gray-700 dark:text-white">
            {description}
          </span>
          <div className="flex flex-wrap items-center gap-2 my-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full ring-1 ring-gray-200 dark:ring-[#333333] bg-gray-100 
              dark:bg-[#212121] py-1 px-2 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
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
