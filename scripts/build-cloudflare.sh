#!/usr/bin/env bash
# Build del frontend para Cloudflare (Workers Builds o GitHub Actions).
# Genera config.js con las variables de entorno disponibles en el build.
set -euo pipefail

cd "$(dirname "$0")/.."

npm --prefix frontend ci
npm --prefix frontend run build

cat > frontend/dist/frontend/browser/config.js <<EOF
window.PORTFOLIO_CONFIG = {
  apiUrl: '${PORTFOLIO_API_URL:-}',
  supabaseUrl: '${SUPABASE_URL:-}',
  supabaseAnonKey: '${SUPABASE_ANON_KEY:-}'
};
EOF
