import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v2024-03-02',
});

const imageBuilder = imageUrlBuilder(client);

export function getImageUrl(source: string) {
  let imageUrl = imageBuilder.image(source);
  console.log("imageUrl", imageUrl.url());
  return imageUrl.url();
}

export async function fetchProjects() {
  const projects = await client.fetch(`*[_type == "projects"]`);
  return projects;
}

export default client;
