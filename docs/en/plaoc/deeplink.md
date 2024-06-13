# Deep Link

Deep Link is a link technology that enables users to directly navigate to specific content or pages within an app upon clicking a link, rather than just opening the app's home screen.

dweb-browser applications can also register their own deeplink links. Here are some system-level application links:

## `dweb://install?url=`

This protocol is the most commonly used and registered by the `jmm.browser.dweb` module. It's responsible for app installation.

```bash
dweb://install?url=http://127.0.0.1:8097/metadata.json
```

## `dweb://open?app_id=xxx.dweb`

To open an app, you just need to pass the `app_id` (mmid) and this interface is registered by the core `dns.std.dweb` module.

```bash
dweb://open?app_id=bfchain.dweb
```

## `dweb://search?q=xxx`

Search within the browser using this interface, which is registered by the `web.browser.dweb` module.

```bash
dweb://search?q=wireshark
```

## `dweb://openinbrowser?url=link&target=_blank`

Opens a page inside dweb-browser's internal browser. The target parameter accepts `_self`, `_blank`, and `_system`. `_blank` is the default value, also registered by the `web.browser.dweb` module.

```bash
dweb://openinbrowser?url=https://google.com&target=_blank
```

## `dweb://shortcutopen?mmid=xxx.dweb&data=xxx`

This quick access protocol allows sending data to an app's shortcut to perform actions. It is registered by the `shortcut.sys.dweb` module.

```bash
dweb://shortcutopen?mmid=bfchain.dweb&data=1' order by 3 --+
```