import { cn } from '@/lib/utils';

export const GreetingTitle = () => {
  return (
    <h1
      className={cn(
        'text-foreground  font-semibold tracking-tighter text-center',
        'text-2xl leading-tight',
        'md:text-3xl',
        'lg:text-4xl lg:leading-[1.1]',
        'text-transparent bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text'
      )}
    >
      <span className='hidden md:inline'>
        Hey, my name is Luca
      </span>
      <span className='md:hidden'>
        Uhmpasterig
      </span>
    </h1>
  );
};
