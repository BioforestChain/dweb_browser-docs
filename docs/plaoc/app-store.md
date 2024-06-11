---
outline: deep
---

# 应用商店

您的应用可以发布到别人的应用商店，也可以自己开发一个应用商城。
或者简单的直接将 `metadata.json` 的 `deeplink` 链接放到您的 app 官网,让用户直接访问官网就能下载 app。

这里提供一个开源的应用商城，您可以 fork 之后部署您自己的 app 应用到您自己的商城。

[应用商城源码地址](https://github.com/BioforestChain/app-center)

## 如何创建下载链接

首选您的应用会打包出两个文件如下：

```bash
  bundle
  ├── xxxxx.dweb.zip
  └── metadata.json
```

接着您需要上传到您的 app 官网(应用商城)中。
假设我上传到我 app 官网的根目录：

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip
└── https://dweb.browser.org/metadata.json
```

那么我 app 官网只需要做如下方式的跳转， 就可以唤醒 app 的下载。

::: code-group

```javascript [open]
window.open(`dweb://install?url=https://dweb.browser.org/metadata.json`);
```

```html [a tag]
<a href="dweb://install?url=https://dweb.browser.org/metadata.json">点击下载</a>
```

```javascript [href]
location.href = "dweb://install?url=https://dweb.browser.org/metadata.json";
```

:::

建立下载的途径只需要遵循一个原则。使用`dweb:install?url=`这种`deeplink`的形式构建下载链接。
这样用户只需要在 Dweb Browser app 点击这个(链接)按钮，就可以跳转到下载界面。

## 使用二维码

您也可以在您的官网简单的放个二维码，方便已经安装了 Dweb Browser app 的用户使用支持 `deep_link`的扫描功能，进行跳转下载。

您只需要把类似下面的地址生成二维码。用户扫描完成之后就会跳转到下载 app 的界面。

```bash
dweb://install?url=https://dweb.browser.org/metadata.json
```
