'use client';
import { GridItem } from '@/components/Grid';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import { LinkIcon } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Animate } from '@/components/Animate';
import { Separator } from '@/components/ui';
import Link from 'next/link';
import React from 'react';
import { useListContext, ListItemContext, useListItemContext } from '@/lib/hooks/list-hooks';
import { Project } from '@/types';

export type ListItemProps<T> = {
  item: T;
};

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

const ListItemTitle = () => {
  const { image, title } = useListItemContext();
  return (
    <Animate variant="left" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="rounded-full shadow-sm h-8 w-8 object-contain overflow-hidden"
        />
      </div>

      <div className="flex w-full items-center gap-2">
        <h3 className="flex-none text-base font-semibold whitespace-nowrap">{title}</h3>
        <Separator className="flex-grow w-auto" />
      </div>
    </Animate>
  );
};

const Links = () => {
  const item = useListItemContext<Project>();

  return (
    <>
      {item.links && (
        <div className="flex-none flex items-center gap-2">
          {item.links.github && (
            <Link href={item.links.github}>
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
          )}
          {item.links.github && item.links.demo && <Separator className="w-2" />}
          {item.links.demo && (
            <Link href={item.links.demo}>
              <LinkIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};

const ListItemDescription = () => {
  const { description } = useListItemContext();

  return (
    <Animate variant="top" delay={0.25}>
      <p className="text-foreground/50 text-sm font-medium">
        {description.length > 250 ? `${description.slice(0, 100)}...` : description}
      </p>
    </Animate>
  );
};

const ListItemTags = () => {
  const { tags } = useListItemContext();
  return (
    <Animate variant="left" delay={0.4} className="flex flex-row gap-1 items-start mt-1">
      {tags.map((tag, i) => (
        <React.Fragment key={i}>
          <Animate
            key={i}
            className="text-xs text-cyan-500 font-semibold cursor-pointer hover:text-cyan-300 hover:underline transition-colors"
            variant="bottom"
            delay={0.7 + i * 0.15}
          >
            {tag
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </Animate>
          {i < tags.length - 1 && <span className="text-xs text-cyan-500 font-semibold mx-1">•</span>}
        </React.Fragment>
      ))}
    </Animate>
  );
};
