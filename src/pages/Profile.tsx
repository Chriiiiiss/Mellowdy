import { Avatar, Flex, Grid, Text } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import ProfilModal from '../components/profile/ProfileModal';

const GroupsList = [
  {
    title: 'Summer 2k24',
    cover: 'https://picsum.photos/25/25',
    link: '/',
  },
  {
    title: 'Délire',
    cover: 'https://picsum.photos/200/150',
    link: '/',
  },
  {
    title: "La plus longue playlist de l'histoire",
    cover: 'https://picsum.photos/139/100',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/56',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/57',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/58',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/59',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/60',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/61',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/62',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/63',
    link: '/',
  },
];

const PlaylistsList = [
  {
    title: 'Summer 2k24',
    cover: 'https://picsum.photos/25/25',
    link: '/',
  },
  {
    title: 'Délire',
    cover: 'https://picsum.photos/200/150',
    link: '/',
  },
  {
    title: "La plus longue playlist de l'histoire",
    cover: 'https://picsum.photos/139/100',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/56',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/57',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/58',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/59',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/60',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/61',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/62',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/63',
    link: '/',
  },
];

export const ProfilePage = () => {
  return (
    <MainLayout>
      <ProfilModal />
      <Flex align="center" direction="column" gap="4">
        <Avatar fallback="Aa" radius="full" size="7" />
        <Text>Name Truc</Text>
      </Flex>
      <Flex direction="column" gap="8" mt="4">
        <Flex gap={'5'}>
          <ListCard label="Groupes">
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
              {GroupsList.map((group) => (
                <CoverCard
                  key={group.title}
                  title={group.title}
                  cover={group.cover}
                  link={group.link}
                  variant="group"
                />
              ))}
            </Grid>
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
