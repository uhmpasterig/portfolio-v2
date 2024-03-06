import { defineField } from 'sanity';
import { TestTube2 } from 'lucide-react';

export const skills = {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: TestTube2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the skill/language',
      validation: (Rule) => Rule.required().min(3).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the skill/language',
      validation: (Rule) => Rule.required().min(3).max(250),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the skill/language',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The tags of the skill/language',
      validation: (Rule) => Rule.required(),
    }),
  ],
};
