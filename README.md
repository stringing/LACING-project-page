# LACING

Project page for **Joint Prompt and KV-Cache Compression for Multi-Turn LLM Agents**.

**Website:** https://stringing.github.io/LACING-project-page/

## Local preview

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No build step or package installation is required.

## Editing

- `index.html`: text, manuscript result tables, figure captions, and citation.
- `static/css/index.css`: responsive layout and LACING's orange theme.
- `static/js/index.js`: result filters, figure viewer, and citation copying.
- `static/images/`: the seven manuscript figures, a social preview, and favicon.

The page uses Bulma 0.9.4 and Noto Sans via CDN, with local CSS and system-font
fallbacks. All project assets use relative paths for GitHub Pages project URLs.
Tables remain readable without JavaScript; figures link directly to their SVGs.

## Publication details

Author information and public paper/arXiv/code links have not been supplied.
Paper, arXiv, and Code buttons remain disabled until those resources are public.
No manuscript PDF, model weights, checkpoints, or experimental artifacts are
included. The BibTeX currently cites this project website rather than an
unreleased paper.

## Deployment

Publish `main` from the repository root using GitHub Pages. `.nojekyll` keeps
this a plain static site.

The layout takes visual inspiration from
[CoHarden](https://github.com/yhtan777/CoHarden-project-page), with an original
HTML/CSS/JavaScript implementation and LACING's own content and figures.
