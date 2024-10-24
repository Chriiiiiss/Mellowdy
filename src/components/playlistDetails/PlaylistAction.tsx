import styled from 'styled-components';
import { Flex, IconButton, Text } from '@radix-ui/themes';
import PlaylistActionDropDown from './PlaylistActionDropDown';
import { PlayIcon } from '@radix-ui/react-icons';

const PlayButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

// const options = [
//   {
//     icon: <Text>Modifier</Text>,
//     label: 'Modifier',
//     onClick: () => console.log('Modifier'),
//     isRed: false,
//   },
//   {
//     icon: <Text>Supprimer</Text>,
//     label: 'Supprimer',
//     onClick: () => console.log('Supprimer'),
//     isRed: true,
//   },
// ];

const PlaylistAction = () => {
  return (
    <Flex align={'center'} justify={'between'} pt={'40px'} pb={'10px'}>
      <Flex align={'center'} gap={'2'}>
        <Text size={'2'}>4 morceaux</Text>
        {/* <Dropdown options={options} isHorizontalDots /> */}
        <PlaylistActionDropDown />
      </Flex>
      <PlayButton variant="solid" radius="full" color="orange">
        <PlayIcon />
      </PlayButton>
    </Flex>
  );
};

export default PlaylistAction;
