import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

import { IUser } from '../../interfaces/user';

const fetchPlaylistSounds = async (
  token: string,
  user: Partial<IUser>,
  playlistId: number
) => {
  return [token, user, playlistId];
};

export const useGetPlaylistSounds = (playlistId: number | undefined) => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user || !playlistId) return;

  return useQuery(
    {
      queryKey: ['playlistSounds', { token, user, playlistId }],
      queryFn: () => fetchPlaylistSounds(token, user, playlistId),
      enabled: !!token && !!user && !!playlistId,
      retry: 0,
    },
    queryClient
  );
};
