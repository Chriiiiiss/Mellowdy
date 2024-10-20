import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { MainLayout } from '../layout/MainLayout';
import { Flex, Section, Text } from '@radix-ui/themes';
import PlaylistInfo from '../components/playlistDetails/PlaylistInfo';
import PlaylistAction from '../components/playlistDetails/PlaylistAction';

import styled from 'styled-components';
import SongContent from '../components/playlistDetails/SongContent';

const SongContainer = styled(Flex)`
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

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
          <SongContainer justify={'between'} align={'center'}>
            <SongContent />
          </SongContainer>
          <SongContainer justify={'between'} align={'center'}>
            <SongContent />
          </SongContainer>
        </Flex>
      </Section>
    </MainLayout>
  );
};
