# Vignesh E — Developer Portfolio

Responsive portfolio built with plain HTML, CSS, and JavaScript. No npm packages, API keys, database, or build step are required.

## Files

- `public/index.html`: page content and semantic markup
- `public/styles.css`: desktop/mobile styling
- `public/script.js`: project detail dialogs and copy-email action
- `vercel.json`: static deployment configuration

## Run locally on Windows

Open this folder in VS Code. In a terminal, run:

```sh
python -m http.server 8000 --directory public
```

Visit http://localhost:8000. If Python uses the Windows launcher, replace `python` with `py`. Stop the server with Ctrl+C.

You can also open `public/index.html` directly, though the copy-email action works best on localhost or HTTPS.
