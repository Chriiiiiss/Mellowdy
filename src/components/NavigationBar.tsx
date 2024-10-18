import {
  GroupIcon,
  HomeIcon,
  PersonIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import { Container, Flex, Text } from '@radix-ui/themes';
import styled from 'styled-components';

const NavItem = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--mellowdy-black);
`;

// TODO: Refactor the NavItem component to use the Button component and add the correct props
export const NavigationBar = () => {
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
        <NavItem>
          <HomeIcon />
          <Text>Home</Text>
        </NavItem>
        <NavItem>
          <GroupIcon />
          <Text>Groupe</Text>
        </NavItem>
        <NavItem>
          <VideoIcon />
          <Text>Playlist</Text>
        </NavItem>
        <NavItem>
          <PersonIcon />
          <Text>Profil</Text>
        </NavItem>
      </Flex>
    </Container>
  );
};
