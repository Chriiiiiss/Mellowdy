import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Avatar, Flex, Grid, Heading } from '@radix-ui/themes';
import styled from 'styled-components';
import { GroupeData } from '../../pages/HomePage';
import { Link } from '@tanstack/react-router';

const ListenerProfile = styled(Avatar)`
  margin-left: -16px;
`;

const GroupeName = styled(Heading)`
  text-overflow: ellipsis;
  text-decoration: none;
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

const PlaylistDisplay = ({ name, listeners, playlist, id }: GroupeData) => {
  return (
    <Flex gap="5" direction="column">
      <Grid columns="70% 30%">
        <Flex align="center" gap="2">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            to={`/groupDetails/${id}`}
          >
            <GroupeName>{name}</GroupeName>
          </Link>
          <ArrowRightIcon />
        </Flex>
        {listeners && (
          <Flex gap="-16px" justify="end">
            {listeners.slice(0, 3).map((listener) => (
              <ListenerProfile
                key={listener.name}
                src={listener.img}
                fallback={
                  listener.name
                    ? listener.name.slice(0, 2).toUpperCase()
                    : 'User'
                }
                radius="full"
                size="3"
              />
            ))}
          </Flex>
        )}
      </Grid>
      <PlaylistContainer gap="4">
        {playlist.map((playlist) => (
          <PlaylistInfo direction="column" gap="2" key={playlist.name}>
            <PlaylistCover
              key={playlist.name}
              src={playlist.cover}
              height="160px"
              width="160px"
            />
            <PlaylistName>{playlist.name}</PlaylistName>
          </PlaylistInfo>
        ))}
        <PlaylistInfo direction={'column'} gap={'2'}>
          <PlaylistCover
            src={'https://placehold.co/600x400/green/green'}
            height="160px"
            width="160px"
          />
          <PlaylistName>{'Ajouter une playlist'}</PlaylistName>
        </PlaylistInfo>
      </PlaylistContainer>
    </Flex>
  );
};

export default PlaylistDisplay;
