import { Header } from '@/components/layout';
import { cn } from '@/lib/utils';

export const PageContainer = ({ children }: Component.HasChild) => {
  return (
    <>
      <Header />
      <main className={cn('container flex flex-col items-center justify-center', 'xl:max-w-[87.5rem] px-2')}>
        {children}
      </main>
    </>
  );
};

export default PageContainer;
