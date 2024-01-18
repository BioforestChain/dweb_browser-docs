import { defineConfig } from 'vitepress'
import { en } from './en.mjs'
import { zh, search as zhSearch } from './zh.mjs'
import { transformerTwoslash } from 'vitepress-plugin-twoslash'
// import { bundledThemes } from 'shikiji'
import vite from './vite.config.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DwebBrowser",
  description: "一个提供分布式网络 | 应用附着的浏览器。",
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    // async shikijiSetup(shikiji) {
    //   await Promise.all(Object.keys("vitesse-dark" | "").map(async (theme) => {
    //     await shikiji.loadTheme(theme as any)
    //   }))
    // },
    codeTransformers: [transformerTwoslash()]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: "/logo.svg",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BioforestChain/dweb_browser' }
    ],

    search: {
      provider: "local",
      options: {
        locales: { ...zhSearch }
      }
    }
  },
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
  },
  vite
})
