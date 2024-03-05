import Image from 'next/image';
import { TagIcon } from 'lucide-react';
import { ProjectItemProps } from './project-item';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectItemTitleProps = Pick<ProjectItemProps, 'title' | 'tags'> & {
  imageUrl: string;
};

export const ProjectItemTitle = ({ imageUrl, title, tags }: ProjectItemTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={60}
          height={60}
          className="rounded-full shadow-sm h-8 w-8 object-contain overflow-hidden"
        />
      </div>

      <div className="flex flex-col justify-between items-start">
        <h3 className="text-base font-semibold">{title}</h3>

        <span className="flex items-center gap-1 text-xs text-foreground/30">
          <TagIcon className="h-3 w-3" size={24} />
          {tags.join(', ')}
        </span>
      </div>
    </div>
  );
};

ProjectItemTitle.Placeholder = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />

      <div className="flex flex-col justify-between items-start gap-2">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-40 h-3" />
      </div>
    </div>
  );
};
