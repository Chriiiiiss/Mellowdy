import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

interface SpotifyPlaylistResponse {
  Playlist: {
    spotifyPlaylist: {
      name: string;
      images: { url: string }[];
    };
  };
}

const fetchPlaylistFromProvider = async (
  token: string | null,
  playlistLink: string
) => {
  if (!token) {
    throw new Error('No token found in the user state');
  }
  const playlistId = playlistLink.split('/').pop();

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/playlist/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch playlist from provider');
  }

  const data: SpotifyPlaylistResponse = await response.json();
  console.log('data', data);

  const name = data.Playlist.spotifyPlaylist.name;
  const imageUrl = data.Playlist.spotifyPlaylist.images[0]?.url;

  return { playlistId, name, imageUrl };
};

export const useGetPlaylistFromProvider = (playlistId: string) => {
  const queryClient = useQueryClient();
  const { token } = useUserState();
  // const getPlaylist = useGetPlaylist(playlistId).data.;

  return useQuery(
    {
      queryKey: ['getPlaylist', token, playlistId],
      queryFn: () => fetchPlaylistFromProvider(token, playlistId),
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );
};
