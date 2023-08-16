---
home: true
icon: home
title: DwebBrowser
heroImage: /logo.svg
heroText: DwebBrowser
tagline: A browser that provides distributed network and application attachment.
actions:
  - text: Introduction 💡
    link: /plaoc-app/
    type: primary

  - text: Plaoc
    link: /plaoc-plugin/

  - text: Server(testing)
    link: /service/

  - text: System(testing)
    link: /systemAPP/

features:
  - title: APP Chain Authentication
    icon: lock
    details: For DAPPID applied for on-chain by the app, it facilitates the authentication and traceability of the app.
    link: /plaoc-app/bundle/

  - title: APP Configuration
    icon: config
    details: Configure rules freely. Create a `bfs-metadata.ts` configuration file in your backend root directory. For more details, refer to the backend configuration.
    link: /plaoc-plugin/

  - title: Packaging Configuration
    icon: slides
    details: After developing the application, you need to package your frontend and backend applications into a `xxxx.zip` file and upload it anywhere.
    link: /plaoc-app/bundle/

  - title: One Packaging for Multiple Platform Usage
    icon: workingDirectory
    details: Support deployment on Android, iOS, and desktop platforms.
    link: /plaoc-app/bundle/

  - title: Application Interconnection
    icon: link
    details: Local apps communicate through custom dwebServiceWorker.
    link: /plaoc-plugin/dweb-service-worker/

  - title: Follow Web Development Standards
    icon: api
    details: All APIs conform to the development intuition of web developers and adhere to web standards.
    link: /plaoc-plugin/

  - title: Collaboration and Sharing
    icon: group
    details: If a tag adds a sharing declaration <html is="dweb-html">, the entire HTML page enters the sharing mode.
    link: /plaoc-plugin/

  - title: npm Support
    icon: npm
    details: Upload all packages to the npm platform for support.
    link: https://www.npmjs.com/package/@plaoc/plugins

  - title: Deno API Style
    icon: support
    details: Provide a series of APIs based on the Deno style on the backend.
    link: /service/

  - title: Open Source Code
    icon: github
    details: All code belongs to the community and is open source.
    link: https://github.com/BioforestChain/dweb_browser

  - title: High Degree of Freedom
    icon: strong
    details: Both frontend and backend are programmable, providing a high degree of coding freedom.
    link: /

  - title: Distributed Network
    icon: network
    details: Provide the capability of a distributed network for interconnection.
    link: /systemApp/

  - title: Storage Functionality
    icon: storage
    details: Provide storage functionality APIs, with data isolation between them.
    link: /systemApp/

  - title: Version Self-Update
    icon: async
    details: Have a distinctive version self-update service.
    link: /service/

  - title: Independent Processes
    icon: process
    details: Backend processes are independent of each other and do not interfere with each other.
    link: /service/

copyright: 闽ICP备18009949号-4
footer: MIT Licensed | Copyright © 2021-present BFCHAIN
---

## What is dweb?

Dweb is a decentralized web consensus standard. It is directly reflected in your domain name, such as `example.dweb`. However, because the dweb domain does not exist on the internet, it means that it does not belong to any organization. In other words, how to interpret the `example.dweb` domain is entirely determined by your own device.

The dweb consensus standard is composed of several parts:

### Communication Standard

Inspired by the HTTP protocol, we use JSON and CBOR as web data formats to define the communication standard for two modules. We refer to these modules that follow the message-based communication as "dweb micro-modules." The URL for these modules is defined using the `file:` protocol header along with the `.dweb` domain. For example: `file://dns.sys.dweb/`.

### Routing Standard

`dns.sys.dweb` is the core part of the dweb consensus standard. It defines the interconnection, registration, and querying functions of two dweb modules. It serves as the standard for dweb module integration into the dweb world.

### System Standard

This encompasses the standards for common operating system modules, including platform-specific standards and unified abstract standards:

- `file.sys.dweb`
- `os.sys.dweb`
- `network.sys.dweb`
- `geolocation.sys.dweb`
- `camera.sys.dweb`
- `toast.sys.dweb`
- `share.sys.dweb`
- `http.sys.dweb`
- `https.sys.dweb`
- `http3.sys.dweb`
- `permission.sys.dweb`
- `usb.sys.dweb`
- `nn.sys.dweb`
- `gpu.sys.dweb`
- `xr.sys.dweb`
- `alarms.sys.dweb`
- `locks.sys.dweb`
- `screen.sys.dweb`
- `bluetooth.sys.dweb`
- `hid.sys.dweb`
- `serial.sys.dweb`
- `ink.sys.dweb`
- `keyboard.sys.dweb`
- `virtual-keyboard.sys.dweb`
- `system-bar.sys.dweb`
  > Different platforms and different devices have different designs and definitions for a set of interfaces. At this time, you can call targeted platform interfaces for targeted development
  - `system-bar.harmonyos-sys.dweb`
  - `system-bar.android-sys.dweb`
  - `system-bar.ios-sys.dweb`
  - `system-bar.windows-sys.dweb`
  - `system-bar.linux-sys.dweb`
  - `system-bar.macos-sys.dweb`
- _and more_

These `*sys.dweb` standards represent industry consensus. We do not modify them but rather keep them up-to-date with updates to native systems. Therefore, they are long-term stable and serve as standard libraries for application development.

