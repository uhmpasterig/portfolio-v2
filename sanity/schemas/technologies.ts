import { defineField } from 'sanity';
import { Cpu } from 'lucide-react';

export const technologies = {
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  icon: Cpu,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the Technology',
      validation: (Rule) => Rule.required().min(3).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the Technology',
      validation: (Rule) => Rule.required().min(3).max(250),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the Technology',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The tags of the Technology',
      validation: (Rule) => Rule.required(),
    }),
  ],
};
