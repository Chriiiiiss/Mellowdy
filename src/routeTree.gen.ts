/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';
import { Route as RegisterIndexImport } from './routes/register/index';
import { Route as OnboardingIndexImport } from './routes/onboarding/index';
import { Route as LoginIndexImport } from './routes/login/index';
import { Route as HomePageIndexImport } from './routes/homePage/index';
import { Route as GrouplistIndexImport } from './routes/grouplist/index';
import { Route as GroupDetailsIndexImport } from './routes/groupDetails/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const RegisterIndexRoute = RegisterIndexImport.update({
  path: '/register/',
  getParentRoute: () => rootRoute,
} as any);

const OnboardingIndexRoute = OnboardingIndexImport.update({
  path: '/onboarding/',
  getParentRoute: () => rootRoute,
} as any);

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any);

const HomePageIndexRoute = HomePageIndexImport.update({
  path: '/homePage/',
  getParentRoute: () => rootRoute,
} as any);

const GrouplistIndexRoute = GrouplistIndexImport.update({
  path: '/grouplist/',
  getParentRoute: () => rootRoute,
} as any);

const GroupDetailsIndexRoute = GroupDetailsIndexImport.update({
  path: '/groupDetails/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/groupDetails/': {
      id: '/groupDetails/';
      path: '/groupDetails';
      fullPath: '/groupDetails';
      preLoaderRoute: typeof GroupDetailsIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/grouplist/': {
      id: '/grouplist/';
      path: '/grouplist';
      fullPath: '/grouplist';
      preLoaderRoute: typeof GrouplistIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/homePage/': {
      id: '/homePage/';
      path: '/homePage';
      fullPath: '/homePage';
      preLoaderRoute: typeof HomePageIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/login/': {
      id: '/login/';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof LoginIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/onboarding/': {
      id: '/onboarding/';
      path: '/onboarding';
      fullPath: '/onboarding';
      preLoaderRoute: typeof OnboardingIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/register/': {
      id: '/register/';
      path: '/register';
      fullPath: '/register';
      preLoaderRoute: typeof RegisterIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  GroupDetailsIndexRoute,
  GrouplistIndexRoute,
  HomePageIndexRoute,
  LoginIndexRoute,
  OnboardingIndexRoute,
  RegisterIndexRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/groupDetails/",
        "/grouplist/",
        "/homePage/",
        "/login/",
        "/onboarding/",
        "/register/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/groupDetails/": {
      "filePath": "groupDetails/index.tsx"
    },
    "/grouplist/": {
      "filePath": "grouplist/index.tsx"
    },
    "/homePage/": {
      "filePath": "homePage/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/onboarding/": {
      "filePath": "onboarding/index.tsx"
    },
    "/register/": {
      "filePath": "register/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
