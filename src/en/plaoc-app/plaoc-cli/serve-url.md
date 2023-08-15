---
title: plaoc serve url
category:
  - Service
tag:
  - Service  
---

Starts local server for [developer tool](../developer-tool/index.md) to download Plaoc Apps.
The parameter provided to serve is a url string.

```bash
plaoc serve url
```

## Example

For a project directory structure like:

- root
  - package.json
  - src
  - manifest.json // Manifest file

Start project with vite:

```bash 
npx vite --host
```

Terminal will output:

```bash
VITE v4.3.9 ready in 277 ms

➜ Local:   http://localhost:5173/
➜ Network: http://192.168.2.6:5173/
➜ Network: http://198.18.0.1:5173/
➜ press h to show help
```

Open another terminal and run plaoc cli:

```base
plaoc serve http://localhost:5173/
```

Terminal will output: 

```bash
metadata: http://127.0.0.1:8096/metadata.json
metadata: http://192.168.2.6:8096/metadata.json 
metadata: http://198.18.0.1:8096/metadata.json
```

Works with [developer tool](../developer-tool/index.md) for local Plaoc App debugging.

- For macbook m1, run in command line:

```bash
open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json 
```

If Plaoc App project is already complete, can also pass directory parameter to plaoc serve to work with developer tool.
See [directory parameter](./serve.md) for details.


## Related Links

[@plaoc/cli](./index.md) 

[plaoc serve](./serve.md)

[plaoc bundle](./bundle.md)