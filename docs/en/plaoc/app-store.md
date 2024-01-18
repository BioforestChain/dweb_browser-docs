---
outline: deep
---

# App Store

Your app can be published to other people's app stores, or you can develop your own app store, or simply put it directly on your app's official website, allowing users to download the app directly by visiting the official website.

## How to create a download link

It is preferred that your application will package two files as follows:

```bash
  bundle
  ├── xxxxx.dweb.zip
  └── metadata.json
```

Then you need to upload it to your app official website (app store).
Suppose I upload to the root directory of my app official website:

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip
└── https://dweb.browser.org/metadata.json
```

Then I only need the following code from the official app website to the download button:

```html
<a href="dweb://install?url=https://dweb.browser.org/metadata.json">click download</a>
```

There is only one principle to follow when establishing a download path. Use `dweb:install?url=` to build a download link in the form of `deeplink`.
In this way, users only need to click this (link) button in the Dweb Browser app to jump to the download interface.

## Use QR code

You can also simply put a QR code on your official website to facilitate users who have installed the Dweb Browser app to use the scanning function that supports `deep_link` to jump to download.

You only need to generate a QR code with an address similar to the one below. After the user scans, they will jump to the interface for downloading the app.

```bash
dweb://install?url=https://dweb.browser.org/metadata.json
```
