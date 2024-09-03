import { createLazyFileRoute } from '@tanstack/react-router';

import { LoginPage } from '../pages/Login';

export const Route = createLazyFileRoute('/')({
  component: LoginPage,
});
