import { GroupIcon, HomeIcon, VideoIcon } from '@radix-ui/react-icons';
import { Container, Flex } from '@radix-ui/themes';
import { NavigationItem } from './NavigationItem';
import { FileRoutesByPath } from '@tanstack/react-router';

type NavigationPossibility = {
  redirectTo: FileRoutesByPath[keyof FileRoutesByPath]['path'];
  icon: React.ReactNode;
  label: string;
};

const NAVIGATION_POSSIBILITIES: NavigationPossibility[] = [
  {
    redirectTo: '/homePage',
    icon: <HomeIcon />,
    label: 'Home',
  },
  {
    redirectTo: '/groupList',
    icon: <GroupIcon />,
    label: 'Groupe',
  },
  {
    redirectTo: '/groupDetails',
    icon: <VideoIcon />,
    label: 'Groupe Details',
  },
];
// TODO: Refactor the NavItem component to use the Button component and add the correct props
export const NavigationBar = () => {
  return (
    <Container
      position={'sticky'}
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
          />
        ))}
      </Flex>
    </Container>
  );
};
