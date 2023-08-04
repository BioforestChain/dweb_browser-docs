---
title: Directory
category:
  - Interface
tag:
  - Directory
---

目录对象的接口，用于 [FileSystemPlugin](../../plugin/file-system/index.md)相关的内容；
Directory类型是一个字符串；合法的值范围如下：

- "DOCUMENTS"

  IOS
  
    这个目录是应用程序的文档目录；使用此目录存储用户生成的内容
  
  Ancroid 
    
    这个是 公共文档 文件夹, 可以从其他的应用程序访问；
    除非该应用程序启用传统的外部存储，否则它在Android 10上无法访问;
    通过 `AndroidManifest.xml` 文件中的 `application` 内添加`android:requestLegacyExternalStorage="true"`
    它在Android 11或更新版本上无法访问;

  Desktop-dev

    就是 documents 文件夹
  

- "DATA"

  IOS

    会使用 documents 目录

  Android

    是保存应用程序的目录

  Desktop-dev

    就是 data 文件夹

- "LIBRARY"

  IOS

    会使用 library 目录

  Android

    是保存应用程序的目录

  Desktop-dev

    使用 library 目录；

- "CACHE"

  缓存；用来写入特定的文件内容；内存补助的情况下可以删除；

- "EXTERNAL"

  IOS

    会使用 documents 目录

  Android

    是 shared/external 目录；

  Desktop-dev

    就是 external 文件夹


- "EXTERNAL_STORAGE"

  IOS

    会使用 documents 目录

  Android

    是 shared/external 目录；
    除非该应用程序启用传统的外部存储，否则它在Android 10上无法访问;
    通过 `AndroidManifest.xml` 文件中的 `application` 内添加`android:requestLegacyExternalStorage="true"`
    它在Android 11或更新版本上无法访问;

  Desktop-dev

    会使用 external_storage 目录



## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| Directory    | ✅      | ✅  | ✅          | X       |

## 相关链接

[FileSystemPlugin](../../plugin/file-system/index.md)



