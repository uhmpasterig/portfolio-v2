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
      </div>
    </>
  );
};

const Test2 = () => {
  return (
    <GridItem className="col-span-full md:col-span-5 row-span-1 p-6 py-20">
      <h1 className="font-semibold">A Software Developer</h1>
      <p className="text-foreground/30">
        I am a software developer with a passion for web development. I am currently working on a few projects,
        including this website.
      </p>
    </GridItem>
  );
};
