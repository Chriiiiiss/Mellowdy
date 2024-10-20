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
import { Route as GroupListIndexImport } from './routes/groupList/index';
import { Route as GroupDetailsIndexImport } from './routes/groupDetails/index';
import { Route as PlaylistDetailsIndexImport } from './routes/PlaylistDetails/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const RegisterIndexRoute = RegisterIndexImport.update({
  id: '/register/',
  path: '/register/',
  getParentRoute: () => rootRoute,
} as any);

const OnboardingIndexRoute = OnboardingIndexImport.update({
  id: '/onboarding/',
  path: '/onboarding/',
  getParentRoute: () => rootRoute,
} as any);

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any);

const HomePageIndexRoute = HomePageIndexImport.update({
  id: '/homePage/',
  path: '/homePage/',
  getParentRoute: () => rootRoute,
} as any);

const GroupListIndexRoute = GroupListIndexImport.update({
  id: '/groupList/',
  path: '/groupList/',
  getParentRoute: () => rootRoute,
} as any);

const GroupDetailsIndexRoute = GroupDetailsIndexImport.update({
  id: '/groupDetails/',
  path: '/groupDetails/',
  getParentRoute: () => rootRoute,
} as any);

const PlaylistDetailsIndexRoute = PlaylistDetailsIndexImport.update({
  id: '/PlaylistDetails/',
  path: '/PlaylistDetails/',
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
    '/PlaylistDetails/': {
      id: '/PlaylistDetails/';
      path: '/PlaylistDetails';
      fullPath: '/PlaylistDetails';
      preLoaderRoute: typeof PlaylistDetailsIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/groupDetails/': {
      id: '/groupDetails/';
      path: '/groupDetails';
      fullPath: '/groupDetails';
      preLoaderRoute: typeof GroupDetailsIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/groupList/': {
      id: '/groupList/';
      path: '/groupList';
      fullPath: '/groupList';
      preLoaderRoute: typeof GroupListIndexImport;
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

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/PlaylistDetails': typeof PlaylistDetailsIndexRoute;
  '/groupDetails': typeof GroupDetailsIndexRoute;
  '/groupList': typeof GroupListIndexRoute;
  '/homePage': typeof HomePageIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/onboarding': typeof OnboardingIndexRoute;
  '/register': typeof RegisterIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/PlaylistDetails': typeof PlaylistDetailsIndexRoute;
  '/groupDetails': typeof GroupDetailsIndexRoute;
  '/groupList': typeof GroupListIndexRoute;
  '/homePage': typeof HomePageIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/onboarding': typeof OnboardingIndexRoute;
  '/register': typeof RegisterIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/PlaylistDetails/': typeof PlaylistDetailsIndexRoute;
  '/groupDetails/': typeof GroupDetailsIndexRoute;
  '/groupList/': typeof GroupListIndexRoute;
  '/homePage/': typeof HomePageIndexRoute;
  '/login/': typeof LoginIndexRoute;
  '/onboarding/': typeof OnboardingIndexRoute;
  '/register/': typeof RegisterIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | '/'
    | '/PlaylistDetails'
    | '/groupDetails'
    | '/groupList'
    | '/homePage'
    | '/login'
    | '/onboarding'
    | '/register';
  fileRoutesByTo: FileRoutesByTo;
  to:
    | '/'
    | '/PlaylistDetails'
    | '/groupDetails'
    | '/groupList'
    | '/homePage'
    | '/login'
    | '/onboarding'
    | '/register';
  id:
    | '__root__'
    | '/'
    | '/PlaylistDetails/'
    | '/groupDetails/'
    | '/groupList/'
    | '/homePage/'
    | '/login/'
    | '/onboarding/'
    | '/register/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  PlaylistDetailsIndexRoute: typeof PlaylistDetailsIndexRoute;
  GroupDetailsIndexRoute: typeof GroupDetailsIndexRoute;
  GroupListIndexRoute: typeof GroupListIndexRoute;
  HomePageIndexRoute: typeof HomePageIndexRoute;
  LoginIndexRoute: typeof LoginIndexRoute;
  OnboardingIndexRoute: typeof OnboardingIndexRoute;
  RegisterIndexRoute: typeof RegisterIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PlaylistDetailsIndexRoute: PlaylistDetailsIndexRoute,
  GroupDetailsIndexRoute: GroupDetailsIndexRoute,
  GroupListIndexRoute: GroupListIndexRoute,
  HomePageIndexRoute: HomePageIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  OnboardingIndexRoute: OnboardingIndexRoute,
  RegisterIndexRoute: RegisterIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/PlaylistDetails/",
        "/groupDetails/",
        "/groupList/",
        "/homePage/",
        "/login/",
        "/onboarding/",
        "/register/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/PlaylistDetails/": {
      "filePath": "PlaylistDetails/index.tsx"
    },
    "/groupDetails/": {
      "filePath": "groupDetails/index.tsx"
    },
    "/groupList/": {
      "filePath": "groupList/index.tsx"
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
