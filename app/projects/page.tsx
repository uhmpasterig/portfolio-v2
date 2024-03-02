import Image from 'next/image';
import { cn } from '@/lib/utils';
import PageContainer from '@/components/container/page-container';

export default function Projects() {
  return (
    <PageContainer>
      <main className={cn('container flex min-h-screen flex-col items-center justify-between', 'xl:max-w-[87.5rem]')}>
        <div className="h-screen w-full bg-white/5 flex items-center justify-center text-foreground">PROJECTS</div>
      </main>
    </PageContainer>
  );
}