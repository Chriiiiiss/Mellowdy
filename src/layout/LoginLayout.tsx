import { Flex } from '@radix-ui/themes';
import { MainLayout } from './MainLayout';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <MainLayout>
      <Flex align={'center'} direction={'column'} gap={'8'} justify={'center'}>
        {children}
      </Flex>
    </MainLayout>
  );
};
