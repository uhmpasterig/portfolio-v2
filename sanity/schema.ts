import { type SchemaTypeDefinition } from 'sanity';
import { projects, navbarItems, skills } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, navbarItems, skills],
};
