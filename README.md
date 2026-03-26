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

**Local `npm run preview` works** because it serves **`dist/`** after a build. **GitHub** only shows the site if Pages is serving the **same built files** — not the repo root (which contains dev `index.html` → `/src/main.jsx` and **looks blank**).

**`dist/` is gitignored**, so the live site must come from **CI** (or a manual upload of `dist/`).

### How this repo deploys (recommended)

The workflow **`.github/workflows/deploy-pages.yml`** runs on push to **`main`** or **`master`** (and can be run manually under **Actions → Run workflow**):

1. `npm ci` → `npm run build`
2. Pushes the contents of **`dist/`** to a **`gh-pages`** branch (via [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)).

**Configure GitHub Pages once:**

1. Push the workflow to GitHub and wait for **Actions** → **Deploy site to gh-pages** to finish **green** (first run creates the `gh-pages` branch).
2. **Settings → Pages → Build and deployment**
3. Under **Source**, choose **Deploy from a branch** (not only “GitHub Actions” if the UI offers both).
4. **Branch:** `gh-pages`, **Folder:** `/ (root)` → **Save**.

Your site URL: **`https://<username>.github.io/`** for a **`username.github.io`** repository.

If you previously set **Source** to **GitHub Actions** with a different workflow, **switch** to **Deploy from branch** → `gh-pages` so it matches this repo’s workflow.

### If the site still doesn’t update

- **Actions tab:** open the latest run; fix any red **Build** or **Deploy** step (e.g. `npm ci` failing if `package-lock.json` isn’t committed).
- **Private repo:** on a free GitHub account, **GitHub Pages may require a public repository** for `username.github.io` — check [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) for your plan.
- **Cache:** hard-refresh or try an incognito window after a successful deploy.

### Local check before pushing

```bash
npm run build
npm run preview
```

### `base` URL

For **`https://<username>.github.io/`**, Vite’s default **`base: '/'`** is correct.

### `.nojekyll`

**`public/.nojekyll`** is copied into **`dist/`** so GitHub Pages does not run **Jekyll** on the static files.

## License

Private project; all rights reserved unless stated otherwise.
