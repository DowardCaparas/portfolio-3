import { projects } from "../lib/constants";
import ProjectCard from "../ui/project-card";
import { Fragment } from "react";

const Projects = () => {
  return (
    <div className="lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-150 ease-in my-14">
      <h3 className="md:text-4xl text-2xl font-bold mb-2">My Projects</h3>
      <span className="md:text-lg">This is my journey in web development.</span>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full mt-20">
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
