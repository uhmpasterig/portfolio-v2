import { fetchSkills, getImageUrl } from '@/lib/utils';
import { Grid } from '../layout/grid';
import { ListItem } from '../elements/list-item';

export const SkillsSection = async () => {
  const skills = await fetchSkills();
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <Grid>
        {skills.map((project, i) => (
          <ListItem
            key={i}
            image={getImageUrl(project.image)}
            title={project.title}
            links={{}}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </Grid>
    </section>
  );
};
