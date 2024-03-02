'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { Button, ButtonProps } from '../../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link, { LinkProps } from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type HeaderButton = {
  link?: false;
  tooltip: string;
} & ButtonProps;

type HeaderLink = {
  link?: true;
  tooltip: string;
  href: string;
} & LinkProps;

type HeaderButtonProps = HeaderLink | HeaderButton;

export const HeaderButton = ({
  link,
  tooltip,
  children,
  className,
  ...props
}: Props.HasChildrenAndClassName & HeaderButtonProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="w-10 h-10 flex items-center justify-center">
        <Skeleton className="h-8 w-8" />
      </div>
    );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className}>
          {link ? (
            <Button className={cn('h-10 w-10 py-2 px-0', className)} variant={'ghost'} asChild>
              <Link href={(props as HeaderLink).href} target="_blank">
                {children}
              </Link>
            </Button>
          ) : (
            <Button className={cn('h-10 w-10 py-2 px-0', className)} variant={'ghost'} {...(props as HeaderButton)}>
              {children}
            </Button>
          )}
        </TooltipTrigger>

        <TooltipContent className="bg-background text-foreground">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
