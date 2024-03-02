'use client';
import { cn } from '@/lib/utils';
import { isItemActive } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarItemProps = LinkProps;

export const NavbarItem = ({ children, ...props }: Props.HasChildren & NavbarItemProps) => {
  const pathname = usePathname();
  const isActive = isItemActive(pathname, props.href as string);
  return (
    <Link
      className={cn(
        'text-foreground/60 hover:text-foreground/80 transition-colors text-sm font-semibold',
        isActive && 'text-foreground/100 underline underline-offset-4',
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
