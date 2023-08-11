---
title: Release
category:
  - Service
tag:
  - Service  
---

Publishing Plaoc Apps.

## Publishing 

- Each app needs to be published under its own domain. The domain is bound to the appId specified in `manifest.json`.

## Example:

- Assume my appId is: `game.dweb.browser.org.dweb`

- Then the [bundle](../ploac-cli/bundle.md) files need to be deployed under `dweb.browser.org` root directory. That completes the deployment.

- In the dweb_browser app, just need to provide access to `https://dweb.browser.org/metadata.json` in some way. 

  - QR code with the json url for users to scan and download.

  - Use `XMLHttpRequest` in website to request the json. User clicks on website to download. Requires website content support:

    Website example:
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

## Related Links  

[plaoc app](../index.md)

[@plaoc/cli](./index.md) 

[plaoc bundle](./bundle.md)