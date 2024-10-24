import { Flex, Heading, Section, Box } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import NotificationCollapse from '../components/homePage/NotificationCollapse';
import ScrollableProfile from '../components/homePage/ScrollableProfile';
import PlaylistDisplay from '../components/homePage/PlaylistDisplay';
import { useUserState } from '../stores/useUserState';
import { useState } from 'react';
import {
  HomePlaylistSkeleton,
  FriendsSkeleton,
  HomeGroupNameSkeleton,
} from '../components/Skeleton';

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
  id?: string;
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
  id: string;
}

const userData: User = {
  username: 'Dark Lord Chris Premier du nom',
  email: 'Chris.truc@gmail.com',
  profilePicture: 'https://placehold.co/60x40/blue/white',
  friends: [
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
  ],
};

const playlistData: GroupeData[] = [
  {
    id: '1',
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
        id: '1',
      },
      {
        cover: 'https://picsum.photos/90/72',
        name: 'Evening Serenity',
        id: '2',
      },
      {
        cover: 'https://picsum.photos/80/80',
        name: 'Weekend Chillout',
        id: '3',
      },
      {
        cover: 'https://picsum.photos/72/80',
        name: 'Night Calm',
        id: '4',
      },
    ],
  },
  {
    id: '2',
    name: 'Workout Beats',
    playlist: [
      {
        cover: 'https://picsum.photos/150/150',
        name: 'Morning Run',
        id: '5',
      },
      {
        cover: 'https://picsum.photos/74/80',
        name: 'Afternoon Pump',
        id: '6',
      },
      {
        cover: 'https://picsum.photos/79/80',
        name: 'Evening Sweat',
        id: '7',
      },
      {
        cover: 'https://picsum.photos/87/80',
        name: 'Night Grind',
        id: '8',
      },
    ],
  },
  {
    id: '3',
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
        id: '9',
      },
      {
        cover: 'https://picsum.photos/139/100',
        name: 'Evening Serenity',
        id: '10',
      },
      {
        cover: 'https://picsum.photos/120/120',
        name: 'Weekend Chillout',
        id: '11',
      },
      {
        cover: 'https://picsum.photos/140/140',
        name: 'Night Calm',
        id: '12',
      },
    ],
  },
];

export const HomePage = () => {
  const { user } = useUserState();
  const [isFriendsLoading] = useState(false); //ajouter le setIsFriendsLoading quand on aura les données
  const [isPlaylistLoading] = useState(false); //ajouter le setIsPlaylistLoading quand on aura les données
  return (
    <MainLayout>
      <Section pt="0" pb="6">
        <Flex gap="6" direction="column">
          <Heading>Bonjour {user?.username} !</Heading>

          {isFriendsLoading && (
            <Flex gap="4">
              <FriendsSkeleton />
              <FriendsSkeleton />
              <FriendsSkeleton />
            </Flex>
          )}

          {userData.friends && !isFriendsLoading && (
            <ScrollableProfile friends={userData.friends} />
          )}

          <NotificationCollapse />
        </Flex>
      </Section>
      <Section pt="0" pb="6">
        {isPlaylistLoading && (
          <Box style={{ marginTop: '16px' }}>
            <HomeGroupNameSkeleton />
            <Flex gap="2" direction="row">
              <HomePlaylistSkeleton />
              <HomePlaylistSkeleton />
            </Flex>
          </Box>
        )}
        {!isPlaylistLoading && (
          <Flex gap="6" direction="column">
            {playlistData.slice(0, 10).map((playlistData) => (
              <PlaylistDisplay
                key={playlistData.name}
                name={playlistData.name}
                listeners={playlistData.listeners}
                playlist={playlistData.playlist}
              />
            ))}
            {playlistData.length > 5 && (
              <Flex justify="center">
                <p>Voir plus</p>
              </Flex>
            )}
          </Flex>
        )}
      </Section>
    </MainLayout>
  );
};
