# Portafolio — Efrain Rivera Cadena

Sitio estático (plantilla **Folio** + Bootstrap 5 por CDN). Sin build, sin `package.json`.

- **URL:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html` (textos, links, CSS embebido) y `assets/` (capturas, marca, iconos IA)
- **Borradores md:** `_archivo/` (versionados; Jekyll/Pages no los publica como sitio)

## Stack y versiones

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | estático en `index.html` | Layout Folio, tema claro/oscuro |
| Bootstrap | **5.3.3** (jsDelivr CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (jsDelivr CDN) | Iconos UI |
| Devicon | **2.16.0** (jsDelivr CDN) | Logos de stack en chips |
| Fuentes | DM Sans · IBM Plex Mono (Google Fonts) | UI / mono |
| Iconos IA / docs | SVG/PNG en `assets/ia/` | Cursor, Copilot, Claude, ChatGPT, Kiro, Obsidian, draw.io |
| PWA ligera | `site.webmanifest` + favicon/OG | Identidad / compartir |

Requisitos: navegador moderno. No hace falta Node, npm ni bundler.

## Estructura

```text
portafolio/
├── index.html          # página única
├── site.webmanifest
├── README.md
├── .gitignore
├── assets/             # marca, demos, OG, patrones, ia/
├── capturas-apis/      # capturas auxiliares
└── _archivo/           # md histórico (no es el sitio publicado)
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
