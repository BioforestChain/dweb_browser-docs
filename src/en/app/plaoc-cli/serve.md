---
title: plaoc serve
category:
  - Service  
tag:
  - Service
---

Start local server for [developer tool](../developer-tool/index.md) to download Plaoc Apps.

```bash
plaoc serve xxx  
```

## Example

For a project directory structure like:

- root
  - dist // Packaged project directory
  - manifest.json // Manifest file

```bash
plaoc serve ./root/dist --dir ./root
```

Terminal will output:

```bash
metadata: http://127.0.0.1:8096/metadata.json
metadata: http://172.30.93.43:8096/metadata.json
```

Works with [developer tool](../developer-tool/index.md) for local Plaoc App debugging.

- For macbook m1, run in command line:

```bash  
open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json
```

If Plaoc App project is still in development, can also pass a url to plaoc serve to work with developer tool.
See [pass url](./serve-url.md) for details.


## Related Links

[@plaoc/cli](./index.md)

[plaoc serve url](./serve-url.md)

[plaoc bundle](./bundle.md)