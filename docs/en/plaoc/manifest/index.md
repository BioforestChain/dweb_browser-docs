---
title: manifest
category: 
  - Plaoc APP
tag: 
  - manifest
---

Details about the `manifest.json` file of plaoc app. You can understand it as the `manifest.json` of PWA. 

It mainly provides all the configuration information of the plaoc app, attribute verification, and some information displayed on the installation interface.

```json
{
  "id": "plaoc.html.demo.dweb",
  "name": "plaoc-html",
  "short_name": "plaoc",
  "description": "This is a sample application that includes instances of all dweb_plugins components.",
  "logo": "https://dweb.waterbang.top/icon.png",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png", 
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.0.0",
  "change_log": "Added a new feature of shooting bubbles with a single click!",
  "home": "https://dweb.waterbang.top",
  "categories": ["application"] 
}
```

## Configuration 

The fields below add ❗️ for required fields.

### id ❗️

Type: string 

App id; The specification is `${name}.${host}.dweb`; For example: "game.dweb.waterbang.top.dweb"

Each app has a unique id, and each domain name can mount multiple Apps.

### name ❗️

Type: string

Application name

### short_name ❗️ 

Type: string 

Application subtitle

### description ❗️

Type: string

Application description, will be presented to users on the download page and details page;

### logo ❗️

Type: string 

Application icon, vector graphics are recommended;

### change_log

Type: string

Update log;

### images ❗️

Type: string[]

List of application screenshots; 

### author ❗️

Type: string[] 

Developer, passed in array form, the first developer is the app copyright owner.

### version ❗️

Type: string

Application version;

### categories

Type: string[]

App category, it is recommended to pass ["application"]

### home ❗️

PlaocApp main domain name, needs to be the same as the domain name mounted by id

<!-- 
- [dir](https://w3c.github.io/manifest/#dir-member) The basic direction of members with directionality in the "dir" member manifest. The attribute value is a [TextDirectionType](./text-direction-type.md) object
-->

### [lang](https://w3c.github.io/manifest/#lang-member)

Language tag; Specifies the primary language for the values of directional members of the manifest (knowing the language also helps with directionality).

### [icons](https://w3c.github.io/manifest/#icons-member-0) 

As icon representations of Plaoc-app; The attribute value is a set of [ImageResource](./image-resource) objects;

### [screenshots](https://w3c.github.io/manifest/#screenshots-member)

PlaocApp screenshot images; The attribute value is a set of [ImageResource](./image-resource) objects;

### [display](https://w3c.github.io/manifest/#display-member) 

PlaocApp display mode; The attribute value is a [DisplayModeType](./display-mode-type) object

### [orientation](https://w3c.github.io/manifest/#orientation-member)

The default orientation of the window; The value is a string; [Check the legal range of orientation](./orientation) 

### [theme_color](https://w3c.github.io/manifest/#theme_color-member)

PlaocApp theme color; The attribute value is a string;

### [background_color](https://w3c.github.io/manifest/#background_color-member)

PlaocApp background color; The attribute value is a string; 

### [shortcuts](https://w3c.github.io/manifest/#shortcuts-member)

<!-- Access key character list; -->

<!-- The attribute value is a set of [ShortcutItem](./shortcut-item.md) objects; -->

### languages

Describes the language types supported by the App [Possible values](https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm)