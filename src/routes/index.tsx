import { createFileRoute, redirect } from '@tanstack/react-router';

import { DashboardPage } from '../pages/Dashboard';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
    const { isAuth } = context;
    if (isAuth === false) {
      throw redirect({ to: '/login' });
    }
  },
  component: DashboardPage,
});
