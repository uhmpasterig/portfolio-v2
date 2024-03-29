'use client';
import { cn } from '@/lib/utils';
import { ListItemContext, ListItemProps } from '..';
import { GridItem } from '@/components/Grid';

import { ListItemTitle } from './ListItemTitle';
import { ListItemDescription } from './ListItemDescription';
import { ListItemTags } from './ListItemTags';

export const ListItem = <T,>({ item }: ListItemProps<T>) => {
  return (
    <ListItemContext.Provider value={item}>
      <GridItem
        className={cn(
          'col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-4 flex flex-col gap-1 justify-between',
          'group',
        )}
      >
        <div className="flex gap-1 flex-col">
          <ListItemTitle />
          <ListItemDescription />
        </div>
        <ListItemTags />
      </GridItem>
    </ListItemContext.Provider>
  );
};
