'use client';
import { cn } from '@/lib/utils';
import PageContainer from '@/components/container/page-container';
import { Grid, GridCross, GridItem } from '@/components/layout/grid';
import { About, Greeting, Projects } from '@/components/sections/home';

export default async function Home() {
  return (
    <PageContainer>
      <Test />
    </PageContainer>
  );
}

const Test = () => {
  return (
    <>
      <div className="w-full text-foreground md:mt-28 mt-20 flex flex-col items-center ">
        <Greeting />
        <Projects />
        <About />
      </div>
    </>
  );
};