---
outline: deep
---

# DwebApp

DwebBrowser provides an application development standard, collectively referred to as DwebApp. However, not everyone needs to directly engage with this standard to develop their applications.

Therefore, we offer the plaoc tool to assist front-end developers in packaging their WebApps into DwebApps.
In the future, we will provide more tools to help developers from other fields migrate their applications to the Dweb platform.

Plaoc adheres to web standards, offering a series of APIs/WebComponents to meet the common requirements of application development,
including inter-application communication.

With DwebBrowser already supporting mainstream platforms such as Android, iOS, macOS, Windows, and Linux,
it means your web application can rely on plaoc to achieve multi-platform release directly.

## DwebApp Development Process

First, you need to create a `manifest.json` file in the root directory of your application. You can consider `manifest.json` equivalent to the `manifest.json` of PWA.
It mainly declares some application parameters and displays them during user installation.

The file structure is as follows:

```bash
  dweb-app
  ├── ......other project files
  └── manifest.json
```

Below is an example configuration file. Copy and paste the following content into the `manifest.json` in the root directory. [Click to view field details](./manifest.md);

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "name": "game",
  "short_name": "vue3-game",
  "description": "This is an example application, containing examples of all components of dweb_plugins.",
  "logo": "https://www.bfmeta.info/imgs/logo3.webp",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.0.0",
  "change_log": "changelog",
  "home": "https://dweb.waterbang.top",
  "categories": ["application"],
  "lang": "zh-Hans",
  "languages": []
}
```

Now your app has been declared as a Dweb app.

## How to Start Development

### First, Install @plaoc/cli

> Or, if you prefer not to pollute the global environment, you can use npx to run
>
> Example project packaging: `npx plaoc bundle ./dist`

@plaoc/cli is the development tool for plaoc, helping with application running, packaging, and publishing.
For specific command prompts, use `--help` or refer to the [documentation](../plaoc/cli/index.md).

- Execute the installation command:

::: code-group

```bash [PNPM]
  pnpm add -g @plaoc/cli
```

```bash [YARN]
  yarn global add @plaoc/cli
```

```bash [NPM]
  npm i -g @plaoc/cli
```

:::

### Start the Project

This example uses vite to start the project:

```bash
  npx vite --host
```

Terminal output

```bash
 VITE v4.4.9  ready in 88 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.0.100:5173/
```

### Build Application Data Link

Use the plaoc command installed above to build:

```bash
  # Choose an address accessible by your device
  plaoc serve http://192.168.0.100:5173/
  #or
  npx plaoc serve http://192.168.0.100:5173/
```

Terminal output

```bash
using metadata file: /../manifest.json
metadata: 	dweb://install?url=http://127.0.0.1:8096/metadata.json
metadata: 	dweb://install?url=http://192.168.0.100:8096/metadata.json
```

> Use `plaoc serve --help` to explore further functionalities.

### Start Development

First, you need to download the [DwebBrowser Desktop Version](https://github.com/BioforestChain/dweb_browser/releases) according to your operating system.

Next, simply open `DwebBrowser` and paste the following `deeplink` into the search box to install the app.

```bash
dweb://install?url=http://192.168.0.100:8096/metadata.json
```

After installation, if you need to view the debugging interface, right-click the app and click to open the debugging interface.

### Package dweb-app

After development, you can still use @plaoc/cli to package the app with the following command:

```bash
plaoc bundle ./dist
```

> ./dist is the source code directory for the packaged output

### Publish

Upload to the public plaoc app store or to your app's official website. For information on how to provide downloads on the app's official website or the app store, visit: [App Store](./app-store.md).

If you have already installed the Dweb Browser app on your phone, you can first upload the two files after packaging to the same folder, then generate a QR code for the `metadata.json` address.

```bash
dweb://install?url=http://example.com/app1/metadata.json
```

Then use the `deep_link` feature supported by your phone to scan the QR code generated from the above link. After scanning, it will jump to the app download interface.

- Huawei -> Smart Vision
- Xiaomi -> Xiao Ai Vision
- OPPO -> Use the system browser to scan the code
- Vivo -> Jovi Scan
