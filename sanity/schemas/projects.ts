// schemas/profile.ts

import { defineField } from 'sanity';
import { FolderOpenDotIcon } from 'lucide-react';

type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
};

export type SanityProject = {
  title: string;
  description: string;
  image: string;
  link: string;
  githubUrl: string;
  tags: string[];
};

export type SanityProjects = SanityProject[];

export const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: FolderOpenDotIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project',
      validation: (Rule) => Rule.required().min(3).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the project',
      validation: (Rule) => Rule.required().min(3).max(250),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'The link to the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
      description: 'The link to the projects github repository',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The tags of the project',
      validation: (Rule) => Rule.required(),
    }),
  ],
};

