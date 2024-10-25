import styled from 'styled-components';
import { Flex, IconButton, Text } from '@radix-ui/themes';
import PlaylistActionDropDown from './PlaylistActionDropDown';
import { DownloadIcon } from '@radix-ui/react-icons';
import { useTranslatePlaylist } from '../../hooks/playlists/useTranslatePlaylist';

const PlayButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

// const options = [
//   {
//     icon: <Text>Modifier</Text>,
//     label: 'Modifier',
//     onClick: () =>
//     isRed: false,
//   },
//   {
//     icon: <Text>Supprimer</Text>,
//     label: 'Supprimer',
//     onClick: () =>
//     isRed: true,
//   },
// ];

interface PlaylistActionProps {
  playlistId: string | undefined;
}

const PlaylistAction = ({ playlistId }: PlaylistActionProps) => {
  const translatePlaylist = useTranslatePlaylist();

  const handleDownloadPlaylist = () => {
    if (!playlistId) {
      return;
    }
    translatePlaylist?.mutate(playlistId);
  };

  return (
    <Flex align={'center'} justify={'between'} pt={'40px'} pb={'10px'}>
      <Flex align={'center'} gap={'2'}>
        <Text size={'2'}>4 morceaux</Text>
        {/* <Dropdown options={options} isHorizontalDots /> */}
        <PlaylistActionDropDown />
      </Flex>
      <PlayButton
        onClick={() => handleDownloadPlaylist()}
        variant="solid"
        radius="full"
        color="orange"
      >
        <DownloadIcon />
      </PlayButton>
    </Flex>
  );
};

export default PlaylistAction;
