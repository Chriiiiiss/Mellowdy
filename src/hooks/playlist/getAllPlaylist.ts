import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Organization } from '../organization/getAllOrga';
import { useUserState } from '../../stores/useUserState';
import { fetchPlaylist } from './getPlaylist';
import { IUser } from '../../interfaces/user';

export interface Playlist {
  created_at: string;
  id: number;
  name: string;
  playlist_link: string;
  provider_id: number;
  cover?: string;
}

export interface PlaylistResponse {
  playlist: Playlist;
}

export interface PlaylistDataResponse {
  id: number;
  organization_id: number;
  playlist_id: number;
  user_id: number;
}

export const getPlaylistsData = async (
  token: string,
  playlistIds: (number | undefined)[][],
  user: Partial<IUser> | undefined
) => {
  return Promise.all(
    playlistIds.map(async (organization) => {
      const playlistData = await Promise.all(
        organization.map(async (playlistId) => {
          if (!playlistId) {
            return;
          }
          const { playlist } = await fetchPlaylist(token, user, playlistId);

          return playlist;
        })
      );

      return playlistData;
    })
  );
};

const fetchAllPlaylistInformation = async (
  token: string,
  orga: Organization[] | undefined,
  user: Partial<IUser> | undefined
) => {
  if (!orga) {
    throw new Error('No organization found');
  }

  const playlistIds = await fetchAllPlaylistIds(token, orga);
  const playlistData = await getPlaylistsData(token, playlistIds, user);

  return playlistData;
};

const fetchAllPlaylistIds = async (
  token: string | null,
  orga: Array<Organization>
) => {
  const dataPlaylist = orga!.map(async (orgaItem) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/organization/${orgaItem.id}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch playlists');
    }

    const data: PlaylistDataResponse[] = await response.json();

    if (!data) {
      return [];
    }

    const dataPlaylistIds = data.map((playlist) => {
      if (playlist.playlist_id) {
        return playlist.playlist_id;
      }
    });

    const distinctItems = [...new Set(dataPlaylistIds)];

    return distinctItems;
  });
  const playlistIds = await Promise.all(dataPlaylist);

  return playlistIds;
};

export const useGetAllPlaylistInfo = (orga: Organization[] | undefined) => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user) return;

  return useQuery(
    {
      queryKey: ['getAllPlaylist', token, orga, user],
      queryFn: () => fetchAllPlaylistInformation(token, orga, user),
      enabled: !!token && !!orga && !!user,
      retry: 0,
    },
    queryClient
  );
};
