'use client';

import { Animate } from '@/components/Animate';
import { useListContext, useListItemContext } from '..';
import Image from 'next/image';
import { Separator } from '@/components/ui';
import { Links } from './ListItemLinks';
import { cn } from '@/lib/utils';
import React from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';

export const ListItemTitle = () => {
  const { image, title } = useListItemContext();
  const { variant } = useListContext();
  const isLarge = variant === 'large-icons';
  const Title = isLarge ? LargeTitle : SmallTitle;

  return <Title />;
};

const LargeTitle = () => {
  const { image, title } = useListItemContext();
  let { publicationDate, author, description } = {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si coactum est inique, non continuo, ut Platonis in Timaeo, sed legimus alio modo, secundum naturam ipsam vivere. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Quodcumque in mentem incideret, et quodcumque tamquam occurreret.',
    publicationDate: '08/12/2021',
    author: 'Luca',
  };
  return (
    <Animate variant="left" className="flex flex-col items-center gap-3">

      {/* <div className="flex w-full items-center gap-2 mt-2">
        <Separator className="flex-grow w-auto" />
        <h3 className="flex-none text-base font-semibold whitespace-nowrap">{title}</h3>
        <Separator className="flex-grow w-auto" />
      </div> */}
    </Animate>
  );
};

const SmallTitle = () => {
  const { image, title } = useListItemContext();

  return (
    <Animate variant="left" className="flex flex-row items-center gap-3">
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
        <Links />
      </div>
    </Animate>
  );
};
