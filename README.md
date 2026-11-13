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
| HTML / CSS / JS | `index.html` + `proyectos.html` · `assets/css` · `assets/js` | Home + proyectos; tema claro/oscuro; modal PDF |
| Bootstrap | **5.3.3** (jsDelivr CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (jsDelivr CDN) | Iconos UI |
| Devicon | **2.16.0** (jsDelivr CDN) | Logos de stack en chips (home) |
| Fuentes | DM Sans · IBM Plex Mono (Google Fonts) | UI / mono |
| Iconos IA | `assets/ia/` (SVG) | Cursor, Copilot, Claude, ChatGPT, Kiro |
| PWA ligera | `site.webmanifest` + `assets/brand/` | Identidad / compartir |

Requisitos: navegador moderno. No hace falta Node, npm ni bundler.

## Páginas

| Archivo | Rol |
|---------|-----|
| `index.html` | Home reclutador: hero, trayectoria, 3 proyectos, Formación, Stack, contacto |
| `proyectos.html` | Catálogo técnico (noindex): índice + listado por grupo |

### Home (`index.html`) — orden

1. Hero + bridge de stack
2. Trayectoria
3. Proyectos (3 cards → anclas en `proyectos.html`)
4. Formación (licenciatura · certificaciones · cursos; vista previa PDF en modal)
5. Stack (+ franja IA)
6. Contacto · footer

CV: `assets/cv/Efrain_Rivera_CV.pdf` (download + toast).

### Proyectos técnicos (`proyectos.html`)

Formato: **número + nombre** → lead → descripción → stack → GitHub (+ badge CI si aplica).

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
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── css/site.css
│   ├── js/site.js          # tema, modal PDF, toast CV, nav activa
│   ├── brand/
│   ├── ia/                 # solo SVG usados en home
│   ├── cv/
│   └── certificados/
└── _archivo/               # borradores (no se publican)
```

## Certificaciones / cursos (Formación)

1. Copia el PDF a `assets/certificados/` (nombre corto, sin espacios).
2. En `index.html`, bloque `fo-cert` con `data-pdf-preview` + `data-pdf-title`.
3. Commit y push.

## Local

```powershell
cd <ruta-del-repo>
start index.html
```

## Publicar (GitHub Pages)

```powershell
git add -A
git commit -m "mensaje"
git push origin main
```

El workflow genera `_site` (HTML + assets + `.nojekyll`) y despliega. Recarga con Ctrl+F5.
