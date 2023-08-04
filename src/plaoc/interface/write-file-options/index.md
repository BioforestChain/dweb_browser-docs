---
title: WriteFileOptions
category:
  - Interface
tag:
  - WriteFileOptions
---

用于[FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md)函数的参数接口；

 

## 属性

  - path

    写入文件的路径;
    属性值的类型是 string;

  - data

    写入文件的数据体；
    属性值的类型是 string;

  - directory

    可选属性；
    写入文件所在的目录；
    属性值的类型是[Directory](../directory/index.md);

  - encoding

    可选属性；
    定会写入数据的编码；
    默认是 base64编码；
    属性值的类型是[Encoding](../encoding/index.md);

  - recursive

    可选属性；
    是否递归的创建父层级目录；
    默认是false;
    属性值的类型是 boolean;


## 方法

  - 无

## 事件

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev  | Desktop |
|:------------:|:-------:|:---:|:------------:|:-------:|
| path         | ✅      | ✅  | ✅           | X       |
| data         | ✅      | ✅  | ✅           | X       |
| directory    | ✅      | ✅  | ✅           | X       |
| encoding     | ✅      | ✅  | ✅           | X       |
| recursive    | ✅      | ✅  | ✅           | X       |

## 相关链接

[FileSystemPlugin](../../plugin/file-system/index.md)

[FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md)



