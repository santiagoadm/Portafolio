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

// Acepta tanto el Project URL (https://xxx.supabase.co) como el endpoint REST
// (https://xxx.supabase.co/rest/v1/) que muestra el panel de Supabase.
function supabaseOrigin(url: string): string {
  return url.trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
}

export function runtimeConfig(): RuntimeConfig {
  const config = window.PORTFOLIO_CONFIG ?? {};
  return {
    apiUrl: (config.apiUrl ?? '').trim().replace(/\/+$/, ''),
    supabaseUrl: supabaseOrigin(config.supabaseUrl ?? ''),
    supabaseAnonKey: (config.supabaseAnonKey ?? '').trim()
  };
}
