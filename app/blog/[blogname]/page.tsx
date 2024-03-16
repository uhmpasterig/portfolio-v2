import PageContainer from '@/components/containers/PageContainer';
import { fetchBlogPost } from '@/lib/utils/fetching/cms-fetching';
import {transformer} from '@/lib/utils/markdown/transformer';

export default async function Blog({
  params: { blogname },
}: {
  params: {
    blogname: string;
  };
}) {
  const blogPost = await fetchBlogPost(blogname);
  const html = transformer(blogPost.content);

  return (
    <PageContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageContainer>
  );
}
