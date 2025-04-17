import { projects } from "../lib/constants";
import ProjectCard from "../ui/project-card";
import { Fragment } from "react";

const Projects = () => {
  return (
    <div className="lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-150 ease-in my-32">
      <h3 className="text-4xl font-bold">My Projects</h3>
      <div className="inline-grid space-y-6 w-full mt-20">
        {projects.map((project) => (
          <Fragment key={project.image}>
            <ProjectCard
              image={project.image}
              name={project.name}
              type={project.type}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
              github={project.github}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
