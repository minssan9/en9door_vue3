import Layout from "@/layout/sideLayout";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

const templateRouter =
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: {title: 'PDF', icon: 'pdf'}
      },
      {
        path: '/download',
        component: () => import('@/views/pdf/download'),
        hidden: true
      },
    ]
  }
export default templateRouter
