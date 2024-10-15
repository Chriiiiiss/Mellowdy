import { createFileRoute } from '@tanstack/react-router';
import { PlaylistListPage } from '../../pages/PlaylistList';

export const Route = createFileRoute('/playlistList/')({
  component: PlaylistListPage,
});
