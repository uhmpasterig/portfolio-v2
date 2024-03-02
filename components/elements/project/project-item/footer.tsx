import Link from 'next/link';
import { GitBranch } from 'lucide-react';
import { ProjectItemProps } from './project-item';
import { ProjectItemLinks } from './links';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectItemFooterProps = Pick<ProjectItemProps, 'link' | 'githubUrl'>;

export const ProjectItemFooter = ({ link, githubUrl }: ProjectItemFooterProps) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <span className="text-foreground/30 text-xs font-medium">
        6h ago on{' '}
        <Link href="test" className="text-foreground/70 hover:underline">
          <GitBranch className="inline-block h-3.5 w-3.5" size={24} />
          main
        </Link>
      </span>

      <ProjectItemLinks link={link} githubUrl={githubUrl} />
    </div>
  );
};

ProjectItemFooter.Placeholder = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <span className="text-foreground/30 text-xs font-medium">
        <Skeleton className="w-24 h-5" />
      </span>

      <ProjectItemLinks.Placeholder />
    </div>
  );
};
