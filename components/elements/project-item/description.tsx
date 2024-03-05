import { Skeleton } from '@/components/ui/skeleton';
import { ProjectItemProps } from './project-item';

type ProjectItemDescriptionProps = Pick<ProjectItemProps, 'description'>;

export const ProjectItemDescription = ({ description }: ProjectItemDescriptionProps) => {
  return (
    <p className="text-foreground/90 text-sm font-medium">
      {description.length > 250 ? `${description.slice(0, 100)}...` : description}
    </p>
  );
};

ProjectItemDescription.Placeholder = () => {
  return <Skeleton className="w-full h-10" />;
};
