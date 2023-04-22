/** When your routing table is too long, you can split it into small modules **/

const commonRouter = [
  {path: 'main-about', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/main/main-about'), name: 'Main About', meta: {title: 'Main About'}},

  //common
  {path: 'profile', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/login/profile'), hidden: true},
  {path: 'main/class-info', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-class'), name: 'Class', meta: {title: 'Class'}},
  {path: 'main/teacher', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-teacher'), name: 'Teacher', meta: {title: 'Teacher'}},
  {path: 'main/content', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-content'), name: 'Content', meta: {title: 'Content'}},
  {path: 'main/guide/call', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-call-guide'), name: 'Call Guide', meta: {title: 'Call Guide'}},
  {path: 'main/guide/register', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-register-guide'), name: 'Register Guide', meta: {title: 'Register Guide'}},

  //board
  // {path: 'board', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/info/info-board'), name: 'Bulletin Board', meta: {title: 'Bulletin Board'}},



  //error
  {path: '/404', component: () => import(/* webpackChunkName: "common" */'@/views/error-page/404'), hidden: true},
  {path: '/401', component: () => import(/* webpackChunkName: "common" */'@/views/error-page/401'), hidden: true}
]


export default commonRouter
