import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    // issue: https://github.com/antfu/shikiji/issues/86
    noExternal: ['shikiji-twoslash', 'vitepress-plugin-twoslash']
  }
})