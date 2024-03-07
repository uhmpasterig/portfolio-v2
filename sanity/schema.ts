import { type SchemaTypeDefinition } from 'sanity';
import { projects, navbarItems, skills, programmingLanguages, blogPosts } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, navbarItems, skills, programmingLanguages, blogPosts],
};
