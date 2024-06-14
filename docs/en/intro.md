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

Dweb is a decentralized web consensus standard. It is reflected directly on your domain name, such as: `example.dweb`
However, it is precisely because the domain name dweb does not really exist on the Internet, which means that it does not belong to any organization. In other words, how to interpret the domain name `example.dweb` is entirely up to you (your device) to make the decision .
The dweb consensus standard is composed of several parts combined:

### Communication Standard

Drawing on the http protocol, we use web data formats such as JSON and CBOR to define the communication standards of the two modules. The module that follows this message-based communication is called dweb-micro-module (Chinese: "dweb module").
For this communication standard, we use the `file:` protocol header with `.dweb` and the domain name to define its URL, for example: `file://dns.std.dweb/`.

### Common Standard

- `dns.std.dweb` is the core part of dweb's consensus standard. It defines the interconnection, registration, query and other functions of two dweb modules. It is the core technology required for the interconnection of dweb modules.
- `http.std.dweb` is the standard for http services, through which any module can obtain its own `.dweb` domain name to interoperate with Web technology
- `file.std.dweb` is a file service standard. It is based on modules. Each module has an independent file service. They do not interfere with each other but can collaborate with each other safely.
- `permission.std.dweb` permission management standard. The data belongs to the user, including the data managed by the module. Therefore, the module can be registered through permissions to ensure that the data service is authorized by the user.

### System Standard

This encompasses the standards for common operating system modules, including platform-specific standards and unified abstract standards:

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

These `*sys.dweb` standards represent industry consensus. We do not modify them but rather keep them up-to-date with updates to native systems. Therefore, they are long-term stable and serve as standard libraries for application development.

### Deep Linking Standard

`dweb-deeplink` is a link in the format of `dweb://action?params`. It provides a platform for defining consensus between dweb modules. For example, modules can rely on consensus rather than actual dweb module.
To give a specific example, for example, to implement the sharing function: I can bind: `dweb:share?title=hello_world&files=http...` in my share button, then the dweb kernel will look for which module declares the Implementation of `dweb:share` and routes requests to this module. If consensus is implemented by multiple modules at the same time, preference selection will be made on different platforms through the interaction of platform standards.

In an environment with a command line, `dweb-deeplink` can also be accessed through the command line: `dweb-browser install app --url=xx` will be parsed into: `dweb:install/app?url=xx`

> Note: The DwebBrowser here is just a software that implements the dweb protocol. There may be other implementations in the community, or in the future we will also launch dweb-cloud, a cloud-facing runtime service.

## What is plaoc

plaoc is a "cross-platform web application" development toolkit based on the dweb-browser platform, comparable to Cordova, Capacitor, and Tauri.

### cli

- Installation

```bash
npm install -g @plaoc/cli
```

- Packaging as an app

`plaoc bundle ./dir`

It will package the directory structure as follows and output a compressed `.zip` file and a `metadata.json`. For more details, please refer to the [plaoc cli](./plaoc/cli) for the detailed documentation.

- Developer mode

`plaoc preview http://localhost:1231` or `plaoc preview ./dir`

This command will output the following commands:

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://192.168.0.100:8096/metadata.json
```

- Development using developer tools

```bash
#window
 & "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://192.168.0.100:8096/metadata.json
#macos
open /Applications/Dweb\ Browser.app --args install --url http://127.0.0.1:8096/metadata.json
```