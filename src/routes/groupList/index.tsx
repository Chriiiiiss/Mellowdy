import { createFileRoute } from '@tanstack/react-router';
import { GroupList } from '../../pages/GroupList';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/groupList/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: GroupList,
});
