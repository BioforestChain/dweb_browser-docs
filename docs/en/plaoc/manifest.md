---
outline: deep
---

# Manifest

Details about the manifest.json file of dweb app. You can understand it as the manifest.json of PWA.

It mainly provides all the configuration information of the dweb app, attribute verification, and some information displayed on the installation interface.

- [Manifest](#manifest)
  - [Reference](#reference)
      - [Parameter](#parameter)
  - [Example](#example)

## Reference

#### Parameter

- `id`: **_string_**.Standard: `${name}.${host}.dweb`.Each `app` has a unique `id`, and each domain name can mount multiple `app`. Example: `"game.dweb.waterbang.top.dweb"`.
- `version`: **_string_**.app version.
- `baseURI`: **_string?_**.If not set, the `baseURI` of the `metadata.json` link is used by default.

- `server`: **_MainServer_** dweb application entry settings.

```ts
interface MainServer {
  root: string /* Program startup directory */;
  entry: string /* Program startup file */;
}
```

- `logo`: **_string_**.The `logo` icon displayed when the application is installed.
- `minTarget`: **_number_**.`Major` version number of the lowest supported `Semantic Version` of `Dweb Browser`.
- `maxTarget`: **_number?_**.The `Major` version number of the highest `Semantic Version` supported by `Dweb Browser`.

- `name`: **_string_**.The name displayed by the application. Same as `WebApp` standard of `W3C`[name](https://w3c.github.io/manifest/#dfn-name).
- `short_name`: **_string_**.The short name displayed by the application. Same as `WebApp` standard of `W3C`[short_name](https://w3c.github.io/manifest/#dfn-short_name).
- `description`: **_string_**.Application introduction. Same as `WebApp` standard of `W3C`[description](https://w3c.github.io/manifest/#description-member).
- `dir`: **_string?_**.Used for text alignment. Same as `WebApp` standard of `W3C`[dir](https://w3c.github.io/manifest/#dir-member).
- `lang`: **_string?_**.Specify the primary language for the values of directional members of the list (since knowing the language also helps with directionality). Same as `WebApp` standard of `W3C`[lang](https://w3c.github.io/manifest/#lang-member).
- `icons`: **_string_**.icon icon set. Same as `WebApp` standard of `W3C`[icons](https://w3c.github.io/manifest/#icons-member).

- `homepage_url`: **_string_**.The homepage address of the official website of the application. Same as `Chrome`’s `manifest` standard[homepage_url](https://developer.chrome.com/docs/extensions/mv3/manifest/homepage_url/).

- `bundle_*`: **_string_**.Use the packaging address and security-related verification information automatically generated by the `@plaoc/cli` tool.
- `public_key_url`: **_string?_**.The link must use a website link with the same domain name as `id`.
  ::: info info: The request returned is in the format of "algorithm + public key address" `{algorithm}:hex;{publicKey}`
  example is: `rsa-sha256:hex;2...1`
  :::

- `languages`: **_string[]?_**.Supported languages.[lang code](http://www.lingoes.net/zh/translator/langcode.htm).
- `images`: **_string[]?_**.Display image when installing the application.
- `change_log`: **_string_**.The update log displayed when installing the app.
- `author`: **_string[]_**.Author information displayed when installing the app.
- `release_date`: **_string_**.The release date displayed when installing the app.
- `dweb_deeplinks`: **_string[]?_**.The specification is: `dweb://${operation}`. The `deeplinks` function of `Dweb Browser` can be used for external wake-up applications.
- `categories`: **_string[]_**.It is currently recommended to use `["application"]`, and more will be opened in the future.
- `display`: **_"fullscreen" | "standalone" | "minimal-ui" | "browser" | undefined_**.The display mode of the application.
- `orientation`: **_"any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary" | undefined_**.The default orientation of the application's window.
- **......There are still some fields that are not enabled yet.**

## Example

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "server": {
    "root": "/usr",
    "entry": "/server/plaoc.server.js"
  },
  "minTarget": 2,
  "maxTarget": 2,
  "name": "vue3-game",
  "short_name": "game",
  "description": "This is an example application that contains examples of all components of dweb_plugins.",
  "logo": "https://www.bfmeta.info/imgs/logo3.webp",
  "bundle_url": "./game.dweb.waterbang.top.dweb-1.3.0.zip",
  "bundle_hash": "sha256:56e8a7569519364d03c04bd11147b16693db107878b4f27b827617e5f4dfb650",
  "bundle_size": 3112387,
  "bundle_signature": "",
  "public_key_url": "",
  "release_date": "Fri Jan 12 2024 14:54:14 GMT+0800 (Central Standard Time)",
  "change_log": "changelog",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.3.0",
  "categories": ["application", "kids-games"],
  "languages": [],
  "homepage_url": "https://dweb.waterbang.top",
  "plugins": [],
  "permissions": [],
  "dir": "ltr",
  "lang": "",
  "icons": [],
  "screenshots": [],
  "display": "fullscreen",
  "orientation": "any",
  "theme_color": "",
  "background_color": "",
  "shortcuts": [],
  "dweb_protocols": []
}
```
