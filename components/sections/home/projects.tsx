import { cn } from '@/lib/utils';

import { GridItem, Grid } from '@/components/layout/grid';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { TagIcon, GitBranch } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Projects = () => {
  return (
    <Grid className="w-full mb-10">
      <GridItem className="col-span-full h-11 text-center mt-10 flex items-center justify-center">
        <h1 className="font-mono text-lg text-foreground/50 tracking-tighter">Projects</h1>
      </GridItem>

      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />

      <GridItem className="col-span-full h-11 text-center" />
    </Grid>
  );
};

const Project = () => {
  return (
    <GridItem className="col-span-full md:col-span-4 row-span-1 p-5 flex flex-col gap-2">
      <div className="flex  items-center gap-3">
        <div className="w-10 h-10 bg-foreground/5 rounded-full border-border flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-5 h-auto" />
        </div>

        <div className="flex flex-col justify-between items-start">
          <h1 className="text-base font-semibold">L0cked</h1>

          <span className="flex items-center gap-1 text-xs text-foreground/30">
            <TagIcon className="h-3 w-3" size={24} />
            <span>Next.js,</span>
            <span>Frontend,</span>
            <span>Backend</span>
          </span>
        </div>
      </div>

      <p className="text-foreground/90 text-sm font-medium">
        A password manager built with Next.js and Firebase. It is built with a focus on security and privacy.
      </p>

      <p className="text-xs font-medium inline-block text-foreground/30 ">
        <Link href="test" className="hover:underline hover:text-foreground/50 transition-colors">
          Merge pull request #1 from uhmpasterig/dev Dev
        </Link>
        <br />
        <span className="">
          6h ago on{' '}
          <Link href="test" className="text-white hover:underline">
            <GitBranch className="inline-block h-4 w-4" size={24} />
            main
          </Link>
        </span>
      </p>

      <div className="flex flex-row items-center justify-end gap-2">
        <Link
          href="test"
          className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
        >
          <GitHubLogoIcon className="h-5" />
          uhmpasterig/l0cked
        </Link>

        <Link
          href="test"
          className="flex flex-row items-center gap-1 cursor-pointer text-xs hover:underline text-foreground/30 hover:text-foreground/50 transition-colors"
        >
          <GlobeIcon className="h-5" />
          l0cked.vercel.app
        </Link>
      </div>
    </GridItem>
  );
};
