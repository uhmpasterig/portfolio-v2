import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

import type { Projects, NavbarItems } from '@/types';
import { Skills } from '@/types/entities/skill';

// Set up the client and imageBuilder to fetch data from Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v2024-03-02',
});
const imageBuilder = imageUrlBuilder(client);

// Utils function to convert data
export function getImageUrl(source: string) {
  let imageUrl = imageBuilder.image(source);
  return imageUrl.url();
}

// Functions to fetch data from Sanity
export async function fetchProjects(): Promise<Projects> {
  return await client.fetch(`*[_type == "projects"]`);
}

export async function fetchSkills(): Promise<Skills> {
  return await client.fetch(`*[_type == "skills"]`);
}

export async function fetchNavbarItems(): Promise<NavbarItems> {
  return await client.fetch(`*[_type == "navbarItems"] | order(index asc)`);
}

export async function fetchHeaderInfo(): Promise<{
  navbarItems: NavbarItems;
}> {
  const navbarItems = await fetchNavbarItems();
  return { navbarItems };
}

export default client;
