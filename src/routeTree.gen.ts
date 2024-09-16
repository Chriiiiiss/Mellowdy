/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as OnboardingIndexImport } from './routes/onboarding/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as GrouplistIndexImport } from './routes/grouplist/index'
import { Route as HomePageIndexImport } from './routes/homePage/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OnboardingIndexRoute = OnboardingIndexImport.update({
  path: '/onboarding/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const GrouplistIndexRoute = GrouplistIndexImport.update({
  path: '/grouplist/',
  getParentRoute: () => rootRoute,
} as any)

const HomePageIndexRoute = HomePageIndexImport.update({
  path: '/homePage/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/grouplist/': {
      id: '/grouplist/'
    '/homePage/': {
      id: '/homePage/'
      path: '/homePage'
      fullPath: '/homePage'
      preLoaderRoute: typeof HomePageIndexImport
      parentRoute: typeof rootRoute
    }
    '/grouplist': {
      id: '/grouplist'
      path: '/grouplist'
      fullPath: '/grouplist'
      preLoaderRoute: typeof GrouplistIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/onboarding/': {
      id: '/onboarding/'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof OnboardingIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginIndexRoute
  '/onboarding': typeof OnboardingIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginIndexRoute
  '/onboarding': typeof OnboardingIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login/': typeof LoginIndexRoute
  '/onboarding/': typeof OnboardingIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/onboarding'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/onboarding'
  id: '__root__' | '/' | '/login/' | '/onboarding/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
  OnboardingIndexRoute: typeof OnboardingIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  OnboardingIndexRoute: OnboardingIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/homePage/",
        "/grouplist",
        "/login/",
        "/onboarding/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/grouplist/": {
      "filePath": "grouplist/index.tsx"
    "/homePage/": {
      "filePath": "homePage/index.tsx"
    },
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/onboarding/": {
      "filePath": "onboarding/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
