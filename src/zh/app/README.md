# Plaoc APP

## 开始

我们定义运行于`dweb_browser`浏览器上面的应用，统一称为`Plaoc App`。
那么首先我们需要了解如何我们的应用打包成一个`.zip`文件。

### 1. 定义配置文件 `manifest.json`

本配置文件遵循 w3c 的[manifest 标准](https://developer.mozilla.org/en-US/docs/Web/Manifest)。但是忽略了一些繁杂的图片配置，比如`icon`,因此建议直接传递 svg 格式的文件。

这个配置文件将在用户安装 App 的时候展示，我们直接给出配置文件的示例，以下字段增加 ❗️ 为必填。

```json
{
  "id": "game.dweb.waterbang.top.dweb", // appId❗️ 唯一性
  "name": "game", // app名称❗️
  "short_name": "vue3-game", // app子名称❗️
  "description": "这是一个实例应用，包含了dweb_plugins全部组件的实例。", // app 介绍❗️
  "icon": "https://www.bfmeta.info/imgs/logo3.webp", // app的图标❗️
  "images": [
    // 下载页面的❗️
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"], // 开发者❗️
  "version": "1.0.0", // 版本信息❗️
  "new_feature": "新添加了一键弹弹弹的功能！", // 版本新特性❗️
  "home": "https://dweb.waterbang.top", // app 主域名❗️
  "categories": ["games"] // 类别
}
```

- `id` 可以看到我们依据当前的配置，id的规范是`${name}.${host}.dweb`格式，请遵循当前格式。
上面的 id 为`game.dweb.waterbang.top.dweb`,id 对应着home的填写的域名的host。
每个 app 都有一个唯一的 id,每个域名可以挂载多个 App。

- `categories` : app 类别，请遵循[w3c 标准](https://github.com/w3c/manifest/wiki/Categories)。

创建完成配置文件之后，我们下一步就需要打包文件。

### 2. 打包 Plaoc App

我们需要借助打包工具[plaoc cli](./bundle)来打包我们的 App。

打包完成之后就会生成两个文件一个是我们的源码文件`game.dweb.waterbang.top.dweb.zip`和我们的配置文件`metadata.json`。

源码文件需要放到我们 bundle_url 对应的位置，而`metadata.json`可以放到任意位置，
比如放到`https://dweb.waterbang.top/metadata.json`，在 app 自更新的时候访问这个链接就可以了。
为了方便用户安装也可以将上述连接转化成二维码，通过`dweb_browser`二维码识别，进入安装页面。

这样我们的 app 就安装到`dweb_browser`上了。

### 放到官网下载

如果您需要放到您的官网进行下载,您可以在您的官网写dweb_deeplink链接，然后到dweb_browser打开，就能进入下载页面。

#### 示例

>注意：请不要使用fetch。

```html
<body>
    <div class="container">
        <h1>dweb-game！</h1>
        <h3>welcome come dweb.waterbang.top</h3>
        <ul>
            <li><a href="https://github.com/BioforestChain/dweb_bundle">dweb_bundle</a></li>
             <li><a href="https://github.com/BioforestChain/dweb_browser">dweb_browser</a></li>
        </ul>
        <!--<a href="dweb:install?url=https://dweb.waterbang.top/metadata.json">点击下载</a>-->
        <button onclick="getBfsMeta()">download click</button>
    </div>
    <script>
    function getBfsMeta() {
        fetchLocal("dweb:install?url=https://dweb.waterbang.top/metadata.json")
	}
	function fetchLocal(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest
        xhr.onload = function () {
            resolve(new Response(xhr.response, { status: xhr.status }))
        }
        xhr.onerror = function () {
            reject(new TypeError('Local request failed'))
        }
        xhr.open('GET', url)
        xhr.responseType = "arraybuffer";
        xhr.send(null)
    })
};
</script>
</body>
```
