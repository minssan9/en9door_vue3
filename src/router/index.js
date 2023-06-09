// Composables
import { createRouter, createWebHistory } from 'vue-router'

import commonRouter from "@/router/modules/common";
// import adminRouter from "@/router/modules/admin";
// import en9doorRouter from '@/router/modules/en9door'
// import paymentRouter from "@/router/modules/payment";


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/sideLayout'),
    children: [
      {path: '/', name: 'Main', component: () => import(/* webpackChunkName: "common" */'@/views/main/main'), meta: {title: 'English Door'}},
      {path: 'login', name:'login', component: () => import(/* webpackChunkName: "common" */'@/views/login/index'), hidden: true},
      ...commonRouter,
      // {
      //   path: 'default',
      //   component: () => import('@/layouts/default/Default.vue'),
      // }


      // ...commonRouter,
      // ...en9doorRouter,
      // ...paymentRouter,
      // ...adminRouter

      // {path: '/oauth/redirect', component: () => import('@/views/login/redirect'), hidden: true},
      // {path: '/logout', component: () => import('@/views/login/logout'), hidden: true},
      // // 404 page must be placed at the end !!!
      // {path: "/:catchAll(.*)", redirect: '/404', hidden: true}
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
