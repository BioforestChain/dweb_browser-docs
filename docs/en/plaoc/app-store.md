---
outline: deep
---

# App Store

You can publish your app to other app stores, or you can develop your own app store.
Or simply put the `deeplink` link of `metadata.json` on your app's official website, so that users can download the app directly by visiting the official website.

Here is an open source app store, you can fork and deploy your own app to your own store.

[App Store Source Code Address](https://github.com/BioforestChain/app-center)

## How to create a download link

First, your app will be packaged into two files as follows:

```bash
bundle
├── xxxxx.dweb.zip
└── metadata.json
```

Then you need to upload it to your app's official website (app store).
Suppose I upload it to the root directory of my app's official website:

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip
└── https://dweb.browser.org/metadata.json
```

Then my app's official website only needs to jump as follows to wake up the app's download.

::: code-group

```javascript [open]
window.open(`dweb://install?url=https://dweb.browser.org/metadata.json`);
```

```html [a tag]
<a href="dweb://install?url=https://dweb.browser.org/metadata.json"
  >Click to download</a
>
```

```javascript [href]
location.href = "dweb://install?url=https://dweb.browser.org/metadata.json";
```

:::

To establish a download path, you only need to follow one principle. Use `dweb:install?url=` to construct a download link in the form of `deeplink`.
In this way, users only need to click this (link) button in the Dweb Browser app to jump to the download interface.

## Use QR code

You can also simply put a QR code on your official website to facilitate users who have already installed the Dweb Browser app to use the scanning function that supports `deep_link` to jump to the download.

You only need to generate a QR code with an address like the one below. After the user scans it, he will jump to the download app interface.

```bash
dweb://install?url=https://dweb.browser.org/metadata.json
```
