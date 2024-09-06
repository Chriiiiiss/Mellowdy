import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, Heading } from '@radix-ui/themes';
import styled from 'styled-components';

const ListenerProfile = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  margin: 0 -30px;
`;

const GroupeName = styled(Heading)`
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PlaylistContainer = styled(Flex)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0 -24px;
`;

const PlaylistCover = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 8px;

  &:first-of-type {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const PlaylistDisplay = () => {
  return (
    <Flex gap={'5'} direction={'column'}>
      <Flex align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'}>
          <GroupeName>Euro 2024 Heti</GroupeName>
          <ArrowRightIcon />
        </Flex>
        <Flex>
          <ListenerProfile src="https://placehold.co/40x40/orange/white" />
          <ListenerProfile src="https://placehold.co/40x40/green/white" />
          <ListenerProfile src="https://placehold.co/40x40/red/white" />
        </Flex>
      </Flex>
      <PlaylistContainer gap={'4'}>
        <PlaylistCover src="https://placehold.co/150x150" />
        <PlaylistCover src="https://placehold.co/150x150" />
        <PlaylistCover src="https://placehold.co/150x150" />
        <PlaylistCover src="https://placehold.co/150x150" />
      </PlaylistContainer>
    </Flex>
  );
};

export default PlaylistDisplay;
