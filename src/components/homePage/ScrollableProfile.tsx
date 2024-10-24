import { Avatar, Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { OrganizationUser } from '../../hooks/organization/getOrganization';

interface ScrollableProfileProps {
  friends: OrganizationUser[];
}

const ProfilContainer = styled(Flex)`
  width: 100vw;
  overflow-x: scroll;
  margin: 0 -24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageStyled = styled(Avatar)`
  &:first-of-type {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const ScrollableProfile = ({ friends }: ScrollableProfileProps) => {
  return (
    <ProfilContainer gap="4">
      {friends.map((friend) => (
        <ImageStyled
          key={friend.id}
          src={friend.avatar_url}
          fallback={friend.name ? friend.name.slice(0, 2).toUpperCase() : 'A'}
          size="5"
          radius="full"
          color="orange"
        />
      ))}
    </ProfilContainer>
  );
};

export default ScrollableProfile;
