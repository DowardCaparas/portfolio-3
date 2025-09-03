import { projects } from "../lib/constants";
import ProjectCard from "../ui/project-card";
import { Fragment } from "react";

const Projects = () => {
  return (
    <div className="lg:px-12 md:px-8 px-4 transition my-28">
      <h3 className="md:text-4xl text-2xl font-bold mb-2">My Projects</h3>
      <span className="md:text-lg">This is my journey in web development.</span>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-20 p-10">
        {projects.map((project) => (
          <Fragment key={project.name}>
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
