import {
  DotsHorizontalIcon,
  Share2Icon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { Dialog, DropdownMenu, Flex, IconButton, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import SharePlaylist from './SharePlaylist';
import { GroupeData, PlaylistData } from '../../pages/HomePage';

const DropdownMenuTrigger = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

const groupeData: GroupeData[] = [
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
        cover: 'https://picsum.photos/140/140',
        name: 'Night Calm',
        id: 12,
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

const PlaylistInfo: PlaylistData = {
  cover: 'https://picsum.photos/140/140',
  name: 'Night Calm',
  id: 12,
};

const PlaylistActionDropDown = () => {
  return (
    <>
      <Dialog.Root>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <DropdownMenuTrigger variant="solid" radius="full" color="orange">
              <DotsHorizontalIcon />
            </DropdownMenuTrigger>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Flex justify="center" gap={'3'} direction={'column'}>
              <Dialog.Trigger>
                <DropdownMenu.Item>
                  <Share2Icon />
                  <Text>Partager la playlist</Text>
                </DropdownMenu.Item>
              </Dialog.Trigger>
              <DropdownMenu.Item>
                <TrashIcon color={'red'} />
                <Text color={'red'}>Supprimer playlist</Text>
              </DropdownMenu.Item>
            </Flex>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Dialog.Content>
          <Dialog.Title>Partager la playlist</Dialog.Title>
          <SharePlaylist groupeData={groupeData} playlistInfo={PlaylistInfo} />
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default PlaylistActionDropDown;
