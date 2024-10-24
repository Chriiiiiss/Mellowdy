import { Flex, Heading, Section, Box } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { useUserState } from '../stores/useUserState';
import { EmptyGroupState } from '../components/homePage/EmptyGroupState';
import {
  HomeGroupNameSkeleton,
  HomePlaylistSkeleton,
} from '../components/Skeleton';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import PlaylistDisplay from '../components/homePage/PlaylistDisplay';
import { useEffect } from 'react';
import { CreateGroupDialog } from '../components/homePage/CreateGroupDialog';
import {
  Playlist,
  useGetAllPlaylistInfo,
} from '../hooks/playlist/getAllPlaylist';
// import { useGetPlaylist } from '../hooks/playlist/getPlaylist';

export interface User {
  username: string | null;
  provider?: number | null;
  email: string | null;
  profilePicture?: string;
  expiration?: Date;
  friends?: User[];
  playlists?: PlaylistData[];
  groupe?: GroupeData[];
}

export interface GroupeData {
  id?: number;
  name: string;
  cover?: string;
  listeners?: {
    name: string;
    img: string;
  }[];
  playlist: Playlist[];
}

export interface PlaylistData {
  cover: string;
  name: string;
  id: number;
}

export const HomePage = () => {
  const { user } = useUserState();
  const getOrganization = useGetAllOrganization();
  const getPlaylistsInfo = useGetAllPlaylistInfo();
  const playlistData = getPlaylistsInfo?.data;
  // const getPlaylist = useGetPlaylist(1);
  //

  useEffect(() => {
    console.log('getOrganization', getOrganization.data);
  }, [getPlaylistsInfo?.data]);

  if (!playlistData) {
    return;
  }

  return (
    <MainLayout>
      <Section pt="0" pb="6">
        <Flex gap="6" direction="column">
          <Heading>Bonjour {user?.username} !</Heading>

          {/* Should we keep friends ? Not enought time tho */}
          {/* {userData.friends && <ScrollableProfile friends={userData.friends} />} */}

          {/* <NotificationCollapse /> */}
        </Flex>
      </Section>
      <Section pt="0" pb="6">
        {getOrganization?.isLoading || getPlaylistsInfo.isLoading ? (
          <Box style={{ marginTop: '16px' }}>
            <HomeGroupNameSkeleton />
            <Flex gap="2" direction="row">
              <HomePlaylistSkeleton />
              <HomePlaylistSkeleton />
            </Flex>
          </Box>
        ) : (
          <Flex gap="6" direction="column">
            {!getOrganization.data ? (
              <EmptyGroupState />
            ) : (
              getOrganization.data.map((group, index) => {
                return (
                  <PlaylistDisplay
                    key={group.id}
                    name={group.name}
                    playlist={playlistData[index]}
                    cover={group.avatar_url}
                    id={group.id}
                  />
                );
              })
            )}
            <Flex justify={'between'}>
              <CreateGroupDialog />
            </Flex>
          </Flex>
        )}
      </Section>
    </MainLayout>
  );
};
