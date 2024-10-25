import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import { IUser } from '../../interfaces/user';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';

const translatePlaylist = async (
  playlistId: string,
  token: string,
  user: Partial<IUser>
) => {
  const headers = buildHeaders(token, user);

  const payload = {
    playlist_id: Number(playlistId),
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/playlist/translate`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    }
  );

  console.log(response);

  if (!response.ok) {
    throw new Error('An error occured while translating the playlist');
  }

  return response.json();
};

export const useTranslatePlaylist = () => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user) {
    return;
  }

  return useMutation(
    {
      mutationKey: ['translatePlaylist'],
      mutationFn: (playlistId: string) =>
        translatePlaylist(playlistId, token, user),
    },
    queryClient
  );
};