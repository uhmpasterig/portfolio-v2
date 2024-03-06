import { Grid, GridItem } from '@/components/layout/grid';
import { cn } from '@/lib/utils';

export const AboutSection = () => {
  return (
    <section className="h-[110vh] w-screen bg-[#ccffff] p-4">
      <h1 className="text-background text-3xl text-center font-bold">Who am I?</h1>
      <Grid>
        <GridItem
          className={cn(
            'col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-4 flex flex-col gap-1 justify-between',
            'bg-white/40 border-white/30',
            'h-36 shadow-sm',
          )}
        ></GridItem>
      </Grid>
    </section>
  );
};
