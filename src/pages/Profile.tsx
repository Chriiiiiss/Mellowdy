import { Avatar, Flex, Grid, Text } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import { useUserState } from '../stores/useUserState';
import ProfileAction from '../components/profile/ProfileAction';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import { GroupSkeleton } from '../components/Skeleton';
import { EmptyGroupState } from '../components/homePage/EmptyGroupState';
import { Link } from '@tanstack/react-router';

const PlaylistsList = [
  {
    title: 'Summer 2k24',
    cover: 'https://picsum.photos/25/25',
    link: '/',
    id: 1,
  },
  {
    title: 'Délire',
    cover: 'https://picsum.photos/200/150',
    link: '/',
    id: 2,
  },
  {
    title: "La plus longue playlist de l'histoire",
    cover: 'https://picsum.photos/139/100',
    link: '/',
    id: 3,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/56',
    link: '/',
    id: 4,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/57',
    link: '/',
    id: 5,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/58',
    link: '/',
    id: 6,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/59',
    link: '/',
    id: 7,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/60',
    link: '/',
    id: 8,
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/61',
    link: '/',
    id: 9,
  },
];

export const ProfilePage = () => {
  const userState = useUserState();
  const getOrganization = useGetAllOrganization();

  if (!userState.user || !userState.user.username) {
    return null;
  }
  return (
    <MainLayout>
      <ProfileAction />
      <Flex align="center" direction="column" gap="4">
        <Avatar
          src={userState.user.avatarUrl || ''}
          fallback={userState.user.username.slice(0, 2).toUpperCase()}
          radius="full"
          size="7"
        />
        <Text>{userState.user?.username}</Text>
      </Flex>
      <Flex direction="column" gap="8" mt="4">
        <Flex gap={'5'}>
          <ListCard label="Groupes">
            {getOrganization.isLoading ? (
              <Grid gap={'3'} columns={'3'}>
                <GroupSkeleton />
                <GroupSkeleton />
                <GroupSkeleton />
              </Grid>
            ) : !getOrganization.data ? (
              <EmptyGroupState />
            ) : (
              <Grid
                gap={'3'}
                columns={{
                  initial: '3',
                  xs: '5',
                  sm: '6',
                  md: '9',
                  lg: '10',
                  xl: '12',
                }}
              >
                {getOrganization.data.map((group) => (
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                    to={`/groupDetails/${group.id}`}
                    key={group.id}
                  >
                    <CoverCard
                      key={group.id}
                      id={group.id}
                      title={group.name}
                      cover={group.avatar_url}
                      link={'/'}
                      variant="group"
                    />
                  </Link>
                ))}
              </Grid>
            )}
          </ListCard>
        </Flex>
        <Flex gap={'5'}>
          <ListCard label="Playlist">
            <Grid
              gap={'3'}
              columns={{
                initial: '3',
                xs: '5',
                sm: '6',
                md: '9',
                lg: '10',
                xl: '12',
              }}
            >
              {PlaylistsList.map((playlist) => (
                <CoverCard
                  key={playlist.title}
                  id={playlist.id}
                  title={playlist.title}
                  cover={playlist.cover}
                  link={playlist.link}
                  variant="playlist"
                />
              ))}
            </Grid>
          </ListCard>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
