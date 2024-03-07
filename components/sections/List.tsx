import { Grid } from '@/components/Grid';
import { fetchProjects, getImageUrl } from '@/lib/utils';
import { ListItem, ListItemProps } from '@/components/ListItem';

type ListSectionProps = {
  title: string;
  items: ListItemProps[];
};

export const ListSection = async ({ title, items }: ListSectionProps) => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <Grid>
        {items.map((item, i) => (
          <ListItem
            key={i}
            image={item.image}
            title={item.title}
            links={item.links}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </Grid>
    </section>
  );
};
