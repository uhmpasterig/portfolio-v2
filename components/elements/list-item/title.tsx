import Image from 'next/image';
import { LinkIcon } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Animate } from '@/components/animate';
import { Separator } from '@/components/ui/separator';
import type { ListItemTitleProps } from '@/types';
import Link from 'next/link';

export const ProjectItemTitle = ({ data }: ListItemTitleProps) => {
  return (
    <Animate variant="left" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center flex-shrink-0">
        <Image
          src={data.image}
          alt={data.title}
          width={60}
          height={60}
          className="rounded-full shadow-sm h-8 w-8 object-contain overflow-hidden"
        />
      </div>

      <div className="flex w-full items-center gap-2">
        <h3 className="flex-none text-base font-semibold whitespace-nowrap">{data.title}</h3>
        <Separator className="flex-grow w-auto" />
        <Links data={data} />
      </div>
    </Animate>
  );
};

const Links = ({ data: { links } }: ListItemTitleProps) => {
  return (
    <>
      {links && (
        <div className="flex-none flex items-center gap-2">
          {links.github && (
            <Link href={links.github}>
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
          )}
          {links.github && links.demo && <Separator className="w-2" />}
          {links.demo && (
            <Link href={links.demo}>
              <LinkIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};
