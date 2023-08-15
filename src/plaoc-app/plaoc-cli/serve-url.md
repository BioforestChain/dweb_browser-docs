---
title: plaoc serve url
category:
  - Service 
tag:
  - Service 
---

启动本地服务，为[开发工具](../developer-tool/index.md)提供Plaoc App 的下载功能；
但是提供给 serve 的参数是一个 url 字符串

```bash
plaoc serve url
```

## 示例

  以如下的工程目录为例：
  - root            
    - package.json
    - src           
    - manifest.json // minifest 文件


  通过 vite 启动工程
  ```bash
  npx vite --host
  ```

  会在终端输出如下信息：
  ```bash
    VITE v4.3.9  ready in 277 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: http://192.168.2.6:5173/
    ➜  Network: http://198.18.0.1:5173/
    ➜  press h to show help
  ```

  打开另一个终端执行 plaoc cli;
  ```base
    plaoc serve http://localhost:5173/ 
  ```

  会在终端输出如下信息；
  ```bash
    metadata:       http://127.0.0.1:8096/metadata.json
    metadata:       http://192.168.2.6:8096/metadata.json
    metadata:       http://198.18.0.1:8096/metadata.json
  ```

  搭配[开发工具](../developer-tool/index.md)实现Plaoc App 本地调试
  
  - 以 macbook m1 为例，通过命令行运行 
  ```bash
  open /Users/xxxpath/dweb-browser-devtools.app --args -- --start install --url http://127.0.0.1:8096/metadata.json
  ```


  如果Plaoc App工程已经开发完成，可以通过传递一个目录参数 给 plaoc serve 同样可以搭配开发工具实现 Plaoc App 本地调试；
  [传递目录参数方式的详情](./serve.md) 


## 相关链接

  [@plaoc/cli](./index.md)

  [plaoc serve](./serve.md)

  [plaoc bundle](./bundle.md)
