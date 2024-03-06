import { defineField } from 'sanity';
import { FolderOpenDotIcon } from 'lucide-react';

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
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        defineField({
          name: 'demo',
          title: 'Demo',
          type: 'url',
          description: 'The link to the project',
        }),
        defineField({
          name: 'github',
          title: 'Github URL',
          type: 'url',
          description: 'The link to the projects github repository',
        }),
      ],
      description: 'The links of the project',
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
