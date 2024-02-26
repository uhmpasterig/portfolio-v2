import { Header } from '@/components/layout';

export const HeaderContainer = ({ children }: Component.HasChild) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderContainer;
