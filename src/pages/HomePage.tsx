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

const playlistData: PlaylistDisplayProps[] = [
  {
    groupeName: 'Chill Vibes Collective',
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
      },
      {
        cover: 'https://picsum.photos/90/72',
        name: 'Evening Serenity',
      },
      {
        cover: 'https://picsum.photos/80/80',
        name: 'Weekend Chillout',
      },
      {
        cover: 'https://picsum.photos/72/80',
        name: 'Night Calm',
      },
    ],
  },
  {
    groupeName: 'Workout Beats',
    playlist: [
      {
        cover: 'https://picsum.photos/150/150',
        name: 'Morning Run',
      },
      {
        cover: 'https://picsum.photos/74/80',
        name: 'Afternoon Pump',
      },
      {
        cover: 'https://picsum.photos/79/80',
        name: 'Evening Sweat',
      },
      {
        cover: 'https://picsum.photos/87/80',
        name: 'Night Grind',
      },
    ],
  },
  {
    groupeName: 'Les collègues',
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
      },
      {
        cover: 'https://picsum.photos/139/100',
        name: 'Evening Serenity',
      },
      {
        cover: 'https://picsum.photos/120/120',
        name: 'Weekend Chillout',
      },
      {
        cover: 'https://picsum.photos/140/140',
        name: 'Night Calm',
      },
    ],
  },
];

export const HomePage = () => {
  return (
    <MainLayout>
      <Section pt="0" pb="6">
        <Flex gap="6" direction="column">
          <Heading>Bonjour {userData.username} !</Heading>
          {userData.friends && <ScrollableProfile friends={userData.friends} />}

          <NotificationCollapse />
        </Flex>
      </Section>
      <Section pt="0" pb="6">
        <Flex gap="6" direction="column">
          {playlistData.slice(0, 10).map((playlistData) => (
            <PlaylistDisplay
              key={playlistData.groupeName}
              groupeName={playlistData.groupeName}
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
      </Section>
    </MainLayout>
  );
};
