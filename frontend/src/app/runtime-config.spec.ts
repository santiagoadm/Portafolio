import { runtimeConfig } from './runtime-config';

describe('runtimeConfig', () => {
  afterEach(() => {
    delete window.PORTFOLIO_CONFIG;
  });

  it('normaliza el endpoint REST al origen del proyecto', () => {
    window.PORTFOLIO_CONFIG = { supabaseUrl: 'https://abc.supabase.co/rest/v1/' };
    expect(runtimeConfig().supabaseUrl).toBe('https://abc.supabase.co');
  });

  it('mantiene el Project URL y devuelve vacíos por defecto', () => {
    window.PORTFOLIO_CONFIG = { supabaseUrl: 'https://abc.supabase.co' };
    const config = runtimeConfig();
    expect(config.supabaseUrl).toBe('https://abc.supabase.co');
    expect(config.apiUrl).toBe('');
    expect(config.supabaseAnonKey).toBe('');
  });
});
