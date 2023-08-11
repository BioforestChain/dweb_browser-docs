---
title: plaoc serve
category:
  - Service 
tag:
  - Service 
---

启动本地服务，为[开发工具](../developer-tool/index.md)提供Plaoc App 的下载功能；

```bash
plaoc serve xxx
```

## 示例

  以如下的工程目录为例：
  - root            
    - dist          // 工程打包后目录
    - manifest.json // minifest 文件


  ```bash
  plaoc serve ./root/dist --dir ./root
  ```

  会在终端输出如下信息；
  ```bash
  metadata:       http://127.0.0.1:8096/metadata.json
  metadata:       http://172.30.93.43:8096/metadata.json
  ```

  搭配[开发工具](../developer-tool/index.md)实现Plaoc App 本地调试
  
  - 以 macbook m1 为例，通过命令行运行 
  ```bash
  open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json
  ```


  如果Plaoc App工程还在开发阶段，可以通过传递一个 url 给 plaoc serve 同样可以搭配开发工具实现 Plaoc App 本地调试；
  [传递 url 方式的详情](./serve-url.md) 

## 相关链接

  [@plaoc/cli](./index.md)

  [plaoc serve](./serve.md)

  [plaoc bundle](./bundle.md)