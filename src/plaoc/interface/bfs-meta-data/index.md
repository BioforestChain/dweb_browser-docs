---
title: BFSMetaData
category:
  - Interface
tag:
  - BFSMetaData
---

app元数据接口；
这个是内部接口，无法直接访问；
只有通过 UpdateController.download() 返回的Promise，resolve对线这个接口；

 
## 属性

  - id

    标识符；
    属性值是一个string；

  - server

    应用的入口服务文件地址；
    属性值是一个 [MainServer](../main-server/index.md)对象；

  - name

    应用的名称
    属性值是一个string;


  - short_name

    应用的副标题
    属性的值是一个string;

  - icon

    应用的图标
    属性的值是一个string;

  - downloadUrl

    应用下载的地址
    属性的值是一个string;


  - images

    应用的截图列表；
    属性值是一个Array, 索引值是 string;

  - description

    应用的描述
    属性值是一个string;

  - author

    应用的作者；
    属性的值是一个string;

  - version

    应用的版本；
    属性的值是一个string;

  - categories

    关键字
    属性的值一个字符串，索引值是一个 string;

  - home

    首页地址；
    属性值是一个string；


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


