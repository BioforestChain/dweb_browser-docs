---
title: App Store  
category: 
  - Service
tag: 
  - Service
---

Your app can be published to someone else's app store, or you can develop your own app mall, or simply place it directly on your app's official website for users to download the app by directly accessing the official website.

### How to create download links

First, your application will be packaged into two files as follows:

```bash
bundle
├── xxxxx.dweb.zip
└── mainifest.json
```

Then you need to upload it to your app's official website (app store). 

Assume I upload it to the root directory of my app's official website:

```bash
├── https://dweb.browser.org/xxxxx.dweb.zip 
└── https://dweb.browser.org/mainifest.json
```

Then the download button code on my app's official website only needs:

```html
<a href="dweb:install?url=https://dweb.browser.org/metadata.json">Click to Download</a> 
```

Establishing download channels only needs to follow one principle - use the `dweb:install?url=` this kind of `deeplink` form to build download links.

This way, users only need to click this (link) button in the dweb-browser app to jump to the download page.