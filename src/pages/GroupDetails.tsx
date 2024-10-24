import { Flex, Avatar, Heading, Grid, Text, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import ScrollableProfile from '../components/homePage/ScrollableProfile';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import { useState } from 'react';
import {
  GroupDetailsMetaSkeleton,
  GroupDetailsMetaDescSkeleton,
  PlaylistSkeleton,
} from '../components/Skeleton';

const groupDetails = {
  name: 'Hetic friends',
  description: 'A great playlist with all my friends from Hetic',
};

const friends = [
  {
    username: 'Alice',
    email: 'truc',
  },
  {
    username: 'Boris',
    email: 'truc',
    profilePicture: 'https://picsum.photos/25/25',
  },
  {
    username: 'Alice',
    email: 'truc',
    profilePicture: 'https://picsum.photos/60/40',
  },
  {
    username: 'Boris',
    email: 'truc',
    profilePicture: 'https://picsum.photos/55/55',
  },
  {
    username: 'Alice',
    email: 'truc',
    profilePicture: 'https://picsum.photos/75/60',
  },
  {
    username: 'Boris',
    email: 'truc',
  },
  {
    username: 'Alice',
    email: 'truc',
    profilePicture: 'https://picsum.photos/65/55',
  },
  {
    username: 'Boris',
    email: 'truc',
    profilePicture: 'https://picsum.photos/72/67',
  },
  {
    username: 'Alice',
    email: 'truc',
    profilePicture: 'https://picsum.photos/72/72',
  },
  {
    username: 'Boris',
    email: 'truc',
    profilePicture: 'https://picsum.photos/72/65',
  },
];

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

export const GroupDetails = () => {
  const [isGroupMetaLoading] = useState(false); // setIsGroupMetaLoading quand tu as les données
  const [isPlaylistLoading] = useState(false); // setIsPlaylistLoading quand tu as les données
  return (
    <MainLayout>
      <Flex direction={'column'} gap={'4'}>
        {isGroupMetaLoading && <GroupDetailsMetaSkeleton />}
        {!isGroupMetaLoading && (
          <Flex
            direction={'column'}
            align={'center'}
            justify={'center'}
            gap={'1'}
          >
            <Avatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RWYUskdgPnmt6U2_9krSgV-Cffj38hMWRQ&s'
              }
              alt={'Avatar'}
              size={'7'}
              fallback=""
              radius="full"
            />
            <Heading as={'h2'} size={'7'}>
              {groupDetails.name}
            </Heading>
          </Flex>
        )}
        {isGroupMetaLoading && <GroupDetailsMetaDescSkeleton />}

        {!isGroupMetaLoading && (
          <Flex direction={'column'} gap={'1'}>
            <Text>{groupDetails.description}</Text>
            <ScrollableProfile friends={friends} />
          </Flex>
        )}
        <Flex direction={'column'}>
          <Section pt={'0'} pb={'6'}>
            <Flex gap={'5'}>
              <ListCard label="Les playlists :">
                {isPlaylistLoading && (
                  <Grid gap={'3'} columns={'3'}>
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                  </Grid>
                )}
                {!isPlaylistLoading && (
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
                    {GroupsList.map((group) => (
                      <CoverCard
                        key={group.title}
                        title={group.title}
                        cover={group.cover}
                        link={group.link}
                        variant="playlist"
                      />
                    ))}
                    <CoverCard
                      title="Créer un groupe"
                      variant="playlist"
                      add
                      link="/"
                    />
                  </Grid>
                )}
              </ListCard>
            </Flex>
          </Section>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

<Grid columns={'1'} gap={'8'} justify={'center'}>
  <Grid columns={'1'} justify={'center'}></Grid>
</Grid>;
