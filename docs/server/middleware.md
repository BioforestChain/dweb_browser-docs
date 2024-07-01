# @plaoc/server/middlewares

<Badges name="@plaoc/server" />
<Platform supports="iOS,Android,MacOS,Windows" />

在 `Plaoc APP` 使用中间件服务。目前对 APP 的三个服务提供了中间件管理。

- `api` 数据服务接口。
- `www` 应用中的所有源文件服务接口。
- `external` 发送给其他模块的服务接口。

## 如何使用

比如我现在需要代理一些路由的接口做转发给二维码识别模块。

```ts
import { Router, jsProcess } from "@plaoc/server/middlewares";

const app = new Router();

app.use(async (event) => {
  console.log("api server:=>", event.request.url, jsProcess.mmid);
  if (event.url.pathname.includes("/barcode-scanning")) {
    const response = await jsProcess.nativeFetch(
      "file://barcode-scanning.sys.dweb/process",
      {
        method: event.method,
        body: event.body,
      }
    );
    if (response.ok) {
      return response;
    } else {
      return Response.json(`decode error:${await response.text()}`);
    }
  }
});

export default app;
```

## 将中间件服务打包到 APP 内部

1. 在使用`plaoc cli`的时候，指定 `-s` 参数，指向可编程后端的源码，就可以将后端打包到 App 之中。

```bash
plaoc server ./dist  -s ./serverDist
```

2. 第一先在根目录的`plaoc.json`(如果没有则创建)的 `middlewares` 字段，指定可编程后端的中间件路径。

```json
{
  "defaultConfig": {
    "lang": "en"
  },
  "middlewares": {
    "www": "middlewares/index.plaoc-www.js",
    "api": "middlewares/index.plaoc-api.js",
    "external": "middlewares/index.plaoc-external.js"
  },
  "redirect": []
}
```

## 示例

示例项目地址：

- [plaoc-App](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plugin-demo)
- [middleware-server](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plaoc-server)
