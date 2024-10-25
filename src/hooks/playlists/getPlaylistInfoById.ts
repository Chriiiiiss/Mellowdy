import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { fetchPlaylist } from '../playlist/getPlaylist';

export const useGetPlaylistInfoById = (playlistId: number | undefined) => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user || !playlistId) return;

  return useQuery(
    {
      queryKey: ['playlistInfo', { token, user, playlistId }],
      queryFn: () => fetchPlaylist(token, user, playlistId),
      enabled: !!token && !!user && !!playlistId,
    },
    queryClient
  );
};
