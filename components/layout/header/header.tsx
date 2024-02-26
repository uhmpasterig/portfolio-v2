import { cn } from '@/lib/utils';
import { Navbar } from '../navbar/navbar';
import { Logo } from '../logo';

import { HeaderItems } from './header-items';

export const Header = () => {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 flex w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div className="container h-16 max-w-screen-2xl items-center flex justify-between">
        <div className='flex'>
          <Logo />
          <Navbar />
        </div>
        <HeaderItems />
      </div>
    </header>
  );
};
