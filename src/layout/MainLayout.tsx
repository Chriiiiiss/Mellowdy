import { Container } from '@radix-ui/themes';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container my={'9'} size={'4'}>
      {children}
    </Container>
  );
};
