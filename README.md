# Portafolio — Efrain Rivera Cadena

Sitio estático (Folio + Bootstrap 5 por CDN). Sin build ni `package.json`.

- **Live:** https://riveraec.github.io/portafolio/
- **Repo:** https://github.com/riveraec/portafolio
- **Editar:** `index.html`, `proyectos.html`, `assets/css/site.css`, `assets/js/site.js`
- **Borradores:** `_archivo/` (no se publican en Pages)
- **Backup one-page:** rama `backup/one-page`

## Stack

| Pieza | Versión / origen | Uso |
|-------|------------------|-----|
| HTML / CSS / JS | páginas + `assets/` | Tema, modal PDF, contacto, FAB |
| Bootstrap | **5.3.3** (CDN) | Grid, utilidades |
| Bootstrap Icons | **1.11.3** (CDN) | UI |
| Devicon | **2.16.0** (CDN) | Iconos de stack |
| Fuentes | DM Sans · IBM Plex Mono | UI / mono |
| Iconos extra | `assets/brand/stack/`, `assets/ia/` | Marcas no cubiertas por Devicon |
| Formulario | [Web3Forms](https://web3forms.com/) | FAB → correo |
| PWA ligera | `site.webmanifest` + `assets/brand/` | Identidad |

## Páginas

| Archivo | Rol |
|---------|-----|
| `index.html` | Home: hero → trayectoria → proyectos → Formación → Stack → contacto |
| `proyectos.html` | Catálogo técnico (noindex) + mismo FAB |

CV: `assets/cv/Efrain_Rivera_CV.pdf` (download + toast).

### Contacto flotante (FAB)

Panel abajo-derecha en ambas páginas (nombre, correo, mensaje). `#contacto` sigue siendo el detalle completo.

- Envío AJAX a Web3Forms (`access_key` en el HTML).
- Anti-spam: honeypot (`botcheck`). Validación por campo (nombre 2–80, email, mensaje 20–2000).
- Alta del form: [web3forms.com](https://web3forms.com/) · [docs](https://docs.web3forms.com/). Free: 250 envíos/mes.

### Proyectos técnicos

Formato: número + nombre → lead → desc → stack → GitHub (+ badge CI cuando aplica).

## Estructura

```text
portafolio/
├── index.html · proyectos.html · site.webmanifest · README.md
├── .htmlvalidate.json · .github/workflows/deploy-pages.yml
├── assets/   # css, js, brand/stack, ia, cv, certificados
└── _archivo/ # borradores (no publicados)
```

## Certificaciones

1. PDF en `assets/certificados/`
2. Bloque `fo-cert` en `index.html` (`data-pdf-preview` + `data-pdf-title`)
3. Commit y push

## Local

```bash
python -m http.server 5500
```

http://localhost:5500 · validar: `npx html-validate index.html proyectos.html`

## Publicar

```bash
git add -A
git commit -m "mensaje"
git push origin main
```

Pages despliega `_site` (HTML + assets + `.nojekyll`). Ctrl+F5 tras el deploy.
