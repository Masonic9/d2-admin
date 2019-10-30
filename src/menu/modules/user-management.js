export default {
  path: '/demo/user',
  title: '用户管理',
  icon: 'user',
  children: (pre => [
    { path: `${pre}add`, title: '添加用户', icon: 'plus' },
    {
      title: '图书总览',
      icon: 'archive'
    }
  ])('/demo/book/')
}
