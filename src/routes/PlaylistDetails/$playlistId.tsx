import { createFileRoute } from '@tanstack/react-router';
import { PlaylistDetails } from '../../pages/PlaylistDetails';

export const Route = createFileRoute('/PlaylistDetails/$playlistId')({
  component: PlaylistDetails,
});
