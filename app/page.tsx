import { cn, fetchSkillGroups } from '@/lib/utils';
import PageContainer from '@/components/container/page-container';
import { Grid, GridCross, GridItem } from '@/components/layout/grid';
import { AboutSection, GreetingSection, ProjectSection } from '@/components/sections/home';

export default async function Home() {
  const skillGroups = await fetchSkillGroups();

  return (
    <PageContainer>
      <div className="w-full text-foreground flex flex-col items-center ">
        <GreetingSection />
        <ProjectSection />
        <AboutSection skillGroups={skillGroups} />
      </div>
    </PageContainer>
  );
}