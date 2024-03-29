import { defineField } from 'sanity';
import { NewspaperIcon } from 'lucide-react';

const BLOG_POST_TAGS = ['Coding'];

export const blogPosts = {
  name: 'blogPosts',
  title: 'Blog Posts',
  type: 'document',
  icon: NewspaperIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the Blog Post',
      validation: (Rule) => Rule.required().min(2).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the Blog Post',
      validation: (Rule) => Rule.required().min(3).max(250),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug of the Blog Post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'filename',
      title: 'Filename',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200) + '.md',
    },
      description: 'The name of the Markdown File located in the /public/blog directory (should be the same as the slug)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The tags of the Language (Frontend, Backend, Object-Oriented, Functional, etc.)',
      options: {
        list: BLOG_POST_TAGS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
};
