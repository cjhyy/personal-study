const moment = require('moment');


moment.locale("zh-cn");

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    collapseList: [
      "/frontend/javascript/"
    ]
  }
};