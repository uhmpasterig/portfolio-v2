import { type SchemaTypeDefinition } from 'sanity';
import { projects, navbarItems, skillGroup } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, navbarItems, skillGroup],
};
