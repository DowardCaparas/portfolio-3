export type ProjectCardTypes = {
  name: string;
  type: string;
  image: string;
  technologies: string[];
  url: string;
  github: string;
  description: string;
};

export type RedirectButtonTypes = {
  url: string;
  label: string;
  image: string;
};

export type TechnicalSkills = {
  category: string;
  skills: {
    name: string;
    icon: string;
  }[];
}