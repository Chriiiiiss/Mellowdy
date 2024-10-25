import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { IUser } from '../../interfaces/user';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';

interface ProviderPlaylistIdResponse {
  playlists: {
    user_id: number;
    data: ProviderPlaylistId[];
  };
}

interface ProviderPlaylistId {
  id: string;
  name: string;
  url: string;
  provider: number;
}

const fetchProviderPlaylistIds = async (
  token: string,
  user: Partial<IUser>
) => {
  const headers = buildHeaders(token, user);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/user/playlists`,
    {
      method: 'GET',
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData: ProviderPlaylistIdResponse = await response.json();

  const data = responseData.playlists.data;

  const sanitizedData = data.filter((playlist) => playlist.name !== '');

  return sanitizedData;
};

export const useGetProviderPlaylist = () => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token) return;
  if (!user) return;

  return useQuery(
    {
      queryKey: ['providerPlaylist', token, user],
      queryFn: () => fetchProviderPlaylistIds(token, user),
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );
};
