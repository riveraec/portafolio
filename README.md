# Portafolio — Efrain Rivera Cadena

Sitio estático (plantilla **Folio** + Bootstrap 5 por CDN). Sin build, sin `package.json`.

- **URL:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html` (home), `repos.html` (listado técnico), `assets/css/site.css`, `assets/js/site.js` · `demos.html` redirige a repos
- **Borradores md:** `_archivo/` (en el repo; **no** se publican en Pages — ver `_config.yml`. No añadir `.nojekyll` o sí quedarían visibles.)
- **Backup one-page:** rama `backup/one-page` (commit previo al split demos)

## Stack y versiones

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | `index.html` + `repos.html` · `assets/css` · `assets/js` | Home + listado de repos; tema claro/oscuro |
| Bootstrap | **5.3.3** (jsDelivr CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (jsDelivr CDN) | Iconos UI |
| Devicon | **2.16.0** (jsDelivr CDN) | Logos de stack en chips |
| Fuentes | DM Sans · IBM Plex Mono (Google Fonts) | UI / mono |
| Iconos IA | `assets/ia/` | Cursor, Copilot, Claude, ChatGPT, Kiro, Obsidian, draw.io |
| PWA ligera | `site.webmanifest` + `assets/brand/` | Identidad / compartir |

Requisitos: navegador moderno. No hace falta Node, npm ni bundler.

## Estructura

```text
portafolio/
├── index.html          # home (reclutador): pitch, trayectoria, proyectos, stack…
├── repos.html          # listado técnico de repos (desde Proyectos; noindex)
├── demos.html          # redirect → repos.html
├── site.webmanifest
├── README.md
├── .gitignore
├── assets/
│   ├── css/site.css    # estilos compartidos
│   ├── js/site.js      # tema, lightbox, nav activa
│   ├── brand/          # favicon, marca, OG, iconos PWA
│   ├── demos/          # capturas de APIs
│   ├── diagrams/       # patrones (png/svg/mmd)
│   ├── ia/             # logos herramientas IA / docs
│   └── cv/             # PDF descargable
├── _config.yml         # exclude de Pages (Jekyll)
└── _archivo/           # md histórico — no publicado
```

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
