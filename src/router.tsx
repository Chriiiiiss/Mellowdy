import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { userMock } from './interfaces/user';

// Here we can define Router context
export const router = createRouter({
  routeTree,
  context: {
    ...userMock,
  },
});
