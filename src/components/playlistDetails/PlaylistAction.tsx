import styled from 'styled-components';
import { Flex, IconButton, Text } from '@radix-ui/themes';
import PlaylistActionDropDown from './PlaylistActionDropDown';
import { PlayIcon, PlusIcon } from '@radix-ui/react-icons';

const PlusButton = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

const PlayButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const PlaylistAction = () => {
  return (
    <Flex align={'center'} justify={'between'} pt={'40px'} pb={'10px'}>
      <Flex align={'center'} gap={'2'}>
        <Text size={'2'}>4 morceaux</Text>
        <PlusButton variant="solid" radius="full" color="orange">
          <PlusIcon />
        </PlusButton>
        <PlaylistActionDropDown />
      </Flex>
      <PlayButton variant="solid" radius="full" color="orange">
        <PlayIcon />
      </PlayButton>
    </Flex>
  );
};

export default PlaylistAction;
