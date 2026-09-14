# Portfolio personal — Santiago Andrés D.

Sitio personal con experiencia, servicios, conocimientos (Power Platform, low code y high code) y
certificaciones visibles. Monorepo con frontend en Angular y backend en Node.js/Express.

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
| GET | `/api/certifications` | Certificaciones |
| GET | `/api/projects` | Proyectos |
| POST | `/api/contact` | Recibe `{ name, email, message }` del formulario |

Variables de entorno del backend (`backend/.env`, ver `.env.example`):

```
PORT=3000
CORS_ORIGIN=http://localhost:4200
```

## Cómo actualizar tu contenido

Todo el contenido (experiencia, certificaciones, skills, proyectos, enlaces) vive en un solo sitio:

- `backend/src/data/profile.ts` — fuente de datos que sirve la API.
- `frontend/src/app/data/fallback-profile.ts` — copia usada cuando la API no responde; mantener
  sincronizada con la anterior.

Para añadir una certificación basta con agregar un objeto a `certifications` con `name`, `issuer`,
`issued` y, si quieres, `credentialId`, `url` (enlace verificable) y `badge` (URL de la imagen).

## Despliegue en GitHub Pages (frontend)

```bash
cd frontend
ng build --base-href "/<nombre-del-repo>/"
npx angular-cli-ghpages --dir=dist/frontend/browser
```
