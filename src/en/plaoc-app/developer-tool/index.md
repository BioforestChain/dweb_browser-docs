---
title: Developer Tool
category:
  - Service
tag:
  - Service  
---

Local development and debugging app for Plaoc Apps.

### 1. First generate `metadata.json`

In terminal use [plaoc serve url](../ploac-cli/serve-url.md) command to generate metadata.json:

```bash
plaoc serve http://172.30.90.207:5173/
```

Terminal will output:

```bash
metadata: http://127.0.0.1:8096/metadata.json  
metadata: http://172.30.93.43:8096/metadata.json
```

### 2. Run developer tool

Directly run and specify --url to metadata.json to start development. 

For macbook m1 example, run in command line:

```bash
open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json
```

Command explanation:

- `open /Users/xxxpath/dweb-browser-devtools.app`

  Starts the developer tool

- `--start install --url http://127.0.0.1:8096/metadata.json`
  
  Passes arguments to developer tool
  
- `http://127.0.0.1:8096/metadata.json`

  Address output by [plaoc serve url](../plaoc-cli/serve-url.md)

## Related Links

[plaoc app](../index.md)

[@plaoc/cli](../plaoc-cli/index.md) 

[plaoc serve url](../ploac-cli/serve-url.md) command

[plaoc serve](../plaoc-cli/serve.md) command