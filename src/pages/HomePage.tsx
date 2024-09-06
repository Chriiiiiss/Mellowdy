import { Flex, Heading, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import NotificationCollapse from '../components/homePage/NotificationCollapse';
import ScrollableProfile from '../components/homePage/ScrollableProfile';
import PlaylistDisplay from '../components/homePage/PlaylistDisplay';

export const HomePage = () => {
  return (
    <MainLayout>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <Heading>Bonjour Chris !</Heading>
          <ScrollableProfile />

          <NotificationCollapse />
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <PlaylistDisplay />
          <PlaylistDisplay />
        </Flex>
      </Section>
    </MainLayout>
  );
};
