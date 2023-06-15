# Plaoc APP

## Getting Started

We define applications running on the `dweb_browser` browser as "Plaoc Apps". First, let's understand how to package our application into a `.zip` file.

### 1. Define the configuration file `manifest.json`

This configuration file follows the [manifest standard](https://developer.mozilla.org/en-US/docs/Web/Manifest) by W3C. However, it omits some complex image configurations, such as `icon`. Therefore, we recommend directly passing an SVG file.

This configuration file will be displayed when the user installs the app. Here is an example of the configuration file, with ❗️ indicating required fields.

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "name": "game",
  "short_name": "vue3-game",
  "description": "This is a sample application that includes instances of all dweb_plugins components.",
  "icon": "https://www.bfmeta.info/imgs/logo3.webp",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.0.0",
  "new_feature": "Added a new feature of shooting bubbles with a single click!",
  "home": "https://dweb.waterbang.top",
  "categories": ["games"]
}
```

- `❗️id`: You can see that based on the current configuration, the format for the `id` is `${name}.${host}.dweb`. Please follow the current format when filling in the `id`. The provided `id` is `game.dweb.waterbang.top.dweb`, and the `id` corresponds to the host of the domain filled in for the home. Each app has a unique `id`, and multiple apps can be mounted on a single domain.
- `❗️name`: The name of the app.
- `❗️short_name`: The short name of the app, which will be displayed on the browser's home page.
- `❗️description`: Here, you can provide a brief description of the app, which will be shown to users on the download page and detail page.
- `❗️icon`: The icon of the app. It is recommended to use a vector image. In this case, we simplified the PWA declaration with a single `icon` instead of declaring multiple icons of different sizes.
- `❗️images`: Images for the download page display.
- `❗️author`: The developer(s) of the app, provided in an array format. The first developer is considered the app's copyright owner.
- `❗️version`: The version number of the app.
- `❗️new_feature`: New features introduced in the version. Whenever there is an update, it should be synchronized with the version number.
- `❗️home`: The main domain of the app. It should match the domain mounted with the `id`.
- `categories`: Categories of the app, following the [W3C standard](https://github.com/w3c/manifest/wiki/Categories).

Once the configuration file is created, the next step is to package the files.

### 2. Packaging Plaoc App

We need to use the packaging tool [plaoc cli](./bundle) to package our app.

After packaging, two files will be generated: the source code file `game.dweb.waterbang.top.dweb.zip` and the configuration file `metadata.json`.

The source code file needs to be placed in the corresponding location of `bundle_url`, and `metadata.json` can be placed anywhere. 

For example, it can be placed at `https://dweb.waterbang.top/metadata.json`. 

When the app self-updates, you can access this link. To facilitate user installation, you can also convert the above link into a QR code and use the `dweb_browser` QR code recognition to enter the installation page.

This way, our app is installed on the `dweb_browser`.

### Put it on the official website for downloading

If you want to put it on your official website for downloading, you can write a `dweb_deeplink` link on your website and open it in the `dweb_browser`. This will take the user to the download page.

#### Example

> Note: Please do not use fetch.

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
