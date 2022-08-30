
import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  title: 'plaoc Documentation',
  description: 'BFChain Plaoc',
  theme: defaultTheme({
    // 默认主题配置
    sidebar: [
      {
        text: 'Bottom Bar',
        link: '/plugin/bottomBar/README.md',
      },
      {
        text: 'Top Bar',
        children: ['/plugin/topBar/README.md', '/plugin/topBar/README.md'],
      }
    ]
  }),
}


