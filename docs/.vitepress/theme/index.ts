// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import TwoSlashFloatingVue from 'vitepress-plugin-twoslash/client'
import './style.css'
import type { EnhanceAppContext } from 'vitepress'

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoSlashFloatingVue)
  },
}