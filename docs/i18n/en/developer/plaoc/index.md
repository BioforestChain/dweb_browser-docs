# Plaoc

Plaoc is a cross-platform web application development toolkit based on the dweb-browser platform, comparable to Cordova, Capacitor, and Tauri. It includes the packaging tool `@plaoc/cli` and the front-end plugin `@plaoc/plugins`.

## cli

[@plaoc/cli](https://www.npmjs.com/package/@plaoc/cli) is a command-line tool for developing and packaging applications for dweb_browser.

### Install the packaging tool.

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

Run `plaoc serve` when developing an app.

- The first method allows you to specify the output address of your front-end project, so that when your code is updated, the code inside the app will also be updated accordingly.

```bash
plaoc serve http://localhost:8000
```

- The second method is to directly specify the compiled source code directory, which is equivalent to directly installing the app, suitable for when your front-end project is disconnected.

```bash
plaoc serve ./dist
```

The above two commands will output the following lines:

```bash
using metadata file: /Volumes/developer/waterbang/deno/dweb_browser/npm/@plaoc__examples/html-demo/manifest.json
metadata: 	dweb://install?url=http://127.0.0.1:8097/metadata.json
metadata: 	dweb://install?url=http://172.30.95.93:8097/metadata.json
```

The first line `using metadata file` will specify your app configuration file directory, making it easy to know which app it is.

The second and third lines `metadata` are in the form of `deeplink`, which can be directly pasted into dweb-browser for installation on the desktop.
On mobile, you can convert it into a QR code and use scanning to install the application.

### Package into a deployable app package

Directly use `plaoc bundle` to specify the source code directory for packaging, the command is as follows:

```bash
plaoc bundle ./dir
```

It will package and output a compressed file `.zip` containing the app ID and date combination, and a `metadata.json`.

These two files can be deployed as links using any `(http/https)` service, placed in the same folder and pointing to the `metadata.json` file. Form the following link, and you can install it in dweb-browser.

```bash
dweb://install?url=http://<domain>/metadata.json
```

## plugins

[@plaoc/plugins](https://www.npmjs.com/package/@plaoc/plugins) enables web developers to directly call various platform system APIs.

For specific documentation, see: [plugins documentation](https://docs.dweb-browser.org/plugins/web-components.html)
