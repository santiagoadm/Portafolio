#!/usr/bin/env bash
# Build del frontend para Cloudflare (Workers Builds o GitHub Actions).
# Genera config.js con las variables de entorno disponibles en el build.
set -euo pipefail

cd "$(dirname "$0")/.."

npm --prefix frontend ci
npm --prefix frontend run build

node -e '
const fs = require("fs");
const config = {
  apiUrl: process.env.PORTFOLIO_API_URL ?? "",
  supabaseUrl: process.env.SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY ?? ""
};
fs.writeFileSync(
  "frontend/dist/frontend/browser/config.js",
  `window.PORTFOLIO_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);
'
