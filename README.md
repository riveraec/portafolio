# Portafolio — Efrain Rivera Cadena

Sitio estático (plantilla **Folio** + Bootstrap 5 por CDN). Sin build, sin `package.json`.

- **URL:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html` (home), `proyectos.html` (listado técnico), `assets/css/site.css`, `assets/js/site.js`
- **Borradores md:** `_archivo/` (en el repo; **no** se publican — el workflow solo copia HTML + `assets` + manifest)
- **Backup one-page:** rama `backup/one-page`
- **Backlog / estado:** `2-Personal/cerebro/20-areas/Carrera/desarrollo/portafolio-mejoras.md`

## Stack y versiones

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | `index.html` + `proyectos.html` · `assets/css` · `assets/js` | Home + proyectos; tema; modal PDF; contacto; FAB |
| Bootstrap | **5.3.3** (jsDelivr CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (jsDelivr CDN) | Iconos UI (nav, contacto, FAB) |
| Devicon | **2.16.0** (jsDelivr CDN) | Logos de stack (incl. SonarQube en Calidad) |
| Fuentes | DM Sans · IBM Plex Mono (Google Fonts) | UI / mono |
| Iconos IA | `assets/ia/` (SVG) | Cursor, Copilot, Claude, ChatGPT, Kiro |
| Iconos stack extra | `assets/brand/stack/` | JWT, Zod, H2, OpenFeign, WireMock, xUnit, Testcontainers |
| Formulario | **Web3Forms** (API) | Envío del FAB → Gmail (access key pública en HTML) |
| PWA ligera | `site.webmanifest` + `assets/brand/` | Identidad / compartir |

Requisitos: navegador moderno. No hace falta Node, npm ni bundler.

## Páginas

| Archivo | Rol |
|---------|-----|
| `index.html` | Home reclutador: hero, trayectoria, 3 proyectos, Formación, Stack, contacto |
| `proyectos.html` | Catálogo técnico (noindex): índice + listado por grupo + mismo FAB |

### Home (`index.html`) — orden

1. Hero + bridge de stack (Devicon coloreado)
2. Trayectoria
3. Proyectos (3 cards → anclas en `proyectos.html`)
4. Formación (licenciatura · certificaciones · cursos; vista previa PDF en modal)
5. Stack (+ franja IA; Calidad incluye SonarQube)
6. Contacto (correo / teléfono / Telegram visibles y copiables · WhatsApp · LinkedIn / GitHub)

CV: `assets/cv/Efrain_Rivera_CV.pdf` (download + toast).

### Contacto flotante (FAB)

Botón fijo abajo a la derecha en **ambas** páginas. Abre un panel minimizable con formulario (nombre, correo, mensaje).

| Pieza | Detalle |
|-------|---------|
| Envío | `POST` AJAX a `https://api.web3forms.com/submit` |
| Destino | Gmail configurado en Web3Forms |
| Access key | Hidden input en HTML (clave **pública** del servicio; no es secreto de servidor) |
| Anti-spam | Honeypot (`botcheck`); sin hCaptcha visible |
| Validación | Nombre (letras/acentos, 2–80), email, mensaje (20–2000); errores por campo |
| a11y | `aria-expanded`, foco a Nombre al abrir, Escape cierra, `:focus-visible` |

La sección `#contacto` se mantiene como detalle completo; el FAB es acceso rápido.

### Proyectos técnicos (`proyectos.html`)

Formato: **número + nombre** → lead → descripción → stack (chips con iconos) → GitHub (+ badge CI si aplica).

| Badge CI | Repo |
|----------|------|
| Sí | `eventos-api`, `indicadores-api` |
| No (aún) | resto |

## Estructura

```text
portafolio/
├── index.html
├── proyectos.html
├── site.webmanifest
├── README.md
├── .htmlvalidate.json
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── css/site.css
│   ├── js/site.js          # tema, modal PDF, toast CV, copiar contacto, FAB+Web3Forms, nav activa
│   ├── brand/
│   │   └── stack/          # SVG de herramientas sin Devicon
│   ├── ia/
│   ├── cv/
│   └── certificados/
└── _archivo/               # borradores (no se publican)
```

## Certificaciones / cursos (Formación)

1. Copia el PDF a `assets/certificados/` (nombre corto, sin espacios).
2. En `index.html`, bloque `fo-cert` con `data-pdf-preview` + `data-pdf-title`.
3. Commit y push.

## Local

Servidor estático (recomendado; el FAB necesita origen HTTP para probar el envío):

```powershell
cd <ruta-del-repo>
python -m http.server 5500
```

Abrir http://localhost:5500

Validar HTML (opcional):

```powershell
npx html-validate index.html proyectos.html
```

## Publicar (GitHub Pages)

```powershell
git add -A
git commit -m "mensaje"
git push origin main
```

El workflow genera `_site` (HTML + assets + `.nojekyll`) y despliega. Recarga con Ctrl+F5.

### Web3Forms (formulario)

1. Cuenta en [web3forms.com](https://web3forms.com/) con el Gmail de destino.
2. Form → Website URL: `https://riveraec.github.io/portafolio/` (local: `localhost`).
3. Pegar la Access Key en `index.html` y `proyectos.html` (`input[name="access_key"]`).
4. Plan free: 250 envíos/mes. Regenerar la key en el dashboard si se filtra de más.
