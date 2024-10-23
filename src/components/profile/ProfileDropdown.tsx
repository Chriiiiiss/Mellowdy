import { DotsVerticalIcon, ExitIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { DropdownMenu, Flex, Text } from '@radix-ui/themes';
import styled from 'styled-components';

interface ProfileDropdownProps {
  onEdit: () => void;
  onLogout: () => void;
}

const IconContainer = styled(Flex)`
  position: absolute;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProfileDropdown = ({ onEdit, onLogout }: ProfileDropdownProps) => (
  <IconContainer direction="column" gap="4">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <DotsVerticalIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={onEdit}>
          <Pencil1Icon />
          <Text>Modifier</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={onLogout}>
          <ExitIcon color="red" />
          <Text color="red">Se déconnecter</Text>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </IconContainer>
);

export default ProfileDropdown;
