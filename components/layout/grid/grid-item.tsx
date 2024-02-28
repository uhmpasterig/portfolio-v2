import { cn } from '@/lib/utils';

export const GridItem = ({ children, className }: Component.HasChildAndClass) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        'bg-[#1D1D20]',
        'border-border/50 border-2',
        'rounded-md',
        className,
      )}
    >
      {/* <span className='absolute bg-cyan-600/30 blur-3xl h-20 w-20 top-0 -translate-y-1/2 left-0 translate-x-2/3'></span> */}
      {children}
    </div>
  );
};
