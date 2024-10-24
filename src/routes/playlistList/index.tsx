import { createFileRoute } from '@tanstack/react-router';
import { PlaylistListPage } from '../../pages/PlaylistList';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/playlistList/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: PlaylistListPage,
});
