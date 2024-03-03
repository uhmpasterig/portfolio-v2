import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import { ProjectItemProps } from './project-item';
import { Skeleton } from '@/components/ui/skeleton';

const MAX_LINK_LENGTH = 17;

type ProjectItemLinksProps = Pick<ProjectItemProps, 'link' | 'githubUrl'>;
export const ProjectItemLinks = ({ link, githubUrl }: ProjectItemLinksProps) => {
  let linkText = link.split('/').slice(-2).join('/');
  if(linkText.startsWith('www.')) linkText = linkText.slice(4);
  if(linkText.startsWith('/')) linkText = linkText.slice(1);
  const githubText = githubUrl.split('/').slice(-2).join('/');
  return (
    <>
      <Link
        href={githubUrl}
        className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors whitespace-nowrap"
      >
        <GitHubLogoIcon className="h-5 w-4" />
        {githubText.length > MAX_LINK_LENGTH ? `${githubText.slice(0, MAX_LINK_LENGTH)}...` : githubText}
      </Link>

      <Link
        href={link}
        className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors whitespace-nowrap"
      >
        <LinkIcon className="h-4 w-4" />
        {link.length > MAX_LINK_LENGTH ? `${linkText.slice(0, MAX_LINK_LENGTH)}...` : linkText}
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
