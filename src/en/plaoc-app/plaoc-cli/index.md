---
title: "@plaoc/cli"  
category:
  - Service
tag:
  - Service
---

plaoc front and back end packaging tool.

## Installation

- First install the plaoc CLI tool globally:

```bash
npm install -g @plaoc/cli
```

## Usage Syntax

```bash
plaoc cmdName distPath --optionParamter paramaterValue
```

Command explanation:

- cmdName

  The command name. 
  Valid values:

  - [`serve`](./serve.md)  

    Starts local server for development tool to download Plaoc Apps.

    Generates the following info in terminal:

    ```bash
    metadata:       http://127.0.0.1:8096/metadata.json
    metadata:       http://172.30.93.43:8096/metadata.json
    ```

  - [`bundle`](./bundle.md) Package Plaoc App and generate a release file.

- distPath

  Path to packaged Plaoc App project directory.

- --optionParamter

  [Option parameters](./option-paramter.md) 

- paramaterValue

  Value of option parameter.

## Examples 

For a project directory structure like:

- root
  - dist // Packaged project directory
  - manifest.json // Manifest file

### Use local server:
```bash
plaoc serve ./root/dist --dir ./root
```

### Generate release file package:
```bash 
plaoc bundle ./root/dist --dir ./root
```

## Related Links

[plaoc app](../index.md)

[release](../release/index.md)

[Developer tool](../developer-tool/index.md)