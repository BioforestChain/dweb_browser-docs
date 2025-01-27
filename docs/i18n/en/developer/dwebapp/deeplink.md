# Deep Link

Deep Link is a linking technology that allows users to directly jump to specific content or pages within an application when clicking a link, rather than just opening the app's homepage.

Apps inside dweb-browser can also register their own deeplink links. Below are some system-level application links.

## `dweb://install?url=`

This protocol is the most commonly used, registered by the `jmm.browser.dweb` module, which is responsible for app installation.

```bash
dweb://install?url=http://127.0.0.1:8097/metadata.json
```

## `dweb://open?app_id=xxx.dweb`

This interface can open an app by passing the `app_id` (mmid), registered by the core `dns.std.dweb` module.

```bash
dweb://open?app_id=bfchain.dweb
```

## `dweb://search?q=xxx`

Search within the browser, registered by the `web.browser.dweb` module.

```bash
dweb://search?q=wireshark
```

## `dweb://openinbrowser?url=link&target=_blank`

Open a page in the internal browser of dweb-browser. The target parameter allows passing `_self`, `_blank`, `_system`. `_blank` is the default value.
Also registered by `web.browser.dweb`.

```bash
dweb://openinbrowser?url=https://google.com&target=_blank
```

## `dweb://shortcutopen?mmid=xxx.dweb&data=xxx`

Quick entry protocol, which can send some data to the shortcut entry of an app to perform certain actions. Registered by the `shortcut.sys.dweb` module.

```bash
dweb://shortcutopen?mmid=bfchain.dweb&data=1' order by 3 --+
```
