---
title: $JmmAppInstallManifest
category:
  - Interface
tag:
  - jmm
---

该接口声明了 app 的全部配置信息。

## 接口

```ts
export interface $JmmAppInstallManifest {
  id: $MMID;
  /** 版本信息 */
  version: string;
  /**dweb deeplinks */
  dweb_deeplinks?: $DWEB_DEEPLINK[];
  /** 类目 */
  categories: MICRO_MODULE_CATEGORY[];
  /** 安装是展示用的 icon */
  logo: string;
  /**app名称 */
  name: string;
  /**app短名称，建议6个字符以下，将显示在主页 */
  short_name: string;
  /**app详细介绍 */
  description: string;
  /** 安装时展示用的截图 */
  images: string[];
  /**打包的文件路径 */
  bundle_url: string;
  /**打包的文件hash */
  bundle_hash: string;
  /**打包的文科大小 */
  bundle_size: number;
  /**主要的语言 */
  lang: string;
  /**app 支持的语言 */
  languages: string[]; // http://www.lingoes.net/zh/translator/langcode.htm
  /**格式为 `hex:{signature}` */
  bundle_signature: string;
  /**该链接必须使用和app-id同域名的网站链接，
   * 请求回来是一个“算法+公钥地址”的格式 "{algorithm}:hex;{publicKey}"，
   * 比如说 `rsa-sha256:hex;2...1` */
  public_key_url: string;
  /**更新日志，直接放url */
  change_log: string;
  /** 安装时展示的作者信息 */
  author: string[];
  /** 安装时展示的主页链接 */
  home: string;
  /** 安装时展示的发布日期 */
  release_date: string;
  /**主要背景颜色 */
  background_color: string;
}
```

## 详细解释

### dweb_deeplinks

### categories

### bundle_signature

### public_key_url

### change_log

### home

<!-- ## 描述

- id

  标识符；

  属性值是一个 string；规范是 `${name}.${host}.dweb`;

  例如："game.dweb.waterbang.top.dweb"

  每个 app 都有一个唯一的 id,每个域名可以挂载多个 App。

- server

  应用的入口服务文件地址；
  属性值是一个 [MainServer](../main-server/index.md)对象；

- name

  应用的名称
  属性值是一个 string;

- short_name

  应用的副标题
  属性的值是一个 string;
  将会展示到 browser 主页

- logo

  应用的图标
  属性的值是一个 string;
  app 的图标，建议使用矢量图，这里简化了 pwa 声明多个不同大小的 icon;

- images

  应用的截图列表；
  属性值是一个 Array, 索引值是 string;

- description

  应用的描述
  属性值是一个 string;
  将会在下载页面和详情页面呈现给用户;

- author

  应用的作者；
  开发者，数组形式传递，第一个开发者为 app 版权所有者。

- version

  应用的版本；
  属性的值是一个 string;

- categories

  [APP 类别](https://github.com/w3c/manifest/wiki/Categories)。
  属性值是一个数组，索引值是 string;

- home

  app 主域名，跟 id 挂载的域名需要相同

- size

  应用的大小
  属性值是一个 string;

- fileHash

  文件的 Hash 值
  属性值是一个 string;

- permissions

  应用的许可证类型；
  属性值是一个 Array,索引值是 string;

- plugins

  应用使用的插件列表；
  属性值是一个 Array,索引值是 string;

- release_date

  最后更新时间；
  属性只是一个 string;

- bundle_signature

  打包 App 生成签名；
  属性值的类型是一个 string;

- public_key_url

  用来验证 app 持有者的身份;
  属性值是一个 string;

- change_log

  更新的日志，每次更新的时候，可以跟着 版本版本号同步更新

- languages

  描述 App 支持的语言类型
  [可能的值](https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm) -->
