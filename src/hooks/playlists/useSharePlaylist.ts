import { useMutation, useQueryClient } from '@tanstack/react-query';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';
import { IUser } from '../../interfaces/user';
import { useUserState } from '../../stores/useUserState';

interface SharePlaylistPayload {
  organization_id: number;
  playlist_provider_id: string;
}

interface SharePlaylistResponse {
  message: string;
}

interface SharePlaylistError {
  error: string;
}

const importPlaylist = async (
  token: string,
  user: Partial<IUser>,
  playlistProviderId: string
) => {
  const headers = buildHeaders(token, user);
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/playlist/${playlistProviderId}`,
    {
      headers,
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData = await response.json();

  return responseData;
};

const sharePlaylist = async (
  token: string,
  user: Partial<IUser>,
  payload: SharePlaylistPayload
) => {
  const headers = buildHeaders(token, user);
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/shared/playlist`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData: SharePlaylistResponse = await response.json();

  if (!responseData) {
    throw new Error('No data returned from the server');
  }

  const queryImportPlaylist = await importPlaylist(
    token,
    user,
    payload.playlist_provider_id
  );

  return queryImportPlaylist;
};

export const useSharePlaylist = () => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token) return;
  if (!user) return;

  return useMutation<
    SharePlaylistResponse,
    SharePlaylistError,
    SharePlaylistPayload
  >(
    {
      mutationFn: (payload) => sharePlaylist(token, user, payload),
    },
    queryClient
  );
};
