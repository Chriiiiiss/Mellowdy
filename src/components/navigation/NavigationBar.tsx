import { Container, Flex } from '@radix-ui/themes';
import { NavigationItem } from './NavigationItem';
import { FileRoutesByPath, useLocation } from '@tanstack/react-router';
import HomeIcon from './assets/img/HomeIcon.svg?react';
import GroupIcon from './assets/img/GroupIcon.svg?react';
import PlaylistIcon from './assets/img/PlaylistIcon.svg?react';
import ProfileIcon from './assets/img/ProfileIcon.svg?react';

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
// TODO: Refactor the NavItem component to use the Button component and add the correct props
export const NavigationBar = () => {
  const location = useLocation();
  return (
    <Container
      position={'fixed'}
      bottom={'0'}
      left={'0'}
      size="4"
      style={{ backgroundColor: 'var(--mellowdy-white)' }}
      minWidth={'100vw'}
      width={'100vw'}
      minHeight={'96px'}
      height={'96px'}
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
    </Container>
  );
};
