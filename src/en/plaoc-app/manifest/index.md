---
title: manifest
category:
  - Plaoc APP
tag:
  - manifest.json
  - 
---

Configuration options for the `manifest.json` file of a PlaocApp.

## Configuration 

Fields marked with ❗️ are required.

- id ❗️

  Identifier. 
  
  String value. Format is `${name}.${host}.dweb`.
  
  e.g. "game.dweb.waterbang.top.dweb"
  
  Each app has a unique id, each domain can mount multiple apps.

- server

  App entry server file address. 
  
  [MainServer](../../plaoc-plugin/interface/main-server/index.md) object value.
  
- name ❗️

  App name, string.

- short_name ❗️
  
  App subtitle, string, will be displayed on browser homepage.

- description ❗️

  App description, string, displayed on download and detail pages.  

- logo ❗️

  App icon, string, vector image recommended.

- bundle_url

  Compressed package url.
  
- bundle_hash

  Compressed package hash.
  
- bundle_size

  Compressed package size.

- release_date

  Release date.
  
- change_log

  Update log.

- images ❗️

  App screenshot list, string array.
  
- author ❗️

  App author, array, first is copyright owner.

- version ❗️

  App version, string.

- categories

  APP categories, string array.

- home ❗️

  PlaocApp main domain, must match id domain. 

- plugins

  Plugin list used, string array.

- permissions

  License types, string array.

- dir

  Base direction of directional members, [TextDirectionType](./text-direction-type.md).

- lang

  Language tag, primary language of directional member values.

- icons

  APP icons, [ImageResource](./image-resource.md) array.

- screenshots

  App screenshots, [ImageResource](./image-resource.md) array.

- display

  Display mode, [DisplayModeType](./display-mode-type.md).

- orientation

  Default window orientation, string. 

- theme_color

  Theme color, string.

- background_color

  Background color, string.

- shortcuts

  Access shortcuts, [ShortcutItem](./shortcut-item.md) array.

- languages

  Describes ths language types supported by the App.
  [Possible values](https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm) 