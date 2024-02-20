// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import type { EnhanceAppContext } from 'vitepress'
import "uno.css"

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any)
  },
}