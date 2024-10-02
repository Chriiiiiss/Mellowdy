import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '../../pages/HomePage';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/homePage/')({
  beforeLoad: async ({ context }) => {
    console.log(context.userState);
    checkAuth(context.userState);
  },
  component: HomePage,
});
