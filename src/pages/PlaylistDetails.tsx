import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { MainLayout } from '../layout/MainLayout';
import { Flex, Section, Skeleton, Text } from '@radix-ui/themes';
import PlaylistInfo from '../components/playlistDetails/PlaylistInfo';
import PlaylistAction from '../components/playlistDetails/PlaylistAction';

import styled from 'styled-components';
import SongContent from '../components/playlistDetails/SongContent';
import { useState } from 'react';

const SongContainer = styled(Flex)`
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

export const PlaylistDetails = () => {
  const [isPlaylistContentLoading] = useState(false);
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
          <Skeleton loading={isPlaylistContentLoading}>
            <SongContainer justify={'between'} align={'center'}>
              <SongContent />
            </SongContainer>
          </Skeleton>
          <Skeleton loading={isPlaylistContentLoading}>
            <SongContainer justify={'between'} align={'center'}>
              <SongContent />
            </SongContainer>
          </Skeleton>
        </Flex>
      </Section>
    </MainLayout>
  );
};
