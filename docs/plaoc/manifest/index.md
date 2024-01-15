---
title: manifest
category:
  - Plaoc APP
tag:
  - manifest
---

plaoc app 的 `manifest.json` 文件详情解释，您可以理解为是 PWA 的 `manifest.json`。

这里主要提供了plaoc app 的所有的配置信息，归属性验证，和一些展示在安装界面的信息。


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

 
## 配置项

  以下字段增加 ❗️ 为必填字段。

### id ❗️

类型:string
  
  app的id；规范是 `${name}.${host}.dweb`;
  
  例如："game.dweb.waterbang.top.dweb"
  
  每个 app 都有一个唯一的 id,每个域名可以挂载多个 App。

### name ❗️

类型:string

应用的名称

### short_name ❗️

类型:string

应用的副标题

### description ❗️

类型:string

应用的描述，将会在下载页面和详情页面呈现给用户;

### logo ❗️

类型:string

应用的图标，建议使用矢量图;

### change_log
    
类型:string

更新日志；
  
### images ❗️

类型:string[]

应用的截图列表；

### author ❗️

类型:string[]

开发者，数组形式传递，第一个开发者为app版权所有者。

### version ❗️

类型:string

应用的版本；

### categories 

类型:string[]

app的类别，建议传递["application"]

### home ❗️

PlaocApp 主域名，跟 id 挂载的域名需要相同

  <!-- - [dir](https://w3c.github.io/manifest/#dir-member)

    “dir”成员清单中具有方向性的成员的基本方向。
    
    属性值是一个 [TextDirectionType](./text-direction-type.md)对象 -->

### [lang](https://w3c.github.io/manifest/#lang-member)

语言标记；
为清单的具有方向性的成员的值指定主要语言（因为知道语言也有助于方向性）。

### [icons](https://w3c.github.io/manifest/#icons-member-0)


作为Plaoc-app的图标表示；
属性值是一组 [ImageResource](./image-resource)对象;

### [screenshots](https://w3c.github.io/manifest/#screenshots-member)

PlaocApp 截屏图像；
属性值是一组 [ImageResource](./image-resource)对象;

### [display](https://w3c.github.io/manifest/#display-member)

PlaocApp 显示模式；
属性值是一个 [DisplayModeType](./display-mode-type)对象

### [orientation](https://w3c.github.io/manifest/#orientation-member)

窗口的默认方向；
值是一个字符串；[查看orientation合法范围](./orientation)

### [theme_color](https://w3c.github.io/manifest/#theme_color-member)

PlaocApp的主题颜色；
属性值是一个 string;

### [background_color](https://w3c.github.io/manifest/#background_color-member)

PlaocApp背景色;
属性值是一个 string;

### [shortcuts](https://w3c.github.io/manifest/#shortcuts-member)

<!-- 访问关键人物列表； -->
<!-- 属性值是一组 [ShortcutItem](./shortcut-item.md)对象； -->


### languages

描述 App 支持的语言类型
[可能的值](https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm) 

