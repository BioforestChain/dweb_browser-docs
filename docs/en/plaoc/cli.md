---
outline: deep
---

# @plaoc/cli

<Badges name="@plaoc/cli" />

This is the plaoc command line tool, responsible for the development, packaging, and release of plaoc apps.

This cli tool also has the functions of publishing tool and app verification, and can use `plaoc run` to cooperate with the server to quickly package and release the application.

## Install

- First you need to install the plaoc command line tool.

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


> You can also use npx plaoc to execute commands

Assume that the project directory looks like this:

```bash
  plaoc-app
  ├── ......Other project files
  ├── manifest.json
  └── plaoc.json
```

## Development Mode

The development mode mainly cooperates with the `dweb_browser` desktop version for dynamic development. The command is as follows:

```bash
plaoc serve http://localhost:5173
```

The above command will print the following:

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.93.43:8096/metadata.json
```

This is a pure forwarding mode, plaoc will proxy the `http://localhost:5173` development service you started.

### Specify startup port

Generally used to start multiple apps. You can use `--port` to specify the port to open. The default port is 8096.

```bash
plaoc serve http://localhost:5173 --port 8097
```

### Specify the `manifest.json` directory

Assuming that you are not currently in the project root directory, you need to use `--dir` to specify the address of `manifest.json` in order to identify the app's configuration information.

```bash
plaoc serve http://localhost:5173  --dir ./plaoc-app1
```

## Package project

The normal packaging command is as follows:

```bash
plaoc bundle ./dist
```

The `./dist` directory is your packaged source code directory. And you need to make sure that the folder where you are currently running the plaoc command is at the same level as your `manifest.json` folder.

If it is not in the same directory, you can refer to the `--dir` directory below to specify it.

::: warning
Note that plaoc bundle `http://localhost:5173` cannot be used to package a dynamic service.
:::

### Specify the `manifest.json` directory

If your `manifest.json` is not in the same folder as the packaged directory, you can use `--dir` to specify the `manifest.json` folder.

Assume that the project directory looks like this:

```bash
  plaoc-main
  ├── ......Other project files
  ├── plaoc-app1
    ├── ./dist  //Project packaged source code files
    ├── manifest.json
  ├── plaoc-app2
    ├── ./dist  //Project packaged source code files
    └── manifest.json
```

Assuming you have multiple projects in your directory, you can specify the directory for packaging as follows.

```bash
plaoc bundle ./plaoc-app1/dist --dir ./plaoc-app1
```

> ps: You can also use `plaoc bundle --help` to view.

### Specify the file location for output packaged output

You can use `--out` to specify the output directory name, which defaults to `bundle`.

```bash
plaoc bundle ./dist --out ./bundleDir
```

#### Specify the appId of the output

You can use `--id` to specify the id of the app.

```bash
plaoc bundle ./dist --id new.plaoc.org.dweb
```

Note that the specified id needs to end with `.dweb` and have the same domain name as the configured `home`.

### Specify the output app version

You can use `--version` to specify the app version.

```bash
plaoc bundle ./dist --version 0.2.3
```
