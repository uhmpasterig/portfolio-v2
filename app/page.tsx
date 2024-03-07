import PageContainer from '@/components/container/page-container';
import { GreetingSection, ListSection } from '@/components/sections';
import { Separator } from '@/components/ui/separator';
import { fetchLists, getImageUrl } from '@/lib/utils';

export default async function Home() {
  const { skills, projects, languages } = await fetchLists();

  skills.map((skill) => {
    skill.image = getImageUrl(skill.image);
  });

  projects.map((project) => {
    project.image = getImageUrl(project.image);
  });

  languages.map((language) => {
    language.image = getImageUrl(language.image);
  });

  return (
    <PageContainer>
      <GreetingSection />
      <ListSection title="Projects" items={projects} />
      <Separator className="my-10" />
      <ListSection title="Programming Languages" items={languages} />
      <Separator className="my-10" />
      <ListSection title="Skills" items={skills} />
    </PageContainer>
  );
}
