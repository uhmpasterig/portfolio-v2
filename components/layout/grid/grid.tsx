import { cn } from '@/lib/utils';

export const Grid = ({ children, className }: Component.HasChildAndClass) => {
  return <ul className={cn('grid w-full bg-border gap-px border border-border', className)}>{children}</ul>;
};
