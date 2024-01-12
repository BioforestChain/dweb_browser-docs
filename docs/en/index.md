---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DwebBrowser"
  text: ""
  tagline: A browser that provides distributed network and application attachment.。
  image:
    src: /logo.svg
    alt: dweb
  actions:
    - theme: brand
      text: Intro
      link: /en/intro
    - theme: alt
      text: View on GitHub
      link: https://github.com/BioforestChain/dweb_browser

features:
  - title: Application Interconnection
    details: Local apps communicate through custom dwebServiceWorker
  - title: Follow Web Development Standards
    details: All APIs conform to the development intuition of web developers and adhere to web standards
  - title: High Degree of Freedom
    details: Both frontend and backend are programmable, providing a high degree of coding freedom
  - title: APP Configuration
    details: Configure rules freely. Create a `bfs-metadata.ts` configuration file in your backend root directory. For more details, refer to the backend configuration
  - title: Packaging Configuration
    details: After developing the application, you need to package your frontend and backend applications into a `xxxx.zip` file and upload it anywhere
  - title: One Packaging for Multiple Platform Usage
    details: Support Android、iOS、HarmonyOS、Desktop
---

