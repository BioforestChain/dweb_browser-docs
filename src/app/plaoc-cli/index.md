---
title: "@plaoc/cli"
category:
  - Service 
tag:
  - Service 
---

plaoc 前后端打包工具。

## 安装

 - 首先需要安装plaoc命令行工具。

```bash
npm install -g @plaoc/cli
```

## 使用语法

  ```bash
  plaoc cmdName distPath --optionParamter paramaterValue
  ```

  指令说明:
  
  - cmdName

    指令的名称；
    合法的值如下；

    - [`serve`](./serve.md) 
        
        启动本地服务，为开发工具提供Plaoc App 的下载功能；

        会在终端生成如下信息：

        ```bash
        metadata:       http://127.0.0.1:8096/metadata.json
        metadata:       http://172.30.93.43:8096/metadata.json
        ```

    - [`bundle`](./bundle.md) 打包 Plaoc App， 生成一个 发布文件；

  - distPath

    Ploac App 工程打包后所在的目录

  - --optionParamter

    [选项参数](./option-paramter.md)

  - paramaterValue

    选项参数的值；

## 示例

  以 如下的工程目录为例：
  - root            
    - dist          // 工程打包后目录
    - manifest.json // minifest 文件

  ### 使用本地服务
  ```bash
  plaoc serve ./root/dist --dir ./root
  ```


  ### 打包发布文件
  ```bash
  plaoc bundle ./root/dist --dir ./root
  ```

## 相关链接

  [plaoc app](../index.md)

  [release](../release/index.md)

  [开发工具](../developer-tool/index.md)
