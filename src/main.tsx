import React from 'react';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { useUserState } from './stores/useUserState.ts';
import './styles/main.css';
import { ThemeProvider } from './theme.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createRouter({
  routeTree,
  context: { userState: undefined },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Workaround to access the user hook and pass it to the router context
const InnerApp = () => {
  const queryClient = new QueryClient();
  const userState = useUserState();

  document.addEventListener('musickitloaded', async function () {
    try {
      await MusicKit.configure({
        developerToken: import.meta.env.VITE_APPLE_DEV_TOKEN,
        app: {
          name: 'Mellowdy',
          build: '1.0.0',
        },
      });
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ userState }} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  </React.StrictMode>
);
