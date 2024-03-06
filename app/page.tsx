import PageContainer from '@/components/container/page-container';
import { GreetingSection, ProjectSection, AboutSection, SkillsSection } from '@/components/sections';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  return (
    <PageContainer>
      <GreetingSection />
      <ProjectSection />
      <Separator className="my-10" />
      <SkillsSection />
    </PageContainer>
  );
}
