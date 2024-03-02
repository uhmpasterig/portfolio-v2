import { cn } from '@/lib/utils';
import PageContainer from '@/components/container/page-container';
import { Grid, GridCross, GridItem } from '@/components/layout/grid';
import { Greeting, Projects } from '@/components/sections/home';

export default function Home() {
  return (
    <PageContainer>
      <Test />
    </PageContainer>
  );
}

const Test = () => {
  return (
    <>
      <div className="w-full text-foreground flex flex-col items-center ">
        <Greeting />
        <Projects />
        <About />
      </div>
    </>
  );
};