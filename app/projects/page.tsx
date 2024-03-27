import PageContainer from '@/components/containers/PageContainer';
import { GreetingSection, ListSection } from '@/components/sections';
import { Separator } from '@/components/ui';
import { fetchLists, getImageUrl } from '@/lib/utils';

export default async function Home() {
  const { projects,  } = await fetchLists();

  projects.map((project) => {
    project.image = getImageUrl(project.image);
  });

  return (
    <PageContainer>
      <ListSection title="Projects" items={projects} />
    </PageContainer>
  );
}
