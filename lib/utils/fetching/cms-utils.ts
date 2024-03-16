import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import type { Projects, NavbarItems, Skills, Languages, Blog } from '@/types';

// Set up the client and imageBuilder to fetch data from Sanity
export const client = createClient({
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


export default client;
