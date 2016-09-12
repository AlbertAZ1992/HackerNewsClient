# HackerNewsClient

## API

#### api使用 [Hacker News API](https://github.com/HackerNews/API)，前端框架使用[Vue.js](https://github.com/vuejs/)

## Demo

#### [Demo地址](http://zhihu.garychang.cn)

##

```
.
├── LICENSE
├── README.md
├── dist
│   └── build.js
├── index.html
├── package.json
├── src
│   ├── components
│   │   ├── app.vue
│   │   ├── articleitem.vue
│   │   ├── asks.vue
│   │   ├── contents.vue
│   │   ├── jobs.vue
│   │   ├── navbar.vue
│   │   ├── news.vue
│   │   ├── shows.vue
│   │   ├── submits.vue
│   │   ├── tops.vue
│   │   ├── useritem.vue
│   │   └── users.vue
│   ├── index.js
│   └── style
│       ├── components
│       ├── font
│       ├── img
│       ├── includes
│       └── style.less
└── webpack.config.js
```

  - `./src/components` 为页面组件
  - `./src/style` 样式开发基于 [Less](https://github.com/less/less.js)，`font` 和 `img` 文件同样在此
  - 打包到 `./dist/build.js`

## Features

  - `vue`和`vue-router`实现前端页面和路由
  - `webpack` 打包构建
  - Style design
  - Mobile-optimized

