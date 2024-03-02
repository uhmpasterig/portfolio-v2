import { cn } from '@/lib/utils';

import { GreetingTitle, GreetingAbout } from '@/components/elements/greeting';
import { GridCross, GridItem } from '@/components/layout/grid';
import Image from 'next/image';
import { Logo } from '@/components/layout/logo';

export const Greeting = () => {
  return (
    <GridItem
      className={cn(
        'col-span-full flex flex-col items-center justify-center',
        'bg-transparent border-none',
        'lg:pt-16 lg:pb-20 lg:px-6',
        'pt-8 pb-10 px-3',
      )}
    >
      <div className="relative md:h-16 h-10 w-16 md:mb-5 mb-3">
        <Logo className={cn('absolute h-full w-auto inset-0 m-auto')} width={200} height={200} />
      </div>

      <div className={cn('mx-auto flex max-w-5xl flex-col items-center gap-2')}>
        <GreetingTitle />
        <GreetingAbout />
      </div>
    </GridItem>
  );
};
