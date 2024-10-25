import { createFileRoute } from '@tanstack/react-router';
import { RegisterPage } from '../../pages/Register';
import { checkAuth } from '../../utils/routesUtils/authGuard';

export const Route = createFileRoute('/register/')({
  beforeLoad: async ({ context }) => {
    checkAuth(context.userState);
  },
  component: RegisterPage,
});
