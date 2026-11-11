# Portafolio — Efrain Rivera Cadena

Sitio estático (plantilla **Folio** + Bootstrap 5 por CDN). Sin build, sin `package.json`.

- **URL:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html` (home), `proyectos.html` (listado técnico), `assets/css/site.css`, `assets/js/site.js`
- **Borradores md:** `_archivo/` (en el repo; **no** se publican en Pages — ver `_config.yml`. No añadir `.nojekyll` o sí quedarían visibles.)
- **Backup one-page:** rama `backup/one-page` (commit previo al split demos)
- **Backlog / estado:** `2-Personal/cerebro/20-areas/Carrera/desarrollo/portafolio-mejoras.md`

## Stack y versiones

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | `index.html` + `proyectos.html` · `assets/css` · `assets/js` | Home + proyectos técnicos; tema claro/oscuro |
| Bootstrap | **5.3.3** (jsDelivr CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (jsDelivr CDN) | Iconos UI |
| Devicon | **2.16.0** (jsDelivr CDN) | Logos de stack en chips (home) |
| Fuentes | DM Sans · IBM Plex Mono (Google Fonts) | UI / mono |
| Iconos IA | `assets/ia/` | Cursor, Copilot, Claude, ChatGPT, Kiro |
| PWA ligera | `site.webmanifest` + `assets/brand/` | Identidad / compartir |

Requisitos: navegador moderno. No hace falta Node, npm ni bundler.

## Páginas

| Archivo | Rol |
|---------|-----|
| `index.html` | Home reclutador: hero, trayectoria, 3 proyectos, Formación (certs/cursos), Stack, contacto |
| `proyectos.html` | Catálogo técnico (noindex): índice destacados + listado por grupo (Python → Node → .NET → Java → Mongo) |

### Home (`index.html`) — orden de secciones

1. Hero (pitch backend amplio · Java/C#/Python/Node/SQL · “Busco rol…”)
2. Trayectoria (alineada al **CV backend**: Backend Senior / Jefe / Backend · fechas con mes)
3. Proyectos (3 cards → anclas en `proyectos.html`; línea Serie Java · Ver todos)
4. Formación (licenciatura · certificaciones · cursos)
5. Stack (+ franja IA)
6. Contacto · footer (Proyectos técnicos · CV · Contacto)

CV descargable: `assets/cv/Efrain_Rivera_CV.pdf` (= CV desarrollador backend).

### Proyectos técnicos (`proyectos.html`)

Formato por repo: **número + nombre** → lead → descripción → stack (chips) → link GitHub (+ Actions si hay CI).

| Badge CI en sitio | Repo |
|-------------------|------|
| Sí | `eventos-api`, `indicadores-api` |
| No (aún) | resto |

Destacados en índice: etl-reportes, reportes-api, eventos-api, indicadores-api.

## Estructura

```text
portafolio/
├── index.html
├── proyectos.html
├── site.webmanifest
├── README.md
├── .gitignore
├── assets/
│   ├── css/site.css
│   ├── js/site.js          # tema; lightbox legacy; nav activa en home
│   ├── brand/
│   ├── demos/              # capturas (histórico; no usadas en páginas actuales)
│   ├── diagrams/
│   ├── ia/
│   ├── cv/
│   └── certificados/       # PDFs Formación (ver en pestaña, sin download forzado)
├── _config.yml
└── _archivo/
```

## Certificaciones / cursos (Formación)

1. Copia el PDF a `assets/certificados/` (nombre corto, sin espacios).
2. En `index.html`, bloque `fo-cert` (nombre + emisor + botón PDF que **abre** el archivo).
3. Commit y push.

**Certificaciones (peso):** EOI Cloud Computing · UCM apps móviles.  
**Cursos (complemento):** Santander Cursor + Prompting responsable.  
No saturar con “desde cero” / fundamentos que el empleo ya cubre.

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

Pages tarda 1–2 minutos. Recarga con Ctrl+F5.

## Git ignore

Solo basura de SO/editor (`.DS_Store`, `Thumbs.db`, `.vscode/`, etc.). El contenido del sitio **sí** se versiona.

## Notas de diseño (vigentes)

- Sin capturas/demos en `proyectos.html` (texto + stack).
- Trayectoria del sitio = narrativa **dev** (como el CV); el puesto real en GS puede ser arquitecto.
- Push automático del repo cuando se edita el sitio (acuerdo de trabajo).
