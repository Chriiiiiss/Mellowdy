import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { User } from '../../pages/HomePage';

interface ScrollableProfileProps {
  friends: User[];
}

const ProfilContainer = styled(Flex)`
  width: 100vw;
  overflow-x: scroll;
  margin: 0 -24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageStyled = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  object-fit: cover;

  &:first-of-type {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const ScrollableProfile = ({ friends }: ScrollableProfileProps) => {
  return (
    <ProfilContainer gap={'4'}>
      {friends.map((friend) => (
        <ImageStyled key={friend.username} src={friend.profilePicture} />
      ))}
    </ProfilContainer>
  );
};

export default ScrollableProfile;