### Deep Linking Standard

`dweb-deeplink` is a type of link format with the structure `dweb:{domain}/pathname?search`. It provides a platform for defining consensus among dweb modules. Modules can rely on consensus rather than specific dweb modules. For example, for implementing a sharing feature, I can bind it to my share button as `dweb:share?title=hello_world&files=http...`. The dweb kernel will then look for the module that declares the implementation of `dweb:share` and route the request to that module. If multiple modules implement the consensus, preference selection will be done through platform-specific interactions on different platforms.

In a command-line environment, `dweb-deeplink` can also be accessed via the command line. `dweb-browser install app --url=xx` would be parsed as `dweb:install/app?url=xx`.

> Note: `dweb-browser` here is just one implementation of a software that follows the dweb protocol. There may be other implementations in the community.

### Lifecycle Standard

Dweb modules can connect with each other through the "Routing Standard," and consequently, there are two basic lifecycles:

1. `onConnect`: Triggered when modules establish a connection. It can be someone connecting to you or you connecting to someone else. This lifecycle is triggered because modules are peer-to-peer and full-duplex.
2. `onActivity`: Triggered when a module receives a specific message: `activity-event`. This lifecycle is

 commonly used to perform specific tasks, such as activating a window.

> Additional lifecycles are defined in different platforms and scenarios, but those lifecycles belong to the upper-level application standard and are no longer part of the core dweb standard. If two applications want to know which standards the other application has implemented, they can use querying via dweb-deeplink.

### Summary

As seen, compared to traditional web API design, dweb offers more freedom. The core reason is that dweb modules communicate entirely using message-based communication. This opens up endless possibilities for deploying dweb modules. You can use sandbox modules to protect privacy or even deploy modules from other devices using the network.

## What is dweb-browser

dweb-browser is a browser platform built following the Dweb standard. It exposes the capabilities of a browser and native system capabilities related to the browser through various dweb modules. Currently, we have implemented support for mainstream platforms such as Android, iOS, MacOS, Windows, and Linux. It includes the following core modules:

1. `js.browser.dweb`

   It is a JavaScript runtime that uses WebWorker as its underlying implementation. Therefore, various standards in WebWorker can be used out of the box.

2. `jmm.browser.dweb`

   It is a dynamic dweb module manager, which can be used to implement application functionalities similar to PWA (Progressive Web Apps).

3. `mwebview.browser.dweb`

   It stands for mutil-webview (multiple web views) renderer, which allows simultaneous rendering of multiple web views. For example, it can be used to implement a web browser.

4. `nativeui.browser.dweb`

   It is a window standard defined by the dweb-browser itself. It is integrated into mwebview, enabling window management capabilities for mwebview's views.

5. `*.sys.dweb`

   Some browser-related system standards are also implemented in dweb-browser.

## What is plaoc

plaoc is a "cross-platform web application" development toolkit based on the dweb-browser platform, comparable to Cordova, Capacitor, and Tauri.


What is BFS?

BFS stands for "Basic File System." It is a series of applications built on the dweb-browser platform, aimed at providing tools for element flow between individuals.
It is based on the principles of distributed, open-source, and open platforms, ensuring that your data is not bound to any particular platform.
Based on consensus, you can deploy privately all the software related to dweb, which will work on your device accordingly.

It includes, but is not limited to, the following consensus and applications:

1. `authn.bfs.dweb`
   Consensus for "Authentication"
1. `chain.bfs.dweb`
   Consensus for "Biological Chain Forest"
   1. `bfm.chain.bfs.dweb`
   1. `ccc.chain.bfs.dweb`
   1. `bft.chain.bfs.dweb`
1. `matrix.bfs.dweb`
   Consensus for "Decentralized Network Services"
1. `cloud.bfs.dweb`
   Consensus for "Decentralized Storage Services"
1. `pay.bfs.dweb`
   Consensus for "Peer-to-Peer Transfer"
1. `wallet.bfs.dweb`
   Consensus for "Wallet Connecting Web3 and Biological Chain Forest"
   1. `cot.wallet.bfs.dweb` COT Wallet
1. `dp.bfs.dweb`
   Consensus for "Peer-to-Peer Digital Product Trading"
1. `blog.bfs.dweb`
   Consensus for "Distributed Graphic and Text Media"
1. `chat.bfs.dweb`
   Consensus for "Distributed Real-time Communication"
1. `finance.bfs.dweb`
   Consensus for "Distributed Finance"
1. `office.bfs.dweb`
   Consensus for "Distributed Office Collaboration"
   1. `ark.office.bfs.dweb` Ark


### cli

- Installation

```bash
npm install -g @plaoc/cli
```

- Packaging as an app

`plaoc bundle ./dir`

It will package the directory structure as follows and output a compressed `.zip` file and a `metadata.json`. For more details, please refer to the [plaoc lic](./plaoc-app/bundle/README.md) for the detailed documentation.

- Developer mode

`plaoc preview http://localhost:1231` or `plaoc preview ./dir`

This command will output the following commands:

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.90.207:8096/metadata.json
```

- Development using developer tools

```bash
#window
 & "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://172.30.93.43:8096/metadata.json
#macos
open /Applications/dweb-browser-devtools.app --args install --url http://127.0.0.1:8096/metadata.json
```