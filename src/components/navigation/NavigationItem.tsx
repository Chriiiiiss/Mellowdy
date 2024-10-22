import { Flex, Text } from '@radix-ui/themes';
import { FileRoutesByPath, Link } from '@tanstack/react-router';
import { styled } from 'styled-components';

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  redirectTo: FileRoutesByPath[keyof FileRoutesByPath]['path'];
  isActive: boolean;
}

const NavItem = styled(Link)<{ isActive?: boolean }>`
  width: 100%;
  height: 100%;
  color: ${(props) =>
    props.isActive ? 'var(--mellowdy-orange)' : 'var(--mellowdy-black)'};
  text-decoration: none;
  display: flex;
`;

export const NavigationItem = ({
  redirectTo,
  icon,
  label,
  isActive,
}: NavigationItemProps) => {
  return (
    <NavItem to={redirectTo} isActive={isActive}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        width="100%"
        height="100%"
      >
        {icon}
        <Text weight="medium" align="center">
          {label}
        </Text>
      </Flex>
    </NavItem>
  );
};
