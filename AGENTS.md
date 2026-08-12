# Rules for coding agents working in this repository

This project runs on the faros `simple-webapp` template: ONE container
serving HTTP on ONE public URL. No backend tier, no database. These rules are
the platform contract — code that breaks them will not run, however correct
it looks.

## Layout

The whole repository is the app (workspace path `.`). It is a Vite project;
keep it one.

## Networking

1. **Read the port from `process.env.PORT` and bind `0.0.0.0`.** Never
   hardcode a port number, never bind `127.0.0.1`.
2. There is no backend here. If the app needs an API tier or a database, say
   so — that is the `application` template, not this one — instead of
   embedding a server this template cannot route to.
3. Never write absolute URLs to the app itself; use relative paths.

## Scripts (`package.json`)

4. Keep **both** `dev` and `start` working at all times:
   - `dev` (vite) is what the development sandbox runs, with hot reload.
   - `start` is what the production image runs — it serves the `vite build`
     output via `server.mjs`.
5. Do not add a Dockerfile — the production image is built by Railpack from
   the repository root. Do not create Kubernetes manifests, Services, or
   routes — the platform provisions all of that.

## Development sandbox

6. The sandbox runs **Node.js only** — no Go, Python, Ruby, Java, or .NET.
   Adding source in another language will silently never run.
7. The app is stateless — no persistent disk. Anything written to the
   filesystem at runtime disappears on restart.
