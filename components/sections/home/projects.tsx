'use client';
import { cn, getImageUrl } from '@/lib/utils';

import { GridItem, Grid } from '@/components/layout/grid';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { TagIcon, GitBranch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProjects } from '@/lib/utils';
import type { SanityProject, SanityProjects } from '@/sanity/schemas';

import { useState, useEffect } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState<SanityProjects>([]);

  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <Grid className="w-full mb-10">
      <GridItem className="col-span-full h-11 text-center mt-10 flex items-center justify-center">
        <h2 className="font-mono text-lg text-foreground/50 tracking-tighter">Projects</h2>
      </GridItem>

      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          githubUrl={project.githubUrl}
          tags={project.tags}
        />
      ))}

      <GridItem className="col-span-full h-11 text-center" />
    </Grid>
  );
};

type ProjectProps = {} & SanityProject;

const Project = ({ title, description, image, link, githubUrl, tags }: ProjectProps) => {
  const imageUrl = getImageUrl(image);

  return (
    <GridItem className="col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-5 flex flex-col gap-2">
      <div className="flex  items-center gap-3">
        <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center">
          <Image src={imageUrl} alt={title} width={40} height={40} />
        </div>

        <div className="flex flex-col justify-between items-start">
          <h3 className="text-base font-semibold">{title}</h3>

          <span className="flex items-center gap-1 text-xs text-foreground/30">
            <TagIcon className="h-3 w-3" size={24} />
            {tags.join(', ')}
          </span>
        </div>
      </div>

      <p className="text-foreground/90 text-sm font-medium">
        {description.length > 250 ? `${description.slice(0, 100)}...` : description}
      </p>

      <p className="text-xs font-medium inline-block text-foreground/30 ">
        <Link href="test" className="hover:underline hover:text-foreground/50 transition-colors">
          Merge pull request #1 from uhmpasterig/dev Dev
        </Link>
      </p>

      <div className="flex flex-row items-center justify-between gap-2">
        <span className="text-foreground/30 text-xs font-medium">
          6h ago on{' '}
          <Link href="test" className="text-white hover:underline">
            <GitBranch className="inline-block h-4 w-4" size={24} />
            main
          </Link>
        </span>

        <Link
          href={githubUrl}
          className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
        >
          <GitHubLogoIcon className="h-5" />
          {githubUrl.split('/').slice(-2).join('/')}
        </Link>

        <Link
          href={link}
          className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
        >
          <GlobeIcon className="h-5" />
          {link.split('/').slice(-2).join('')}
        </Link>
      </div>
    </GridItem>
  );
};
