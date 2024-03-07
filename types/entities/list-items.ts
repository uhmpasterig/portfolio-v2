export type Project = {
  title: string;
  description: string;
  image: string;
  links: {
    github: string;
    demo: string;
  };
  tags: string[];
};

export type Skill = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Language = Skill;

export type Projects = Project[];
export type Skills = Skill[];
export type Languages = Language[];
