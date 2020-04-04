const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');
module.exports = {
    title: 'cjhyy-study',
    description: '春江花月夜的学习仓库',
    dest:'dist',
    base: '/personal-study/',
    head: headConf,
    plugins: pluginConf,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      lastUpdated:'更新时间',
      nav: navConf
    }
}