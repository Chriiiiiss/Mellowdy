import { Avatar, Button, Checkbox, Dialog, Flex, Text } from '@radix-ui/themes';
import { GroupeData, PlaylistData } from '../../pages/HomePage';
import * as Form from '@radix-ui/react-form';

interface SharePlaylistProps {
  groupeData: GroupeData[];
  playlistInfo: PlaylistData;
  // setGroupeData: (updatedData: GroupeData[]) => void;
}

const SharePlaylist = ({ groupeData, playlistInfo }: SharePlaylistProps) => {
  const hasPlaylist = (groupe: GroupeData) => {
    return groupe.playlist.some((playlist) => playlist.id === playlistInfo.id);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget as HTMLFormElement);
    // const selectedGroups = formData.getAll('groupe');
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Dialog.Title>
        <Text align={'center'}>Partager la playlist</Text>
      </Dialog.Title>
      <Flex gap={'6'} direction="column">
        {groupeData.map((groupe) => (
          <Form.Field name="groupe" key={groupe.id}>
            <Flex align={'center'} gap={'2'} key={groupe.id}>
              <Avatar
                src={groupe.playlist[0]?.cover}
                fallback={groupe.name.slice(0, 2)}
                radius="full"
              />
              <Text>{groupe.name}</Text>
              <Form.Control asChild>
                <Checkbox
                  value={groupe.id}
                  defaultChecked={hasPlaylist(groupe)}
                />
              </Form.Control>
            </Flex>
          </Form.Field>
        ))}
      </Flex>
      <Flex gap={'4'} justify={'center'} mt="5">
        <Form.Submit asChild>
          <Dialog.Close>
            <Button type="submit">Partager</Button>
          </Dialog.Close>
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
};

export default SharePlaylist;
