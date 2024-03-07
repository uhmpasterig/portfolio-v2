/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/cms/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { markdownSchema } from 'sanity-plugin-markdown';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/cms',
  title: 'cms.lucaa.sh',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [structureTool(), markdownSchema(), visionTool({ defaultApiVersion: apiVersion })],
});
