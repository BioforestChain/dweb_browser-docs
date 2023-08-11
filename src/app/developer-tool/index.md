---
title: 开发者工具
category:
  - Service 
tag:
  - Service 
---

Plaoc App 本地开发调试用App；
 

### 1. 首先需要生成 `metadata.json`

  在终端通过 [plaoc serve url](../ploac-cli/-url.md)指令生成 metadata.json
  ```bash
  plaoc serve http://172.30.90.207:5173/
  ```

  会在终端输出如下信息；
  ```bash
  metadata: http://127.0.0.1:8096/metadata.json
  metadata: http://172.30.93.43:8096/metadata.json
  ```

### 2. 运行开发工具

  直接运行，并且把 --url 指定到 metadata.json 就可以进行开发。

  以 macbook m1 为例，通过命令行运行 

  ```bash
  open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json
  ```

  指令说明:

  - `open /Users/xxxpath/dweb-browser-devtools.app`

    是启动开发工具的指令部分

  - `--start install --url http://127.0.0.1:8096/metadata.json`

    是传递给开发工具的参数

  - `http://127.0.0.1:8096/metadata.json`

    是[plaoc serve url](../plaoc-cli/serve-url.md)输出的地址


## 相关链接

  [plaoc app](../index.md)

  [@plaoc/cli](../plaoc-cli/index.md)

  [plaoc serve url](../ploac-cli/serve-url.md)指令

  [plaoc serve](../plaoc-cli/serve.md)指令；