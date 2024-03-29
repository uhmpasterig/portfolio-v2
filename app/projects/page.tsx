import PageContainer from '@/components/containers/PageContainer';
import { ListSection } from '@/components/list';
import { fetchLists, getImageUrl } from '@/lib/utils';
import { Project } from '@/types';

export default async function Home() {
  const { projects } = await fetchLists();

  projects.map((project) => {
    project.image = getImageUrl(project.image);
  });

  return (
    <PageContainer>
      <h1>Hello!</h1>
    </PageContainer>
  );
}
 