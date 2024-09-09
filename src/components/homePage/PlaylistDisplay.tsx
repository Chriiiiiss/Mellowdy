import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, Grid, Heading } from '@radix-ui/themes';
import styled from 'styled-components';
import { PlaylistDisplayProps } from '../../pages/HomePage';

const ListenerProfile = styled.img`
  border-radius: 100px;
  margin-left: -16px;
  object-fit: cover;
`;

const GroupeName = styled(Heading)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PlaylistContainer = styled(Flex)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0 -24px;
`;

const PlaylistInfo = styled(Flex)`
  &:first-of-type {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const PlaylistCover = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistName = styled.span`
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PlaylistDisplay = ({
  groupeName,
  listeners,
  playlist,
}: PlaylistDisplayProps) => {
  return (
    <Flex gap={'5'} direction={'column'}>
      <Grid columns={'70% 30%'}>
        <Flex align={'center'} gap={'2'}>
          <GroupeName>{groupeName}</GroupeName>
          <ArrowRightIcon />
        </Flex>
        {listeners && (
          <Flex gap={'-16px'} justify={'end'}>
            {listeners.slice(0, 3).map((listener) => (
              <ListenerProfile
                key={listener.name}
                src={listener.img}
                height={'40px'}
                width={'40px'}
              />
            ))}
          </Flex>
        )}
      </Grid>
      <PlaylistContainer gap={'4'}>
        {playlist.map((playlist) => (
          <PlaylistInfo direction={'column'} gap={'2'} key={playlist.name}>
            <PlaylistCover
              key={playlist.name}
              src={playlist.cover}
              height={'160px'}
              width={'160px'}
            />
            <PlaylistName>{playlist.name}</PlaylistName>
          </PlaylistInfo>
        ))}
      </PlaylistContainer>
    </Flex>
  );
};

export default PlaylistDisplay;
