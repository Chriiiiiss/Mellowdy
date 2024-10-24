import { Flex } from '@radix-ui/themes';
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
  text-decoration: none;
  display: flex;
`;

const IconWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  display: inline-block;

  svg {
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px; /* Ajuste la position en fonction de la distance souhaitée */
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
    border-radius: 1px; /* Cela arrondit les extrémités */
  }
`;

export const NavigationItem = ({
  redirectTo,
  icon,
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
        <IconWrapper isActive={isActive}>{icon}</IconWrapper>
      </Flex>
    </NavItem>
  );
};
