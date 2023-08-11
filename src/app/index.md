# Plaoc APP

## 概述

我们定义运行于`dweb_browser`浏览器上面的应用，统一称为`Plaoc App`。
那么首先我们需要了解如何我们的应用打包成一个`.zip`文件。


## 创建一个 Plaoc App 流程；

  以 vue + vite 为例

  - 全局 安装 @vue/cli

    ```bash
      pnpm add -g @vue/cli
    ```

  - 完成后测试看安装是否成功

    ```bash
      vue --version
    ```

    终端输出一下内容表示安装成功；
    
    ```bash
      @vue/cli 5.0.8
    ```
    

  - 创建 vue 工程

    ```bash
      vue create plaoc-app
    ```

  - 在 plaoc-app root目录下创建 manifest.json 文件
    ```
      plaoc-app
      ├── ......其他工程文件
      └── mainifest.json
    ```

  - 安装 @plaoc/cli

    ```bash
      pnpm add @plaoc/cli
    ```
  
  - 更新 package.json 添加指令；

    ```json
      "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        // 添加 plaoc 指令
        "plaoc:serve": "plaoc serve "
      },
    ```

  - 以开发状态启动工程
    
    ```bash
      pnpm serve
    ```

    终端输出

    ```bash
        App running at:
        - Local:   http://localhost:8080/ 
        - Network: http://192.168.2.6:8080/
    ```

  - 用另一个终端执行 plaoc:serve 指令

    ```bash
      pnpm plaoc:serve http://192.168.2.6:8080/
    ```

    终端输出

    ```bash
      metadata:       http://127.0.0.1:8096/metadata.json
      metadata:       http://192.168.2.6:8096/metadata.json
      metadata:       http://198.18.0.1:8096/metadata.json
    ```

  - 使用指令运行 [开发工具app](./developer-tool/index.md)

    以 macbook m1 为例

    ```bash
    open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://192.168.2.6:8096/metadata.json
    ```

  - 在 [开发工具app](./developer-tool/index.md) 就能够实现 plaoc-app 工程的下载和调试了

  - 开发完成后通过 打包 plaoc-app

  - 发布；




## 关键步骤说明


  - 创建 vue 工程

  通过[@vue/cli](https://cli.vuejs.org/zh/guide/) 创建工程；


  - 安装 @plaoc/cli 以来

  ```bash
    pnpm add @plaoc/cli
  ```

  - 添加 `manifest.json`文件

    本配置文件遵循 w3c 的[manifest 标准](https://developer.mozilla.org/en-US/docs/Web/Manifest)。但是忽略了一些繁杂的图片配置，比如`icon`,因此建议直接传递 svg 格式的文件。

    这个配置文件将在用户安装 App 的时候展示，我们直接给出配置文件的示例，[查看详情](../plaoc/interface/bfs-meta-data/index.md);


    ```json
      {
        "id": "game.dweb.waterbang.top.dweb",
        "name": "game",
        "short_name": "vue3-game",
        "description": "这是一个实例应用，包含了dweb_plugins全部组件的实例。",
        "icon": "https://www.bfmeta.info/imgs/logo3.webp",
        "images": [
          "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
          "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
          "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
        ],
        "author": ["bfs", "bfs@bfs.com"],
        "version": "1.0.0",
        "new_feature": "新添加了一键弹弹弹的功能！",
        "home": "https://dweb.waterbang.top",
        "categories": ["games"]
        // ......
      }
    ```

  - 创建本地下载服务

    - [plaoc serve xxx](./plaoc-cli/serve.md)调试已经打包好的Plaoc App 工程

    - [plaoc serve url](./ploac-cli/serve-url.md)调试开发阶段 Plaoc App 工程；

  - 打包 Plaoc App

  我们需要借助打包工具[plaoc cli](./plaoc-cli/bundle.md)来打包我们的 App。


  - 发布

    把[bundle](./plaoc-cli/bundle.md)打包出来的内容，部署到官网上[发布](./release/index.md)；

## 相关链接

  [@plaoc/cli](../plaoc-cli/index.md)

  [开发工具](../developer-tool/index.md)

  [release](../release/index.md)



 