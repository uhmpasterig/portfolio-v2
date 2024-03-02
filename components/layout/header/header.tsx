import { cn } from '@/lib/utils';
import { Navbar } from '../navbar/navbar';
import { Logo } from '../logo';

import { HeaderItems } from './header-items';

export const Header = () => {
  return (
    <header
      className={cn(
        'absolute top-0 z-50 flex w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div className="container h-16 max-w-screen-2xl items-center flex justify-between">
        <div className="flex">
          <div className="relative hidden md:flex items-center justify-center mr-6 h-8">
            <Logo height={40} width={40} skeletonClassName="w-8" />
          </div>
          <Navbar />
        </div>
        <HeaderItems />
      </div>
    </header>
  );
};
