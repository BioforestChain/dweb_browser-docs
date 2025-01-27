# @plaoc/cli

<Badges name="@plaoc/cli" />

This is the plaoc command line tool, responsible for the development, packaging, and publishing of Dwebapp. After packaging with this tool, the app can be installed in the `Dweb Browser` on any platform.

This cli tool also serves as a publishing tool and verifies the app's functionality, and can use `plaoc run` in conjunction with the server for quick packaging and publishing of applications.

## Installation

First, you need to install the plaoc command line tool.

::: code-group

```bash [NPM]
npm i -g @plaoc/cli
```

```bash [YARN]
yarn global add @plaoc/cli
```

```bash [PNPM]
pnpm add -g @plaoc/cli
```

:::

> You can also use npx plaoc to execute commands

Assume the project directory is as follows:

```bash
  dweb-app
  ├── dist // Compiled source code directory
  ├── ......Other project files
  ├── manifest.json
  └── plaoc.json
```

## Development Mode

### Monitoring Source Code Changes

```bash
plaoc live ./dist
```

This command will start an http service in the specified folder and generate the installation address for Dwebapp based on the generated http address.
Since it binds to the http service address, the app installation only provides forwarding and does not install the source code into `dweb_browser`.

In simple terms, when the source code files are updated, there is no need to reinstall the Dwebapp source code as it will also be updated.

### Options

- `--port` or `-p`: Used to specify the service port to start. Default is port 8096.
- `--config-dir` or `-c`: Dynamically specify the configuration file directory, i.e., specify the root directory where you created `manifest.json`. Default uses the current directory.
- `--web-server` or `-s`: Used to specify the Dwebapp backend address.
- `--static-port` or `-p2`: Specify the static service address.

### Example

Note, the source code folder must be specified.

```bash
plaoc live  ./dist
```

The output is similar to the following:

```bash
0: dweb://install?url=http://127.0.0.1:8096/metadata.json
1: dweb://install?url=http://172.30.95.105:8096/metadata.json
? Enter the corresponding number to generate a QR code. (0) › 1
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▀ ███▄█▀█▀▄ ██  █ ▄▄▄▄▄ █
█ █   █ █▄▀██▀▀▄▄█▄▄█▀██  █ █   █ █
█ █▄▄▄█ █ ▄ █ ██▀█  ▀ █▄▄ █ █▄▄▄█ █
█▄▄▄▄▄▄▄█ █ ▀▄▀▄█▄▀ █▄▀ █ █▄▄▄▄▄▄▄█
█  ▀ ▀█▄▄▀▀█  ▀▄▄ ███▄▄▄█▄█ ▄▄▀ ▄▀█
█ ▄███▄▄█▄▀▀   ▄█ █▀   ▄▀▀█ ▄ ██ ▄█
█▀█▀▄▄ ▄▀▀▀▄ █▀ ▄▄ █ █ ▄▄▄   ▀█▀█ █
█▀ ▄█▀█▄█ ▄▄ █▄▄██ ▀██  ▄▄▀▀█ ▀█▄██
█▄ ▀▄█ ▄▄██▀█  ▀█ ▄▀█▀ ▀ █▀▄█▄▀▀▀▄█
█▄▀▄█▀▀▄ ▄ ▀▄ █ █ ▀██▀▀ ▀▄▄██▄▄█  █
█▄ ▀▄ █▄▀▄█▀▀██▀▄ ▀██▄▄▄▄▀█▀██ ▀▄▀█
█▄ ▀█  ▄▄ █ ███▀█▀█    ▄█ █▀ █ ▄▀ █
█▄████▄▄█▀▀█▀ ██▄  █▀█▄▄█ ▄▄▄ █▀▄ █
█ ▄▄▄▄▄ █▄▄▀█ ▀▀▀█ █▀▄▀ █ █▄█ ▄█ ▀█
█ █   █ █▀▀█▄█▄▄█▀▄█▄▀ ▀█▄▄   ▄█▄██
█ █▄▄▄█ █▀ █▀█ █▀▄▀ ▀ ▀█▄ █▀  ▄██▄█
█▄▄▄▄▄▄▄█▄▄█▄▄█▄████▄█▄▄█▄██▄▄██▄██
```

The generated QR code can be used in the `Dweb Browser` mobile app with the scanning module for installation.

### Monitoring Service

`plaoc serve` provides two modes, you can create a static service from static source code. You can also specify a dynamically started http address to create an installation service.

#### Specify Dynamic Address

For example, using `vite --host` to create a dynamic service, the advantage of this method is that you don't need to reinstall the app every time you modify the code.
However, you need to ensure that devices can access each other, so if it's not local, try to use a private address.

```bash
plaoc serve http://172.30.95.105:5173/
```

The output is the same as above.

#### Specify Static Source Code

Specifying static source code installation is equivalent to having installed it into `Dweb Browser`, and the installation service does not need to be kept running, but if the code is modified, it needs to be reinstalled.

```bash
plaoc serve ./dist
```

The output is the same as above.

##### Options

- `--port` or `-p`: Used to specify the service port to start. Default is port 8096.
- `--config-dir` or `-c`: Dynamically specify the configuration file directory, i.e., specify the root directory where you created `manifest.json`. Default uses the current directory.
- `--web-server` or `-s`: Used to specify the Dwebapp backend address.

## Packaging Dwebapp

`plaoc bundle` is used when publishing Dwebapp, it will package into the following folder structure, and output a compressed file `.zip` and a `metadata.json`.

    |- bundle
      |- appId.version.zip
      |- metadata.json

Here, the source code folder is still specified.

```bash
plaoc bundle ./dist
```

`./dist` directory is your packaged source code directory. And you need to ensure that the folder where you run the plaoc command is at the same level as your `manifest.json` folder.

If not in the same directory, you can refer to the `-c` directory below for specification.

### Specify `manifest.json` Directory

If your `manifest.json` is not in the same folder as the packaged directory, you can use `-c` to specify to the `manifest.json` folder.

Assume the project directory is as follows:

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

If you have multiple projects under your directory, you can specify the directory to package as follows.

```bash
plaoc bundle ./plaoc-app1/dist -c ./plaoc-app1
```

> ps: You can also use `plaoc bundle --help` to view.

### Specify the Output Package File Location

You can use `--out` to specify the output directory name, default is `bundle`.

```bash
plaoc bundle ./dist --out ./bundleDir
```

#### Specify the Output appId

You can use `--id` to specify the app's id.

```bash
plaoc bundle ./dist --id new.plaoc.org.dweb
```

Note that the specified id needs to end with `.dweb`, and be the same domain as the configured `home`.

### Specify the Output App Version

You can use `--version` to specify the app's version.

```bash
plaoc bundle ./dist --version 0.2.3
```

### Options

- `-o` or `--out`: Specify the directory name after packaging, default name is `bundle`.
- `-v` or `--version`: Specify the app's version, can override the configuration in `manifest.json`.
- `--id`: Specify the app's id, can override the configuration in `manifest.json`.
- `-c ` or `--config-dir`: Used to specify the development directory, i.e., specify the root directory where you created `manifest.json`.
- `--clear`: Whether to clear the compiled folder, default is to clear.

### Example

```bash
plaoc bundle  ./dist --dir ./plaoc/demo --version 0.0.2
```

After packaging, it can be deployed to any accessible location, and then in the `Dweb Browser` on any platform, access the `metadata.json` file to install.
