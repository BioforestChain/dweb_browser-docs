---
title: Plaoc app
category:
  - Plaoc
tag:
  - Android
  - IOS
  - MacOS
  - Windows
  - Linux
---

We define applications running on the `dweb-browser` browser as `Plaoc App`. You can understand that `dweb_browser` is like WeChat and `plaoc app` is like the mini programs running inside it. 

Because `dweb-browser` currently supports mainstream platforms like Android, iOS, MacOS, Windows, Linux, your web application can rely on plaoc to directly implement multi-end publishing.

Plaoc is a product of web3. Applications will be relatively independent, so each plaoc application package can be published using its own application website.

Of course, your website can also be an application center, containing your application matrix, making application publishing more efficient.

## Plaoc app development process

First you need to create a `manifest.json` file in the root directory of your application. You can think of `manifest.json` as equivalent to `PWA`'s `manifest.json`. 

It mainly declares some application parameters and does some display when the user installs.

```bash
plaoc-app
├── ......other project files
└── mainifest.json
```

The following sample configuration file, copy the following content and paste it into `mainifest.json` in the root directory. [Click to view field details](../plaoc-plugin/interface/bfs-meta-data/index.md)

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "name": "game",
  "short_name": "vue3-game",
  "description": "This is an example application that contains instances of all dweb_plugins components.",
  "logo": "https://www.bfmeta.info/imgs/logo3.webp",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.0.0", 
  "change_log": "Added a new one-click bang bang bang feature!",
  "home": "https://dweb.waterbang.top",
  "categories": ["application"],
  "lang": "zh-Hans",
  "languages": []
}
```

Now your app has been declared as a Plaoc app.

## How to start development

### First install @plaoc/cli

> Or use npx to run without polluting the global environment
>
> Example: `npx plaoc bundle ./usr/www`

@plaoc/cli is the development tool for plaoc that helps applications run, package, and publish. Specific command prompts can be viewed using `--help` or [documentation](./plaoc-cli/index.md).

- Execute the installation command:

::: code-tabs#shell
@tab:active PNPM
```bash
  pnpm add -g @plaoc/cli
```

@tab YARN
```bash
  yarn global add @plaoc/cli
```

@tab NPM
```bash
  npm i -g @plaoc/cli
```

:::


### Start the project

This example uses vite to start the project:

```bash
npx vite --host 
```

The terminal outputs

```bash
VITE v4.4.9 ready in 88 ms
➜ Local: http://localhost:5173/
➜ Network: http://172.30.95.28:5173/
```

### Build app data link

Use the plaoc command installed above to build:

```bash
plaoc serve http://172.30.95.28:5173/ 
#or 
npx plaoc serve http://172.30.95.28:5173/
```

The terminal outputs

```bash 
metadata: http://127.0.0.1:8096/metadata.json
metadata: http://172.30.95.28:8096/metadata.json
```

> You can use `plaoc serve --help` to see more features.

### Start development

First you need to download the [dweb-browser](https://github.com/BioforestChain/dweb_browser/releases) according to your operating system. 

Next, run `dweb-browser` with the command to start developer mode.

::: code-tabs#shell
@tab:active Windows
  ```bash
  & "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://172.30.93.43:8096/metadata.json
  ```

@tab MacOS
  ```bash
  open /Applications/dweb-browser-devtools.app --args install --url http://127.0.0.1:8096/metadata.json
  ```
:::

Now you can see the development and debugging interface. You should also find that what you just downloaded is also the desktop version of dweb-browser.

### Package

After plaoc-app development is complete, @plaoc/cli is still used to package the app. The command is as follows:

```bash
plaoc bundle ./dist
```

> ./dist is the output source directory for packaging

### Publish

Use `scp` or other commands to publish to your server. 

The command line support for @plaoc/cli is still under development.

## Related links

[@plaoc/cli](./plaoc-cli/index.md) 

[Developer tools](./developer-tool/index.md)

[Release](./release/index.md)