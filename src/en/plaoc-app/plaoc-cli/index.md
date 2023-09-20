---
title: "@plaoc/cli"
category: 
  - plaoc
tag: 
  - cli 
---

This is the plaoc command line tool, responsible for the development, packaging and publishing of plaoc apps.

This cli tool also has the functions of publishing tools and verifying apps. It can also use `plaoc run` to cooperate with the server for quick packaging and publishing of applications.

## Installation

- First you need to install the plaoc command line tool.

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

> You can also use npx plaoc to execute commands

Assuming the project directory is as follows:

```bash
plaoc-app
├── ......other project files  
├── mainifest.json
└── plaoc.json
```

## Development mode

Development mode mainly cooperates with `dweb_browser` desktop version for dynamic development. The command is as follows:

```bash
plaoc serve http://localhost:5173
```

The above command will print as follows:

```bash
metadata: http://127.0.0.1:8096/metadata.json
metadata: http://172.30.93.43:8096/metadata.json
```

This is a pure forwarding mode. Plaoc will proxy the `http://localhost:5173` development service you started.

### Specify startup port

Generally used when starting multiple apps. You can use `--port` to specify the port to open. The default port is 8096.

```bash 
plaoc serve http://localhost:5173 --port 8097
```

### Specify `manifest.json` directory

If you are not currently in the project root directory, you need to use `--dir` to specify the address of `manifest.json` to identify the app configuration information.

```bash
plaoc serve http://localhost:5173 --dir ./plaoc-app1
```

## Package project

Normal packaging command is as follows:

```bash
plaoc bundle ./dist
```

The `./dist` directory is the source code directory for your packaging. And you need to make sure that the folder where you run the plaoc command is at the same level as your `manifest.json` folder. 

If not in the same directory, you can refer to the `--dir` directory below for specification.

::: warning 
Note that plaoc bundle http://localhost:5173 cannot be used to package a dynamic service.
:::

### Specify `manifest.json` directory

If your `manifest.json` is not in the same folder as the packaging directory, you can use `--dir` to specify the `manifest.json` folder.

Assuming the project directory is as follows:

```bash
plaoc-main
├── ......other project files
├── plaoc-app1
   ├── ./dist //Project packaged source code files  
   ├── mainifest.json
├── plaoc-app2
   ├── ./dist //Project packaged source code files
   └── mainifest.json
```

If you have multiple projects under your directory, you can specify the directory to package them like below.

```bash
plaoc bundle ./plaoc-app1/dist --dir ./plaoc-app1
```

> ps: You can also use `plaoc bundle --help` to check.

### Specify output package output file location

Use `--out` to specify output directory name. The default is `bundle`.

```bash
plaoc bundle ./dist --out ./bundleDir
```

#### Specify output appId 

Use `--id` to specify the app id.

```bash 
plaoc bundle ./dist --id new.plaoc.org.dweb
```

Note that the specified id must end with `.dweb` and have the same domain name as the configured `home`.

### Specify output app version

Use `--version` to specify the app version.

```bash
plaoc bundle ./dist --version 0.2.3
```