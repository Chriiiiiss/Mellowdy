import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Organization,
  useGetAllOrganization,
} from '../organization/getAllOrga';
import { useUserState } from '../../stores/useUserState';

export interface PlaylistResponse {
  playlists: Playlist[];
}

interface Playlist {
  id: number;
  userID: number;
  playlistID: number;
  organizationID: number;
}

const fetchAllPlaylistInfo = async (
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

    const data: PlaylistResponse = await response.json();

    return data.playlists;
  });
  console.log('dataPlaylist', await dataPlaylist);
};

export const useGetAllPlaylistInfo = () => {
  const orga = useGetAllOrganization().data || [];

  const queryClient = useQueryClient();
  const { token } = useUserState();

  return useQuery(
    {
      queryKey: ['getAllPlaylist', token, orga],
      queryFn: () => fetchAllPlaylistInfo(token, orga as Organization[]),
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );
};
