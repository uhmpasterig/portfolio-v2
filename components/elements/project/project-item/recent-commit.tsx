import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export const ProjectItemRecentCommit = () => {
  return (
    <p className="text-xs font-medium inline-block text-foreground/30 ">
      <Link href="test" className="hover:underline hover:text-foreground/50 transition-colors">
        Merge pull request #1 from uhmpasterig/dev Dev
      </Link>
    </p>
  );
};

ProjectItemRecentCommit.Placeholder = () => {
  return (
    <Skeleton className="w-full h-6" />
  );
}