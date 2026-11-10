# Portafolio — Efrain Rivera Cadena

Sitio estático (plantilla **Folio** + Bootstrap 5 por CDN). Sin build, sin `package.json`.

- **URL:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html` (textos, links, CSS embebido) y `assets/`
- **Borradores md:** `_archivo/` (versionados; Jekyll/Pages no los publica como sitio)

## Stack y versiones

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | estático en `index.html` | Layout Folio, tema claro/oscuro |
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
├── index.html
├── site.webmanifest
├── README.md
├── .gitignore
├── assets/
│   ├── brand/      # favicon, marca, OG, iconos PWA
│   ├── demos/      # capturas de APIs
│   ├── diagrams/   # patrones (png/svg/mmd)
│   ├── ia/         # logos herramientas IA / docs
│   └── cv/         # PDF descargable
└── _archivo/       # md histórico (no es el sitio publicado)
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
