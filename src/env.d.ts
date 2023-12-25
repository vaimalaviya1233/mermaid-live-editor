/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MERMAID_RENDERER_URL?: string;
  readonly MERMAID_KROKI_RENDERER_URL?: string;
  readonly MERMAID_ANALYTICS_URL?: string;
  readonly MERMAID_DOMAIN?: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
