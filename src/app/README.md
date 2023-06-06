# Plaoc APP

## Getting Started

We define applications running on the `dweb_browser` browser as "Plaoc Apps". First, let's understand how to package our application into a `.zip` file.

### 1. Define the configuration file `manifest.json`

This configuration file follows the [manifest standard](https://developer.mozilla.org/en-US/docs/Web/Manifest) by W3C. However, it omits some complex image configurations, such as `icon`. Therefore, we recommend directly passing an SVG file.

This configuration file will be displayed when the user installs the app. Here is an example of the configuration file, with ❗️ indicating required fields.

```json
{
  "id": "game.dweb.waterbang.top.dweb", // ❗️ App ID (must be unique)
  "name": "game", // ❗️ App name
  "short_name": "vue3-game", // ❗️ App subname
  "description": "This is a sample application that includes instances of all dweb_plugins components.", // ❗️ App description
  "icon": "https://www.bfmeta.info/imgs/logo3.webp", // ❗️ App icon
  "images": [
    // ❗️ Images for the download page
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"], // ❗️ Developers
  "version": "1.0.0", // ❗️ Version information
  "new_feature": "Added a new feature of shooting bubbles with a single click!", // ❗️ New feature in this version
  "home": "https://dweb.waterbang.top", // ❗️ App's main domain
  "categories": ["games"] // Category
}
```

- `id`: As you can see, according to the current configuration, the ID follows the format `${name}.${host}.dweb`. Please adhere to this format. The above ID is `game.dweb.waterbang.top.dweb`, and the ID corresponds to the host of the domain filled in the "home" field. Each app has a unique ID, and multiple apps can be hosted on the same domain.

- `categories`: App category, please follow the [W3C standard](https://github.com/w3c/manifest/wiki/Categories).

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
