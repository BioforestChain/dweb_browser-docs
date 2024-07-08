# What is dweb-browser

dweb-browser is a browser platform built in compliance with Dweb standards, and exposes browser capabilities and browser-related system native system capabilities through various dweb modules. At present, we have implemented support for mainstream platforms such as Android, IOS, MacOS, Windows, and Linux.

We modularize the various functions of the operating system and then interconnect them using unified communication standards to assemble a new platform. Note that the assembly here is not only for one device, but for all devices trusted by the user. Then when users install their devices on DwebBrowser, the capabilities of each device will be modularized, thus providing users with Serve. What will be reassembled will be a more powerful platform. For example, I can run my AIGC program on a PC, but use it on the mobile terminal. The developer does not need to intervene in the whole process of how the devices here should be interconnected. The developer can treat the whole process as developing a program locally. It's just an application, and the provider behind the final service can be a local device or a cloud service.

We love promoting the development of web technology, and we have deployed a JsRuntime locally. For developers, it is a well-known JsRuntime similar to Nodejs or Deno, except that the latter always runs on a cloud server. We are bringing these capabilities to mobile devices. Developers can use the thinking technology of traditional server-side development to deploy and run their sites locally on users. All this happens locally, which also means that developers and users do not need to pay any deployment costs. We have moved the server-side technology to local mobile devices, which is a huge innovation.

Applications are deployed using local server-side technology. Unlike traditional WebApps, they require a large amount of memory, and the longer they run, the higher the memory usage will inevitably be. We have a backend-first concept, so we can deploy SSR technology locally, which is more advanced than SSG, has a faster first-screen loading experience, and saves more memory.

In this way, user privacy can be better protected under this programming model. And because the service is deployed locally, developers can more easily solve offline availability issues.

We make everything open source, we do not have any monopoly, we just return Web technology to users, and users can freely deploy their programs.

In order to achieve cross-platform programming, we provide a cross-platform windowed window view standard, and also use multi-window technology uniformly on mobile devices. This is a core point of our commitment to cross-platform. Without multi-window technology, it would be difficult for us to allow users and developers to reach a unified programming interface on multiple platforms.

We will also make more efforts for user privacy. In the future, we will add functions such as "ID Card Pack" so that users can more conveniently manage their account passwords and personal information in applications and web pages. The community can provide a better experience for users around the standardized infrastructure provided by these dwebs.

We hope developers will open their applications to each other through standards. The current Internet world is like an island of information. This is due to interests. We do not want to deny these objective phenomena, but hope to launch a series of new technical specifications to give users a better Web environment. , making it better and truly "the Internet".

Just imagine, you can play chess with your friends. In this process, you don't even need to connect to the chess server. Instead, you just connect with your friends through a certain chat software, and then you can play chess with your friends. And all this does not require chess software developers to purchase any servers, nor does chat software developers need to develop any chess functions. They can be interconnected through open standards.

At the same time, the chat server does not even need to be purchased. Under the technical standard framework of dweb, all nodes are servers. The premise of this openness is the protection of user equipment. Of course, users can choose operators they trust for their own openness. To bring protection, this operator may be the desktop device in the user's own home. Therefore, users do not need to worry about selling any of their data to operators.

## What is dweb?

Dweb is a decentralized web consensus standard. It is directly reflected in your domain name, such as `example.dweb`. 
Because the dweb domain does not actually exist on the internet, it means it does not belong to any organization. Therefore, how to interpret the example.dweb domain is entirely up to you (your device) to decide. 
The dweb consensus standard consists of several parts:

### Communication Standard

Drawing inspiration from the HTTP protocol, we define the communication standards for two modules using JSON and CBOR web data formats. Modules that follow this message-based communication are called dweb micro-modules. These communication standards are defined using the `file:` protocol header along with the `.dweb` domain, such as `file://dns.std.dweb/`.

### Common Standard

