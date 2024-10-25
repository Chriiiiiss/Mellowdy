import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useGetProviderPlaylist } from '../../hooks/playlists/useGetProviderPlaylist';
import { useSharePlaylist } from '../../hooks/playlists/useSharePlaylist';
import { useQueryClient } from '@tanstack/react-query';

const AddButton = styled(Flex)`
  width: 96px;
  height: 96px;
  background-image: url('/images/backgrounds/AddBg.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const DialogContent = styled(Dialog.Content)`
  width: 400px;
  max-width: 90vw;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

interface ImportPlaylistDialogProps {
  isFull?: boolean;
  organizationId: string;
}

export const ImportPlaylistDialog = ({
  isFull = false,
  organizationId,
}: ImportPlaylistDialogProps) => {
  const [open, setOpen] = useState(false);
  const getProviderPlaylist = useGetProviderPlaylist();
  const sharePlaylist = useSharePlaylist();
  const queryClient = useQueryClient();

  const handleImportPlaylist = (organizationId: string, playlistId: string) => {
    const payload = {
      organization_id: Number(organizationId),
      playlist_provider_id: playlistId,
    };
    sharePlaylist?.mutate(payload, {
      onSuccess: () => {
        setOpen(false);
        queryClient.invalidateQueries({
          queryKey: ['playlistByOrga'],
        });
      },
    });
  };

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
      <DialogContent>
        <Dialog.Title>Ajouter une playlist</Dialog.Title>
        <Flex align={'center'} justify={'center'}>
          {getProviderPlaylist && getProviderPlaylist.isLoading && (
            <Text>Loading...</Text>
          )}
          {getProviderPlaylist && getProviderPlaylist.data && (
            <Flex direction={'column'} gap={'4'}>
              {getProviderPlaylist.data.map((playlist) => (
                <Flex key={playlist.id} gap={'2'} justify={'between'}>
                  <Text
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '90%',
                    }}
                  >
                    {playlist.name}
                  </Text>
                  <Button
                    onClick={() =>
                      handleImportPlaylist(organizationId, playlist.id)
                    }
                  >
                    Ajouter
                  </Button>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </DialogContent>
    </Dialog.Root>
  );
};
