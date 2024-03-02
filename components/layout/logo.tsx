'use client';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type LogoProps = {
  height?: number;
  width?: number;
  skeletonClassName?: string;
} & Props.HasClassName;

export const Logo = ({ className, skeletonClassName, height = 40, width = 40 }: LogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Image
        src="/logo.png"
        alt="Logo"
        width={height}
        height={width}
        className={cn('h-full w-auto transition-all', { 'opacity-0': !isLoaded }, className)}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      {!isLoaded && <Skeleton className={cn('absolute h-full w-full rounded-full', skeletonClassName)} />}
    </>
  );
};
