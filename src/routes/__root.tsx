import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Theme } from '@radix-ui/themes';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// Root of the App,
// It will render everything inside it in every route.
// Should be used for global layout or configuration
// like ThemeProvider, ContextProvider, etc.
// Outlet is a placeholder for the child routes
export const Route = createRootRoute({
  component: () => {
    return (
      <React.Fragment>
        <Theme
          accentColor={'tomato'}
          appearance={'dark'}
          radius={'medium'}
          scaling={'100%'}
          panelBackground={'translucent'}
        >
          <Outlet />
        </Theme>
        {!import.meta.env.PROD && <TanStackRouterDevtools />}
      </React.Fragment>
    );
  },
});
