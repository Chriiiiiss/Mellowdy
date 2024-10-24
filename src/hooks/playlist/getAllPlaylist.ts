import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Organization,
  useGetAllOrganization,
} from '../organization/getAllOrga';
import { useUserState } from '../../stores/useUserState';
import { fetchPlaylist } from './getPlaylist';

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

const getPlaylistsData = async (token: string, playlistIds: number[][]) => {
  return Promise.all(
    playlistIds.map(async (organization) => {
      const playlistData = await Promise.all(
        organization.map(async (playlistId) => {
          const { playlist } = await fetchPlaylist(token, playlistId);

          return playlist;
        })
      );

      return playlistData;
    })
  );
};

const fetchAllPlaylistInformation = async (
  token: string,
  orga: Organization[]
) => {
  const playlistIds = await fetchAllPlaylistIds(token, orga);
  const playlistData = await getPlaylistsData(token, playlistIds);

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

    const dataPlaylistIds = data.map((playlist) => {
      return playlist.playlist_id;
    });

    return dataPlaylistIds;
  });
  const playlistIds = await Promise.all(dataPlaylist);

  return playlistIds;
};

export const useGetAllPlaylistInfo = () => {
  const orga = useGetAllOrganization().data || [];

  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) return null;

  return useQuery(
    {
      queryKey: ['getAllPlaylist', token, orga],
      queryFn: () => fetchAllPlaylistInformation(token, orga as Organization[]),
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );
};
