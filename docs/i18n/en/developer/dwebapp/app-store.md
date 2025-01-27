---
outline: deep
---

# App Store

Your application can be published to someone else's app store, or you can develop your own app store.
Alternatively, you can simply place the `deeplink` link from the `metadata.json` on your app's official website, allowing users to download the app directly by visiting the website.

Here is an open-source app store provided, which you can fork and deploy your own app to your own store.

[App Store Source Code](https://github.com/BioforestChain/app-center)

## How to Create a Download Link

First, your application will package two files as follows:

```bash
  bundle
  ├── xxxxx.dweb.zip
  └── metadata.json
```

Next, you need to upload them to your app's official website (app store).
Assuming I upload them to the root directory of my app's official website:

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip
└── https://dweb.browser.org/metadata.json
```

Then, my app's official website only needs to redirect in the following way to trigger the app download.

::: code-group

```javascript [open]
window.open(`dweb://install?url=https://dweb.browser.org/metadata.json`);
```

```html [a tag]
<a href="dweb://install?url=https://dweb.browser.org/metadata.json">Click to Download</a>
```

```javascript [href]
location.href = "dweb://install?url=https://dweb.browser.org/metadata.json";
```

:::

The principle for creating a download link is simple. Use the `dweb:install?url=` deep link format to construct the download link.
This way, users only need to click this (link) button in the Dweb Browser app to jump to the download interface.

## Using QR Codes

You can also simply place a QR code on your official website, making it convenient for users who have already installed the Dweb Browser app to use the `deep_link` scanning feature to jump and download.

You only need to generate a QR code for an address similar to the one below. After scanning, users will be redirected to the app download interface.

```bash
dweb://install?url=https://dweb.browser.org/metadata.json
```
