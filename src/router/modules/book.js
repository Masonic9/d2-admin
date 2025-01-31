import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/book',
  name: 'demo-book',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'stats',
      name: `${pre}stats`,
      component: _import('pages/book/stats/stats.vue'),
      meta: { ...meta, title: '图书总览' }
    },
    {
      path: 'add',
      name: `${pre}add`,
      component: _import('pages/book/add/add.vue'),
      meta: { ...meta, title: '添加图书' }
    }
  ])('book')
}
