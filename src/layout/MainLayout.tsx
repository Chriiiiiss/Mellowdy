import { Container } from '@radix-ui/themes';
import { NavigationBar } from '../components/navigation/NavigationBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <Container p={'5'} size={'4'}>
        {children}
      </Container>
      <NavigationBar />
    </Container>
  );
};
