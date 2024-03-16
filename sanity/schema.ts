import { type SchemaTypeDefinition } from 'sanity';
import { projects, navbarItems, skills, programmingLanguages, blogPosts, technologies } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, navbarItems, skills, programmingLanguages, blogPosts, technologies],
};
