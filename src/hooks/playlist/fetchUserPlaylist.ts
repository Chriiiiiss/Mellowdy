import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/auth';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';
import { IUser } from '../../interfaces/user';

interface UserPlaylistFetched {
  created_at: string;
  id: number;
  name: string;
  playlist_link: string;
  provider_id: number;
}

interface UserPlaylistResponse {
  Playlists: UserPlaylistFetched[];
}

const fetchUserPlaylist = async (
  id: number,
  token: string,
  user: Partial<IUser>
) => {
  const headers = buildHeaders(token, user);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/shared/playlists/${id}`,
    {
      method: 'GET',
      headers,
    }
  );

  return response.json() as Promise<UserPlaylistResponse>;
};

export const useFetchUserPlaylist = () => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user) {
    throw new Error('No token or user found in the user state');
  }

  const decodedToken: JwtPayload = jwtDecode(token);

  return useQuery(
    {
      queryKey: ['fetchUserPlaylist', decodedToken.id, token, user],
      queryFn: () => fetchUserPlaylist(decodedToken.id, token, user),
      enabled: !!token,
    },
    queryClient
  );
};
