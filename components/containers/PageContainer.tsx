import { Header, Footer } from '@/components/layout';
import { cn } from '@/lib/utils';
import { Props } from 'useful-react-types';

export const PageContainer = async ({ children }: Props.HasChildren) => {
  return (
    <>
      <Header />
      <main
        className={cn('container flex flex-col items-center justify-center min-h-screen', 'xl:max-w-[87.5rem] px-2')}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default PageContainer;