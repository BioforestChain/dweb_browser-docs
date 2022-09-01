
import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  base: "/plaoc-docs/",
  title: 'plaoc Documentation',
  description: 'BFChain Plaoc',
  theme: defaultTheme({
    // 默认主题配置
    repo: 'https://github.com/BioforestChain/plaoc',
    docsRepo: 'https://github.com/BioforestChain/plaoc-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    sidebar: [
      {
        text: 'Navigation Bar',
        link: '/plugin/bottomBar/',
      },
      {
        text: 'Top Bar',
        children: ['/plugin/topBar/', '/plugin/topBar/'],
      }
    ]
  }),
}


