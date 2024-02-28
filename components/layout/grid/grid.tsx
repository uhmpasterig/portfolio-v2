import { cn } from '@/lib/utils';

export const Grid = ({ children, className }: Component.HasChildAndClass) => {
  return (
    <ul
      className={cn(
        'relative grid w-full gap-3',
        'grid-cols-12 grid-flow-row-dense auto-rows-max',
        className,
      )}
    >
      {children}
    </ul>
  );
};
