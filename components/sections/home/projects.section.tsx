import { GridItem, Grid } from '@/components/layout/grid';
import { fetchProjects } from '@/lib/utils';
import type { Projects } from '@/types';
import { ProjectItem } from '@/components/elements/project-item';

export const ProjectSection = async () => {
  const projects = await fetchProjects();

  return (
    <section className="w-full mb-10">
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

        {/* NOT NEEDED ANYMORE DUE TO SSR
      {projects.length === 0 && Array.from({ length: 6 }).map((_, i) => <ProjectItem.Placeholder key={i} />)} */}

        <GridItem className="col-span-full h-11 text-center" />
      </Grid>
    </section>
  );
};
