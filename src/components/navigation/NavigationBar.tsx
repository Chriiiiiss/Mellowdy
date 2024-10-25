import { Container, Flex } from '@radix-ui/themes';
import { NavigationItem } from './NavigationItem';
import { FileRoutesByPath, useLocation } from '@tanstack/react-router';
import HomeIcon from './assets/img/homeIcon.svg?react';
import GroupIcon from './assets/img/groupIcon.svg?react';
import PlaylistIcon from './assets/img/playlistIcon.svg?react';
import ProfileIcon from './assets/img/profileIcon.svg?react';
import styled from 'styled-components';

type NavigationPossibility = {
  redirectTo: FileRoutesByPath[keyof FileRoutesByPath]['path'];
  icon: React.ReactNode;
  label: string;
};

const NAVIGATION_POSSIBILITIES: NavigationPossibility[] = [
  {
    redirectTo: '/homePage',
    icon: <HomeIcon />,
    label: 'Accueil',
  },
  {
    redirectTo: '/groupList',
    icon: <GroupIcon />,
    label: 'Groupes',
  },
  {
    redirectTo: '/playlistList',
    icon: <PlaylistIcon />,
    label: 'Playlists',
  },
  {
    redirectTo: '/profile',
    icon: <ProfileIcon />,
    label: 'Profile',
  },
];

const NavContainer = styled(Container)`
  position: fixed;
  bottom: 24px;
  left: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(170, 170, 170, 0.5);
  border-radius: 12px 12px;
  padding: 12px 0;
  margin: 0 16px;
  width: calc(100% - 32px);

  svg {
    width: 25px;
  }
`;

// TODO: Refactor the NavItem component to use the Button component and add the correct props
export const NavigationBar = () => {
  const location = useLocation();
  return (
    <NavContainer
      size="4"
      // style={{ backgroundColor: 'var(--mellowdy-orange)' }}
    >
      <Flex direction={'row'} gap={'1'} align={'center'} height={'inherit'}>
        {NAVIGATION_POSSIBILITIES.map((item) => (
          <NavigationItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            redirectTo={item.redirectTo}
            isActive={location.pathname === item.redirectTo}
          />
        ))}
      </Flex>
    </NavContainer>
  );
};
