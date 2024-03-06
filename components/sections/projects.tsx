import { Grid } from '@/components/layout/grid';
import { fetchProjects, getImageUrl } from '@/lib/utils';
import { ListItem } from '@/components/elements/list-item';

export const ProjectSection = async () => {
  const projects = await fetchProjects();

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Grid>
        {projects.map((project, i) => (
          <ListItem
            key={i}
            image={getImageUrl(project.image)}
            title={project.title}
            links={project.links}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </Grid>
    </section>
  );
};
