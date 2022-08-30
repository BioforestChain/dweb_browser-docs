
import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
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
        link: '/plugin/bottomBar/README.md',
      },
      {
        text: 'Top Bar',
        children: ['/plugin/topBar/README.md', '/plugin/topBar/README.md'],
      }
    ]
  }),
}


