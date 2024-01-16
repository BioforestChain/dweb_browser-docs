// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import TwoSlashFloatingVue from 'vitepress-plugin-twoslash/client'
import 'vitepress-plugin-twoslash/style.css' 
import type { EnhanceAppContext, Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoSlashFloatingVue as any)
  },
} satisfies Theme