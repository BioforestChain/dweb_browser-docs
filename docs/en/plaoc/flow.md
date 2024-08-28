---
outline: deep
---

# Dweb App

DwebBrowser offers a development standard called DwebApp, which is unified for application development but doesn't require direct interaction with the standard by everyone.

To facilitate this process, we provide plaoc as an auxiliary tool to help frontend developers package their WebApps into DwebApps. In the future, we'll offer more tools to assist other developers in migrating their applications to the Dweb platform.

Plaoc adheres to web standards and provides a suite of APIs/WebComponents that meet common needs for app development, including intercommunication between applications.

Since DwebBrowser already supports mainstream platforms like Android, iOS, MacOS, Windows, and Linux, your Web application can benefit from plaoc for multi-platform release without additional effort.

## Developing Dweb Apps

Firstly, create a `manifest.json` file in your application's root directory. This file is akin to the `manifest.json` used with PWA, where you declare app parameters and perform some display during user installation.

The file structure is as follows:

```bash
  dweb-app
  ├── ......other
  └── manifest.json
```

Here is an example configuration for `manifest.json`. You can directly copy and paste this content into the root directory of your project for more details on field information:[View Field Details](./manifest.md);

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "name": "game",
  "short_name": "vue3-game",
  "description": "This is an instance application that includes the full suite of dweb_plugins components.",
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

Your app is now officially declared as a Dweb app.

## Getting Started

### Installing the @plaoc/cli Tool

Alternatively, you can run without polluting your global environment using npx:

```bash
npx plaoc bundle ./usr/www
```

@plaoc/cli is a development tool for plaoc, enabling application runtime, bundling, and distribution. Use `--help` or [the documentation](./cli.md) to view specific command prompts.

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

### Starting Your Project

In this example, we use Vite to start your project:

```bash
npx vite --host
```

Terminal output:

```bash
VITE v4.4.9 ready in 88 ms
  ➜ Local:   http://localhost:5173/
  ➜ Network: http://192.168.0.100:5173/
```

### Building Application Data Links

**Use the `plaoc` command installed above to build:**

```bash
# Choose an address that your device can access
  plaoc serve http://192.168.0.100:5173/
  # or
  npx plaoc serve http://192.168.0.100:5173/
```

**Terminal Output**

```bash
Using metadata file: /../manifest.json
metadata: dweb://install?url=http://127.0.0.1:8096/metadata.json
metadata: dweb://install?url=http://192.168.0.100:8096/metadata.json
```

> You can explore further functionalities by running `plaoc serve --help`.

### Starting Development

First, download the [DwebBrowser Desktop version](https://github.com/BioforestChain/dweb_browser/releases) according to your operating system.

Next, simply open `DwebBrowser` and paste the following `deeplink` into the search bar to install the app:

```bash
dweb://install?url=http://192.168.0.100:8096/metadata.json
```

Once installed, if you need to view the debugging interface, right-click on the app and open the debugging panel.

### Bundling dweb-app

After development is complete, still use `@plaoc/cli` to bundle the app. The command looks like this:

```bash
plaoc bundle ./dist
```

> Note: `./dist` is the source code directory for bundling output.

### Publishing

Upload your app to a public dweb app marketplace or directly to your app's official website. For information on how apps are provided via download or through the marketplace, visit: [App Marketplace](./app-store.md).

If you have already installed the Dweb Browser app on your mobile device, upload both files for the packaged app into the same folder and generate a QR code with the `metadata.json` URL.

```bash
dweb://install?url=http://example.com/app1/metadata.json
```

Use your phone's deep link feature to scan the generated QR code. Upon scanning, you will be directed to an app download page:

- Huawei -> Smart Vision
- Xiaomi -> Xiao Ai Vision
- OPPO -> Scan with System Browser
- Vivo -> Jovi Scanning

Please adapt these instructions to fit your specific device and operating system requirements for optimal results.
