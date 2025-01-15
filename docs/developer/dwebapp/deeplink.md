# Deep Link

Deep Link 是一种链接技术，它允许用户在点击某个链接时直接跳转到应用程序内的特定内容或页面，而不仅仅是打开应用的首页。

dweb-browser 内部的应用也可以注册自己的 deeplink 链接，下面先展示一些系统级的应用链接。

## `dweb://install?url=`

这个协议是最常用的，由`jmm.browser.dweb` 模块注册，这个接口负责应用的安装。

```bash
dweb://install?url=http://127.0.0.1:8097/metadata.json
```

## `dweb://open?app_id=xxx.dweb`

这个接口可以打开某个 app，只需要传递`aap_id`(mmid)，由核心的`dns.std.dweb` 模块注册。

```bash
dweb://open?app_id=bfchain.dweb
```

## `dweb://search?q=xxx`

在浏览器进行搜索,由`web.browser.dweb`模块注册。

```bash
dweb://search?q=wireshark
```

## `dweb://openinbrowser?url=link&target=_blank`

在 dweb-browser 内部的浏览器打开一个页面，target 参数允许传递`_self`,`_blank`，`_system`。 `_blank` 是默认值。
也是由`web.browser.dweb`注册。

```bash
dweb://openinbrowser?url=https://google.com&target=_blank
```

## `dweb://shortcutopen?mmid=xxx.dweb&data=xxx`

快速入口协议，可以给某个 app 的快捷入口发送一些数据，去做一些事情。由`shortcut.sys.dweb`模块注册。

```bash
dweb://shortcutopen?mmid=bfchain.dweb&data=1' order by 3 --+
```