- `dns.std.dweb`  is the core part of the dweb consensus standard, defining functions like interconnection, registration, and querying of dweb modules, which are essential for dweb module interconnection.
- `http.std.dweb` is the HTTP service standard, allowing any module to obtain a dedicated .dweb domain name, thereby interoperating with web technologies.
- `file.std.dweb` is the file service standard, where each module has an independent file service that does not interfere with one another but can securely collaborate.
- `permission.std.dweb` is the permission management standard. Data belongs to the user, including data managed by the modules. Therefore, modules can ensure that data services are user-authorized through permission registration.

### System Standard

This includes some common system module standards, encompassing both platform-specific standards and unified abstract standards:

- `file.sys.dweb`
- `camera.sys.dweb`
  - `camera.harmonyos-sys.dweb`
  - `camera.android-sys.dweb`
  - `camera.ios-sys.dweb`
  - `camera.windows-sys.dweb`
- `status-bar.sys.dweb`
  - `status-bar.android-sys.dweb`
  - `status-bar.ios-sys.dweb`
- `toast.sys.dweb`
- `share.sys.dweb`
- `process.sys.dweb`
- `account.sys.dweb`
- _and more_

These `*sys.dweb` standards encapsulate standard interfaces of operating systems. We will not alter them but will follow updates of native systems, ensuring long-term stability, making them standard libraries for application development.

### Deep Linking Standard

`dweb-deeplink` is a type of link formatted as `dweb://action?params`, providing a consensus platform among dweb modules. 
Modules can rely on consensus rather than actual dweb modules. For example, for a sharing function, I can bind my share button to: `dweb:share?title=hello_world&files=http....` Then, the dweb kernel will find the module that declares the implementation of `dweb:share` and route the request to it. If multiple modules implement the consensus, preference will be handled through platform-standard interactions on different platforms.

In command-line environments, `dweb-deeplink` can also be accessed through the command line: `dweb-browser install app --url=xx` will be parsed as: `dweb:install/app?url=xx`.

> Note: DwebBrowser is just one implementation of the dweb protocol; there might be other implementations from the community, or we might release dweb-cloud as a runtime service for the cloud in the future.

# Plaoc

Plaoc is a "cross-platform web application" development toolkit based on the dweb-browser platform, akin to Cordova, Capacitor, and Tauri. It includes packaging tools `@plaoc/cli` and frontend plugins `@plaoc/plugins`.

## cli

[@plaoc/cli](https://www.npmjs.com/package/@plaoc/cli) is the command-line tool for developing and packaging applications to the dweb_browser.

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

When developing an app, run plaoc serve.

- The first method allows you to specify the output address of your frontend project, so the app's internal code will update as your code updates.

```bash
plaoc serve http://localhost:8000
```

- The second method directly specifies the compiled source directory, which is equivalent to directly installing the app, suitable for when your frontend project is disconnected.

```bash
plaoc serve ./dist
```

The above commands will output the following lines:

```bash
using metadata file: /Volumes/developer/waterbang/deno/dweb_browser/npm/@plaoc__examples/html-demo/manifest.json
metadata: 	dweb://install?url=http://127.0.0.1:8097/metadata.json
metadata: 	dweb://install?url=http://172.30.95.93:8097/metadata.json
```

The first line `using metadata file` specifies your app configuration file directory, helping to easily identify which app it is.

The second and third lines `metadata` are in `deeplink` form; you can paste it into dweb-browser on desktop to install. For mobile devices, you can convert it into a QR code and scan to install the app.

### Packaging the app into a deployable package

Directly use `plaoc bundle` to specify the source directory for packaging. The command is as follows:

```bash
plaoc bundle ./dir
```

It will package and generate a compressed file `.zip` combining the app ID and date, along with a `metadata.json`.

Deploy these two files as links using any `(http/https)` service, place them in the same folder pointing to the `metadata.json` file. Form a link in the following format, and you can install it in the dweb-browser.

```bash
dweb://install?url=http://<domain>/metadata.json
```

## plugins

[@plaoc/plugins](https://www.npmjs.com/package/@plaoc/plugins) empowers web developers to directly invoke system APIs on various platforms.

For detailed documentation, see: [plugins 文档](https://docs.dweb-browser.org/plugins/web-components.html)