import styled from 'styled-components';
import { Avatar, Flex, Text } from '@radix-ui/themes';

const ImageStyled = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistInfoContainer = styled(Flex)`
  h3 {
    margin: 0;
  }
`;

const PlaylistOwnerAvatar = styled(Avatar)`
  &:not(:first-child) {
    margin-left: -23px;
  }
`;

const PlaylistInfo = () => {
  return (
    <PlaylistInfoContainer
      align="center"
      justify="center"
      direction="column"
      gap="3"
    >
      <ImageStyled
        src="https://picsum.photos/160/160"
        width="160px"
        height="160px"
        alt="Playlist"
      />
      <h3>Playlist Name</h3>
      <Flex align="center" gap="2" direction="column" pt="2px">
        <Flex align="center" gap="2">
          <PlaylistOwnerAvatar
            src="https://picsum.photos/40/40"
            fallback="A"
            radius="full"
            size="2"
          />
          <PlaylistOwnerAvatar
            fallback="AP"
            radius="full"
            size="2"
            variant="solid"
          />
          <PlaylistOwnerAvatar
            fallback="A"
            radius="full"
            size="2"
            variant="solid"
            color="orange"
          />
          <Text>ont créé la playlist</Text>
        </Flex>
        <Text>12 juillet 2024</Text>
      </Flex>
    </PlaylistInfoContainer>
  );
};

export default PlaylistInfo;
