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

### GitHub repository setup (required)

That **View Source** line (`<script … src="/src/main.jsx">`) means GitHub Pages is still publishing the **`main`** branch **root** — the **dev** `index.html`, not the Vite **build**. The live site must come from the workflow that uploads **`dist/`**.

| Step | Where | What to set |
|------|--------|-------------|
| 1 | **Repository name** | **`Abagels96.github.io`** (username + `.github.io`) for **`https://abagels96.github.io/`**. |
| 2 | **Visibility** | Usually **Public** on a free account for user Pages. |
| 3 | **Actions** | **Settings → Actions → General** → allow **Actions** for this repo. |
| 4 | **Pages source (fixes `/src/main.jsx`)** | **Settings → Pages → Build and deployment** → **Source: GitHub Actions** (not “Deploy from a branch” with **`main` / (root)**). Pick the workflow **“Deploy static site to Pages”** if GitHub asks. **Save.** |
| 5 | **Run deploy** | Push to **`main`** or **Actions → Deploy static site to Pages → Run workflow**. First run may ask you to **approve** the **`github-pages`** environment — open the run and click **Review deployments** / **Approve** if needed. |
| 6 | **Wait** | 1–5 minutes, then hard-refresh (Ctrl+F5). |

**Verify:** **View Page Source** on the live site should show **`<script … src="/assets/index-….js">`**, not **`/src/main.jsx`**.

### How deployment works

The workflow **`.github/workflows/deploy-pages.yml`** runs on push to **`main`** or **`master`** (and **Run workflow**):

1. `npm ci` → `npm run build`
2. Publishes **`dist/`** with GitHub’s official Pages actions ([upload-pages-artifact](https://github.com/actions/upload-pages-artifact) + [deploy-pages](https://github.com/actions/deploy-pages)).

No `gh-pages` branch is required for this flow.

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
