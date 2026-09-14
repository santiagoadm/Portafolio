export interface RuntimeConfig {
  apiUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
}

declare global {
  interface Window {
    PORTFOLIO_CONFIG?: Partial<RuntimeConfig>;
  }
}

export function runtimeConfig(): RuntimeConfig {
  const config = window.PORTFOLIO_CONFIG ?? {};
  return {
    apiUrl: config.apiUrl ?? '',
    supabaseUrl: config.supabaseUrl ?? '',
    supabaseAnonKey: config.supabaseAnonKey ?? ''
  };
}
