import { Button, Dialog, Flex, Heading, Text } from '@radix-ui/themes';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useGetProviderPlaylist } from '../../hooks/playlists/useGetProviderPlaylist';

const AddButton = styled(Flex)`
  width: 96px;
  height: 96px;
  background-image: url('/images/backgrounds/AddBg.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

interface ImportPlaylistDialogProps {
  isFull?: boolean;
}

const handleImportPlaylist = () => {
  console.log('handleImportPlaylist');
};

export const ImportPlaylistDialog = ({
  isFull = false,
}: ImportPlaylistDialogProps) => {
  const [open, setOpen] = useState(false);
  const getProviderPlaylist = useGetProviderPlaylist();

  console.log('getProviderPlaylist', getProviderPlaylist?.data);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        {isFull ? (
          <Flex align={'center'} direction={'column'} gap={'2'}>
            <AddButton justify={'center'} align={'center'}>
              <Icon
                icon={'ph:plus'}
                fontSize={'50px'}
                color="var(--mellowdy-white)"
              />
            </AddButton>
            <Flex maxWidth={'104px'}>
              <Text as={'p'} size={'1'} color="gray" truncate>
                Ajouter une playlist
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Button>Ajouter une playlist</Button>
        )}
      </Dialog.Trigger>
      <Dialog.Content>
        <Flex align={'center'} justify={'center'}>
          {getProviderPlaylist && getProviderPlaylist.isLoading && (
            <Text>Loading...</Text>
          )}
          {getProviderPlaylist && getProviderPlaylist.data && (
            <Flex direction={'column'} gap={'4'}>
              <Heading size={'2'}>Playlists</Heading>
              {getProviderPlaylist.data.map((playlist) => (
                <Flex key={playlist.id} gap={'2'} justify={'between'}>
                  <Text
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '50%',
                    }}
                  >
                    {playlist.name}
                  </Text>
                  <Button onClick={() => handleImportPlaylist()}>
                    Ajouter
                  </Button>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
