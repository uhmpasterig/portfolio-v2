import { cn } from '@/lib/utils';
import PageContainer from '@/components/container/page-container';
import { Grid, GridItem } from '@/components/layout/grid';

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
      <Greeting />
      <Grid className="w-full bg-white/5 text-foreground">
        <GridItem className="col-span-2 h-[20vh]">
          <h1>Test</h1>
        </GridItem>
      </Grid>
    </>
  );
};

const Greeting = () => {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-5xl flex-col items-center gap-2 py-8 md:py-16 md:pb-10 lg:py-32 lg:pb-24 mt-20',
      )}
    >
      <h1 className="text-foreground text-3xl font-semibold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-center">
        Hey, my name is{' '}
        <span className="text-foreground">Luca</span> 👋
      </h1>

      <h1 className="text-foreground/50 text-xl font-mono tracking-tighter md:text-xl text-center">
        I am a{' '}
        <span className="bg-gradient-to-b from-green-400 to-green-700 bg-clip-text text-transparent">fullstack developer</span>{' '}
        with a passion for{' '}
        <span className="bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent">business</span>,
        and{' '}
        <span className="bg-gradient-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent">networking</span>
        .
      </h1>
    </section>
  );
};