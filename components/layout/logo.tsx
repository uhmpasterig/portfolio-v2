'use client';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center mr-6 h-8">
      <Suspense fallback={<Skeleton className="h-full w-8 rounded-full" />}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className={cn('h-full w-auto')}
        />
      </Suspense>
    </div>
  );
};
