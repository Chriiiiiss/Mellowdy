import { Text } from '@radix-ui/themes';
import { FileRoutesByPath, Link } from '@tanstack/react-router';
import { styled } from 'styled-components';

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  redirectTo: FileRoutesByPath[keyof FileRoutesByPath]['path'];
}

const NavItem = styled(Link)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--mellowdy-black);
  text-decoration: none;
  display: flex;
`;

export const NavigationItem = ({
  redirectTo,
  icon,
  label,
}: NavigationItemProps) => {
  return (
    <NavItem to={redirectTo}>
      {icon}
      <Text>{label}</Text>
    </NavItem>
  );
};
