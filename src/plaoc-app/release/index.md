---
title: Release
category:
  - Service 
tag:
  - Service 
---

发布 Plaoc App;

## 发布

- 每个app都需要发布到自己的域名下面，域名跟开发填写到`manifest.json`的appId是绑定到一起的;

## 示例：


- 假设我的appId是:`game.dweb.browser.org.dweb`

- 那么需要把[bundle](../ploac-cli/bundle.md)打包出来的文件，放到`dweb.browser.org`根目录，部署就完成了。

- 在 dweb_browser 应用中，只需要提供任意方式访问`https://dweb.browser.org/metadata.json`就可以。

  - 提供json地址的二维码，让用户扫码下载。

  - 在官网上通过`XMLHttpRequest`方式，请求这个json,用户在官网点击下载。这个需要官网页面内容的支持；

    官网示例：
    ```html
    <body>
      <div class="container">
          <button onclick="getBfsMeta()">download click</button>
      </div>
      <script>
      function getBfsMeta() {
          fetchLocal("dweb:install?url=https://game.dweb.browser.org.dweb/metadata.json")
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

## 相关链接

  [plaoc app](../index.md)

  [@plaoc/cli](./index.md)

  [plaoc bundle](./bundle.md)







 <!-- 
 <ul>
    <li><a href="https://github.com/BioforestChain/dweb_bundle">dweb_bundle</a></li>
    <li><a href="https://github.com/BioforestChain/dweb_browser">dweb_browser</a></li>
</ul> 
<a href="dweb:install?url=https://dweb.waterbang.top/metadata.json">点击下载</a> 
--> 

