import { cn } from '@/lib/utils';

import { GreetingTitle, GreetingAbout } from '@/components/elements/greeting';
import { GridCross, GridItem } from '@/components/layout/grid';
import Image from 'next/image';

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
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="md:h-16 h-10 w-auto md:mb-5 mb-3"
      />

      <div className={cn('mx-auto flex max-w-5xl flex-col items-center gap-2')}>
        <GreetingTitle />
        <GreetingAbout />
      </div>
    </GridItem>
  );
};
