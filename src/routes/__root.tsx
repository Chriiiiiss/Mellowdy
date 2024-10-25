import * as React from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { Theme } from '@radix-ui/themes';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { UserState } from '../stores/useUserState';

interface RouterContext {
  userState: UserState | undefined;
}

// TODO: Refacto this or DELETE it

declare global {
  // eslint-disable-next-line no-var
  var DebugMode: boolean;
  function activateDebugMode(): void;
  function deactivateDebugMode(): void;
}

const DEBUG_MODE = true;

// Root of the App,
// It will render everything inside it in every route.
// Should be used for global layout or configuration
// like ThemeProvider, ContextProvider, etc.
// Outlet is a placeholder for the child routes
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <React.Fragment>
        <Theme
          accentColor={'orange'}
          appearance={'light'}
          radius={'medium'}
          scaling={'100%'}
          panelBackground={'translucent'}
        >
          <Outlet />
        </Theme>
        {DEBUG_MODE && <TanStackRouterDevtools />}
      </React.Fragment>
    );
  },
});
