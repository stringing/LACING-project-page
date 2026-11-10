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
- `static/papers/lacing.pdf`: the full 16-page manuscript linked by Paper.

The page uses Bulma 0.9.4 and Noto Sans via CDN, with local CSS and system-font
fallbacks. All project assets use relative paths for GitHub Pages project URLs.
Tables remain readable without JavaScript; figures link directly to their SVGs.

## Publication details

Author names and order match the supplied manuscript metadata.
Microsoft offices share one affiliation on the page, without location labels.
Email addresses are not displayed in the page HTML; the PDF retains the
manuscript's author information. Paper opens `static/papers/lacing.pdf` in a new
tab. This is the current full manuscript, uploaded at the project owner's request.
The arXiv and Code buttons remain disabled, labeled "coming soon" and "under
review", respectively. No model weights, checkpoints, or experimental artifacts
are included. The BibTeX continues to cite this project website.

## Deployment

Publish `main` from the repository root using GitHub Pages. `.nojekyll` keeps
this a plain static site.

The layout takes visual inspiration from
[CoHarden](https://github.com/yhtan777/CoHarden-project-page), with an original
HTML/CSS/JavaScript implementation and LACING's own content and figures.
