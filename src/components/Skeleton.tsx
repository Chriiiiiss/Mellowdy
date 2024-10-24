import { Flex, Skeleton } from '@radix-ui/themes';
import styled from 'styled-components';

const GroupCoverSkeleton = styled(Skeleton)`
  border-radius: 100%;
  width: 101px;
  height: 101px;
`;

const GroupNameSkeleton = styled(Skeleton)`
  border-radius: 8px;
  width: 85px;
  height: 16px;
`;

export const GroupSkeleton = () => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} gap={'2'}>
      <GroupCoverSkeleton />
      <GroupNameSkeleton />
    </Flex>
  );
};

export const HomeGroupNameSkeleton = () => {
  return (
    <Skeleton
      style={{
        width: '200px',
        height: '30px',
        marginBottom: '24px',
        borderRadius: '8px',
      }}
    />
  );
};

export const FriendsSkeleton = () => {
  return (
    <Skeleton
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '100%',
      }}
    />
  );
};

const PlaylistCoverSkeleton = styled(Skeleton)`
  border-radius: 8px;
  width: 101px;
  height: 101px;
`;

const PlaylistNameSkeleton = styled(Skeleton)`
  border-radius: 8px;
  width: 85px;
  height: 16px;
`;

export const PlaylistSkeleton = () => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} gap={'2'}>
      <PlaylistCoverSkeleton />
      <PlaylistNameSkeleton />
    </Flex>
  );
};

const PlaylistCardSkeleton = styled(Skeleton)`
  width: 160px;
  height: 160px;
  border-radius: 8px;
`;

const PlaylistTitleSkeleton = styled(Skeleton)`
  width: 160px;
  height: 24px;
  border-radius: 8px;
`;

export const HomePlaylistSkeleton = () => {
  return (
    <Flex gap="2" direction="column">
      <PlaylistCardSkeleton />
      <PlaylistTitleSkeleton />
    </Flex>
  );
};

const GroupDetailsTitleSkeleton = styled(Skeleton)`
  width: 200px;
  height: 30px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

export const GroupDetailsMetaSkeleton = () => {
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} gap={'1'}>
      <GroupCoverSkeleton />
      <GroupDetailsTitleSkeleton />
    </Flex>
  );
};

export const GroupDetailsMetaDescSkeleton = () => {
  return (
    <Flex direction={'column'} gap={'1'}>
      <Flex direction={'column'}>
        <Skeleton
          width={'100%'}
          height={'16px'}
          style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
        />
        <Skeleton
          width={'30%'}
          height={'16px'}
          style={{
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px',
          }}
        />
      </Flex>

      <Flex gap="4">
        <FriendsSkeleton />
        <FriendsSkeleton />
        <FriendsSkeleton />
      </Flex>
    </Flex>
  );
};
