// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import TwoSlashFloatingVue from 'vitepress-plugin-twoslash/client'
import 'vitepress-plugin-twoslash/style.css' 
import type { EnhanceAppContext } from 'vitepress'
import "uno.css"

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoSlashFloatingVue as any)
  },
}