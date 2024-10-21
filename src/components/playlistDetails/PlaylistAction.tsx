import styled from 'styled-components';
import { Dialog, Flex, IconButton, Text } from '@radix-ui/themes';
import PlaylistActionDropDown from './PlaylistActionDropDown';
import { PlayIcon } from '@radix-ui/react-icons';

const PlayButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const PlaylistAction = () => {
  return (
    <Dialog.Root>
      <Flex align={'center'} justify={'between'} pt={'40px'} pb={'10px'}>
        <Flex align={'center'} gap={'2'}>
          <Text size={'2'}>4 morceaux</Text>
          <PlaylistActionDropDown />
        </Flex>
        <PlayButton variant="solid" radius="full" color="orange">
          <PlayIcon />
        </PlayButton>
      </Flex>
    </Dialog.Root>
  );
};

export default PlaylistAction;
