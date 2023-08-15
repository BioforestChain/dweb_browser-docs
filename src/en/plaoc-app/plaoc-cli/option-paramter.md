---
title: optionPararmter
category: 
  - Service
tag:
  - Service  
---

Explanation of [@plaoc/cli](./index.md) option parameters.

## --dir

Specifies the development directory, i.e. the root directory where you created manifest.json.

For example with project directory structure:

- root
  - dist // Packaged project directory
  - manifest.json // Manifest file
  
```bash
plaoc serve ./root/dist --dir ./root
```

## --port

Specifies the port for the started service.

## --mode

Service handling mode.
Valid values:

- www

  Starts folder as read-only usr/www files.

- live

  Starts local folder with dynamic server, usr/www contains index.html for redirect. 

- prod

  Serves packed files directly.


## Related Links  

[@plaoc/cli](./index.md)

[plaoc serve url](./serve-url.md)

[plaoc serve](./serve.md)