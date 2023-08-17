---
title: BFSMetaData
category:
  - Interface
tag:
  - BFSMetaData
---

app元数据接口；
这个是内部接口，无法直接访问；
只有通过 [UpdateController.download()](../../plugin/update-controller/download.md) 返回的Promise，resolve兑现这个接口；

 
## 属性
  

  - id 

    标识符；
    
    属性值是一个string；规范是 `${name}.${host}.dweb`;
    
    例如："game.dweb.waterbang.top.dweb"
    
    每个 app 都有一个唯一的 id,每个域名可以挂载多个 App。

  - server 

    应用的入口服务文件地址；
    属性值是一个 [MainServer](../main-server/index.md)对象；

  - name 

    应用的名称
    属性值是一个string;


  - short_name 

    应用的副标题
    属性的值是一个 string;
    将会展示到browser主页

  - icon 

    应用的图标
    属性的值是一个string;
    app的图标，建议使用矢量图，这里简化了 pwa 声明多个不同大小的 icon;


  - downloadUrl

    应用下载的地址
    属性的值是一个string;


  - images 

    应用的截图列表；
    属性值是一个Array, 索引值是 string;

  - description 

    应用的描述
    属性值是一个string;
    将会在下载页面和详情页面呈现给用户;

  - author 

    应用的作者；
    开发者，数组形式传递，第一个开发者为app版权所有者。

  - version 

    应用的版本；
    属性的值是一个string;

  - categories

    [APP类别](https://github.com/w3c/manifest/wiki/Categories)。
    属性值是一个数组，索引值是 string;

  - home 

    app 主域名，跟 id 挂载的域名需要相同

  - size

    应用的大小
    属性值是一个string;

  - fileHash

    文件的Hash值
    属性值是一个string;

  - permissions

    应用的许可证类型；
    属性值是一个Array,索引值是string;

  - plugins

    应用使用的插件列表；
    属性值是一个Array,索引值是string;

  - release_date

    最后更新时间；
    属性只是一个string;

  - bundle_signature

    打包App生成签名；
    属性值的类型是一个 string;

  - public_key_url

    用来验证app持有者的身份;
    属性值是一个 string;

  - new_feature 

    版本新特性，每次更新的时候，可以跟着 版本版本号同步更新



## 方法

  - 无

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| id           | ✅      | ✅  | ✅          | X      |
| server       | ✅      | ✅  | ✅          | X      |
| name         | ✅      | ✅  | ✅          | X      |
| short_name   | ✅      | ✅  | ✅          | X      |
| icon         | ✅      | ✅  | ✅          | X      |
| downloadUrl  | ✅      | ✅  | ✅          | X      |
| images       | ✅      | ✅  | ✅          | X      |
| description  | ✅      | ✅  | ✅          | X      |
| author       | ✅      | ✅  | ✅          | X      |
| version      | ✅      | ✅  | ✅          | X      |
| categories   | ✅      | ✅  | ✅          | X      |
| home         | ✅      | ✅  | ✅          | X      |
| size         | ✅      | ✅  | ✅          | X      |
| fileHash     | ✅      | ✅  | ✅          | X      |
| permissions  | ✅      | ✅  | ✅          | X      |
| plugins      | ✅      | ✅  | ✅          | X      |
| release_date | ✅      | ✅  | ✅          | X      |

## 相关链接

[UpdateControllerPlugin](../../plugin/update-controller/index.md)

