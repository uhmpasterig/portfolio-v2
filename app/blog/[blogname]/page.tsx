import PageContainer from '@/components/containers/PageContainer';
import { fetchBlogPost } from '@/lib/utils';
import 'easymde/dist/easymde.min.css';

export default async function Blog({
  params: { blogname },
}: {
  params: {
    blogname: string;
  };
}) {
  console.log(blogname);
  const blogPost = await fetchBlogPost(blogname);
  console.log(blogPost)
  return (
    <PageContainer>
      {blogPost?.content}
    </PageContainer>
  );
}
