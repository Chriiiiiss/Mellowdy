import { createFileRoute } from '@tanstack/react-router';
import { GroupCreate } from '../../pages/GroupCreate';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/groupCreate/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: GroupCreate,
});
