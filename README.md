# kedge-scaffold-simple-webapp

The starter project for the [kedge](https://github.com/faroshq/kedge)
`simple-webapp` template: a single Vite hello-world app on one public URL.
New App Studio projects on that template begin from this source, and its
published image is the template's one-click demo.

The app reads `process.env.PORT`, binds `0.0.0.0`, and keeps both `dev`
(sandbox hot reload) and `start` (production image) scripts working. The full
platform contract lives in [AGENTS.md](AGENTS.md) — read it before changing
anything.

## Run locally

```sh
npm install
npm run dev        # dev server
npm run build && npm start   # what production runs
```

## Run on kedge

- **One click:** provision the `simple-webapp` template with its sample
  values — they point at this repository's published image.
- **App Studio:** new projects on the `simple-webapp` template start from
  this source (development mode, hot reload via `dev_sync`).
- **Production:** the image is built by Railpack from the repository root —
  no Dockerfile here, and none needed.

## Images & releases

CI ([build.yaml](.github/workflows/build.yaml)) smoke-tests the app
(build + serve + probe), then builds and pushes a Railpack image:

- `ghcr.io/faroshq/kedge-scaffold-simple-webapp/app`

tagged `latest` + `sha-<commit>` on `main`, and `<tag>` for git tags
(`v0.1.0`, …). The kedge template pins a **tag** — changing this scaffold
does nothing to the platform until a new tag is cut **and** the template's
`development.scaffold.ref` / sample image tag are bumped to match.

## License

Apache-2.0.
