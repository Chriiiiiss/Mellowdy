import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { useUserState } from './stores/useUserState.ts';
import './styles/main.css';
import { ThemeProvider } from './theme.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

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
  const [isMusicKitConfigured, setIsMusicKitConfigured] = useState(false);

  useEffect(() => {
    document.addEventListener('musickitconfigured', handleConfiguration);

    MusicKit.configure({
      developerToken: import.meta.env.VITE_APPLE_DEV_TOKEN,
      app: {
        name: 'Mellowdy',
        build: '1.0.0',
      },
    });

    return () => {
      document.removeEventListener('musickitconfigured', handleConfiguration);
    };
  }, []);

  const handleConfiguration = () => {
    setIsMusicKitConfigured(true);
  };

  if (!isMusicKitConfigured) return <p>Loading...</p>;

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
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
