import { Flex, Heading, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import NotificationCollapse from '../components/homePage/NotificationCollapse';
import ScrollableProfile from '../components/homePage/ScrollableProfile';
import PlaylistDisplay from '../components/homePage/PlaylistDisplay';

export interface User {
  username: string | null;
  provider?: number | null;
  email: string | null;
  profilePicture?: string;
  expiration?: Date;
  friends?: User[];
  playlists?: PlaylistDisplayProps[];
}

export interface PlaylistDisplayProps {
  groupeName: string;
  listeners?: {
    name: string;
    img: string;
  }[];
  playlist: {
    cover: string;
    name: string;
  }[];
}

const userData: User = {
  username: 'Dark Lord Chris Premier du nom',
  email: 'Chris.truc@gmail.com',
  profilePicture: 'https://placehold.co/60x40/blue/white',
  friends: [
    {
      username: 'Alice',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Boris',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Alice',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Boris',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Alice',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Boris',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Alice',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Boris',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Alice',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
    {
      username: 'Boris',
      email: 'truc',
      profilePicture: 'https://placehold.co/60x40/blue/white',
    },
  ],
};

const playlistData: PlaylistDisplayProps[] = [
  {
    groupeName: 'Chill Vibes Collective',
    listeners: [
      {
        name: 'Alice',
        img: 'https://placehold.co/60x40/blue/white',
      },
      {
        name: 'Bob',
        img: 'https://placehold.co/60x40/red/white',
      },
      {
        name: 'Charlie',
        img: 'https://placehold.co/60x40/yellow/white',
      },
      {
        name: 'David',
        img: 'https://placehold.co/60x40/green/white',
      },
      {
        name: 'Emma',
        img: 'https://placehold.co/60x40/purple/white',
      },
    ],
    playlist: [
      {
        cover: 'https://placehold.co/600x400/green/white',
        name: 'Morning Relaxation',
      },
      {
        cover: 'https://placehold.co/600x400/purple/white',
        name: 'Evening Serenity',
      },
      {
        cover: 'https://placehold.co/600x400/pink/white',
        name: 'Weekend Chillout',
      },
      {
        cover: 'https://placehold.co/600x400/yellow/white',
        name: 'Night Calm',
      },
    ],
  },
  {
    groupeName: 'Workout Beats',
    playlist: [
      {
        cover: 'https://placehold.co/600x400/blue/white',
        name: 'Morning Run',
      },
      {
        cover: 'https://placehold.co/600x400/red/white',
        name: 'Afternoon Pump',
      },
      {
        cover: 'https://placehold.co/600x400/yellow/white',
        name: 'Evening Sweat',
      },
      {
        cover: 'https://placehold.co/600x400/green/white',
        name: 'Night Grind',
      },
    ],
  },
  {
    groupeName: 'Les collègues',
    listeners: [
      {
        name: 'Alice',
        img: 'https://placehold.co/60x40/blue/white',
      },
      {
        name: 'Bob',
        img: 'https://placehold.co/60x40/red/white',
      },
      {
        name: 'Charlie',
        img: 'https://placehold.co/60x40/yellow/white',
      },
      {
        name: 'David',
        img: 'https://placehold.co/60x40/green/white',
      },
      {
        name: 'Emma',
        img: 'https://placehold.co/60x40/purple/white',
      },
    ],
    playlist: [
      {
        cover: 'https://placehold.co/600x400/green/white',
        name: 'Morning Relaxation',
      },
      {
        cover: 'https://placehold.co/600x400/purple/white',
        name: 'Evening Serenity',
      },
      {
        cover: 'https://placehold.co/600x400/pink/white',
        name: 'Weekend Chillout',
      },
      {
        cover: 'https://placehold.co/600x400/yellow/white',
        name: 'Night Calm',
      },
    ],
  },
];

export const HomePage = () => {
  return (
    <MainLayout>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <Heading>Bonjour {userData.username} !</Heading>
          {userData.friends && <ScrollableProfile friends={userData.friends} />}

          <NotificationCollapse />
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          {playlistData.slice(0, 10).map((playlistData) => (
            <PlaylistDisplay
              key={playlistData.groupeName}
              groupeName={playlistData.groupeName}
              listeners={playlistData.listeners}
              playlist={playlistData.playlist}
            />
          ))}
          {playlistData.length > 5 && (
            <Flex justify={'center'}>
              <p>Voir plus</p>
            </Flex>
          )}
        </Flex>
      </Section>
    </MainLayout>
  );
};
