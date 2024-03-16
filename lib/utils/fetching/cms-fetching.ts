'use server';
import client from './cms-utils';
import { promises as fs } from 'fs';
import type { Projects, NavbarItems, Skills, Languages, Blog, Technologys } from '@/types';

export async function fetchBlogPost(slug: string) {
  const blog = await client.fetch<Blog>(`*[_type == "blogPosts" && slug.current == $slug][0]`, {
    slug,
  });
  const file = await fs.readFile(process.cwd() + '/public/blog/name-of-the-blog.md', 'utf8');
  blog.content = file;
  return blog;
}

export async function fetchProjects(): Promise<Projects> {
  return await client.fetch(`*[_type == "projects"]`);
}

export async function fetchSkills(): Promise<Skills> {
  return await client.fetch(`*[_type == "skills"]`);
}

export async function fetchTechnologies(): Promise<Technologys> {
  return await client.fetch(`*[_type == "technologies"]`);
}

export async function fetchLanguages(): Promise<Languages> {
  return await client.fetch(`*[_type == "programmingLanguages"]`);
}

export async function fetchLists(): Promise<{
  projects: Projects;
  skills: Skills;
  languages: Languages;
  technologies: Technologys;
}> {
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const languages = await fetchLanguages();
  const technologies = await fetchTechnologies();

  return { projects, skills, languages, technologies };
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
