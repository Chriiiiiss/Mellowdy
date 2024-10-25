import { createFileRoute } from '@tanstack/react-router';
import { GroupDetails } from '../../pages/GroupDetails';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/groupDetails/$organizationId')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: GroupDetails,
});
