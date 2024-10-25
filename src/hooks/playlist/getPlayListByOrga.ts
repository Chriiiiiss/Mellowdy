import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IUser } from '../../interfaces/user';
import { buildHeaders } from '../../utils/routesUtils/buildHeaders';
import { PlaylistDataResponse } from './getAllPlaylist';
import { useUserState } from '../../stores/useUserState';
import { fetchPlaylist } from './getPlaylist';

const fetchPlaylistDataByIds = async (
  token: string,
  user: Partial<IUser> | undefined,
  playlistIds: number[]
) => {
  return Promise.all(
    playlistIds.map(async (playlistId) => {
      const response = fetchPlaylist(token, user, playlistId);

      return response;
    })
  );
};

export const fetchPlaylistInfoByIds = async (
  token: string,
  user: Partial<IUser> | undefined,
  playlistIds: number[]
) => {
  if (!user) {
    throw new Error('User not found');
  }

  const playlistData = await fetchPlaylistDataByIds(token, user, playlistIds);

  return playlistData;
};

export const fetchPlaylistIdsByOrga = async (
  token: string,
  user: Partial<IUser> | undefined,
  orgaId: string
) => {
  if (!user) {
    throw new Error('User not found');
  }

  const headers = buildHeaders(token, user);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization/${orgaId}/playlists`,
    {
      method: 'GET',
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData: PlaylistDataResponse[] = await response.json();

  const data = responseData.map((playlist) => playlist.playlist_id);

  const distinctData = [...new Set(data)];

  return distinctData;
};

const handleFetchPlaylistInfo = async (
  token: string,
  user: Partial<IUser>,
  orgaId: string
) => {
  const distinctPlaylistIds = await fetchPlaylistIdsByOrga(token, user, orgaId);
  const playlistData = await fetchPlaylistInfoByIds(
    token,
    user,
    distinctPlaylistIds
  );

  const playlistDataSanitized = playlistData.map((playlist) => {
    return {
      id: playlist.playlist.id,
      name: playlist.playlist.name,
      cover: playlist.playlist.cover,
    };
  });

  return playlistDataSanitized;
};

export const useGetPlaylistByOrga = (orgaId: string) => {
  const queryClient = useQueryClient();
  const { token, user } = useUserState();

  if (!token || !user) return;

  return useQuery(
    {
      queryKey: ['playlistByOrga', token, user, orgaId],
      queryFn: () => handleFetchPlaylistInfo(token, user, orgaId),
      enabled: !!token && !!user,
      retry: 0,
    },
    queryClient
  );
};
