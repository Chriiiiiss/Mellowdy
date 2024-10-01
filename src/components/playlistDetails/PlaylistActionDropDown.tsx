import {
  DotsHorizontalIcon,
  Pencil1Icon,
  PersonIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { DropdownMenu, Flex, Text } from '@radix-ui/themes';
import styled from 'styled-components';

const DropdownMenuContent = styled(DropdownMenu.Content)`
  padding: 8px;
`;

const PlaylistActionDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <DotsHorizontalIcon />
      </DropdownMenu.Trigger>
      <DropdownMenuContent>
        <Flex justify="center" gap={'3'} direction={'column'}>
          <Flex align="center" gap={'2'}>
            <Pencil1Icon />
            <Text>Modifier</Text>
          </Flex>
          <Flex align="center" gap={'2'}>
            <PersonIcon />
            <Text>Gerer membres</Text>
          </Flex>
          <Flex align="center" gap={'2'}>
            <TrashIcon color={'red'} />
            <Text color={'red'}>Supprimer playlist</Text>
          </Flex>
        </Flex>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default PlaylistActionDropDown;
