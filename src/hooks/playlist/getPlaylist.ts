import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { PlaylistResponse } from './getAllPlaylist';

export const fetchPlaylist = async (
  token: string | null,
  playlistId: number
) => {
  if (!token) {
    throw new Error('No token found in the user state');
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/shared/playlist/${playlistId}`,
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

  return data;
};

export const useGetPlaylist = (playlistId: number) => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  return useQuery(
    {
      queryKey: ['getPlaylist', token, playlistId],
      queryFn: () => fetchPlaylist(token, playlistId),
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );
};
