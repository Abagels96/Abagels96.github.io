# Abigail Bales — portfolio site

Personal portfolio built with **React** and **Vite**, deployed to **GitHub Pages** from this repository (`username.github.io`).

## Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [ESLint](https://eslint.org/) (flat config)

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm install`  | Install dependencies                             |
| `npm run dev`  | Start dev server (frees ports 5173–5176 first)   |
| `npm run build`| Production build to `dist/`                      |
| `npm run preview` | Serve `dist/` locally                         |
| `npm run lint` | Run ESLint                                       |

The dev script uses [kill-port](https://www.npmjs.com/package/kill-port) so Vite can bind to **127.0.0.1:5173** without silent port drift when old Node processes are still running.

## Editing content

Most copy and lists live in **`src/content.js`**:

- `meta` — name, title, location, tagline, LinkedIn URL
- `stackAreas` — unified stack cards (languages + frameworks per area)
- `portfolioItems` — portfolio entries (title, description, links)
- `workflowNote` — short “how I work” aside

Components under **`src/components/`** handle layout; adjust **`src/App.css`** and **`src/index.css`** for styling.

## Deploying to GitHub Pages

This repo’s **root `index.html` is for Vite dev only** — it loads `/src/main.jsx`, which does not exist on the static host. The **built site** is whatever **`npm run build`** writes to **`dist/`** (bundled JS/CSS). If GitHub Pages is pointed at the **source branch root** instead of a production build, the site will load but show a **blank page**.

### Recommended: GitHub Actions (included)

The workflow **`.github/workflows/deploy-pages.yml`** runs on every push to **`main`**: `npm ci` → `npm run build` → uploads **`dist/`** to Pages.

1. Push this workflow to **`main`**.
2. In the repo on GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions** (not “Deploy from a branch” with `/ (root)` on `main`, unless that branch only contains a built `dist/` — it does not here).
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** run succeeds. The site URL will be **`https://<username>.github.io/`** for a **`username.github.io`** repository.

`dist/` is listed in **`.gitignore`**, so the build output is **not** committed; the Action must produce it on each deploy.

### Local check before pushing

```bash
npm run build
npm run preview
```

Open the printed URL and confirm the portfolio loads.

### `base` URL

For a user site at **`https://Abagels96.github.io/`**, Vite’s default **`base: '/'`** is correct. Only set **`base: '/repo-name/'`** if the site is published under a project URL (not the case for `username.github.io`).

### `.nojekyll`

**`public/.nojekyll`** is copied into **`dist/`** so GitHub Pages does not run **Jekyll** on the static files (which can break or hide assets).

## License

Private project; all rights reserved unless stated otherwise.
