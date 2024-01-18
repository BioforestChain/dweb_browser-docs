---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DwebBrowser"
  text: ""
  tagline: 一个提供分布式网络 | 应用附着的浏览器。
  image:
    src: /logo.svg
    alt: dweb
  actions:
    - theme: brand
      text: 介绍
      link: /intro
    - theme: alt
      text: GitHub上查看
      link: https://github.com/BioforestChain/dweb_browser

features:
  - title: 应用互联
    details: 本地app通过自定义dwebServiceWorker通信
  - title: 遵循web开发规范
    details: 所有的api符合web开发人员的开发直觉，遵循web标准
  - title: 高自由度
    details: 前后端都可编程，提供高度的编码自由度
  - title: APP配置
    details: 自由配置规则，您的后端根目录创建一个`bfs-metadata.ts`的配置文件，具体查看后端配置
  - title: 打包配置
    details: 在开发完应用的时候需要将您的前后端应用打包成`xxxx.zip`文件，然后上传到任何地方
  - title: 一次打包，多平台使用
    details: 支持 Android、iOS、HarmonyOS、Desktop
---
