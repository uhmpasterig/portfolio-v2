import { ListItem } from './list-item';

export type Project = {
  links: {
    github: string;
    demo: string;
  };
};

export type ProjectListItem = ListItem<Project>;
export type Projects = ProjectListItem[];
