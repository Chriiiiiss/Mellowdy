import { Flex, Grid, Heading, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { PlaylistSkeleton } from '../components/Skeleton';
import { useFetchUserPlaylist } from '../hooks/playlist/fetchUserPlaylist';
import { CoverCard } from '../components/list/CoverCard';

export const PlaylistListPage = () => {
  const fetchUserPlaylists = useFetchUserPlaylist();
  const data = fetchUserPlaylists.data?.Playlists;

  return (
    <MainLayout>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <Heading>Playlists</Heading>
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'}>
          <ListCard label="Mes playlists">
            {fetchUserPlaylists.isLoading && (
              <Grid gap={'3'} columns={'3'}>
                <PlaylistSkeleton />
                <PlaylistSkeleton />
                <PlaylistSkeleton />
              </Grid>
            )}

            {!fetchUserPlaylists.isLoading && data && (
              <Grid
                gap={'3'}
                columns={{
                  initial: '3',
                  xs: '5',
                  sm: '7',
                  md: '9',
                  lg: '10',
                  xl: '12',
                }}
              >
                {data.map((playlist) => (
                  <CoverCard
                    key={playlist.id}
                    title={playlist.name}
                    cover={undefined}
                    link={playlist.playlist_link}
                    variant="playlist"
                    id={playlist.id}
                  />
                ))}
              </Grid>
            )}
          </ListCard>
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}></Section>
    </MainLayout>
  );
};
