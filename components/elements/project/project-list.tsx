'use client';
import { GridItem, Grid } from '@/components/layout/grid';
import { fetchProjects } from '@/lib/utils';
import type { Projects } from '@/sanity/schemas';
import { ProjectItem } from './project-item/project-item';

import { useState, useEffect } from 'react';

export const ProjectList = () => {
  const [projects, setProjects] = useState<Projects>([]);

  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <Grid>
      <GridItem className="col-span-full h-11 text-center mt-10 flex items-center justify-center">
        <h2 className="font-mono text-lg text-foreground/50 tracking-tighter">Projects</h2>
      </GridItem>

      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          githubUrl={project.githubUrl}
          tags={project.tags}
        />
      ))}

      {projects.length === 0 && Array.from({ length: 6 }).map((_, i) => <ProjectItem.Placeholder key={i} />)}

      <GridItem className="col-span-full h-11 text-center" />
    </Grid>
  );
};
