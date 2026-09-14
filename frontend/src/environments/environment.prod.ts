import { runtimeConfig } from '../app/runtime-config';

export const environment = {
  production: true,
  apiUrl: runtimeConfig().apiUrl || '/api'
};
