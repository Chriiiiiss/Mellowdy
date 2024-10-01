import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { MainLayout } from '../layout/MainLayout';
import { Flex, Section, Text } from '@radix-ui/themes';
import PlaylistInfo from '../components/playlistDetails/PlaylistInfo';
import PlaylistAction from '../components/playlistDetails/PlaylistAction';
import SongDialog from '../components/playlistDetails/songDialog/SongDialog';

export const PlaylistDetails = () => {
  return (
    <MainLayout>
      <Flex align={'center'} pb={'3'}>
        <ChevronLeftIcon />
        <Text>Groupes</Text>
      </Flex>
      <PlaylistInfo />
      <PlaylistAction />
      <Section pt={'0px'} pb={'0px'}>
        <Flex direction={'column'} gap={'1'}>
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
          <SongDialog />
        </Flex>
      </Section>
    </MainLayout>
  );
};
