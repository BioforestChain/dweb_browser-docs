---
title: manifest
category:
  - Plaoc APP
tag:
  - manifest.json
---

PlaocApp 的 `manifest.json` 文件的配置项;

 
## 配置项

  以下字段增加 ❗️ 为必填字段。

  - id ❗️

    标识符；
    
    属性值是一个string；规范是 `${name}.${host}.dweb`;
    
    例如："game.dweb.waterbang.top.dweb"
    
    每个 app 都有一个唯一的 id,每个域名可以挂载多个 App。

  - server

    应用的入口服务文件地址；

    属性值是一个 [MainServer](../../plaoc-plugin/interface/main-server/index.md)对象；

  - name ❗️

    应用的名称
    属性值是一个string; 

  - short_name ❗️
    
    应用的副标题
    属性的值是一个 string;
    将会展示到browser主页

  - description ❗️

    应用的描述
    属性值是一个string;
    将会在下载页面和详情页面呈现给用户;


  - logo ❗️

    应用的图标
    属性的值是一个string;
    app的图标，建议使用矢量图，这里简化了 pwa 声明多个不同大小的 icon;

  - bundle_url

    压缩包的地址；

  - bundle_hash

    压缩包的hash

  - bundle_size

    压缩包的尺寸

  - release_date

    发布的时间

  - change_log
    
    更新日志；
  
  - images ❗️

    应用的截图列表；
    属性值是一个Array, 索引值是 string;

  - author ❗️

    应用的作者；
    开发者，数组形式传递，第一个开发者为app版权所有者。

  - version ❗️

    应用的版本；
    属性的值是一个string;

  - categories
    
    [APP类别](https://github.com/w3c/manifest/wiki/Categories)。
    属性值是一组 string;

  - home ❗️

    PlaocApp 主域名，跟 id 挂载的域名需要相同

  - plugins

    应用使用的插件列表；
    属性值是一组 string;

  - permissions

    应用的许可证类型；
    属性值是一组 string;

  - [dir](https://w3c.github.io/manifest/#dir-member)

    “dir”成员清单中具有方向性的成员的基本方向。
    
    属性值是一个 [TextDirectionType](./text-direction-type.md)对象

  - [lang](https://w3c.github.io/manifest/#lang-member)
    
    语言标记；
    为清单的具有方向性的成员的值指定主要语言（因为知道语言也有助于方向性）。

  - [icons](https://w3c.github.io/manifest/#icons-member-0)

    
    作为Plaoc-app的图标表示；
    属性值是一组 [ImageResource](./image-resource.md)对象;

  - [screenshots](https://w3c.github.io/manifest/#screenshots-member)

    PlaocApp 截屏图像；
    属性值是一组 [ImageResource](./image-resource.md)对象;

  - [display](https://w3c.github.io/manifest/#display-member)

    PlaocApp 显示模式；
    属性值是一个 [DisplayModeType](./display-mode-type.md)对象

  - [orientation](https://w3c.github.io/manifest/#orientation-member)

    窗口的默认方向；
    值是一个字符串；[查看orientation合法范围](./orientation.md)

  - [theme_color](https://w3c.github.io/manifest/#theme_color-member)
    
    PlaocApp的主题颜色；
    属性值是一个 string;

  - [background_color](https://w3c.github.io/manifest/#background_color-member)

    PlaocApp背景色;
    属性值是一个 string;

  - [shortcuts](https://w3c.github.io/manifest/#shortcuts-member)
    
    访问关键人物列表；
    属性值是一组 [ShortcutItem](./shortcut-item.md)对象；

  
  - languages

    描述 App 支持的语言类型
    [可能的值](https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm) 

