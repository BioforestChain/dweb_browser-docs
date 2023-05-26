# Plaoc APP

## 开始

我们定义运行于`dweb_browser`浏览器上面的应用，统一称为`Plaoc App`。
那么首先我们需要了解如何我们的应用打包成一个`.plaoc`文件。

### 1. 定义配置文件 `bfs-plaoc.json`

这个配置文件将在用户安装 App 的时候展示，我们直接给出配置文件的示例，以下字段增加 ❗️ 为必填。

```json
{
  "name": "game", // app名称❗️
  "subName": "vue3-game", // app子名称❗️
  "introduction": "这是一个实例应用，包含了dweb_plugins全部组件的实例。", // app 介绍❗️
  "icon": "https://www.bfmeta.info/imgs/logo3.webp", // app的图标❗️
  "images": [
    // 下载页面的❗️
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "downloadUrl": "https://dweb.waterbang.top/game.dweb.waterbang.top.dweb.plaoc", //应用目录❗️
  "author": ["bfs", "bfs@bfs.com"], // 开发者❗️
  "version": "1.0.0", // 版本信息❗️
  "newFeature": "新添加了一键弹弹弹的功能！", // 版本新特性❗️
  "home": "https://dweb.waterbang.top", // app 主域名❗️
  "keywords": ["demo", "vue3"] // 关键字，在下载页面推荐相同种类的app使用
}
```

需要注意的是`downloadUrl`，因为我们当前的 app 还没打包，但是提前配置了打包完的路径，
所以我们需要确保上传文件的路径跟我们填写到`downloadUrl`的一致。

可以看到我们依据当前的配置，我们的 appId 为`game.dweb.waterbang.top.dweb`,appId 对应着`home`的填写的域名。
每个 app 都有一个唯一的 appId,每个域名可以挂载多个 App。

> appId 在打包完之后生成 bfs-metadata.json 文件内可以看到。AppId 都被规定为以`.dweb`后缀结尾的字符串。

创建完成配置文件之后，我们下一步就需要打包文件。

### 2. 打包 Ploac App

我们需要借助打包工具[@bfex/dweb-jmm-bundler](./bundle)来打包我们的 App，它是纯交互式命令的形式，安装完成后只需要运行`jmm`,即可开启打包。

打包完成之后就会生成两个文件一个是我们的源码文件`game.dweb.waterbang.top.dweb.plaoc`和我们的配置文件`bfs-metadata.json`。

源码文件需要放到我们 downloadUrl 对应的位置，而`bfs-metadata.json`可以放到任意位置，
比如放到`https://dweb.waterbang.top/bfs-metadata.json`，在 app 自更新的时候访问这个链接就可以了。
为了方便用户安装也可以将上述连接转化成二维码，通过`dweb_browser`二维码识别，进入安装页面。

这样我们的app就安装到``
