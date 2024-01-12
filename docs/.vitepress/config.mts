import { defineConfig } from 'vitepress'
import { en } from './en.mjs'
import { zh, search as zhSearch } from './zh.mjs'
import { transformerTwoslash, defaultInfoProcessor } from 'vitepress-plugin-twoslash'
import { bundledThemes } from 'shikiji'

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
    async shikijiSetup(shikiji) {
      await Promise.all(Object.keys(bundledThemes).map(async (theme) => {
        await shikiji.loadTheme(theme as any)
      }))
    },
    codeTransformers: [
      transformerTwoslash({
        processHoverInfo(info) {
          return defaultInfoProcessor(info)
            // Remove shikiji_core namespace
            .replace(/\bshikiji_core\./g, '')
            // Remove member access
            .replace(/^[a-zA-Z0-9_]*(\<[^\>]*\>)?\./, '')
        },
        explicitTrigger: true
      }),
      {
        // Render custom themes with codeblocks
        name: 'shikiji:inline-theme',
        preprocess(code, options) {
          const reg = /\btheme:([\w,-]+)\b/
          const match = options.meta?.__raw?.match(reg)
          if (!match?.[1])
            return
          const theme = match[1]
          const themes = theme.split(',').map(i => i.trim())
          if (!themes.length)
            return
          if (themes.length === 1) {
            // @ts-expect-error anyway
            delete options.themes
            // @ts-expect-error anyway
            options.theme = themes[0]
          }
          else if (themes.length === 2) {
            // @ts-expect-error anyway
            delete options.theme
            // @ts-expect-error anyway
            options.themes = {
              light: themes[0],
              dark: themes[1],
            }
          }
          else {
            throw new Error(`Only 1 or 2 themes are supported, got ${themes.length}`)
          }
          return code
        },
      },

      {
        name: 'shikiji:remove-escape',
        postprocess(code) {
          return code.replace(/\[\\\!code/g, '[!code')
        },
      },
    ],
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
  }
})
