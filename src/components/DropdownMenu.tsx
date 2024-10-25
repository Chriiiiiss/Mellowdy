import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { DropdownMenu, Flex, IconButton, Text } from '@radix-ui/themes';
import styled from 'styled-components';

interface DropdownMenuProps {
  isHorizontalDots?: boolean;
  options: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    isRed?: boolean;
  }[];
}

const DropdownMenuTrigger = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

const IconContainer = styled(Flex)`
  position: absolute;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Dropdown = ({ isHorizontalDots, options }: DropdownMenuProps) => (
  <Flex width="100%" justify={'end'}>
    <IconContainer direction="column" gap="4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {isHorizontalDots ? (
            <DropdownMenuTrigger variant="solid" radius="full" color="orange">
              <DotsHorizontalIcon />
            </DropdownMenuTrigger>
          ) : (
            <DotsVerticalIcon />
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {options.map((option) => (
            <DropdownMenu.Item key={option.label} onSelect={option.onClick}>
              {option.icon}
              <Text style={{ color: option.isRed ? 'red' : 'black' }}>
                {option.label}
              </Text>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </IconContainer>
  </Flex>
);

export default Dropdown;
