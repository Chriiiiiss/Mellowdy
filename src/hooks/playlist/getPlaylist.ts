import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PlaylistResponse } from './getAllPlaylist';
import { useUserState } from '../../stores/useUserState';

const fetchPlaylist = async (token: string | null, playlistId: number) => {
  if (!token) {
    throw new Error('No token found in the user state');
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/playlist/${playlistId}`,
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

  return data.playlists;
};

export const useGetPlaylist = (playlistId: number) => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  return useQuery(
    {
      queryKey: ['getPlaylist', token, playlistId],
      queryFn: () => fetchPlaylist(token, playlistId),
      enabled: !!token,
    },
    queryClient
  );
};
