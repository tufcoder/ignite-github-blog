/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_STORAGE: string
  readonly VITE_GITHUB_API_URL: string
  readonly VITE_GITHUB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
