const moment = require('moment')

module.exports = {
    title: 'cjhyy-study',
    description: '春江花月夜的学习仓库',
    base: '/PersonalStudy/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              moment.locale(lang)
              return moment(timestamp).format('LLLL')
            }
          }
        ]
      ],
    // configureWebpack: {
    //     resolve: {
    //       alias: {
    //         '@': 'path/to/some/dir'
    //       }
    //     }
    //   },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      lastUpdated:'更新时间',
        nav: [
            { text: '前端', link: 'https://cjhyy.github.io/Prebook/' },
            {
                text: '算法',
                items: [
                    { text: 'leetcode题解', link: 'https://cjhyy.github.io/myleetcode/' }
                ]
            },
            { text: 'Github', link: 'https://github.com/cjhyy' },
        ],
        sidebar: [ {
          title: 'Group 1',   // 必要的
          path: '/main/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
        {
          title: 'Group 2',
          path: '/Browser/',      // 可选的, 应该是一个绝对路径
          collapsable: false,
          children: [ 
            '/Browser/常见浏览器及其内核'
           ]
        }]


    }
}