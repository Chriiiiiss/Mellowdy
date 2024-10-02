import { createFileRoute, redirect } from '@tanstack/react-router';

import { HomePage } from '../../pages/HomePage';

export const Route = createFileRoute('/homePage/')({
  beforeLoad: async ({ context, location }) => {
    const user = context.userState;

    if (!user?.isAuth) {
      throw redirect({ to: '/login', search: { redirect: location.href } });
    }
  },
  component: HomePage,
});
