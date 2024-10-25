import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { PlaylistResponse } from './getAllPlaylist';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';
import { IUser } from '../../interfaces/user';

export const fetchPlaylist = async (
  token: string | null,
  user: Partial<IUser> | undefined,
  playlistId: number
) => {
  if (!token || !user) {
    throw new Error('No token found in the user state');
  }

  const headers = buildHeaders(token, user);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/shared/playlist/${playlistId}`,
    {
      headers,
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
  const { token, user } = useUserState();

  if (!token || !user) {
    throw new Error('No token or user found in the user state');
  }

  return useQuery(
    {
      queryKey: ['getPlaylist', token, playlistId, user],
      queryFn: () => fetchPlaylist(token, user, playlistId),
      enabled: !!token && !!user,
      retry: 0,
    },
    queryClient
  );
};
