import PageContainer from '@/components/containers/PageContainer';
import { ListSection } from '@/components/list';
import { GreetingSection } from '@/components/greeting';
import { Separator } from '@/components/ui';
import { fetchLists, getImageUrl } from '@/lib/utils';

export default async function Home() {
  const { skills, projects, languages, technologies } = await fetchLists();

  skills.map((skill) => {
    skill.image = getImageUrl(skill.image);
  });

  projects.map((project) => {
    project.image = getImageUrl(project.image);
  });

  languages.map((language) => {
    language.image = getImageUrl(language.image);
  });

  technologies.map((technology) => {
    technology.image = getImageUrl(technology.image);
  });

  return (
    <PageContainer>
      <GreetingSection />
      <Separator className="my-10" />
      <h1>About ME HIER!</h1>
      <Separator className="my-10" />
      <ListSection title="Programming Languages" items={languages} />

      <Separator className="my-10" />
      <ListSection title="Technologies" items={technologies} />
      <Separator className="my-10" />
      <ListSection title="Skills" items={skills} />
      <Separator className="my-10 mb-24" />
    </PageContainer>
  );
}
