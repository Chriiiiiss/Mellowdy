import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '../../pages/Profile';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/profile/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: ProfilePage,
});
