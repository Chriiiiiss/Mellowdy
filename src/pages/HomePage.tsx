import { Flex, Heading, Section, Box, Button } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { useUserState } from '../stores/useUserState';
import { EmptyGroupState } from '../components/homePage/EmptyGroupState';
import {
  HomeGroupNameSkeleton,
  HomePlaylistSkeleton,
} from '../components/Skeleton';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import PlaylistDisplay from '../components/homePage/PlaylistDisplay';
import { useEffect } from 'react';
import { CreateGroupDialog } from '../components/homePage/CreateGroupDialog';

export interface User {
  username: string | null;
  provider?: number | null;
  email: string | null;
  profilePicture?: string;
  expiration?: Date;
  friends?: User[];
  playlists?: PlaylistData[];
  groupe?: GroupeData[];
}

export interface GroupeData {
  id?: number;
  name: string;
  cover?: string;
  listeners?: {
    name: string;
    img: string;
  }[];
  playlist: PlaylistData[];
}

export interface PlaylistData {
  cover: string;
  name: string;
  id: number;
}

const playlistData: GroupeData[] = [
  {
    id: 1,
    name: 'Chill Vibes Collective',
    listeners: [
      {
        name: 'Alice',
        img: 'https://picsum.photos/72/65',
      },
      {
        name: 'Bob',
        img: 'https://picsum.photos/72/72',
      },
      {
        name: 'Charlie',
        img: 'https://picsum.photos/65/65',
      },
      {
        name: 'David',
        img: 'https://picsum.photos/70/72',
      },
      {
        name: 'Emma',
        img: 'https://picsum.photos/70/70',
      },
    ],
    playlist: [
      {
        cover: 'https://picsum.photos/100/100',
        name: 'Morning Relaxation',
        id: 1,
      },
      {
        cover: 'https://picsum.photos/90/72',
        name: 'Evening Serenity',
        id: 2,
      },
      {
        cover: 'https://picsum.photos/80/80',
        name: 'Weekend Chillout',
        id: 3,
      },
      {
        cover: 'https://picsum.photos/72/80',
        name: 'Night Calm',
        id: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Workout Beats',
    playlist: [
      {
        cover: 'https://picsum.photos/150/150',
        name: 'Morning Run',
        id: 5,
      },
      {
        cover: 'https://picsum.photos/74/80',
        name: 'Afternoon Pump',
        id: 6,
      },
      {
        cover: 'https://picsum.photos/79/80',
        name: 'Evening Sweat',
        id: 7,
      },
      {
        cover: 'https://picsum.photos/87/80',
        name: 'Night Grind',
        id: 8,
      },
    ],
  },
  {
    id: 3,
    name: 'Les collègues',
    listeners: [
      {
        name: 'David',
        img: 'https://picsum.photos/70/72',
      },
      {
        name: 'Emma',
        img: 'https://picsum.photos/70/70',
      },
      {
        name: 'Alice',
        img: 'https://picsum.photos/72/65',
      },
      {
        name: 'Bob',
        img: 'https://picsum.photos/72/72',
      },
      {
        name: 'Charlie',
        img: 'https://picsum.photos/65/65',
      },
    ],
    playlist: [
      {
        cover: 'https://picsum.photos/200/150',
        name: 'Morning Relaxation pour se détendre et tout',
        id: 9,
      },
      {
        cover: 'https://picsum.photos/139/100',
        name: 'Evening Serenity',
        id: 10,
      },
      {
        cover: 'https://picsum.photos/120/120',
        name: 'Weekend Chillout',
        id: 11,
      },
      {
        cover: 'https://picsum.photos/140/140',
        name: 'Night Calm',
        id: 12,
      },
    ],
  },
];

export const HomePage = () => {
  const { user } = useUserState();
  const getOrganization = useGetAllOrganization();

  useEffect(() => {
    console.log(getOrganization.data);
  }, [getOrganization.data]);

  return (
    <MainLayout>
      <Section pt="0" pb="6">
        <Flex gap="6" direction="column">
          <Heading>Bonjour {user?.username} !</Heading>

          {/* Should we keep friends ? Not enought time tho */}
          {/* {userData.friends && <ScrollableProfile friends={userData.friends} />} */}

          {/* <NotificationCollapse /> */}
        </Flex>
      </Section>
      <Section pt="0" pb="6">
        {getOrganization?.isLoading ? (
          <Box style={{ marginTop: '16px' }}>
            <HomeGroupNameSkeleton />
            <Flex gap="2" direction="row">
              <HomePlaylistSkeleton />
              <HomePlaylistSkeleton />
            </Flex>
          </Box>
        ) : (
          <Flex gap="6" direction="column">
            {!getOrganization.data ? (
              <EmptyGroupState />
            ) : (
              getOrganization.data.map((group) => {
                return (
                  <PlaylistDisplay
                    key={group.id}
                    name={group.name}
                    playlist={playlistData[0].playlist}
                    cover={group.avatar_url}
                    id={group.id}
                  />
                );
              })
            )}
            <Flex justify={'between'}>
              <CreateGroupDialog />
              <Button variant="soft">Rejoindre un groupe</Button>
            </Flex>
          </Flex>
        )}
      </Section>
    </MainLayout>
  );
};
