---
title: plaoc bundle
category:
  - Service
tag:
  - Service
---

Package a Plaoc App and generate a release file.

```bash  
plaoc bundle xxx
```

## Example

For a project directory structure like:

- root
  - dist // Packaged project directory 
  - manifest.json // Manifest file

Run:

```bash
plaoc bundle ./root/dist --dir ./root 
```

This will generate the following files under root:

- root
  - bundle
    - appId.version.zip // Compressed app package
    - metadata.json // Metadata file

The bundle files can then be deployed to [publish](../release/index.md) the application.


## Related Links

[@plaoc/cli](./index.md)

[plaoc serve url](./serve-url.md)

[plaoc serve](./serve.md) 

[release](../release/index.md)