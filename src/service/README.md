# DwebBrowser 服务端

## 快速开始

首先您应该在您的后端根目录创建一个配置文件名称为`bfsa-metadata.ts`的配置文件，大体的格式如下:

```typescript
import { metaConfig } from "@bfsx/metadata";
// import "./node_modules/index.html";

export default metaConfig({
  manifest: {
    version: "1.0.0",
    name: "ar扫码",
    icon: "mzt.png", // 应用的图片
    engines: {
      dwebview: "~1.0.0"
    },
    // 应用所属链的名称（系统应用的链名为通配符“*”，其合法性由节点程序自身决定，不跟随链上数据）
    origin: "bfchain",
    // 开发者
    author: ["waterbang,water_bang@163.com"],
    // 应用搜索的描述
    description: "Awasome DWeb",
    // 应用搜索的关键字
    keywords: ["VR"],
    // 私钥文件，用于最终的应用签名
    privateKey: "bmr9vohvtvbvwrs3p4bwgzsmolhtphsvvj",
    homepage: "docs.plaoc.com",
    // 应用入口，可以配置多个，其中index为缺省名称。
    // 外部可以使用 DWEB_ID.bfchain (等价同于index.DWEB_ID.bfchain)、admin.DWEB_ID.bfchain 来启动其它页面
    enters: ["index.html"],
    //本次发布的信息，一般存放更新信息
    releaseNotes: "xxx",
    //  本次发布的标题，用于展示更新信息时的标题
    releaseName: "xxx",
    // 发布日期
    releaseDate: "xxx",
  },
  //  这里配置的白名单将不被拦截
  whitelist: ["https://unpkg.com", "https://cn.vitejs.dev"],
  // 定义路由，这里与enter是完全独立的存在。
  // 外部可以使用 admin.DWEB_ID.bfchain/routeA 来传入参数
  dwebview: {
    importmap: [
      {
        url: "/getBlockInfo",
        response:
          "https://62b94efd41bf319d22797acd.mockapi.io/bfchain/v1/getBlockInfo",
      },
      {
        url: "/app/bfchain.dev/index.html",
        response: "/app/bfchain.dev/index.html",
      },
      {
        url: "/api/*",
        response: "./api/*",
      },
     
    ],
  },
})

```


您的所有权限配置和路由映射都在这个文件下声明。

### 启动前端项目

前端启动的时候需要传入您的配置文件,大体格式如下：

```typescript
// import metaData from "./bfsa-metadata.ts"; // deno
import metaData from "./bfsa-metadata"; // typescript

import { DWebView } from "@bfsx/core";

const webView = new DWebView(metaData);
// 多入口指定，可以配置前端启动的多入口，需要在bfsa-metadata的enters下配置。
webView.activity("index.html");

```
