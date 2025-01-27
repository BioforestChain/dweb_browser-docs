# What is dweb-browser

dweb-browser is a browser platform built following the Dweb standard, exposing browser capabilities and related native system capabilities through various dweb modules. Currently, we support mainstream platforms including Android, iOS, macOS, Windows, and Linux.

We modularize the operating system's functions and interconnect them with a unified communication standard, assembling a new platform. Note, this assembly is not just for a single device but for all devices trusted by the user. When users install DwebBrowser on their devices, each device's capabilities are modularized, simultaneously providing services to the user. The reassembled platform will be more powerful. For example, I can run my AIGC program on a PC but use it on a mobile device, without developers needing to intervene in how these devices should interconnect. Developers can develop applications as if they were local, with the service provider being either the local device or cloud services.

We are passionate about advancing web technology. We have deployed a JsRuntime locally, which, for developers, is similar to well-known JsRuntimes like Node.js or Deno, except the latter always runs on cloud servers. We bring these capabilities down to mobile devices, allowing developers to use traditional server-side development thinking and technology to deploy and run their sites locally. All this happens locally, meaning developers and users do not need to pay any deployment costs. We have moved server-side technology to local mobile devices, a significant innovation.

Using local server-side technology to deploy applications, unlike traditional WebApps, which consume a lot of memory and inevitably occupy more memory the longer they run. We prioritize the backend, allowing us to deploy SSR technology locally, which is more advanced than SSG, offering faster first-screen loading experiences and more memory savings.

Thus, user privacy is better protected under this programming model. And because services are deployed locally, developers can more easily solve offline availability issues.

We open-source everything, we do not monopolize, we just return web technology to users, allowing them to freely deploy their programs.

To achieve cross-platform programming, we provide a cross-platform windowed view standard, using multi-window technology uniformly on mobile devices. This is a core point of our promise for cross-platform. Without multi-window technology, it would be difficult for users and developers to achieve a unified programming interface across multiple platforms.

We will also make more efforts for user privacy. In the future, we will add features like 'identity card package,' making it easier for users to manage their account passwords and personal information in apps and web pages. The community can provide a better experience around these standardized infrastructures provided by dweb.

We hope developers open their applications to each other through standards. The current internet world is like isolated islands of information, driven by interests. We do not deny these objective phenomena but hope to introduce a series of new technical specifications, giving users a better web environment, making it truly the 'internet.'

Imagine playing chess with your friend without needing to connect to a chess server, just through a chat software to connect with your friend, and then you can play chess together. This does not require chess software developers to purchase any servers, nor does it require chat software developers to develop any chess functions. They can interconnect through open standards.

At the same time, chat servers do not even need to be purchased. Under the dweb technical standard framework, all nodes are servers. This openness is based on the protection of user devices. Users can choose their trusted operators to protect their openness, and this operator could be the desktop device in their own home. Therefore, users do not need to worry about any of their data being sold to operators.

## What is dweb?

Dweb is a decentralized web consensus standard.

It is directly reflected in your domain name, such as: `example.dweb`
However, because dweb does not really exist on the internet, it means it does not belong to any organization, meaning how to interpret the `example.dweb` domain name is entirely up to you (your device) to decide.
The dweb consensus standard is composed of several parts:

### Communication Standard

Drawing from the http protocol, we use JSON and CBOR, these web data formats, to define the communication standard between two modules, and modules that follow this message-based communication are called dweb-micro-modules (Chinese: 'dweb modules').
This communication standard uses the `file:` protocol header with `.dweb` to define its URL, for example: `file://dns.std.dweb/`.

### General Standard

- `dns.std.dweb` is the core part of the dweb consensus standard, defining the interconnection, registration, query, and other functions of two dweb modules, it is the core technology required for dweb module interconnection
- `http.std.dweb` is the standard for http services, any module can get its own `.dweb` domain name through it, enabling interoperability with web technology
- `file.std.dweb` is the file service standard, it is module-based, each module has its own independent file service, they do not interfere with each other but can safely collaborate
- `permission.std.dweb` is the permission management standard. Data belongs to the user, including the data managed by the module, so the module can ensure data services are authorized by the user through permission registration

### System Standard

This covers some standards for common operating system modules, including platform-independent standards and unified abstract standards:

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
- _etc._

These `*sys.dweb` standards are encapsulations of the operating system's standard interfaces, we will not tamper with them, only follow up with native system updates, so they are long-term stable and will be used as standard libraries for application development.

### Deep Link Standard

`dweb-deeplink` is a link in the format of `dweb://action?params`, providing a consensus-defining platform between dweb modules, for example, modules can rely on consensus rather than actual dweb modules.
A concrete example, for implementing a share function: I can bind in my share button: `dweb:share?title=hello_world&files=http...`, then the dweb kernel will look for which module declares the implementation of `dweb:share` and route the request to that module. If the consensus is implemented by multiple modules simultaneously, preference selection will be made through platform-standard interactions on different platforms.

In environments with command lines, `dweb-deeplink` can also be accessed through the command line: `dweb-browser install app --url=xx` will be parsed as: `dweb:install/app?url=xx`

> Note: Here, DwebBrowser is just a software implementation of the dweb protocol, there may be other implementations in the community, or in the future, we may also launch dweb-cloud, a runtime service for the cloud.