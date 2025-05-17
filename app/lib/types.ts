import { LucideIcon } from "lucide-react";

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

export type CertificateTypes = {
  name: string;
  organization: string;
  orglogo: string;
  url: string;
  image: string;
  date: string;
  skills: string[];
  description: string;
}

export type NavLinksTypes = {
  label: string;
  url: string;
  icon: LucideIcon;
}