# @plaoc/cli

<Badges name="@plaoc/cli" />

This is the plaoc command-line tool, tasked with developing, packaging, and distributing `dweb app`s. After using this CLI to package your app, it can be installed on any platform's `Dweb Browser`.

The cli tool also includes publishing tools and functionalities for validating apps, allowing you to use `plaoc run` alongside the server-side to quickly package and publish applications.

## Installation

First, you need to install the plaoc command-line tool.

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

> **Alternative**: You can also execute commands using `npx plaoc`.

Assume your project directory looks like this:

```bash
  dweb-app
  ├── dist // The compiled source code directory for engineering
  ├── ... Other project files
  ├── manifest.json
  └── plaoc.json
```

## Development Mode: Listening to Source Code Changes

```bash
plaoc live ./dist
```

This command starts an HTTP service in the specified folder and generates a `dweb app` installation address based on the generated HTTP address. Since it's bound to the HTTP service URL, the app is installed by providing redirection only, without actually installing the source code into the `Dweb Browser`.

In essence, when your code files are updated, you don't need to reinstall the `dweb app` as its source changes.

### Options

- **`--port`** or `-p`: Specifies the service port for startup. Defaults to 8096.
- **`--config-dir`** or `-c`: Dynamically specifies the configuration file directory, that is, the root directory where you created `manifest.json`. The default uses the current directory.
- **`--web-server`** or `-s`: Specifies the backend address for `dweb app`.
- **`--static-port`** or `-p2`: Specifies the static service address.

### Example

Ensure to specify the source code folder:

```bash
plaoc live ./dist
```

Output typically appears as:

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

The generated QR code can be scanned and installed using the scanning module in the `Dweb Browser` on mobile devices.

## Development Mode: Monitoring Service

The `plaoc serve` command offers two modes for creating static services from static source code. It also allows specifying a dynamic starting HTTP address to create an installation service.

### Specifying Dynamic Address

For instance, using `vite --host` creates a dynamic service. The advantage of this method is that you don't need to reinstall the app every time your code changes. However, it requires ensuring that devices can access each other, so if not local, try using private addresses.

```bash
plaoc serve http://172.30.95.105:5173/
```

The output will be as above.

### Specifying Static Source Code

When specifying static source code for installation, it's equivalent to installing into the `Dweb Browser`, and you don't need a service running continuously. However, if your code changes, you'll need to reinstall.

```bash
plaoc serve ./dist
```

The output will be as above.

#### Options:

- `--port` or `-p`: Used to specify the port for starting the service. The default is 8096.
- `--config-dir` or `-c`: Dynamically specifies the configuration file directory, which means specifying the root directory where you created the `manifest.json`. By default, it uses the current directory.
- `--web-server` or `-s`: Used to specify the backend address for `dweb app`.

## Packaging `dweb app`

`plaoc bundle` is used when publishing a `dweb app`, it will package into the following folder structure and output a compressed file `.zip` and a `metadata.json`.

    |- bundle
      |- appId.version.zip
      |- metadata.json

Here, the source code folder is still specified.

```bash
plaoc bundle ./dist
```

The `./dist` directory is the source code directory you want to package. Also, make sure that the folder where you run the plaoc command is at the same level as your `manifest.json` file.

If not in the same directory, you can refer to the `-c` directory for specification.

### Specifying the `manifest.json` directory

If your `manifest.json` is not in the same folder as the packaging directory, you can use the `-c` option to specify the folder where `manifest.json` is located.

Assuming the project directory is as follows:

```bash
plaoc-main
├── other-engine-files
└── plaoc-app1
    ├── ./dist  # location of packaged project code files
    └── manifest.json

└── plaoc-app2
    ├── ./dist  # location of packaged project code files
    └── manifest.json
```

With multiple projects in your folder, you can bundle them by specifying the directory like this:

```bash
plaoc bundle ./plaoc-app1/dist -c ./plaoc-app1
```

_Note: You can also get more details using `plaoc bundle --help`._

## Specifying the Output Directory for Bundled Files

You have an option to use `--out` to designate the output directory, with the default being `bundle`.

```bash
plaoc bundle ./dist --out ./bundleDir
```

### Naming Your App ID

You can also specify your app's id using `--id`. Remember that for it to work correctly:

- The id should end in `.dweb`.
- It must match the domain specified in your `home` configuration.

## Setting an App Version

Use the `--version` flag to define your app version. This overrides any version information from your `manifest.json`.

```bash
plaoc bundle ./dist --version 0.2.3
```

### Command Options Explained

- `-o` or `--out`: Specifies the target folder for packaged files, with a default of `bundle`.
- `-v` or `--version`: Sets the app version, which takes precedence over the one in `manifest.json`.
- `--id`: Assigns your app's id, overriding the `manifest.json` configuration.
- `-c ` (or `--config-dir`): Points to your development directory, where you created the `manifest.json`.
- `--clear`: Determines if the compiled folder should be cleared (`true` by default).

### Example Usage

```bash
plaoc bundle  ./dist --dir ./plaoc/demo --version 0.0.2
```

After bundling is complete and your files are ready, you can deploy them to any accessible location. To install these on the `Dweb Browser`, simply navigate to `metadata.json` from any platform.
