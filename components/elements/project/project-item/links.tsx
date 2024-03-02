import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import { ProjectItemProps } from './project-item';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectItemLinksProps = Pick<ProjectItemProps, 'link' | 'githubUrl'>;

export const ProjectItemLinks = ({ link, githubUrl }: ProjectItemLinksProps) => {
  return (
    <>
      <Link
        href={githubUrl}
        className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
      >
        <GitHubLogoIcon className="h-5 w-4" />
        {githubUrl.split('/').slice(-2).join('/')}
      </Link>

      <Link
        href={link}
        className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
      >
        <LinkIcon className="h-4 w-4" />
        {link.split('/').slice(-2).join('')}
      </Link>
    </>
  );
};

ProjectItemLinks.Placeholder = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Skeleton className="w-32 h-5" />
      <Skeleton className="w-24 h-5" />
    </div>
  );
};
