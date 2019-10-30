export default {
  path: '/demo/book',
  title: '图书管理',
  icon: 'book',
  children: (pre => [
    { path: `${pre}add`, title: '添加图书', icon: 'plus' },
    {
      title: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '表格 1' }
      ]
    },
    {
      path: `${pre}stats`,
      title: '图书总览',
      icon: 'archive'
    }
  ])('/demo/book/')
}
