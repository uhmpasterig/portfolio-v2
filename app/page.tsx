import PageContainer from '@/components/container/page-container';
import { GreetingSection, ProjectSection } from '@/components/sections/home';

export default async function Home() {
  return (
    <PageContainer>
      <div className="w-full text-foreground flex flex-col items-center ">
        <GreetingSection />
        <ProjectSection />
      </div>
    </PageContainer>
  );
}
