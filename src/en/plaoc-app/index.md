# Plaoc App

## Overview

We refer to applications that run on the `dweb_browser` browser as `Plaoc Apps`. First we need to understand how to package our app into a `.zip` file.

## Plaoc App Creation Process:

Using Vue + Vite as an example:

- Globally install @vue/cli

  ```bash
  pnpm add -g @vue/cli
  ```

- Test the installation was successful

  ```bash
  vue --version
  ```

  Terminal output indicates successful install:

  ```bash
  @vue/cli 5.0.8
  ```

- Create Vue project

  ```bash
  vue create plaoc-app
  ```

- Create manifest.json file in plaoc-app root directory

  ```
  plaoc-app
  ├── ......other project files
  └── mainifest.json
  ```

- Install @plaoc/cli

  ```bash
  pnpm add @plaoc/cli
  ```

- Update package.json with command:

  ```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    // Add plaoc command
    "plaoc:serve": "plaoc serve "
  },
  ```

- Start project in dev mode

  ```bash
  pnpm serve
  ```

  Terminal output:

  ```bash
  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.2.6:8080/
  ```

- In another terminal, run plaoc:serve command

  ```bash
  pnpm plaoc:serve http://192.168.2.6:8080/
  ```

  Terminal output:

  ```bash
  metadata:       http://127.0.0.1:8096/metadata.json
  metadata:       http://192.168.2.6:8096/metadata.json
  metadata:       http://198.18.0.1:8096/metadata.json
  ```

- Run [developer tool app](./developer-tool/index.md) with command:

  ```bash
  #window
  & "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://172.30.93.43:8096/metadata.json
  #macos
  open /Applications/dweb-browser-devtools.app --args install --url http://127.0.0.1:8096/metadata.json
  ```

- Can now download and debug plaoc-app project in [developer tool app](./developer-tool/index.md)

- Package plaoc-app when development complete

- Publish

## Key Steps Explanation

- Create Vue project with [@vue/cli](https://cli.vuejs.org/guide/)

- Install @plaoc/cli dependency

- Add `manifest.json` file

  Follows [manifest standard](https://developer.mozilla.org/en-US/docs/Web/Manifest) from w3c. Omits some complex image configs like `icon`, so recommend using svg files directly.

  This config file displays when user installs the App. See sample config file [here](./manifest/index.md).

- Create local download service

  - [plaoc serve xxx](./plaoc-cli/serve.md) to debug packaged Plaoc App project

  - [plaoc serve url](./ploac-cli/serve-url.md) to debug Plaoc App project in dev

- Package Plaoc App

  Use packaging tool [plaoc cli](./plaoc-cli/bundle.md) to bundle app.

- Publish

  Deploy [bundle](./plaoc-cli/bundle.md) output to official site to [publish](./release/index.md).

## Related Links

[@plaoc/cli](../plaoc-cli/index.md)

[Developer tool](../developer-tool/index.md)

[Release](../release/index.md)
