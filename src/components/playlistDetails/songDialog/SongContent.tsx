import styled from 'styled-components';
import { Avatar, Flex, Link, Text } from '@radix-ui/themes';

const ImageStyled = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistListenerAvatar = styled(Avatar)`
  &:not(:first-child) {
    z-index: 1;
    margin-left: -15px;
  }
`;

const SongContent = () => {
  return (
    <>
      <Flex align={'center'} gap={'5'}>
        <ImageStyled
          src={'https://picsum.photos/55/55'}
          width={'55px'}
          height={'55px'}
          alt={'Playlist'}
        />
        <Flex direction={'column'} gap={'1'}>
          <Text size={'2'} weight={'bold'}>
            Titre de la musique
          </Text>
          <Text size={'2'}>Artiste</Text>
        </Flex>
      </Flex>
      <Link>
        <PlaylistListenerAvatar
          fallback="A"
          radius="full"
          size={'2'}
          variant="solid"
        />
        <PlaylistListenerAvatar
          src={'https://picsum.photos/25/25'}
          fallback="A"
          radius="full"
          size={'2'}
          variant="solid"
        />
        <PlaylistListenerAvatar
          src={'https://picsum.photos/25/25'}
          fallback="A"
          radius="full"
          size={'2'}
          variant="solid"
          color="green"
        />
      </Link>
    </>
  );
};

export default SongContent;
