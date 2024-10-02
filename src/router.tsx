import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { useUserState } from './stores/useUserState';

// Here we can define Router context
export const router = createRouter({
  routeTree,
  context: {
    userState: useUserState(),
  },
});
