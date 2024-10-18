import { Container } from '@radix-ui/themes';
import { NavigationBar } from '../components/NavigationBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container p={'5'} size={'4'}>
      {children}
      <NavigationBar />
    </Container>
  );
};
