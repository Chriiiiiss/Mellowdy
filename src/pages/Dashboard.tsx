import { Heading } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';

export const DashboardPage = () => {
  return (
    <MainLayout>
      <Heading as="h1" color="bronze">
        Dashboard
      </Heading>
    </MainLayout>
  );
};
