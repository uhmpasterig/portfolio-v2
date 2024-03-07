import { defineField } from 'sanity';
import { Code2 } from 'lucide-react';

const LANGUAGE_TAGS = [
  'Frontend',
  'Backend',
  'Object-Oriented',
  'Functional',
  'Scripting',
  'Markup',
  'Statically Typed',
  'Dynamically Typed',
  'Compiled',
  'Interpreted',
  'Low-Level',
  'High-Level',
  'Procedural',
  'Declarative',
  'Imperative',
  'Concurrent',
  'Parallel',
  'Distributed',
  'Network',
  'Database',
  'Security',
  'DevOps',
  'Testing',
  'Mobile',
  'Web',
  'Desktop',
  'Embedded',
  'Game',
];

export const programmingLanguages = {
  name: 'programmingLanguages',
  title: 'Programming Languages',
  type: 'document',
  icon: Code2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the Language',
      validation: (Rule) => Rule.required().min(2).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the Language',
      validation: (Rule) => Rule.required().min(3).max(250),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The logo of the Language',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The tags of the Language (Frontend, Backend, Object-Oriented, Functional, etc.)',
      options: {
        list: LANGUAGE_TAGS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
};
