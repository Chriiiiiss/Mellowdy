import {
  DotsHorizontalIcon,
  Pencil1Icon,
  PersonIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { DropdownMenu, Flex, Text } from '@radix-ui/themes';

const PlaylistActionDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <DotsHorizontalIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
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
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default PlaylistActionDropDown;
