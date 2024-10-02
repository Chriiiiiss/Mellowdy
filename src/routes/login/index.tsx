import { createFileRoute, redirect } from '@tanstack/react-router';
import { LoginPage } from '../../pages/Login';

export const Route = createFileRoute('/login/')({
  beforeLoad: async ({ context }) => {
    if (context.userState?.isAuth) {
      throw redirect({ to: '/homePage' });
    }
  },
  component: LoginPage,
});
