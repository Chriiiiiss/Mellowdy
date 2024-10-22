import { Container } from '@radix-ui/themes';
import { NavigationBar } from '../components/navigation/NavigationBar';
import styled from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainContainer = styled(Container)`
  min-height: 100vh;
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainContainer>
      <Container p={'5'} size={'4'}>
        {children}
      </Container>
      <NavigationBar />
    </MainContainer>
  );
};
