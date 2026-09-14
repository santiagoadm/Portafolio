# Portfolio personal — Santiago Andrés Díaz Medina

Sitio personal con experiencia, formación, servicios, conocimientos (seguridad de la información,
Power Platform, low code y high code) y certificaciones visibles. Monorepo con frontend en Angular y
backend en Node.js/Express.

```
portfolio/
├─ frontend/   Angular 19 (standalone components, SCSS)
└─ backend/    Node.js + Express + TypeScript (API REST)
```

## Herramientas necesarias

| Herramienta | Versión | Para qué |
|---|---|---|
| [Node.js](https://nodejs.org) | 20 LTS o superior (probado en 22) | Ejecutar frontend y backend |
| npm | 10+ (viene con Node) | Gestión de dependencias |
| [Angular CLI](https://angular.dev/tools/cli) | 19 (`npm i -g @angular/cli@19`) | Servir, construir y testear el frontend |
| [Git](https://git-scm.com) + cuenta de GitHub | — | Control de versiones y despliegue |
| Editor: [VS Code](https://code.visualstudio.com) | — | Extensiones recomendadas: Angular Language Service, ESLint, Prettier |
| Google Chrome | — | Ejecutar los tests con Karma (`CHROME_BIN`) |
| Opcional: [MongoDB](https://www.mongodb.com/try/download/community) o Atlas | 6+ | Si más adelante se guardan los datos en base de datos en vez del archivo `profile.ts` |
| Opcional: Docker | — | Empaquetar el backend |

Hosting sugerido: **GitHub Pages** o Vercel/Netlify para el frontend y **Render/Railway/Azure App
Service** para el backend. El frontend funciona aunque la API no esté disponible: usa una copia
local del perfil como respaldo.

## Puesta en marcha

```bash
# Backend (http://localhost:3000)
cd backend
npm install
npm run dev

# Frontend (http://localhost:4200, proxy /api -> :3000)
cd frontend
npm install
npm start
```

Build de producción:

```bash
cd backend  && npm run build && npm start      # dist/server.js
cd frontend && npm run build                    # dist/frontend/browser
```

Tests del frontend:

```bash
cd frontend && CHROME_BIN=$(which google-chrome) npx ng test --watch=false --browsers=ChromeHeadless
```

## API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/health` | Estado del servicio |
| GET | `/api/profile` | Perfil completo (datos de todas las secciones) |
| GET | `/api/skills?category=Low%20Code` | Conocimientos, opcionalmente filtrados |
| GET | `/api/experience` | Experiencia laboral |
| GET | `/api/education` | Formación académica |
| GET | `/api/certifications` | Certificaciones |
| GET | `/api/projects` | Proyectos |
| POST | `/api/contact` | Recibe `{ name, email, message }` del formulario y lo guarda en un archivo JSONL |

Variables de entorno del backend (`backend/.env`, ver `.env.example`):

```
PORT=3000
CORS_ORIGIN=http://localhost:4200          # orígenes permitidos, separados por coma
CONTACT_STORE=data/contact-messages.jsonl  # dónde se guardan los mensajes de contacto
```

## Configuración en tiempo de ejecución del frontend

`frontend/public/config.js` se carga antes de la app y define `window.PORTFOLIO_CONFIG`:

```js
window.PORTFOLIO_CONFIG = {
  apiUrl: '',          // URL pública de la API Express, si la despliegas
  supabaseUrl: '',     // https://<proyecto>.supabase.co
  supabaseAnonKey: ''  // clave anon (pública) del proyecto
};
```

Si hay Supabase configurado, el formulario de contacto inserta directamente en la tabla
`contact_messages`; si no, envía el mensaje a `POST /api/contact` del backend Express. En el
despliegue de Cloudflare Pages este archivo lo genera el workflow a partir de los secrets, así que
no hace falta commitear ninguna clave.

## Formulario de contacto con Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En el SQL Editor ejecuta `supabase/schema.sql`: crea la tabla `contact_messages`, activa RLS y
   deja una única política que permite a `anon` **insertar** (nadie puede leer los mensajes con la
   clave pública; los lees desde el panel de Supabase).
3. Copia *Project URL* y *anon public key* (Settings → API) a `config.js` o a los secrets del repo.

## Despliegue en Cloudflare Pages

El workflow `.github/workflows/deploy.yml` construye el frontend, escribe `config.js` y publica en
Cloudflare Pages en cada push a `main`. Requiere en el repositorio:

| Tipo | Nombre | Valor |
|---|---|---|
| Secret | `CLOUDFLARE_API_TOKEN` | Token con permiso *Cloudflare Pages: Edit* |
| Secret | `CLOUDFLARE_ACCOUNT_ID` | ID de cuenta de Cloudflare |
| Secret | `SUPABASE_ANON_KEY` | Clave anon del proyecto Supabase |
| Variable | `SUPABASE_URL` | `https://<proyecto>.supabase.co` |
| Variable | `PORTFOLIO_API_URL` | Opcional, URL de la API Express |

El proyecto de Pages debe llamarse `portafolio` (o cambia `--project-name` en el workflow). El repo
puede seguir siendo privado: solo se publica el resultado del build.

Si además despliegas el backend Express (Render, Railway, Fly), añade el dominio del sitio a
`CORS_ORIGIN`.

## Cómo actualizar tu contenido

Todo el contenido (experiencia, certificaciones, skills, proyectos, enlaces) vive en un solo sitio:

- `backend/src/data/profile.ts` — fuente de datos que sirve la API.
- `frontend/src/app/data/fallback-profile.ts` — copia usada cuando la API no responde; mantener
  sincronizada con la anterior.

Para añadir una certificación basta con agregar un objeto a `certifications` con `name`, `issuer`,
`issued` y, si quieres, `credentialId`, `url` (enlace verificable) y `badge` (URL de la imagen).

### Alternativa: GitHub Pages

```bash
cd frontend
ng build --base-href "/<nombre-del-repo>/"
npx angular-cli-ghpages --dir=dist/frontend/browser
```
