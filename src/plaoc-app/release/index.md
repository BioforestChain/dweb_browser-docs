---
title: 应用商店
category:
  - Service
tag:
  - Service
---

您的应用可以发布到别人的应用商店，也可以自己开发一个应用商城，或者简单的直接放到您的 app 官网,让用户直接访问官网就能下载 app。

### 如何创建下载链接

首选您的应用会打包出两个文件如下：

```bash
  bundle
  ├── xxxxx.dweb.zip
  └── mainifest.json
```

接着您需要上传到您的 app 官网(应用商城)中。
假设我上传到我 app 官网的根目录：

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip
└── https://dweb.browser.org/mainifest.json
```

那么我 app 官网到下载按钮代码只需要如下：

```html
<a href="dweb://install?url=https://dweb.browser.org/metadata.json">点击下载</a>
```

建立下载的途径只需要遵循一个原则。使用`dweb:install?url=`这种`deeplink`的形式构建下载链接。
这样用户只需要在 Dweb Browser app 点击这个(链接)按钮，就可以跳转到下载界面。

### 使用二维码

您也可以在您的官网简单的放个二维码，方便已经安装了 Dweb Browser app 的用户使用支持 `deep_link`的扫描功能，进行跳转下载。

您只需要把类似下面的地址生成二维码。用户扫描完成之后就会跳转到下载 app 的界面。

```bash
dweb://install?url=https://dweb.browser.org/metadata.json
```
