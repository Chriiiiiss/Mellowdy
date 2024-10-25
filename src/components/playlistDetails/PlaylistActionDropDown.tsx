import {
  DotsHorizontalIcon,
  Share2Icon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { Dialog, DropdownMenu, Flex, IconButton, Text } from '@radix-ui/themes';
import styled from 'styled-components';

const DropdownMenuTrigger = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

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
          {/* <SharePlaylist groupeData={groupeData} playlistInfo={PlaylistInfo} /> */}
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default PlaylistActionDropDown;
