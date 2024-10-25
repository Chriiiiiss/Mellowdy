import styled from 'styled-components';
import { Flex, Text } from '@radix-ui/themes';

const ImageStyled = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistInfoContainer = styled(Flex)`
  h3 {
    margin: 0;
  }
`;

interface PlaylistInfoProps {
  name: string;
  date: string;
}

const PlaylistInfo = ({ name, date }: PlaylistInfoProps) => {
  const parsedDate = new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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
      <h3>{name}</h3>
      <Flex align="center" gap="2" direction="column" pt="2px">
        <Text>
          <strong>Crée le :</strong> {parsedDate}
        </Text>
      </Flex>
    </PlaylistInfoContainer>
  );
};

export default PlaylistInfo;
