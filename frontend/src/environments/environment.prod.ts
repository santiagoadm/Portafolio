declare global {
  interface Window {
    PORTFOLIO_API_URL?: string;
  }
}

export const environment = {
  production: true,
  apiUrl: window.PORTFOLIO_API_URL || '/api'
};
