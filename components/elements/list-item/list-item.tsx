import { GridItem } from '@/components/layout/grid';
import { ProjectItemTitle, ProjectItemDescription, ProjectItemTags } from '.';
import { cn } from '@/lib/utils';
import type { ListItemProps } from '@/types';

export const ListItem = (props: ListItemProps) => {
  return (
    <GridItem
      className={cn(
        'col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-4 flex flex-col gap-1 justify-evenly',
        'group',
      )}
    >
      <ProjectItemTitle data={props} />
      <ProjectItemDescription data={props} />
      <ProjectItemTags data={props} />
    </GridItem>
  );
};
