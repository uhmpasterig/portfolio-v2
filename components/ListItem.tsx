import { GridItem } from '@/components/Grid';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import { LinkIcon } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Animate } from '@/components/Animate';
import { Separator } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

export type ListItemProps = {
  image: string;
  title: string;
  links?: {
    github?: string;
    demo?: string;
  };
  description: string;
  tags: string[];
};

export const ListItem = (props: ListItemProps) => {
  return (
    <GridItem
      className={cn(
        'col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-4 flex flex-col gap-1 justify-evenly',
        'group',
      )}
    >
      <ListItemTitle data={props} />
      <ListItemDescription data={props} />
      <ListItemTags data={props} />
    </GridItem>
  );
};

type ListItemTitleProps = {
  data: Pick<ListItemProps, 'title' | 'image' | 'links'>;
};

const ListItemTitle = ({ data }: ListItemTitleProps) => {
  return (
    <Animate variant="left" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center flex-shrink-0">
        <Image
          src={data.image}
          alt={data.title}
          width={60}
          height={60}
          className="rounded-full shadow-sm h-8 w-8 object-contain overflow-hidden"
        />
      </div>

      <div className="flex w-full items-center gap-2">
        <h3 className="flex-none text-base font-semibold whitespace-nowrap">{data.title}</h3>
        <Separator className="flex-grow w-auto" />
        <Links data={data} />
      </div>
    </Animate>
  );
};

const Links = ({ data: { links } }: ListItemTitleProps) => {
  return (
    <>
      {links && (
        <div className="flex-none flex items-center gap-2">
          {links.github && (
            <Link href={links.github}>
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
          )}
          {links.github && links.demo && <Separator className="w-2" />}
          {links.demo && (
            <Link href={links.demo}>
              <LinkIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};

type ListItemDescriptionProps = {
  data: Pick<ListItemProps, 'description' | 'image'>;
};

const ListItemDescription = ({ data: { description } }: ListItemDescriptionProps) => {
  return (
    <Animate variant="top" delay={0.25}>
      <p className="text-foreground/50 text-sm font-medium">
        {description.length > 250 ? `${description.slice(0, 100)}...` : description}
      </p>
    </Animate>
  );
};

type ListItemTagsProps = {
  data: Pick<ListItemProps, 'tags'>;
};

const ListItemTags = ({ data: { tags } }: ListItemTagsProps) => {
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
