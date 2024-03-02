import { type SchemaTypeDefinition } from 'sanity';
import { projects, navbarItems } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, navbarItems],
};
