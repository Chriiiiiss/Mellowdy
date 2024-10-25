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
  playlist: (Playlist | undefined)[];
}

export interface PlaylistData {
  cover: string;
  name: string;
  id: number;
}

export const HomePage = () => {
  const { user } = useUserState();
  const getOrganization = useGetAllOrganization();
  const getPlaylistsInfo = useGetAllPlaylistInfo(getOrganization?.data);
  const playlistData = getPlaylistsInfo?.data;

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
        {getOrganization?.isLoading ? (
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
              playlistData &&
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
            {playlistData && <CreateGroupDialog />}
          </Flex>
        )}
      </Section>
    </MainLayout>
  );
};
