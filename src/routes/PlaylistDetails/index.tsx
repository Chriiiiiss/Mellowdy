import { createFileRoute } from '@tanstack/react-router';
import { PlaylistDetails } from '../../pages/PlaylistDetails';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/PlaylistDetails/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: PlaylistDetails,
});
