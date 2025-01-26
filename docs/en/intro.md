# What is dweb-browser

dweb-browser is a browser platform built following the Dweb standards, exposing browser capabilities and related native system capabilities through various dweb modules. Currently, we support mainstream platforms such as Android, IOS, MacOS, Windows, and Linux.

We modularize the functionalities of the operating system and then interconnect them using a unified communication standard, thus assembling a new platform. Note that this assembly is not just for a single device but for all devices trusted by the user. When users install DwebBrowser on their devices, each device's capabilities are modularized, simultaneously providing services to the user. The reassembled platform will be even more powerful. For example, I can run my AIGC program on a PC but use it on a mobile device, without the developer needing to intervene in how the devices should interconnect. Developers can treat it as developing an application locally, with the service provider behind the scenes being either the local device or cloud services.

We are passionate about advancing Web technology. We have deployed a JsRuntime locally, which, for developers, is similar to well-known JsRuntimes like Nodejs or Deno, except that the latter always runs on cloud servers. We bring these capabilities down to mobile devices, allowing developers to use traditional server-side development techniques to deploy and run their sites locally on users' devices. All of this happens locally, meaning neither developers nor users need to pay any deployment costs. We have moved server-side technology to local mobile devices, which is a significant innovation.

Deploying applications using local server-side technology, unlike traditional WebApps, does not consume a lot of memory, and the longer it runs, the higher the memory usage inevitably becomes. We prioritize the backend concept, allowing us to deploy SSR technology locally, which is more advanced than SSG, offering faster first-screen loading experiences and more memory savings.

Thus, user privacy is better protected under this programming model. And because services are deployed locally, developers can more easily solve offline availability issues.

We open-source everything, we do not monopolize, we simply return Web technology to users, allowing them to freely deploy their programs.

To achieve cross-platform programming, we provide a cross-platform windowed view standard, using multi-window technology uniformly on mobile devices. This is a core point of our commitment to cross-platform. Without multi-window technology, it would be difficult for us to provide a unified programming interface for users and developers across multiple platforms.

We will also make more efforts for user privacy. In the future, we will add features like "identity wallet" to make it easier for users to manage their account passwords and personal information in apps and web pages. The community can build around these standardized infrastructures provided by dweb to offer users a better experience.

We hope developers will open their applications to each other through standards. The current internet world is like isolated islands of information, driven by interests. We do not deny these objective phenomena but hope to introduce a series of new technical standards to provide users with a better Web environment, making it truly the "internet."

Imagine being able to play chess with your friend without even connecting to a chess server, but simply through a chat app to connect with your friend and then play chess together. This does not require the chess app developer to purchase any servers, nor does it require the chat app developer to develop any chess functionality. They can interconnect through open standards.

At the same time, chat servers do not even need to be purchased. Under the dweb technical standard framework, all nodes are servers. This openness is based on the protection of user devices. Users can choose trusted operators to protect their openness, and this operator could be the user's own desktop device at home. Therefore, users do not need to worry about any of their data being sold to operators.

## What is dweb?

Dweb is a decentralized Web consensus standard. It is directly reflected in your domain name, such as: `example.dweb`
However, because the dweb domain does not actually exist on the internet, it means it does not belong to any organization. That is, how to interpret the `example.dweb` domain name is entirely up to you (your device) to decide.
The dweb consensus standard is composed of several parts:

### Communication Standard

Inspired by the http protocol, we use JSON and CBOR, web data formats, to define the communication standard between two modules. Modules that follow this message-based communication are called dweb-micro-modules (Chinese: "dweb modules").
This communication standard uses the `file:` protocol header combined with the `.dweb` domain to define its URL, for example: `file://dns.std.dweb/`.

### General Standards

- `dns.std.dweb` is the core part of the dweb consensus standard, defining functions such as interconnection, registration, and query between two dweb modules, which are the core technologies required for dweb module interconnection.
- `http.std.dweb` is the standard for http services. Any module can obtain a dedicated `.dweb` domain through it, enabling interoperability with Web technology.
- `file.std.dweb` is the file service standard. It operates on a module basis, with each module having an independent file service, which do not interfere with each other but can safely collaborate.
- `permission.std.dweb` is the permission management standard. Data belongs to the user, including the data managed by the module. Therefore, modules can register permissions to ensure data services are authorized by the user.

### System Standards

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

These `*sys.dweb` standards are encapsulations of the operating system's standard interfaces. We will not tamper with them but will follow up with updates to the native system, making them long-term stable and used as standard libraries for application development.

### Deep Link Standard

`dweb-deeplink` is a link in the format of `dweb://action?params`, providing a consensus platform for dweb modules. For example, modules can rely on consensus rather than actual dweb modules.
A concrete example is implementing a share function: I can bind in my share button: `dweb:share?title=hello_world&files=http...`, then the dweb kernel will look for which module has declared the implementation of `dweb:share` and route the request to that module. If the consensus is implemented by multiple modules simultaneously, preference selection will be made through platform-standard interactions on different platforms.

In environments with command lines, `dweb-deeplink` can also be accessed via command line: `dweb-browser install app --url=xx` will be parsed as: `dweb:install/app?url=xx`

> Note: DwebBrowser here is just a software implementation of the dweb protocol. There may be other implementations in the community, or we may also introduce dweb-cloud, a runtime service for the cloud in the future.