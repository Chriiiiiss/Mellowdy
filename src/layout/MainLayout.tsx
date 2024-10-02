import { Container } from '@radix-ui/themes';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container py={'8'} size={'4'}>
      {children}
      {/* <NavigationBar /> */}
    </Container>
  );
};
