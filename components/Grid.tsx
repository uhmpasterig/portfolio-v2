import { cn } from '@/lib/utils';

export const Grid = ({ children, className }: Props.HasChildrenAndClassName) => {
  return (
    <ul className={cn('relative grid w-full gap-3', 'grid-cols-12 grid-flow-row-dense auto-rows-max', className)}>
      {children}
    </ul>
  );
};

export const GridItem = ({ children, className }: Props.HasChildrenAndClassName) => {
  return (
    <li
      className={cn(
        'relative overflow-hidden',
        'bg-childBackground',
        'border-border/50 border-2',
        'rounded-md',
        className,
      )}
    >
      {/* <span className='absolute bg-cyan-600/30 blur-3xl h-20 w-20 top-0 -translate-y-1/2 left-0 translate-x-2/3'></span> */}
      {children}
    </li>
  );
};
