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

export type Projects = Project[];
