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
  orga!.map(async (orga) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/organization/${orga.id}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch playlist');
    }

    const data: PlaylistResponse = await response.json();

    console.log('data', data);
    return data.playlists;
  });
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
    },
    queryClient
  );
};
