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

1. Run `npm run build`.
2. Publish the **`dist/`** folder as the site source for your Pages branch (often `main` with `/ (root)` or `gh-pages`, depending on your repo settings).

If the site were ever served from a subpath, you would set `base` in `vite.config.js`; for a standard **`username.github.io`** user site, the default base **`/`** is correct.

## License

Private project; all rights reserved unless stated otherwise.
