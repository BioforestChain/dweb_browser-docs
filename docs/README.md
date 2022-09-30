# Plaoc

这是一个操作系统运行时，BFS资产，体现在native是浏览器的形式。主要服务于 SPA 开发者。

## APP配置

后端需要在您的根目录创建一个`bfsa-metadata.ts`的配置文件，具体查看[后端配置](./service/README.md)


## 打包配置

在开发完应用的时候需要将您的前后端应用打包成`xxxx.bfsa`文件，然后上传到[应用商城](https://shop.plaoc.com)。
打包配置详情查看[bundle](./systemApp/bundle/README.md)。

::: tip
`xxxx.bfsa`前面的`xxxx`为APP上链申请的DAPPID,方便对APP进行认证和溯源。
:::
