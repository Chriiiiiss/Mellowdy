/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_MELLOWDY_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
