import { Skeleton } from '@/components/ui/skeleton';
import { Animate } from '@/components/animate';
import type { ListItemDescriptionProps } from '@/types';

export const ProjectItemDescription = ({ data: { description } }: ListItemDescriptionProps) => {
  return (
    <Animate variant="top" delay={0.25}>
      <p className="text-foreground/50 text-sm font-medium">
        {description.length > 250 ? `${description.slice(0, 100)}...` : description}
      </p>
    </Animate>
  );
};
