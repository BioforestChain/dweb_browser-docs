---
title: DwebBrowser bundle
category:
  - Service 
tag:
  - Service 
---

plaoc frontend and backend packaging tool.

## Installation

```bash
deno install -A https://deno.land/x/plaoc/cli/plaoc.ts
```

## Bundle app (bundle/build)

```bash
plaoc bundle ./dir
```
The command will create the following folder structure and output a compressed file `.zip` and a `metadata.json`. For more details, please refer to the documentation below.

- bundle
  - appId.version.zip
  - metadata.json

### Options

- `--out`: Specify the output directory name for the bundle. Default is `bundle`.
- `--version`: Specify the version of the app, which can override the configuration in `manifest.json`.
- `--id`: Specify the ID of the app, which can override the configuration in `manifest.json`.
- `--dir`: Specify the development directory, i.e., the root directory where you create `manifest.json`.

### Example

```bash
plaoc bundle ./plaoc/demo/dist --dir ./plaoc/demo --version 0.0.2
```

## Developer Mode (serve/preview)

This mode requires the use of developer tools and serves as a preview mode for the app.

```bash
plaoc serve ./dir
```

### Options

- `--dir`: Specify the development directory, i.e., the root directory where you create `manifest.json`.
- `--port`: Specify the server port to start.
- `--mode`: Service handling mode, can be `www`, `live`, or `prod`.
  - `--mode www`: Start the folder as read-only files in `usr/www`.
  - `--mode live`: Start the local folder using a dynamic server, with `index.html` in `usr/www` for redirection.
  - `--mode prod`: Directly serve the packaged files.

### Example

```bash
plaoc preview ./plaoc/demo/dist --dir ./plaoc/demo --mode www
```